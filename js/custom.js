let first = true,
  second = true;

// function start(e) {
//   event.preventDefault();

//   if (first) {
//     $(".big__fortune").addClass("winPosition");
//     setTimeout(() => {
//       $("#popup2").fadeIn(500);
//     }, 4000);
//     // first = false;
//     // return;
//   }

//   if (second) {
//     $(".popup__container").fadeOut(500);
//   }

//   $(".big__fortune-2").addClass("winPosition");
//   setTimeout(function () {
//     $("#popup1").fadeIn(500);
//   }, 4500);
//   second = false;
//   return;
// }

// $(function () {
//   $(window).height() < ($(window).width() / 100) * 56.22 &&
//     $("body").addClass("newH"),
//     $(".closePopup").click(function (e) {
//       e.preventDefault();
//     });
// });

//---------------------------------

$("#update").click(function (event) {
  $(".big__fortune").toggleClass("winPosition");
  //event.preventDefault();
  /* setTimeout(() => {
    $("#popup2").fadeToggle(100);
  }, 4000); */
});
//$(".big__fortune").removeClass("winPosition");

// $("#update").click(function (event) {
//   $(".big__fortune").addClass("winPosition");
// });

var clickCount = 0;

$("#update").click(function (event) {
  if (clickCount % 2 == 0) {
    setTimeout(() => {
      $("#popup2").fadeToggle(100);
    }, 4500);

    clickCount++;
  } else {
    setTimeout(() => {
      $("#popup1").fadeToggle(100);
    }, 4000);
  }
});

//$("#update").click(clickCount)

//----------------------------
$("#counter").data("count", 2);
$("#update").click(function () {
  $("#counter").html(function () {
    var $this = $(this),
      count = $this.data("count") - 1;

    $this.data("count", count);
    if (count == undefined || count == "" || count <= 0) {
      var count = 0;
    }
    return count;
  });
});

//-------------------------------------------
