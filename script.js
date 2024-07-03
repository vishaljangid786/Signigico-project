function homePageAnimation() {
    gsap.set(".slidesm", { scale: 5 })

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            start: "top top",
            end: "bottom bottom",
            // markers:true,
            // pin :true,
            scrub: 2
        },
    })

    tl
        .to(".vdodiv", {
            '--clip': "0%",
            ease: Power2,
        }, 'a')
        .to(".slidesm", {
            scale: 1,
            ease: Power2,
        }, 'a')
        .to(".lft", {
            xPercent: -10,
            ease: Power4,
        }, 'b')
        .to(".rgt", {
            xPercent: 10,
            ease: Power4,
        }, 'b')
}
function realPageAnimation() {
    gsap.to(".slide", {
        scrollTrigger: {
            trigger: ".real",
            start: "top top",
            end: "bottom bottom",
            // pin :true,
            scrub: 1
        },
        xPercent: -300,
        ease: Power4
    })
}

function teamAnimation() {
    document.querySelectorAll(".listelem")
        .forEach(function (el) {
            el.addEventListener("mousemove", function (dets) {
                gsap.to(this.querySelector(".picture"), {
                    opacity: 1,
                    x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
                    ease: Power4,
                    duration: .5
                });
                gsap.to(this.querySelector(".bluelayer"), {
                    height:"100%",
                    ease: Power4,
                    duration: .5
                });
            });
            el.addEventListener("mouseleave", function (dets) {
                gsap.to(this.querySelector(".picture"), {
                    opacity: 0,
                    ease: Power4,
                    duration: .5
                });
                gsap.to(this.querySelector(".bluelayer"), {
                    height:"0%",
                    ease: Power4,
                    duration: .5
                });
            });
        });
}

function paraAnimation1() {
    var clutter = "";
    document.querySelector(".textpara")
        .textContent.split("")
        .forEach(function (e) {
            if (e === " ") clutter += `<span>&nbsp;</span>`
            clutter += `<span>${e}</span>`
        })
    document.querySelector(`.textpara`).innerHTML = clutter;

    gsap.set(".textpara span", { opacity: .1 })
    gsap.to(".textpara span", {
        scrollTrigger: {
            trigger: ".para-parent",
            start: "top 0%",
            end: "bottom 150%",
            scrub: .4,
        },
        opacity: 1,
        stagger: .7,
        ease: Power4
    })
}

function paraAnimation2() {
    var clutter = "";
    document.querySelector(".textpara2")
        .textContent.split("")
        .forEach(function (e) {
            if (e === " ") clutter += `<span>&nbsp;</span>`
            clutter += `<span>${e}</span>`
        })
    document.querySelector(`.textpara2`).innerHTML = clutter;

    gsap.set(".textpara2 span", { opacity: .1 });
    gsap.to(".textpara2 span", {
        scrollTrigger: {
            trigger: ".para2",
            start: "top 50%",
            end: "bottom 50%",
            scrub: .1,
        },
        opacity: 1,
        stagger: .03,
        ease: Power4
    })
}

function loco() {
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}

function capsulesAnimation() {
    gsap.to(".capsule:nth-child(2)", {
        scrollTrigger: {
            trigger: ".capsules",
            start: "top 70%",
            end: "bottom bottom",
            scrub: 1
        },
        y: 0,
        ease: Power4
    })
}

function capsulesAnimation2() {
    gsap.to(".capsule:nth-child(1)", {
        scrollTrigger: {
            trigger: ".capsules",
            start: "top 100%",
            end: "bottom top",
            scrub: 1
        },
        y: 0,
        ease: Power4
    })
}

function bodyColorChange() {
    document.querySelectorAll(".section")
        .forEach(function (e) {
            ScrollTrigger.create({
                trigger: e,
                start: "top 50%",
                end: "bottom 50%",
                onEnter: function () {
                    document.body.setAttribute("theme", e.dataset.color);
                },
                onEnterBack: function () {
                    document.body.setAttribute("theme", e.dataset.color);
                }
            })
        })
}

function cardAnimation() {
    document.querySelectorAll(".card")
    .forEach(function (e) {
        gsap.to(e, {
            scrollTrigger: {
                trigger: e,
                start: "top 50%",
                end: "bottom top",
                scrub:1
            },
            scale:1.1,
            ease:Power4
        })
    })
    document.querySelector(".card").addEventListener("scroll", function(){
        e.style.backgroundColor="red"
    });
}

    

capsulesAnimation();
capsulesAnimation2();
homePageAnimation();
realPageAnimation();
teamAnimation();
paraAnimation1();
paraAnimation2();
loco();
bodyColorChange();
cardAnimation();





var h6s = document.querySelectorAll("h6");
var index = 0;
var animating = false;
const btn = document.querySelector('.btn-hover');
const items = document.querySelectorAll('.btn-hover h6 span');
const front = document.querySelector('.front');
function upDownEffect() {
    document.querySelector(".btn-hover").addEventListener("mouseenter", function () {
    if (!animating) {
        animating = true;
        gsap.to(h6s[index], {
            top: "-=100%",
            ease: Expo.easeInOut,
            duration: .8,
            onComplete: function () {
                gsap.set(this._targets[0], { top: "100%" });
                animating = false;
            },
        });

        index === h6s.length - 1 ? (index = 0) : index++;

        gsap.to(h6s[index], {
            top: "-=100%",
            ease: Expo.easeInOut,
            duration: .8,
        });
    }
})

btn.addEventListener('mouseenter', function () {
    items.forEach((item, index) => {
        setTimeout(() => {
            item.style.transform = 'translateY(-100%)';
        }, index * 8);
    });
});
}



// btn.addEventListener('mouseleave', function () {
//     items.forEach((item, index) => {
//             item.style.transform = 'translateY(-100%)';
//     });
// });


upDownEffect();
