//JS Prototyping Example

var login = function (userName, passKey, descData) {
    this.userName = userName;
    this.passKey = passKey;
    this.descData = descData;
};

var rishu = new login("rishurajgupta", "1234", "firstLogin");
var anish = new login("ainigupta", "12345", "secondObject");


//Creating array of objects
var testArray = [];

for (var index = 0; index < 5; index++) {
    var typeObject = {};
    typeObject.name = "Rishu";
    typeObject.age = "26";

    if (index == 2) {
        typeObject.name = "Anish";
        typeObject.age = "24";
    }

    testArray.push(typeObject);
}

//JavaScript Promise Test

//function 1 run
var cleanCar = function () {
    return new Promise(function (resolve, reject) {
        $.ajax({
            "url": "http://services.groupkt.com/country/get/all",
            "Content-Type": "JSONP",
            "success": function (response) {
                resolve("Car is Cleaned");
                console.log("1");
            },
            "failure": function (response) {
                reject("Car is not Cleaned");
            }
        });
    });

};

//Second function call
var wipeCar = function () {
    return new Promise(function (resolve, reject) {
        $.ajax({
            "url": "http://services.groupkt.com/country/get/all",
            "Content-Type": "JSONP",
            "success": function (response) {
                resolve("Car is Wiped");
                console.log("2");
            },
            "failure": function (response) {
                reject("Car is not Wiped");
            }
        });
    });

};

//Third function call
var polishCar = function () {
    return new Promise(function (resolve, reject) {

        $.ajax({
            "url": "http://services.groupkt.com/country/get/all",
            "Content-Type": "JSONP",
            "success": function (response) {
                resolve("Car is Polished");
                console.log("3");
            },
            "failure": function (response) {
                reject("Car is not Polished");
            }
        });
    });

};

/*cleanCar();
wipeCar();
polishCar();
*/
cleanCar().then(function () {
    return wipeCar();
}).then(function () {
    return polishCar();
});



var promiseGetData = new Promise(function (resolve, reject) {
    var isData = false;

    if (isData) {
        resolve("Data received");
    }
    else {
        reject("Data not Available");
    }

});

promiseGetData.then(function (data) {
    //console.log(data);
}).catch(function (data) {
    //console.log(data);
});

