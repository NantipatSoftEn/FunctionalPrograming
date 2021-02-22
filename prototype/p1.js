let point = {
  x: 10,
  y: 20,
};
// Inherit จาก `point`
let point3D = {
  z: 30,
  __proto__: point,
};
console.log(
  point3D.x, // 10, inherited
  point3D.y, // 20, inherited
  point3D.z // 30, own
);
