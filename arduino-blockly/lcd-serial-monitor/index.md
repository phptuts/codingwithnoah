---
layout: page
title: LCD Screens, Boolean Variables & Serial Monitor
excerpt: "Learn how to control LCD screens with the Arduino & Serial Monitor."
modified: 2018-2-10
---

## Objective

To use user input to control the what is displayed on a lcd screen.

## Project Kit

![Kit](/images/arduino-block/lcd-serial-monitor/kit.jpg) 

## Completed Project

![Challenge 2](/images/arduino-block/lcd-serial-monitor/challenge-2.jpg) 

## Bill of Materials

- 1 x Arduino Uno
- 1 x Arduino USB
- 1 x LCD Screen
- 4 x male to female jumper wires 


## Boolean Variable

A boolean variable is a type variable that can store either store true or false.  

![If Block](/images/arduino-block/lcd-serial-monitor/boolean_variable_block.png) 

## And Block

The "Logical Operator" block allows you to compare if two things.  When the "Logical Operator" block is set to "And" it means both sides must be true for something to happen.   If you set it to "or" then only one of them have to be true.

![Logical Operator Block](/images/arduino-block/lcd-serial-monitor/conditional-block.png) 

## Instructions

1) Create a global variable named "ROW RECEIVED" that is a boolean.  Set the variable to false.

![global variable](/images/arduino-block/lcd-serial-monitor/step4a.png) 

![global variable](/images/arduino-block/lcd-serial-monitor/step4c.png) 

![global variable](/images/arduino-block/lcd-serial-monitor/step4b.png) 

2) Create a global variable named "ROW" that is an integer and set it equal to 0.

![global variable](/images/arduino-block/lcd-serial-monitor/step5a.png) 

![global variable](/images/arduino-block/lcd-serial-monitor/step5b.png) 

![global variable](/images/arduino-block/lcd-serial-monitor/step5c.png) 

3) Create a **non-global** variable name "USB WORDS" that is a type string.  Connect the "Read Until One Character" from "Input/Menu" to the value of the "USB WORDS".

![global variable](/images/arduino-block/lcd-serial-monitor/step6a.png) 

![global variable](/images/arduino-block/lcd-serial-monitor/step6b.png) 

![global variable](/images/arduino-block/lcd-serial-monitor/step6c.png) 

4) Connect the "If" block to the "USB WORDS" variables.

![if block](/images/arduino-block/lcd-serial-monitor/step7a.png) 

![if block](/images/arduino-block/lcd-serial-monitor/step7b.png) 

5) Connect the "Logical Operator" block to the "if" block.

![logical operator](/images/arduino-block/lcd-serial-monitor/step8a.png) 

![logical operator](/images/arduino-block/lcd-serial-monitor/step8b.png) 

6) Connect the "Compare" block to one the first hole "Logical Operator" block.

![compare block](/images/arduino-block/lcd-serial-monitor/step9a.png) 

![compare block](/images/arduino-block/lcd-serial-monitor/step9b.png) 

7) Set the "Compare" block to not equal.

![compare block](/images/arduino-block/lcd-serial-monitor/step10.png) 

8) Put the "Get Variable" block to the inside the "Compare" block and set to "Get Variable" block the "USB Words" variable.  Then compare it "Text" block that is empty.  

![If Block](/images/arduino-block/lcd-serial-monitor/step11a.png) 

![If Block](/images/arduino-block/lcd-serial-monitor/step11b.png) 

![If Block](/images/arduino-block/lcd-serial-monitor/step11c.png) 

9) Drag a "not" block from the "logical" menu and place it inside the other hole.

![Not Block](/images/arduino-block/lcd-serial-monitor/step12a.png) 

![Not Block](/images/arduino-block/lcd-serial-monitor/step12b.png) 

10) Drag a "Get Variable" block and set it to use the "ROW RECEIVED" variable.

![Not Block](/images/arduino-block/lcd-serial-monitor/step13a.png) 

![Not Block](/images/arduino-block/lcd-serial-monitor/step13b.png) 


### Recap

What we are saying is that if "USB WORDS" variable is **not** empty **and** the "ROW RECEIVED" variable is **not** true then execute blocks inside the "If" block.

11) Place the "Set Variable" block inside the "If" block and set it to use the "ROW" variable.
 
![Variable Set](/images/arduino-block/lcd-serial-monitor/step14a.png) 
 
![Variable Set](/images/arduino-block/lcd-serial-monitor/step14b.png) 

12) Connect the "String to Whole Number" block to the "Set Variable" block inside the "If" block.

![Whole Number to Integer](/images/arduino-block/lcd-serial-monitor/step15a.png) 
 
![Whole Number to Integer](/images/arduino-block/lcd-serial-monitor/step15b.png) 

13) Connect the "Get Variable" block to the "String to Whole Number" block and set the value to use "USB WORDS" variable.

![Variable Set](/images/arduino-block/lcd-serial-monitor/step16.png) 

14) Set the variable the "ROW RECEIVED" to the value true.

![Variable Set](/images/arduino-block/lcd-serial-monitor/step17.png) 

15) Set the variable "USB WORDS" to an empty "TEXT" block.

![Variable Set](/images/arduino-block/lcd-serial-monitor/step18.png) 

16) Use the "Serial Print" block from the "Input/Output" menu, the "Text Join", "Text" block, and "Row" variable to print out "Row: " + ROW.

![Serial Print](/images/arduino-block/lcd-serial-monitor/step19.png) 

17) Upload the code and open the "Serial Monitor".  Type in "4\|" and click send.

![Whole Number to Integer](/images/upload-1.png) 
 
![Whole Number to Integer](/images/arduino-block/lcd-serial-monitor/step20b.png) 

### Recap

Let's break down what happened.

1) You created a global boolean variable called "ROW RECEIVED" that you set to the value false.

2) You created a global whole number variable called "ROW" that you set to the value of 0.

3) You created a non-global variable named "USB WORDS" that set to the value of what is typed into the serial monitor.

4) You then used an "if" block to check that "USB WORDS" variable is **not** equal to empty text  **and** "ROW RECEIVED" is **not** true.  If both were true, the following steps were executed.

5) You then took the value that "USB Words" was storing and converted it into a whole number.

6) You stored the "Number" value in the "ROW" variable.

7) You then set the "ROW RECEIVED" variable to the value of "true".

8) You then set the "USB WORDS" variable to the value of an empty "Text" block.

9) You then printed out on the Serial Monitor "ROW RECEIVED " + number you typed in.

### Challenge 1 Setup the IF Statements

Repeat everything you did for both Column Number and Text.  You will create three global variables to do it.  Be sure and print out everything as you did before.  You will set the "Text" variable to an empty "Text" block.  You will also **not** need to convert the "Text" variable to a number.

| Variable Name | Data Type     | Purpose                                            | Already Created     |    
| ------------- |---------------|----------------------------------------------------|---------------------|
| ROW           | Whole Number  | Where to print on the y-axis.                      | YES                 |
| ROW RECEIVED  | Boolean       | Have we received the Row number?                   | YES                 |
| COL           | Whole Number  | Where to print on the x-axis.                      | NO                  |
| COL RECEIVED  | Boolean       | Have we received the COL number?                   | NO                  |
| TEXT          | String        | What we are going to print to the LCD screen.      | NO                  |
| TEXT RECEIVED | Boolean       | Have we received the Text data.                    | NO                  |


### Challenge 2 

Inside the end of the last "IF Block" at the bottom print the variable "TEXT" to the screen.  You will do it in this order.

- Clear Screen
- Position Cursor using COL and ROW
- Print the Text Variable to the screen
- Set "ROW RECEIVED", "COL RECEIVED", and "TEXT RECEIVED" to false.

You will be able to print to the screen after this.  Type "1\|4\|You did it!\|" into the serial monitor.  You should see LCD screen print what you did below.

![Challenge 2](/images/arduino-block/lcd-serial-monitor/challenge-2-serial-monitor.png) 

![Challenge 2](/images/arduino-block/lcd-serial-monitor/challenge-2.jpg) 

## Other Challenges

- Create four if statements and use the "Simple Print" block to print on all for rows of the LCD screen.
- Use the "blink" block and make it move left or right
- Just have fun.