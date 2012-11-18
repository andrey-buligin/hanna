<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <!-- <meta name="viewport" content="width=device-width"> -->
    <meta name="viewport" content="width=1024px">

	<title><?php WBG::variable("page_title",1);?></title>
	<meta name="description" content="<?php echo WBG_HELPER::generatePageMetaTag('desciption');?>" />
	<meta name="keywords" content="<?php echo WBG_HELPER::generatePageMetaTag('keywords');?>" />

	<link href='http://fonts.googleapis.com/css?family=Rochester' rel='stylesheet' type='text/css' />

	<?php global $_CFG; if ($_CFG['Environment'] == 'live') :?>
		<link rel="stylesheet" href="css/hanna.css">
	<?php else: ?>
		<link rel="stylesheet" href="css/normalize.css">
	    <link rel="stylesheet" href="css/main.css">
		<link rel="stylesheet" type="text/css" href="<?php echo $this->getSkinCssUrl('main.css');?>" />
		<?php $this->loadGalleryRequiredCssFiles(); ?>
	<?php endif; ?>

	<script type="text/javascript" src="js/modernizr.js"></script>

	<?php global $_CFG; if ($_CFG['Environment'] == 'live') :?>
		<script type="text/javascript" src="js/hanna.min.js"></script>
	<?php else: ?>
		<script type="text/javascript" src="js/jquery-1.8.2.min.js"></script>
		<?php $this->loadGalleryRequiredJsFiles();?>
		<script type="text/javascript" src="js/plugins/jquery.easing.1.3.js"></script>
		<script type="text/javascript" src="<?php echo $this->getSkinJsUrl('common.js')?>"></script>
	<?php endif; ?>

	<script type="text/javascript">
    	Modernizr.load({
          test: Modernizr.touch,
          yep : 'js/plugins/jquery.animate-enhanced.min.js'
        });
    </script>

    <script type="text/javascript" src="http://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5095a7cf6d2d8dc2&amp;async=1"></script>

    <?php global $_CFG; if ($_CFG['Environment'] == 'live') :?>
		<script type="text/javascript">
	      var _gaq = _gaq || [];
	      _gaq.push(['_setAccount', 'UA-36089727-1']);
	      _gaq.push(['_trackPageview']);

	      (function() {
	        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	      })();
	    </script>
    <?php endif; ?>

</head>
<?php WBG_HELPER::generatePageTitle();?>