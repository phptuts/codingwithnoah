---
layout: page
title: Arduino 107 - LCD Screens and Loops.
excerpt: "Learn how to control lcd screens with the Arduino."
modified: 2018-2-09
---
## Project Kit

![Kit](/images/arduino-block/lesson-7/kit.jpg) 

## Bill of Materials

- 1 x Arduino Uno
- 1 x Arduino USB
- 1 x LCD Screen
- 4 x male to female jumper wires 

### Steps

Follow the directions in [Arduino Setup Guide](/arduino-setup) if your computer has not been setup yet.  

1) Follow the directions [Arduino Blockly Start Guide](/arduino-blockly-start) to start the [Arduino Blockly Webpage](http://localhost:3000).
 
2) Open the [Arduino Blockly Webpage](http://localhost:3000).

3) Flip to the back of the LCD screen and notice that it has 4 connectors. Notice the connecting wires sticking out, red box area in the picture.

![LCD Screen](/images/arduino-block/lesson-7/step3.jpg) 

- VCC (5 volts)
- GND (Ground)
- SDA (Data)
- SCL (Clock) 

4) Take a male to female wire and connect one end to the LCD GND connect to GND pin of the Arduino.

![LCD Screen](/images/arduino-block/lesson-7/step4.jpg) 

5) Take a male to female wire and connect one end to the LCD VCC connect to 5v pin of the Arduino.

![LCD Screen](/images/arduino-block/lesson-7/step5.jpg) 

6) Take a male to female wire and connect one end to the LCD SDA connect to A4 pin of the Arduino.

![LCD Screen](/images/arduino-block/lesson-7/step6.jpg) 

7) Take a male to female wire and connect one end to the LCD SCL connect to A5 pin of the Arduino.

![LCD Screen](/images/arduino-block/lesson-7/step7.jpg) 

8) Notice the blue piece of take and take note what is on it.  You should either see 0x3F or 0x27.  If you are doing this from home you will have to try it to see which type of LCD screen it is.

![LCD Screen](/images/arduino-block/lesson-7/step8.jpg) 

9) From the LCD menu drag the "LCD Setup" block onto the screen and set the type in the drop down to match the type you noticed in the previous step.

![LCD Setup Block](/images/arduino-block/lesson-7/step9a.png) 

![LCD Setup Block](/images/arduino-block/lesson-7/step9b.png) 

10) From the LCD menu drag "Simple LCD" block onto the screen and type Hello World the "Empty Quotes" block.

![LCD Simple Block](/images/arduino-block/lesson-7/step10a.png) 

![LCD Simple Block](/images/arduino-block/lesson-7/step10b.png) 

11) Upload the code to the Arduino.  You should see the LCD screen say "Hello World" on the top level.

![Upload](/images/arduino-block/lesson-7/step11a.png) 

![LCD Screen](/images/arduino-block/lesson-7/step11b.jpg) 

12) Delete the "Simple LCD" block from workspace.

![Upload](/images/arduino-block/lesson-7/step12.png)

## LCD Grid 

![LCD Screen](/images/arduino-block/lesson-7/lcd-screen.png) 

As you go from left to right the number increase on the x axis.  As you go down the number the number of the Y axis increase.  For example the red block block the screen is at 3 on the x axis and 2 on the y axis.

![LCD Screen](/images/arduino-block/lesson-7/lcd-screen-1.png) 

Can you tell someone or me where each of the color squares are?

![LCD Screen](/images/arduino-block/lesson-7/lcd-screen-2.png) 

## Block Learning

### Clear LCD Block

![LCD Clear](/images/arduino-block/lesson-7/lcd-clear-block-menu.png) 

![LCD Clear Block](/images/arduino-block/lesson-7/lcd-clear-block.png) 

The lcd clear block is used to clear the screen completely.

### Set Cursor (Where to print start printing) Block

![LCD Set Cursor Menu](/images/arduino-block/lesson-7/set-cursor-menu.png) 

![LCD Set Cursor Block](/images/arduino-block/lesson-7/set-cursor-block.png) 

This block will set the position on the lcd screen where to print the text.  The number block in the row hole controls the y axis and the column hole that controls x axis.  Where the it is about to print is called the **cursor**.  The cursor starts out at 0 => x and 0 => y.
  
### Print Block

![LCD Set Cursor Menu](/images/arduino-block/lesson-7/menu-print-block.png) 

![LCD Set Cursor Block](/images/arduino-block/lesson-7/print-block.png) 

This block prints stuff onto the screen.

### Scroll Block

![LCD Scroll Menu Block](/images/arduino-block/lesson-7/scroll-block-menu.png) 

![LCD Scroll Block](/images/arduino-block/lesson-7/scroll-block.png) 

This will move all the text in one direction.  Use the arrow to determine which direction the text will go.

### Blink Block

![LCD Scroll Menu Block](/images/arduino-block/lesson-7/blink-menu.png) 

![LCD Scroll Block](/images/arduino-block/lesson-7/blink-block.png) 

The blink block will make where the current cursor is blink.

### Backlight block

![LCD Scroll Menu Block](/images/arduino-block/lesson-7/backlight-menu.png) 

![LCD Scroll Block](/images/arduino-block/lesson-7/backlight-block.png) 

### Challenge 1) Print "What is your name?" where Y => 0 and X => 1.  Use the clear block, set cursor block, and the print block.  Append a delay block at the end and make it wait for 10 seconds or 10,000 milliseconds.


![Challenge 1](/images/arduino-block/lesson-7/challenge-1.jpg) 


### Challenge 2) Print your name centered on the row below.  Here's an example.  My name Noah, so I would take 20, the length of the screen, minus the length of my name, 4, and divide that by 2. (20 - 4) / 2 = 8.  If your name has an odd number just round up or down.  You will want to add a set cursor block and a print block put them above the delay block.

![Challenge 2](/images/arduino-block/lesson-7/challenge-2.jpg) 


### Challenge 3) Now we are going to make your name scroll across the screen.  You will need to use the count loop to do it.  You will need to put a scroll block and and delay block inside the do part.  The count block will need to start at 0 and go to the length of your screen, 19, minus the length of your name.  19 - 4 = 15.  You will need to print your name first.  Then use the scroll blocks.

![Challenge 3](/images/arduino-block/lesson-7/challenge-3.gif) 

## Other Challenges

- Use 4 count loop to print the "!" on every space on the lcd screen.
- Use the blink block and scroll block to make something blink across the screen.  
- Just have fun and print cool things. :)