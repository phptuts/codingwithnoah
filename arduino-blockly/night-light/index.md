---
layout: page
title: Arduino Night Light
excerpt: "Learn how to build an Arduino Night Light."
modified: 2018-7-22
---

## Objective

To build an Arduino Night Light With a PhotoSensor and an if/else block.

## Kit

![kit](/images/arduino-block/night-light/kit.jpg)

## Completed Project

![complete](/images/arduino-block/night-light/challenge.gif)

## Bill of Materials

- 1 x Arduino and usb cable
- 1 x photosensor
- 1 x 150 ohm resistor
- 2 x m to m wires
- 3 x m to f wires
 
## What is a photo sensor?

A photo sensor is a sensor that senses the amount of light.  It requires one of the A pins on the Arduino to use.  This sensor will return a number representing the amount of light around it.  The higher the number the more light.

![photo sensor](/images/arduino-block/night-light/photo-sensor.jpg)

## Analog Read Block

This block will take an electronic signal from a pin and turn it into a number. This block can only be used with the A pins on the Arduino Uno.

![photo sensor](/images/arduino-block/night-light/analog-read.png)


## Instructions

1) Connect a m to f wire from vcc of the sensor to 3.3 volts of the Arduino.

![step 1](/images/arduino-block/night-light/step_1.jpg)

2) Connect a m to f wire from gnd of the sensor to gnd of the Arduino.

![step 2](/images/arduino-block/night-light/step_2.jpg)

3) Connect a m to f wire from DO of the sensor to A0 of the Arduino.

![step 3](/images/arduino-block/night-light/step_3.jpg)

4) Insert the long end (positive) of the led into hole (55, F) and the short end (negative) to (52, F).

![step 4](/images/arduino-block/night-light/step_4.jpg)

5) Insert one of the resistor into hole (55, D) and the other end into (58, D).

![step 5](/images/arduino-block/night-light/step_5.jpg)

6) Connect a m to m wire into hole (58, A) of the breadboard to pin 7 of the Arduino.

![step 6](/images/arduino-block/night-light/step_6.jpg)

7) Connect a m to m wire into hole (52, A) of the breadboard to gnd of the Arduino.

![step 7](/images/arduino-block/night-light/step_7.jpg)

8) Drag a serial print block to the screen and delete the text block attached to it.  Serial print block can be found in the input/output menu.

![step 8](/images/arduino-block/night-light/step_8.png#img-phone)

9) Connect an analog read block to the serial print block.  This block is found in the input/output menu.  Be sure that it is reading the A0 pin.

![step 9](/images/arduino-block/night-light/step_9a.png#img-phone)

![step 9](/images/arduino-block/night-light/step_9b.png#img-phone)

10) Add a delay block to the end of code.

![step 10](/images/arduino-block/night-light/step_10.png#img-phone)

11) Upload the code and open the messaging box.  Cover the photosensor with your hand notice the numbers coming through.

![step 11](/images/upload-1.png)

![step 11](/images/arduino-block/night-light/step_11.png#img-phone)


## Challenge

Base on the numbers you saw in the previous step create an code that will turn on the led when the your hand is over it and turn it off when it is no longer over it.

![challenge](/images/arduino-block/night-light/challenge.gif)
