/*jslint node:true, vars:true, bitwise:true, unparam:true */
/*jshint unused:true */

/*
A simple node.js application intended to read data from Analog pins on the Intel based development boards such as the Intel(R) Galileo and Edison with Arduino breakout board.

MRAA - Low Level Skeleton Library for Communication on GNU/Linux platforms
Library in C/C++ to interface with Galileo & other Intel platforms, in a structured and sane API with port nanmes/numbering that match boards & with bindings to javascript & python.

Steps for installing MRAA & UPM Library on Intel IoT Platform with IoTDevKit Linux* image
Using a ssh client: 
1. echo "src maa-upm http://iotdk.intel.com/repos/1.1/intelgalactic" > /etc/opkg/intel-iotdk.conf
2. opkg update
3. opkg upgrade

Article: https://software.intel.com/en-us/html5/articles/intel-xdk-iot-edition-nodejs-templates
*/

readAccel();

function readAccel(){

var mraa = require('mraa'); //require mraa

var analogPin0 = new mraa.Aio(0); //setup access analog input Analog pin #0 (A0)
var analogPin1 = new mraa.Aio(1); //setup access analog input Analog pin #0 (A0)
var analogPin2 = new mraa.Aio(2); //setup access analog input Analog pin #0 (A0)

var counter = 0;
    
// Read pin 0
var analogValue0 = analogPin0.read(); //read the value of the analog pin
console.log('x: ' + analogValue0); //write the value of the analog pin to the console

// Read pin 1
var analogValue1 = analogPin1.read(); //read the value of the analog pin
console.log('y: ' + analogValue1); //write the value of the analog pin to the console

// Read pin 2
var analogValue2 = analogPin2.read(); //read the value of the analog pin
console.log('z: ' + analogValue2); //write the value of the analog pin to the console

console.log('Count: '+counter++);
    
setTimeout(readAccel, 3000);
    
}

