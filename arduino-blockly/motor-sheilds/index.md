---
layout: page
title: Arduino Motor Shield (L293D)
excerpt: "To learn how to control motor shield with the motor blocks."
modified: 2018-1-30
---

## Objective

To learn how to use a motor shield to control the direction of a motor.

## Kit

![kit](/images/arduino-block/motor-shields/kit.jpg)    

## Completed Project

![complete](/images/arduino-block/motor-shields/complete.gif)    


## Bill of Materials

- 1 x Uctronics motor shield (L293D Chip)
- 1 x Arduino and usb cable
- 2 x Motor and connector piece
 
#### Side Note

These part come from a uctronics robot kit that can be bought from amazon and eBay.

## Motor Shield

A shield in the world of Arduinos is something that goes on top of the Arduino that is usually designed to control something specific.  A motor shield is built to control multiple motor's direction and speed.

![motor shield](/images/arduino-block/motor-shields/motor-shield.jpg)    


## Motor Block

The motor block allows you to control it's direction and speed.  The direction is set by a drop down block.  The speed is control by a number block, for these motors you can use a value of 0 to 255.  Right now this block will allow you to control 2 motors on the motor shield.

![motor block](/images/arduino-block/motor-shields/motor-block.png#img-phone)    


## Instructions

1) Place the motor shield and Arduino next to each other like the picture.  Notice how the pins of each device should match up.

![step 1](/images/arduino-block/motor-shields/step_1.jpg)    

2) Connect the Arduino to the motor shield.  Do not for the shield onto the motor.  If it requires you apply a lot pressure **stop** and contact an instructor.

![step 2](/images/arduino-block/motor-shields/step_2a.jpg)    

![step 2](/images/arduino-block/motor-shields/step_2b.jpg)    

![step 2](/images/arduino-block/motor-shields/step_2c.jpg)    

![step 2](/images/arduino-block/motor-shields/step_2d.jpg)    

3) Connect the motor to the motor shield.  If it requires you apply a lot pressure **stop** and contact an instructor.

![step 3](/images/arduino-block/motor-shields/step_3.jpg)    

4) Tape the motor to a edge of a table.

![step 4](/images/arduino-block/motor-shields/step_4.jpg)  
  
5) Pope a hole into the paper plate and attach it to the motor.

![step 5](/images/arduino-block/motor-shields/step_5.jpg)  

6) From the motor menu drag a motor block and attach a number block to it.  Set the number block to 200

![step 6](/images/arduino-block/motor-shields/step_6a.png#img-phone) 

![step 6](/images/arduino-block/motor-shields/step_6b.png#img-phone) 

7) Connect a delay block to the motor block.  Set the delay for **8000** milliseconds.

![step 7](/images/arduino-block/motor-shields/step_7.png#img-phone) 

8) Connect a motor block to the delay block.  Set it to go **backwards** and set it's speed to 200.

![step 8](/images/arduino-block/motor-shields/step_8.png#img-phone) 

9) Connect another delay block to the motor block.  Set the delay for **8000** milliseconds.

![step 9](/images/arduino-block/motor-shields/step_9.png#img-phone) 

10) Upload the code.

[upload code](/images/upload-1.png)

![complete](/images/arduino-block/motor-shields/complete.gif)    


## Challenge 

Do this this the other motor by changing the code you wrote.  Be sure to tape that motor down as you did in the previous instructions.

![challenge](/images/arduino-block/motor-shields/challenge.gif)    


## Review

- What does a motor shield do?
- What is the max value you can use for a motor shield?
- What else did you learn.
