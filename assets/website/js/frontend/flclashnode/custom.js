jQuery(function ($) {
	'use strict';

    // Navbar JS
    try {
        const nav = document.querySelector('.navbar');
        let navTop = nav.offsetTop;
        
        function fixedNav() {
            if (window.scrollY >= navTop) {
                nav.classList.add('sticky');
            } else {
                nav.classList.remove('sticky');
            }
        }
        window.addEventListener('scroll', fixedNav);
    } catch (err) {}

    // Header Sticky Js
    window.addEventListener('scroll', event => {
        const height = 150;
        const { scrollTop } = event.target.scrollingElement;
        document.querySelector('#navbar').classList.toggle('sticky', scrollTop >= height);
    });

    // Back to Top
    const getId = document.getElementById("backtotop");
    if (getId) {
        const topbutton = document.getElementById("backtotop");
        topbutton.onclick = function (e) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        };
        window.onscroll = function () {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                topbutton.style.opacity = "1";
            } else {
                topbutton.style.opacity = "0";
            }
        };
    }

    // Counter Js
    try {
        if ("IntersectionObserver" in window) {
            let counterObserver = new IntersectionObserver(function (entries, observer) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                    let counter = entry.target;
                    let target = parseInt(counter.innerText);
                    let step = target / 200;
                    let current = 0;
                    let timer = setInterval(function () {
                        current += step;
                        counter.innerText = Math.floor(current);
                        if (parseInt(counter.innerText) >= target) {
                        clearInterval(timer);
                        }
                    }, 10);
                    counterObserver.unobserve(counter);
                    }
                });
            });

            let counters = document.querySelectorAll(".counter");
                counters.forEach(function (counter) {
                counterObserver.observe(counter);
            });
        }
    } catch {}

    // Animation Js
    scrollCue.init();

    // Hover JS
    try {
        var elements = document.querySelectorAll("[id^='my-element']");
            elements.forEach(function(element) {
            element.addEventListener("mouseover", function() {
                elements.forEach(function(el) {
                el.classList.remove("active");
                });
                element.classList.add("active");
            });
        });
    
    } catch (err) {}


    //
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        thumbs: {
          swiper: swiper,
        },
    });


    try {
        document.addEventListener("DOMContentLoaded", function() {
            const cards = document.querySelectorAll(".second-staff-card");
            cards.forEach(function(card) {
            card.addEventListener("mouseover", function() {
                cards.forEach(function(card) {
                card.classList.remove("active");
                });
                card.classList.add("active");
            });
            });
        });
    } catch (err) {}

    // Second Testimonial Slider
    var swiper = new Swiper(".second-testimonial-slider", {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        spaceBetween: 25,
        loop: true,
        speed:1000,
        breakpoints: {
            0: {
              slidesPerView: 1
            },
            576: {
                slidesPerView: 1
            },
            768: {
              slidesPerView: 2
            },
            992: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 3
            },
        }
    });



}(jQuery));


// Plus Minus JS
try {
    var resultEl = document.querySelector(".resultSet"),
    plusMinusWidgets = document.querySelectorAll(".add-to-cart-counter");
        for (var i = 0; i < plusMinusWidgets.length; i++) {
            plusMinusWidgets[i].querySelector(".minusBtn").addEventListener("click", clickHandler);
            plusMinusWidgets[i].querySelector(".plusBtn").addEventListener("click", clickHandler);
            plusMinusWidgets[i].querySelector(".count").addEventListener("change", changeHandler);
        }
        function clickHandler(event) {
            var countEl = event.target.parentNode.querySelector(".count");
            if (event.target.className.match(/\bminusBtn\b/)) {
                countEl.value = Number(countEl.value) - 1;
            } 
            else if (event.target.className.match(/\bplusBtn\b/)) {
                countEl.value = Number(countEl.value) + 1;
            }
            triggerEvent(countEl, "change");
        };
        function changeHandler(event) {
        resultEl.value = 0;
        for (var i = 0; i < plusMinusWidgets.length; i++) {
            resultEl.value = Number(resultEl.value) + Number(plusMinusWidgets[i].querySelector('.count').value);
        }
    };
    function triggerEvent(el, type){
        if ('createEvent' in document) {
            var e = document.createEvent('HTMLEvents');
            e.initEvent(type, false, true);
            el.dispatchEvent(e);
        } 
        else {
            var e = document.createEventObject();
            e.eventType = type;
            el.fireEvent('on'+e.eventType, e);
        }
    }
} catch {}



try {
    
    // Scroll Animation
    window.addEventListener('scroll', reveal1);
    function reveal1(){
        var reveals = document.querySelectorAll('.reveal1');
        for (var i = 0; i < reveals.length; i++){
            var win_height = window.innerHeight;
            var reveal_top = reveals[i].getBoundingClientRect().top;
            var reveal_point = 100;
            if (reveal_top < win_height - reveal_point) {
            reveals[i].classList.add('active');
            } 
        }
    }

} catch {}


try {
    
    // Scroll Animation
    window.addEventListener('scroll', reveal2);
    function reveal2(){
        var reveals = document.querySelectorAll('.reveal2');
        for (var i = 0; i < reveals.length; i++){
            var win_height = window.innerHeight;
            var reveal_top = reveals[i].getBoundingClientRect().top;
            var reveal_point = 100;
            if (reveal_top < win_height - reveal_point) {
            reveals[i].classList.add('active');
            } 
        }
    }

} catch {}


// Counter Js
try {
    if ("IntersectionObserver" in window) {
        let counterObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                let counter = entry.target;
                let target = parseInt(counter.innerText);
                let step = target / 200;
                let current = 0;
                let timer = setInterval(function () {
                    current += step;
                    counter.innerText = Math.floor(current);
                    if (parseInt(counter.innerText) >= target) {
                    clearInterval(timer);
                    }
                }, 10);
                counterObserver.unobserve(counter);
                }
            });
        });

        let counters = document.querySelectorAll(".counter");
            counters.forEach(function (counter) {
            counterObserver.observe(counter);
        });
    }
} catch {}


// Cursor Point JS
try {
   
    const follower = document.getElementById("mouse-follower");
    const dot = document.getElementById("dot");
    
    window.addEventListener("mousemove", (e) => {
        follower.animate(
            [
            {
                opacity: 1,
                left: `${e.clientX}px`,
                top: `${e.clientY}px`,
                easing: "ease-in-out"
            }
            ],
            {
            duration: 2000,
            fill: "forwards"
            }
        );
        dot.animate(
            [
            {
                opacity: 1,
                left: `${e.clientX}px`,
                top: `${e.clientY}px`,
                easing: "ease-in-out"
            }
            ],
            {
            duration: 1000,
            fill: "forwards"
            }
        );
    });
    window.addEventListener("mouseout", (e) => {
        if (e.relatedTarget === null) {
            follower.animate(
            [
                {
                opacity: 1
                },
                {
                opacity: 0,
                easing: "ease-in-out"
                }
            ],
            {
                duration: 100,
                fill: "forwards"
            }
            );
    
            dot.animate(
            [
                {
                opacity: 1
                },
                {
                opacity: 0,
                easing: "ease-in-out"
                }
            ],
            {
                duration: 100,
                fill: "forwards"
            }
            );
        }
    });


} catch {}
