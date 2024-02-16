/*
 They think of something you could store in a TypeScript Object.
  Write a program that creates Objects containing these items.
*/
// first type of object
var student = {
    name: "Adil Malik",
    age: 17,
    roll_numer: 110,
    class: 10
};
var students = [];
var student2 = {
    name: "abdullah",
    class: 6,
    age: 13
};
students.push({
    name: "asif ",
    age: 20,
    class: "pata nh"
});
students.push(student);
students.push(student2);
// console.log(students);
// 2nd typeof object
var product;
var products = [];
products.push({
    product_Name: "Oppo",
    product_Price: 29000,
    product_Detail: " I dont know "
});
products.push({
    product_Name: "Apple Vision Pro",
    product_Price: 400000,
    product_Detail: " I dont know "
});
products.push({
    product_Name: "Apple Vision Pro",
    product_Price: 400000,
    product_Detail: " I dont know "
});
// if I can reusable  This products 
var DisplayCard = function (products) {
    products.forEach(function (product) {
        console.log("\n          product: ".concat(product.product_Name, ",\n          price : ").concat(product.product_Price, ",\n          description : ").concat(product.product_Detail, "\n        "));
    });
};
DisplayCard(products);
