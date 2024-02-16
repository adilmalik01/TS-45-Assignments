/*Intentional Error: If you haven’t received an array index error in one of
 your programs yet, try to make one happen.Change an index in one of your programs
 to produce an index error.Make sure you correct the error before closing the program.
 */
// 2nd EXAMPALE OF object
var product;
var products = [];
products.push({
    product_Name: "Oppo",
    product_Price: 29000,
    product_Detail: " I dont know "
}, {
    product_Name: "Oppo",
    product_Price: 29000,
    product_Detail: " I dont know "
}, {
    product_Name: "Oppo",
    product_Price: 29000,
    product_Detail: " I dont know "
}, {
    product_Name: "Oppo",
    product_Price: 29000,
    product_Detail: " I dont know "
}, {
    product_Name: "Oppo",
    product_Price: 29000,
    product_Detail: " I dont know "
}, {
    product_Name: "Oppo",
    product_Price: 29000,
    product_Detail: " I dont know "
}, {
    product_Name: "Oppo",
    product_Price: 29000,
    product_Detail: " I dont know "
});
console.log(products);
// create invalid index
var chkIndex = 9;
console.log("student NO : ".concat(chkIndex), products[chkIndex]);
// here Right order of index
products.forEach(function (pro, i) {
    console.log("\n        product: ".concat(pro.product_Name, ",\n        price : ").concat(pro.product_Price, ",\n        description : ").concat(pro.product_Detail, ",\n        indexIn :").concat(i, "\n    "));
});
