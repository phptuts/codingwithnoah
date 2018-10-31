---
layout: page
title: Android App Controlling RGB LED Lights
excerpt: "Build an Android Bluetooth App that controls Arduino RGB LED lights"
modified: 2018-10-28
---

## Objective

To build an Android App that will work send commands to bluetooth that an Arduino can then process and turn on and off LEDs.

## Kit

![kit](/images/app-inventor-arduino-blockly/rgb-led-light-strip/lesson-2-bt-android-test/kit.jpg)

## Completed Project

<iframe width="560" height="315" src="https://www.youtube.com/embed/bWhSywcjnk0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## Bill of Materials 

- 1 x Arduino with usb  
- 1 x rgb led light strip 
- 1 x bluetooth module
- 1 x breadboard
- 8 x jumper wires

 
## Split Color Block

TODO

## Select item in list block

TODO

## Join Text Block

TODO

## Create procedure with return value block / custom block

TODO


## Instructions

1) Create a new project in app inventor.

![step 1](/images/app-inventor-arduino-blockly/rgb-led-light-strip/lesson-3-app-inventor/step_1.png#img-phone)

2) Download the [App Inventor Color Picker Extension](https://community.thunkable.com/t/colorpicker-extension-by-zhangzqs/28834).

3) Import the extension and use insert into the project.

![step 3](/images/app-inventor-arduino-blockly/rgb-led-light-strip/lesson-3-app-inventor/step_3.gif)

4) Drag a vertical arrangement onto the screen.  This is a container for buttons and text boxes that forces them to stack vertically.  Set the width and height to fill parent which should take up 100% of the screen.

![step 4](/images/app-inventor-arduino-blockly/rgb-led-light-strip/lesson-3-app-inventor/step_4.gif)

5) Drag a list picker onto the screen.  Name it Bluetooth List Picker. Set the font size to 20 pixel and the text to Select Bluetooth.

![step 5](/images/app-inventor-arduino-blockly/rgb-led-light-strip/lesson-3-app-inventor/step_5.gif)

6) Drag a button onto the screen.  Name the button "Random Button" and set the text to Random.  Set the font size to 20 pixels and set the width the fill parent.

![step 6](/images/app-inventor-arduino-blockly/rgb-led-light-strip/lesson-3-app-inventor/step_6.gif)

7) Drag a button onto the screen.  Name the button "Clear Button" and set the text to Clear.  Set the font size to 20 pixels and set the width the fill parent.

![step 7](/images/app-inventor-arduino-blockly/rgb-led-light-strip/lesson-3-app-inventor/step_7.gif)

8) Drag the bluetooth client extension and the notify extension onto the app.  Bluetooth client will allow us to work with bluetooth and notify let's us send notifications to the user.

![step 8](/images/app-inventor-arduino-blockly/rgb-led-light-strip/lesson-3-app-inventor/step_8.gif)

9) Click on the when initialized screen block and drag that to the workspace.  The blocks you put in here will only execute when the screen is initialized.  Then write an if block that will execute if bluetooth is not enable.  Inside the if block send a notification letting the user know that bluetooth is not enabled.
 
![step 9](/images/app-inventor-arduino-blockly/rgb-led-light-strip/lesson-3-app-inventor/step_9.gif)

 10) Create the before and after picking blocks.  The before pick block will set the list of available bluetooth.  The after pick block takes what the user selected and tries to connect with it.
 
![step 10](/images/app-inventor-arduino-blockly/rgb-led-light-strip/lesson-3-app-inventor/step_10.gif)

 11) Connect the app inventor app to the phone and see if you can connect with the bluetooth.
 
![step 11](/images/app-inventor-arduino-blockly/rgb-led-light-strip/lesson-3-app-inventor/step_11.gif)

![step 11](/images/app-inventor-arduino-blockly/rgb-led-light-strip/lesson-3-app-inventor/step_11a.png#img-phone)

![step 11](/images/app-inventor-arduino-blockly/rgb-led-light-strip/lesson-3-app-inventor/step_11b.png#img-phone)

![step 11](/images/app-inventor-arduino-blockly/rgb-led-light-strip/lesson-3-app-inventor/step_11c.png#img-phone)

12) Next we'll write some code that will send the command "random\|" to the bluetooth when the random button is clicked.

![step 12](/images/app-inventor-arduino-blockly/rgb-led-light-strip/lesson-3-app-inventor/step_12.gif)

![step 12](/images/app-inventor-arduino-blockly/rgb-led-light-strip/lesson-3-app-inventor/step_12a.jpg)


13) Next we'll write some code that will send the command "solid-0#0#0\|" to the bluetooth.  This will turn off all the LEDs.  We'll do this by duplicating the code we just wrote.

![step 13](/images/app-inventor-arduino-blockly/rgb-led-light-strip/lesson-3-app-inventor/step_13.gif)

![step 13](/images/app-inventor-arduino-blockly/rgb-led-light-strip/lesson-3-app-inventor/step_13a.jpg)

14) Next we'll create 3 variables.  color_1, color_2, and current color.  color_1 and color_2 we'll store the color values selected by the user.  current color we'll store which one color user is currently selecting.

![step 14](/images/app-inventor-arduino-blockly/rgb-led-light-strip/lesson-3-app-inventor/step_14.gif)

15) Next we'll create 2 button, color_1_button and color_2_button.  Each button we'll have a font size of 20 pixels and fill parent for the width.  Also change the text to select color 1 and select color 2.

![step 15](/images/app-inventor-arduino-blockly/rgb-led-light-strip/lesson-3-app-inventor/step_15.gif)

16) Next we'll write some code will act if color button 1 is clicked.  If it is we'll set current color to 1 and open the color dialog box.  We'll then write some code to respond to the when user selects a color.  This will use the current color variable to determine which color to set.

![step 16](/images/app-inventor-arduino-blockly/rgb-led-light-strip/lesson-3-app-inventor/step_16.gif)


## Challenge

See if you can create the code to choose the color when color_2_button is clicked.

17) Create a button called "solid_button".  This button will be use to send the solid command to the bluetooth.

![step 17](/images/app-inventor-arduino-blockly/rgb-led-light-strip/lesson-3-app-inventor/step_17.gif)

18) Create a custom block that will take a color value and turn into an rgb string.  This will take color value like 30 => Red, 35 => green, and blue => 0 and turn it into 30#35#0.

![step 18](/images/app-inventor-arduino-blockly/rgb-led-light-strip/lesson-3-app-inventor/step_18.gif)

19) Next we'll create code that will send the solid command with a color when the user clicks on the solid button.

![step 19](/images/app-inventor-arduino-blockly/rgb-led-light-strip/lesson-3-app-inventor/step_19.gif)

![step 19](/images/app-inventor-arduino-blockly/rgb-led-light-strip/lesson-3-app-inventor/step_19.jpg)

20) Next we are going to create the double button which will send the double command.  We'll also create an input box so that user can input the number of milliseconds they want to between switch colors.

![step 20](/images/app-inventor-arduino-blockly/rgb-led-light-strip/lesson-3-app-inventor/step_20.gif)

21) Finally we'll write code to respond if the button is clicked.  This will send the double command to the bluetooth.  

![step 21](/images/app-inventor-arduino-blockly/rgb-led-light-strip/lesson-3-app-inventor/step_21.gif)

![step 21](/images/app-inventor-arduino-blockly/rgb-led-light-strip/lesson-3-app-inventor/step_21_live.gif)

## Congrats!!!

You just completed the app.  See if you can create your own buttons or patterns.  Great job!!!



