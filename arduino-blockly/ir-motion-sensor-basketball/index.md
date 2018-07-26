---
layout: page
title: Arduino IR Passive Motion Sensor Basketball 
excerpt: "How to make make an Arduino Basketball Game?"
modified: 2018-07-26
---

## Objective

To learn how to make a cool Arduino Basketball with with an IR Passive Motion Sensor.

## Kit

![kit](/images/arduino-block/ir-motion-sensor-basketball/kit.jpg)

## Completed Project

![complete](/images/arduino-block/ir-motion-sensor-basketball/complete.gif)

## Bill of Materials 

- 1 x Arduino with usb  
- 1 x IR Passive Motion Sensor
- 2 x led
- 2 x Resistor (100 to 300 ohms)

## IR Passive Motion Sensor

This is a sensor measures the light around it and uses that to tell if an object is near it.  It can't measure distance and may not work well in well lit environments or outside.  When it sense something it will stop passing electricity through the out pin of the sensor.

![ir sensor](/images/arduino-block/ir-motion-sensor-basketball/ir-sensor.jpg)


## Digital Read Block

This block will return a true or 1 if Arduino senses electricity coming into the pin that is selected on the block.  This block can be found in the input/output menu.  

![not block](/images/arduino-block/ir-motion-sensor-basketball/digital-read-block.png#img-phone)

## Not Block

The not block will reverse the true / false value.  So if a value was true it will turn it to false.  The not block can be found in the logic menu.

![not block](/images/arduino-block/ir-motion-sensor-basketball/not-block.png#img-phone)

## Instructions

1) Connect a wire from the out pin of the sensor to pin 2 of the Arduino.

![step 1](/images/arduino-block/ir-motion-sensor-basketball/step_1.jpg)

2) Connect a wire from the gnd pin of the sensor to pin gnd of the Arduino.

![step 2](/images/arduino-block/ir-motion-sensor-basketball/step_2.jpg)

3) Connect a wire from the vcc pin of the sensor to pin 3.3v of the Arduino.

![step 3](/images/arduino-block/ir-motion-sensor-basketball/step_3.jpg)

4) Cut a slit into a paper cup.

![step 4](/images/arduino-block/ir-motion-sensor-basketball/step_4.jpg#img-phone)

5) Insert the sensor half way through the paper cut.  Make it point up.

![step 5](/images/arduino-block/ir-motion-sensor-basketball/step_5.jpg)

6) Tape the sensor to the cup.

![step 6](/images/arduino-block/ir-motion-sensor-basketball/step_6.jpg)

7) Connect a wire from gnd of the Arduino to - of the breadboard.

![step 7](/images/arduino-block/ir-motion-sensor-basketball/step_7.jpg)

8) Insert a resistor into the breadboard.  Put in  (5, D)  and (7, 10).

![step 8](/images/arduino-block/ir-motion-sensor-basketball/step_8.jpg)

9) Connect the long side of the led to pin (7, E) and the short side to pin (10, E).

![step 9](/images/arduino-block/ir-motion-sensor-basketball/step_9.jpg)

10) Connect a wire to (5, A) of the breadboard to pin 7 of the Arduino.

![step 10](/images/arduino-block/ir-motion-sensor-basketball/step_10.jpg)

11) Connect a wire to (10, A) of the breadboard to - of the breadboard.
 
![step 11](/images/arduino-block/ir-motion-sensor-basketball/step_11.jpg)

12) Drag an if block onto the workspace.

![step 12](/images/arduino-block/ir-motion-sensor-basketball/step_12.png#img-phone)

13) Connect a not block to the if block.

![step 13](/images/arduino-block/ir-motion-sensor-basketball/step_13a.png#img-phone)

![step 13](/images/arduino-block/ir-motion-sensor-basketball/step_13b.png#img-phone)

14) Connect a digital read block to the not block.  Digital read blocks are found in the input output menu.  Set it to use pin 2.

![step 14](/images/arduino-block/ir-motion-sensor-basketball/step_14a.png#img-phone)

![step 14](/images/arduino-block/ir-motion-sensor-basketball/step_14b.png#img-phone)

15) Connect a digital write block to the do part of the if block.  Set it it to HIGH and to use pin 7.

![step 15](/images/arduino-block/ir-motion-sensor-basketball/step_15.png#img-phone)

16) Connect a delay block to the digital write block.  Set it wait 8000 milliseconds or 8 seconds.

![step 16](/images/arduino-block/ir-motion-sensor-basketball/step_16.png#img-phone)

17) Copy the digital write block and attach it to the delay block.  Set it to low to turn off the led.

![step 17](/images/arduino-block/ir-motion-sensor-basketball/step_17.png#img-phone)

18) Upload the code and shoot some hoops.

![upload code](/images/upload-1.png)

![step 18](/images/arduino-block/ir-motion-sensor-basketball/complete.gif)

## Challenge 1)

Make it so that if you get 3 baskets another led turns on.  In order to do this you will need to use a  global variable.

![challenge](/images/arduino-block/ir-motion-sensor-basketball/challenge.gif)
