---
layout: page
title: RBG Led Light Strip Snake 
excerpt: "How to control led light strips with arrays."
modified: 2018-02-21
---

## Objective

To learn more about while blocks and more about global variables.

## Project Kit

![Arduino Kit](/images/arduino-block/rgb-light-strip-snake/kit.jpg) 

## Completed Project

![Completed Project](/images/arduino-block/rgb-light-strip-snake/challenge.gif) 

## Bill of Materials

- 1 x Arduino Uno
- 1 x USB Arduino Cable
- 1 x led light strip
- 3 x male to male jumper wires

## Repeat Block / While Loop

Repeat block will execute the blocks inside  **while** what is connected to it is true.  That means that it does not have a set amount of times it will run.  If what is connected is never true it will never execute.  

![While Block](/images/arduino-block/rgb-light-strip-snake/whileblock.png) 

## Instructions

1) Follow the instructions steps in the [previous lesson](/maker-camp/day-2/rgb-led-strip/) 1 - 5.

2) Drag a  "Neo Pixel Setup" block from the "Neo Pixel" toolbox.
 
![Delete Blocks](/images/arduino-block/rgb-light-strip-snake/step11.png) 

3) Create a global variable called "position" that stores a number.  Set it's value to zero.

![Global Variable](/images/arduino-block/rgb-light-strip-snake/step12.png) 

4) Create another global variable called "add" that stores a boolean.  Set this value to true.

![Global Variable](/images/arduino-block/rgb-light-strip-snake/step13.png) 

5) Create an "if" block that will change the variable "add" to false if position equals 59.

![If Block](/images/arduino-block/rgb-light-strip-snake/step14.png) 

6) Create an "if" block that will change the variable "add" to true if the position variable equals 0.  These "if" blocks should be stacked on each other. 
 
![If Block](/images/arduino-block/rgb-light-strip-snake/step15.png) 

7) Connect the "Neo Pixel" block to the end of the last "if" block.

![If Block](/images/arduino-block/rgb-light-strip-snake/step16a.png) 

![If Block](/images/arduino-block/rgb-light-strip-snake/step16b.png) 

8) Set the "Position" of the "Neo Pixel" to the value "Position" variable.  Set the all the color number blocks to zero.  That will turn off the led.

![If Block](/images/arduino-block/rgb-light-strip-snake/step17.png) 

9) Now create and if / else block that will add one to the "position" variable if the "add" variable is true and minus one if the "add" variable is false.

![If Block](/images/arduino-block/rgb-light-strip-snake/step18.png) 

10) Connect a "Neo Pixel" block and set the "position" hole to value of the "position" variable.  Then keep the numbers attached to the colors the same.

![If Block](/images/arduino-block/rgb-light-strip-snake/step19.png) 

11) Connect a delay block at the end of the "if" block and set it's number to 50.

![Delay](/images/arduino-block/rgb-light-strip-snake/step20.png) 

12) Upload the code; you should see the led light strip snake.

![snake](/images/arduino-block/rgb-light-strip-snake/step21.gif) 

## Challenge

 Use a while loop and with a button to start and stop the lights.  Use what you learned in [Messaging Lesson](/maker-camp/day-1/messaging/).  Remember a while loop is like an if block that just executes more then once.  Hint you will have to update the variable you set for the button in the while loop. 
 
 ![snake with button](/images/arduino-block/rgb-light-strip-snake/challenge.gif) 

 
### Other Challenges
 
 - Control the LEDs via the serial monitor like you did in the [Messaging Lesson](/maker-camp/day-1/messaging)
 - Just have fun. :)