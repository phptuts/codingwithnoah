---
layout: page
title: Variables & Debugging
excerpt: "How to create a variables and messaging."
modified: 2018-06-10
---

## Objective

To learn how to create variables and use the debugger to print the variables.

## Project Kit

![Arduino Project Kit](/images/summer-camp/day-1/variables-debug/project.jpg)

## Bill of Materials 

- Arduino & Cable

## What is a variable?

Have  a conversation about what a variable is, and the 3 parts of every variable.  

### Variable Parts

- the name of the variable
- the type of data the variable is storing (data type)
- information or value the variable is storing

### Variable Name Rules

Variables names can only have numbers and letters in them.  

### Variable Data Types

Go over each data type and have a talk about when you would use each one.

- Whole Number (Int)
- Big Whole Number (Long)
- Decimal Number (Decimal)
- Text (String)
- True or False (Boolean)
- 8 zeros or ones (Byte)


## How to Create Variables 

1) Open the "Variable" menu and drag the "create variable" block to the work space.

![step 1](/images/summer-camp/day-1/variables-debug/step1a.png)

![step 1](/images/summer-camp/day-1/variables-debug/step1b.png)

2) Click on the first drop down box and select the option "Rename Variable".  Rename the variable "age" and click "OK".

![step 2](/images/summer-camp/day-1/variables-debug/step2a.png)

![step 2](/images/summer-camp/day-1/variables-debug/step2b.png)


3) Connect a "number" block to the "create variable" block.  Change the value in the number block to your age.

![step 3](/images/summer-camp/day-1/variables-debug/step3a.png#img-phone)

![step 3](/images/summer-camp/day-1/variables-debug/step3b.png)


4) Connect the "debug" block to the bottom of the create variable block.
 
![step 4](/images/summer-camp/day-1/variables-debug/step4a.png#img-phone)

![step 4](/images/summer-camp/day-1/variables-debug/step4b.png)
 

5) Upload the code
 
![step 5](/images/upload-1.png)

![step 5](/images/upload-2.png)
 
![step 5](/images/upload-3.png)
 
6) Notice the debug block is black and highlighted.  This means that the program is paused here.  

![step 6](/images/summer-camp/day-1/variables-debug/step6.png)

7) Click on the debug icon on the top menu.

![step 7](/images/summer-camp/day-1/variables-debug/step7a.png)

![step 7](/images/summer-camp/day-1/variables-debug/step7b.png)

## Create Variable Challenge

Hint to create a value for the text variable go to "Text" menu and use the "Text" block.

![challenge hint](/images/summer-camp/day-1/variables-debug/create-variable-challenge-hint.png#img-phone)

Hint to create a value for a boolean variable go to the "Logic" menu and get the "True / False" block.

![challenge hint](/images/summer-camp/day-1/variables-debug/create-variable-boolean-hint.png#img-phone)

- Create a text variable named "color" that stores the value of your favorite color.
- Create a double variable named "temp" that stores the temperature in Nashville.
- Create a Boolean variable named "I Like Pizza" that stores true if you like pizza and false if you don't.

This is what your debug menu should like once done.  Stop here and see if you can help some else out.  We gonna have a quick review after this.

![challenge](/images/summer-camp/day-1/variables-debug/create-variable-challenge-result.png)


## New Blocks

### Set Variable Block

Changes the value of the variable.  The variable it changes is based on what is selected in the drop down box.  In picture below it will change the "frank age" variable.

![Set Variable](/images/summer-camp/day-1/variables-debug/set_variable.png#img-phone)


### Get Variable Block

The get variable block get the value of the variable based on the name of the variable in the drop down box.  

![Get Variable](/images/summer-camp/day-1/variables-debug/get_variable.png#img-phone)


## Change Variable's Value

1) Close the Debug Menu & delete all the blocks in the workspace.  You can do this by dragging all the blocks to the trash can on the bottom right of the screen.

![Step](/images/summer-camp/day-1/variables-debug/change-variable-step-1.png#img-phone)

2) Create a variable named "frank age" and set it equal to 7.

![Step](/images/summer-camp/day-1/variables-debug/change-variable-step-2.png)

3) Connect a "Debug" block to bottom of the "variable" block.

![Step](/images/summer-camp/day-1/variables-debug/change-variable-step-3.png)

4) Connect the "Set Variable" block to the bottom of the "Debug Block".  Set it to use the "frank age" variable.

![Step](/images/summer-camp/day-1/variables-debug/change-variable-step-4a.png)

![Step](/images/summer-camp/day-1/variables-debug/change-variable-step-4b.png)

![Step](/images/summer-camp/day-1/variables-debug/change-variable-step-4c.png)

5) Connect a "Math Operator" block to the "Set Variable" block in the workspace.

![Step](/images/summer-camp/day-1/variables-debug/change-variable-step-5a.png#img-phone)

![Step](/images/summer-camp/day-1/variables-debug/change-variable-step-5b.png)

6) Take a number block and put it into the first hole of the "Math Operator" block.  Set the value of the number block to 1.

![Step](/images/summer-camp/day-1/variables-debug/change-variable-step-6.png)

7) Take a "Get Variable" block and set it to use the "frank age" variable.

![Step](/images/summer-camp/day-1/variables-debug/change-variable-step-7a.png#img-phone)

![Step](/images/summer-camp/day-1/variables-debug/change-variable-step-7b.png)

8) Connect another "Debug" block to the bottom of the "Set Variable" block.

![Step](/images/summer-camp/day-1/variables-debug/change-variable-step-8.png)

9) Upload the code
 
![step 5](/images/upload-1.png)

![step 5](/images/upload-2.png)
 
![step 5](/images/upload-3.png)

10) Open the "Debug" menu.

![Step](/images/summer-camp/day-1/variables-debug/change-variable-step-10.png)

11) Click the "Continue" button on the top right of the menu.  Notice the debug block on the bottom is highlighted and that variable's value changed.

![Step](/images/summer-camp/day-1/variables-debug/change-variable-step-11a.png#img-phone)

![Step](/images/summer-camp/day-1/variables-debug/change-variable-step-11b.png)

12) Click it again and see that when it goes back to the top it goes back to 7.

### Challenge) Create a "Text" variable and change it's value.  Use the debug blocks to see the value change.

### Review / Conversation about why.

## Global Variables

Global variables are special variables that are created outside of the normal program.  Global variables allow you to keep the value in the variable when it goes back through the loop.

![Arduino Loop](/images/summer-camp/day-1/variables-debug/arduino-loop.png)


## Challenge Global Variable

Create this program similar to what you did in the previous steps with a global variable.  It should like the picture below. Upload code and click the "Continue" button.  Notice how the number keeps increasing.

![Global Variable](/images/summer-camp/day-1/variables-debug/global-var-1.png)

![Global Variable Code](/images/summer-camp/day-1/variables-debug/global-var-2.png)

![Global Variable Debug](/images/summer-camp/day-1/variables-debug/global-var-3.png)


## Recap of everything.  Tell me what you learned.