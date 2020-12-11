$(document).ready(function(){
    
    let mobileFooter = $('.mobile-footer');
    let mobileOverlayClose = $('.mobile-overlay-close');//////////
    let hamburgerButton = $('.hamburger-button');
    let mobileOverlay = $('.mobile-overlay');



    if(window.matchMedia('(max-width:480px)').matches){
        mobileFooter.toggle();
    }



    $(window).scroll( function() {
        if( $(this).scrollTop() == 0 && window.matchMedia('(max-width:480px)').matches){
            
            if(mobileFooter.is(":hidden")){
                    mobileFooter.toggle();
                }

        

        } else {
            if(!mobileFooter.is(":hidden")){
                mobileFooter.toggle();
            }
        }
    });



    hamburgerButton.click(function(){
        
        //if the mobile menu is already loaded, do nothing
        //if the mobile menu is not loaded, load it
        if(!mobileOverlay.hasClass('mobile-overlay-active')){
            mobileOverlay.toggleClass('mobile-overlay-active');
        }


    });

    mobileOverlayClose.click(function(){
        if(mobileOverlay.hasClass('mobile-overlay-active')){
            mobileOverlay.toggleClass('mobile-overlay-active');

        }
    });


});
