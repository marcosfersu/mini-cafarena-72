		$(document).ready(function(){
          $('.individual-noticia > .titulo-noticia').hover(function() {
            $(this).parent('.individual-noticia').find('.img-noticia').toggleClass('borde');
          });                
        });