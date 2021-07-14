$(document).ready(function(){
    $(window).scroll(function(){
      let headerscroll = $(this).scrollTop();
      console.log(headerscroll);
      let headerbg = $('#header');
      if(headerscroll > 800){
          $(headerbg).addClass('active');
      }else{
         $(headerbg).removeClass('active');
      }
    })
});