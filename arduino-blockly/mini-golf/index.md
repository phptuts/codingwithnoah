---
layout: page
title: Arduino Mini Golf Workshop 
excerpt: "Arduino Mini Golf Workshop."
modified: 2018-09-07
---

1) Connect the blue and red lines of one end of the breadboard using the small wires.

![step 1](/images/arduino-block/mini-golf/step_1.jpg)

2) Connect a wire from the red line (+) to 5v (volts) of the Arduino.

![step 2](/images/arduino-block/mini-golf/step_2.jpg)

3) Connect a wire from the blue line (-) to gnd (ground) of the Arduino.

![step 3](/images/arduino-block/mini-golf/step_3.jpg)

4) Connect a wire from (30, B) of the breadboard to A0 of the Arduino.

![step 4](/images/arduino-block/mini-golf/step_4.jpg)

5) Connect a jumper wire from (30, C) of the breadboard to (5, C) of the breadboard.

![step 5](/images/arduino-block/mini-golf/step_5.jpg)

6) Connect a wire from (4, A) of the breadboard to the red (+) of the breadboard.

![step 6](/images/arduino-block/mini-golf/step_6.jpg)

7) Connect a wire from (6, A) of the breadboard to the blue (-) of the breadboard.

![step 7](/images/arduino-block/mini-golf/step_7.jpg)

8) Connect a wire from ground of the rgb led light strip to (6, E) of the breadboard.

![step 8](/images/arduino-block/mini-golf/step_8.jpg#img-phone)

9) Connect a wire from data of the rgb led light strip to (7, E) of the breadboard.

![step 9](/images/arduino-block/mini-golf/step_9.jpg#img-phone)

10) Connect a wire from volts of the rgb led light strip to (7, E) of the breadboard.

![step 10](/images/arduino-block/mini-golf/step_10.jpg#img-phone)

11) Download the [Test Code](/downloads/workshops/mini-golf/mini-golf-colors_test.xml) and upload it to the arduino.

![upload code](/images/upload-1.png)

![step 11](/images/arduino-block/mini-golf/step_11.jpg)

12) Connect a jumper wire from (30, D) to (55, D) of the breadboard.

![step 12](/images/arduino-block/mini-golf/step_12.jpg)

13) Connect a small wire from (56, A) to blue line (-) of the breadboard.

![step 13](/images/arduino-block/mini-golf/step_13.jpg)

14) Connect a small wire from (54, A) to the red line (+) of the breadboard.

![step 14](/images/arduino-block/mini-golf/step_14.jpg#img-phone)

15) Connect a jumper wire from (56, E) to the ground wire of the rgb light strip.

![step 15](/images/arduino-block/mini-golf/step_15.jpg)

16) Connect a wire from (55, E) to the data wire of the rgb light strip.

![step 16](/images/arduino-block/mini-golf/step_16.jpg)

17) Connect a wire from (54, E) to the volts wire of the rgb light strip.

![step 17](/images/arduino-block/mini-golf/step_17.jpg)

18) Upload the code make sure that both light strip are on.

![step 18](/images/arduino-block/mini-golf/step_18.jpg)

19) Connect a wire from gnd (ground) of the Arduino to blue (-) line of the breadboard.

![step 19](/images/arduino-block/mini-golf/step_19.jpg)

20) Connect a wire from pin 9 of Arduino (1) to pin 9 of Arduino (2).

![step 20](/images/arduino-block/mini-golf/step_20.jpg)

21) Download the code [Arduino-2-Test-Code](/downloads/workshops/mini-golf/mini-golf-arduino-2-test-com.xml) and upload it to Arduino 2, the one that does not have the lights.  This code will send an electrical signal from 9 pin of Arduino 2 to pin 9 of Arduino 1 every 10 seconds.

![step 21](/images/arduino-block/mini-golf/step_21.png#img-phone)

![upload code](/images/upload-1.png)

22) Download the code [Arduino-1-Test-2-Code](/downloads/workshops/mini-golf/mini-golf-arduino-1-test-2.xml) and upload it to Arduino 1.  This will turn the all the leds blue if the Arduino 1 pin 9 is on or has electricity going through it.

![upload code](/images/upload-1.png)

![step 22](/images/arduino-block/mini-golf/step_22.gif)

23) Using 2 small wires connect one side of the + and one side of the minus.  Make sure you are using the same side of the breadboard.

![step 23](/images/arduino-block/mini-golf/step_23.jpg)

24) Connect a jumper wire from 5v of the Arduino to (+) red line of the breadboard.

![step 24](/images/arduino-block/mini-golf/step_24.jpg)

25) Connect a jumper wire from gnd of the Arduino to (-) blue line of the breadboard.

![step 25](/images/arduino-block/mini-golf/step_25.jpg)

26) Connect a small wire from (34, B) to (+) red line of the breadboard.
 
![step 26](/images/arduino-block/mini-golf/step_26.jpg)

27) Connect a wire from (34, D) to f to f jumper wire to the vcc pin of the sensor.

![step 27](/images/arduino-block/mini-golf/step_27.jpg)

28) Connect a small wire from (35, B) to (-) blue line of the breadboard.  Then connect a wire from (35, D) to f to f jumper wire to the gnd pin of the sensor.

![step 28](/images/arduino-block/mini-golf/step_28.jpg)

29) Connect a wire from (35, D) to f to f jumper wire to the out pin of the sensor.

![step 29](/images/arduino-block/mini-golf/step_29.jpg)

30) Connect a jumper wire from (36, B) to pin 7 of the Arduino.

![step 30](/images/arduino-block/mini-golf/step_30.jpg)

31) Upload the [test ir motion sensor code](/downloads/workshops/mini-golf/test-ir-motion-sensor.xml) to the Arduino.  This will make pin 13 light up when it senses something.

![upload code](/images/upload-1.png)

![step 31](/images/arduino-block/mini-golf/step_31.gif)






