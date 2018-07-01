---
layout: page
title: Arduino 105 - Debugging with global variables and push buttons.
excerpt: "Learn global variables and debugging with the Arduino and a push button."
modified: 2018-01-26
---
## Project Kit

![Kit](/images/archive/old-blockly-arduino/lesson-5/kit.jpg) 

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

Follow the directions in [Arduino Setup Guide](/arduino-setup) if your computer has not been set up yet.  

1) Follow the directions [Arduino Blockly Start Guide](/arduino-blockly-start) to start the [Arduino Blockly Webpage](http://localhost:3000).
 
2) Open the [Arduino Blockly Webpage](http://localhost:3000).

3) Take a wire of the push button and plug it into pin 2 of the Arduino.

![Push Button](/images/archive/old-blockly-arduino/lesson-5/step3.jpg)

4) Take the other wire of the push button and plug it into ground of the Arduino.

![Push Button](/images/archive/old-blockly-arduino/lesson-5/step4.jpg)

5) Drag the "Serial Print" Block onto the Screen and Delete the "Text" block connected to it.
![Serial Print](/images/archive/old-blockly-arduino/lesson-5/step5a.png)

![Serial Print](/images/archive/old-blockly-arduino/lesson-5/step5b.png)


6) Open the "Input\Output" menu option and connect the "Digital Read with Pullup Resistor" block to the "Serial Print" block.

![Serial Print](/images/archive/old-blockly-arduino/lesson-5/step6a.png)

![Serial Print](/images/archive/old-blockly-arduino/lesson-5/step6b.png)

7) Change the PIN # to use pin 2.

![Serial Print](/images/archive/old-blockly-arduino/lesson-5/step7.png)

8) Connect a delay block to the bottom of the "Serial Monitor" block.  Change the delay number to 50 / (1/20th of a second).

![Serial Print](/images/archive/old-blockly-arduino/lesson-5/step8a.png)

![Serial Print](/images/archive/old-blockly-arduino/lesson-5/step8b.png)

9) Upload the Code.

![Upload Code](/images/archive/old-blockly-arduino/lesson-5/step9.png)

10) Open the "Serial Monitor" and push the button.  Notice when you push the button it prints  0, and when you let go of the button, it prints  1.

![Serial Monitor](/images/archive/old-blockly-arduino/lesson-5/step10a.png)

![Serial Monitor](/images/archive/old-blockly-arduino/lesson-5/step10b.png)

### Digital Read Block and Input Pull up Resistor

The regular digital read block will take a pin and return one if electricity is going through it and 0 if nothing is going through it.  The Input Pull up Resistor pin has a 10000-ohm resistor attached to it.  

Because of the high resistance, the pin will have 5 volts of electricity running through it. Remember if we increase the resistance we increase the volts.  volts = resistance (ohms) x current (amps).  That is why it's defaulted to 1. Only when we hook it up to ground (GND), will the electricity be drained causing the pin to read 0.

![Digital Read Block](/images/archive/old-blockly-arduino/lesson-5/digital-read-input.png)


11) Discard all the blocks on the screen.

![Discard all blocks](/images/archive/old-blockly-arduino/lesson-5/step11.png)

12) Drag the "Create Global Variable" block onto the screen.  Notice that the variable by default is set to "Whole Number" and that you can change it to another type.

![Discard all blocks](/images/archive/old-blockly-arduino/lesson-5/step12.png)

13) Rename the variable you just created "Global Counter".

![Global Variable](/images/archive/old-blockly-arduino/lesson-5/step13a.png)

![Global Variable](/images/archive/old-blockly-arduino/lesson-5/step13b.png)

14) Set the value of the variable to 0 using a number block.

![Global Variable](/images/archive/old-blockly-arduino/lesson-5/step14a.png)

![Global Variable](/images/archive/old-blockly-arduino/lesson-5/step14b.png)

15) Drag a "Create Variable" Block onto the screen.  Name the variable "Counter" and set the value of the variable to 0.  **This block will not have the word global in it.**

![Global Variable](/images/archive/old-blockly-arduino/lesson-5/step15.png)

16) Connect the "Set Variable" block to the bottom of the "Create Variable" block and set the drop down to "Global Variable".

![Set Variable](/images/archive/old-blockly-arduino/lesson-5/step16a.png)

![Set Variable](/images/archive/old-blockly-arduino/lesson-5/step16b.png)

17) Connect the "Math Operation" block to the "Set Variable" Block.

![Set Variable](/images/archive/old-blockly-arduino/lesson-5/step17a.png)

![Set Variable](/images/archive/old-blockly-arduino/lesson-5/step17b.png)

18) Connect a "Get Variable" block to the first hole in the "Math Operation" block.  Set the "Get Variable" to use the "Global Variable".

![Set Variable](/images/archive/old-blockly-arduino/lesson-5/step18a.png)

![Set Variable](/images/archive/old-blockly-arduino/lesson-5/step18b.png)

19) Connect a "Number" block to the hole in the "Math Operation" block and set the number to 1.

![Set Variable](/images/archive/old-blockly-arduino/lesson-5/step19a.png)

![Set Variable](/images/archive/old-blockly-arduino/lesson-5/step19b.png)

That is how you add 1 to a variable that is storing a number.  You take the value that is being stored in a variable, and you add one.  Then you set the calculated value to the value that the variable is storing.

20) Add one to the "Counter" variable.

![Set Variable](/images/archive/old-blockly-arduino/lesson-5/step20.png)

21) Drag the debug block onto the screen.  The debug block will pause the program and allow you to see all the current variables and their values in the serial monitor.  Use this when you are having trouble figuring out what a program is doing.  This is called debugging.

![Set Variable](/images/archive/old-blockly-arduino/lesson-5/step21a.png)

![Set Variable](/images/archive/old-blockly-arduino/lesson-5/step21b.png)

22) Upload the code to the Arduino.

![Upload Code](/images/archive/old-blockly-arduino/lesson-5/step22.png)

23) Open the "Serial Monitor".

![Serial Monitor](/images/archive/old-blockly-arduino/lesson-5/step23.png)

24) Restart the code the Arduino by pushing the red button.

![Serial Monitor](/images/archive/old-blockly-arduino/lesson-5/step24.jpg)

25) Notice the debug block is black and highlight that means that the code has stopped there.  Look at the serial monitor and notice that both variables have the same value. Click the continue button a few times, and see that "Global Counter" variable increases by one each time while the "Counter" variable does not.  This is because "Counter" variable is created and set to 0 every time the Arduino is it goes through the blocks.   Because global variables exist external to the main blocks, they don't get recreated everytime it executes.  That is why you global variable block to other blocks.

![Variable vs Global Variable](/images/archive/old-blockly-arduino/lesson-5/step25a.png)

![Variable vs Global Variable](/images/archive/old-blockly-arduino/lesson-5/step25b.png)

![Variable vs Global Variable](/images/archive/old-blockly-arduino/lesson-5/step25c.png)

### Challenges

a) Create code so that when you push the button an LED will turn on and when you don't push the button an LED will turn off.  (Hint) You will need to use the "IF" block and compare block.

![Variable vs Global Variable](/images/archive/old-blockly-arduino/lesson-5/challenge-a.gif)

b) Create code so that every time you push the button, the Servo will increase its angle by until it get's to 180 at which point it will go back to 0.  (Hint) You will need to use the "IF" block, the compare block, and the "Servo Move" block.  Instead of pin two use pin 5 of the Arduino, be sure to set the "Servo Move" block to use pin 5.

![Variable vs. Global Variable](/images/archive/old-blockly-arduino/lesson-5/challenge-b.gif)

c) (Super Challenge) Create a program that will blink an led for 1 second for every time you push the button.  You will need a global variable and "Count Loop" block.

![Variable vs Global Variable](/images/archive/old-blockly-arduino/lesson-5/challenge-c.gif)
 
### Quick Review

- Global variables save their value when the Arduino starts from the top again.
- When using digital read with input pull up resistor, 0 means the button is pushed.
- Standard variables reset when the Arduino starts at the top again.

#### Thank you to Rayc for hand modeling.