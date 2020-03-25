

 //Show Hide nas logos
 $( ".col_logos" )
 .mouseover(function() {
 var id_logo = $(this).data('logo');
 $('.logo_default_'+id_logo).hide();
 $('.logo_hover_'+id_logo).show();
 })
 .mouseout(function() {
 var id_logo = $(this).data('logo');
 $('.logo_default_'+id_logo).show();
 $('.logo_hover_'+id_logo).hide();
   });

 $('.bxslider').bxSlider();
 $('.slider1').bxSlider({
 controls: false
 });


 
$(document).ready(function(){
  $(".menu-icon").click(function(){
    $("#menu-head").toggle();
  });
});
