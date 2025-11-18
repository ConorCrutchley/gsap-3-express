// gsap.from(".fred", {
//     x: 400,
//     y: 200,
//     scale: 3,
//     rotation: 360,
//     duration: 3
// });
gsap.fromTo(
  ".fred",
  {
    x: 700,
    y: 400,
    scale: 1,
    opacity: 0,
  },
  {
    x: 400,
    y: 200,
    scale: 3,
    opacity: 1,
    duration: 3,
  }
);
