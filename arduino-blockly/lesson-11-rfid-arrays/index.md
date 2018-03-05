---
layout: page
title: Arduino 111 - RFID & Arrays
excerpt: "How to create an RFID door checker."
modified: 2018-02-22
---

## Project Kit

![Arduino Kit](/images/arduino-block/lesson-11/kit.jpg) 

## Bill of Materials

- 1 x Arduino Uno
- 1 x USB Arduino Cable
- 1 x RFID Reader
- 1 x LCD Screen
- 7 x male to female jumper wires

## Steps

Follow the directions in [Arduino Setup Guide](/arduino-setup) if your computer has not been set up yet.  

1) Follow the directions [Arduino Blockly Start Guide](/arduino-blockly-start) to start the [Arduino Blockly Webpage](http://localhost:3000).
 
2) Open the [Arduino Blockly Webpage](http://localhost:3000).

3) Do steps 3 - 11 in [lesson 7](/arduino-blockly/lesson-7-lcd-loops) to make sure your lcd screen works.

4) Flip over the RFID chip and look at the picture.  Identify the pins on the chip.

![RFID Chip](/images/arduino-block/lesson-11/step4.jpg)

5) Take ground pin on the RFID chip and plug it into the ground pin of the Arduino.

![RFID Chip](/images/arduino-block/lesson-11/step5.jpg)

6) Take the volts pin on the RFID chip and plug it into "Vin" pin on the Arduino.

![RFID Chip](/images/arduino-block/lesson-11/step6.jpg)

7) Take the "TX" pin on the RFID chip and plug it into pin 6 of the Arduino.

![RFID Chip](/images/arduino-block/lesson-11/step7.jpg)

8) Plug the RFID antenna to the RFID chip.  
 
![RFID Chip](/images/arduino-block/lesson-11/step8.jpg)

9) Drag an "If" block onto the screen.

![IF](/images/arduino-block/lesson-11/step9.png)

10) From the RFID Menu connect the "Has RFID Scanned Card" Block to the "If" block.

![Has RFID Scanned](/images/arduino-block/lesson-11/step10a.png)

![Has RFID Scanned](/images/arduino-block/lesson-11/step10b.png)

11) Connect a "Serial Print" block to do part of the "If" block.  Delete the "Text" block connected to it.

![Has RFID Scanned](/images/arduino-block/lesson-11/step11.png)

12) Connect an "RFID Tag Number" block to the "Serial Print" block.

![Has RFID Scanned](/images/arduino-block/lesson-11/step12a.png)

![Has RFID Scanned](/images/arduino-block/lesson-11/step12b.png)

13) Upload the code.  Then open the serial monitor.  Scan both chips in your kit; you should see then appear on the serial monitor.

![Serial Monitor](/images/arduino-block/lesson-11/step13.png)

14) Copy and paste those numbers and put them into a text file so you can use them later.

15) Delete all the blocks onto the screen, except for the "LCD Setup" block.

![Serial Monitor](/images/arduino-block/lesson-11/step15.png)

### Arrays

Arrays are a way to store a list of data.  With Arduino, you have to specify the type of data that is going into the list.  To access the values in the array, you need to know the index/number in the list where it is stored.  When you create an array with the Blockly for Arduino, you also need to know the size of the Array.  The first element in an array is always 0.  

16) Create an array named "Valid RFIDS Tags" that will have a size of 2 and store strings.

![Array Block](/images/arduino-block/lesson-11/step16a.png)

![Array Block](/images/arduino-block/lesson-11/step16b.png)

![Array Block](/images/arduino-block/lesson-11/step16c.png)

17) Connect the "Set Array Variable" block to the bottom of the list variable block.

![Array Block](/images/arduino-block/lesson-11/step17a.png)

![Array Block](/images/arduino-block/lesson-11/step17b.png)

18) Drag a "Get Variable" block and put into the first hole.  Set it to use the "Valid RFID Tags" list variable you just created.

![Array Block](/images/arduino-block/lesson-11/step18.png)

19) Drag the number block and put it into the index part of the hole.

![Array Block](/images/arduino-block/lesson-11/step19.png)

20) For the value of the variable, use one of the RFID Tag you copied from the serial monitor.

![Serial Monitor Block](/images/arduino-block/lesson-11/step20.png)

21) Repeat what you did from steps 17 to 20, but this time put 1 for the index and put the other RFID tag for the "Text" block value.

![Array Block](/images/arduino-block/lesson-11/step21.png)

22) Create an "If" block that executes **if** the RFID Reader has a value.

![If Block](/images/arduino-block/lesson-11/step22.png)

23) Create a variable inside if the "IF" block and set its value equal to RFID Tag.  The variable should be store a string and be named "RFID Scanned".

![If Block](/images/arduino-block/lesson-11/step23.png)

24) Create another variable called "Found Valid Tag" and set it's value to false. 

![Variable Block](/images/arduino-block/lesson-11/step24.png)

25) Connect a "count" block to the bottom of the of the last created variable block.  Set the "count" block to start at zero and end at 1.

![Count Loop Block](/images/arduino-block/lesson-11/step25.png)

26) Drag an "IF" block inside the count block.

![If Block](/images/arduino-block/lesson-11/step26.png)

27) Connect a "compare" block to the "If" block.  Put the "Get Variable" block as the first thing for the compare block to compare.  Set it equal to the "RFID Scanned" variable.

![Compare Block](/images/arduino-block/lesson-11/step27.png)

28) Connect the "Get Value in Array" block to the second hole of the compare block.  This block allows you to get the values that are stored in the array.  

![Compare Block](/images/arduino-block/lesson-11/step28.png)

29) The first hole "Get Value in Array" block takes in the "Array" variable you created.  The second hole takes in where you want to get that value.  For the index value, we want to use "i".  This will loop through all the values in our array and see if any of them equal the RFID scanned in.

![Get Array Value Block](/images/arduino-block/lesson-11/step29.png)

30) Inside the "If" block set the variable "Found Valid Tag" to true.

![Get Array Value Block](/images/arduino-block/lesson-11/step30.png)

31) Create an "IF / ELSE" block that will print on the LCD screen "Access Granted" if a valid tag was found.  Else print "Access Denied".

![LCD BLocks](/images/arduino-block/lesson-11/step31.png)

32) Upload the code and scan a valid RFID tag.  Then borrow an invalid RFID tag from your neighbor.

![RFID Scan](/images/arduino-block/lesson-11/access_granted.gif)


![RFID Scan](/images/arduino-block/lesson-11/access_denied.gif)

### Challenge

Modify the program to make a valid RFID tag control a servo motor
- Make servo motor rotate 180 degrees
- Wait 3 seconds
- Make it turn back 180 after the 3 seconds.
    
![RFID Servo](/images/arduino-block/lesson-11/servo_challenge.gif)    
    
### Other Challenges

- Make an led blink based on the number of times a valid scan has occurred.
- Make a happy face on the led matrix with arrays and loops.
- Just have fun.