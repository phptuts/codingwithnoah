---
layout: page
title: Arduino 112 - RGB LED Challenges
excerpt: "RGB LED challenges."
modified: 2018-02-22
---

## Project Kit

![Arduino Kit](/images/arduino-block/lesson-12/kit.jpg) 

## Bill of Materials

- 1 x Arduino Uno
- 1 x USB Arduino Cable
- 1 x RGB led 
- 4 x male to male jumper wires

## Step

Follow the directions in [Arduino Setup Guide](/arduino-setup) if your computer has not been set up yet.  

1) Follow the directions [Arduino Blockly Start Guide](/arduino-blockly-start) to start the [Arduino Blockly Webpage](http://localhost:3000).
 
2) Open the [Arduino Blockly Webpage](http://localhost:3000).

3) Look at the led wire.  Notice that there is one long wire on the led that is the ground wire.  Locate the red, green, and blue wire connected to the led.

![RGB LED](/images/arduino-block/lesson-12/rgb_led.jpg)

4) Put the led into the breadboard and take note of where the ground wire is.

![RGB LED Breadboard](/images/arduino-block/lesson-12/led_rgb_breadboard.jpg)

5) Take a  jumper wire and put it in the same column that ground wire of the led.

![RGB LED Jumper Wire](/images/arduino-block/lesson-12/rgb_led_jumer_wire_ground.jpg)

6) Take 3 resistors and plug each one into the column that the color pins of the led are using.

![RGB LED Resitor](/images/arduino-block/lesson-12/rgb_led_resistors.jpg)

7) Plug the jumper wire attached to the breadboard to ground of the Arduino.

![Arduino GND](/images/arduino-block/lesson-12/arduino_ground.jpg)

8) Take a jumper wire and plug one end to the same column as the red pin of the RGB LED and the other end into pin 9 of the Arduino.

![RED RGB LED](/images/arduino-block/lesson-12/red_pin_rgb.jpg)

9) Take a jumper wire and plug one end to the same column as the green pin of the RGB LED and the other end into pin 10 of the Arduino.

![GREEN RGB LED](/images/arduino-block/lesson-12/green_pin_rgb.jpg)

10) Take a jumper wire and plug one end to the same column as the blue pin of the RGB LED and the other end into pin 11 of the Arduino.

![BLUE RGB LED](/images/arduino-block/lesson-12/blue_pin_rgb.jpg)

11) Open the "Input/Output" menu and drag the "analog write" block to the screen.

![Menu Input](/images/arduino-block/lesson-12/analog_menu.png)

![Analog Block](/images/arduino-block/lesson-12/red_analog.png)

12) Connect an "analog write" block to the bottom of the one you just created and set pin option to 10.

![Analog Block](/images/arduino-block/lesson-12/green_analog.png)

13) Connect an "analog write" block to the bottom of the one you just created and set pin option to 11.

![Analog Block](/images/arduino-block/lesson-12/blue_analog.png)

14) Change the middle block to 255.  Notice the block that controls the RGB value.

![Analog Block](/images/arduino-block/lesson-12/set_color_value.png)

Can you guess what color the led is going to be?

15) Upload the code.

![LED RGB](/images/arduino-block/lesson-12/rgb_led_green.jpg)


## Challenges

a) Make the led red for 1 second, green for 1 second, and blue for one second.

![LED RGB](/images/arduino-block/lesson-12/challenge-1.gif)

b) Use loops to make cool patterns with the LED.  Don't worry about making it fresh.  You can loop from 0 255 or anywhere in between.  Use the "i" variable created with the loop to control the color values.

![LED RGB](/images/arduino-block/lesson-12/challenge-2.gif)

## String Parsing Block

This block allows you to treat a string value as an array.  Let's look at a simple example, delete all the blocks from the screen.

1) Create a string variable called "Color Text" and set it equal to 105-0-150.

![Create Variable](/images/arduino-block/lesson-12/create_variable_to_parse.png)

2) Create a string variable called "Red".

![Create Variable](/images/arduino-block/lesson-12/create_red_variable.png)

3) Connect the "Parse String" block to it.  

![Text Menu](/images/arduino-block/lesson-12/text_menu_parse_text.png)

![Parse Text](/images/arduino-block/lesson-12/parse_text_block.png)


4) Connect the "Get Variable" block to the "string to parse" block, and the block to use the "Color Text" variable.
 
 ![Parse Variable](/images/arduino-block/lesson-12/parsing_variable_part_1.png)

5) Connect a "Text" block to the "Parsing Character no Value" hole.  Set it equal to the "-" character.

 ![Parse Variable](/images/arduino-block/lesson-12/parse_variable_part_2.png)

6) Connect a "number" block to the index hole and set it equal to 0.

 ![Parse Variable](/images/arduino-block/lesson-12/parse_variable_part_3.png)

7) Using a "Serial Print" block and print the value that the "Red" variable is storing.

 ![Serial Print](/images/arduino-block/lesson-12/serial_print.png)

8) Using a "String to Whole Number" block and "AnalogWrite" block set the value of the Red pin, pin 9 to the red variable turned into a number.

 ![Set Red Pin](/images/arduino-block/lesson-12/set_red_pin.png)

9) Connect a "delay" block to the end of the program.

 ![Delay](/images/arduino-block/lesson-12/delay.png)

10) Upload the code and look at the led and Serial Monitor.

 ![Serial Monitor Printing Color](/images/arduino-block/lesson-12/serial_monitor_colors.png)

 ![Serial Monitor Printing Color](/images/arduino-block/lesson-12/parse_string_rgb_led_red.jpg)

## Parse String

So the "Parse String" block works by taking a string value and allowing you access parts of it like an array.  The first block it takes in the string that you want to parse.  The second block it takes is the block that is used to divide up the string.  The number block that is connected to the index whole decides which part of the string to you want.  Like arrays, it starts counting at "0".  So if you wanted to access the "150" part of the string, you would have used 2 for the index number. 

## Super Challenge

Create a program that allows you to control the color of the led by using the serial monitor.  You will send the computer some input like this, "140-30-150\|" where

- 140 -> red
- 30 -> blue
- 150 -> green
   
 Use the "parse string" block as you did in the previous examples.  This time save your work because we'll be using in a future lesson with Bluetooth.


 ![Serial Monitor RGB](/images/arduino-block/lesson-12/serial_monitor_control_led.png)

 ![LED RGB](/images/arduino-block/lesson-12/led_serial_monitor_controlled.jpg)
