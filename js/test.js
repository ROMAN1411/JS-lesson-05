{
    /**Перебери об'єкт apartment, використовуючи цикл for...in, 
 * і запиши в масив keys всі його ключі, 
 * а в масив values всі значення його властивостей. */

const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
  };
  const keys = [];
  const values = [];
  // Change code below this line

//   console.log(apartment);
//   console.log(Object.keys(apartment));
//   console.log(Object.values(apartment));

for (const key in apartment) {
    // console.log(key);
    keys.push(key)

    // console.log(apartment[key]);
    values.push(apartment[key])
}

console.log(keys);
console.log(values);
console.log('-----------------------------');
}

{
    /**Напиши функцію countProps(object), яка рахує і повертає кількість власних 
 * властивостей об'єкта в параметрі object. 
 * Використовуй змінну propCount для зберігання кількості властивостей об'єкта. */

function countProps(object) {
    let propCount = 0;
    // Change code below this line
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
        console.log(key);
        propCount += 1;
      }
  }
    // Change code above this line
    console.log(propCount);
    return propCount;
  }
  
countProps({}) 
countProps({ name: "Mango", age: 2 }) 
countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) 
}
console.log('-----------------------------------------');

/** Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of. 
 * Запиши у змінну keys масив ключів власних властивостей об'єкта apartment, 
 * і додай в масив values всі значення його властивостей.*/

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
// Change code below this line

const keys = Object.keys(apartment);
console.log(keys);

for (const key of keys) {
  // Ключ
  // console.log(key);
  // Значення властивості
  console.log(apartment[key]);
  values.push(apartment[key])
}

console.log(values);

for (const value of values) {
  console.log(value);
}

console.log('-----------------------------------------');

{
  /** Виконай рефакторинг функції countProps(object), використовуючи метод Object.keys() і, 
 * можливо, але не обов'язково, цикл for...of. */

function countProps(object) {
  // Change code below this line
  let propCount = 0;

  // for (const key in object) {
  //   if (object.hasOwnProperty(key)) {
  //     propCount += 1;
  //   }
  // }

  const keys = Object.keys(object);
  for (const key of keys) {
    console.log(key);
    propCount += 1;
  }

  return propCount;
  // Change code above this line
}

countProps({})
countProps({ name: "Mango", age: 2 })
countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })
}
console.log('-----------------------------------------');
{
  /**Напиши функцію countTotalSalary(salaries), яка приймає об'єкт зарплат, 
   * де ім'я властивості - це ім'я співробітника, а значення властивості - це зарплата. 
   * Функція повинна розрахувати загальну суму зарплат співробітників і повернути її. 
   * Використовуй змінну totalSalary для зберігання загальної суми зарплати. */

  function countTotalSalary(salaries) {
    let totalSalary = 0;

    const values = Object.values(salaries)
    // console.log(values);
    for (const value of values) {
      // console.log(value);
      totalSalary += value;
    }

    console.log(totalSalary);


    return totalSalary;
  }


countTotalSalary({})
countTotalSalary({ mango: 100, poly: 150, alfred: 80 })
countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })
}
console.log('-----------------------------------------');
{
  /**Перебери масив об'єктів colors, використовуючи цикл for...of. 
   * Додай у масив hexColors значення властивостей hex, 
   * а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors. */

  const colors = [
    { hex: "#f44336", rgb: "244,67,54" },
    { hex: "#2196f3", rgb: "33,150,243" },
    { hex: "#4caf50", rgb: "76,175,80" },
    { hex: "#ffeb3b", rgb: "255,235,59" },
  ];
  
  const hexColors = [];
  const rgbColors = [];
  // Change code below this line
  for (const color of colors) {
    console.log(color.hex);
    hexColors.push(color.hex);
    rgbColors.push(color.rgb); 
  }
  console.log(hexColors);
  console.log(rgbColors);
}
console.log('-----------------------------------------');
{
  /**Напиши функцію getProductPrice(productName), яка приймає один параметр 
   * productName - назва продукту. 
   * Функція шукає об'єкт продукту з таким ім'ям (властивість name) в масиві products 
   * і повертає його ціну (властивість price). Якщо продукт з такою назвою не знайдений, 
   * функція повинна повертати null. */


  
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  
  function getProductPrice(productName) {
    // Change code below this line
    // console.log(productName);
    let productPrice = null;
    
    for (const product of products) {
      // console.log(product.name);

      if (productName === product.name) {
        productPrice = product.price
      }
    }



    return productPrice

  
  
    // Change code above this line
  }
  
  

console.log(getProductPrice("Radar"));
console.log(getProductPrice("Grip"));
console.log(getProductPrice("Scanner"));
console.log(getProductPrice("Droid"));
console.log(getProductPrice("Engine"));

// getProductPrice("Radar") // повертає 1300.
// getProductPrice("Grip") // повертає 1200.
// getProductPrice("Scanner") // повертає 2700.
// getProductPrice("Droid") // повертає 400.
// getProductPrice("Engine") // повертає null.
}
console.log('-----------------------------------------');

{
/**Напиши функцію getAllPropValues(propName), яка приймає один параметр 
 * propName - ім'я (ключ) властивості. Функція повинна повернути масив 
 * всіх значень властивості з таким ім'ям з кожного об'єкта в масиві products. 
 * Якщо в об'єктах відсутні властивості з таким ім'ям, 
 * функція повинна повернути порожній масив. */

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
    const propValues = [];

  for (const product of products) {
    if (!product.hasOwnProperty(propName)) {
      break
    }
    propValues.push(product[propName])
  }
  console.log(propValues);
  return propValues
}

getAllPropValues("name") //повертає ["Radar", "Scanner", "Droid", "Grip"]
getAllPropValues("quantity") //повертає [4, 3, 7, 9]
getAllPropValues("price") //повертає [1300, 2700, 400, 1200]
getAllPropValues("category") //повертає []
}
console.log('-----------------------------------------');
{
  /**Напиши функцію calculateTotalPrice(productName), яка приймає 
   * один параметр productName - назва товару. Функція повинна повернути 
   * загальну вартість (ціна * кількість) товару з таким ім'ям з масиву 
   * products. */

  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  
  function calculateTotalPrice(productName) {
    let totalPrice = 0;

    for (const product of products) {
      if (product.name === productName) {
        totalPrice = product.price*product.quantity
      }
    }
  // console.log(totalPrice);
  return totalPrice
  }


calculateTotalPrice("Blaster") //повертає 0
calculateTotalPrice("Radar") //повертає 5200
calculateTotalPrice("Droid") //повертає 2800
calculateTotalPrice("Grip") //повертає 10800
calculateTotalPrice("Scanner") //повертає 8100
}