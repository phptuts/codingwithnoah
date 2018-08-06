---
layout: page
title: Arduino Basketball Workshop 
excerpt: "Arduino Basketball Workshop."
modified: 2018-08-05
---

## Objective

To learn how build an Arduino Basketball Game with LCD Screens and IR Sensors.

## Project Kit

![challenge](/images/arduino-block/basketball-workshop/kit.jpg)

## Completed Project

![challenge](/images/arduino-block/basketball-workshop/coding_steps/challenge.gif#img-phone)


## Bill of Materials

- 1 x Arduino Uno
- 1 x USB Arduino Cable
- 1 x RGB led 
- 3 x 150 ohm resistors
- 5 x m to m jumper wires
- 6 x m to f jumper wires

## Instructions

1) Cut out the basketball back drop from the poster board.  See the picture for the dimensions.

![step 1](/images/arduino-block/basketball-workshop/step_1.jpg#img-phone)

2) Cut out what you drew on the card board.

![step 2](/images/arduino-block/basketball-workshop/step_2.jpg)

3) Tape it the box, it will be labeled 1 when you get it.

![step 3](/images/arduino-block/basketball-workshop/step_3.jpg)

4) Cut the bottom of the the paper cup off.

![step 4](/images/arduino-block/basketball-workshop/step_4.jpg)

5) Tape the cup to poster board so it looks like a basketball goal.

![step 5](/images/arduino-block/basketball-workshop/step_5.jpg)

6) Tape the ir passive motion sensor onto the cardboard so that it pointing at an angle toward the goal.

![step 6](/images/arduino-block/basketball-workshop/step_6.jpg)

7) Put the cardboard box that you taped the cup to inside the other box.

![step 7](/images/arduino-block/basketball-workshop/step_7.jpg)

8) Connect all your 6 m to f jumper wires into pairs.  **Don't** tape them to the table like the picture.  That's done for visual aide.
 
![step 8](/images/arduino-block/basketball-workshop/step_8.jpg)

9) Connect a pair of m to f wire to vcc of the sensor.  Tape the wire to the side of the box.

![step 10](/images/arduino-block/basketball-workshop/step_9.jpg)

10) Connect the other end of the wire to 3.3v volts of the Arduino.

![step 10](/images/arduino-block/basketball-workshop/step_10.jpg)

11) Connect a pair of m to f wire to gnd of the sensor.  Tape the wire to the side of the box.

![step 11](/images/arduino-block/basketball-workshop/step_11.jpg)

12) Connect the other end of the wire to gnd of the Arduino.

![step 12](/images/arduino-block/basketball-workshop/step_12.jpg)

13) Connect a pair of m to f wire to out of the sensor.  Tape the wire to the side of the box.

![step 13](/images/arduino-block/basketball-workshop/step_13.jpg)

14) Connect the other end of the wire to pin 7 of the Arduino.

![step 14](/images/arduino-block/basketball-workshop/step_14.jpg)

15) Tape all the wires connect to sensor down so the sensor is pointing slightly away from the box.

![step 15](/images/arduino-block/basketball-workshop/step_15.jpg)

16) Drag an if block onto the screen. If blocks are found in the logic menu.

![step 16](/images/arduino-block/basketball-workshop/step_16a.png#img-phone)

![step 16](/images/arduino-block/basketball-workshop/step_16b.png#img-phone)

17) Click on the gear and drag an else block to the inside of the if block.

![step 17](/images/arduino-block/basketball-workshop/step_17a.png#img-phone)

![step 17](/images/arduino-block/basketball-workshop/step_17b.png#img-phone)

18) Connect a not block to the if block.

![step 18](/images/arduino-block/basketball-workshop/step_18a.png#img-phone)

![step 18](/images/arduino-block/basketball-workshop/step_18b.png#img-phone)

19) Connect a digitalRead block to the not block.  Set it to use pin 7, the pin the sensor is attached to.

![step 19](/images/arduino-block/basketball-workshop/step_19.png#img-phone)

20) Connect a digitalWrite block to the do part of the if statement.  Set it to use pin 13 and HIGH.

![step 20](/images/arduino-block/basketball-workshop/step_20.png#img-phone)

21) Connect a digitalWrite block to the else part of this if statement.  Set it to use pin 13 and LOW.

![step 21](/images/arduino-block/basketball-workshop/step_21.png#img-phone)

22) Upload the code.  Shoot a hoop and notice that both the green light on the sensor and the internal led on the Arduino go on for a less than a second.  If you have trouble seeing, don't worry it's really fast.

![upload code](/images/upload-1.png)

![step 21](/images/arduino-block/basketball-workshop/step_21.gif)


We did this to test that everything works.

23) Disconnect the ground wire from the sensor and connect a ground wire - (ground) of the breadboard.

![step 22](/images/arduino-block/basketball-workshop/step_22.jpg)

23) Connect the wire that connect ground of the sensor to ground of the breadboard.

![step 23](/images/arduino-block/basketball-workshop/step_23.jpg)

24) Connect SCL pin of the LCD Screen to A5 pin of the Arduino.

![step 24](/images/arduino-block/basketball-workshop/step_24.jpg)

25) Connect SDA pin of the LCD Screen to A4 pin of the Arduino.

![step 25](/images/arduino-block/basketball-workshop/step_25.jpg)

26) Connect VCC pin of the LCD Screen to 5v pin of the Arduino.

![step 26](/images/arduino-block/basketball-workshop/step_26.jpg)

27) Connect ground pin of the LCD Screen to - (ground) of the breadboard.

![step 27](/images/arduino-block/basketball-workshop/step_27.jpg)

28) Connect the one wire of the button to pin 3 of Arduino.

![step 28](/images/arduino-block/basketball-workshop/step_28.jpg)

29) Connect the other wire to ground of the breadboard.

![step 28](/images/arduino-block/basketball-workshop/step_29.jpg)


## Coding Instruction

1) Delete all the blocks on your screen.  You can do this by dragging everything into the trash can.

![step 1](/images/arduino-block/basketball-workshop/coding_steps/step_1.png#img-phone)
 
2) Drag a setup lcd block to the screen.  If you look on the back of your lcd screen you will see if it's memory address type.

![step 2](/images/arduino-block/basketball-workshop/coding_steps/step_2.png#img-phone)

3) Create 4 global variables.  

| Name         | Data Type    | Value |
|--------------|--------------|-------|
| score        | whole number | 0     |
| seconds left | whole number | 30    |
| playing      | boolean      | false |
| next second  | whole number | 0     |

![step 3](/images/arduino-block/basketball-workshop/coding_steps/step_3.png#img-phone)

4) Create the if block below.  What this if blocks is if playing variable equals false or is not true, then display the text "Push Button To Start" to start.  The text is position by the cursor block.  If you don't understand ask questions!!!  Upload the code once you are done. (Hint) the not block can be found in the logic menu.

![step 4](/images/arduino-block/basketball-workshop/coding_steps/step_4a.png#img-phone)

![upload code](/images/upload-1.png)

![step 4](/images/arduino-block/basketball-workshop/coding_steps/step_4b.jpg)

5) Create an if statement that will react once the button is pushed.  This will signal the start of the game.  Because we are using the pull resistor block everything is reserved.  Meaning that if button is **not** pressed electricity is going through that pin.  This will produce a 1 or true value.

![step 5](/images/arduino-block/basketball-workshop/coding_steps/step_5.png#img-phone)

6) Using the set variable block set these four variable values.  This is resetting the game's state.  The next second variable is used to tell the game when it should minus one from the seconds left variable.  The millis block gives the number of milliseconds the game has been running which is why we add 1000 to it.  

![step 6](/images/arduino-block/basketball-workshop/coding_steps/step_6.png#img-phone)

7) Now we are going to display the score and the time left on the screen.  Upload the code and push the button.  Let's make sure all this works. :)  Notice that the display is not counting down.  This is because we have not written any code to do this.

![step 7](/images/arduino-block/basketball-workshop/coding_steps/step_7a.png#img-phone)

![step 7](/images/arduino-block/basketball-workshop/coding_steps/step_7b.jpg)

8) Create an if statement that will execute if the game is playing and the millis block is greater than or equal to the next second variable.  If the millis block is greater than the next variable and we are playing the game we need to update the seconds on the display.  Hint the and block and compare blocks can be found in the logic menu.

![step 8](/images/arduino-block/basketball-workshop/coding_steps/step_8.png#img-phone)

9) Update the next second variable to by adding setting it to the millis block plus 1000.  Update the seconds left variable by subtracting 1 from itself.

![step 9](/images/arduino-block/basketball-workshop/coding_steps/step_9.png#img-phone)

10) Clear only the part of the screen that is displaying seconds and display the new seconds left variable.  You will have to convert this variable from a number to a string using the value to string block.  This block is found in the text menu.

![step 10](/images/arduino-block/basketball-workshop/coding_steps/step_10.png#img-phone)

11) Create an if block to update the score.  This will mean the pin 7 is high and that the game is playing.  See if you can make sense of what the blocks are doing on your own, explain them to an instructor or a fellow student.
 
![step 11](/images/arduino-block/basketball-workshop/coding_steps/step_11.png#img-phone)

## Challenge

Create if block that will stop the game.   It should stop the game if playing equals true and seconds left is less than or equal to 0.  It should display final score in the middle of the lcd screen row 3 and should set playing variable to false.

![challenge](/images/arduino-block/basketball-workshop/coding_steps/challenge.jpg)


![challenge](/images/arduino-block/basketball-workshop/coding_steps/challenge.gif#img-phone)
