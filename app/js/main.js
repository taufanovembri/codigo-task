console.log('Welcome to Task!');

$(document).scroll(function(){
    $('.block_video, .caption-video, .block_progress').toggleClass('scroll', $(this).scrollTop() > 600);
    $('.caption-video span').click(function() {
        $(this).parentsUntil( $( '.block' ) ).addClass('hide');
    });
    $(window).scroll(function() {

        if ($(this).scrollTop() < 500)
         {
            $('.block_video').removeClass('hide');
         }
        else
         {
          return;
         }
     });
    
});

$(function () {
    $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
    });
    
    $('#search, #search button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });
});

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

