---
layout: page
title: Wave 
excerpt: "How to use a loop to make a servo wave."
modified: 2018-06-12
---

## Objective

To write a loop to make a servo move a smooth control way.

## Kit

![project](/images/summer-camp/day-2/servos-intro/project.jpg)

## Completed Project

![complete](/images/summer-camp/day-2/wave/wave.gif)

## Bill of Materials 

- 1 x Arduino 
- 1 x servo
- 3 x m to m wire 

## Count with block (also known as a for loop)

This block is used to count and execute a set of blocks a certain number of times.  In the block below it will create a variable named "i" that is a number.  It will set variable i to one.  The blocks inside the count with block we'll be executed until "i" equals 10.  Every time the blocks inside the loop is executed it will increase "i" by 1.

![step 1](/images/summer-camp/day-2/wave/count-block.png)

## Instructions

1) Take a male to male wire from pin 2 of the Arduino to the brown wire of the servo.

![step 1](/images/summer-camp/day-2/servos-intro/step_1.jpg)

2) Take a male to male wire from 5v of the Arduino to middle wire of the servo.

![step 2](/images/summer-camp/day-2/servos-intro/step_2.jpg)

3) Take a male to male wire from ground of the Arduino to orange wire of the servo.

![step 3](/images/summer-camp/day-2/servos-intro/step_3.jpg)

4) Create 2 whole number variables.  One named startsAt and set it equal to 1.  The other one should be named endsAt and set it equal to 10.

![step 4](/images/summer-camp/day-2/wave/step_4.png)

5) Connect a "Count with" block to the bottom of the variable.  Replace the "number" blocks with variables you created.  Be sure and trash the number blocks.

![step 5](/images/summer-camp/day-2/wave/step_5a.png)

![step 5](/images/summer-camp/day-2/wave/step_5b.png)

6) Create a variable inside the "count with" block named "backwards".  Set it equal to the "endsAt" variable minus "i".

![step 6](/images/summer-camp/day-2/wave/step_6.png)

7) Drag a debug block inside the "count with block".

![step 7](/images/summer-camp/day-2/wave/step_7.png)

8) Upload the code.

![upload](/images/upload-1.png)

9) Use the continue button, and step through the code.  Notice that the backwards variables goes from 9 to 0.  You can fix this with "if" blocks if you like.

![step 9](/images/summer-camp/day-2/wave/step_9a.png)

![step 9](/images/summer-camp/day-2/wave/step_9b.png)

## Challenge

Using what you just learned create 2 loops that will make a servo go smoothly back and forth.  Attach a hand to the servo so that you can build your own wave machine.  It doesn't have to be have to be a hand.

Hint: You will want to use 50 millisecond delay after setting the angle of the servo.

![complete](/images/summer-camp/day-2/wave/wave.gif)


