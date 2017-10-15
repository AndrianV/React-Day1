class Cars {
    constructor() {
        this._data = [
            { "id": 1, "make": "VW", "model": "Golf", "year": 1948 },
            { "id": 2, "make": "VW", "model": "Golf", "year": 1988 },
            { "id": 3, "make": "Opel", "model": "Corsa", "year": 1998 },
            { "id": 4, "make": "Opel", "model": "Kadett", "year": 1978 },
            { "id": 5, "make": "Opel", "model": "Kadett", "year": 1991 },
            { "id": 6, "make": "VW", "model": "UP", "year": 2008 },
            { "id": 7, "make": "Opel", "model": "Corsa", "year": 2011 },
            { "id": 8, "make": "Saab", "model": "Sonett", "year": 1965 },
            { "id": 9, "make": "VW", "model": "UP", "year": 2004 },
            { "id": 10, "make": "VW", "model": "Passat", "year": 2006 },
            { "id": 11, "make": "Audi", "model": "A6", "year": 2008 },
            { "id": 12, "make": "Saab", "model": "Sonett", "year": 2006 },
            { "id": 13, "make": "Volvo", "model": "S90", "year": 2001 },
            { "id": 14, "make": "Audi", "model": "A6", "year": 1999 },
            { "id": 15, "make": "Volvo", "model": "S60", "year": 2011 },
            { "id": 16, "make": "Audi", "model": "A3", "year": 2002 }
        ];
    }

    getAllCars() {
        return this._data;
    }

    callbackForEach(c) {
        if (c === null) {
            console.log('### This car was deleted ###');
        } else {
            // console.log(`${c.id}, ${c.make}`);
            //alter teachers getAllCars() printing result
            console.log(`${c.id}, ${c.make}, ${c.model}, ${c.year}`);
        }
    }

    getCar(id) {
        var thatCar = this._data[id - 1];
        // return `${thatCar.id}, ${thatCar.make}`;
        return `${thatCar.make}, ${thatCar.year}`; //---> Specially for exercise j)
        // return `${thatCar.id}, ${thatCar.make}, ${thatCar.model}, ${thatCar.year}`;
    }

    addNewCar(make, model, year) {
        var theLastIndex = this._data[this._data.length-1];
        var theNewCar = { "id": theLastIndex.id+1, "make": make, "model": model, "year": year };
        this._data.push(theNewCar);
    }

    deleteThatCar(id) {
        // var newList = new Set(this._data);
        // newList.delete(this._data[id-1]);
        // this._data = Array.from(newList);
        // this._data.splice(id-1, 1); ===> doesn't work neither!!!
        // var removeFromIndex = [id-1];
        // for(var i = removeFromIndex.length - 1; i >= 0; i--){
        //     this._data.splice(removeFromIndex[i], 1);
        // }
        this._data[id - 1] = null;
    }

    alterThatCar(id, make, model, year) {
        var thatCar = this._data[id - 1];
        var theAlteredCar = { "id": thatCar.id, "make": make, "model": model, "year": year };
        thatCar = theAlteredCar;
    }
}

export default new Cars();

// console.log('############## START OF THE PROGRAM ############');
// const cars = new Cars();
// console.log('-----   print all cars   ------');
// cars.getAllCars().forEach(cars.callbackForEach); //print all cars
// console.log('------  gerCar(id) method here: ------');
// console.log(cars.getCar(7)); //get and print that car
// cars.addNewCar("Chevrolet", "Camaro", 2015); console.log('---- adding new car here ----');//create new car and put it on the last position of the array
// console.log(cars.getCar(17) + '   <===    ------ this car was added ------');// print and ensures that the previous line has worked
// cars.deleteThatCar(9); console.log('------ deleting car with id.... -------'); // delete that car
// console.log('------   after deletion     -------'); //next line printing all cars
// cars.getAllCars().forEach(cars.callbackForEach);  // print all cars array to ensure that the car was removed
// console.log('-------  Altering car  --------');
// cars.alterThatCar(17, "Buick", "Enclave", 2018); // change the car with this id with the new input
// console.log('------   after altering the car     -------'); //next line printing all cars
// cars.getAllCars().forEach(cars.callbackForEach);
// console.log('############## END OF THE PROGRAM ############');