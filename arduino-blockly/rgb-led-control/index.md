---
layout: page
title: Controlling an RGB LED 
excerpt: "RGB LED."
modified: 2018-06-26
---

## Objective

To learn how to control an RGB led by parsing a string sent by the user.

## Project Kit

![Arduino Kit](/images/arduino-block/rgb-led/kit.jpg) 

## Completed Project

![Serial Monitor RGB](/images/arduino-block/rgb-led-control/challenge-serial-monitor.png)

![LED RGB](/images/arduino-block/rgb-led-control/challenge-led.jpg)

## Parse String Block

Parse works by return part of a text value / string.  It does this by breaking a text value into an array and accessing an element in the array.

![LED RGB](/images/arduino-block/rgb-led-control/parse-text-block.png)

## Parse String Example

![LED RGB](/images/arduino-block/rgb-led-control/parse-string-block-example.png)

![LED RGB](/images/arduino-block/rgb-led-control/parse-string-block-debug.png)

### Internal Steps

1) Take the text value "5-23-3" and turn it into this array, [5 , 23, 3].  It does this by using the block you put into the "Parsing Block" hole.  So it uses the "-" value to break it up.

2) This block then uses the "index" hole to figure out which value it needs to set the variable with.  Because arrays start at 0 it will be 23.  Notice that this is an array or list of strings.  

### Side Note

If you want them to be numbers you have to use the "String to Whole Number" block in the math menu.  

## Instructions

1) Create a string variable called "Color Text" and set it equal to 105-0-150.

![Create Variable](/images/arduino-block/rgb-led-control/create_variable_to_parse.png)

2) Create a string variable called "Red".

![Create Variable](/images/arduino-block/rgb-led-control/create_red_variable.png)

3) Connect the "Parse String" block to it.  

![Text Menu](/images/arduino-block/rgb-led-control/text_menu_parse_text.png)

![Parse Text](/images/arduino-block/rgb-led-control/parse_text_block.png)


4) Connect the "Get Variable" block to the "string to parse" block, and the block to use the "Color Text" variable.
 
 ![Parse Variable](/images/arduino-block/rgb-led-control/parsing_variable_part_1.png)

5) Connect a "Text" block to the "Parsing Character no Value" hole.  Set it equal to the "-" character.

 ![Parse Variable](/images/arduino-block/rgb-led-control/parse_variable_part_2.png)

6) Connect a "number" block to the index hole and set it equal to 0.

 ![Parse Variable](/images/arduino-block/rgb-led-control/parse_variable_part_3.png)

7) Using a "Serial Print" block and print the value that the "Red" variable is storing.

 ![Serial Print](/images/arduino-block/rgb-led-control/serial_print.png)

8) Using a "String to Whole Number" block and "AnalogWrite" block set the value of the Red pin, pin 9 to the red variable turned into a number.

 ![Set Red Pin](/images/arduino-block/rgb-led-control/set_red_pin.png)

9) Connect a "delay" block to the end of the program.

 ![Delay](/images/arduino-block/rgb-led-control/delay.png)

10) Upload the code and look at the led and Serial Monitor.

 ![Serial Monitor Printing Color](/images/arduino-block/rgb-led-control/serial_monitor_colors.png)

 ![Serial Monitor Printing Color](/images/arduino-block/rgb-led-control/parse_string_rgb_led_red.jpg)


## Challenge

Create a program that allows you to control the color of the led by using the serial monitor.  You will send the computer some input like this, "140-30-150\|" where

- 140 -> red
- 30 -> blue
- 150 -> green
   
 Use the "parse string" block as you did in the previous examples.  This time save your work because we'll be using in a future lesson with Bluetooth.

![Serial Monitor RGB](/images/arduino-block/rgb-led-control/challenge-serial-monitor.png)

![LED RGB](/images/arduino-block/rgb-led-control/challenge-led.jpg)
