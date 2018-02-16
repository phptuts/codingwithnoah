---
layout: page
title: Arduino 109 - LED Matrix Challenge with else
excerpt: "Learn how to control lcd screens with the Arduino & Serial Monitor."
modified: 2018-2-11
---

## Project Kit

![Kit](/images/arduino-block/lesson-9/kit.jpg) 

## Bill of Materials

- 1 x Arduino Uno
- 1 x Arduino USB
- 1 x LED Matrix 8x8
- 5 x male to female jumper wires 

### Steps

Follow the directions in [Arduino Setup Guide](/arduino-setup) if your computer has not been setup yet.  

1) Follow the directions [Arduino Blockly Start Guide](/arduino-blockly-start) to start the [Arduino Blockly Webpage](http://localhost:3000).
 
2) Open the [Arduino Blockly Webpage](http://localhost:3000).

3) Look at the led matrix connecting pins.

![LED Matrix](/images/arduino-block/lesson-9/step3.jpg) 

4) Connect VCC (Volts) on the led matrix to 5v (5 volts) on the Arduino.

![LED Matrix](/images/arduino-block/lesson-9/step4.jpg) 

5) Connect GND (Ground) on the led matrix to gnd (Ground) on the Arduino.

![LED Matrix](/images/arduino-block/lesson-9/step5.jpg) 

6) Connect DIN (Data) on the led matrix to pin 12 on the Arduino.

![LED Matrix](/images/arduino-block/lesson-9/step6.jpg) 

7) Connect CS (Chip Set) on led matrix to pin 10 on the Arduino.

![LED Matrix](/images/arduino-block/lesson-9/step7.jpg) 

8) Connect CLK (Clock) on the led matrix to pin 11 on the Arduino.

![LED Matrix](/images/arduino-block/lesson-9/step8.jpg) 

9) Take one of the button's wire and connect it to pin 2 of the Arduino and the other end a ground pin of the Arduino.

![Button](/images/arduino-block/lesson-9/step9a.jpg) 

![Button](/images/arduino-block/lesson-9/step9b.jpg) 

10) Drag a "IF Block" from the logic menu on the workspace.

![IF Block](/images/arduino-block/lesson-9/step10.png) 

11) Connect a "DigitalRead with Pullup Resistor" block to the if block and set to pin 2 of the Arduino.

![IF Block](/images/arduino-block/lesson-9/step11a.png) 

![IF Block](/images/arduino-block/lesson-9/step11b.png) 

12) Click on the "gear / mutator" and drag the else block into the "if block".  Click on the gear again to close it.

![IF Block](/images/arduino-block/lesson-9/step12a.png) 

![IF Block](/images/arduino-block/lesson-9/step12b.png) 

![IF Block](/images/arduino-block/lesson-9/step12c.png) 

13) Connect the "Set led row / column" block from the "Input\Output" menu to the "do" part of the block.  Uncheck the check box.

![IF Block](/images/arduino-block/lesson-9/step13a.png) 

![IF Block](/images/arduino-block/lesson-9/step13b.png) 

14) Connect the "Set led row / column" block from the "Input\Output" menu to the "else" part of the block.  

![Else](/images/arduino-block/lesson-9/step14.png) 

15) Upload the code to the Arduino.  Notice when you push the button an led turns on.

![Upload](/images/arduino-block/lesson-9/step15a.png) 

![led matrix](/images/arduino-block/lesson-9/step15b.jpg) 

![led matrix](/images/arduino-block/lesson-9/step15c.jpg) 

### Else

So here's what going on.  The "DigitalRead with Pullup Resistor" block will return 1 when the button is **not** pushed down.  The if statement will say anything above 0 is the same as true.  So if the button is **not** pushed down we'll turn off the light, **else** we'll turn the light on.  So the else block will execute the blocks inside it when what the if block evaluates is **not** true.


### Challenge Simple

Make Row 3 / Column 3 turn on when the button is pushed.

### Super Challenge

Take what you did in the last lesson make it so that you can type in something like "3\|1\|ON" to make the 3rd column and 1st row's led on.  If you receive "3\|1\|OFF" make the led go off.  Hint use and if / else to make this happen.  
 
 
 ![Serial Monitor](/images/arduino-block/lesson-9/challenge-a.png) 
 
 ![led matrix](/images/arduino-block/lesson-9/challenge-b.jpg) 
 
 ![Serial Monitor](/images/arduino-block/lesson-9/challenge-c.png) 

 ![led matrix](/images/arduino-block/lesson-9/challenge-d.jpg) 

 