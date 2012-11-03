<?php

class comments {

	static $doc_id 	= 0;
	static $saved 	= 0;
	static $sql_table_name = '';
	static $sql_table_from = '';
	static $inited = false;
	static $error_on_comment = array();

	/**
	 * Initialization
	 *
	 * @param unknown_type $id
	 * @param unknown_type $sql_table_name
	 */
	function init($id, $sql_table_name) {

		//--------------------------------------------------------------------------------------
		// [[[ Captcha include

			include_once(dirname(__FILE__).'/../components/recaptcha.php');

		// ]]] Captcha include
		//--------------------------------------------------------------------------------------

		//if (self::$inited == false){
			self::$doc_id 			= $id;
			self::$sql_table_name	= '_mod_comments';
			self::$sql_table_from	= $sql_table_name;
			self::$inited 			= true;
		//}

		if (isset($_POST['comment'])){
			self::check_comment_data();
			if (self::$error_on_comment){ // $sli oshibka bila
				foreach ($_POST as $key=>$value) {
					$_POST[$key] = $value;
				}
			} else {
				self::insert_comment($_POST['name'], $_POST['email'], $_POST['comment']);
				$_POST = array();
			}
		}
	}

	/**
	 * Error checking
	 *
	 */
	function check_comment_data() {

		if (!trim($_POST['comment'])){
			self::$error_on_comment['comment'] = 1;
		}
		if (!trim(@$_POST['name'])){
			self::$error_on_comment['name'] = 1;
		}
		if (!trim(@$_POST['email'])){
			self::$error_on_comment['email'] = 1;
		}

		$recaptcha = new Recaptcha();
 		$valid = $recaptcha->validateRecaptcha( $_POST['recaptcha_challenge_field'], $_POST['recaptcha_response_field'] );
		if (!$valid)
			self::$error_on_comment['captcha'] = 1;

		//ban list
		$bans = file(dirname(__FILE__).'/../input/edit_comments/blacklist');
		$newBans = array();
		if ($bans) {
			foreach ($bans as $key => $value) {
				if ($value) $newBans[] = trim($value);
			}
		}
		if (in_array($_SERVER['REMOTE_ADDR'], $newBans)){
			self::$error_on_comment['banned'] = 1;
		}
	}

	/**
	 * form showing
	 *
	 * @param unknown_type $id
	 * @return unknown
	 */
	function show_form($id) {

		self::_check_need_data();

		$recaptcha = new Recaptcha();

		$msg   = '<div class="pleaseFillForm">'.WBG::message("comments_welcome", null,1).'</div>';
		$show  = false;
		$count = @mysql_result(mysql_query("SELECT count(*) FROM ".self::$sql_table_name." WHERE doc_id=".$id),0,0);

		if ( self::$error_on_comment ) {
			$show = true;
			$msg  .= '<div class="alertBox">'.WBG::message("comments_please_check_fields", null,1).'</div>';
		} elseif ( self::$saved == 1 ) {
			$msg  .= '<div class="alertBox">'.WBG::message("comments_succesufuly_added", null,1).'</div>';
		}

		return '
			<form method="post" style="'.($show?'':'display:none').'" action="#commentForm" name="" id="commentForm" class="clear">
				'.(@self::$error_on_comment['banned']?'<div id="banned" style="padding:10px 3px">You are banned!</div>':'').'
				'.$msg.'
				<div class="input-box">
					<label for="nameField">'.WBG::message("comments_name", null, 1).' <span>*</span></label>
					<input class="input'.(@self::$error_on_comment['name']?' error':'').'" type="text" size="30" name="name" value="'.@$_POST['name'].'" id="nameField"/>
				</div>
				<div class="input-box">
					<label for="emailField">'.WBG::message("comments_email", null, 1).' <span>*</span></label>
					<input class="input'.(@self::$error_on_comment['email']?' error':'').'" type="text" size="30" name="email" value="'.@$_POST['email'].'" id="emailField"/>
				</div>
				<div class="input-box">
					<label for="commentField">'.WBG::message("comments_comment", null, 1).' <span>*</span></label>
					<textarea rows="4" cols="20" name="comment" class="long'.(@self::$error_on_comment['comment']?' error':'').'" id="commentField">'.@$_POST['comment'].'</textarea>
				</div>
				<div class="input-box captchaCode">
					<label for="comentField" class="'.(@self::$error_on_comment['captcha']?'error':'').'">'.WBG::message("comments_code", null, 1).' <span>*</span></label>
					<div class="captcha-box">
						'.$recaptcha->getRecaptchaHTML().'
					</div>
				</div>
				<div class="input-box">
					<input class="submit-button" name="submit" value="'.WBG::message("comments_add", null, 1).'" type="submit" />
				</div>
			</form>';
	}

	/**
	 * Feedback inserting
	 *
	 * @param unknown_type $name
	 * @param unknown_type $email
	 * @param unknown_type $comment
	 */
	function insert_comment($name, $email, $comment) {

		self::_check_need_data();

		$SQL_str = "INSERT INTO ".self::$sql_table_name."
						SET
							active			= '1',
							doc_id			= '".self::$doc_id."',
							sql_table_name 	= '".self::$sql_table_from."',
							name 			= '".mysql_escape_string($name)."',
							email			= '".mysql_escape_string($email)."',
							text 			= '".mysql_escape_string($comment)."',
							ip				= '".$_SERVER['REMOTE_ADDR']."',
							url				= 'http://".$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']."',
							datums			= '".time()."'";
		mysql_query($SQL_str);
		self::$saved = 1;

		//$SQL_str = "UPDATE  ".self::$sql_table_name." SET  comments_count = comments_count + 1 WHERE id=".self::$doc_id;
		///mysql_query($SQL_str);
		//echo mysql_error();

	}

	/**
	 * Feedbkack showing
	 *
	 * @return unknown
	 */
	function show_comments($id = '', $table = '') {

		self::_check_need_data();

		$HTML = '';
		$x 	  = 0;
		$SQL_str = "SELECT * FROM ".self::$sql_table_name." WHERE active=1 AND doc_id = '".self::$doc_id."' and sql_table_name='".$table."' order by datums ASC";
		$sql_res = mysql_query($SQL_str);
		while ($arr = @mysql_fetch_assoc($sql_res)){

			$img   = '';
			$class = ($x++ %2 == 0 ? 'white' : 'grey');

			$HTML .= '
				<div class="item '.$class.'">
					<div class="author"><a href="'.($arr['email']?'mailto:'.$arr['email']:'').'">'.$arr['name'].'</a></div>
					<div class="date">commented on '.date('d.m.Y. at H:i', $arr['datums']).'</div>
					<p class="commentText">'.$arr['text'].'</p>
				</div>';
		}

		if ($HTML) $HTML = '<h4>Comments</h4><div id="postedComments">'.$HTML.'</div>';
		return '<div id="writeComment"><a href="#" id="formOpener">'.WBG::message("write_comment",null,1).'</a></div>'.$HTML;
	}

	/*
	 * Show count of feedbacks
	 *
	 * @param unknown_type $id
	 * @param unknown_type $table
	 * @return unknown
	 */
	function showCommentsCount($id = null, $table = null) {
		$SqlStr = "SELECT count(*) FROM ".self::$sql_table_name." WHERE active=1 AND sql_table_name='".$table."' AND doc_id=".$id;
		return mysql_result(mysql_query($SqlStr),0,0);
	}

	function _check_need_data() {
		if (self::$inited == false){
			echo "NO INITED !!!!!";
		}
	}
}
?>