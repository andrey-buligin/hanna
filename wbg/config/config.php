<?php
/**
 * @desc Eto glavnij config Webadmina
 */

	$_CFG['ERROR_REPORTING'] = "E_ALL";
	error_reporting(E_ALL);

	$_CFG['START_CAT'] = 5;

// *******************************************************************************
// <<< Website languages.  Starts with 1 !!!!! 0 - is reserved !!!

	$_CFG['language_default'] = 3; // Language opens in WebGooRoo by default

	$_CFG['language_prefix'][1] = "rus";
	$_CFG['language_prefix'][2] = "lat";
	$_CFG['language_prefix'][3] = "eng";


	$_CFG['language_name'][1] = "Russian";
	$_CFG['language_name'][2] = "Latvian";
	$_CFG['language_name'][3] = "English";


// >>> Website languages
// *******************************************************************************
// <<< Pathes

	$_CFG['path_url']			= "/"; // Esli root to "/";

	$_CFG['cms_name']			= 'wbg';
	list($_CFG['path_server'])	= explode($_CFG['cms_name'], dirname(__FILE__));

	$_CFG['path_url_full']		= $_SERVER['SERVER_NAME'] . $_CFG['path_url'];
	$_CFG['path_to_cms'] 		= $_CFG['path_server'] . $_CFG['cms_name'].'/';
	$_CFG['path_to_templates'] 	= $_CFG['path_to_cms'] . 'templates/';
	$_CFG['path_to_modules'] 	= $_CFG['path_to_cms'] . 'modules/';
	$_CFG['path_to_translations'] = $_CFG['path_to_cms'] . "core/translations/";

    $_CFG['path_to_images']	    = $_CFG['path_server'] ."images";
	$_CFG['url_to_images'] 	    = $_CFG['path_url'] . 'images/';
	
	$_CFG['url_to_cms']			= $_CFG['path_url'] . $_CFG['cms_name']."/";
	$_CFG['url_to_modules'] 	= $_CFG['url_to_cms'] . 'modules/';
	$_CFG['url_to_templates'] 	= $_CFG['url_to_cms'] . 'templates/';

	$_CFG['url_to_skin']		= $_CFG['url_to_cms'] . "core/skins/default/";
	$_CFG['path_to_skin']		= $_CFG['path_to_cms']. "core/skins/default/";

	$_CFG['url_to_cms_full']	= "http://".$_SERVER['HTTP_HOST'] . $_CFG['url_to_cms'];

// >>> Pathes
// *******************************************************************************
// <<< DB

	$_CFG['sql']['host'] 		= "localhost";
	$_CFG['sql']['login'] 		= "andreybu_andrey";
	$_CFG['sql']['password'] 	= "TmS@86![ilSV";
	$_CFG['sql']['database'] 	= "andreybu_common_galleries";

	$sql_link = mysql_connect($_CFG['sql']['host'],$_CFG['sql']['login'],$_CFG['sql']['password']) or WBG_GLOBAL::wbg_die("Can't connect to database [".$_CFG['sql']['database']."] on [".$_CFG['sql']['host']."] with username [".$_CFG['sql']['login']."]");
	mysql_select_db ($_CFG['sql']['database'],$sql_link) or die ("Cant change database");

// >>> DB
// *******************************************************************************
// <<< Degug nastrojki

		$_CFG['debug_mode_ip'][0] = "::1";


// >>> Degug nastrojki
// *******************************************************************************


	$_CFG['cache_mode'] = 0;
	$_CFG['cache_directory']	= $_CFG['path_to_cms']. "tmp/cache/";

	include_once(dirname(__FILE__).'/config.additional.php');
	include_once(dirname(__FILE__)."/../core/global_functions.php");

// *******************************************************************************

	$_CFG['interface_language'][0] = "Russian";
	$_CFG['interface_language'][1] = "Latvian";
	$_CFG['interface_language'][2] = "English";

	date_default_timezone_set("Etc/GMT");

?>