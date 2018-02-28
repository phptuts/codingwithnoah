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

Follow the directions in [Arduino Setup Guide](/arduino-setup) if your computer has not been set up yet.  

1) Follow the directions [Arduino Blockly Start Guide](/arduino-blockly-start) to start the [Arduino Blockly Webpage](http://localhost:3000).
 
2) Open the [Arduino Blockly Webpage](http://localhost:3000).

3) Go to [lesson 3](/arduino-blockly/lesson-3-number-variables-servos) and do steps 3 to 12, to set up the servo.

4) Discard all the blocks on the screen by clicking the discard button.

![Discard](/images/arduino-block/lesson-4/step4.png)
 
5) Open the "Control" menu open and drag the "Count Loop" onto the workspace.
 
![Count Loop](/images/arduino-block/lesson-4/step5a.png) 

![Count Loop](/images/arduino-block/lesson-4/step5b.png) 

6) Open the “Input/Output” menu and connect “Serial Print” block to the inside of the “Count Loop” block.

![Count Loop](/images/arduino-block/lesson-4/step6a.png) 

![Count Loop](/images/arduino-block/lesson-4/step6b.png) 

7) Discard the "Text" block.

![Count Loop](/images/arduino-block/lesson-4/step7.png) 

8) Open the "Text" menu option and connect the "Text Join" block to the "Serial Print" block.

![Serial Print](/images/arduino-block/lesson-4/step8a.png) 

![Serial Print](/images/arduino-block/lesson-4/step8b.png) 

9) Open the "Text" menu option and connect a "Text" block to the "Text Join" block.  
Put in the words "The loop is on " inside the "Text" block.

![Serial Print](/images/arduino-block/lesson-4/step9a.png) 

![Serial Print](/images/arduino-block/lesson-4/step9b.png) 

10) Connect a "Get Variable" block and connect it to the "Text Join" block.  Be sure the "i" variable is set in the drop-down box.

![Serial Print](/images/arduino-block/lesson-4/step10a.png) 

![Serial Print](/images/arduino-block/lesson-4/step10b.png) 

![Serial Print](/images/arduino-block/lesson-4/step10c.png) 

11) Open the "Control" menu option and connect the "Delay" block to the bottom of the "Serial Print" block.

![Serial Print](/images/arduino-block/lesson-4/step11a.png) 

![Serial Print](/images/arduino-block/lesson-4/step11b.png) 

12) Upload the code.

![Upload Code](/images/arduino-block/lesson-4/step12.png) 

13) Open the Serial Monitor and watch the code count from 1 to 10.

![Serial Print](/images/arduino-block/lesson-4/step13a.png) 

![Serial Print](/images/arduino-block/lesson-4/step13b.png) 

### Count Loop Block

The "Count Loop" block is for repeating other blocks a certain number of times.  By default the variable will be named a letter, in our case, it's named "i".  The variable will store a number.  First "number" block determines where the "i" will start.  In the picture below it will start at one.  The second number is what the variable  "i" will equal to end the loop.  In the picture below it will go to 10.  The third number is the number that the variable "i" will increase every time the loop is executed.  This loop will increase "i" by one every time.  So this loops as you saw in the previous example will execute 10 times.

![Count Loop Block](/images/arduino-block/lesson-4/count_loop_block.png) 

### So what happens after everything been executed?

As you might have figured out once your Arduino is done executing all its blocks, it just starts from the top again.  

### Challenge Count Loops

a) Take the blocks you created and modify them to print numbers 1 to 100.
 
b) Modify the code to print number 10 to 35.
  
c) Modify the code to print all the even number from 2 to 100.

14) Delete the "Serial Print" block inside the "Count Loop" block.

![Count Loop](/images/arduino-block/lesson-4/step14.png) 

15) Drag the "Servo Move" block and connect it to the bottom of the "delay" block.

![Servo Block](/images/arduino-block/lesson-4/step15a.png) 

![Servo Block](/images/arduino-block/lesson-4/step15b.png) 

16) Delete the "number" block connected to the "Servo Motor" block.

![Servo Block](/images/arduino-block/lesson-4/step16.png) 

17) Open the "Math" menu and drag the "Number Operation" block to connect to the "Servo Move" block.

![Servo Block](/images/arduino-block/lesson-4/step17a.png) 

![Servo Block](/images/arduino-block/lesson-4/step17b.png) 


18) Drag a number block from the math menu to the first hole in the "Number Operation" block.  Set it to equal 180.

![Servo Block](/images/arduino-block/lesson-4/step18a.png) 

![Servo Block](/images/arduino-block/lesson-4/step18b.png) 

19 Change the "Math Operation" block to subtract from add.

![Servo Block](/images/arduino-block/lesson-4/step19.png) 

20) Open the "Variable" menu and connect the "Get Variable" to the open block to the other hole in the "Number Operation" block.

![Servo Block](/images/arduino-block/lesson-4/step20a.png) 

![Servo Block](/images/arduino-block/lesson-4/step20b.png) 

![Servo Block](/images/arduino-block/lesson-4/step20c.png) 

21) Connect the "Serial Print" block to the bottom of the "Servo Move" block.

![Servo Block](/images/arduino-block/lesson-4/step21a.png) 

![Servo Block](/images/arduino-block/lesson-4/step21b.png) 

22) Disconnect the "Text" block from the "Serial Print" block.

![Empty Quote](/images/arduino-block/lesson-4/step22.png) 

23) Connect a "Text Join" block to the "Serial Print" block and connect the "Text" block to the top of the "Text Join" block.

![Servo Block](/images/arduino-block/lesson-4/step23a.png) 

![Servo Block](/images/arduino-block/lesson-4/step23b.png) 

![Servo Block](/images/arduino-block/lesson-4/step23c.png) 

24) In the "Text" block write "The angle is: ".

![Servo Block](/images/arduino-block/lesson-4/step24.png) 

25) Connect the "Get Variable" block to "Text Join" block and set it to use the "i" variable.

![Servo Block](/images/arduino-block/lesson-4/step25a.png) 

![Servo Block](/images/arduino-block/lesson-4/step25b.png) 

![Servo Block](/images/arduino-block/lesson-4/step25c.png) 

26) Change the "Count Loop" to from 1 to 180.

![Servo Block](/images/arduino-block/lesson-4/step26.png) 

27) Change the delay block from 1000 (1 second) to 50 (1/20th of a second).

![Servo Block](/images/arduino-block/lesson-4/step27.png) 

28) Upload the code.   See the servo going slowly one way and fast the other way.  Also, take a look at the "Serial Monitor".

![Upload Code](/images/arduino-block/lesson-4/step28a.png)

![Upload Code](/images/arduino-block/lesson-4/step28b.png)

![Upload Code](/images/arduino-block/lesson-4/step28c.gif)

### Servo Loop Challenges

a) Create a "Loop Block" that makes the servo rotate from 1 to 180 degrees so that it will go smoothly from side to another.

![Servo Loop Challenge](/images/arduino-block/lesson-4/servo-loop-challenge-a.gif)

b) Hoop up two LEDs, one will go on when the Servo is going one way the other will go on when the servo is going the other way.

![Servo Loop Challenge](/images/arduino-block/lesson-4/servo-loop-challenge-b.gif)

### Other Challenges

a) Make the servo rotate a random amount and wait 3 seconds.

b) Make the servo moves 180 to 2 degrees, but make it move two degrees every time.

c) Just have fun!!!


### Quick Review

- "Loop Count" block will execute the blocks in the "Do" section certain number of times.
- "Loop Count" block creates a variable that is a single letter that will give you access to where the loop is.
- The Arduino will continue to execute the blocks until it runs out of power.
- Order of the blocks matter.