console.log('Welcome to Task!');

$(document).scroll(function(){
    "use strict";
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
    "use strict";
    $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
    });
    
    $('#search, #search button.close').on('click keyup', function(event) {
        if (event.target === this || event.target.className === 'close' || event.keyCode === 27) {
            $(this).removeClass('open');
        }
    });
});

// When the user scrolls the page, execute myFunction 


function myFunction() {
    "use strict";
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

window.onscroll = function() {"use strict"; myFunction();};


//youtube script
var tag = document.createElement('script');
tag.src = "//www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

onYouTubeIframeAPIReady = function () {
    player = new YT.Player('player', {
        videoId: 'Nsec4hWZz2M',  // youtube video id
        playerVars: {
            'autoplay': 0,
            'rel': 0,
            'showinfo': 0
        },
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

var p = document.getElementById ("player");
$(p).hide();

var t = document.getElementById ("thumbnail");
t.src = "http://img.youtube.com/vi/Nsec4hWZz2M/maxresdefault.jpg";

onPlayerStateChange = function (event) {
    if (event.data == YT.PlayerState.ENDED) {
        $('.start-video').fadeIn('normal');
    }
}

$(document).on('click', '.start-video', function () {
    $(this).hide();
    $("#player").show();
    $("#thumbnail_container").hide();
    player.playVideo();
});