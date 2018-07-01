---
layout: page
title: HighFive Machine
excerpt: "How to control a servo with a push button."
modified: 2018-06-15
---

## Objective

To learn how to use a pull-up resistor and push button to control a servo.

## Kit

![kit](/images/arduino-block/highfive/project.jpg)

## Completed Project

![complete](/images/arduino-block/highfive/complete.gif)

## Bill of Materials 

- 1 x Arduino with usb  ($7.00) 
- 1 x Servo ($1.57)
- 3 x m to m wire ($0.13)
- 1 x push button ($1.40)
- total ($10.10)

## What is a push button?

A push button is a switch that allows electricity to go through it when the button is push down.

![push button](/images/arduino-block/highfive/push_button.jpg)

## What is a pull-up resistor?

A pull up resistor will default the Arduino pin to read that the pin has electricity running through it.  But when attached to ground it will read that no electricity is passing through it.  Each pin that has a number next to it, should have a pull-up resistor attached to it.  The advantage of this is that electronic noise caused by cell phones and other devices will not interfere with the circuit.

![pull resistor](/images/arduino-block/highfive/pullup-resistor.jpg#img-phone)

## Pull-up Resistor Block

This block is used to turn on the pull-up resistor and return information about the electricity going through the pin. It will return 0 if the pull-up resistor is connected to ground and 1 if the resistor is not connected to ground. In the world of the Arduino 0 is false and 1 is true.  *This is not true for all languages.*

![pull resistor block](/images/arduino-block/highfive/pullup-resistor-block.png)

## Instructions

1) Plug one wire of the push button into pin 4 and the other wire into ground.

![step_1](/images/arduino-block/highfive/step_1.jpg)

2) Create a **boolean** variable named "btn" and set it equal to true.

![step_2](/images/arduino-block/highfive/step_2.png)

3) Connect the "Set Variable" block to the bottom of the blocks.  Set the "Set Variable" block to use btn variable.

![step_3](/images/arduino-block/highfive/step_3.png)

4) Connect the the "pull-up resistor" block to the "Set Variable" block.  Set the "pull-up resistor" block to use pin 4.

![step_4](/images/arduino-block/highfive/step_4a.png#img-phone)

![step_4](/images/arduino-block/highfive/step_4b.png)

5) Connect a "debug" block to the bottom of the "Set Variable" block.

![step_5](/images/arduino-block/highfive/step_5.png)

6) Upload the code

![step 6](/images/upload-1.png)

7) Open the debug menu and notice that boolean variable equals 1 or true.


8) Push the push button down while clicking on the continue button on the top right of the screen.

![step_8](/images/arduino-block/highfive/step_8.png)

9) Notice the the button variable changed to 0 or false when the button is pressed.

![step_9](/images/arduino-block/highfive/step_9.png)

## Challenge

Take some cardboard and cut out a highfive hand and attach it to the servo with some tape.  Make it so that when you push the button the servo rotate 180 degrees and come back to 0 degrees. 

Hints:

- Tape the servo to the table
- For the piece of cardboard that is rotating the hand, put half or more of the arm in the middle.
- Compare the variable storing the btn press to a 0 or false value in the if block.
- You don't have to make it a hand, do whatever you think is cool to rotate.

![complete](/images/arduino-block/highfive/complete.gif)

## Review

- What does a pull-up block read when the button is pressed and the button is not pressed?
- What are the advantages of a pull-up resistor.
- When does a push button allow electricity to go through it?
- What did you learn?



