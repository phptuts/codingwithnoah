---
layout: page
title: Arduino Blockly 102 - Serial Monitor Input & Output
excerpt: "Serial Monitor Input & Output."
modified: 2018-01-22
---

## Project Kit

![Arduino Kit](/images/archive/old-blockly-arduino/lesson-2/kit.jpg) 

## Bill of Materials

- 1 x Arduino Uno
- 1 x Breadboard
- 1 x Push Button
- 1 x USB Arduino Cable
- 2 x LED
- 2 x 220-ohm resistor
- 4 x male to male jumper wires

## Steps

Follow the directions in [Arduino Setup Guide](/arduino-setup) if your computer has not been set up yet.  

1) Follow the directions [Arduino Blockly Start Guide](/arduino-blockly-start) to start the [Arduino Blockly Webpage](http://localhost:3000).
 
2) Open the [Arduino Blockly Webpage](http://localhost:3000).

3) Insert the positive end (long end) into (1, A) of the breadboard.  Insert the negative (short end) into (3, A) of the breadboard.
 
![Breadboard Led](/images/archive/old-blockly-arduino/lesson-2/step3.jpg) 

4) Insert the resistor into (1, B) and (-1, D) of the breadboard.

![Arduino Resisor](/images/archive/old-blockly-arduino/lesson-2/step4.jpg) 

5) Take a male to male jumper wire and plug it into (-1, E) of the breadboard and pin 7 of the Arduino.

![Arduino Jumper Wire](/images/archive/old-blockly-arduino/lesson-2/step5.jpg) 

6) Take a male to male jumper wire and plug it into (3, E) of the breadboard and (gnd) ground of the Arduino.

![Arduino Jumper Wire](/images/archive/old-blockly-arduino/lesson-2/step6.jpg) 

7) Plug the Arduino into the computer.

![Arduino Into Computer](/images/archive/old-blockly-arduino/lesson-2/step7.jpg) 

8) Click discard button to get rid of all the blocks on the page.

![Clear Blocks](/images/archive/old-blockly-arduino/lesson-2/step8.png) 

#### Challenge Digital Write Review

a) Can you turn on led using the DigitalWrite block?

![Challenge 1 a](/images/archive/old-blockly-arduino/lesson-2/challenge-1-a.jpg) 

9) Click discard button to get rid of all the blocks on the page.

![Clear Blocks](/images/archive/old-blockly-arduino/lesson-2/step9.png) 

10) Open the "Variable" menu option and drag the "Create Variable" block to the screen.

![Variable Menu](/images/archive/old-blockly-arduino/lesson-2/step10a.png) 

![Variable On Screen](/images/archive/old-blockly-arduino/lesson-2/step10b.png) 

11) Click on the first drop down box and select rename variable.  Then name the variable to "Input From Computer" & click "OK".

![Variable Rename Drop Down](/images/archive/old-blockly-arduino/lesson-2/step11a.png) 

![Variable Popup Box](/images/archive/old-blockly-arduino/lesson-2/step11b.png) 

12) Set the variable type to "String".

![Variable Popup Box](/images/archive/old-blockly-arduino/lesson-2/step12.png) 

13) Open the "Text" menu option and drag the "Text" block to the screen.

![Text Block](/images/archive/old-blockly-arduino/lesson-2/step13a.png) 

![Text Block](/images/archive/old-blockly-arduino/lesson-2/step13b.png) 

14) Connect the "Text" block to the "Create Variable Block".

![Variable Popup Box](/images/archive/old-blockly-arduino/lesson-2/step14.png) 

15) Open the "Variable" menu option and drag the "Set Variable" block to the screen.

![Set Block](/images/archive/old-blockly-arduino/lesson-2/step15a.png) 

![Set Block](/images/archive/old-blockly-arduino/lesson-2/step15b.png) 

16) Change the "Set Variable" block drop-down menu to "Input From Computer".

![Set Change Variable Name](/images/archive/old-blockly-arduino/lesson-2/step16.png) 

17) Connect the "Set Variable" block to the variable block.

![Set Change Variable Name](/images/archive/old-blockly-arduino/lesson-2/step17.png) 

18) Open the "Input/Output" menu option and drag the "Read Until One Character" block to connect to the set block.

![Serial Read Block](/images/archive/old-blockly-arduino/lesson-2/step18a.png) 

![Serial Read Block](/images/archive/old-blockly-arduino/lesson-2/step18b.png) 

19) Open the "Logic" menu option and drag the "If" block to connect to the bottom of the blocks.

![IF Block](/images/archive/old-blockly-arduino/lesson-2/step19a.png) 

![IF Block](/images/archive/old-blockly-arduino/lesson-2/step19b.png) 

20) Open the "Logic" menu option and drag the "compare" block to connect to the "If" block.

![Compare Block](/images/archive/old-blockly-arduino/lesson-2/step20a.png) 

![Compare Block](/images/archive/old-blockly-arduino/lesson-2/step20b.png) 

21) Open the "Variable" menu option and drag the "Get Variable" block it into the first hole of the "Compare" block.

![Variable Get](/images/archive/old-blockly-arduino/lesson-2/step21a.png) 

![Variable Get](/images/archive/old-blockly-arduino/lesson-2/step21b.png) 

22) Change the "Get Variable" Block's drop down to use "Input From Computer".

![Variable Get](/images/archive/old-blockly-arduino/lesson-2/step22.png) 

23) Open the "Text" menu option and drag the "Text" block to the other hole in the "Compare" block.

![Text Block in Compare](/images/archive/old-blockly-arduino/lesson-2/step23a.png) 

![Text Block in Compare](/images/archive/old-blockly-arduino/lesson-2/step23b.png) 

24) In the "Text" block type "ON".

![Text Block in Compare](/images/archive/old-blockly-arduino/lesson-2/step24.png) 

25) Open the "Input\Output" menu option and drag the "DigitalWrite" to connect to the inside of the "IF" block.

![Digital Write Block](/images/archive/old-blockly-arduino/lesson-2/step25a.png) 

![Digital Write Block](/images/archive/old-blockly-arduino/lesson-2/step25b.png) 

26) Change the "DigitalWrite" block to use pin 7 and for the "Stat" to be on "HIGH".

![Digital Write Block](/images/archive/old-blockly-arduino/lesson-2/step26.png) 

27) Open the "Input\Output" menu option and drag the "Serial Print" to connect to the inside of the "IF" block.

![Serial Print](/images/archive/old-blockly-arduino/lesson-2/step27a.png) 

![Serial Print](/images/archive/old-blockly-arduino/lesson-2/step27b.png) 

28) Change the "Text" block in the "Serial Print" block to say "LED is on!! :)".

![Serial Print](/images/archive/old-blockly-arduino/lesson-2/step28.png) 

29) Upload the sketch by clicking the upload button.

![Serial Print](/images/archive/old-blockly-arduino/lesson-2/step29.png) 

30) Open the Serial Monitor by clicking "Serial Monitor" button.

![Serial Monitor](/images/archive/old-blockly-arduino/lesson-2/step30.png) 

31) Type "ON\|" into the input box of the "Serial Monitor" and click the "Send" button.  You should see a message on the Serial Monitor and the led turn on.

![Serial Monitor](/images/archive/old-blockly-arduino/lesson-2/step31a.png) 

![Serial Monitor](/images/archive/old-blockly-arduino/lesson-2/step31b.png) 

![Serial Monitor](/images/archive/old-blockly-arduino/lesson-2/step31c.jpg) 

### Variables

A variable is a way to store data in a computer program. Variables have three parts.  The name, the type of data it's going to save, and the actual data it is storing.  The name of the variable is used when you want to get the data the variable is storing.  In the code you just wrote, you created a variable that stores text/string data.  The value stored in the variable is what is entered into the "Serial Monitor".

### Create Variable Block

The "create variable" block is used to create a variable.   When you use the "create variable" block, you must rename the variable from "item" to another name, as you did in step 11.  When creating a variable, you must decide the type of data you want it to store.  You can only set the data type with this block.  You also set the value that the variable will store as well.

![Variable](/images/archive/old-blockly-arduino/lesson-2/variable.png) 

### Set Variable Block

The "set variable" block is used to change the value of the variable. The drop-down box controls the which variable you are changing the value of.  The block you connect to it is the new value of the variable.

![Get Variable](/images/archive/old-blockly-arduino/lesson-2/get_variable.png) 

### Get Variable Block

Uses the variable's name to get the value that the variable is storing.   The drop-down box has a list of names of variables you can choose from to change.

![Get Variable](/images/archive/old-blockly-arduino/lesson-2/set_variable.png) 

### IF Block & Compare blocks

The "IF" block is used make decisions.  If what is connected to the "IF" block is true, the block inside it will execute.  In our case, we use the compare block to determine if something should execute.  Notice that the compare block has two holes.  If both blocks have the same value, and the drop-down box is set to "=", it means that the compare block will result in a "true" value.   You can set the dropdown to a lot of different comparisons. For example, not true is equals sign with the slash through it.

![If compare block](/images/archive/old-blockly-arduino/lesson-2/if-compare-block.png) 


### Serial Monitor

The Serial Monitor is a way you can send messages and receive messages with the Arduino.  The way you send a message is by typing the message into the input box and clicking the send button.  You will receive messages in the gray box below in the input box.  The Clear Window Button will clear all the data in the message box.  **Everytime you upload code, you will have to close and reopen the serial monitor.**

![Serial Monitor](/images/archive/old-blockly-arduino/lesson-2/serial-monitor.png) 

### Read Until One Character Block

This block will take the data you send from the serial monitor.  It will receive all the information minus the character you put into the "text" block.  In our example, you sent "ON\|" to the Arduino, but the value stored in the variable is "ON".  It chopped off the "\|" character.  

### Serial Print

This block will send a message from your Arduino to your computer.  It will output that message in the "Serial Monitor".  The "text" block that you put into it will determine the message that it sends.

![Read Until String](/images/archive/old-blockly-arduino/lesson-2/serial-print.png) 

#### IF Challenges 

a) Change the code to have the led stay on for 1 second and use the "Serial Print" block to say "LED Blinked. :)".

![Challenge IF A](/images/archive/old-blockly-arduino/lesson-2/challenge-if-a.gif) 

b) Change the code to make the led blick if you type "Blink\|" into the serial monitor input box.

![Challenge IF B](/images/archive/old-blockly-arduino/lesson-2/challenge-if-b.gif) 

c) Add an if statement to the code so that if you type in "LED ONE ON\|" it will turn on the led and print "Led one is on." to the serial monitor.

![Challenge IF C](/images/archive/old-blockly-arduino/lesson-2/challenge-if-c.gif) 

d) Add another if statement to the code so that if you type in "LED ONE OFF\|" it will turn off the led and print "Led one is off." to the serial monitor.

![Challenge IF D](/images/archive/old-blockly-arduino/lesson-2/challenge-if-d.gif) 

e) Connect a second led and control it like you did in the previous challenges.  So if you type in "LED TWO ON\|", it will turn on the led. 

![Challenge IF D](/images/archive/old-blockly-arduino/lesson-2/challenge-if-e.gif) 

### Other Challenges

- Create an if statement where you get both blocks to blink.
- Create a serial monitor quiz where it will light up one color for the right answer and another color for the wrong answer.
- Build and play around, do what you want. :)

### Quick Review

- Variables are used to store data; they have a name, type of data they store, and value.
- You can change the value of a variable with the variable set block.
- You can access the value of the variable with the variable's name and the get block.
- Serial Monitor allows you to send and receive messages from the Arduino.
- You can use the If and Compare blocks to make decisions run different pieces of code.