{/* <div onclick="location.href='/';">&nbsp;</div> */}
$(".toggle_btn").click(function(){
    $(".toggle-menu").toggle();
  });

//   $(".toggle_btn").click(function(){
//     $("span").text($("span").text().replace("+", "-"));
//   });


$('.toggle_btn').click(function() {

    if($(this).hasClass('clicked')) {
      $(this).text('+').toggleClass('clicked');
    } else {
      $(this).text('-').toggleClass('clicked');
    }
  });

