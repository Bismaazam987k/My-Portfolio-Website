var crs = document.querySelector(".cursor")
var blu = document.querySelector(".cursor2")
document.addEventListener("mousemove",function(dets){
  crs.style.left = dets.x +"px"
  crs.style.top = dets.y +"px"
  blu.style.left = dets.x -250+"px"
  blu.style.top = dets.y -250 +"px"
})

if (window.location.pathname.includes('contact')) {
    document.body.classList.add('contact-page');
  } else {
    document.body.classList.remove('contact-page');
  }

  
gsap.to(".nav",{
    backgroundColor:"#000",
    height:"200px",
    duration:0.5,
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        // markers:true,
        // start:"top -10%",
        // end :"top -11% ",
        scrub:1
    }
   
})
gsap.to(".main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:".main",
        scroller: "body",
        markers:true,
        // start:"top -25%",
        // end: "top -70%",
        scrub:2
}})

var tl = gsap.timeline()

tl.from("h4",{
    y:-30,
    duration:1,
    opacity:0,
    stagger:0.3,

})
tl.from("h5",{
    y:-40,
    duration:1,
    opacity:0,
    stagger:0.3,
    scale:0.2

})
tl.from("h1",{
    y:-40,
    duration:1,
    opacity:0,
    stagger:0.3,
    scale:0.2

})
tl.from("h2",{
    y:-40,
    duration:1,
    opacity:0,
    stagger:0.3,
    scale:0.2

})
tl.from("p",{
    y:-40,
    duration:1,
    opacity:0,
    stagger:0.3,
    scale:0.2

})

   const quotes = [
            "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
            "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
            "It is not how old you are, but how you are old. – Jules Renard",
            "Life is what happens when you're busy making other plans. – John Lennon",
            "In the end, we will remember not the words of our enemies, but the silence of our friends. – Martin Luther King Jr."
        ];

        // Elements to manipulate
        const quoteContainer = document.getElementById("dynamic-quote");
        const quoteText = document.getElementById("quote-text");
        const quoteLeft = document.getElementById("quote-left");
        const quoteRight = document.getElementById("quote-right");

        let currentQuoteIndex = 0;

        // Function to toggle quotation marks and update text
        function toggleQuotationEffect() {
            // Add 'closer' class for animation
            quoteContainer.classList.toggle("closer");

            // Change the text if the marks are close
            if (quoteContainer.classList.contains("closer")) {
                currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
                quoteText.textContent = quotes[currentQuoteIndex];
            }
        }

        // Set an interval to repeat the effect
        setInterval(toggleQuotationEffect, 5000); // 5 seconds per cycle