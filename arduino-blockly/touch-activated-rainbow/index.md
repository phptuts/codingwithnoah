---
layout: page
title: Touch Activated Rainbow
excerpt: "How to build a touch activate rainbow."
modified: 2018-7-20
---

## Objective

To learn how to build a touch activate rainbow using a touch sensor and rgb led light strip.

## Kit

![kit](/images/arduino-block/touch-activated-rainbow/kit.jpg)

## Completed Project

![completed project](/images/arduino-block/touch-activated-rainbow/challenge_1.gif)

## Bill of Materials

- 1 x Arduino and usb cable
- 1 x RGB Led Strip
- 1 x touch sensor
- 6 x m to f wires

## What is a touch sensor?

A touch sensor is an electronic device that reads whether it is being touched.  The sensor we are using requires 3 volts.  The way it works is that if the signal pin has electricity the sensor is being touched.

![Touch Sensor](/images/arduino-block/touch-activated-rainbow/touch-sensor.jpg)

## Digital Read Block

This block will return a 1 or true value if the pin that it is reading has electricity running through it.

![digital read block](/images/arduino-block/touch-activated-rainbow/digital-read-block.png)

## IF Block

The if block is used to make decisions.  If what is connected to the top part of the if block is true then the blocks inside the do part will execute.  If you need a refresher check out this [lesson](/arduino-blockly/if-blocks).

![if block](/images/arduino-block/touch-activated-rainbow/if-block.png)

You can also change an if block to have an else section.  If will execute if what is inside the if block is not true.

![if else block](/images/arduino-block/touch-activated-rainbow/if-else-block.png)

## Instructions

1) Connect a m to f wire from gnd pin of the sensor to gnd of the Arduino.

![step 1](/images/arduino-block/touch-activated-rainbow/step_1.jpg)

2) Connect a m to f wire from vcc pin of the sensor to **3.3v** of the Arduino.

![step 2](/images/arduino-block/touch-activated-rainbow/step_2.jpg)

3) Connect a m to f wire from signal pin of the sensor to pin 7 of the Arduino.

![step 3](/images/arduino-block/touch-activated-rainbow/step_3.jpg)

4) Look at the of the rgb led strip.  Notice it has gnd, 5v and do.  Do stands for data.  Also notice the arrows.  You will want to hook this in at beginning of the arrows.

![step 4](/images/arduino-block/touch-activated-rainbow/step_4.jpg)

5) Connect a m to m wire from gnd pin of the rgb led light strip to 5v of the Arduino.

![step 5](/images/arduino-block/touch-activated-rainbow/step_5.jpg)

6) Connect a m to m wire from data pin of the rgb led light strip to A0 of the Arduino.

![step 6](/images/arduino-block/touch-activated-rainbow/step_6.jpg)

7) Connect a m to m wire from ground pin of the rgb led light strip to gnd of the Arduino.

![step 7](/images/arduino-block/touch-activated-rainbow/step_7.jpg)

8) Tape the touch sensor to the table.

![step 8](/images/arduino-block/touch-activated-rainbow/step_8.jpg)

9) Tape the rgb led light strip to the table.

![step 9](/images/arduino-block/touch-activated-rainbow/step_9.jpg)

10) From the NeoPixel menu drag a setup block to the workspace.  Set it use A0 for the pin and be sure to set the number of pixels to the number you have in your rgb led light strip.

![step 10a](/images/arduino-block/touch-activated-rainbow/step_10a.png#img-phone)

![step 10b](/images/arduino-block/touch-activated-rainbow/step_10b.png#img-phone)

11) From the logic menu drag an if block onto the workspace.

![step 11a](/images/arduino-block/touch-activated-rainbow/step_11a.png#img-phone)

![step 11b](/images/arduino-block/touch-activated-rainbow/step_11b.png#img-phone)

12) Click on the gear of the if block and drag an else block inside if block popup menu.

![step 12a](/images/arduino-block/touch-activated-rainbow/step_12a.png#img-phone)

![step 12b](/images/arduino-block/touch-activated-rainbow/step_12b.png#img-phone)

13) Connect a digital read block from the input/output to the if statement.

![step 13a](/images/arduino-block/touch-activated-rainbow/step_13a.png#img-phone)

![step 13b](/images/arduino-block/touch-activated-rainbow/step_13b.png#img-phone)

14) Change the digital read block to use pin 7.

![step 14b](/images/arduino-block/touch-activated-rainbow/step_14.png#img-phone)

15) Connect a serial print block to the do part if block.  A serial print block will send a message from the Arduino to the computer.  Make the message say "Touched".  

![step 15a](/images/arduino-block/touch-activated-rainbow/step_15a.png#img-phone)

![step 15b](/images/arduino-block/touch-activated-rainbow/step_15b.png#img-phone)

16) Connect a serial print block to the else part of the if block.  Set it to say "Not Touched".

![step 16](/images/arduino-block/touch-activated-rainbow/step_16.png#img-phone)

17) Connect delay block to the end of the program.

![step 17](/images/arduino-block/touch-activated-rainbow/step_17.png#img-phone)

18) Upload the code and open the messaging app.  Touch the sensor for 2 seconds.

![step 18](/images/upload-1.png)

![step 18](/images/arduino-block/touch-activated-rainbow/step_18.png#img-phone)

19) Delete the 2 serial print blocks.

![step 19](/images/arduino-block/touch-activated-rainbow/step_19.png#img-phone)

20) Drag a count with block from the control menu to the do part of the if statement.  Set it to count from 0 to the number of leds you have minus 1.

![step 20](/images/arduino-block/touch-activated-rainbow/step_20.png#img-phone)

21) From the neo pixel menu drag a set color block inside the count with block.

![step 21](/images/arduino-block/touch-activated-rainbow/step_21a.png#img-phone)

![step 21](/images/arduino-block/touch-activated-rainbow/step_21b.png#img-phone)

22) Replace the number block attached to the "led to turn on" with the get variable block.  Set the get variable block to the i variable.

![step 22](/images/arduino-block/touch-activated-rainbow/step_22.png#img-phone)

23) Change the red number to 150 and the blue number to 0.

![step 23](/images/arduino-block/touch-activated-rainbow/step_23.png#img-phone)

24) Copy the count with block and connect it to the else part of the if block.  You can copy it by right clicking on the block and click the duplicate option.
 
![step 24](/images/arduino-block/touch-activated-rainbow/step_24.png#img-phone)

25) Change the set color block to use green 150 set red to 0.

![step 25](/images/arduino-block/touch-activated-rainbow/step_25.png#img-phone)

26) Delete the delay block at the bottom.

![step 26](/images/arduino-block/touch-activated-rainbow/step_26.png#img-phone)

27) Upload the code.

![Upload code](/images/upload-1.png)

![step 27](/images/arduino-block/touch-activated-rainbow/step_27.gif)

## Challenge 1)

Make it so that if you don't touch the sensor all the lights are off and the lights go green.  Hit to turn all the blocks off set all the color values to 0.

![Challenge 1](/images/arduino-block/touch-activated-rainbow/challenge_1.gif)

## Challenge 2)

Create a rainbow when it is touched.  To do this you will need a count with loop for each color you want to put into your rainbow.  You can look at this [site](https://www.webnots.com/vibgyor-rainbow-color-codes/) for some color ideas.

![Challenge 2](/images/arduino-block/touch-activated-rainbow/challenge_2.gif)


