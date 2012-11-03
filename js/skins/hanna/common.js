/*=======================================================================*/
// [[[ Common things

    $(document).ready( function(){

        // fading  startpage module
        $('#fade').innerfade({
            timeout: 3000,
            type: 'sequence',
            speed: 2000,
            containerheight: '440px'
        });

        // blog comments
         $('#formOpener').toggle(function(e){
            e.preventDefault();
            $('#commentForm').show('normal');
            $("#commentForm :input:visible:enabled:last").focus();
         }, function(e){
            e.preventDefault();
            $('#commentForm').hide('normal');
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