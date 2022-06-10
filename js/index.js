'use strict';

gsap.registerPlugin(ScrollTrigger);
// Set animation to reveal project images
var visuals = gsap.utils.toArray('.project-visuals');
visuals.forEach((visual) => {
  gsap.to(visual, {
    "--width-after": 0,
    duration: 1.4,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger:visual,
      start:"top 60%",
      end:"bottom 25%",
      toggleActions:"restart none none reverse"
    }
  });
});
