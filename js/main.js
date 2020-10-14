$(function(){
    "use strict";
    //EFECTO Promos
    var ocultar=0;
    var ocultar2=0;

    

        $('.promo a').on('click',function(e){
            e.preventDefault();
            if(ocultar==0){
                $(".thumb h2").html('<i class="fas fa-angle-double-down">');
                $(".thumb h2").css({transition: "all .3s linear", left: "1.5rem"})

                $(".promo").animate({right: "0rem"},500);
                $(".texto-promo").css({right: "-25rem"},1);
                $(".texto-promo").animate({opacity: 1,right: "0rem"},600);
                ocultar++;
            }
            else {
                $(".thumb h2").html('<i class="fas fa-angle-double-up"> Promos');
                $(".thumb h2").css({transition: "all .3s linear", left: "-20%"})
                $(".promo").animate({right: "-25rem"},500);
                $(".texto-promo").animate({opacity: 0,right: "-25rem"},1000);
                ocultar--;
            }
        })
        //Fin Efecto

        $.fn.customFileInput = function () {
 
            return this.each(function() {
                var t = $(this),
                    input = t.find('input'),
                    fakeTrigger = t.find('.bt'),
                    fakeInput = t.find('.fileName');
         
                input.change(function () {
                    // get only file name, with out path
                    var fileName = input.val().split('\\').pop();
                    fakeInput.html(fileName);
                });
         
                input.click(function (e) {
                    e.stopPropagation();
                })
         
                t.click(function (e) {
                    e.preventDefault();
                    input.click();
                });
         
            });
        };
         
        $(function () {
            $('.customFileInput').customFileInput();
        });

        
        
        $(".image-galery .img-1").on("click",efecto);
        
        function efecto() {

            $(this).css({
                fontWeight: 900,
                color:"red"
            });
            $(this).children("a").css({
                color:"white"
            })
        };

        $("#menu").on("click", function(){
            if (ocultar2==0) {
                $(".sm-log img").animate({
                    left:-500,
                },1000);
                $(".main-nav a").animate({
                    opacity:1,
                    display:"show"
                });
                $(".bar").animate({
                    "height": "28rem"
                },1000);
                $(".main-nav").css({
                    display:"flex"
                });
                $(".video").css({
                    top:"6rem"
                });
                ocultar2++;
            }else{
                $(".sm-log img").animate({
                    left: "-4.5%",
                },1000);
                $(".main-nav a").animate({
                    opacity:0,
                    display:"hidde"
                });
                $(".bar").animate({
                    "height": "7.1rem"
                },1000);
                $(".main-nav").animate({
                    display:"none"
                });
                $(".video").css({
                    top:"5rem"
                });
                ocultar2--;
            }
        } )





});
