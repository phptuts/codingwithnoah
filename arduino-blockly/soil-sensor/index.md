---
layout: page
title: Soil Sensor
excerpt: "How to build a cool plant sensor."
modified: 2018-7-18
---

## Objective

Learn how to use an lcd screen and soil sensor to print stuff to the screen.  

## Kit

![complete kit](/images/arduino-block/soil-sensor/kit.jpg)

## Completed Project

![complete kit](/images/arduino-block/soil-sensor/complete.gif)

## Bill of Materials 

- 1 x Arduino with usb  
- 1 x lcd screen
- 1 x soil sensor
- 2 x f to f wire 
- 7 x m to f wires

## What is a soil sensor?

A soil sensor is a device that is used to find information about the soil or ground.  The one that we are using in this class is used to find information about how much water is in the ground.  The 2 prongs is what is put into the soil and the device reads the information from the 2 prongs and sends it to the Arduino. 

![soil sensor](/images/arduino-block/soil-sensor/soil_sensor.jpg)

The soil sensor blocks can be found in the soil sensor menu.
  
![soil sensor menu](/images/arduino-block/soil-sensor/soil-sensor-menu.png#img-phone)

## Soil Sensor Setup Block

This is used to tell the Arduino which Analog Pin the soil sensor is hooked into.  This block is required before using any of the other blocks.

![setup block](/images/arduino-block/soil-sensor/soil-sensor-setup-block.png#img-phone)

## Read Humidity Value Block

This block returns a number representing the amount of humidity that is in the soil.

![humidity value block](/images/arduino-block/soil-sensor/humidity-value-block.png#img-phone)

## Read Humidity Percentage Block

This block returns a number representing the percentage of humidity that is in the soil.

![humidity percent block](/images/arduino-block/soil-sensor/humidity-percentage-block.png#img-phone)

## Is Raining Block

This block returns a true or false value representing whether the sensor thinks it's raining.

![is raining block](/images/arduino-block/soil-sensor/is-raining-block.png#img-phone)

## Text Join Block

This block is used to join to text/string or variables that are strings together.  It's found in the text menu.  To increase the number of things it can combine click the gear menu.  Then remove or add item blocks to the join block.

![text join menu](/images/arduino-block/soil-sensor/text-menu.png#img-phone)

![text join block](/images/arduino-block/soil-sensor/text-join-block.png#img-phone)


## Value To String Block

This block will take a value that is a whole number (int), boolean, or String and turn it into a string.  Example would be taking the number 4 and turning it into a string "4".  You need this when you want to add a number to a String.  This will work on every type for value except double, decimal point values.  For doubles use the double to string block.  These blocks can be found in the text menu.

![value to text block](/images/arduino-block/soil-sensor/value-to-text-blocks.png#img-phone)


## Soil Sensor Chip

It's a little hard to read but A0 goes to analog pin.  In the instructions we use A0 on the Arduino to keep things simple.
Ground goes to ground and volts goes to **3.3v** on the Arduino.

![is raining block](/images/arduino-block/soil-sensor/soil_sensor_chip.jpg)


## Instructions

1) Plug the f to f wires into the 2 prongs.

![step 1](/images/arduino-block/soil-sensor/step_1.jpg)

2) Plug other ends of the f to f wire into the chip / reading part of the sensor.

![step 2](/images/arduino-block/soil-sensor/step_2.jpg)

3) Connect a m to f wire from pin A0 of the sensor  to A0 of the Arduino.

![step 3](/images/arduino-block/soil-sensor/step_3.jpg)

4) Connect a m to f wire from vcc of the sensor to 3.3v of the Arduino.

![step 4](/images/arduino-block/soil-sensor/step_4.jpg)

5) Connect a m to f wire into gnd of the sensor to gnd of the Arduino.

![step 5](/images/arduino-block/soil-sensor/step_5.jpg)

6) Connect a m to f wire into SCL of the lcd screen to A5 of the Arduino.
 
![step 6](/images/arduino-block/soil-sensor/step_6.jpg)

7) Connect a m to f wire into SDA of the lcd screen to A4 of the Arduino.

![step 7](/images/arduino-block/soil-sensor/step_7.jpg)

8) Connect a m to f wire into VCC of the lcd screen to 5v of the Arduino.

![step 8](/images/arduino-block/soil-sensor/step_8.jpg)

9) Connect a m to f wire into GND of the lcd screen to GND of the Arduino.

![step 9](/images/arduino-block/soil-sensor/step_9.jpg)

10) Insert the soil sensor into the soil.

![step 10](/images/arduino-block/soil-sensor/step_10.jpg)

11) Drag the Soil Sensor setup block to the screen, and set it to use the A0 pin.

![soil sensor menu](/images/arduino-block/soil-sensor/soil-sensor-menu.png#img-phone)

![step 11](/images/arduino-block/soil-sensor/step_11.png#img-phone)

12) Create a number variable called "humidity percentage".

![step 12](/images/arduino-block/soil-sensor/step_12.png#img-phone)

13) Connect the humidity percentage block to the variable you just created.

![step 13](/images/arduino-block/soil-sensor/step_13.png#img-phone)

14) Create a variable named display message that stores a string / text value.
 
![step 14](/images/arduino-block/soil-sensor/step_14.png#img-phone)
 
15) Attach a text join block to the display message variable.
 
![step 15](/images/arduino-block/soil-sensor/step_15.png#img-phone)

16) Click on the gear menu and drag another item block into the join block.

![step 16](/images/arduino-block/soil-sensor/step_16.png#img-phone)

17) Put a text block into the hole of the text join block.  Set the text block to say "Humidity At: ".

![step 17](/images/arduino-block/soil-sensor/step_17.png#img-phone)

18) Connect a value to the text join block.  You can find this block in the text menu.

![step 18](/images/arduino-block/soil-sensor/step_18.png#img-phone)

19) Connect a get variable block to the value to string block.  Set it to use the "humidity percentage" variable.

![step 19](/images/arduino-block/soil-sensor/step_19.png#img-phone)

20) Connect a text variable to the other hole of the text join block.  Set it equal to "%";

![step 20](/images/arduino-block/soil-sensor/step_20.png#img-phone)

21) From the input/output menu connect a serial print block to the bottom of the code.  Delete the text block attached to it.

![step 21](/images/arduino-block/soil-sensor/step_21.png#img-phone)

22) Connect a get variable block and set it to use the display message variable.

![step 22](/images/arduino-block/soil-sensor/step_22.png#img-phone)

23) Connect a delay block to the end of the code.

![step 23](/images/arduino-block/soil-sensor/step_23.png#img-phone)

24) Upload the code and open the message dialog box.

![step 24](/images/upload-1.png)

## Challenge 

Create a program with what you learned in [lcd screen lesson](/arduino-blockly/lcd-screen-with-loops/) to print the humidity level on the screen.

![challenge](/images/arduino-block/soil-sensor/complete.gif)
