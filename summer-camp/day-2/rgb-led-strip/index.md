---
layout: page
title: RGB Leds
excerpt: "How to control a rbg led light strip."
modified: 2018-06-13
---

## Objective

To learn about how to create colors with rgb model and how to control an rgb light strip.  The campers we'll also get more practice with loops.

## Kit

![kit](/images/summer-camp/day-2/rbg-led-strip/kit.jpg)

## Completed Project

![complete](/images/summer-camp/day-2/rbg-led-strip/challenge-1.jpg)

## Bill of Materials 

- 1 x Arduino 
- 1 x rgb led light strip
- 3 x wires

## What is an rgb?

RGB stands for red green and blue.  It combines these colors to create other colors.  This is used in printing, building websites, building apps, art, and much more.

![rgb model](/images/summer-camp/day-2/rbg-led-strip/rgb.gif#img-phone)


## What is an rgb led strip?

This strip of led lights that you control the rgb values.  Each light is addressable, which means you can control the color.

![rgb model](/images/summer-camp/day-2/rbg-led-strip/rgb-led-strip.jpg)


## RGB Led Setup block

This block is used to tell the Arduino which pin is going to be the data pin.  This is usually one of the analog pins, (A0 - A5).  What analog means in this context is that we can send electronic signal through the arduino pin that that the led strip we'll be able to use a number.

![rgb model](/images/summer-camp/day-2/rbg-led-strip/setup-block.png)


## Set led color block

This block is used to set the individual colors of the led.  Important thing to note is that the Arduino we'll start counting at 0.  This means that the first led is 0.

## Instruction

1) Take a wire. Attach one end to the wire to the ground pin of the Arduino and the other end to the ground end of the led light strip.

![step 1](/images/summer-camp/day-2/rbg-led-strip/step_1.jpg)

2) Take a wire. Attach one end to the wire to the 5v pin of the Arduino and the other end to the 5v end of the led light strip.

![step 2](/images/summer-camp/day-2/rbg-led-strip/step_2.jpg)

3) Take a wire. Attach one end to the wire to the A0 pin of the Arduino and the other end to the data end of the led light strip.

![step 3](/images/summer-camp/day-2/rbg-led-strip/step_3.jpg)

4) From the "Neo Pixel" menu drag the setup block and the set led color block to the workspace.

![step 4](/images/summer-camp/day-2/rbg-led-strip/step_4.png#img-phone)

5) Change the led setup block to use pin A0.  Also see how many leds you have and make sure that is reflected in the setup block.

![step 5](/images/summer-camp/day-2/rbg-led-strip/step_5.png#img-phone)

6) Upload the code

![step 6](/images/upload-1.png)

7) You should see the first led light up.

![step 7](/images/summer-camp/day-2/rbg-led-strip/step_7.jpg)

## Challenge 1

Make all the leds light up blue.  Hint: Use a count with block and the "i" variable's value as the position of the led.  You will need to start at 0 and go to number of leds minus one.  For example if you have 60 leds you need count from 0 to 59.

![challenge 1](/images/summer-camp/day-2/rbg-led-strip/challenge-1.jpg)


## Challenge 2

Create a rainbow.  Hint you multiple count with  loops.  Check out this [website](https://eo.ucar.edu/kids/sky/colors1.htm) for rainbow color.

![challenge 2](/images/summer-camp/day-2/rbg-led-strip/challenge-2.jpg)


## Challenge 3

Try to create a cool light pattern on your own.










