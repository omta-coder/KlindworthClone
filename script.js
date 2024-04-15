gsap.from("#page1 img",{
    width:"25%",
    duration:2,
    top:"88%",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        start:"top 0%",
        end:"top -80%",
        scrub:2,
        pin:true
    }
})



var tl = gsap.timeline()

tl.to(".overlay",{
    top:0
})
tl.from(".overlay h3",{
    y:60,
    stagger: .3,
    opacity:0
})

tl.pause()

let menu = document.querySelector("#menu")
let nav = document.querySelector("#nav")

let menuVisible = false;

menu.addEventListener("click", () => {
    if (menuVisible) {
        tl.reverse();
        menuVisible = false;
    } else {
        tl.play();
        menuVisible = true;
    }
});


var element = document.querySelectorAll('.element')

element.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        gsap.to("#more",{
            opacity:1,
            transform: `translate(-50%,-50%) scale(1)`

        })
    })
    e.addEventListener("mouseleave",function(){
        gsap.to("#more",{
            opacity:0,
            transform: `translate(-50%,-50%) scale(0)`

        })
    })
    })
   
    var page2Elements = document.querySelector(".page2-elements")
    
    var rect = page2Elements.getBoundingClientRect()
    
    let elemX = rect.x
    let elemY = rect.y
    console.log(elemX + " " + elemY);

    page2Elements.addEventListener("mousemove",function(dets){
        gsap.to("#more",{
            x:dets.x-elemX, 
            y:dets.y-elemY
        })
        console.log(dets.x);
        console.log(dets.y);
    })

    gsap.to("#page3 #img1",{
        scale:0.85,
        filter: 'brightness(0.8)',
        scrollTrigger:{
            trigger:"#img1",
            scroller:"body",
            markers:true,
            start:"top 5%",
            end:"top -50%",
            scrub:true
        }
    })
    gsap.to("#page3 #img2",{
        scale:0.85,
        filter: 'brightness(0.8)',
        scrollTrigger:{
            trigger:"#img2",
            scroller:"body",
            markers:true,
            start:"top 5%",
            end:"top -50%",
            scrub:true
        }
    })
    gsap.to("#page3 #img3",{
        // scale:0.85,
        filter: 'brightness(0.8)',
        scrollTrigger:{
            trigger:"#img3",
            scroller:"body",
            markers:true,
            start:"top 5%",
            end:"top -50%",
            scrub:true
        }
    })