let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};
let keys = Object.keys(myObject);
let values = Object.values(myObject);

for (let i = 0; i < keys.length; i++) {
  console.log("key:", keys[i], "|", "type:", typeof values[i]);
}
