jQuery(document).ready(function(){
    // alert("Hello")
    jQuery('ul#primary-menu > li').on('click', function(){
        var target = "#"+jQuery(this).attr('data-target')

        jQuery('body, html').animate({
            "scrollTop" : jQuery(target).offset().top - 80
        })
    })

    jQuery(window).on("scroll", function(){
        var scrollDist = jQuery(this).scrollTop();
        console.log(scrollDist);
        if(scrollDist > 150){
           jQuery("#header").addClass("dupliNav") 
        }else{
           jQuery("#header").removeClass("dupliNav") 
        }
  
        if(scrollDist > 400){
           jQuery('body').addClass('fixnav')
        }else{
           jQuery('body').removeClass('fixnav')
        }
        
     })




})