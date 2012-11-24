<article class="clearfix">
<header><h1><?php echo WBG_HELPER::insertCatTitle() ?></h1></header>
<aside id="googleMap">
	<iframe width="350" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.co.uk/maps?ie=UTF8&amp;cid=9929042873503584236&amp;q=Beauty+by+Hanna+at+OMG+Hair+and+Beauty&amp;gl=GB&amp;hl=en&amp;ll=51.532059,-0.041296&amp;spn=0.006295,0.006295&amp;t=m&amp;iwloc=A&amp;output=embed"></iframe><br/>
	<div><a target="_blank" href="https://maps.google.co.uk/maps?q=Beauty+by+Hanna+at+OMG+Hair+and+Beauty&hl=en&ll=51.53363,-0.04107&spn=0.006327,0.01929&cid=9929042873503584236&gl=GB&t=m&z=16&iwloc=A">View in a larger map</a></div>
	<div class="vcard">
		<div class="org">OMG Hair And Beauty In Bow Wharf LTD</div>
		<div class="adr">
			<div class="street-address">211 Grove road<br/>BOW WHARF</div>
			<span class="postal-code">E3 5SN</span>
			<span class="locality">London</span>
			<div class="country-name">United Kingdom</div>
		</div>
		<div class="fn">Hanna </span>
		<span class="tel">07542124477</span>
	</div>
</aside>
<?php

	global $_CFG;
	global $web;

	include_once( $_CFG['path_to_modules'].'components/validation.php');

	$data = @unserialize( file_get_contents( $_CFG['path_to_modules'].'input/onetext/__saved_data_'.$web->active_category) );
	if ($data['text'])
	{
		$imageMap = WBG_HELPER::insertImage($data['text_img'], ' class="f-left" ');
		echo WBG_HELPER::transferToXHTML('
			<div class="page-text clear-block">
				'.($data['title'] ? '<h2>'.$data['title'].'</h2>': '').'
				'.($data['text_img'] ? WBG_HELPER::insertImage($data['text_img'], 'class="f-left"', null, 1) : '').
				$data['text'].'
			</div>');
	}
?>

<?if( isset($_POST['send']) && (!validateName($_POST['name']) || !validateEmail($_POST['email']) || !validateMessage($_POST['message']) ) ):?>
		<div id="error">
			<ul>
				<?if(!validateName($_POST['name'])):?>
					<li><strong>Invalid Name:</strong> Please type name with more than 2 letters!</li>
				<?endif?>
				<?if(!validateEmail($_POST['email'])):?>
					<li><strong>Invalid E-mail:</strong> Please type name with more than 2 letters!</li>
				<?endif?>
				<?if(!validateMessage($_POST['message'])):?>
					<li><strong>Ivalid message:</strong> Please type a message with at least with 10 letters</li>
				<?endif?>
			</ul>
		</div>
	<?elseif(isset($_POST['send'])):?>
		<?php
			$header = "From: www.beautybyhanna.com <omgbeautybyhanna@gmail.com>\r\n";
			mail(WBG::message('mailto', null, 1), 'Contact form', print_r($_POST, 1), $header );
			//mail('surfer@inbox.lv', 'Contact form', print_r($_POST, 1), $header );
		?>
		<div id="error" class="valid">
			<strong>Thanks for submiting the form!</strong> I will get back to you soon.</li>
		</div>
<?endif?>

<form method="post" id="customForm" action="">
	<div>
		<label for="name">Name</label>
		<input id="name" name="name" type="text" />
		<span id="nameInfo"></span>
	</div>
	<div>
		<label for="email">E-mail</label>
		<input id="email" name="email" type="text" />
		<span id="emailInfo"></span>
	</div>
	<div>
		<label for="message">Message</label>
		<textarea id="message" name="message" cols="" rows=""></textarea>
	</div>
	<div>
		<input id="send" name="send" type="submit" value="Send" />
	</div>
</form>
</article>
<script type="text/javascript" src="js/plugins/validation.js"></script>
<script type="text/javascript">
	$(document).ready(function(){
		$('#customForm').formValidation({
			name: {
				type: 'text',
				selector: '#name',
				helperSelector: '#nameInfo'
			},
			email: {
				type: 'email',
				selector: '#email',
				helperSelector: '#emailInfo'
			},
			comment: {
				type: 'textarea',
				selector: '#message',
				helperSelector: '#message'
			}
		});
	});
</script>
