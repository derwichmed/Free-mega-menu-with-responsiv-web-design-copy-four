$(function (){
    $('body > header .nav_bar .nav_bar_item').mouseover(function (){
       $('body > header .nav_bar .nav_bar_item .mega_menu:visible').hide();
       $('body > header .nav_bar .nav_bar_item .drop_down_menu:visible').hide();
       $(this).find('.mega_menu').show(); 
       $(this).find('.drop_down_menu').show();
    });
    
    isNavBarMenuHidden = true;
    $('#mobile_navs .menu_icon').click(function (){
        $('body > header .search_box:visible').hide(); 
        if(isNavBarMenuHidden){
          $('.nav_bar').fadeIn("slow");
          isNavBarMenuHidden = false;
      }
      else{
          $('.nav_bar').fadeOut("slow");
          isNavBarMenuHidden = true;
      }
   });
   
   isSearchBoxHidden = true;
    $('#mobile_navs .search_icon').click(function (){
        $('.nav_bar:visible').hide();
        if(isSearchBoxHidden){
          $('body > header .search_box').fadeIn("slow");
          isSearchBoxHidden = false;
      }
      else{
          $('body > header .search_box').fadeOut("slow");
          isSearchBoxHidden = true;
      }
   });
});