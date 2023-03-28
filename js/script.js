$(window).resize(function () {
  var winW = $(window).width();
  var devW = 900;
  if (winW <= devW) {
    $('.mv-img').css('width', '100%');
  } else {
    $('.mv-img').css('width', '33.3333%');
  }
});





$(window).on('scroll', function () {
  //スクロール位置を取得
  var scrollY = $(window).scrollTop();
  //background-size+(スクロール位置/10)
  var winW = $(window).width();
  var devW = 900;
  if (winW <= devW) {
    var bgSize = 100 - (scrollY / 10);
    //background-sizeにbgSizeを設定
    $('.mv-img').css('width', bgSize + '%');

  } else {
    var bgSize = 33.3333 + (scrollY / 10);

    //bgSizeが200より小さければ
    if (bgSize < 200) {
      //background-sizeにbgSizeを設定
      $('.mv-img').css('width', bgSize + '%');
    }
  }
});


$(function () {
  var sidebtn = $('#side-btn-cont');
  var header = $('.header')
  sidebtn.hide();
  header.hide();

  var winW = $(window).width();
  var devW = 900;
  if (winW >= devW) {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 4100) {
        sidebtn.fadeOut();
      }
      else if ($(this).scrollTop() > 500) {
        sidebtn.fadeIn();
        header.fadeIn();
      } else {
        sidebtn.fadeOut();
        header.fadeOut();
      }
    });
  } else {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
        header.fadeIn();
      } else {
        header.fadeOut();
      }
    });
  }
});


$(function () {
  $('.hamburger').click(function () {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $('.globalMenuSp').addClass('active');
    } else {
      $('.globalMenuSp').removeClass('active');
    }
  });
  $('.sns-link').click(function () {
    $('.hamburger').toggleClass('active');

    if ($('.hamburger').hasClass('active')) {
      $('.globalMenuSp').addClass('active');
    } else {
      $('.globalMenuSp').removeClass('active');
    }
  });
});


// リンククリック時の移動の動作
$('a[href^="#"]').on("click", function () {
  var speed = 300;
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? "html" : href);
  var position = target.offset().top;
  $("html, body").animate(
    {
      scrollTop: position,
    },
    speed,
    "swing"
  );
  return false;
});


$(function () {
  $(".one").each(function (i, elem) {
    $(window).on("load scroll resize", function () {
      var one = $(elem).offset().top;
      var two = $(window).height();
      var three = $(window).scrollTop();
      var showClass = "show";
      var timing = 50; // 50px, add to css
      if (three >= one - two + timing) {
        $(elem).addClass(showClass);
      } else {
        $(elem).removeClass(showClass);
      }
    });
  });
});



function fadein_blocks(s) {
  $(window).scroll(function () {
    $(s).each(function (s) {
      var i = $(this).offset().top;
      $(window).scrollTop() > i - $(window).height() + 100 &&
        $(this)
          .delay(300 * s)
          .queue(function () {
            $(this).addClass("is-fadein");
          });
    });
  });
}
!(function (s) {
  $(window).scroll(function () {
    $(s).each(function () {
      var s = $(this).offset().top;
      $(window).scrollTop() > s - $(window).height() + 100 &&
        $(this).addClass("is-fadein");
    });
  });
})(".js-fadein");