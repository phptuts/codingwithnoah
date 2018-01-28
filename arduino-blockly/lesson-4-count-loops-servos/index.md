---
layout: page
title: Arduino 104 - Count Loops & Servos
excerpt: "Loop to make a servo go from one end to another."
modified: 2018-01-24
---
## Project Kit

![Kit](/images/arduino-block/lesson-4/kit.jpg) 

## Bill of Materials

- 1 x Arduino Uno
- 1 x Arduino USB
- 1 x Servo
- 1 x breadboard (Other Challenge)
- 2 x 220 Ohm Resistors (Other Challenge)
- 2 x LEDs (Other Challenge)
- 7 x male to male jumper wires 

## Steps

Follow the directions in [Arduino Setup Guide](/arduino-setup) if your computer has not been setup yet.  

1) Follow the directions [Arduino Blockly Start Guide](/arduino-blockly-start) to start the [Arduino Blockly Webpage](http://localhost:3000).
 
2) Open the [Arduino Blockly Webpage](http://localhost:3000).

3) Go to [Lesson 3](/arduino-blockly/lesson-3-number-variables-servos) and do steps 3 to 12 for the servo.

4) Discard all the blocks on the screen by clicking the discard button.

![Discard](/images/arduino-block/lesson-4/step4.png)
 
5) Open the "Control" menu open and drag the "Count Loop" onto the workspace.
 
![Count Loop](/images/arduino-block/lesson-4/step5a.png) 

![Count Loop](/images/arduino-block/lesson-4/step5b.png) 

6) Open the "Input/Output" menu open connect it to the inside of the "Count Loop".

![Count Loop](/images/arduino-block/lesson-4/step6a.png) 

![Count Loop](/images/arduino-block/lesson-4/step6b.png) 

7) Discard the empty quote block into the trash.

![Count Loop](/images/arduino-block/lesson-4/step7.png) 

8) Open the "Text" menu option and connect the "Text Join" to the "Serial Print" block.

![Serial Print](/images/arduino-block/lesson-4/step8a.png) 

![Serial Print](/images/arduino-block/lesson-4/step8b.png) 

9) Open the "Text" menu option and connect the "Empty Text" to the "Text Join" block. 
 Put in the word "The loop is on ".

![Serial Print](/images/arduino-block/lesson-4/step9a.png) 

![Serial Print](/images/arduino-block/lesson-4/step9b.png) 

10) Connect the "Get Variable" block and connect it to the "Text Join".  Be sure you are using the "i" is set in the dropdown box.

![Serial Print](/images/arduino-block/lesson-4/step10a.png) 

![Serial Print](/images/arduino-block/lesson-4/step10b.png) 

![Serial Print](/images/arduino-block/lesson-4/step10c.png) 

11) Open the "Control" menu option and connect the "Delay" block to the bottom of the "Serial Print" block.

![Serial Print](/images/arduino-block/lesson-4/step11a.png) 

![Serial Print](/images/arduino-block/lesson-4/step11b.png) 

12) Upload the code to the computer.

![Upload Code](/images/arduino-block/lesson-4/step12.png) 

13) Open the Serial Monitor and watch the number loop 1 to 10, over and over.

![Serial Print](/images/arduino-block/lesson-4/step13a.png) 

![Serial Print](/images/arduino-block/lesson-4/step13b.png) 

### Count Loop Block

The "Count Loop" block is used to do something on repeat a certain number of times.  By default the variable will be named a letter, in our case it's named "i".  The variable stores number data.  First number block determines where the "i" will start.  In the picture below it will start at 1.  The second number is when the number that "i" will equal to end the loop.  In the picture below it will go to 10.  The third number is the number that the variable "i" will increase every time the loop is executed.  This loop will increase "i" by 1 every time.  So this loops as you saw in the previous example will execute 10 times.

![Count Loop Block](/images/arduino-block/lesson-4/count_loop_block.png) 

### So what happens after everything been executed

As you might have figured out once your program is done executing all it's blocks it just starts from the top again.  

### Challenge Count Loops

a) Take the blocks you created and modify them to use the serial printer to print numbers 1 to 100.
 
b) Modify the code to print number 10 to 35.
  
c) Modify the code to print all the even number from 2 to 100.

14) Delete the "Serial Print" block inside the "Count Loop".

![Count Loop](/images/arduino-block/lesson-4/step14.png) 

15) Drag the "Servo Move" block and connect it to the bottom of delay block.

![Servo Block](/images/arduino-block/lesson-4/step15a.png) 

![Servo Block](/images/arduino-block/lesson-4/step15b.png) 

16) Delete the number block connected to the "Servo Motor" block;

![Servo Block](/images/arduino-block/lesson-4/step16.png) 

17) Open the "Math" menu and drag the "Number Operation" block to connect to the "Servo Move" block.

![Servo Block](/images/arduino-block/lesson-4/step17a.png) 

![Servo Block](/images/arduino-block/lesson-4/step17b.png) 


18) Drag a number block from the math menu to the first whole in the block.  Set it to equal 180.

![Servo Block](/images/arduino-block/lesson-4/step18a.png) 

![Servo Block](/images/arduino-block/lesson-4/step18b.png) 

19 Change the "Math Operation" block to subtract from add.

![Servo Block](/images/arduino-block/lesson-4/step19.png) 

20) Open the "Variable" menu and connect the "Get Variable" to the open block in the "Math Operation".

![Servo Block](/images/arduino-block/lesson-4/step20a.png) 

![Servo Block](/images/arduino-block/lesson-4/step20b.png) 

![Servo Block](/images/arduino-block/lesson-4/step20c.png) 

21) Connect the "Serial Print" block to the bottom of the "Servo Move" block.

![Servo Block](/images/arduino-block/lesson-4/step21a.png) 

![Servo Block](/images/arduino-block/lesson-4/step21b.png) 

22) Disconnect the "Empty Quote" block from the "Serial Print" block.

![Empty Quote](/images/arduino-block/lesson-4/step22.png) 

23) Connect the "Text Join" block to the "Serial Print" block and connect the "Empty Quote" block to top of the "Text Join" block.

![Servo Block](/images/arduino-block/lesson-4/step23a.png) 

![Servo Block](/images/arduino-block/lesson-4/step23b.png) 

![Servo Block](/images/arduino-block/lesson-4/step23c.png) 

24) In the "Empty Quote" block write "The angle is: ".

![Servo Block](/images/arduino-block/lesson-4/step24.png) 

25) Connect the "Get Variable" block to "Text Join" block and set it to use the "i" variable.

![Servo Block](/images/arduino-block/lesson-4/step25a.png) 

![Servo Block](/images/arduino-block/lesson-4/step25b.png) 

![Servo Block](/images/arduino-block/lesson-4/step25c.png) 

26) Change the "Count Loop" to from 1 to 180.

![Servo Block](/images/arduino-block/lesson-4/step26.png) 

27) Change the delay block from 1000 (1 second) to 50 (1/20th of a second).

![Servo Block](/images/arduino-block/lesson-4/step27.png) 

28) Upload the code you see the servo going slowly one way and really fast the other way.  Also take a look at the "Serial Monitor".

![Upload Code](/images/arduino-block/lesson-4/step28a.png)

![Upload Code](/images/arduino-block/lesson-4/step28b.png)

![Upload Code](/images/arduino-block/lesson-4/step28c.gif)

### Servo Loop Challenges

a) Create a "Loop Block" that makes the servo rotate from 1 to 180 degrees so that it will go smoothly from side to another.

![Servo Loop Challenge](/images/arduino-block/lesson-4/servo-loop-challenge-a.gif)

b) Hoop up 2 leds, one will go on when the Servo is going one way the other will go on when the servo is going the other way.

![Servo Loop Challenge](/images/arduino-block/lesson-4/servo-loop-challenge-b.gif)

### Other Challenges

a) Make the servo rotate a random amount and wait 3 seconds.

b) Make the servo move 180 to 2 degrees but make it move two degrees every time.

c) Just have fun!!!


### Quick Review

- "Loop Count" block will execute the blocks in the "Do" section certain number of times.
- "Loop Count" block creates a variable that is a single letter that will give you access to where the loop is.
- Once all the blocks have been executed it start over again.
- Order of the blocks matter.