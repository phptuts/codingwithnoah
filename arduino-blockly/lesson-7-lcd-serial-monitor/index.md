---
layout: page
title: Arduino 107 - LCD Screens with serial monitor.
excerpt: "Learn how to control and lcd screen."
modified: 2018-2-07
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