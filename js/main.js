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
            ocultar++;
        }else{
            $(".promo").animate({
                right: "-25rem"
                },500);
                ocultar--;
        }
        })
        //Fin Efecto
});
