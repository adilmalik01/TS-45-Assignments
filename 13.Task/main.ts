// Your Own Array: Think of your favorite mode of transportation,
// such as a motorcycle or a car, and make a list that stores several examples.
// Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”


let transport_models: string[] = []

transport_models.push("Porsche")
transport_models.push("Honda Civic")
transport_models.push("Ferrari")
transport_models.push("McLaren 600 GT")


// here I am using for of loop to all array string save in models variable and print message
for (const models of transport_models) {
    console.log(`I would like to own a ${models}.`);
}








