/*=======================================================================*/
// [[[ Common things

    $(document).ready( function(){

        // fading  startpage module
        if ( typeof $.innerfade === 'function') {
            $('#fade').innerfade({
                timeout: 3000,
                type: 'sequence',
                speed: 2000,
                containerheight: '440px'
            });
        }

        // blog comments
        $('#formOpener').toggle(function(e){
            e.preventDefault();
            $('#commentForm').show('normal');
            $("#commentForm :input:visible:enabled:last").focus();
        }, function(e){
            e.preventDefault();
            $('#commentForm').hide('normal');
        });

        //addThis
        addthis.init();
        addthis.addEventListener('addthis.ready', function(){
            setTimeout(function(){
                $('.addthis_toolbox').addClass('visible');
            }, 500);
        });

         // opening popups for images
//       $("a.simpleImage").fancybox({
//          'hideOnContentClick': true,
//          'zoomSpeedIn' : 300,
//          'zoomSpeedOut': 300,
//          'easingIn'    : 'easeOutBack',
//          'easingOut'   : 'easeInBack'
//       });

    });

    // recaptcha
    RecaptchaOptions = {
        theme : 'white'
    };

// [[[ Common things
/*=======================================================================*/