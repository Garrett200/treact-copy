function inViewAnimation() {
    const inViewport = (entries, observer) => {
        entries.forEach(entry => {
            entry.target.classList.toggle("enter-left", entry.isIntersecting);
        });
    };

    const inViewport2 = (entries, observer) => {
        entries.forEach(entry => {
            entry.target.classList.toggle("enter-right", entry.isIntersecting);
        });
    };

    const Obs2 = new IntersectionObserver(inViewport2);
    const Obs = new IntersectionObserver(inViewport);
    const obsOptions = {};
    const ELs_inViewport = document.querySelectorAll('.animation__enter-left');
    const ELs_inViewport2 = document.querySelectorAll('.animation__enter-right');

    ELs_inViewport.forEach(EL => {
        Obs.observe(EL, obsOptions);
    });

    ELs_inViewport2.forEach(EL => {
        Obs2.observe(EL, obsOptions);
    });
}

inViewAnimation();






/*
document.addEventListener("DOMContentLoaded", function(event) {
    document.addEventListener("scroll", function(event) {
        let animatedSection1 = document.getElementsByClassName("animation__enter-left");
        let animatedSection2 = document.getElementsByClassName("animation__enter-right");
        const windowOffsetTop = window.innerHeight + window.scrollY;

        Array.prototype.forEach.call(animatedSection1, (animatedBox) => {
            const animatedBoxOffsetTop = animatedBox.offsetTop;

            if (windowOffsetTop >= animatedBoxOffsetTop) {
                addClass(animatedBox, "enter-left");
            }
        });

        Array.prototype.forEach.call(animatedSection2, (animatedBox) => {
            const animatedBoxOffsetTop = animatedBox.offsetTop;

            if (windowOffsetTop >= animatedBoxOffsetTop) {
                addClass(animatedBox, "enter-right");
            }
        });
    });
});

function addClass(element, className) {
    const arrayClasses = element.className.split(" ");
    if (arrayClasses.indexOf(className) === -1) {
        element.className += " " + className;
    }
}


document.addEventListener("DOMContentLoaded", function(event) {
    document.addEventListener("scroll", function(event) {
        let animatedBoxes = document.getElementsByClassName("animation__enter-right");
        const windowOffsetTop = window.innerHeight + window.scrollY;

        Array.prototype.forEach.call(animatedBoxes, (animatedBox) => {
            const animatedBoxOffsetTop = animatedBox.offsetTop;

            if (windowOffsetTop >= animatedBoxOffsetTop) {
                addClass(animatedBox, "enter-right");
            }
        });
    });
});

function addClass(element, className) {
    const arrayClasses = element.className.split(" ");
    if (arrayClasses.indexOf(className) === -1) {
        element.className += " " + className;
    }
}

*/