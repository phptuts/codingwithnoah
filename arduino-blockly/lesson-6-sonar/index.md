---
layout: page
title: Arduino 106 - Sonar with "else"  blocks and other number types.
excerpt: "Learn long and double variables along with else blocks with Arduino Sonar."
modified: 2018-1-30
---
## Project Kit

![Kit](/images/arduino-block/lesson-6/kit.jpg) 

## Bill of Materials

- 1 x Arduino Uno
- 1 x Arduino USB
- 1 x Sonar Sensor
- 1 x Breadboard 
- 1 x Push Button 
- 2 x 220 Ohm Resistors 
- 2 x LEDs 
- 7 x male to male jumper wires 

### Steps


Follow the directions in [Arduino Setup Guide](/arduino-setup) if your computer has not been set up yet.  

1) Follow the directions [Arduino Blockly Start Guide](/arduino-blockly-start) to start the [Arduino Blockly Webpage](http://localhost:3000).
 
2) Open the [Arduino Blockly Webpage](http://localhost:3000).

3) Look at the sonar sensor and notice that it has four pins.  

- VCC is where the power/volts goes.
- GND is ground
- Trig Pin - Used to calibrate the sensor.
- Echo Pin - Used to measure how long it takes for the sonar wave to make a round trip.  

![Sonar Sensor](/images/arduino-block/lesson-6/step3.jpg)


4) Take the sonar sensor and plug VCC pin into (40, f) and the GND pin into (43, f). 

![Sonar Sensor](/images/arduino-block/lesson-6/step4.jpg)

5) Plug a male to male jumper wire into (43, h) of the breadboard and to a ground pin of the Arduino.  Sonar (GND) -> Arduino (GND)

![Sonar Sensor](/images/arduino-block/lesson-6/step5.jpg)

6) Plug a male to male jumper wire into (42, h) of the breadboard and to pin 13 of the Arduino. Sonar (ECHO) -> Arduino (13). 

![Sonar Sensor](/images/arduino-block/lesson-6/step6.jpg)

7) Plug a male to male jumper wire into (41, h) of the breadboard and to pin 12 of the Arduino.  Sonar (TRIG) -> Arduino (12).

![Sonar Sensor](/images/arduino-block/lesson-6/step7.jpg)

8) Plug a male to male jumper wire into (40, h) of the breadboard and to 5v (volts) of the Arduino. Sonar (VCC) -> Arduino (5v)

![Sonar Sensor](/images/arduino-block/lesson-6/step8.jpg)

9) Drag the "Serial Print" block onto the screen and delete the "Text" block attached to it.

![Serial Print](/images/arduino-block/lesson-6/step9a.png)

![Serial Print](/images/arduino-block/lesson-6/step9b.png)

![Serial Print](/images/arduino-block/lesson-6/step9c.png)

10) Open the "Input/Output" menu option and connect the "pulse in" block to the "Serial Print" block.
 
![Pulse In](/images/arduino-block/lesson-6/step10a.png)

![Pulse In](/images/arduino-block/lesson-6/step10b.png)

11) Set the Trig Pin option to 12 and the Echo pin option to 13.

![Pulse In](/images/arduino-block/lesson-6/step11.png)

12) Connect a delay block to the bottom of the Serial Print block.

![Delay Block](/images/arduino-block/lesson-6/step12a.png)

![Delay Block](/images/arduino-block/lesson-6/step12b.png)

13) Upload the code to the Arduino.

![Upload](/images/arduino-block/lesson-6/step13.png)

14) Open the Serial Monitor.  What you are seeing is the number of microseconds the echo pin is HIGH.  Because the number return from the "pulse in" block can be huge, we have to use a "big whole number / long" for the type of data it's storing.

![Serial Monitor](/images/arduino-block/lesson-6/step14a.png)

![Serial Monitor](/images/arduino-block/lesson-6/step14b.png)

### Math

Divide 58.4 by the number return from the "pulse in" block to get the number of centimeters away an object is.  Notice that this number has a decimal point.  This will means that when you divide it by that number, you will need a type of data that can store decimal points.  This type is called a double.

15) Delete the "Serial Print" block, but keep the "pulse in" block.

![Pulse In block](/images/arduino-block/lesson-6/step15.png)

16) Create a "long" variable named "Pulse Time", and set the value to "Pulse In" block. 

![Pulse In block](/images/arduino-block/lesson-6/step16.png)

17) Create a "double" variable named "CM", connect it to the bottom of "Pulse Time" variable.

![CM Variable](/images/arduino-block/lesson-6/step17.png)

18) Drag the "Math Operation" block and connect it to the "CM" block.

![Math Block](/images/arduino-block/lesson-6/step18a.png)

![Math Block](/images/arduino-block/lesson-6/step18b.png)

19) Adjust the math block to divide instead of add.

![Math Block](/images/arduino-block/lesson-6/step19.png)

20) Drag the "Get Variable" block into the first hole of the "Math Operation" block and set it to use "Pulse Time" variable.

![Math Block](/images/arduino-block/lesson-6/step20.png)

21) Drag a number block into the other hole and set it equal to 58.4.

![Math Block](/images/arduino-block/lesson-6/step21.png)

### IF / ELSE Block (How to add else to an if block)

Will this turn on the led?  The "If" is determining if  2 > 5?  It's not right.  So let's say that we want to execute blocks if it is not true.  We can do this by using a mutator.  

![Math Block](/images/arduino-block/lesson-6/IF-a.png)

To add "else" to an "if" block drag, click on the gear and drag the else block in the popup inside the "if" block inside the popup. If you put blocks into that space, those blocks will be executed when what the "if" block is evaluating is not true.

![Math Block](/images/arduino-block/lesson-6/IF-b.png)

![Math Block](/images/arduino-block/lesson-6/IF-c.png)

So now the led will turn off if 2 < 5 and turn off if 2 > 5.

![Math Block](/images/arduino-block/lesson-6/IF-d.png)

### Challenge If / Else sonar led 

Set an led to turn on if an object is 8 cm or less away.  Hint you will need to set the Compare block to use the less than sign, '<'.   Take a measurement every second; you can do this using the delay block.

![Challenge Gif](/images/arduino-block/lesson-6/challenge.gif)

