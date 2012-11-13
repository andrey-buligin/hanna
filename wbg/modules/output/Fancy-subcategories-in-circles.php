<article id="onetextContent">
	<header>
		<h1><?php echo WBG_HELPER::insertCatTitle() ?></h1>
	</header>
	<?php
		global $web;

		$currentCatId  = $web->active_category;
		$subcategories = WBG_HELPER::getCatChilds($currentCatId);
	?>
	<?php if ($subcategories): ?>
		<ul class="ch-grid">
			<?php
				foreach ($subcategories as $key => $cat) :
					$properties = $cat['properties'];
					$title      = $cat['title'];
					$text       = WBG_HELPER::getProperty($properties, 'category_text');
					$image      = WBG_HELPER::getProperty($properties, 'category_image');

					if ( $image['resized'][1] ) {
						$frontImageSrc = $image['resized'][1];
					} else {
						$frontImageSrc = $image['src'];
					}
			?>
			<li class="ch-item">
				<div class="ch-info"></div>
				<div class="ch-info-front" style="background-image: url('images/<?php echo $frontImageSrc;?>')"></div>
				<div class="ch-info-back">
					<a href="<?php echo WBG::crosslink($cat['id']);?>">
						<h3><?php echo $title; ?></h3>
						<p><?php echo $text; ?></p>
					</a>
				</div>
			</li>
			<?php endforeach; ?>
		</ul>
	<?php endif; ?>
</article>
