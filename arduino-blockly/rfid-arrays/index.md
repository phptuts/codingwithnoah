---
layout: page
title: RFID & Arrays
excerpt: "How to create an RFID door checker."
modified: 2018-02-22
---

## Objective

To learn about arrays and how to use them with rfid tags.

## Kit

![kit](/images/arduino-block/rfid-arrays/kit.jpg)    

## Completed Project

![RFID Servo](/images/arduino-block/rfid-arrays/servo_challenge.gif)    

## Bill of Materials

- 1 x Arduino Uno
- 1 x USB Arduino Cable
- 1 x RFID Reader
- 3 x male to female jumper wires
- 3 x male to male jumper wires

## Arrays / Lists

Arrays are a way to store a list of data.  With Arduino, you have to specify the type of data that is going into the list.  To access the values in the array, you need to know the index/number in the list where it is stored.  When you create an array with the Blockly for Arduino, you also need to know the size of the Array.  The first element in an array is always 0.  Array also have types like variables.

So inside the Arduinos memory an array might look like this:

**[3,4,5,6]**

And the 0th element in the array would be 3.


## Create Array Variable Block

This block is used to create a variable that is an array.  Every is the same except that you don't set the values being stored in the array.  Instead you set the number of items the array will store, which will always be a number.

![Create array block](/images/arduino-block/rfid-arrays/create-array-variable-block.png)    

## Set value in array block

This block is used to set a value that the array is storing.  The index hole is used to set where in the array the value is being stored.  Array have types, so if you create an whole number / integer array you can not store text data inside it.

![Create array block](/images/arduino-block/rfid-arrays/set-array-value-block.png)    

## Get value in array block

This block gets a value that is being stored in the array.  It will use the index to determine which value to get in the array.  The other hole is used to determine which array to use.

![Get array value block](/images/arduino-block/rfid-arrays/get-array-value-block.png)    

## Instructions

1) Flip over the RFID chip and look at the picture.  Identify the pins on the chip.

![RFID Chip](/images/arduino-block/rfid-arrays/rfid.jpg)

2) Take ground pin on the RFID chip and plug it into the ground pin of the Arduino.

![RFID Chip](/images/arduino-block/rfid-arrays/step2.jpg)

3) Take the volts pin on the RFID chip and plug it into "Vin" pin on the Arduino.  Vin pin that it will use the external power source, up to 9 volts.  We will only use 5 volts so it's not a problem for this project.

![RFID Chip](/images/arduino-block/rfid-arrays/step3.jpg)

4) Take the "TX" pin on the RFID chip and plug it into pin 6 of the Arduino.

![RFID Chip](/images/arduino-block/rfid-arrays/step4.jpg)

5) Plug the RFID antenna to the RFID chip.  
 
![RFID Chip](/images/arduino-block/rfid-arrays/step5.jpg)

6) Drag an "If" block onto the screen.

![IF](/images/arduino-block/rfid-arrays/step9.png)

7) From the RFID Menu connect the "Has RFID Scanned Card" Block to the "If" block.

![Has RFID Scanned](/images/arduino-block/rfid-arrays/step10a.png)

![Has RFID Scanned](/images/arduino-block/rfid-arrays/step10b.png)

8) Connect a "Serial Print" block to do part of the "If" block.  Delete the "Text" block connected to it.

![Has RFID Scanned](/images/arduino-block/rfid-arrays/step11.png)

9) Connect an "RFID Tag Number" block to the "Serial Print" block.

![Has RFID Scanned](/images/arduino-block/rfid-arrays/step12a.png)

![Has RFID Scanned](/images/arduino-block/rfid-arrays/step12b.png)

10) Upload the code.  Then open the serial monitor.  Scan both chips in your kit; you should see then appear on the serial monitor.

![Serial Monitor](/images/arduino-block/rfid-arrays/step13.png)

11) Copy and paste those numbers and put them into a text file so you can use them later.

12) Delete all the blocks onto the screen, except for the "LCD Setup" block.

![Serial Monitor](/images/arduino-block/rfid-arrays/step15.png)

13) Create an array named "Valid RFIDS Tags" that will have a size of 2 and store strings.

![Array Block](/images/arduino-block/rfid-arrays/step16a.png)

![Array Block](/images/arduino-block/rfid-arrays/step16b.png)

![Array Block](/images/arduino-block/rfid-arrays/step16c.png)

14) Connect the "Set Array Variable" block to the bottom of the list variable block.

![Array Block](/images/arduino-block/rfid-arrays/step17a.png)

![Array Block](/images/arduino-block/rfid-arrays/step17b.png)

15) Drag a "Get Variable" block and put into the first hole.  Set it to use the "Valid RFID Tags" list variable you just created.

![Array Block](/images/arduino-block/rfid-arrays/step18.png)

16) Drag the number block and put it into the index part of the hole.

![Array Block](/images/arduino-block/rfid-arrays/step19.png)

17) For the value of the variable, use one of the RFID Tag you copied from the serial monitor.

![Serial Monitor Block](/images/arduino-block/rfid-arrays/step20.png)

18) Repeat what you did from steps 17 to 20, but this time put 1 for the index and put the other RFID tag for the "Text" block value.

![Array Block](/images/arduino-block/rfid-arrays/step21.png)

19) Create an "If" block that executes **if** the RFID Reader has a value.

![If Block](/images/arduino-block/rfid-arrays/step22.png)

20) Create a variable inside if the "IF" block and set its value equal to RFID Tag.  The variable should be store a string and be named "RFID Scanned".

![If Block](/images/arduino-block/rfid-arrays/step23.png)

21) Create another variable called "Found Valid Tag" and set it's value to false. 

![Variable Block](/images/arduino-block/rfid-arrays/step24.png)

22) Connect a "count" block to the bottom of the of the last created variable block.  Set the "count" block to start at zero and end at 1.

![Count Loop Block](/images/arduino-block/rfid-arrays/step25.png)

23) Drag an "IF" block inside the count block.

![If Block](/images/arduino-block/rfid-arrays/step26.png)

24) Connect a "compare" block to the "If" block.  Put the "Get Variable" block as the first thing for the compare block to compare.  Set it equal to the "RFID Scanned" variable.

![Compare Block](/images/arduino-block/rfid-arrays/step27.png)

25) Connect the "Get Value in Array" block to the second hole of the compare block.  This block allows you to get the values that are stored in the array.  

![Compare Block](/images/arduino-block/rfid-arrays/step28.png)

26) The first hole "Get Value in Array" block takes in the "Array" variable you created.  The second hole takes in where you want to get that value.  For the index value, we want to use "i".  This will loop through all the values in our array and see if any of them equal the RFID scanned in.

![Get Array Value Block](/images/arduino-block/rfid-arrays/step29.png)

27) Inside the "If" block set the variable "Found Valid Tag" to true.

![Get Array Value Block](/images/arduino-block/rfid-arrays/step30.png)

28) Create 2 if statements.  One that will display "Access Granted" if the "Found Valid Tag" variable is true.  The other will display "Access Denied :(" if the "Found Valid Tag" variable is false.  The not block can be found in the logic menu.

![LCD BLocks](/images/arduino-block/rfid-arrays/step31.png)

29) Upload the code and scan a valid RFID tag.  Then borrow an invalid RFID tag from your neighbor.

![upload code](/images/upload-1.png)

![granted](/images/arduino-block/rfid-arrays/access-granted.png)

![denied](/images/arduino-block/rfid-arrays/access-granted.png)

## Challenge

Modify the program to make a valid RFID tag control a servo motor
- Make servo motor rotate 180 degrees
- Wait 3 seconds
- Make it turn back 180 after the 3 seconds.
    
![RFID Servo](/images/arduino-block/rfid-arrays/servo_challenge.gif)    
    
    
## Review

- What is an array / list?
- How do you create an array variable?
- When is the size of the array variable known?
