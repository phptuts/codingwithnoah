---
layout: page
title: Arduino Intro
excerpt: "An intro to the Arduino."
modified: 2018-06-04
---

## Project Kit

![Project](/images/summer-camp/day-1/arduino-intro/project.jpg)


## Bill of Materials 

- 1 x Arduino with cable  ($7.00) ish

### What is an Arduino?

The Arduino is a cheap real time computer that costs around 7 dollars. Real time means that will execute your code really fast.  It can do this because there is no operating system running on the Arduino.  The only thing it's doing is running your code. :)


![Arduino](/images/summer-camp/day-1/arduino-intro/arduino.jpg)

Pass around 2 Arduinos, one that has the plastic pin holes and one that does not.  

### What are pins?

![Arduino](/images/summer-camp/day-1/arduino-intro/arduino-pins.jpg)

Pins are the pieces of metal that stick out of the Arduino.  They are covered with plastic.

### Where is the Arduino's brain?

See if they can guess where that is.

### Rx and Tx leds

![Arduino](/images/summer-camp/day-1/arduino-intro/arduino-rx-tx.jpg)


### Reset Button (reloads the program)

![Arduino](/images/summer-camp/day-1/arduino-intro/arduino-reset-btn.jpg)

Input is where the Arduino can sense electricity coming from a pin.  This is useful when messing around with sensors.  We'll go back this concept later.

Output is allows you to control whether a pin has electricity or not.  This is useful when you want to control a motor or an led.  Like turning an led on or off.  Ask the campers what cool things they can build with the arduino.

## Tour of the Arduino IDE (5 minutes)

### Main Areas

![Arduino IDE](/images/summer-camp/day-1/arduino-intro/arduino-ide.png)

### Arduino IDE Top bar

![Arduino IDE](/images/summer-camp/day-1/arduino-intro/arduino-top-bar.png)

### Important Notes

- You have to be connected to the internet
- If the arduino is connected the top right icon will go green.


## Turn on and off an led

1) Drag the digital write block onto the screen.

![Internal LED](/images/summer-camp/day-1/arduino-intro/turn-on-pin-13-part-2.png)

![Internal LED](/images/summer-camp/day-1/arduino-intro/turn-on-pin-13-part-1.png)


2) Change block to use pin 13 and make sure that stat is on "HIGH".

![Internal LED](/images/summer-camp/day-1/arduino-intro/turn-on-pin-13-part-3.png)

3) Upload your code to the Arduino.

![Upload Code](/images/summer-camp/day-1/arduino-intro/upload-btn.png)

![Internal Arduino LED](/images/summer-camp/day-1/arduino-intro/internal-led-on.jpg)

#### Challenge 1) can you turn the led off?  

![Arduino](/images/summer-camp/day-1/arduino-intro/arduino-led-challenge-1.jpg)

#### STOP!!! Wait for everyone to complete the project.  Go ahead and play around with the Arduino while you are waiting or help someone out.  

#### Digital Write Block Explained

Ask the campers if they can explain the digital write block to you. Make sure they understand it before moving forward.  Ask questions like can you send electricity to pin one?

![Digital Write Block](/images/summer-camp/day-1/arduino-intro/turn-on-pin-13-part-1.png)
