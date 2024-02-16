// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.



type CarObject = {
    manufacturer: string;
    model: string;
    [key: string]: any
}

const CarProperties = (manifacurer: string, model: string, ...detail: [string, any][]):
    CarObject => {
    let carData: CarObject = {
        manufacturer: manifacurer,
        model: model
    }

    for (const [key, value] of detail) {
        carData[key] = value
    }

    return carData;
}





console.log(CarProperties("Honda", "Civic")); // here without detail paremeteer
console.log(CarProperties("Honda", "Civic", ["color", "green"])); // here without detail paremeteer















