---
layout: page
title: Parsing Message with the Arduino
excerpt: "How to build a simple protocol with the Arduino"
modified: 2018-10-23
---

## Objective

To learn how to parse messages with the Arduino to turn on an RGB LED Light Strip.

## Kit

![kit](/images/arduino-block/rbg-led-strip/kit.jpg)

## Completed Project

![completed](/images/app-inventor-arduino-blockly/lesson-1-parsing-message/completed.gif)

## Bill of Materials 

- 1 x Arduino with usb  
- 1 x rgb led light strip 
- 3 x wires

## Parse String Block

To parse a string means to take a piece of text and divide into parts.  The parse string block allows you to get one of those parts of the string.  Let's look at an example.

![parsing block](/images/app-inventor-arduino-blockly/lesson-1-parsing-message/parse_block.png)


Say you had a robot that you wanted to control by sending a message.  The robot would take that message and parse it to see what it needed to do.  The first part of the message would tell the robot which direction it needed to go.  The second part would give the speed that the robot needed to travel.  And the third part would be the duration that robot would move.

You might send the robot a text message that looks like this: "right-40-4".  This would tell the robot to turn right then go at 40 feet per minute for 4 seconds.  Let's see how we would parse that message with the parse the block.

![parsing string example](/images/app-inventor-arduino-blockly/lesson-1-parsing-message/parsing_string_example.png)

![code to parse commadn](/images/app-inventor-arduino-blockly/lesson-1-parsing-message/code-parse-command.png)


## RGB (Red Green Blue) Color Model

![rgb color model](/images/app-inventor-arduino-blockly/lesson-1-parsing-message/rbg-color-model.png#img-phone)

With this light strip colors are made by mixing red, blue, and green together.  This is how we are going to create colors.


## RGB Color Blocks

![rgb color blocks](/images/app-inventor-arduino-blockly/lesson-1-parsing-message/rbg-color-blocks.png#img-phone)

There are 2 rgb color blocks.  One you specify the numbers you want to enter into for each color in the model, the other is a color picker.  For this class we'll be using the one you enter numbers in.

## Serial Print Block

![Serial Print Block](/images/app-inventor-arduino-blockly/lesson-1-parsing-message/serial-print-block.png#img-phone)

This block is used to send messages from the arduino to the computer.  We'll be using this for testing.

## Serial Read Until Block

![Serial Read Until Block](/images/app-inventor-arduino-blockly/lesson-1-parsing-message/read-until-one-character-block.png#img-phone)

This block is used for Sending messages from the computer to the Arduino.  The text is used that attaches to the block is used to tell the Arduino to stop reading.  This block will always return a text value.

## Set Color Block

![Set Color Block](/images/app-inventor-arduino-blockly/lesson-1-parsing-message/set_color_block.png#img-phone)


This block is used to set the color an led on the light string.  It takes in a color block and a number block that represents the led that should be turned on in the light strip.


## Millis / Time Block

![Millis Block](/images/app-inventor-arduino-blockly/lesson-1-parsing-message/millis_block.png#img-phone)

This block is used to get the length of time in milliseconds that the Arduino has been on.  It will return a big whole number / long value.

## Variables

Variable blocks are used to store information.  Variables in Arduino must have the type of data they are store explicitly set.  Variables also have a name, which is used to access the value of the variable.

## Count with block

![Count With Block](/images/app-inventor-arduino-blockly/lesson-1-parsing-message/count_with_block.png#img-phone)

The count with block is used to repeat blocks inside.  It will create a variable called, i, j, etc and set it to the the from number.  It will then increase the variable by the number in the "by" whole until it reaches the to number.

## If Block

![If Block](/images/app-inventor-arduino-blockly/lesson-1-parsing-message/if-block.png#img-phone)

The block block will execute the blocks inside of it if what is attached to it is true.

## Compare Block

![Compare Block](/images/app-inventor-arduino-blockly/lesson-1-parsing-message/compare_block.png#img-phone)

The compare block is used to compare 2 values.  You can set the operator to be equals, not equals, or use greater / less than math stuff.

## And Block

![And Block](/images/app-inventor-arduino-blockly/lesson-1-parsing-message/and_block.png#img-phone)

The block will return true if both things connected to it are true.

## Function Block

![Function Block](/images/app-inventor-arduino-blockly/lesson-1-parsing-message/custom_function_block.png#img-phone)

This block is used to create you own custom blocks in blockly.  It can take parameters and is used to help us not duplicate code.

## Protocol

A protocol is an agreement between two systems on how they will communicate with each other.  We are going to create our own protocol to the the Android app will be able to communicate with the Arduino over bluetooth.

## Our Protocol

Our protocol will be a text string that can be parsed into a command for the Arduino to run.  All parts of commands will be separated out by a "-" sign.

This first string in our command will tell the Arduino what to do.

- random: Set the lights to random colors
- solid: Set all the lights to one color
- double: Set the lights to two colors and make it go back and forth.

The second string in our command will be an rbg color value.   This is required for solid and double commands.

Color values will use rbg, and we'll be separated by a pound sign, "#".  For example a valid color value will look like: 33#22#0.  This will be processed as 

- Red -> 33
- Green -> 22
- Blue -> 20

The third value which is only used for the double is another color value.

The fourth value which is only used for the double is the time to switch from one color to another.  This will be a number value.


### Examples Commands

| Command | Example Command        | Notes                                                                                                                                                                                                                                                                                 |
|---------|------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| random  | random                 | This will set all the leds to random colors                                                                                                                                                                                                                                           |
| solid   | solid-30#50#0          | This will set all the LEDs to one color.   In the case red = 30, green = 50, blue = 0                                                                                                                                                                                                 |
| double  | double-30#0#0-0#50#0-500 | This makes the LEDs go back and forth every 500 milliseconds, (1/2 second). <br /> The first color will be red = 30, green = 0, blue = 0. The second color will be red = 0, green = 50, blue = 0.<br />  The fourth string is a number and tells the Arduino how long to stay on each color. |


## Instructions

If you are following this for the blue tooth rgb led light class you everything should be setup.  If not just do steps for 1 to 5 in [RGB Led Strip Lesson](/arduino-blockly/rgb-led-strip).

1) Drag a neo pixel setup block to the screen.  Set it to use pin A0 and set it to the number of leds in your light string.

![step 1](/images/app-inventor-arduino-blockly/lesson-1-parsing-message/step_1.png#img-phone)


2) Create a list of variables.  These variables will be used to store information about what and when to display the rgb led lights.

| Name          | Type             | Value | Notes                                                                                                                 |
|---------------|------------------|-------|-----------------------------------------------------------------------------------------------------------------------|
| has displayed | true / false     | false | Is used to when we only want something once.  If true it means the Arduino has already displayed displayed the lights |
| command       | string           | ""    | This is current command the Arduino is running.                                                                       |
| color1        | string           | ""    | Stores the first color for the clear, solid, and double commands.                                                     |
| color2        | string           | ""    | Stores the second color for the double command.                                                                       |
| time          | Whole Number     | 0     | Store number of milliseconds the Arduino should wait before switching colors in the double command.                   |
| next move     | Big Whole Number | 0     | The time when the Arduino should switch colors in the double command.                                                 |
| current color | Whole            | 1     | The current color the Arduino is using to turn on the leds.   For solid, and clear there will be only one color.      |

![step 2](/images/app-inventor-arduino-blockly/lesson-1-parsing-message/step_2.png#img-phone)

3) Create a variable called message that is a string.  Set it equal to the Read Until Character block found in the input/ output menu.

![step 3](/images/app-inventor-arduino-blockly/lesson-1-parsing-message/step_3.png#img-phone)

4) Create an if block that will only run if the message variable is not empty.

![step 4](/images/app-inventor-arduino-blockly/lesson-1-parsing-message/step_4.png#img-phone)

5) Inside the if block use the parse block to set the command; the parse block can be found in the text menu. Also use the serial print block to print out the command; the serial print block can be found in the input/output menu.  Also set the has displayed variable to false, because we are processing a new command.

![step 5](/images/app-inventor-arduino-blockly/lesson-1-parsing-message/step_5.png#img-phone)


6) Write if block that will execute if the command equals "random" and has displayed equals is false. 

![step 6](/images/app-inventor-arduino-blockly/lesson-1-parsing-message/step_6.png#img-phone)

7) Write a count with block that will start at 0 and go to 59.  Replace the color picker block with color block that uses numbers.  Then delete each number and replace it with a random number block. Use 0 to 255 for the max and min values.  Use the "i" variable created with the count with block for which led to display.

![step 7](/images/app-inventor-arduino-blockly/lesson-1-parsing-message/step_7.png#img-phone)

8) Set the has displayed block to true so that it will not display again.

![step 8](/images/app-inventor-arduino-blockly/lesson-1-parsing-message/step_8.png#img-phone)

9) Upload the code and open the messaging dialog box.  Type in "random\|" and hit send.

![upload code](/images/upload-1.png)

![step 9](/images/app-inventor-arduino-blockly/lesson-1-parsing-message/step_9.png#img-phone)

![step 9](/images/app-inventor-arduino-blockly/lesson-1-parsing-message/random.jpg)

10) Inside the first if statement write an if statement that will execute if the command variable equals solid.

![step 10](/images/app-inventor-arduino-blockly/lesson-1-parsing-message/step_10.png#img-phone)

11) Set color1 variable to the first color string.  We are going to use this set the colors of the rgb led later on in the code.

![step 11](/images/app-inventor-arduino-blockly/lesson-1-parsing-message/step_11.png#img-phone)

12) Create a function called display colors.  This function will take in 2 parameters.  Right now Arduino Blockly can only take in number parameters.  The first parameter is called color number, and is used to determine which color to display.  The second parameter is the called position and is used to determine which led to light on the strip.

![step 12](/images/app-inventor-arduino-blockly/lesson-1-parsing-message/step_12.png#img-phone)

13) Create a variable called display color that will store the string color command representing which part the color to display.  Then write an if block that will show determine whether the display color should use color1 or color2.  This will be used later in the double command.

![step 13](/images/app-inventor-arduino-blockly/lesson-1-parsing-message/step_13.png#img-phone)

14) Create a red color, green color, and blue color string variable that are set to use colors.  Be sure to use the "#" sign has the separator.

![step 14](/images/app-inventor-arduino-blockly/lesson-1-parsing-message/step_14.png#img-phone)

15) Set use the set color block to set the led color.  You will need a string to number block as well.  Because you will want to turn the text color values into numbers.  You will want to use the position variable set which led is displayed.

![step 15](/images/app-inventor-arduino-blockly/lesson-1-parsing-message/step_15.png#img-phone)

16) Right click on the function block and collapse it.

![step 16](/images/app-inventor-arduino-blockly/lesson-1-parsing-message/step_16.png#img-phone)

17) Write an if block that will execute if has displayed is false and command equals solid.

![step 17](/images/app-inventor-arduino-blockly/lesson-1-parsing-message/step_17.png#img-phone)


18) Create a count with block inside the if block you just created.  This will use our function / custom block to set all the LEDs to one color.  For the color we'll use the number and for the position we'll use the i variable / variable the count with block created.  After that set the has displayed variable to true so that it will not execute again.

![step 18](/images/app-inventor-arduino-blockly/lesson-1-parsing-message/step_18.png#img-phone)

19) Upload the code and open the message dialog box.  Type in "solid-40#0#80\|".

![upload code](/images/upload-1.png)

![step 19](/images/app-inventor-arduino-blockly/lesson-1-parsing-message/step_19.png#img-phone)

![step 19](/images/app-inventor-arduino-blockly/lesson-1-parsing-message/solid.jpg)

20) Create a if block inside the first block that will execute if the command equals double.

![step 20](/images/app-inventor-arduino-blockly/lesson-1-parsing-message/step_20.png#img-phone)

21) Create a variable called time word, this will be used to set the time variable. Which represents how much time before switch between colors.  The use the parse block to set color1, color2, time word variable.  You will then set the time variable using the time word variable and string to number block.  You will then set the 

![step 21](/images/app-inventor-arduino-blockly/lesson-1-parsing-message/step_21.png#img-phone)

22) Create an if block at the bottom of the code that will execute if the next move block is less than or equal to millis block and command is equal to double.

![step 22](/images/app-inventor-arduino-blockly/lesson-1-parsing-message/step_22.png#img-phone)

23) Write a count with block that will go from 1 to 59 and increase by 2 every time.  Inside the count with block will be an if block that will determine which color should go first.   We'll be setting 2 colors each time we go through the count with block.  This is why we are increasing by 2 and subtracting 1 from the first color.

![step 23](/images/app-inventor-arduino-blockly/lesson-1-parsing-message/step_23.png#img-phone)

24) Write an if else block that will change the current color from 1 to 2 or from 2 to 1.

![step 24](/images/app-inventor-arduino-blockly/lesson-1-parsing-message/step_24.png#img-phone)

25) Set the next move variable to time variable plus the millis block.

![step 25](/images/app-inventor-arduino-blockly/lesson-1-parsing-message/step_25.png#img-phone)

26) Upload the code and type in "double-40#60#0-0#40#40-800\|" into the message dialog block and send that to the Arduino.

![upload code](/images/upload-1.png)

![step 26](/images/app-inventor-arduino-blockly/lesson-1-parsing-message/step_26.png#img-phone)

![completed](/images/app-inventor-arduino-blockly/lesson-1-parsing-message/completed.gif)
