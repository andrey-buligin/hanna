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

        // blog comments/reviews page form
        Modernizr.csstransitions == false;
        if ( !Modernizr.csstransitions ) {
            console.log('no trans')
            $('#commentForm').hide().addClass('visible');

            showForm = function() {
                $('#commentForm').show();
            };
            hideForm = function() {
                $('#commentForm').hide();
            };
        } else {
            console.log('has trans')
            showForm = function() {
                $('#commentForm').addClass('visible');
            };
            hideForm = function() {
                $('#commentForm').removeClass('visible');
            };
        }
        $('#formOpener').toggle(function(e){
            e.preventDefault();
            showForm();
            $("#commentForm :input:visible:enabled:last").focus();
        }, function(e){
            e.preventDefault();
            hideForm();
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