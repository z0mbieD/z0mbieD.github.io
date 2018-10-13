(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

    $('.sidenav > li > a').click(function () {
        $('.sidenav').sidenav('close');
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
