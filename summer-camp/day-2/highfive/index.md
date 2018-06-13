---
layout: page
title: HighFive Machine
excerpt: "How to control a servo with a push button."
modified: 2018-06-12
---

## Objective

To learn how to use a pull-up resistor and push button to control a servo.

## Kit

![complete](/images/summer-camp/day-2/highfive/project.jpg)


## Completed Project

![complete](/images/summer-camp/day-2/highfive/complete.gif)


## Bill of Materials 

- 1 x Arduino 
- 1 x servo
- 3 x m to m wire
- 1 x push button

## What is a push button?

A push button is a switch that allows electricity to go through it when the button is push down.

![push button](/images/summer-camp/day-2/highfive/push_button.jpg)

## What is a pull-up resistor?

A pull up resistor will default the Arduino pin to read that high.  But when attached to ground it will read that nothing is passing through it.  The reason we want to use this is because it reduces electronic noise.  Each pin that has a number should have a pull-up resistor attached to it.

![pull resistor](/images/summer-camp/day-2/highfive/pullup-resistor.jpg#img-phone)


## Pull-up Resistor Block

This block is used to turn on the pull-up resistor. It will read 0 if the pull-up resistor is connected to ground and 1 if the resistor is not connected to ground. In the world of the Arduino 0 is false and 1 is true.  This is not true for all languages.

![pull resistor block](/images/summer-camp/day-2/highfive/pullup-resistor-block.png)


## Instructions

1) Plug one wire of the push button into pin 4 and the other wire into ground.

![step_1](/images/summer-camp/day-2/highfive/step_1.jpg)

2) Create a **boolean** variable named "btn" and set it equal to true.

![step_2](/images/summer-camp/day-2/highfive/step_2.png)

3) Connect the "Set Variable" block to the bottom of the block chain.  Set the "Set Variable" block to use btn variable.

![step_3](/images/summer-camp/day-2/highfive/step_3.png)

4) Connect the the "pullup resistor" block to the "Set Variable" block.  Set the "pullup resistor" block to use pin 4.

![step_4](/images/summer-camp/day-2/highfive/step_4a.png#img-phone)

![step_4](/images/summer-camp/day-2/highfive/step_4b.png)

5) Connect a "debug" block to the bottom of the "Set Variable" block.

![step_5](/images/summer-camp/day-2/highfive/step_5.png)

6) Upload the code

![step 6](/images/upload-1.png)

7) Open the debug menu and notice that boolean variable equals 1 or true.


8) Push the push button, then click on the continue button on the top right of the screen.

![step_8](/images/summer-camp/day-2/highfive/step_8.png)

9) Notice the the button variable changed to 0 or false when the button is pressed.

![step_9](/images/summer-camp/day-2/highfive/step_9.png)

## Challenge

Take some cardboard and cut out a highfive hand and attach it to the servo with some tape.  Make it so that when you push the button the servo rotate and rotate back. 

Hints:

- Tape the servo to the table
- For the piece of card that is rotating the hand, place it in the middle
- Compare the variable storing the btn press to a 0 or false value.
- You don't have to make it a hand, do whatever you think is cool to rotate.

![complete](/images/summer-camp/day-2/highfive/complete.gif)


## Review

Keep the project in tack, but take out the button.




