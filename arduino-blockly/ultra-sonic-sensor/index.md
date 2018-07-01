---
layout: page
title: Automatic High Five 
excerpt: "How to use a ultra sonic sensor to give an automatic high five."
modified: 2018-06-15
---

## Objective

To learn how an ultra sonic sensor works and how to write code that responds to it's reading.

## Kit

![project](/images/arduino-block/utra-sonic-sensor/project.jpg)

## Completed Project

![complete](/images/arduino-block/utra-sonic-sensor/complete.jpg)

## Bill of Materials 

- 1 x Arduino with usb  ($7.00) 
- 1 x Servo ($1.57)
- 1 x ultra sonic sensor ($1.50)
- 7 x m to m wire ($0.10)
- total ($10.17)

## Ultra Sonic Sensor

This is a sensor used to measure the distance between it and another object.  It does this by sending a wave and measuring the time in micro seconds it takes for the wave to go there and come back in microseconds.  There are a million (1,000,000) micro seconds in one second.  From that measurement of time we can determine the distance an object is away from the sensor.

![sonar](/images/arduino-block/utra-sonic-sensor/sonar.jpg)

![sonar](/images/archive/old-blockly-arduino/lesson-6/step3.jpg)

## Pulse In Block

This block will measure the time that a pin has electricity in microseconds. It our case it measures the time the trig pin is high.   This block will return a Big Whole Number (Long).

![Pulse In Block](/images/arduino-block/utra-sonic-sensor/pulse-in-block.png)

## Instructions

1) Take one m to m wire and plug it into (-) ground of the breadboard and plug the other end into ground of the Arduino.

![step 1](/images/arduino-block/utra-sonic-sensor/step_1.jpg)

2) Take one m to m wire and plug it into (+) positive of the breadboard and plug the other end into 5v of the Arduino.

![step 2](/images/arduino-block/utra-sonic-sensor/step_2.jpg)

3) Plug the sonar device into the breadboard, similar to the picture.

![step 3](/images/arduino-block/utra-sonic-sensor/step_3.jpg)

4) Plug the vcc pin of ultra sonic sensor into the positive (+) end of the breadboard.

![step 4](/images/arduino-block/utra-sonic-sensor/step_4.jpg)

5) Plug the gnd pin of ultra sonic sensor into the negative (-) end of the breadboard.

![step 5](/images/arduino-block/utra-sonic-sensor/step_5.jpg)

6) Plug the trig pin of ultra sonic sensor into the pin 12 of the Arduino.

![step 6](/images/arduino-block/utra-sonic-sensor/step_6.jpg)

7) Plug the echo pin of ultra sonic sensor into the pin 13 of the Arduino.

![step 7](/images/arduino-block/utra-sonic-sensor/step_7.jpg)

8) Plug the data wire (orange) of the servo to pin 2 of the Arduino.

![step 8](/images/arduino-block/utra-sonic-sensor/step_8.jpg)

9) Plug the ground wire (brown) of the servo to ground (-) of the breadboard.

![step 9](/images/arduino-block/utra-sonic-sensor/step_9.jpg)

10) Plug the 5v wire (middle) of the servo to positive (+) of the breadboard.

![step 10](/images/arduino-block/utra-sonic-sensor/step_10.jpg)

11) Create a variable that is type long.  It should be named "microseconds", don't set it's value.

![step 11](/images/arduino-block/utra-sonic-sensor/step_11.png)

12) Use the "Pulse In" block to set the value of the microseconds variable.  Set the pulse in trig pin to use 12 and the echo pin to use 13.

![step 12](/images/arduino-block/utra-sonic-sensor/step_12a.png#img-phone)

![step 12](/images/arduino-block/utra-sonic-sensor/step_12b.png)

13) Create another variable "cm", this should be a long variable.  Do not set it's value.  This variable will store the centimeters away an object is.

![step 13](/images/arduino-block/utra-sonic-sensor/step_13.png)

14) From the math menu connect the math operator block to the "cm" variable.  Set it to divide the microseconds variable by 58.4.

![step 14](/images/arduino-block/utra-sonic-sensor/step_14.png)

15) Attach a debug block to code.

![step 15](/images/arduino-block/utra-sonic-sensor/step_15.png)

16) Upload the code

![step 16](/images/upload-1.png)

17) Now open the debug menu.  Put your hand in front of the sensor and get different reading by using the continue button on the top right of the screen.

![step 17](/images/arduino-block/utra-sonic-sensor/step_17a.png)

![step 17](/images/arduino-block/utra-sonic-sensor/step_17b.png)

## Challenge

Modify the code to give you a high five when your hand is 8 cm or less away from the sonar.   

Hint you might have to more the sonar to line up with the servo.

![challenge](/images/arduino-block/utra-sonic-sensor/challenge.gif)

## Review

- What is a ultra sonic sensor?
- How does an ultra sonic sensor work?
- Which block do you use when working with that type of sensor?
- How many microseconds are in one second?
- What did you learn?