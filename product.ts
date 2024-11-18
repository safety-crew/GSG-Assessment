// To compile the TypeScript products.ts file, please make sure you have the following done:
// 1. npm package is already installed.
// 2. TypeScript is installed via npm package.
// 3. Your command-line is open at Assignment folder.
// 4. Write `tsc products.ts` command to convert your TypeScript file to a JavaScript file.
// 4.5 For more advanced approach, you can create a src folder where you move product.ts file in and dist folder
//     where your converted product.js is saved by creating a tsconfig.json file `tsc --init` as more of standard approach.
// 5. Run the result JavaScript product.js file either by adding it to HTML file and Live Server it or by using the browser's console.

// TypeScript Basics: Task 4

// Creating Product Interface
interface Product {
  name: string;
  price: number;
}

// Creating Product Objects
const product1: Product = {
  name: "Apple",
  price: 2.5,
};
const product2: Product = {
  name: "Banana",
  price: 2,
};
const product3: Product = {
  name: "Orange",
  price: 3.5,
};

// Implementing the TypeScript Task
const prodArr: Product[] = [product1, product2, product3];
console.log(`Total Price: ${totalPrice(prodArr)}`);

// Creating a Function That Finds the Total Price of an Array of Products
function totalPrice(productArray: Product[]): number {
  let total: number = 0;

  productArray.forEach((product) => {
    total += product.price;
  });

  return total;
}

// TypeScript Basics: Task 5

// Defining Email Address
const emailAddres: string = "username@domain.com";

// Implementing the Task
if (checkEmailAddress(emailAddres)) {
  console.log("Valid");
} else {
  console.log("Invalid");
}

// Checking Function
function checkEmailAddress(emailAddres: string): boolean {
  // Defining Email Address Default Pattern using RegEx
  let emailPattern = /^[\w\-\.]+@([\w]+\.)+[\w]{2,4}$/gi;

  // Return True if found match within the email
  if (emailAddres.search(emailPattern) > -1) {
    return true;
  } else {
    return false;
  }
}
