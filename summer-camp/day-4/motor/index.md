---
layout: page
title: Arduino and Motor Shield (L293P)
excerpt: "How to make a happy face spin with an Arduino and a motor shield."
modified: 2018-06-14
---

## Objective

To learn how to control a motor with the Arduino.  Campers will learn how to send numbers to the Arduino pins with analog write block.

## Kit

![motor shield](/images/summer-camp/day-4/motor/kit.jpg)

## Completed Project

![step 11](/images/summer-camp/day-4/motor/step_11.gif)


## What is a motor shield?

A motor shield is a something that you put on top of the Arduino.  It allow you control the direction and speed of a motor.

![motor shield](/images/summer-camp/day-4/motor/motor-sheild.jpg)


## Analog Write Block

This block allows you to send a number to a pin instead of just an on / off value.  This will be used to control the speed of the motor.  Only the pins that have "A" or have the "~" sign next to them can be analog pins.

![analog write](/images/summer-camp/day-4/motor/analog_write_block.png)


## Motor Shield (L293P) Works

Notice in the picture their is motor "A" and motor "B".  

![motor shield explained](/images/summer-camp/day-4/motor/motor-shield-explained.jpg)

The table below shows which pins you need to control.  Use digitalWrite to control the direction of the motor and analogWrite to control the the speed of the motor.

| Pin  | Motor  | Controls  |
|:----:|:------:| :--------:|
| 10   | A      | Speed     |
| 12   | A      | Direction |
| 11   | B      | Speed     |
| 13   | B      | Direction |


## Instructions

1) Lay the Arduino and motor on the table like the picture.  Can you see how the 2 could be connected together?

![step 1](/images/summer-camp/day-4/motor/step_1.jpg)

2) Connect the motor shield to the Arduino.

![step 2a](/images/summer-camp/day-4/motor/step_2a.jpg)

![step 2b](/images/summer-camp/day-4/motor/step_2b.jpg)

![step 2c](/images/summer-camp/day-4/motor/step_2c.jpg)

3) Tape your motor to the table.  Your motor may look different but the important thing is that the thing on the that rotates is facing the outside of the table.

![step 3](/images/summer-camp/day-4/motor/step_3.jpg)

4) Take a paper plate and draw a happy face on it.  Then poke a hole through middle or nose of the face.

![step 4](/images/summer-camp/day-4/motor/step_4.jpg)

5) Attach the plate to the motor.

![step 5](/images/summer-camp/day-4/motor/step_5.jpg)

6) Connect wires attached to the motor to "Motor A" part of the motor shield.

![step 6](/images/summer-camp/day-4/motor/step_6.jpg)

7) Drag an "analog write" block to the workspace.  Set it to use pin 10 and to send the number value 150.

![step 7](/images/summer-camp/day-4/motor/step_7a.png)

![step 7](/images/summer-camp/day-4/motor/step_7b.png)

8) Connect a digital write block to analog write block.  Make sure it use pin 12 and that it is set to high.

![step 8](/images/summer-camp/day-4/motor/step_8.png)

9) Connect a block that will pause the program for 5 seconds.

![step 9](/images/summer-camp/day-4/motor/step_9.png)

10) Replace blocks expect this time make the digital write block use low.  Be sure that it is still using same pins.

![step 10](/images/summer-camp/day-4/motor/step_9.png)

11) Upload the code.

![upload code](/images/upload-1.png)

![step 11](/images/summer-camp/day-4/motor/step_11.gif)


## Challenge

Change the program and the wiring to use motor b on the motor shield instead of motor a.

![challenge](/images/summer-camp/day-4/motor/challenge.gif)
