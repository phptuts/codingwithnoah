---
layout: page
title: Arduino 110 - LED Light Strip & Arrays
excerpt: "How to control led light strips with arrays."
modified: 2018-02-21
---

## Project Kit

![Arduino Kit](/images/arduino-block/lesson-10/kit.jpg) 

## Bill of Materials

- 1 x Arduino Uno
- 1 x USB Arduino Cable
- 1 x led light strip
- 3 x male to male jumper wires


## Steps

Follow the directions in [Arduino Setup Guide](/arduino-setup) if your computer has not been setup yet.  

1) Follow the directions [Arduino Blockly Start Guide](/arduino-blockly-start) to start the [Arduino Blockly Webpage](http://localhost:3000).
 
2) Open the [Arduino Blockly Webpage](http://localhost:3000).

3) Look at the bag it came the labels for the wires.  Notice the wires are labeled ground, volts, and data.

![LED Light Strip Label](/images/arduino-block/lesson-10/step3.jpg) 

4) Take the led light strip out of the bag.  Notice the arrow and direction it is pointing.  You want to hook the wires at the start of the pointing arrow.

![LED Light Strip](/images/arduino-block/lesson-10/step4.jpg) 

5) Take a jumper wire and hook it into the data line of the led light strip and the A0 pin of the Arduino.

![LED Light Strip](/images/arduino-block/lesson-10/step5.jpg) 

6) Take a jumper wire and hook it into ground of the led light strip and the gnd (ground) pin of the Arduino.

![LED Light Strip](/images/arduino-block/lesson-10/step6.jpg) 

7) Take a jumper wire and hook it into volts of the led light strip and the 5 volts (5v) pin of the Arduino.

![LED Light Strip](/images/arduino-block/lesson-10/step7.jpg) 

8) Drag the "Setup Neo Pixel" Block onto the screen.  Look at the back to see the number of leds.  Put that that in for the number and put "A0", the data pin, for the pin drop down.

![LED Light Strip Package](/images/arduino-block/lesson-10/step8-bag.jpg)

![Setup Block](/images/arduino-block/lesson-10/step8a.png) 

![Setup Block](/images/arduino-block/lesson-10/step8b.png) 

9) Drag the "Neo Pixel" block onto the screen. 

![Neo Pixel Block](/images/arduino-block/lesson-10/step9a.png) 

![Neo Pixel Block](/images/arduino-block/lesson-10/step9b.png) 

10) Upload the code to the Arduino.

![Upload](/images/arduino-block/lesson-10/step10a.png) 

![LED Light Strip](/images/arduino-block/lesson-10/step10b.jpg) 

### Challenges

1) Make all the led in the light strip be green.  Use a count block to do this with a "Neo Pixel" Block.

2) Use the random number block 

### Repeat Block / While Loop

Repeat block will execute the blocks inside of **while** what is connected to it is true.  This means that it does not have a set amount of times it will execute.  It what is connected is never true it may never execute.  

![While Block](/images/arduino-block/lesson-10/whileblock.png) 

11) Delete all the block minus the "Neo Pixel Setup" block.
 
![Delete Blocks](/images/arduino-block/lesson-10/step11.png) 

12) Create a global variable called "position" that stores a number.  Set it's value to zero.

![Global Variable](/images/arduino-block/lesson-10/step12.png) 

13) Create another global variable called "add" that stores a boolean.  Set this value to true.

![Global Variable](/images/arduino-block/lesson-10/step13.png) 

14) Create an if block that will change the variable "add" to false if position equals 59.

![If Block](/images/arduino-block/lesson-10/step14.png) 

15) Create an if block that will change the variable add to true if the position equals 0.  These if blocks should be stacked on each other. Be sure to connect the if blocks.
 
![If Block](/images/arduino-block/lesson-10/step15.png) 

16) Connect the "Neo Pixel" block to the end of the last "if" block.

![If Block](/images/arduino-block/lesson-10/step16a.png) 

![If Block](/images/arduino-block/lesson-10/step16b.png) 

17) Set the "Position" of the "Neo Pixel" to the value "Position variable".  Set the all the color number blocks to zero.  This will turn off the led.

![If Block](/images/arduino-block/lesson-10/step17.png) 

18) Now create and if / else block that will add one to the position variable if the add variable is true and minus one if the add variable is false.

![If Block](/images/arduino-block/lesson-10/step18.png) 

19) Connect a "Neo Pixel" block and set the position hole to value of the variable of the position.  Then keep the numbers attached to the colors the same.

![If Block](/images/arduino-block/lesson-10/step19.png) 

20) Connect a delay block at the end of the if block and set it's number to 50.

![Delay](/images/arduino-block/lesson-10/step20.png) 

21) Upload the code, you should see the led light strip snake.

![Delay](/images/arduino-block/lesson-10/step21.gif) 

## While loop challenge.

 Use a while loop and with a button to start and stop the lights.  Use what you learned in [lesson 5](/arduino-blockly/lesson-5-global-variables-push-button/).  Remember a while loop is like an if block that just executes more then once.  Hint you will have to update the variable you set for the button in the while loop. 
 
 ![Delay](/images/arduino-block/lesson-10/challenge.gif) 

 
### Other Challenges
 
 - Control the leds via the serial monitor like you did in the [previous lesson](/arduino-blockly/lesson-9-led-matrix-challenge)
 - Make a really cool pattern.
 - Just have fun. :)


