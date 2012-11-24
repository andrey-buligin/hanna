<?php

	$bookData = @unserialize(file_get_contents(dirname(__FILE__).'/../input/book_input/__saved_data_'.$web->active_category));
	$pages    = array();

	if ($bookData['pages']) {
		$pages      = $bookData['pages'];
		$pagesCount = ceil(count($pages) / 2);
	}

	if ($bookData['last_page_text']) {
		$textOnLastPage = $bookData['last_page_text'];
	}

?>
<header><h1><?php echo WBG_HELPER::insertCatTitle();?></h1></header>
<section class="main">
	<nav class="bb-custom-nav clear">
		<a id="bb-nav-prev" href="#">Previous</a>
		<a id="bb-nav-next" href="#">Next</a>
	</nav>
	<div class="bb-custom-wrapper">
		<div id="bb-bookblock" class="bb-bookblock">
			<?php for ($i = 0; $i < $pagesCount; $i++) : ?>
				<?php
					$leftPage  = array_shift($pages);
					$rightPage = array_shift($pages);
				?>
				<div class="bb-item">
					<div class="bb-custom-content">
						<div class="folder">
							<div class="folder-cover"><?php echo $leftPage;?></div>
						</div>
						<?php if ($rightPage) : ?>
						<div class="folder right">
							<div class="folder-cover"><?php echo $rightPage;?></div>
						</div>
						<?php else : ?>
							<div class="bb-custom-circle"></div>
						<?php endif; ?>
					</div>
				</div>
			<?php endfor; ?>
			<div class="bb-item">
				<div class="bb-custom-content">
					<div class="bb-custom-last">
						<?php echo $textOnLastPage; ?>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
	<script type="text/javascript" src="js/plugins/jquerypp.custom.js"></script>
    <script type="text/javascript" src="js/plugins/jquery.bookblock.js"></script>
	<script type="text/javascript">
		$(function() {

			var BookPage = (function() {

				var config = {
					$bookBlock : $( '#bb-bookblock' ),
					$navNext   : $( '#bb-nav-next' ),
					$navPrev   : $( '#bb-nav-prev' ),

					// init bookBlock!
					bb: $('#bb-bookblock').bookblock({
						speed 		: 700,
						easing		: 'ease-out',
						perspective	: 1500,
						shadowSides	: 0.8,
						shadowFlip	: 0.7
					})
				},

				init = function() {

					config.$navNext.on( 'click', function() {
						config.bb.next();
						return false;
					});

					config.$navPrev.on( 'click', function() {
						config.bb.prev();
						return false;
					});

					// swipe event : http://jquerypp.com/#swipe
					config.$bookBlock.children().on( {
						'swipeleft' : function( event ) {
							config.bb.next();
							return false;

						},
						'swiperight' : function( event ) {
							config.bb.prev();
							return false;
						}
					});

				}

				return { init : init };

			})();

			BookPage.init();

		});
	</script>
