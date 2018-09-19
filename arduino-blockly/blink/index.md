---
layout: page
title: Blink
excerpt: "How to make leds blink."
modified: 2018-06-16
---

## Objective

To learn about the delay block and how to blink an led outside of the Arduino.

## Kit

![Project](/images/arduino-block/blink/project.jpg)

## Completed Project

![blink](/images/arduino-block/blink/double-blink.gif)

![Led off](/images/arduino-block/blink/led-2-arduino_bb.png)


## Bill of Materials 

- 1 x Arduino with usb  ($7.00) 
- 1 x breadboard ($2.80)
- 2 x led ($.06)
- 2 x resistors ($.08)
- 4 x wires ($.04)
- total ($9.98)


## Delay Block

The delay block is used to pause the program for a certain amount of time.  The amount of time the program pauses is determined by the number inside the delay block.  In the example about the program will pause for 1000 milliseconds or one second.

![delay block menu](/images/arduino-block/blink/delay-block-menu.png)

![delay block](/images/arduino-block/blink/delay-block.png#img-phone)


## Led

The led stands for light emitting diode.  The important thing to note are the wires connected to it.  The long wire is  positive and the short wire is negative.  When you pass electricity through it, it will emit light.

![Led](/images/circuits/human-circuit/led.jpg)

## Resistor

The resistor is used to decrease the amount of electrons flowing through the wire.  The strength of the resistor is marked by the colored bands.  You can use the [calculator](https://www.allaboutcircuits.com/tools/resistor-color-code-calculator/) to learn more.

![Resistor](/images/circuits/human-circuit/resistor.jpg)

## Steps
 
1) Insert the long end (positive) of an led into (15, B) of the breadboard and the short end to (17, B) of the breadboard.

![Step 1](/images/arduino-block/blink/step_1.jpg)

2) Insert one of the resistor into (15, C) of the breadboard and the other end of the resistor into (11, C) of the breadboard.

![Step 2](/images/arduino-block/blink/step_2.jpg)

3) Connect a jumper wire from (11, A) of the breadboard to pin 7 of the Arduino.
 
![Step 3](/images/arduino-block/blink/step_3.jpg)

4) Connect a jumper wire from (17, A) of the breadboard to ground of the Arduino.

![Step 4](/images/arduino-block/blink/step_4.jpg)

## Challenge

Base on what you learned the [Intro to Arduino](/arduino-blockly/arduino-intro) can you turn on an led.

![Challenge 1](/images/arduino-block/blink/challenge_1.jpg)

Can you turn it off?

![Challenge 2](/images/arduino-block/blink/challenge_2.jpg)

5) Insert the long end (positive) of an led into (25, A) of the breadboard and the short end to (27, A) of the breadboard.

![Step 5](/images/arduino-block/blink/step_5.jpg)

6) Insert one of the resistor into (25, C) of the breadboard and the other end of the resistor into (21, C) of the breadboard.

![Step 6](/images/arduino-block/blink/step_6.jpg)

7) Connect a jumper wire from (21, A) of the breadboard to pin 8 of the Arduino.

![Step 7](/images/arduino-block/blink/step_7.jpg)

8) Connect a jumper wire from (27, A) of the breadboard to ground of the Arduino.

![Step 8](/images/arduino-block/blink/step_8.jpg)

## Challenge 

 Can you make both lights turn on based on what you learned.

![Challenge 3](/images/arduino-block/blink/challenge_3.jpg)

### Challenge 

Can you make the led attached to pin 7 blink every second.  

Hint write down the steps.

1. Turn on the led using the delay block
2. Pause the program for one second
3. Turn off the led 
...

![blink](/images/arduino-block/blink/blink.gif)

### Challenge 

Can you modify your code so that it will turn on led 7 and off led 8, wait a second, then on led 8 and off led 7, then wait another second.

Hint write down the steps again.

![blink](/images/arduino-block/blink/double-blink.gif)


### Challenge
 
 Can you change your code so that led attached to pin 7 stays on for 5 seconds and the led on pin 8 stays off for 5 seconds.  Then the led on 8 should go one for 1 second while the led on pin 7 is off.

![blink](/images/arduino-block/blink/off-beat-blink.gif)

### Challenge 

Have fun and make your own led light patterns.

## Review 

- How do you determine which block gets execute first?
- What does the delay block do?
- If you put 10,000 in the delay block how many seconds will the program pause?
- What did you learn?



