---
layout: page
title: RGB LED Intro 
excerpt: "RGB LED."
modified: 2018-06-26
---

## Objective

To learn how to control an RGB led and the RGB color model.

## Project Kit

![Arduino Kit](/images/arduino-block/rgb-led/kit.jpg) 

## Completed Project

![LED RGB](/images/arduino-block/rgb-led/challenge-2.gif)

## Bill of Materials

- 1 x Arduino Uno
- 1 x USB Arduino Cable
- 1 x RGB led 
- 4 x male to male jumper wires


## What is an rgb?

RGB stands for red, green, and blue.  It combines these colors to create other colors.  This is used in printing, building websites, building apps, art, and much more.  Each color is represented by a number 1 to 255.

![rgb model](/images/arduino-block/rbg-led-strip/rgb.gif#img-phone)

## What is an rgb led?

An rgb led is an led that allows you to control the color of the led by specifying how much red, green and blue you you want to add to create the color.  It has 4 wires attached to it. One is for ground and the others are for the rgb values.

![RGB LED](/images/arduino-block/rgb-led/rgb_led.jpg)


## Analog Write Block

This block allows you to send a number to a pin instead of just an on / off value.  This will be used to control the speed of the motor.  Pins 3, 5, 6, 9, 10, 11 and the "A" pins on the Arduino can use this this block.

![analog write](/images/archive/maker-camp/day-4/motor/analog_write_block.png)

## How it works?

You will use the analog write block to control how much of each color you want to use to build your own custom color.  You can specify numbers from 0 to 255.

## Instructions

Follow the directions in [Arduino Setup Guide](/arduino-setup) if your computer has not been set up yet.  

1) Look at the led wire.  Notice that there is one long wire on the led that is the ground wire.  Locate the red, green, and blue wire connected to the led.

![RGB LED](/images/arduino-block/rgb-led/rgb_led.jpg)

2) Put the led into the breadboard and take note of where the ground wire is.

![RGB LED Breadboard](/images/arduino-block/rgb-led/led_rgb_breadboard.jpg)

3) Take a  jumper wire and put it in the same column that ground wire of the led.

![RGB LED Jumper Wire](/images/arduino-block/rgb-led/rgb_led_jumer_wire_ground.jpg)

4) Take 3 resistors and plug each one into the column that the color pins of the led are using.

![RGB LED Resitor](/images/arduino-block/rgb-led/rgb_led_resistors.jpg)

5) Plug the jumper wire attached to the breadboard to ground of the Arduino.

![Arduino GND](/images/arduino-block/rgb-led/arduino_ground.jpg)

6) Take a jumper wire and plug one end to the same column as the red pin of the RGB LED and the other end into pin 9 of the Arduino.

![RED RGB LED](/images/arduino-block/rgb-led/red_pin_rgb.jpg)

7) Take a jumper wire and plug one end to the same column as the green pin of the RGB LED and the other end into pin 10 of the Arduino.

![GREEN RGB LED](/images/arduino-block/rgb-led/green_pin_rgb.jpg)

8) Take a jumper wire and plug one end to the same column as the blue pin of the RGB LED and the other end into pin 11 of the Arduino.

![BLUE RGB LED](/images/arduino-block/rgb-led/blue_pin_rgb.jpg)

9) Open the "Input/Output" menu and drag the "analog write" block to the screen.

![Menu Input](/images/arduino-block/rgb-led/analog_menu.png)

![Analog Block](/images/arduino-block/rgb-led/red_analog.png)

10) Connect an "analog write" block to the bottom of the one you just created and set pin option to 10.

![Analog Block](/images/arduino-block/rgb-led/green_analog.png)

11) Connect an "analog write" block to the bottom of the one you just created and set pin option to 11.

![Analog Block](/images/arduino-block/rgb-led/blue_analog.png)

12) Change the middle block to 255.  Notice the block that controls the RGB value.

![Analog Block](/images/arduino-block/rgb-led/set_color_value.png)

Can you guess what color the led is going to be?

13) Upload the code.

![LED RGB](/images/arduino-block/rgb-led/rgb_led_green.jpg)


## Challenges

a) Make the led red for 1 second, green for 1 second, and blue for one second.

![LED RGB](/images/arduino-block/rgb-led/challenge-1.gif)

b) Use loops to make cool patterns with the LED.  Don't worry about making it fresh.  You can loop from 0 255 or anywhere in between.  Use the "i" variable created with the loop to control the color values.

![LED RGB](/images/arduino-block/rgb-led/challenge-2.gif)


