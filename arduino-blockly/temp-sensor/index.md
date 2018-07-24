---
layout: page
title: Temperature Sensor
excerpt: "How to build a cool plant sensor."
modified: 2018-7-23
---


## Objective

To learn how to read a temperature and display it on an lcd screen.

## Kit

![kit](/images/arduino-block/temp-sensor/kit.jpg)


## Completed Project

![challenge 1](/images/arduino-block/temp-sensor/challenge-1.png)

## Bill of Materials 

- 1 x Arduino with usb  
- 1 x lcd screen
- 1 x soil sensor
- 2 x f to f wire 
- 7 x m to f wires

## Temperature Sensor

This a device you can use to measure the temperature and the humidity in the air.  It has one sensor pin which you can plug into any of the regular Arduino pins.

![temp sensor](/images/arduino-block/temp-sensor/temp-sensor.jpg)

## Setup Block

This block is used to tell the Arduino which sensor pin you choose.  It's place on top.

![setup block](/images/arduino-block/temp-sensor/setup-block.png#img-phone)

## Read Temp and Humidity Block

This block must be called every time you want to get a new temperature or humidity value.

![setup block](/images/arduino-block/temp-sensor/read-humidity-block.png#img-phone)


## Celsius Temperature Block

This block return the last temperature read by the sensor.  It will return a whole number representing the celsius temperature.

![read temp block](/images/arduino-block/temp-sensor/read-celsuis-block.png#img-phone)


## Humidity Percentage Block

This block return the last humidity percentage read by the sensor.  It will return a whole number representing the humidity percentage.

![humidity percentage block](/images/arduino-block/temp-sensor/humidity-percentage-block.png#img-phone)


## Instructions

1) Connect a wire from sensor pin of the sensor to pin 7 of the Arduino.

![step 1](/images/arduino-block/temp-sensor/step_1.jpg)

2) Connect a wire from + pin of the sensor to 3.3v of the Arduino.

![step 2](/images/arduino-block/temp-sensor/step_2.jpg)

3) Connect a wire from - pin of the sensor to gnd of the Arduino.

![step 3](/images/arduino-block/temp-sensor/step_3.jpg)

4) Connect a wire from SCL of the LCD Screen to A5 of the Arduino.

![step 4](/images/arduino-block/temp-sensor/step_4.jpg)

5) Connect a wire from SDA of the LCD Screen to A4 of the Arduino.

![step 5](/images/arduino-block/temp-sensor/step_5.jpg)

6) Connect a wire from vcc of the LCD Screen to 5v of the Arduino.

![step 6](/images/arduino-block/temp-sensor/step_6.jpg)

7) Connect a wire from gnd of the LCD Screen to gnd of the Arduino.

![step 7](/images/arduino-block/temp-sensor/step_7.jpg)

8) From the Temp/Humidity Menu Drag the setup block onto the screen.  Set the setup block to use pin 7.

![step 8](/images/arduino-block/temp-sensor/step_8a.png#img-phone)

![step 8](/images/arduino-block/temp-sensor/step_8b.png#img-phone)

9) From the Temp/Humidity Menu Drag the read temp and humidity block onto the screen.

![step 9](/images/arduino-block/temp-sensor/step_9.png#img-phone)

10) Create a whole number (int) variable named celsius and set it equal to the celcius temperature block.

![step 10](/images/arduino-block/temp-sensor/step_10.png#img-phone)

11) Create a whole number (int) variable named humidity percent and set it equal to the humidity percent block.

![step 11](/images/arduino-block/temp-sensor/step_11.png#img-phone)

12) Connect a debug block to the code.

![step 12](/images/arduino-block/temp-sensor/step_12.png#img-phone)

13) Upload the code and open the debug menu.  Click the continue button for code to repeat again.  Try breathing on the sensor or putting next to a hot object to get different reading.

![step 13](/images/upload-1.png)

The continue button.

![continue btn](/images/continue-btn.png)

The debug menu.

![debug menu](/images/debug-btn.png)

![step 12](/images/arduino-block/temp-sensor/step_13.png#img-phone)


## Challenge 1)

Create a double variable that will store the temperature in celsius.  To get that you will need to multiply the celsius temperature by 1.8 and add 32 to it.

![challenge 1](/images/arduino-block/temp-sensor/challenge-1.png)


## Challenge 2)

Display the temperature on the lcd screen.  Have it take a new temperature every second.  Only refresh the temperatuer number not the other parts of the text on the screen.  If you need an lcd screen fresher check out this [lesson](/arduino-blockly/lcd-screen-with-loops)

![challenge 1](/images/arduino-block/temp-sensor/challenge-1.png)

