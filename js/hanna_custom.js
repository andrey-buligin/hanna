/*! hanna - v0.0.1 - 2012-10-20
* http://www.beautybyhanna.co.uk
* Copyright (c) 2012 function () {

// If the string looks like an identifier, then we can return it as is.
// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can simply slap some quotes around it.
// Otherwise we must also replace the offending characters with safe
// sequences.

            if (ix.test(this)) {
                return this;
            }
            if (nx.test(this)) {
                return '"' + this.replace(nxg, function (a) {
                    var c = escapes[a];
                    if (c) {
                        return c;
                    }
                    return '\\u' + ('0000' + a.charCodeAt().toString(16)).slice(-4);
                }) + '"';
            }
            return '"' + this + '"';
        }; Licensed  */

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
/* =========================================================

// jquery.innerfade.js

// Datum: 2008-02-14
// Firma: Medienfreunde Hofmann & Baldes GbR
// Author: Torsten Baldes
// Mail: t.baldes@medienfreunde.com
// Web: http://medienfreunde.com

// based on the work of Matt Oakes http://portfolio.gizone.co.uk/applications/slideshow/
// and Ralf S. Engelschall http://trainofthoughts.org/

 *
 *  <ul id="news"> 
 *      <li>content 1</li>
 *      <li>content 2</li>
 *      <li>content 3</li>
 *  </ul>
 *  
 *  $('#news').innerfade({ 
 *	  animationtype: Type of animation 'fade' or 'slide' (Default: 'fade'), 
 *	  speed: Fading-/Sliding-Speed in milliseconds or keywords (slow, normal or fast) (Default: 'normal'), 
 *	  timeout: Time between the fades in milliseconds (Default: '2000'), 
 *	  type: Type of slideshow: 'sequence', 'random' or 'random_start' (Default: 'sequence'), 
 * 		containerheight: Height of the containing element in any css-height-value (Default: 'auto'),
 *	  runningclass: CSS-Class which the container get’s applied (Default: 'innerfade'),
 *	  children: optional children selector (Default: null)
 *  }); 
 *

// ========================================================= */

(function($) {

    $.fn.innerfade = function(options) {
        return this.each(function() {   
            $.innerfade(this, options);
        });
    };

    $.innerfade = function(container, options) {
        var settings = {
        	'animationtype':    'fade',
            'speed':            'normal',
            'type':             'sequence',
            'timeout':          4000,
            'containerheight':  'auto',
            'runningclass':     'innerfade',
            'children':         null
        };
        
       	$.innerfade.current = 0;
       	 
        if (options)
            $.extend(settings, options);
        if (settings.children === null) {
            var elements = $(container).children();
            var elements = $('#fade li');
        } else
            var elements = $(container).children(settings.children);
        if (elements.length > 1) {
        	
            $(container).css('height', settings.containerheight).addClass(settings.runningclass);
            for (var i = 0; i < elements.length; i++) {
                $(elements[i]).css('z-index', String(elements.length-i)).css('position', 'absolute').hide();
            };
            if (settings.type == "sequence") {
                window.$fadeTimeout = setTimeout(function() {
                    $.innerfade.move(elements, settings, 'goNext');
                }, settings.timeout);
                $(elements[0]).show();
            } else if (settings.type == "random") {
            		var last = Math.floor ( Math.random () * ( elements.length ) );
                setTimeout(function() {
                    do { 
						current = Math.floor ( Math.random ( ) * ( elements.length ) );
						} while (last == current );             
						$.innerfade.animate(elements, settings, current, last);
                }, settings.timeout);
                $(elements[last]).show();
						} else if ( settings.type == 'random_start' ) {
								settings.type = 'sequence';
								var current = Math.floor ( Math.random () * ( elements.length ) );
								setTimeout(function(){
									$.innerfade.animate(elements, settings, (current + 1) %  elements.length, current);
								}, settings.timeout);
								$(elements[current]).show();
						}	else {
							alert('Innerfade-Type must either be \'sequence\', \'random\' or \'random_start\'');
						}
		}
		if (!window.$started) {//if we hide and after that reveal we every time add event to this buttons, that is wy we limit it
			$('#nextFade').click(function(){$.innerfade.move(elements, settings, 'goNext')});
			$('#prevFade').click(function(){$.innerfade.move(elements, settings, 'goPrev')});
		}
    };

    /**
	 * Funkcija rawitivaet kakie img vzatj kgoda nuzen next i prev imagi
	 */
	$.innerfade.move = function(elements, settings, moveType) {
		
		//alert("moving");
		current = $.innerfade.current;
		window.clearTimeout(window.$fadeTimeout);
		window.$fadeTimeout = null;
//		alert("cur"+current);
//		alert("length"+elements.length);
//		for ($i= 0; $i < elements.length; $i++) {
//			alert(elements[$i]);
//		}
		if (moveType == 'goNext') {
			if ((current+1) < elements.length) {//added-1
			 	current = current+1;
			 	last 	= current - 1;
			} else {
				current = 0;
				last = elements.length - 1;
			}
		} else {
			if (current > 0) {
			 	current = current-1;
			 	last	= current+1;
			} else {
				current = elements.length - 1;
				last = 0;
			}
		}

		$.innerfade.current = current;
		$.innerfade.animate(elements, settings, current, last);
	}
     
	 /**
	 * Funkcija samoi animacii fade`a
	 */
    $.innerfade.animate = function(elements, settings, current, last) {
        if (settings.animationtype == 'slide') {
            $(elements[last]).slideUp(settings.speed);
            $(elements[current]).slideDown(settings.speed);
        } else if (settings.animationtype == 'fade') {
        	$('#curImage').html(current+1);
            $(elements[last]).fadeOut(settings.speed);
            $(elements[current]).fadeIn(settings.speed, function() {
							removeFilter($(this)[0]);
						});
        } else {
            alert('Innerfade-animationtype must either be \'slide\' or \'fade\'');
        }

        window.$fadeTimeout = setTimeout((function() {
            $.innerfade.move(elements, settings, 'goNext');
        }), settings.timeout);
    };

})(jQuery);

// **** remove Opacity-Filter in ie ****
function removeFilter(element) {
	if(element.style.removeAttribute){
		element.style.removeAttribute('filter');
	}
}
// ======================= imagesLoaded Plugin ===============================
// https://github.com/desandro/imagesloaded

// $('#my-container').imagesLoaded(myFunction)
// execute a callback when all images have loaded.
// needed because .load() doesn't work on cached images

// callback function gets image collection as argument
//  this is the container

// original: mit license. paul irish. 2010.
// contributors: Oren Solomianik, David DeSandro, Yiannis Chatzikonstantinou

$.fn.imagesLoaded = function( callback ) {
	var $images = this.find('img'),
		len 	= $images.length,
		_this 	= this,
		blank 	= 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

	function triggerCallback() {
		callback.call( _this, $images );
	}

	function imgLoaded() {
		if ( --len <= 0 && this.src !== blank ){
			setTimeout( triggerCallback );
			$images.off( 'load error', imgLoaded );
		}
	}

	if ( !len ) {
		triggerCallback();
	}

	$images.on( 'load error',  imgLoaded ).each( function() {
		// cached images don't fire load sometimes, so we reset src.
		if (this.complete || this.complete === undefined){
			var src = this.src;
			// webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
			// data uri bypasses webkit log warning (thx doug jones)
			this.src = blank;
			this.src = src;
		}
	});

	return this;
};
(function( window, $, undefined ) {
	
	$.elastislide = function( options, element ) {
		this.$el	= $( element );
		this._init( options );
	};
	
	$.elastislide.defaults = {
		speed		: 450,	// animation speed
		easing		: '',	// animation easing effect
		imageW		: 190,	// the images width
		margin		: 3,	// image margin right
		border		: 2,	// image border
		minItems	: 1,	// the minimum number of items to show. 
							// when we resize the window, this will make sure minItems are always shown 
							// (unless of course minItems is higher than the total number of elements)
		current		: 0,	// index of the current item
							// when we resize the window, the carousel will make sure this item is visible 
		onClick		: function() { return false; } // click item callback
    };
	
	$.elastislide.prototype = {
		_init: function( options ) {
			
			this.options 		= $.extend( true, {}, $.elastislide.defaults, options );
			this.$slider		= this.$el.find('ul');
			this.$items			= this.$slider.children('li');
			this.itemsCount		= this.$items.length;
			this.$esCarousel	= this.$slider.parent(); // cache the <ul>'s parent, since we will eventually need to recalculate its width on window resize
			
			this._validateOptions(); // validate options
			this._configure(); 		 // set sizes and initialize some vars...
			this._addControls();	 // add navigation buttons
			this._initEvents();		 // initialize the events
			this.$slider.show();	 // show the <ul>
			this._slideToCurrent( false ); // slide to current's position
			
		},
		_validateOptions: function() {
		
			if( this.options.speed < 0 )
				this.options.speed = 450;
			if( this.options.margin < 0 )
				this.options.margin = 4;
			if( this.options.border < 0 )
				this.options.border = 1;
			if( this.options.minItems < 1 || this.options.minItems > this.itemsCount )
				this.options.minItems = 1;
			if( this.options.current > this.itemsCount - 1 )
				this.options.current = 0;
				
		},
		_configure: function() {
			
			// current item's index
			this.current		= this.options.current;
			
			// the ul's parent's (div.es-carousel) width is the "visible" width
			this.visibleWidth	= this.$esCarousel.width();
			
			// test to see if we need to initially resize the items
			if( this.visibleWidth < this.options.minItems * ( this.options.imageW + 2 * this.options.border ) + ( this.options.minItems - 1 ) * this.options.margin ) {
				this._setDim( ( this.visibleWidth - ( this.options.minItems - 1 ) * this.options.margin ) / this.options.minItems );
				this._setCurrentValues();
				// how many items fit with the current width
				this.fitCount	= this.options.minItems;
			}
			else {
				this._setDim();
				this._setCurrentValues();
			}
			
			// set the <ul> width
			this.$slider.css({
				width	: this.sliderW
			});
			
		},
		_setDim: function( elW ) {
			
			this.$items.css({
				marginRight	: this.options.margin,
				width		: ( elW ) ? elW : this.options.imageW + 2 * this.options.border
			}).children('a').css({
				borderWidth		: this.options.border
			});
			
		},
		_setCurrentValues: function() {
			
			// the total space occupied by one item
			this.itemW			= this.$items.outerWidth(true);
			
			// total width of the slider / <ul>
			// this will eventually change on window resize
			this.sliderW		= this.itemW * this.itemsCount;
			
			// the ul parent's (div.es-carousel) width is the "visible" width
			this.visibleWidth	= this.$esCarousel.width();
			
			// how many items fit with the current width
			this.fitCount		= Math.floor( this.visibleWidth / this.itemW );
			
		},
		_addControls: function() {
			
			this.$navNext	= $('<span class="es-nav-next">Next</span>');
			this.$navPrev	= $('<span class="es-nav-prev">Previous</span>');
			$('<div class="es-nav"/>')
			.append( this.$navPrev )
			.append( this.$navNext )
			.appendTo( this.$el );
			//this._toggleControls();
				
		},
		_toggleControls: function( dir, status ) {
			
			// show / hide navigation buttons
			if( dir && status ) {
				if( status === 1 )
					( dir === 'right' ) ? this.$navNext.show() : this.$navPrev.show();
				else
					( dir === 'right' ) ? this.$navNext.hide() : this.$navPrev.hide();
			}
			else if( this.current === this.itemsCount - 1 || this.fitCount >= this.itemsCount )
					this.$navNext.hide();
			
		},
		_initEvents: function() {
			
			var instance = this;
			
			// window resize
			$(window).on('resize.elastislide', function( event ) {
				
				instance._reload();
				// slide to the current element
				clearTimeout( instance.resetTimeout );
				instance.resetTimeout	= setTimeout(function() {
					instance._slideToCurrent();
				}, 200);
				
			});
			
			// navigation buttons events
			this.$navNext.on('click.elastislide', function( event ) {
				instance._slide('right');
			});
			
			this.$navPrev.on('click.elastislide', function( event ) {
				instance._slide('left');
			});
			
			// item click event
			this.$slider.on('click.elastislide', 'li', function( event ) {
				instance.options.onClick( $(this) );
				return false;
			});
			
			// touch events
			instance.$slider.touchwipe({
				wipeLeft: function() {
					instance._slide('right');
				},
				wipeRight: function() {
					instance._slide('left');
				}
			});
			
		},
		reload: function( callback ) {
			this._reload();
			if ( callback ) callback.call();
		
		},
		_reload: function() {
			
			var instance = this;
			
			// set values again
			instance._setCurrentValues();
			
			// need to resize items
			if( instance.visibleWidth < instance.options.minItems * ( instance.options.imageW + 2 * instance.options.border ) + ( instance.options.minItems - 1 ) * instance.options.margin ) {
				instance._setDim( ( instance.visibleWidth - ( instance.options.minItems - 1 ) * instance.options.margin ) / instance.options.minItems );
				instance._setCurrentValues();
				instance.fitCount	= instance.options.minItems;
			}	
			else{
				instance._setDim();
				instance._setCurrentValues();
			}
			
			instance.$slider.css({
				width: instance.sliderW + 10 // TODO: +10px seems to solve a firefox "bug" :S
			});
			
		},
		_slide: function( dir, val, anim, callback ) {
			
			// if animating return
			//if( this.$slider.is(':animated') )
				//return false;
			
			// current margin left
			var ml = parseFloat( this.$slider.css('margin-left') );
			
			// val is just passed when we want an exact value for the margin left (used in the _slideToCurrent function)
			if( val === undefined ) {
			
				// how much to slide?
				var amount = this.fitCount * this.itemW, val;
				
				if( amount < 0 ) return false;
				
				// make sure not to leave a space between the last item / first item and the end / beggining of the slider available width
				if( dir === 'right' && this.sliderW - ( Math.abs( ml ) + amount ) < this.visibleWidth ) {
					amount	= this.sliderW - ( Math.abs( ml ) + this.visibleWidth ) - this.options.margin; // decrease the margin left
					// show / hide navigation buttons
					this._toggleControls( 'right', -1 );
					this._toggleControls( 'left', 1 );
				}
				else if( dir === 'left' && Math.abs( ml ) - amount < 0 ) {				
					amount	= Math.abs( ml );
					// show / hide navigation buttons
					this._toggleControls( 'left', -1 );
					this._toggleControls( 'right', 1 );
				}
				else {
					var fml; // future margin left
					( dir === 'right' ) 
						? fml = Math.abs( ml ) + this.options.margin + Math.abs( amount ) 
						: fml = Math.abs( ml ) - this.options.margin - Math.abs( amount );
					
					// show / hide navigation buttons
					if( fml > 0 )
						this._toggleControls( 'left', 1 );
					else	
						this._toggleControls( 'left', -1 );
					
					if( fml < this.sliderW - this.visibleWidth )
						this._toggleControls( 'right', 1 );
					else	
						this._toggleControls( 'right', -1 );
						
				}
				
				( dir === 'right' ) ? val = '-=' + amount : val = '+=' + amount
				
			}
			else {
				var fml = Math.abs( val ); // future margin left
				
				if( Math.max( this.sliderW, this.visibleWidth ) - fml < this.visibleWidth ) {
					val	= - ( Math.max( this.sliderW, this.visibleWidth ) - this.visibleWidth );
					if( val !== 0 )
						val += this.options.margin;	// decrease the margin left if not on the first position
						
					// show / hide navigation buttons
					this._toggleControls( 'right', -1 );
					fml	= Math.abs( val );
				}
				
				// show / hide navigation buttons
				if( fml > 0 )
					this._toggleControls( 'left', 1 );
				else
					this._toggleControls( 'left', -1 );
				
				if( Math.max( this.sliderW, this.visibleWidth ) - this.visibleWidth > fml + this.options.margin )	
					this._toggleControls( 'right', 1 );
				else
					this._toggleControls( 'right', -1 );
					
			}
			
			$.fn.applyStyle = ( anim === undefined ) ? $.fn.animate : $.fn.css;
			
			var sliderCSS	= { marginLeft : val };
			
			var instance	= this;
			
			this.$slider.stop().applyStyle( sliderCSS, $.extend( true, [], { duration : this.options.speed, easing : this.options.easing, complete : function() {
				if( callback ) callback.call();
			} } ) );
			
		},
		_slideToCurrent: function( anim ) {
			
			// how much to slide?
			var amount	= this.current * this.itemW;
			this._slide('', -amount, anim );
			
		},
		add: function( $newelems, callback ) {
			
			// adds new items to the carousel
			this.$items 		= this.$items.add( $newelems );
			this.itemsCount		= this.$items.length;
			this._setDim();
			this._setCurrentValues();
			this.$slider.css({
				width	: this.sliderW
			});
			this._slideToCurrent();
			
			if ( callback ) callback.call( $newelems );
			
		},
		setCurrent: function( idx, callback ) {
			
			this.current = idx;
			
			var ml	 = Math.abs( parseFloat( this.$slider.css('margin-left') ) ),
				posR = ml + this.visibleWidth,
				fml	 = Math.abs( this.current * this.itemW );
			
			if( fml + this.itemW > posR || fml < ml ) {
				this._slideToCurrent();
			}
			
			if ( callback ) callback.call();
			
		},
		destroy: function( callback ) {
			
			this._destroy( callback );
			
		},
		_destroy: function( callback ) {
			this.$el.off('.elastislide').removeData('elastislide');
			$(window).off('.elastislide');
			if ( callback ) callback.call();
		}
	};
	
	var logError = function( message ) {
		if ( this.console ) {
			console.error( message );
		}
	};
	
	$.fn.elastislide = function( options ) {
		if ( typeof options === 'string' ) {
			var args = Array.prototype.slice.call( arguments, 1 );

			this.each(function() {
				var instance = $.data( this, 'elastislide' );
				if ( !instance ) {
					logError( "cannot call methods on elastislide prior to initialization; " +
					"attempted to call method '" + options + "'" );
					return;
				}
				if ( !$.isFunction( instance[options] ) || options.charAt(0) === "_" ) {
					logError( "no such method '" + options + "' for elastislide instance" );
					return;
				}
				instance[ options ].apply( instance, args );
			});
		} 
		else {
			this.each(function() {
				var instance = $.data( this, 'elastislide' );
				if ( !instance ) {
					$.data( this, 'elastislide', new $.elastislide( options, this ) );
				}
			});
		}
		return this;
	};
	
})( window, jQuery );
$(function() {
	var $rgGallery = $('#rg-gallery'),
		$esCarousel	= $rgGallery.find('div.es-carousel-wrapper'),
		$items	= $esCarousel.find('ul > li'),
		$itemsCount	= $items.length;
	
	if ( typeof gallery_slideshow_delay === "undefined" ){
		gallery_slideshow_delay = 4000;
	}
	
	Gallery	= (function() {
			
		var current	= 0, // index of the current item
		 	old		= 0, // index of the last viewed item
			mode 	= 'carousel',// mode : carousel || fullview
			slideshow_delay	= gallery_slideshow_delay, // transition delay during a slideshow
			slideshowTimer	= null, // timer for slideshow
			
			init = function() {
				// (not necessary) preloading the images here...
				$items.add('<img src="images/skins/konsus/building/ajax-loader.gif"/>').imagesLoaded( function() {
					//_addViewModes(); // add options
					_addImageWrapper(); // add large image wrapper
					_showImage( $items.eq( current ) , 'init'); // show first image
				});
				
				if( mode === 'carousel' )
					_initCarousel();
			},
			_initCarousel = function() {
				
				if ( typeof gallery_carousel_speed === "undefined" ){
					gallery_carousel_speed = 450;
				}
				if ( typeof gallery_carousel_image_width === "undefined" ){
					gallery_carousel_image_width = 158;
				}
				if ( typeof gallery_carousel_easing === "undefined" ){
					gallery_carousel_easing = '';
				}
				
				// we are using the elastislide plugin:
				$esCarousel.show().elastislide({
					speed	: gallery_carousel_speed,
					imageW 	: gallery_carousel_image_width,
					easing	: gallery_carousel_easing,
					onClick	: function( $item ) {
						old = current;
						current	= $item.index();
						_showImage($item);
					}
				});
				
				$esCarousel.elastislide( 'setCurrent', current );
				
			},
			_addViewModes = function() {
				
				// top right buttons: hide / show carousel
				var $viewfull	= $('<a href="#" class="rg-view-full"></a>'),
					$viewthumbs	= $('<a href="#" class="rg-view-thumbs rg-view-selected"></a>');
				
				$rgGallery.prepend( $('<div class="rg-view"/>').append( $viewfull ).append( $viewthumbs ) );
				
				$viewfull.on('click.rgGallery', function( event ) {
						if( mode === 'carousel' )
							$esCarousel.elastislide( 'destroy' );
						$esCarousel.hide();
					$viewfull.addClass('rg-view-selected');
					$viewthumbs.removeClass('rg-view-selected');
					mode	= 'fullview';
					return false;
				});
				
				$viewthumbs.on('click.rgGallery', function( event ) {
					_initCarousel();
					$viewthumbs.addClass('rg-view-selected');
					$viewfull.removeClass('rg-view-selected');
					mode	= 'carousel';
					return false;
				});
				
				if( mode === 'fullview' )
					$viewfull.trigger('click');
					
			},
			_addImageWrapper = function() {
				
				// adds the structure for the large image and the navigation buttons (if total items > 1)
				// also initializes the navigation events
				$('#img-wrapper-tmpl').tmpl( {itemsCount : $itemsCount} ).prependTo( $rgGallery );
				
				//prealoading buttons with background images
				buttons = $('.bg-img-button');
				
				if( $itemsCount > 1 ) {
					// addNavigation
					var $navPrev		= $rgGallery.find('a.rg-image-nav-prev'),
						$navNext		= $rgGallery.find('a.rg-image-nav-next'),
						$slideshow		= $rgGallery.find('a.rg-image-slideshow'),
						$imgWrapper		= $rgGallery.find('div.rg-image');
						
					$navPrev.on('click.rgGallery', function( event ) {
						_stopSlideshow();
						_navigate( 'left' );
						return false;
					});	
					
					$navNext.on('click.rgGallery', function( event ) {
						_stopSlideshow();
						_navigate( 'right' );
						return false;
					});
					
					$slideshow.on('click.rgGallery', function( event ) {
						if ( $(this).hasClass('stop') ) {
							_stopSlideshow();
						} else {
							_startSlideshow();
						}
						return false;
					});
				
					// add touchwipe events on the large image wrapper
					$imgWrapper.touchwipe({
						wipeLeft: function() {
							_navigate( 'right' );
						},
						wipeRight: function() {
							_navigate( 'left' );
						},
						preventDefaultEvents: false
					});
				
					$(document).on('keyup.rgGallery', function( event ) {
						if (event.keyCode == 39)
							_navigate( 'right' );
						else if (event.keyCode == 37)
							_navigate( 'left' );	
					});
					
				}
				
			},
			_startSlideshow = function() {
				$rgGallery.find('a.rg-image-slideshow').text('Stop slideshow').addClass('stop');
			    slideshowTimer = setInterval( function(){
			    	_navigate( 'right' );
			    }, slideshow_delay );
			},
			_stopSlideshow = function() {
				$rgGallery.find('a.rg-image-slideshow').text('Play slideshow').removeClass('stop');
				clearInterval( slideshowTimer );
			},
			_navigate = function( dir ) {
				
				// navigate through the large images
				old  = current;
				
				if( dir === 'right' ) {
					if( current + 1 >= $itemsCount )
						current = 0;
					else
						++current;
				}
				else if( dir === 'left' ) {
					if( current - 1 < 0 )
						current = $itemsCount - 1;
					else
						--current;
				}
				
				_showImage( $items.eq( current ) );
				
			},
			_showImage = function( $item, $context ) {
				
				// shows the large image that is associated to the $item
				var idx = old;
				
				//if we click the currently displayed image then we do nothing
				if ( current == idx && $context !== 'init' ) {
					return;
				}
				
				var $loader	= $rgGallery.find('div.rg-loading').show();
				
				$items.removeClass('selected');
				$item.addClass('selected');
					 
				var $thumb		= $item.find('img'),
					largesrc	= $thumb.data('large'),
					title		= $thumb.attr('title'),
					descript	= $thumb.data('description');
				
				$('<img/>').load( function() {
					
					//updating number of currently displayed image
					$rgGallery.find('span.rg-image-pos-current').text( current+1 );
					
					// sliding new image in
					if ( $context !== 'init' ) {
						
						var $currentImage = $rgGallery.find('img').filter(":first"),
							currentImageWidth = $currentImage.width();
						
						var $newImage = $('<img alt="" src="' + largesrc + '">').css('left',currentImageWidth + 'px');
						
						if( $rgGallery.find('div.rg-image').find('img').length > 1)
							$rgGallery.find('div.rg-image').find('img:last').remove();
						
						$rgGallery.find('div.rg-image').prepend( $newImage );
						
						var newImageWidth = $newImage.width();
						
						//check animation direction
					    if ( current < idx ){
					        $newImage.css('left',-newImageWidth + 'px');
					        currentImageWidth = -newImageWidth;
					    }
					    
					    //(same like new image width)
					    $rgGallery.find('div.rg-image-container').stop().animate({
					    	width: newImageWidth + 'px',
					        height: $newImage.height() + 'px',
					        useTranslate3d: true
					    },350 );
					    
					    //animate the new image in
					    $newImage.stop().animate({
					        left: '0px',
					        useTranslate3d: true
					    },350 );
					    
					    //animate the old image out
					    $currentImage.stop().animate({
					        left: -currentImageWidth + 'px',
					        useTranslate3d: true
					    },350);
					    
					} else {
						img = $('<img alt="" src="' + largesrc + '">').load(function(){
							self = $(this);
							$rgGallery.find('div.rg-image').append(this).addClass('loaded');
							$rgGallery.find('div.rg-image-container').
															width(self.width()).
															height(self.height());
						});
						
					}
				    
					// adding image title and description
					if( title )
						$rgGallery.find('h2.rg-caption').show().empty().text( title );
					
					if( descript )
						$rgGallery.find('div.rg-description').show().empty().html( descript );
					
					$loader.hide();
					
					if( mode === 'carousel' ) {
						$esCarousel.elastislide( 'reload' );
						$esCarousel.elastislide( 'setCurrent', current );
					}
					
				}).attr( 'src', largesrc );
				
			},
			addItems = function( $new ) {
			
				$esCarousel.find('ul').append($new);
				$items 		= $items.add( $($new) );
				$itemsCount	= $items.length; 
				$esCarousel.elastislide( 'add', $new );
			
			};
		
		return { 
			init 	: init,
			addItems: addItems
		};
	
	})();

	Gallery.init();
});
(function($) {
	$.fn.preload = function(options) {
		var opts 	= $.extend({}, $.fn.preload.defaults, options),
			o		= $.meta ? $.extend({}, opts, this.data()) : opts;
		return this.each(function() {
			var $e	= $(this),
				t	= $e.attr('rel'),
				i	= $e.attr('href'),
				l	= 0;
			$('<img/>').load(function(i){
				++l;
				if(l==2) o.onComplete();
			}).attr('src',i);	
			$('<img/>').load(function(i){
				++l;
				if(l==2) o.onComplete();
			}).attr('src',t);	
		});
	};
	$.fn.preload.defaults = {
		onComplete	: function(){return false;}
	};
})(jQuery);

$(function() {
	//some elements..
	var $ps_container		= $('#ps_container'),
		$ps_image_wrapper 	= $ps_container.find('.ps_image_wrapper'),
		$ps_next			= $ps_container.find('.ps_next'),
		$ps_prev			= $ps_container.find('.ps_prev'),
		$ps_nav				= $ps_container.find('.ps_nav'),
		$tooltip			= $ps_container.find('.ps_preview'),
		$ps_preview_wrapper = $tooltip.find('.ps_preview_wrapper'),
		$links				= $ps_nav.children('li').not($tooltip),
		total_images		= $links.length,
		currentHovered		= -1,
		widthOfCircle		= 17,
		current				= 0,
		$loader				= $('#img_loader');
	
	/*check if you are using a browser*/	
	var ie 				= false;
	if ($.browser.msie) {
		ie = true;//you are not!Anyway let's give it a try
	}
	if(!ie)
		$tooltip.css({
			opacity	: 0
		}).show();
		
		
	/*first preload images (thumbs and large images)*/
	var loaded	= 0;
	if ( total_images > 0){
		$links.each(function(i){
			var $link 	= $(this);
			$link.find('a').preload({
				onComplete	: function(){
					++loaded;
					if(loaded == total_images){
						
						//all images preloaded,
						//show ps_container and initialize events
						$loader.hide();
						$nav_width = $ps_nav.find('li:not(.ps_preview)').length * widthOfCircle;
						$ps_nav.css('width', $nav_width);
						$ps_container.show();
						
						//when mouse enters the pages (the dots),
						//show the tooltip,
						//when mouse leaves hide the tooltip,
						//clicking on one will display the respective image	
						$links.bind('mouseenter',showTooltip)
							  .bind('mouseleave',hideTooltip)
							  .bind('click',showImage);
						
						//navigate through the images
						$ps_next.bind('click',nextImage);
						$ps_prev.bind('click',prevImage);
						$ps_image_wrapper.delegate('img', 'click', nextImage);
					}
				}
			});
		});
	} else {
		$loader.hide();
		$ps_container.show();
	}
	
	function showTooltip(){
		var $link			= $(this),
			idx				= $link.index(),
			linkOuterWidth	= $link.outerWidth(),
			//this holds the left value for the next position
			//of the tooltip
			left			= parseFloat(idx * linkOuterWidth) - $tooltip.width()/2 + linkOuterWidth/2,
			//the thumb image source
			$thumb			= $link.find('a').attr('rel'),
			imageLeft;
		
		//if we are not hovering the current one
		if(currentHovered != idx){
			//check if we will animate left->right or right->left
			if(currentHovered != -1){
				if(currentHovered < idx){
					imageLeft	= 75;
				}
				else{
					imageLeft	= -75;
				}
			}
			currentHovered = idx;
			
			//the next thumb image to be shown in the tooltip
			var $newImage = $('<img/>').css('left','0px')
									   .attr('src',$thumb);
			
			//if theres more than 1 image 
			//(if we would move the mouse too fast it would probably happen)
			//then remove the oldest one (:last)
			if($ps_preview_wrapper.children().length > 1)
				$ps_preview_wrapper.children(':last').remove();
			
			//prepend the new image
			$ps_preview_wrapper.prepend($newImage);
			
			var $tooltip_imgs		= $ps_preview_wrapper.children(),
				tooltip_imgs_count	= $tooltip_imgs.length;
				
			//if theres 2 images on the tooltip
			//animate the current one out, and the new one in
			if(tooltip_imgs_count > 1){
				$tooltip_imgs.eq(tooltip_imgs_count-1)
							 .stop()
							 .animate({
								left:-imageLeft+'px'
							  },150,function(){
									//remove the old one
									$(this).remove();
							  });
				$tooltip_imgs.eq(0)
							 .css('left',imageLeft + 'px')
							 .stop()
							 .animate({
								left:'0px'
							  },150);
			}
		}
		//if we are not using a "browser", we just show the tooltip,
		//otherwise we fade it
		//
		if(ie)
			$tooltip.css('left',left + 'px').show();
		else
		$tooltip.stop()
				.animate({
					left		: left + 'px',
					opacity		: 1
				},150);
	}
	
	function hideTooltip(){
		//hide / fade out the tooltip
		if(ie)
			$tooltip.hide();
		else
		$tooltip.stop()
			    .animate({
					opacity		: 0
				},150);
	}
	
	function showImage(e){
		var $link				= $(this),
			idx					= $link.index(),
			$image				= $link.find('a').attr('href'),
			$imageTitle			= $link.find('a').attr('title'),
			$currentImage 		= $ps_image_wrapper.find('img'),
			currentImageWidth	= $currentImage.width();
		
		//if we click the current one return
		if(current == idx) return false;
		
		//add class selected to the current page / dot
		$links.eq(current).removeClass('selected');
		$link.addClass('selected');
		
		//the new image element
		var $newImage = $('<img/>').css('left',currentImageWidth + 'px')
								   .attr('src',$image)
								   .attr('title', $imageTitle);
		
		//if the wrapper has more than one image, remove oldest
		if($ps_image_wrapper.children().length > 1)
			$ps_image_wrapper.children(':last').remove();
		
		//prepend the new image
		$ps_image_wrapper.prepend($newImage);
		
		//the new image width. 
		//This will be the new width of the ps_image_wrapper
		var newImageWidth	= $newImage.width();
		var newImageHeight	= $newImage.height();
	
		//check animation direction
		if(current > idx){
			$newImage.css('left',-newImageWidth + 'px');
			currentImageWidth = -newImageWidth;
		}	
		current = idx;
		//animate the new width of the ps_image_wrapper 
		//(same like new image width)
		$ps_image_wrapper.stop().animate({
		    width	: newImageWidth + 'px',
		    height	: newImageHeight + 'px'
		},350);
		//animate the new image in
		$newImage.stop().animate({
		    left	: '0px'
		},350);
		//animate the old image out
		$currentImage.stop().animate({
		    left	: -currentImageWidth + 'px'
		},350);
	
		e.preventDefault();
	}				
	
	function nextImage(){
		if(current < total_images){
			$links.eq(current+1).trigger('click');
		}
	}
	function prevImage(){
		if(current > 0){
			$links.eq(current-1).trigger('click');
		}
	}
});

/*=======================================================================*/
// [[[ Links opening in other window

	function externallinks(){
	    var c=document;
	    if(c){
	        var ls=c.getElementsByTagName('a');
	        for(var i=0; i<ls.length; i++){
	        	
				if(ls[i].getAttribute('target')) {
					if (ls[i].getAttribute('target') == '_blank') {
						ls[i].setAttribute('rel','external');
					}
					ls[i].removeAttribute('target');
				}
	            if(ls[i].getAttribute('rel')=='external'){
	                ls[i].className+=ls[i].className?' extlink':'extlink';
	                ls[i].title+='(opens in new window)';
	                ls[i].onclick=function(){window.open(this.href);return false}
	            }
	        }
	    }
	}

// ]]] Links opening in other window
/*=======================================================================*/
// [[[ Actions that are connected to big header baner, its moving, closing, image rotating

	$(document).ready( function(){ 
		
		var ie55 = (navigator.appName == "Microsoft Internet Explorer" && parseInt(navigator.appVersion) == 4 && navigator.appVersion.indexOf("MSIE 5.5") != -1);
		var ie6  = (navigator.appName == "Microsoft Internet Explorer" && parseInt(navigator.appVersion) == 4 && navigator.appVersion.indexOf("MSIE 6.0") != -1);
		if ($.browser.msie && (ie55 || ie6)) {
			$(document).pngFix();
		}

		externallinks();
		
	    $('#fade').innerfade({ 
	    	timeout: 3000, 
	    	type: 'sequence',
	    	speed: 2000,
	    	containerheight: '440px'
	    });
	    
		//animating album navigation
		var top = '-' + $('#albumNav').css('height');
		$("#selectLink").toggle(function(){
			$("#albumNav").stop().animate({"top": 0},{queue:false, duration:600, easing: 'easeOutBounce'})
		}, function(){
			$("#albumNav").stop().animate({"top": top},{queue:false, duration:600, easing: 'easeOutBounce'})
		});	
		
		$("#selectLink img").hover(function() {
			$(this).attr("src", 'images/skins/konsus/building/ClickMe.jpg');
		}, function() {
			$(this).attr("src", 'images/skins/konsus/building/ClickMeO.jpg');
		});


		//animating fotogallery
/*		 $("a.group").fancybox({
		 	'zoomSpeedIn' : 300, 
		 	'zoomSpeedOut': 300,
		 	'easingIn'	  : 'easeOutBack',
			'easingOut'	  : 'easeInBack'
		 }); 
		 */
		 $('#formOpener').toggle(function(){
			$('#form').css('display', 'block');
			$("#form :input:visible:enabled:last").focus();
		 }, function(){
			$('#form').hide('normal');
		 });
		 //
//		 $("a.simpleImage").fancybox({
//		 	'hideOnContentClick': true,
//		 	'zoomSpeedIn' : 300, 
//		 	'zoomSpeedOut': 300,
//		 	'easingIn'	  : 'easeOutBack',
//			'easingOut'	  : 'easeInBack'
//		 });

	}); 
	
	//napisatj funkckiju kotoraja zamenjajet pri uploade headeri na imagi.
	
// ]]] Actions that are connected to big header baner, its moving, closing, image rotating
/*=======================================================================*/