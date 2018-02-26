---
layout: page
title: Arduino Blockly 101 - Output
excerpt: "How to control output with BlockyDuino."
modified: 2018-01-21
---

## Project Kit

![Arduino Kit](/images/arduino-block/lesson-1/kit.jpg) 

## Bill of Materials

- 1 x Arduino Uno
- 1 x Breadboard
- 1 x USB Arduino Cable
- 2 x LED
- 2 x 220-ohm resistor
- 4 x male to male jumper wires

## Steps

Follow the directions in [Arduino Setup Guide](/arduino-setup) if your computer has not been set up yet.  

  
1) Follow the directions [Arduino Blockly Start Guide](/arduino-blockly-start) to start the [Arduino Blockly Webpage](http://localhost:3000).
 
2) Open the [Arduino Blockly Webpage](http://localhost:3000).

3) Open the "Input\Output" menu option and drag the "DigitalWrite" block to the screen.

![Arduino Kit](/images/arduino-block/lesson-1/step3a.png) 

![Arduino Kit](/images/arduino-block/lesson-1/step3b.png) 

4) Set the "PIN#" to 13 and the "Stat" option to "HIGH".

![Arduino Kit](/images/arduino-block/lesson-1/step4.png) 

5) Click the upload button to upload the code you just created to the Arduino.   A success message will appear.

![Arduino Kit](/images/arduino-block/lesson-1/step5a.png) 

![Arduino Kit](/images/arduino-block/lesson-1/step5b.png) 

6) Notice that the built-in Led is turned on.  That only happens when you send electricity through pin 13.

![Arduino Kit](/images/arduino-block/lesson-1/step6.jpg) 

### DigitalWrite Block 

The purpose of the digital write block is to turn on and off electricity through the Arduino pins.  The pins are little pieces of metal attached to the Arduino that you can control.  Each pin is labeled.  The "PIN#" option in the block allows you to control which pin you are sending electricity through.  The second option is the "Stat".  If "Stat" is set to "HIGH",  the Arduino will send electricity through that pin.  If "Stat" is set to "LOW" the Arduino will stop sending electricity through that pin.  Pin 13 is special in that it controls the Arduino's built in led.  Meaning if Pin 13 is "HIGH", it will turn the built-in led on.

![Arduino Pins](/images/arduino-block/lesson-1/arduino-digital-write.jpg) 

![Arduino Digital Write Block](/images/arduino-block/lesson-1/digital-write-block.png) 

#### Digital Write Block Challenge!!  

Can you turn off the built-in led?   The Arduino should look like the picture below. :)

![Arduino Pins](/images/arduino-block/lesson-1/challenge-1.jpg) 

7) Look at the led and notice that it has two wires coming out the end of it.  The long wire is positive, and the short wire is negative.  

![Arduino Step](/images/arduino-block/lesson-1/led.jpg) 

8) Look at the breadboard. Breadboards are used to build circuits without having to solder/glue stuff together.  Breadboard connect wires plugged into it along vertical lines.  For example, if I plug wire one into (1, A) and I plug wire two into (1, B); the wires would be connected.

![Arduino Step](/images/arduino-block/lesson-1/breadboard.jpg) 

9) Insert the long end (positive) of the led into (1, A) of the breadboard.  Insert the short end (negative) of the led into (3, A) of the breadboard.

![Arduino Step](/images/arduino-block/lesson-1/step9.jpg) 

10) Insert the resistor into (1, B) and (-1, D) of the breadboard.

![Arduino Step](/images/arduino-block/lesson-1/step10.jpg) 

11) Take a male to male jumper wire and plug it into (-1, E) of the breadboard and pin 7 of the Arduino.

![Arduino Step](/images/arduino-block/lesson-1/step11.jpg) 

12) Take a male to male jumper wire and plug it into (3, E) of the breadboard and (gnd) ground of the Arduino.

![Arduino Step](/images/arduino-block/lesson-1/step12.jpg) 

#### Digital Write Block Challenge 2!!  

a): Can you make the led that you just setup turn on.

![Arduino Challenge](/images/arduino-block/lesson-1/challenge-2-a.jpg) 

b): Can you make the led that you just setup turn off.

![Arduino Challenge](/images/arduino-block/lesson-1/challenge-2-b.jpg) 

c): Can you make the led turn on using pin 8 of the Arduino.

![Arduino Challenge](/images/arduino-block/lesson-1/challenge-2-c.jpg) 

Once you are done with this challenge, click on the discard button to delete the blocks.  Move the jumper wire back to pin 7 on the Arduino.

![Arduino Challenge](/images/arduino-block/lesson-1/challenge-2-end-blocks.png)

![Arduino Challenge](/images/arduino-block/lesson-1/challenge-2-end-arduino.jpg)

13) Open the "Input\Output" menu option and drag the "DigitalWrite" block to the screen.

![Arduino Kit](/images/arduino-block/lesson-1/step13a.png) 

![Arduino Kit](/images/arduino-block/lesson-1/step13b.png) 

14) Set the "PIN#" to 7 and the "Stat" option to "HIGH".

![Arduino Kit](/images/arduino-block/lesson-1/step14.png) 

15) Open the "Control" menu option and drag the "Delay" block to the screen.

![Arduino Kit](/images/arduino-block/lesson-1/step15a.png) 

![Arduino Kit](/images/arduino-block/lesson-1/step15b.png) 

16) Connect the "DigitalWrite" block to the "Delay" block.

![Arduino Kit](/images/arduino-block/lesson-1/step16.png) 

17) Open the "Input\Output" menu option and drag another the "DigitalWrite" block to the screen. 

![Arduino Kit](/images/arduino-block/lesson-1/step17a.png) 

![Arduino Kit](/images/arduino-block/lesson-1/step17b.png) 

18) Connect the "DigitalWrite" block to the "Delay" block.  Set the PIN to 7 and STAT to LOW.

![Arduino Kit](/images/arduino-block/lesson-1/step18.png) 

19) Open the "Control" menu option and drag the "Delay" block to the screen. Connect it to the bottom 
"DigitalWrite" block.

![Arduino Kit](/images/arduino-block/lesson-1/step19a.png) 

![Arduino Kit](/images/arduino-block/lesson-1/step19b.png) 

20) Click the upload button. The led should blink every second.

![Arduino Kit](/images/arduino-block/lesson-1/step20a.png) 

![Arduino Kit](/images/arduino-block/lesson-1/step20b.gif) 

### Delay Block

The "Delay" block will pause the Arduino for a certain amount of time.  The amount of time the Arduino stops is controlled by the "number" block inside the "Delay" block.  With the code you just wrote, the "Delay" block would pause for 1 second or 1000 milliseconds.  For example, if you wanted to blink the light every 1/2 a second, you would change 1000 to 500.

#### Delay Block Challenge

a) Can you make the led blink every 1/2 second?

![Arduino Kit](/images/arduino-block/lesson-1/challenge-3-a.gif) 

b) Can you make the led stay on for 2 seconds and turn off for 1 second.

![Arduino Kit](/images/arduino-block/lesson-1/challenge-3-b.gif) 

c) Can you make the led stay on for 1/2 second and be turned off for 5 seconds.

![Arduino Kit](/images/arduino-block/lesson-1/challenge-3-c.gif)

### Delay Block Super Challenge

Hook another led into the Arduino using pin 8.  (Use steps 9 to 12 as a reference point.)  Make it so that when one led is on the other one is off. It should switch every second.  Hint write down the steps/blocks required to do this.

``` 
Step 1) Turn pin 7 LOW 
Step 2) Turn pin 8 HIGH 
Step 3) Delay for 1 second / 1000 milliseconds
```
![Arduino Kit](/images/arduino-block/lesson-1/challenge-4.gif)

## Other Challenges

- Make a unique pattern blinking pattern.
- Try and use the random block in the "Math" menu to randomly decided the number for the delay.
- Build and play around, do what you want. :)

## Quick Review

- DigitalWrite block controls which pin on the Arduino gets electricity.
- Delay block controls how long the program is on pause.
- Block on the top are executed before blocks on the bottom.  From up to down.
- Components: LEDs, breadboards, and pins in the Arduino.