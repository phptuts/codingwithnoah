---
layout: page
title: Day 3 Build a mini golf hole.
excerpt: "Build your own mini golf course."
modified: 2018-06-12
---

## Objective

To put together everything we have learned about if blocks, variables, servos, timing, and sensors to build a mini golf course.

## Kit

![Kit](/images/summer-camp/day-3/mini-golf/kit.jpg)


## Completed Project

<iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fnoah.glaser.75%2Fvideos%2F1691744170873671%2F&show_text=1&width=560" width="560" height="407" style="border:none;overflow:hidden;" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media" allowFullScreen="true"></iframe>

## Bill of Materials 

- 1 x Arduino with cable  ($7.00) 
- 1 x Ultra Sonic Sensor ($1.50)
- 2 x Servo ($3.14)
- 4 x m to f wires ($0.10)
- 10 x m to m wires ($0.20)
- a lot of cardboard
- a lot of tape ($0.10)
- total ($12.64)

## Instructions

1) On the two long edges of the poster board, draw a line.  The line should be the width of a ruler.

![step 1](/images/summer-camp/day-3/mini-golf/step_1.jpg)

2) 3 inches from the edge draw a line perpendicular to the line you just drew.

![step 2](/images/summer-camp/day-3/mini-golf/step_2.jpg)

3) Cut the 2 smaller lines on the poster board.

![step 3](/images/summer-camp/day-3/mini-golf/step_3.jpg)

4) Now fold the poster board along the 2 small lines you just cut out.

![step 4](/images/summer-camp/day-3/mini-golf/step_4.jpg)

5) Now fold along the larger lines.

![step 5](/images/summer-camp/day-3/mini-golf/step_5.jpg)

6) Take it up so that it slants a little.

![step 6](/images/summer-camp/day-3/mini-golf/step_6.jpg)

7) Cut the paper cut so that it's about 2 inches tall.  It should be the height of your slope.

![step 7](/images/summer-camp/day-3/mini-golf/step_7.jpg)

8) Cut a grove into the so that the sensor will have a tight **fit**.

![step 8](/images/summer-camp/day-3/mini-golf/step_8.jpg)

9) Put the sensor into the cup.

![step 9](/images/summer-camp/day-3/mini-golf/step_9.jpg)

10) Tape the sensor to the cup so that the sensor's pins are faced down.

![step 10](/images/summer-camp/day-3/mini-golf/step_10.jpg)

11) Now put a piece of card board that you will use for the top's base, over the cup.  Put the cup where you want the hole to be.

![step 11](/images/summer-camp/day-3/mini-golf/step_11.jpg)

12) Flip the piece of cardboard over and draw a circle like shape to cut out.

![step 12](/images/summer-camp/day-3/mini-golf/step_12.jpg)

13) Now cut it out of the cardboard.  Cut less than the area you drew.

![step 13](/images/summer-camp/day-3/mini-golf/step_13.jpg)

14) Take a m to f wire and plug ground of the sonar pin to ground of the breadboard.

![step 14](/images/summer-camp/day-3/mini-golf/step_14.jpg)

15) Take a m to f wire and plug vcc of the sonar pin to positive (+) of the breadboard.

![step 15](/images/summer-camp/day-3/mini-golf/step_15.jpg)

16) Take a m to f wire and plug echo of the sonar pin to column 10 of the breadboard.

![step 16](/images/summer-camp/day-3/mini-golf/step_16.jpg)

17) Take a m to f wire and plug trig of the sonar pin to column 15 of the breadboard.

![step 17](/images/summer-camp/day-3/mini-golf/step_17.jpg)

18)  Connect a m to m wire to the end into negative (-) of the breadboard and the other end into ground of the Arduino.

![step 18](/images/summer-camp/day-3/mini-golf/step_18.jpg)

19)  Connect a m to m wire to the end into positive (+) of the breadboard and the other end into 5v of the Arduino.

![step 19](/images/summer-camp/day-3/mini-golf/step_19.jpg)

20) Connect a column on pin 15 of the breadboard to Arduino pin 12.

![step 20](/images/summer-camp/day-3/mini-golf/step_20.jpg)

21) Connect a column on pin 10 of the breadboard to Arduino pin 13.

![step 21](/images/summer-camp/day-3/mini-golf/step_21.jpg)

![step 21](/images/summer-camp/day-3/mini-golf/step_21-show.jpg)

22) Write and upload this code to the Arduino.  This will read the distance in cm every 300 milliseconds.  What I noticed is that if the cm reads 20 or above it means that the ball is in the whole.  

![step 22](/images/summer-camp/day-3/mini-golf/step_22.png)

![step 22](/images/summer-camp/day-3/mini-golf/step_22-ex1.png)

![step 22](/images/summer-camp/day-3/mini-golf/step_22-ex2.png)


23) Now place the ball in the hole and make sure it's a good fit.  I had to make my hole a little bigger.

![step 23](/images/summer-camp/day-3/mini-golf/step_23.jpg)

24) Tape everything up and cut a small hole in the middle of the box.  At this point get a instructor to qa your work.  

![step 24](/images/summer-camp/day-3/mini-golf/step_24.jpg)

25) Attach the hand to the piece of cardboard and cut the side without the hand so it can rotate.

![step 25](/images/summer-camp/day-3/mini-golf/step_25a.jpg)

![step 25](/images/summer-camp/day-3/mini-golf/step_25b.jpg)

![step 25](/images/summer-camp/day-3/mini-golf/step_25c.jpg)

26) Attach the servo hand to a small box outside of the course.

![step 26](/images/summer-camp/day-3/mini-golf/step_26.jpg)

27) Connect the brown wire of the servo to ground of the breadboard.

![step 27](/images/summer-camp/day-3/mini-golf/step_27.jpg)

28) Connect the middle wire of the servo with positive of the breadboard.

![step 28](/images/summer-camp/day-3/mini-golf/step_28.jpg)

29) Connect the orange data wire of the servo to pin 2 of the arduino.

![step 29](/images/summer-camp/day-3/mini-golf/step_29.jpg)

![step 29](/images/summer-camp/day-3/mini-golf/step_29-review.jpg)

## Challenge

Then write some code that will make the hand move up if their is a ball in the whole for 8 second and then move it back down.  

![challenge 1](/images/summer-camp/day-3/mini-golf/challenge-1.gif)

Hint Use an "If" block to to see if cm variable is over 20.  If it is then you can say that the ball is in the hole and move servo.


30) Cut a medium size box so that it looks like what you see in the picture.

![step 30](/images/summer-camp/day-3/mini-golf/step_30.jpg)

31) Cut some cardboard up and attach an cardboard structure similar to what you see in the picture.  Be sure the tape is tight when you tape it to the box.

![step 31](/images/summer-camp/day-3/mini-golf/step_31.jpg)

32) Connect the servo to another Arduino.

![step 31](/images/summer-camp/day-3/mini-golf/step_32.jpg)

## Easier Challenge

Use another Arduino to control the servo.  Use a delay block and a for loop to make the servo go back and worth.  If you have trouble check out the [wave](/summer-camp/day-2/wave) lesson.  It should look similar to the super challenge.

## Super Challenge

Write some code that will slowly move the big ax hand up and down slowly using one Arduino.

![challenge 2](/images/summer-camp/day-3/mini-golf/challenge-2.gif)

Hint: You will need 3 global variable

- Big Whole number (long) variable called "Time to move next" that should start at 50.  This variable will store the time in milliseconds that the servo should move.  
- Whole number (int) variable called "angle" that will store the angle the servo should be at.
- Boolean variable called down that will store true if the servo should add to the angle and subtract if the servo should go up.  For you it might be the opposite.  It depends on how you hooked it up.
- Refer back to the [timing lesson](/summer-camp/day-2/timing) for help on this.

**Don't feel bad if you have trouble with this.  It took me an hour to figure this out.  I want you to try but I will explain this line by line to the whole group.  Please don't stress about it. :)**


