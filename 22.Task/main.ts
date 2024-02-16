/*Intentional Error: If you haven’t received an array index error in one of
 your programs yet, try to make one happen.Change an index in one of your programs 
 to produce an index error.Make sure you correct the error before closing the program.
 */
// 2nd EXAMPALE OF object
let product: {
    product_Name: string,
    product_Price: number,
    product_Detail: string,
}

let products: Array<typeof product> = []

products.push(
    {
        product_Name: "Oppo",
        product_Price: 29000,
        product_Detail: " I dont know "
    },
    {
        product_Name: "Oppo",
        product_Price: 29000,
        product_Detail: " I dont know "
    },
    {
        product_Name: "Oppo",
        product_Price: 29000,
        product_Detail: " I dont know "
    },
    {
        product_Name: "Oppo",
        product_Price: 29000,
        product_Detail: " I dont know "
    },
    {
        product_Name: "Oppo",
        product_Price: 29000,
        product_Detail: " I dont know "
    },
    {
        product_Name: "Oppo",
        product_Price: 29000,
        product_Detail: " I dont know "
    },
    {
        product_Name: "Oppo",
        product_Price: 29000,
        product_Detail: " I dont know "
    }
)

console.log(products);

// create invalid index
let chkIndex = 9
console.log(`student NO : ${chkIndex}`, products[chkIndex]);


// here Right order of index
products.forEach((pro, i) => {
    console.log(`
        product: ${pro.product_Name},
        price : ${pro.product_Price},
        description : ${pro.product_Detail},
        indexIn :${i}
    `);
})










