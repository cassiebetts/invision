jQuery(document).ready(function ($) {


    var players = document.querySelectorAll('.youtube-player')

    var loadPlayer = function (event) {
        var target = event.currentTarget
        var iframe = document.createElement('iframe')

        iframe.height = target.clientHeight
        iframe.width = target.clientWidth
        iframe.src = 'https://www.youtube.com/embed/' + target.dataset.videoId + '?autoplay=1'
        iframe.setAttribute('frameborder', 0)

        target.classList.remove('pristine')

        if (target.children.length) {
            target.replaceChild(iframe, target.firstElementChild)
        } else {
            target.appendChild(iframe)
        }
    }

    var config = { once: true }

    Array.from(players).forEach(function (player) {
        player.addEventListener('click', loadPlayer, config)
    });

        $(".gallery-slider").slick( {
                dots:!1, arrows:!0, infinite:!0, slidesToShow:1, autoplaySpeed:1500, asNavFor:".slider-nav", autoplay:!1, slidesToScroll:1, responsive:[ {
                    breakpoint:992, settings: {
                        dots: !1, infinite: !0, slidesToShow: 1, slidesToScroll: 1
                    }
                }
                    , {
                        breakpoint:768, settings: {
                            slidesToShow: 1, slidesToScroll: 1
                        }
                    }
                    , {
                        breakpoint:480, settings: {
                            dots: !1, arrows: !1, slidesToShow: 1, slidesToScroll: 1
                        }
                    }
                ]
            }

        );
        $(".slider-nav").slick( {
                slidesToShow:5, slidesToScroll:1, arrows:!1, asNavFor:".gallery-slider", dots:!1, centerMode:!0, focusOnSelect:!0, responsive:[ {
                    breakpoint:992, settings: {
                        dots: !1, infinite: !0, slidesToShow: 4, slidesToScroll: 1
                    }
                }
                    , {
                        breakpoint:768, settings: {
                            slidesToShow: 3, slidesToScroll: 1
                        }
                    }
                    , {
                        breakpoint:480, settings: {
                            dots: !1, arrows: !1, slidesToShow: 2, slidesToScroll: 1
                        }
                    }
                ]
            }

        );

});
