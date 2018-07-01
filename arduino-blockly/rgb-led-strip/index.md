---
layout: page
title: RGB Led Strip
excerpt: "How to control a rbg led light strip."
modified: 2018-06-15
---

## Objective

To learn about how to create colors with rgb model and how to control an rgb light strip.  The students we'll also get more practice with loops.

## Kit

![kit](/images/arduino-block/rbg-led-strip/kit.jpg)

## Completed Project

![complete](/images/arduino-block/rbg-led-strip/challenge-1.jpg)

## Bill of Materials 

- 1 x Arduino with usb  ($7.00) 
- 1 x rgb led light strip ($4.99)
- 3 x wires ($0.12)
- total ($12.11)


## What is an rgb led strip?

This strip of led lights that allows control the color of each led light.  

![rgb model](/images/arduino-block/rbg-led-strip/rgb-led-strip.jpg)

## RGB Led Setup block

This block is used to tell the Arduino which pin is going to be the data pin and number led lights in the light strip.  The data pin is usually one of the analog pins, (A0 - A5).  Analog pins allow the Arduino to a wave of electricity that can be used to represent a number to an external device.

![setup block](/images/arduino-block/rbg-led-strip/setup-block.png)

## Set led color block

This block is used to set the individual colors of the led.  Important thing to note is that the Arduino we'll start counting at 0.  This means that the first led is 0.  

![set rgb color block](/images/arduino-block/rbg-led-strip/set-led-color-block.png)

## Instruction

1) Look at the bag it came the labels for the wires.  Notice the cables are labeled ground, volts, and data.

![LED Light Strip Label](/images/arduino-block/rbg-led-strip/step_1.jpg) 

2) Take the led light strip out of the bag.  Notice the arrow and direction it is pointing.  You want to hook the wires at the start of the pointing arrow.

![LED Light Strip](/images/arduino-block/rbg-led-strip/step_2.jpg) 

3) Take a jumper wire and hook it into the data line of the led light strip and the A0 pin of the Arduino.

![LED Light Strip](/images/arduino-block/rbg-led-strip/step_3.jpg) 

4) Take a jumper wire and hook it into the ground of the led light strip and the gnd (ground) pin of the Arduino.

![LED Light Strip](/images/arduino-block/rbg-led-strip/step_4.jpg) 

5) Take a jumper wire and hook it into volts of the led light strip and the 5 volts (5v) pin of the Arduino.

![LED Light Strip](/images/arduino-block/rbg-led-strip/step_5.jpg) 

6) From the "Neo Pixel" menu drag the setup block and the set led color block to the workspace.

![step 4](/images/arduino-block/rbg-led-strip/step_6.png#img-phone)

7) Change the led setup block to use pin A0.  Also see how many leds you have and make sure that is reflected in the setup block.

![step 5](/images/arduino-block/rbg-led-strip/step_7.png#img-phone)

8) Upload the code

![step 6](/images/upload-1.png)

9) You should see the first led light up.

![step 7](/images/arduino-block/rbg-led-strip/step_8.jpg)

## Challenge 1

Make all the leds light up blue.  Hint: Use a count with block and the "i" variable's value as the position of the led.  You will need to start at 0 and go to number of leds minus one.  For example if you have 60 leds you need count from 0 to 59.

![challenge 1](/images/arduino-block/rbg-led-strip/challenge-1.jpg)


## Challenge 2

Create a rainbow.  Hint you multiple count with  loops.  Check out this [website](https://eo.ucar.edu/kids/sky/colors1.htm) for rainbow color.

![challenge 2](/images/arduino-block/rbg-led-strip/challenge-2.jpg)


## Challenge 3

Try to create a cool light pattern on your own.

## Review

- What does rgb stand for?
- What is rgb used for?
- What cool things can use build with an led light strip? (No wrong answer)
- What id you learn?






