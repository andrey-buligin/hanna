<?php
	$textlist   = $templateVars['textlist'];
	$wbgLayot   = $templateVars['wbg_layout'];
	$urlManager = $templateVars['urlManager'];
	$articles   = $textlist->getList();
?>
<div id="blog-page">
	<h1><?php echo $textlist->getPageTitle(); ?></h1>
	<?php if ( is_array($articles) ):?>
	<?php
			foreach ($articles as $articleKey => $article)
			{
				$templateVars['article']     = $article;
				$templateVars['article_key'] = $articleKey;
				$templateVars['urlManager']  = $urlManager;
	          	$wbgLayot->includeTemplate( 'modules/articles-list-item', $templateVars );
			}
	?>
	<?php endif;?>
	<?php echo $textlist->getPageListHtml(); ?>
</div>