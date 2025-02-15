/* You are given an array of phone objects, each containing information about the model, brand, and
 price. Write a JavaScript function named findAveragePhonePrice that takes this array 
 as input and returns the average price of phone. */

function findAveragePhonePrice(phones) {
  let sum = 0,
    count = 0;
  for (let phone of phones) {
    sum = sum + phone.price;
    count++;
  }
  return sum / count;
}
const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];
console.log(findAveragePhonePrice(phones));
