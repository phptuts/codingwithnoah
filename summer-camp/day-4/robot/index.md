---
layout: page
title: Arduino Robot and Functions
excerpt: "To learn how to build an Arduino robot and control it with functions."
modified: 2018-06-14
---

## Objective

The campers we'll learn how to create their own blocks / functions in order to control the robot.

## Project Kit

Todo take pic

## Completed Project

![complete](/images/summer-camp/day-4/robot/complete.jpg)

## Bill of Materials 

- 1 x Robot kit
- 1 x Arduino
- 1 x Motor Shield
- 1 x 9 volt battery
- 1 x 9 volt battery jack
- 1 x ultra sonic sensor

## Create Custom Block 

This allows you to create custom blocks.  The reason you would want to do this is so that you don't have to repeat yourself.  For example say it took 10 blocks to make a right turn with the robot.  You would not want to have to use 10 blocks every time you wanted to turn right?

The red box is the name of the block you are creating.

![create block](/images/summer-camp/day-4/robot/create-block.png#img-phone)

Blocks you create can take in variables and act on them.  An example would be a forward block taking in the speed that you want the block you created to use when controlling the motor.  Right now the only types of variables the function can take are whole number (int) variables.  You can create variables that are required by clicking on the gear of the block in the top left corner.

![create block](/images/summer-camp/day-4/robot/create-block-gear.png#img-phone)

You can use the blocks you create.  They are found in the "functions menu."

![functions menu](/images/summer-camp/day-4/robot/functions-menu.png#img-phone)


## Instructions

1) Take the metal bar place it next to motor like the picture.  Be sure that the plastic circle is on the side of the metal piece.

![step 1](/images/summer-camp/day-4/robot/step_1.jpg)

2) Now place the long screws into holes.  Make sure it looks like the picture.

![step 2](/images/summer-camp/day-4/robot/step_2.jpg)

3) Screw the nuts on to the motor.

![step 3](/images/summer-camp/day-4/robot/step_3.jpg)

4) Attach the black circle to the motor.

![step 4](/images/summer-camp/day-4/robot/step_4.jpg)

5) Repeat steps 1 - 4, with other motor.  Then lay both motors down so they look like the picture.  At this point get a counselor to qa your work.

![step 5](/images/summer-camp/day-4/robot/step_5.jpg)

6) Now lay down the large plastic piece so that the holes on it match holes in the metal pieces.

![step 6](/images/summer-camp/day-4/robot/step_6.jpg)

7) Screw in the large plastic piece.

![step 7](/images/summer-camp/day-4/robot/step_7a.jpg)

![step 7](/images/summer-camp/day-4/robot/step_7b.jpg)

8) Attach the wheel to the plastic piece.  This will be the front of the robot.  Before you attach the wheel make sure holes match and get a counselor to qa it.

![step 8](/images/summer-camp/day-4/robot/step_8a.jpg)

9) Attach the wheels to the robot.  

![step 9](/images/summer-camp/day-4/robot/step_9.jpg)

10) Pull the motor wires up through the holes of the robot.

![step 10](/images/summer-camp/day-4/robot/step_10.jpg)

11) Attach the Arduino to the robot with tape.

![step 11](/images/summer-camp/day-4/robot/step_11a.jpg)

![step 11](/images/summer-camp/day-4/robot/step_11b.jpg)

12) Attach the motor shield to the Arduino.

![step 12](/images/summer-camp/day-4/robot/step_12.jpg)

13) Attach the motor wires to the A motor of the the motor shield.  Now put that side up, this should be left wheel when your robot is facing away from you.

![step 13](/images/summer-camp/day-4/robot/step_13.jpg)

14) Now flip the robot on that side.

![step 14](/images/summer-camp/day-4/robot/step_14.jpg)

15) Drag a create function block to the screen.  Rename the block "left wheel forward".

![step 15](/images/summer-camp/day-4/robot/step_15a.png)

![step 15](/images/summer-camp/day-4/robot/step_15b.png)

16) Create a parameter / value the block will take.  Call that the name of it speed.

![step 16](/images/summer-camp/day-4/robot/step_16a.png)

![step 16](/images/summer-camp/day-4/robot/step_16b.png)

17) Drag a digital write block inside the function block you are creating.

![step 17](/images/summer-camp/day-4/robot/step_17.png)

18) Drag a analog write block inside the function you are creating.

![step 18](/images/summer-camp/day-4/robot/step_18.png)

19) Set it to use pin 10 and for the number use the speed variable.  You can use the regular "Get Variable" block to get the speed variable.

![step 19](/images/summer-camp/day-4/robot/step_19.png)

20) Open the function menu and notice the "left wheel forward" block

![step 20](/images/summer-camp/day-4/robot/step_20.png#img-phone)

21) Create this piece of code.  This will use your block.

![step 21](/images/summer-camp/day-4/robot/step_21.png#img-phone)

22) Upload the code and make sure the wheel is going clockwise.  I had to adjust my code from "high" to "low" for the forward wheel. 

![step 22](/images/upload-1.png)

Right

![step 22](/images/summer-camp/day-4/robot/step_22b.gif)

Wrong

![step 22](/images/summer-camp/day-4/robot/step_22c.gif)

23) Connect the 9 volt battery to the battery jack.

![step 23](/images/summer-camp/day-4/robot/step_23.jpg)

24) Attach the battery to the robot with tape.

![step 24](/images/summer-camp/day-4/robot/step_24a.jpg)

![step 24](/images/summer-camp/day-4/robot/step_24b.jpg)

## Challenge 1

Create a function block that will make the robot go backwards.  Call it "left wheel backwards".

## Challenge 2

Connect the other side of the robot and make 2 functions for the right wheel.  You the table in the [previous lesson](/summer-camp/day-4/motor) to help you determine which pins to use.

## Challenge 3

Create a stop function with the blocks / functions you have already created.  Be sure the function is below all the other functions.

Hint: Stopping is the same as putting the speed to 0.

## Challenge 4

Create forward and backward blocks that will spin both wheels.  In order to do this you will have to see how off your robot is.  You will need to see if you make it go straight by making one side have more power then the other.

Hint: Load the program onto the robot with the 9 volt battery unplugged.  Once the robot is on the ground plug the 9 volt battery back in.

## Challenge 5

Create Right and Left blocks.  Here you will have to use the delay block and time how long it takes the robot to turn right.  

Hint: Load the program onto the robot with the 9 volt battery unplugged.  Once the robot is on the ground plug the 9 volt battery back in.

## Challenge 6

Connect a ultra sonic sensor to the robot to sense distance.  Use pins 2 and 4 for the trig and echo pins.  This is just if you finish every super fast.

