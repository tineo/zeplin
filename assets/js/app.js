import '../node_modules/bootstrap';
import '../node_modules/slick-carousel';

import anime from 'animejs/lib/anime.es';

//alert("123");
$(function(){
    //alert("loaded");
    //alert("loaded");

    $('.your-class').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        //asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });

$(".slick-elements").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    rows: 0 
});
$(".slick-track").addClass("row");
//alert("slick2");

    var width = $(window).width();
    var slides = 3;
    let height;
    let new_width = width;
    if(width < 374){
        //new_width = width;
        slides = 1;
        height = 718;
    }else if(width < 768){
        slides = 1;
        new_width = width -16;
        height = 718;
    }else if(width < 992){
        slides = 3;
        new_width = width -16;
        height = 718;
    }else if( width < 1640 ){
        slides = 3;
        //new_width = width;
        height = width*900/1640;
    }else{
        slides = 3;
        //new_width = width;
        height = 900;
    }
    //alert(" S:  "+slides);
    $('.your-class').slick('slickSetOption', {
        slidesToShow: slides,
        slidesToScroll: 1
    }, true);
    $(".container-hero").css({ height: height + "px" });
    $(".container-hero").css({ width: new_width + "px" });

    $("#blog-header").css("marginLeft", $("#blog-body").css("marginLeft"));


    $(window).on("resize", function() {
        width = $(window).width();
        //height = $(window).height();
        var slides = 3;
        let height;
        let new_width = width;
        if(width < 374){
            //new_width = width;
            slides = 1;
            height = 718;
        }else if(width < 768){
            slides = 1;
            new_width = width -16;
            height = 718;
        }else if( width < 1640 ){
            slides = 3;
            //new_width = width;
            height = new_width*900/1640;
        }else{
            slides = 3;
            //new_width = width;
            height = 900;
        }
        //alert(" S:  "+slides);
        $('.your-class').slick('slickSetOption', {
            slidesToShow: slides,
            slidesToScroll: 1
        }, true);
        $(".container-hero").css({ height: height + "px" });
        $(".container-hero").css({ width: new_width + "px" });

        $("#blog-header").css("marginLeft", $("#blog-body").css("marginLeft"));

    });

    $('#navbarCollapse').on('hidden.bs.collapse', function () {

        $(".navbar").removeClass("navbar-dark bg-dark");
    });

    $('#navbarCollapse').on('show.bs.collapse', function () {

        $("#navbarCollapse").css({ height: parseInt(height) + "px !important" });

        $(".navbar").addClass("navbar-dark bg-dark");
    })


    if($('.ml3').length > 0){

         // Wrap every letter in a span
         var textWrapper = document.querySelector('.ml3');
         console.log(textWrapper);
         textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
         
        
         var textWrapper = document.querySelector('.ml13');
         textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
         
      
         
         anime.timeline()
         /*.add({
             targets: '.ml6 .letter',
             translateY: ["1.1em", 0],
             translateZ: 0,
             duration: 750,
             delay: (el, i) => 50 * i
           })*/
           /*
         .add({
             targets: '.ml4 .letter',
             translateY: [-100,0],
             easing: "easeOutExpo",
             duration: 1400,
             delay: (el, i) => 30 * i
           })*/
         .add({
             targets: '.ml3 .letter',
             opacity: [0,1],
             easing: "easeInOutQuad",
             duration: 750,
             delay: (el, i) => 75 * (i+1)
         })
         .add({
            targets: '.ml13 .letter',
            translateY: [100,0],
            translateZ: 0,
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 1400,
            delay: (el, i) => 300 + 30 * i
          })
         /*.add({
             targets: '.ml4 .letter',
             translateY: [-100,0],
             easing: "easeOutExpo",
             duration: 1400,
             delay: (el, i) => 30 * i
           })*/
         /*.add({
             targets: '.ml3',
             opacity: 0,
             duration: 1000,
             easing: "easeOutExpo",
             delay: 1000
         })*/;
    }
});

