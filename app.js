let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".main",
    start: "top",
    end: "100%",
    scrub: "true",
    pin: true,
  },
});

// tl.fromTo(
//   ".main",
//   {
//     clipPath: "circle(10%)",
//   },
//   {
//     clipPath: "circle(75%)",
//     duration: 2,
//   }
// );

tl.fromTo(
  ".logo",
  {
    scale: 1.5,
  },
  {
    scale: 0,
    opacity: 0,
    duration: 1,
  },
  "-=2"
);

tl.fromTo(
  ".main-text",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 1,
  }
);

tl.fromTo(
  ".caption",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 1,
  }
);
