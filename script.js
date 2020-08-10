$('.navbar-collapse a').click(function () {
    $(".navbar-collapse").collapse('hide');
});



 $(function(){

     $('a[href*=\\#]').click(function() {

     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
         && location.hostname == this.hostname) {

             var $target = $(this.hash);

             $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

             if ($target.length) {

                 var targetOffset = $target.offset().top;
                
                // Aquí se lo aplico al HTML en sí y en concreto a una ventana modal
               
                 $('html,body,#modalContLoad').animate({scrollTop: targetOffset}, 1000);                 

            }
       }
   });
});