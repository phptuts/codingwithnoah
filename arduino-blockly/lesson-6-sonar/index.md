---
layout: page
title: Arduino 106 - Sonar with else and other number types.
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


Follow the directions in [Arduino Setup Guide](/arduino-setup) if your computer has not been setup yet.  

1) Follow the directions [Arduino Blockly Start Guide](/arduino-blockly-start) to start the [Arduino Blockly Webpage](http://localhost:3000).
 
2) Open the [Arduino Blockly Webpage](http://localhost:3000).

3) Look at the sonar sensor and notice that it has 4 pins.  

- VCC is where the power goes to / volts
- GND is ground
- Trig Pin - Used to calibrate the sensor
- Echo Pin - Used to measure how long it takes for the wave to back and worth.  This is measured in micro seconds.  Every micro second is 1 millionth of a second.

![Sonar Sensor](/images/arduino-block/lesson-6/step3.jpg)


4) Take the sonar and plug vcc pin into (40, f) and the gnd pin into (43, f). 

![Sonar Sensor](/images/arduino-block/lesson-6/step4.jpg)

5) Plug a male to male jumper wire into (43, h) of the breadboard and to a ground pin of the Arduino.  Sonar (GND) -> Arduino (GND)

![Sonar Sensor](/images/arduino-block/lesson-6/step5.jpg)

6) Plug a male to male jumper wire into (42, h) of the breadboard and to pin 12 of the Arduino. Sonar (TRIG) -> Arduino (12). 

![Sonar Sensor](/images/arduino-block/lesson-6/step6.jpg)

7) Plug a male to male jumper wire into (41, h) of the breadboard and to pin 13 of the Arduino.  Sonar (ECHO) -> Arduino (13).

![Sonar Sensor](/images/arduino-block/lesson-6/step7.jpg)

8) Plug a male to male jumper wire into (40, h) of the breadboard and to 3.3v (volts) of the Arduino. Sonar (VCC) -> Arduino (3.3v)

![Sonar Sensor](/images/arduino-block/lesson-6/step8.jpg)

9) Drag the Serial Print block onto the screen and delete the Empty Quotes attached to it.

![Serial Print](/images/arduino-block/lesson-6/step9a.png)

![Serial Print](/images/arduino-block/lesson-6/step9b.png)

![Serial Print](/images/arduino-block/lesson-6/step9c.png)

10) Open the "Input/Output" menu option and connect the pulse in block to the Serial Print block.
 
![Pulse In](/images/arduino-block/lesson-6/step10a.png)

![Pulse In](/images/arduino-block/lesson-6/step10b.png)

11) Set the Twig Pin option to 12 and the Echo pin option to 13.

![Pulse In](/images/arduino-block/lesson-6/step11.png)

12) Connect a delay block to the bottom of the Serial Print block.

![Delay Block](/images/arduino-block/lesson-6/step12a.png)

![Delay Block](/images/arduino-block/lesson-6/step12b.png)

13) Upload the code to the Arduino and open the Serial Monitor.

![Upload](/images/arduino-block/lesson-6/step13.png)

14) Open the Serial Monitor.  What you are seeing is a the number of micro seconds the echo pin is HIGH.  The code that is running is written by the Arduino people.  Because the can be a really big number the creators decided to return a long variable type.

![Serial Monitor](/images/arduino-block/lesson-6/step14a.png)

![Serial Monitor](/images/arduino-block/lesson-6/step14b.png)

### Math

So the formula for calculating the number of centimeters away is to take the micro seconds and divide it by  58.4.  Notice that this number has a decimal point.  This will means that when you divide it by that number you will need a type of data that can store that.  This type is called a double.

15) Delete the Serial Print block but keep the Pulse in block.

![Pulse In block](/images/arduino-block/lesson-6/step15.png)

16) Create a "long" variable named "Pulse Time" that and set the value to Pulse In block. 

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

Question will this turn on the led.  What the "IF" block is asking is 2 > 5?  It's not right.  So let's say that we want to execute blocks if it is not true.  We can do this by using a mutator.  

![Math Block](/images/arduino-block/lesson-6/IF-a.png)

If you click the gear button and drag the else block inside the if block in the popup and new space will be added. If you put blocks into that space, those blocks will be executed if what is inside the if statement is not true.

![Math Block](/images/arduino-block/lesson-6/IF-b.png)

![Math Block](/images/arduino-block/lesson-6/IF-c.png)

So now the led will turn off if 2 < 5 and turn off if 2 > 5.

![Math Block](/images/arduino-block/lesson-6/IF-d.png)

### Challenge If / Else sonar led 

Set an led to turn of if an object is 8 or less away.  Hint you will need to set the Compare block to use the less than sign, '<'.   Take a measurement every second, you can do this using the delay block.

![Challenge Gif](/images/arduino-block/lesson-6/challenge.gif)

