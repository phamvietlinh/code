// const rect = require('./Shape/rectangle');
// console.log(`The area of the rectangle(width = 10, height = 20) is ${rect.area(10, 20)}`);
// console.log(`The circumference of the rectangle(width = 10, height = 20) is ${rect.circumference(10, 20)}`);
// console.log(`current time is: ${rect.currentDateTime}`);
// console.log(`directory name: ${rect.directoryName}`)
// console.log(`file name: ${rect.fileName}`)
// let aCircle = require('./Shape/circle');
// console.log(`aCircle area: ${aCircle.area(5)}`);





// console.log('hello');
// debugger;
// var arithmeticMean = (numbers) => {
// 	var total = 0
// 	debugger;
// 	for(let number in numbers){
// 		total = total + parseFloat(number);
// 		console.log(`total is: ${total}, number is: ${number}`)
// 	}
// 	console.log(`Result is: ${total/ numbers.length}`)
// }

// arithmeticMean([1, 2, 3, 4, 5])



// let http = require('http');
// const port = 3000;
// const server = http.createServer((request, response) => {
// 	response.writeHead(200, {
// 		'Content-Type': 'text/html',
// 		'Trailer': 'Content-MD5'
// 	})
// 	const ipAddress = request.socket.remoteAddress;
// 	response.write(`Your IP address is ${ipAddress} \r\n`);
// 	response.write(`Request's url: ${request.url}`);
// 	response.write(`Detail request's url: ${require('url').parse(request.url, true)}`);
// 	response.addTrailers({'Content-MD5': '7895bf4b8828b55ceaf47747b4bca667'});
// 	response.end()
// }).listen(port);
// console.log(`Server is running on port: ${port}`)





// console.log("Working with Files");
// var fileManager = require('./fileManager');
// const fileName = __dirname + './../data/temp.txt';
// fileManager.createNewFile(fileName);
// let jsonObject = {
// 	foods: [
// 		{
// 			foodName: "Cream Tea",
// 			foodDescription: "This is a cup of cream tea"
// 		},
// 		{
// 			foodName: "Cream Tea2",
// 			foodDescription: "This is a cup of cream tea2"
// 		},
// 		{
// 			foodName: "Cream Tea3",
// 			foodDescription: "This is a cup of cream tea3"
// 		},
// 		{
// 			foodName: "Cream Tea4",
// 			foodDescription: "This is a cup of cream tea4"
// 		},
// 		{
// 			foodName: "Cream Tea5",
// 			foodDescription: "This is a cup of cream tea5"
// 		},
// 		{
// 			foodName: "Cream Tea6",
// 			foodDescription: "This is a cup of cream tea6"
// 		}
// 	],
// 	resultCode: 200,
// 	restaurantName: "Sasimi BBQ"
// }
// fileManager.saveJsonObjectToFile(jsonObject, fileName);
// jsonObject.address = "25 Lan Ong, Bong Bang, Hai Phong, Viet Nam";
// fileManager.saveJsonObjectToFile(jsonObject, fileName);
// fileManager.readJsonObjectFromFile(fileName)





const EventEmitter = require('events');
class Customer extends EventEmitter {
	constructor(name, gender){
		super();
		this.name = name;
		this.gender = gender;
	}
};
const mrJohn = new Customer("John", "male");
const msMary = new Customer("Mary", "female");
const callbackFunction =  (foods, customer) => {
	for(let index in foods){
		console.log(`${customer.name} call ${foods[index]}`)
	}
}


mrJohn.on("eventCallFoods", callbackFunction);
msMary.on("eventCallFoods", callbackFunction);
console.log("Do something ...");
mrJohn.emit("eventCallFoods", ["Pizza", "Salad"], mrJohn);
console.log("Do something else ...");
mrJohn.emit("eventCallFoods", ["Coke", "Sushi"], msMary);



