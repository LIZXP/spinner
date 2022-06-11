const animat = [
  "\r|  ",
  "\r/  ",
  "\r-  ",
  "\r\\  ",
  "\r|  ",
  "\r/  ",
  "\r-  ",
  "\r\\  ",
  "\r|  ",
];
let time = 100;
for (let i = 0; i < animat.length; i++) {
  setTimeout(() => {
    process.stdout.write(animat[i]);
  }, time);
  time += 200;
}
