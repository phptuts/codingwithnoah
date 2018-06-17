---
layout: page
title: Servos Introduction
excerpt: "How to control a servo."
modified: 2018-06-11
---

## Objective

To learn what a servo is and how write code to control it.

## Kit

![project](/images/maker-camp/day-2/servos-intro/project.jpg)

## Completed Project

![complete](/images/maker-camp/day-2/servos-intro/complete.gif)

## Bill of Materials 

- 1 x Arduino with usb  ($7.00) 
- 1 x Servo ($1.57)
- 3 x m to m wire ($0.13)
- total ($8.70)

## What is a Servo?

A servo is a motor that allows you control the exact position or angle of the motor rotates.

![Servo](/images/maker-camp/day-2/servos-intro/servo.jpg)

Servos Wires

- yellow wire =>  data
- middle wire => 5 volts
- brown wire => ground wire 

![Servo](/images/arduino-block/lesson-3/step3.jpg)

## Servo Block

The drop down box controls which pin is the data pin from the Arduino.  The number block attached to the servo block controls at what angle the servo will rotate to.

![Servo Block](/images/maker-camp/day-2/servos-intro/servo_block.png)

## String to Whole Number Block

The "String to Whole Number" block can be found in the math menu.  What it will do is take a piece of text and turn it into a number.  If it can not determine what the number should be it will return 0.

![menu string to num](/images/maker-camp/day-2/servos-intro/string_to_whole_number_menu.png#img-phone)

![string to num example program](/images/maker-camp/day-2/servos-intro/string_to_whole_number_example.png#img-phone)


## Instructions

1) Take a m to m wire from pin 2 of the Arduino to the orange wire of the servo.

![step 1](/images/maker-camp/day-2/servos-intro/step_1.jpg)

2) Take a m to m wire from 5v of the Arduino to middle wire of the servo.

![step 2](/images/maker-camp/day-2/servos-intro/step_2.jpg)

3) Take a m to m wire from ground of the Arduino to brown wire of the servo.

![step 3](/images/maker-camp/day-2/servos-intro/step_3.jpg)

4) Open servo menu and drag the servo block onto the workspace.

![step 4](/images/maker-camp/day-2/servos-intro/step_4a.png#img-phone)

![step 4](/images/maker-camp/day-2/servos-intro/step_4b.png#img-phone)

5) Change the data pin on the block to pin 2 and zero for the angle.

![step 5](/images/maker-camp/day-2/servos-intro/step_5.png#img-phone)

6) Connect a delay block 

![step 6](/images/maker-camp/day-2/servos-intro/step_6.png#img-phone)

7) Connect another servo block to the delay block. Change the data pin on the block to pin 2 and 180 for the angle.  Then add another delay block.

![step 7](/images/maker-camp/day-2/servos-intro/step_7.png#img-phone)

8) Upload the code

![step 8](/images/upload-1.png)

![complete](/images/maker-camp/day-2/servos-intro/complete.gif)


## Challenge 

Create a program that will allow you control the servos by typing a number that you will send you using the messaging dialog box.  

Hint:  Make sure that variable storing the data from computer to the arduino is not empty.  You can do this by using an if block and a compare block.  The compare block should use the not equal sign and compare it to an empty "text" block.

![Challenge](/images/maker-camp/day-2/servos-intro/challenge.gif#img-phone)


## Review

- What is a servo?
- What can you do with a servo that you can't do with a regular motor?
- What did you learn?

