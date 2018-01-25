---
layout: page
title: Arduino 103 - Number Variables & Servos
excerpt: "Serial Monitor Challenge."
modified: 2018-01-23
---

## Project Kit

![Servo](/images/arduino-block/lesson-3/kit.jpg) 

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

3) Look at wires on the servo and the picture and identify each one on the servo.

![Servo](/images/arduino-block/lesson-3/step3.jpg) 

4) Plug ground wire of the servo into ground pin of the Arduino.

![Servo](/images/arduino-block/lesson-3/step4.jpg) 

5) Plug 5v wire of the servo into 5v pin of the Arduino.

![Servo](/images/arduino-block/lesson-3/step5.jpg) 

6) Plug the data pin of the servo into pin 2 of the Arduino.

![Servo](/images/arduino-block/lesson-3/step6.jpg) 

7) Click the discard button to discard all the blocks in the workspace.

![Discard](/images/arduino-block/lesson-3/step7.png) 

8) Open the "Servo" menu option and drag the "Servo Move" block to the screen.

![Servo Block](/images/arduino-block/lesson-3/step8a.png) 

![Servo Block](/images/arduino-block/lesson-3/step8b.png) 

9) On the "Servo Move" block change the PIN option to 2.

![Servo Block](/images/arduino-block/lesson-3/step9.png) 

10) Click the upload the button.  The servo should move to one side, but you might not see anything happen.

![Upload](/images/arduino-block/lesson-3/step10a.png) 

![Servo Pic](/images/arduino-block/lesson-3/step10b.jpg) 

11) Change the value of the number block inside the move servo block to 180.

![Servo Block](/images/arduino-block/lesson-3/step11.png) 

12) Click the upload button.  You should see the servo move to the other side.

![Upload](/images/arduino-block/lesson-3/step12a.png) 

![Servo Pic](/images/arduino-block/lesson-3/step12b.jpg) 

13) Open the "Variable" menu option and drag the "Create Variable Name" block to the screen.

![Variable Block](/images/arduino-block/lesson-3/step13a.png) 

![Variable Block](/images/arduino-block/lesson-3/step13b.png) 

14) Click on the first drop down box and select rename variable.  Then name the variable to "Angle" & click "OK".

![Variable Block](/images/arduino-block/lesson-3/step14a.png) 

![Variable Block](/images/arduino-block/lesson-3/step14b.png) 

The variable is already using data type whole number.  We want to send whole number to the server.  Whole number means numbers without decimal points.

![Variable Block](/images/arduino-block/lesson-3/number_variable_block.png) 

15) Open the "Math" menu option and drag the "Number" block to connect with the number variable block.

![Variable Block](/images/arduino-block/lesson-3/step15a.png) 

![Variable Block](/images/arduino-block/lesson-3/step15b.png) 

16) Open the "Servo" menu option and connect the "Servo Move" block to the bottom of the variable block.
 
![Variable Block](/images/arduino-block/lesson-3/step16a.png) 
 
![Variable Block](/images/arduino-block/lesson-3/step16b.png) 

17) Drag the number block connected to the "Servo Move" block to the trash can located on the bottom right of the screen.

![Servo Block](/images/arduino-block/lesson-3/step17.png) 

18) Drag the "Get Variable" block to the servo and change it so that it uses "Angle".

![Servo Variable](/images/arduino-block/lesson-3/step18a.png) 

![Servo Variable](/images/arduino-block/lesson-3/step18b.png) 

![Servo Variable](/images/arduino-block/lesson-3/step18c.png) 

### Challenge Variables & Servo

a) Rotate the servo position to 15 by using value of the "Angle" variable.

![Challenge 1 A](/images/arduino-block/lesson-3/challenge-1-a.jpg) 

b) Rotate the servo position to 45 by using value of the "Angle" variable.

![Challenge 1 B](/images/arduino-block/lesson-3/challenge-1-b.jpg) 

### Challenge Serial Monitor Echo

a) Discard all the blocks.

b) Create a String Variable name "User Input" that is type "Text" with a empty quotes value block with nothing inside.

c) Set the "User Input" variable equal to the "Read Until One Character" Block.  You will find this block in the "Input\Output" menu option.

d) If the User Input **does not equal** an Empty Quotes block, serial print "You said something".  

Hint, you will need the if block, and the compare block, found in the "Logic" menu.  You will need to change the option on the compare from the default '='.

![Challenge 2](/images/arduino-block/lesson-3/challenge-2.png) 

Don't continue until you complete the challenge!!! If you have any problems ask for help from the instructor or email me at glaserpower [at] gmail.com.

<button type="button" onclick="document.querySelector('#hide-steps').style.display = 'block';">Un hide Steps</button>

<div id="hide-steps" style="display: none;">

<p>20) Delete the "Serial Print" block inside the "IF" block.</p> 
<p><img src="/images/arduino-block/lesson-3/step20.png" /></p>

<p>21) Create a variable inside the "IF" block named "Angle".  The type of variable is a number.</p> 
<p><img src="/images/arduino-block/lesson-3/step21a.png" /></p>
<p><img src="/images/arduino-block/lesson-3/step21b.png" /></p>
<p><img src="/images/arduino-block/lesson-3/step21c.png" /></p>

<p>22) Open the "Math" menu connect the "String to Whole Number" block to the "Angle" variable.</p> 
<p><img src="/images/arduino-block/lesson-3/step22a.png" /></p>
<p><img src="/images/arduino-block/lesson-3/step22b.png" /></p>

<p>23) Connect the "Get Variable" block to the "String to Whole Number".  Be sure to set it to use the "User Input" variable.</p>

<p><img src="/images/arduino-block/lesson-3/step23a.png" /></p>
<p><img src="/images/arduino-block/lesson-3/step23b.png" /></p>

<p>24) Open the "Servo" menu and take the "Servo Move" block to the bottom of the "IF" Block Do Section.</p>
<p><img src="/images/arduino-block/lesson-3/step24a.png" /></p>
<p><img src="/images/arduino-block/lesson-3/step24b.png" /></p>

<p>25) Change the PIN dropdown to 2.<p>
<p><img src="/images/arduino-block/lesson-3/step25.png" /></p>

<p>26) Take the number block attached to the Servo Move block and throw it into the trash.</p>
<p><img src="/images/arduino-block/lesson-3/step26.png" /></p>

<p>27) Drag the "Get Variable" block to the "Servo Move" block and have it use the "Angle" Variable</p>
<p><img src="/images/arduino-block/lesson-3/step27a.png" /></p>
<p><img src="/images/arduino-block/lesson-3/step27b.png" /></p>

<p>28) Upload the code.<p>
<p><img src="/images/arduino-block/lesson-3/step28.png" /></p>

<p>29) Open the "Serial Monitor" and type in '75\|' into the input box and click send</p>
<p><img src="/images/arduino-block/lesson-3/step29a.png" /></p>
<p><img src="/images/arduino-block/lesson-3/step29b.png" /></p>
<p><img src="/images/arduino-block/lesson-3/step29c.gif" /></p>

<h3>Other Challenges</h3>

<ul>
    <li>Write some code that will light up an LED if the angle number is greater than 100.</li>
    <li>Write some code that will light up an LED if the angle number is less than 30.</li>
    <li>Just have fun and do what you want to do. :)</li>
</ul>


<h3>Quick Review</h3>

<ul>
    <li>Blocks inside an IF block execute the  blocks inside them if what is connected to it is true.</li>
    <li>You can turn a String variable into a number nariable using the "String to Number Block".</li>
    <li>You can change the value of a variable but not the type of data the variable will store.</li>
    <li>The Serial Monitor allows your computer to communicate with the Arduino</li>
    <li>The Servo Motors are controlled by passing a number value into a "Servo Move" block.</li>
</ul>