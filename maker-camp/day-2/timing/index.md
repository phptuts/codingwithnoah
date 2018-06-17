---
layout: page
title: Timing 
excerpt: "How to time things"
modified: 2018-06-12
---

## Objective

How to time things using the millis block in a way that does not pause the Arduino.

## Project

![Project](/images/maker-camp/day-1/arduino-intro/project.jpg)

## Bill of Materials 

- 1 x Arduino with cable  ($7.00) 

## Millis Block

The millis block will measure the time in milli seconds the Arduino has been on.  This block will return a long number value.  

![millis block](/images/maker-camp/day-2/timing/millis-block.png#img-phone)


## Instruction

1) Create a global big whole number (long) variable named count and set it equal to 0.

![step 1](/images/maker-camp/day-2/timing/step_1.png)

2) Create another global big whole number (long) variable name milliseconds and set it equal to 500.

![step 2](/images/maker-camp/day-2/timing/step_2.png)

3) Use the "Set Variable" block to add 1 to count block.

![step 3](/images/maker-camp/day-2/timing/step_3.png)

4) Connect an if block to the bottom of the "Set Variable" block and attach a compare block to the if block.  Set the compare block to use the greater or equal to operator.

![step 4](/images/maker-camp/day-2/timing/step_4.png)

5) Put the millis block in the first hole of the compare block.

![step 5](/images/maker-camp/day-2/timing/step_5a.png#img-phone)

![step 5](/images/maker-camp/day-2/timing/step_5b.png)

6) In the other hole put a "Get Variable" block that uses the milliseconds variable.

![step 6](/images/maker-camp/day-2/timing/step_6.png)

7) Drag a serial print block inside the if block and print out count variable.

![step 7](/images/maker-camp/day-2/timing/step_7.png)

8) Set the milliseconds variable millis block plus 500.  

![step 8](/images/maker-camp/day-2/timing/step_8.png)

10) Upload the code and open the messaging dialog box.

![step 9](/images/upload-1.png)

![step 9](/images/maker-camp/day-2/timing/step_9.png#img-phone)

So that this means is that the block of code you wrote got executed over **60,000** in a half second!!!

## Challenge

Make the internal led, pin 13, blink every 1/2 second by modify the code you just wrote. 

Hint: You will need to create a global boolean variable that will store whether the led is turn on or off.  You can use this variable and another if block to determine whether to turn the led on or off. 

![Challenge](/images/maker-camp/day-2/timing/challenge.gif)

## Review

- What does the millis block do?
- What is the disadvantage of using the delay block?
- What did you learn?


