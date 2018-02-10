---
layout: page
title: Arduino 105 - Debugging with global variables and push buttons.
excerpt: "Learn global variables and debugging with the Arduino and a push button."
modified: 2018-01-26
---
## Project Kit

![Kit](/images/arduino-block/lesson-5/kit.jpg) 

## Bill of Materials

- 1 x Arduino Uno
- 1 x Arduino USB
- 1 x Servo
- 1 x Breadboard 
- 1 x Push Button 
- 2 x 220 Ohm Resistors 
- 2 x LEDs 
- 7 x male to male jumper wires 

## Steps

Follow the directions in [Arduino Setup Guide](/arduino-setup) if your computer has not been setup yet.  

1) Follow the directions [Arduino Blockly Start Guide](/arduino-blockly-start) to start the [Arduino Blockly Webpage](http://localhost:3000).
 
2) Open the [Arduino Blockly Webpage](http://localhost:3000).

3) Take on end of the push button and plug it into pin 2 of the Arduino.

![Push Button](/images/arduino-block/lesson-5/step3.jpg)

4) Take the other end of the push button and plug it into ground of the Arduino.

![Push Button](/images/arduino-block/lesson-5/step4.jpg)

5) Drag the "Serial Print" Block onto the Screen and Delete the "Empty String" block connected to it.
![Serial Print](/images/arduino-block/lesson-5/step5a.png)

![Serial Print](/images/arduino-block/lesson-5/step5b.png)


6) Open the "Input\Output" menu option and connect the "Digital Read with Pullup Resistor" block to the "Serial Print" block.

![Serial Print](/images/arduino-block/lesson-5/step6a.png)

![Serial Print](/images/arduino-block/lesson-5/step6b.png)

7) Change the PIN # to be 2 on the block.

![Serial Print](/images/arduino-block/lesson-5/step7.png)

8) Connect a delay block to the bottom of the "Serial Monitor" block.  Change the delay number to 100 / (1/10th of a second).

![Serial Print](/images/arduino-block/lesson-5/step8a.png)

![Serial Print](/images/arduino-block/lesson-5/step8b.png)

9) Upload the Code.

![Upload Code](/images/arduino-block/lesson-5/step9.png)

10) Open the "Serial Monitor" and push the button.  Notice when you push the button state is 0 and when you let go of the button it's 1.

![Serial Monitor](/images/arduino-block/lesson-5/step10a.png)

![Serial Monitor](/images/arduino-block/lesson-5/step10b.png)

### Digital Read Block and Input Pull up Resistor

The normal digital read block will take a pin and return 1 if electricity is going through it and 0 if nothing is going through it.  The Input Pull up Resistor has a 10000 ohm resistor attached to it.  This means that pin will by default read 5 volts because there always some electricity going through the pin.  Remember if we increase the resistance we increase the volts.  volts = resistance (ohms) x current (amps).  This is why it's defaulted to 1.  But when we hook it up to ground (gnd) it will drain all the electricity and the pin will read 0.

![Digital Read Block](/images/arduino-block/lesson-5/digital-read-input.png)


11) Discard all the blocks on the screen.

![Discard all blocks](/images/arduino-block/lesson-5/step11.png)

12) Drag the "Create Global Variable Block onto the screen".  Notice that the variable by default is set to "Whole Number" and that you can change it to another type.

![Discard all blocks](/images/arduino-block/lesson-5/step12.png)

13) Rename the variable you just created "Global Counter".

![Global Variable](/images/arduino-block/lesson-5/step13a.png)

![Global Variable](/images/arduino-block/lesson-5/step13b.png)

14) Set the value of the variable to 0 using a number block.

![Global Variable](/images/arduino-block/lesson-5/step14a.png)

![Global Variable](/images/arduino-block/lesson-5/step14b.png)

15) Drag a "Create Variable" Block onto the screen.  Name the variable "Counter" and set the value of the variable to 0.  **This block will not have the word global in it.**

![Global Variable](/images/arduino-block/lesson-5/step15.png)

16) Connect the "Set Variable" block to the bottom of the "Create Variable" block and set the drop down to "Global Variable".

![Set Variable](/images/arduino-block/lesson-5/step16a.png)

![Set Variable](/images/arduino-block/lesson-5/step16b.png)

17) Connect the "Math Operation" block to the "Set Variable" Block.

![Set Variable](/images/arduino-block/lesson-5/step17a.png)

![Set Variable](/images/arduino-block/lesson-5/step17b.png)

18) Drag the "Get Variable" block and drag it into the first hole in the "Math Operation" block.

![Set Variable](/images/arduino-block/lesson-5/step18a.png)

![Set Variable](/images/arduino-block/lesson-5/step18b.png)

19) Connect a "Number" block to the whole in the "Math Operation" block and set the number to 1.

![Set Variable](/images/arduino-block/lesson-5/step19a.png)

![Set Variable](/images/arduino-block/lesson-5/step19b.png)

This is how you add 1 to a variable that is storing a number.  You take the value that is in the variable and you add one.  Then you set that value that was calculated to the value of the variable.

20) Add one to the "Counter" variable.

![Set Variable](/images/arduino-block/lesson-5/step20.png)

21) Drag the the debug block onto the screen.  The debug block will pause the program and allow you to see all the current variables and their values in the serial monitor.  Use this when you are having trouble figuring out what a program is doing.  This is called debugging.

![Set Variable](/images/arduino-block/lesson-5/step21a.png)

![Set Variable](/images/arduino-block/lesson-5/step21b.png)

22) Upload the code to the Arduino.

![Upload Code](/images/arduino-block/lesson-5/step22.png)

23) Open the "Serial Monitor".

![Serial Monitor](/images/arduino-block/lesson-5/step23.png)

24) Restart the code the Arduino by pushing the read button.

![Serial Monitor](/images/arduino-block/lesson-5/step24.jpg)

25) Notice the the debug block is black and highlight that means that the code has stopped there.  Look at the serial monitor and notice that both variables have the same value. Click the continue button a few times and you will notice that "Global Counter" variable increase by one each time while the "Counter" variable does not.  This is because "Counter" variable is created and set to 0 every time the Arduino is it goes through the blocks.  Where the "Global Counter" variable is set outside of that.  This is why you can't connect it other blocks.

![Variable vs Global Variable](/images/arduino-block/lesson-5/step25a.png)

![Variable vs Global Variable](/images/arduino-block/lesson-5/step25b.png)

![Variable vs Global Variable](/images/arduino-block/lesson-5/step25c.png)

### Challenges

a) Create code so that when you push the button an LED will turn on and when you don't push the button an LED will turn off.  (Hint) You will need to use the "IF" block and compare block.

![Variable vs Global Variable](/images/arduino-block/lesson-5/challenge-a.gif)

b) Create code so that every time you push the button the Servo will increase it's angle by until it get's to 180 at which point it will go back to 0.  (Hint) You will need to use the "IF" block, the compare block, and the "Servo Move" block.  Instead of pin 2 use pin 5 of the Arduino, be sure to set the "Servo Move" block to use pin 5.

![Variable vs Global Variable](/images/arduino-block/lesson-5/challenge-b.gif)

c) (Super Challenge) Create a program that will blink and led for 1 second for every time you push the button.  You will need a global variable and "Count Loop" block.

![Variable vs Global Variable](/images/arduino-block/lesson-5/challenge-c.gif)
 
### Quick Review

- Global variables save their value when the Arduino starts from the top again.
- When using digital read with input pull up resistor, 0 means the button is pushed.
- Normal variables reset when the Arduino starts at the top again.

#### Thank you to Rayc for hand modeling.