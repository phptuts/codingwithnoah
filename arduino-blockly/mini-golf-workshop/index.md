---
layout: page
title: Arduino Mini Golf Workshop 
excerpt: "Arduino Mini Golf Workshop."
modified: 2018-08-27
---

## Steps

1) Detach the cardboard flap from the banker box.

![step 1](/images/arduino-block/mini-golf-workshop/step_1.jpg)

2) Tap the outside corners of the bank box together.  Do not fold it in.

![step 2](/images/arduino-block/mini-golf-workshop/step_2.jpg)

3) Tape the inside corners of the banker box together.

![step 3](/images/arduino-block/mini-golf-workshop/step_3a.jpg)

![step 3](/images/arduino-block/mini-golf-workshop/step_3b.jpg)

4) Draw a 2 1/2 inch by 2 1/2 cross in the center of the banker box.

![step 4](/images/arduino-block/mini-golf-workshop/step_4.jpg)

5) Use the cut and the lines you drew to draw a circle at the center of the banker box.

![step 5](/images/arduino-block/mini-golf-workshop/step_5.jpg)

6) Plug a f to m jumper wire into the out pin of the sensor.

![step 6](/images/arduino-block/mini-golf-workshop/step_6.jpg)

7) Connect wire from the wire connected to the out pin to (20, E) of the breadboard.

![step 7](/images/arduino-block/mini-golf-workshop/step_7.jpg)

8) Label the wire "Out".

![step 8](/images/arduino-block/mini-golf-workshop/step_8.jpg)

9) Plug a f to m jumper wire into the gnd (ground) pin of the sensor.

![step 9](/images/arduino-block/mini-golf-workshop/step_9.jpg)

10) Connect wire from the wire connected to the out pin to (21, E) of the breadboard.  Label the wire GND.

![step 10](/images/arduino-block/mini-golf-workshop/step_10.jpg)

11) Plug a f to m jumper wire into the vcc (volts) pin of the sensor.

![step 11](/images/arduino-block/mini-golf-workshop/step_11.jpg)

12) Connect wire from the wire connected to the out pin to (22, E) of the breadboard.  Label the wire 5V.

![step 12](/images/arduino-block/mini-golf-workshop/step_12.jpg)

13) Connect a small wire from (22, A) to red (+) line of the breadboard.

![step 13](/images/arduino-block/mini-golf-workshop/step_13.jpg)

14) Connect a small wire from (21, A) to blue (-) line of the breadboard.

![step 14](/images/arduino-block/mini-golf-workshop/step_14.jpg)

15) Connect a wire from (-) blue line of the breadboard to gnd (ground).

![step 15](/images/arduino-block/mini-golf-workshop/step_15.jpg)

16) Connect a wire from (+) red line of the breadboard to 5v (ground).

![step 16](/images/arduino-block/mini-golf-workshop/step_16.jpg)

17) Connect a wire from (20, A) of the breadboard to pin 7 of the Arduino.

![step 17](/images/arduino-block/mini-golf-workshop/step_17.jpg)

## Challenge

Write a program to make the internal led light blink when the ir sensors senses something.  Hint the sensor will will have electricity going through it when it does **not** sense something.  The internal led is control be pin 13. 

![challenge 1](/images/arduino-block/mini-golf-workshop/challenge_1.gif)


18) Connect 2 wires to the breadboard like the picture.

![step 18](/images/arduino-block/mini-golf-workshop/step_18.jpg)

19) Connect a wire from (30, C) of the breadboard to pin A0 of the Arduino.

![step 19](/images/arduino-block/mini-golf-workshop/step_19.jpg)

20) Connect a wire from (30, E) of the breadboard to (10, E) of the breadboard.

![step 20](/images/arduino-block/mini-golf-workshop/step_20.jpg)

21) Connect a wire from (10, A) of the breadboard to the middle (data) pin of the rgb led strip, label this wire data.

![step 21](/images/arduino-block/mini-golf-workshop/step_21.jpg)

22) Connect a wire from (+) red line of the breadboard to the 5v pin of the rgb led strip, label this wire 5v (volts).

![step 22](/images/arduino-block/mini-golf-workshop/step_22.jpg)

23) Connect a wire from (-) blue line of the breadboard to gnd (ground) of the rgb led strip, label this wire gnd (ground).

![step 23](/images/arduino-block/mini-golf-workshop/step_23.jpg)

## Challenge

Test that your rgb led light strip is working by making all the leds purple.  You can do this by 50 red and 50 blue.

![challenge 2](/images/arduino-block/mini-golf-workshop/challenge_2.jpg)

24) Connect a wire from (30, B) to (50, B) of the breadboard.

![step 24](/images/arduino-block/mini-golf-workshop/step_24.jpg)

25) Repeat steps 23 to 27 with the other led light strip.  Plug in your arduino.  The code from the last challenge should make both strips go purple.

![step 25](/images/arduino-block/mini-golf-workshop/step_25.jpg)

26) Label a wire ground and connect it from the brown wire of the servo to (40, E) of the breadboard.

![step 26](/images/arduino-block/mini-golf-workshop/step_26.jpg)

27) Label a wire 5v and connect it from the red (middle) wire of the servo to (41, E) of the breadboard.

![step 27](/images/arduino-block/mini-golf-workshop/step_27.jpg)

28) Label a wire data and connect it from the orange wire of the servo to (42, E) of the breadboard.

![step 28](/images/arduino-block/mini-golf-workshop/step_28.jpg)

29) Connect a wire from (40, C) to (-) blue line of the breadboard.

![step 29](/images/arduino-block/mini-golf-workshop/step_29.jpg)

30) Connect a wire from (41, C) to (+) red line of the breadboard.

![step 30](/images/arduino-block/mini-golf-workshop/step_30.jpg)

31) Connect a wire from (42, C) of the breadboard to pin 6 of the Arduino.

![step 31](/images/arduino-block/mini-golf-workshop/step_31.jpg)

## Challenge

Write some code to make the servo move from 0 to 180 degrees every second.

![challenge 3](/images/arduino-block/mini-golf-workshop/challenge_3.gif)

32) Assemble the banker box, follow the instructions on the box.

![step 32](/images/arduino-block/mini-golf-workshop/step_32.jpg)

33)  Measure a 5 inches from the outside of the box and draw a vertical 3 inch line.  Do this on both sides of the box.  Connect the 2 lines together.

![step 33](/images/arduino-block/mini-golf-workshop/step_33.jpg)

34) Cut out the rectangle you drew.  Repeat steps 37 and 38 on the other side of the box.

![step 34](/images/arduino-block/mini-golf-workshop/step_34.jpg)

35) Take the poster board and draw a 3 inch by 12 inch rectangle.  The measure 2 inches up and draw another horizontal line.

![step 35](/images/arduino-block/mini-golf-workshop/step_35.jpg)

36) Cut of the 2 inch by 12 inch rectangle.  Cut all up to the vertical line to create a flap.  Do steps 39 and 40 to the other side as well.

![step 36](/images/arduino-block/mini-golf-workshop/step_36.jpg)

37) Draw a 2 inch horizontal line from the top of the vertical line you drew.

![step 37](/images/arduino-block/mini-golf-workshop/step_37.jpg)

38) Using that line cut a piece of out of poster board.  Repeat steps 40 to 41 on the other side.

![step 38](/images/arduino-block/mini-golf-workshop/step_38.jpg)

39) Fold the flaps up and cut out the poster board ramp.

![step 39](/images/arduino-block/mini-golf-workshop/step_39a.jpg)

![step 39](/images/arduino-block/mini-golf-workshop/step_39b.jpg)

40) Tape the ramp to the platform.

![step 40](/images/arduino-block/mini-golf-workshop/step_40.jpg)

41) Tape the the sensor to the hole part of the platform.

![step 41](/images/arduino-block/mini-golf-workshop/step_41.jpg)

42) Use the code you created in step one to make sure the sensor is in the right position.

![step 42](/images/arduino-block/mini-golf-workshop/step_42.jpg)

43) Cut a small rectangle into the part of the box.

![step 43](/images/arduino-block/mini-golf-workshop/step_43.jpg)

44) Push the servo wires through the box.

![step 44](/images/arduino-block/mini-golf-workshop/step_44.jpg)

45) Reconnect the servo wires on the breadboard to the servo.  Use the labels on the wires to help you.  Remember brown to ground. 

![step 45](/images/arduino-block/mini-golf-workshop/step_45.jpg)

46) Tape the rgb led light strips to the sides of the platform.

![step 46](/images/arduino-block/mini-golf-workshop/step_46.jpg)

47) Create and tape your happy face to the the wooden dial.

![step 47](/images/arduino-block/mini-golf-workshop/step_47.jpg)

48) Tape the plastic piece that attaches to the servo to the dial.  Be sure it is on the same side as the happy face and that the tape does not cover up the hole.
 
![step 48](/images/arduino-block/mini-golf-workshop/step_48.jpg)

49) Attach the wooden dial setup to the servo.

![step 49](/images/arduino-block/mini-golf-workshop/step_49.jpg)

## Challenge

Open up the code you saved in the walking rainbow lesson [walking rainbow lesson](/arduino-blockly/rgb-led-strip-walking-rainbow) or just use [mini golf start code](/images/arduino-block/mini-golf-workshop/mini_golf_start.xml).  The challenge is to make the happy face move up the rgb leds lights blink rainbow 3 times when a ball is dropped into the cup.  Once it's done blinking the face should go back down, all the lights should turn off and the arduino should wait (delay) for 8 seconds.  You might also have to re tape the servo.  I want you to experience this first hand.


![Challenge 4](/images/arduino-block/mini-golf-workshop/challeng_4.gif)

### Step breakdown

1) Check if a ball was dropped in the cup

2) If a ball was dropped in the cup

3) Move the happy face so that it's visible

4) Make the Rainbow blink 3 times

5) Put the happy face back to it's original position

6) Turn off all the leds

7) Wait for 8 seconds so the ball can be taken out of the cup.




 
