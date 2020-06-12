$(Document).ready(function(){
    //EFECTO Promos
    var ocultar=0;

        $('.promo a').on('click',function(e){
            e.preventDefault();
            if(ocultar==0)
            {
            $(".promo").animate({
            right: "0rem"
            },500);
/*             $(".texto-promo").css({
                right: "-25rem"
                },1); */
            $(".texto-promo").animate({
                opacity: 1,
               right: "0rem"
                },600);
            ocultar++;
        }else{
            $(".promo").animate({
                right: "-25rem"
                },500);
                $(".texto-promo").animate({
                    opacity: 0,
                   right: "-25rem"
                    },1000);
                ocultar--;
        }
        })
        //Fin Efecto
});
