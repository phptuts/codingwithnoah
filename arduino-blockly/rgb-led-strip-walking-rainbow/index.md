---
layout: page
title: Walking Rainbow RGB LED Light Strip
excerpt: "How to create walking patterns with an rgb led light strip."
modified: 2018-09-01
---

## Objective

To learn how to create cool rgb led light patterns with arrays.

## Kit

![kit](/images/arduino-block/rbg-led-strip/kit.jpg)

## Completed Project

![challenge](/images/arduino-block/rgb-led-strip-walking-rainbow/complete_project.gif)

## Bill of Materials 

- 1 x Arduino with usb  
- 1 x rgb led light strip 
- 3 x wires 

## What is an array?

Arrays are a special type of variable that can store a list.  With Arduino the list can only be **one** type of data.  You can store a list of strings or a list of numbers.  When you create an array you define the size and the type of data it is storing. 

## Create array block

This block is used to create an array.  Much like a variable you define the name and the type.  But instead of setting the variables value, you set the size of the list of the array.  In this example an array that stores 10 strings is created.

![create array](/images/arduino-block/rgb-led-strip-walking-rainbow/create_array_block.png)

## Set Array Block

This blocks allows you set the individual elements / data the array is storing.  The index hole is used to tell where in the list to put the data.  Arrays start the list at 0 and will go up to the number you declared in the list minus one.

![set value array](/images/arduino-block/rgb-led-strip-walking-rainbow/set_array_value.png)

![set value array](/images/arduino-block/rgb-led-strip-walking-rainbow/set_array_value_block.png)

## Get Array Block

This block get one item from the array at a certain index.  For example we wanted to get the string "blue" out of the array we would use index 2. 

![get value array](/images/arduino-block/rgb-led-strip-walking-rainbow/get_value_in_array.png)

## Parse String Block

This block will turn a string into an array of string.  It will then pick an index from that array and return it.  For example if we have this string "33-99-22" and we want to get "99" from it.  We would use a "-" for parsing character and 1 for the index.

![parse string data](/images/arduino-block/rgb-led-strip-walking-rainbow/parse_string_data.png#img-phone)

![parse string block](/images/arduino-block/rgb-led-strip-walking-rainbow/parse_string_block.png#img-phone)

## Create Function Block

This is how you can create your own blocks.  Function blocks can take in number blocks.  This is used when you either want something condensed or repeated.  The custom blocks you create are also found in the functions menu.

![function block](/images/arduino-block/rgb-led-strip-walking-rainbow/function_blocks.png#img-phone)

## Instructions

1) Follow the instructions steps in the [RGB LED String Intro](/arduino-blockly/rgb-led-strip) 1 - 8.

2) Delete the neo pixel set color block, and create these variables.

| name              | type             | value | size | global | Notes                                                                         |
|-------------------|------------------|-------|------|--------|-------------------------------------------------------------------------------|
| setup             | boolean          | false | N/A  | true   | This is a flag used to make that code a block of code is  only executed once. |
| colors            | array of strings | N/A   | 30   | N/A    | This is where we going to store the colors that each led should  show.        |
| colors last index | number           | 29    | N/A  | false  | This is last / highest index value.                                           |


![step 2](/images/arduino-block/rgb-led-strip-walking-rainbow/step_2.png)

3) Drag a function block to the screen.  It's in the functions menu.

![step 3](/images/arduino-block/rgb-led-strip-walking-rainbow/step_3a.png#img-phone)

![step 3](/images/arduino-block/rgb-led-strip-walking-rainbow/step_3b.png#img-phone)

4) Create the function.  You can find the parse string block in the string menu.  Each string represents an rgb value that separated by dashes.  For example the string "50-0-50" would translate into 50 red, 0 green, and 50 blue.  We use for loops to populate each element in the array.

![step 4](/images/arduino-block/rgb-led-strip-walking-rainbow/step_4.png)

5) Create a function called display colors.  This will loop through the colors array use it to turn on all the leds in your light strip.  Notice we parse the string to get each color value.  We also have to use string to whole number block so that we can translate it into a number.

![step 5](/images/arduino-block/rgb-led-strip-walking-rainbow/step_5.png)

6) Create an if statement that will to only execute once using the setup variable.  This will set all the colors array to the colors of a rainbow.  We only need to do this once, all array variables are global which means they are not reset after all the blocks are executed.

![step 6](/images/arduino-block/rgb-led-strip-walking-rainbow/step_6.png)

7) Upload the code.

![upload code](/images/upload-1.png)

![step 7](/images/arduino-block/rgb-led-strip-walking-rainbow/step_7.jpg)

So next we want to create a walking / moving rainbow.  So what we are going to have to do is this. Save the last element of the array in a variable.  Shift all the values in the array up one.  Then put that element that was the last element as the first element.

![shift array](/images/arduino-block/rgb-led-strip-walking-rainbow/shift_array.png#img-phone)

8) Create a function called shift colors array.  This function will first save the last element of the array in a variable.  It will then loop through all the elements in the array backward.  It will take the value that is stored in index 28 and move it to index 29.  Once the loop is complete it will save the value as the first element.

![step 8](/images/arduino-block/rgb-led-strip-walking-rainbow/step_8.png)

9) Add the shift array block and a delay block 100 milliseconds.  This will mean the colors will move every 1/10th of a second.

![step 9](/images/arduino-block/rgb-led-strip-walking-rainbow/step_9.png)

10) Upload the code.

![upload code](/images/upload-1.png)

## Challenge 

Create a block that will clear all the all the colors leds in the strip.  Then make the rainbow blink for on off for a second.

![challenge](/images/arduino-block/rgb-led-strip-walking-rainbow/challenge.gif)
