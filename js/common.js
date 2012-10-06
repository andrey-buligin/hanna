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

	$(document).ready(function(){

		var ie55 = (navigator.appName == "Microsoft Internet Explorer" && parseInt(navigator.appVersion) == 4 && navigator.appVersion.indexOf("MSIE 5.5") != -1);
		var ie6  = (navigator.appName == "Microsoft Internet Explorer" && parseInt(navigator.appVersion) == 4 && navigator.appVersion.indexOf("MSIE 6.0") != -1);
		if ($.browser.msie && (ie55 || ie6)) {
			$(document).pngFix();
		}
		
		$("#body").fadeIn(1500);

		/*=======================================================================*/
		//navigation animation
	    
		$('#navigation .menu li:not(.active) a').each(function(index, obj){
	    	$(obj).css('background', '#dce1e4');
	    	$(obj).mouseover(function(){
		    	$(this).animate({ 
			        backgroundColor: "#474a53",
			        color: 'white'
			    }, 800);	
	    	})
	    })
	    $('#navigation .menu li:not(.active) a').mouseout(function(){
	    	$(this).animate({ 
		        backgroundColor: "#dce1e4",
		        color: 'black'
		    }, 400);	
	    })
		$('#navigation-left li.active a').animate({
			paddingLeft: '38'
		}, 1800);
		
		/*=======================================================================*/
		//Images
		
		 externallinks();
		 $("a.simpleImage").fancybox({
		 	'hideOnContentClick': true
		 });
		 $("a.group").fancybox({
		 	'zoomSpeedIn' : 300, 
		 	'zoomSpeedOut': 300,
		 	'easingIn'	  : 'easeOutBack',
			'easingOut'	  : 'easeInBack'
		 }); 

		 $("a.ajaxLink").fancybox({
		 	'frameWidth'  : 770,
		 	'frameHeight' : 480,
		  	'zoomSpeedIn' : 300, 
		 	'zoomSpeedOut': 300,
		 	'easingIn'	  : 'easeOutBack',
			'easingOut'	  : 'easeInBack',
			'hideOnContentClick': false,
			'zoomOpacity' : true,
			'padding'	  : 0
		 });
		 
		 $("#firstImg").trigger("click");	
	});
	;

	function openWin($url){
		windowWidth  = $(document).width();
		windowHeight = $(document).height();
		window.open($url, 'mainWindow', 'status=yes, location=yes, resizable=yes, scrollbars=yes, toolbar=no, menubar=no, width='+windowWidth+', height='+windowHeight+', left=0, top=0');
		return false;
	}
		
	function changeImg($obj, $src){
		$obj.src = $src;
	}
	
/*=======================================================================*/