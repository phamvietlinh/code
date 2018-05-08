'use strict';

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


var http = require('http');
var port = 3000;
var server = http.createServer(function (request, response) {
	response.writeHead(200, {
		'Content-Type': 'text/html'
	});
	response.write('Request\'s url: ' + request.url);
	response.end();
}).listen(port);
console.log('Server is running on port: ' + port + '.');