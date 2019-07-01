    var burger = document.querySelector(".burger");
    var navW = document.querySelector(".page-nav--wrapper");
    var nav = document.querySelector('.page-nav');
    var cssProperty = function(elem, prop) {
        return window.getComputedStyle(elem, prop).getPropertyValue(prop);
    }
    burger.addEventListener('click', function(def) {
        def.preventDefault();

        navW.classList.toggle('page-nav--show');
        nav.classList.toggle('page-nav--view');
        burger.classList.toggle('burger--cross');
        var stick = document.querySelectorAll(".burger__stick");
        console.log(navW.style.height)

        for (var i = 0; i < stick.length; i++) {
            stick[i].classList.toggle('burger__stick--active')

        }
        console.log(navW.classList.contains('page-nav--show'))
            // setTimeout(() => {
        if (navW.classList.contains('page-nav--show') == false) {
            setTimeout(() => {
                nav.classList.add('page-nav--hide')
            }, 700);
        } else {
            nav.classList.remove('page-nav--hide')
        }

    })


    var range = document.querySelector(".big-range__range");
    var range__before = document.querySelector(".big-range__before")
    range.onchange = function() {
        console.info(range__before.style.opacity);
        range__before.style.opacity = (range.value + "%")
    }