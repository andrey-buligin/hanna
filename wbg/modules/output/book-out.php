<?php

?>
<header><h1>Pricelist</h1></header>
<section class="main">
	<nav class="bb-custom-nav clear">
		<a id="bb-nav-prev" href="#">Previous</a>
		<a id="bb-nav-next" href="#">Next</a>
	</nav>
	<div class="bb-custom-wrapper">
		<div id="bb-bookblock" class="bb-bookblock">
			<div class="bb-item">
				<div class="bb-custom-content">
					<div class="folder">
						<div class="folder-cover">
							<div class="treatment">
								<h4>Semi-Permanent Eyelash Extensions</h4>
								<dl>
									<dt>Natural set <span>(1h 15min)</span></dt>
									<dd>£49</dd>
									<dt>Glamorous set <span>(1h 45min)</span></dt>
								    <dd>£65</dd>
								    <dt>Dramatic 3D set <span>(2h 30min)</span></dt>
								    <dd>£95</dd>
								    <dt>Lash touch up <span>(1h)</span></dt>
								    <dd>£35</dd>
								</dl>
							</div>
							<div class="treatment">
								<h4>Eye Treatments </h4>
								<dl>
									<dt>Eyelash tint</dt>
									<dd>£12</dd>
									<dt>Eyebrow tint</dt>
								    <dd>£8</dd>
								    <dt>Eyebrow wax</dt>
								    <dd>£8</dd>
								    <dt>Definition Eyebrows</dt>
								    <dd>£16</dd>
								</dl>
							</div>
						</div>
					</div>
					<div class="folder right">
						<div class="folder-cover">
							<div class="treatment">
								<h4>Hot Waxing Treatments</h4>
								<dl>
									<dt>Natural set <span>(1h 15min)</span></dt>
									<dd>£49</dd>
									<dt>Glamorous set <span>(1h 45min)</span></dt>
								    <dd>£65</dd>
								    <dt>Dramatic 3D set <span>(2h 30min)</span></dt>
								    <dd>£95</dd>
								    <dt>Lash touch up <span>(1h)</span></dt>
								    <dd>£35</dd>
								</dl>
							</div>
							<div class="treatment">
								<h4>Strip waxing treatments</h4>
								<dl>
									<dt>Natural set <span>(1h 15min)</span></dt>
									<dd>£49</dd>
									<dt>Glamorous set <span>(1h 45min)</span></dt>
								    <dd>£65</dd>
								    <dt>Dramatic 3D set <span>(2h 30min)</span></dt>
								    <dd>£95</dd>
								    <dt>Lash touch up <span>(1h)</span></dt>
								    <dd>£35</dd>
								</dl>
							</div>
							<div class="treatment">
								<h4>Full body wax</h4>
								<dl>
									<dt>Full body wax</dt>
									<dd>£85</dd>
								</dl>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="bb-item">
				<div class="bb-custom-content">
					<div class="bb-custom-last">
						<p>
							Sometimes we provide discounts for some of the treatments.
						</p>
						<p>
							Please check <a href="http://beautybyhanna.co.uk/eng/special_offers/">Special Offers section</a> for more information.
						</p>
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

				var Page = (function() {

					var config = {
							$bookBlock		:	$( '#bb-bookblock' ),
							$navNext			:	$( '#bb-nav-next' ),
							$navPrev			:	$( '#bb-nav-prev' ),
							$folder				:	$( '#folder' ),
							$folderOpen		:	$( '#folder > div.folder-cover > span' ),
							$folderClose	:	$( '#folder > div.folder-inner > a' ),
							transEndEventNames	:	{
								'WebkitTransition'	: 'webkitTransitionEnd',
								'MozTransition'			: 'transitionend',
								'OTransition'				: 'oTransitionEnd',
								'msTransition'			: 'MSTransitionEnd',
								'transition'				: 'transitionend'
							},
							// init bookBlock!
							bb					:	$( '#bb-bookblock' ).bookblock( {
								speed 			: 700,
								easing			: 'ease-out',
								perspective	: 1500,
								shadowSides	: 0.8,
								shadowFlip	: 0.7
							} ),
							transitionProperty	:	{
								'-webkit-transition'	: '-webkit-transform 300ms ease-in-out',
								'-moz-transition'			: '-moz-transform 300ms ease-in-out',
								'-o-transition'				: '-o-transform 300ms ease-in-out',
								'-ms-transition'			: '-ms-transform 300ms ease-in-out'
							}
						},
						init = function() {

							initEvents();

						},
						initEvents = function() {

							config.$navNext.on( 'click', function() {

								checkFolder( function() {

									config.bb.next();

								} );

								return false;

							} );

							config.$navPrev.on( 'click', function() {

								checkFolder( function() {

									config.bb.prev();

								} );
								return false;

							} );

							// swipe event : http://jquerypp.com/#swipe
							config.$bookBlock.children().on( {

								'swipeleft' : function( event ) {

									checkFolder( function() {

										config.bb.next();

									} );

									return false;

								},
								'swiperight' : function( event ) {

									checkFolder( function() {

										config.bb.prev();

									} );

									return false;

								}

							} );

							// folder
							config.$folderOpen.on( 'click', function() {

								var $folder = $( this ).closest( 'div.folder' ),
										open = $folder.data( 'isOpen' );

								if( config.bb.isActive() ) return false;

								if( !open ) {

									openFolder();

								}

								return false;

							} );

							config.$folderClose.on( 'click', function() {

								var $folder = $( this ).closest( 'div.folder' ),
										open = $folder.data( 'isOpen' );

								if( config.bb.isActive() ) return false;

								if( open ) {

									closeFolder();

								}

								return false;

							} );

						},
						openFolder	= function() {

							var $fold = config.$folder.find( 'div.folder-fold' ).css( config.transitionProperty ),
									$inner = config.$folder.find( 'div.folder-inner' ),
									transEndEventName = config.transEndEventNames[ Modernizr.prefixed( 'transition' ) ];

							setTimeout( function() {

								$fold.css( 'transform', 'rotateY(180deg)' ).on( transEndEventName , function() {

									$fold.off( transEndEventName ).css( 'z-index', 1 ).css( 'transition', 'none' ).css( 'transform', 'rotateY(-180deg)' );
									$inner.css( 'transform', 'translateX(310px)' );

								} );

								config.$folder.data( 'isOpen', true );

							}, 0 );


						},
						closeFolder	= function() {

							var $fold = config.$folder.find( 'div.folder-fold' ),
									$inner = config.$folder.find( 'div.folder-inner' ),
									transEndEventName = config.transEndEventNames[ Modernizr.prefixed( 'transition' ) ];

							$inner.css( 'transform', 'translateX(0px)' ).on( transEndEventName , function() {

								$inner.off( transEndEventName );

								$fold.css( 'transform', 'rotateY(180deg)' );

								setTimeout( function() {

									$fold.css( config.transitionProperty ).css( {
										transform	: 'rotateY(0deg)',
										zIndex		: 4

									} ).on( transEndEventName , function() {

										$fold.off( transEndEventName );

									} );

								}, 0 );

							} );

							config.$folder.data( 'isOpen', false );

						},
						checkFolder	= function( callback ) {

							var $fold = config.$folder.find( 'div.folder-fold' ),
									transEndEventName = config.transEndEventNames[ Modernizr.prefixed( 'transition' ) ];

							if( config.$folder.data( 'isOpen' ) ) {

								$fold.on( transEndEventName , function() {

									$fold.off( transEndEventName );
									callback.call();

								} );

								closeFolder();

							}
							else {

								callback.call();

							}

						};


					return { init : init };

				})();

				Page.init();

			});
		</script>
