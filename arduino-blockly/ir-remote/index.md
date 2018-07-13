---
layout: page
title: IR Remote Controlled RGB Led
excerpt: "How to make ir remote controlled rgb led."
modified: 2018-07-08
---

## Objective

To learn how to take information from an ir remote and control and rgb led with it.

## Kit

![kit](/images/arduino-block/ir-remote/kit.jpg)    

## Completed Project

![complete](/images/arduino-block/ir-remote/complete.jpg)    

## Bill of Materials

- 1 x Arduino and usb cable
- 1 x RGB Led
- 1 x breadboard
- 1 x ir remote and remote control
- 3 x 150 Ohm Resistor
- 3 x m to f wires
- 4 x m to m wires

## IR Remote Receiver

This is use to send the signal that is received from the remote to the Arduino.  It does this by sending the the data to the A0 pin.

![ir remote](/images/arduino-block/ir-remote/ir_remote.jpg)    


## Has Reading Block

This block is used to see if the ir receiver has received a signal.  Returns true if a signal has been received.

![ir remote has reading block](/images/arduino-block/ir-remote/has_reading_block.png#img-phone)    

## Get code from button

This block will return a string representing the button that was pressed.

![ir remote get code from button block](/images/arduino-block/ir-remote/get_code_from_button.png#img-phone)    

## Read Again Block

This block must be used to read another ir remote again.
 
![ir remote read again block](/images/arduino-block/ir-remote/read_again_block.png#img-phone) 
    
## Instruction

1) Connect the middle pin of the ir receiver to 5v of the Arduino.

![step 1](/images/arduino-block/ir-remote/step_1.jpg)    

2) Connect the (-) ground pin of the ir receiver to ground (gnd) of the Arduino.

![step 2](/images/arduino-block/ir-remote/step_2.jpg)    

3) Connect the sensor (s) pin of the ir receiver to A0 of the Arduino.

![step 3](/images/arduino-block/ir-remote/step_3.jpg)    

4) Plug the rgb led into the breadboard noting what each wire is responsible for and where it is.

![step 4](/images/arduino-block/ir-remote/step_4a.jpg)    

![step 4](/images/arduino-block/ir-remote/step_4b.jpg)    

5) Attach a resistor to the "R" pin of the rgb led on the breadboard.

![step 5](/images/arduino-block/ir-remote/step_5.jpg)    

6) Attach a resistor to the "G" pin of the rgb led on the breadboard.

![step 6](/images/arduino-block/ir-remote/step_6.jpg)    

7) Attach a resistor to the "B" pin of the rgb led on the breadboard.

![step 7](/images/arduino-block/ir-remote/step_7.jpg)    

8) Attach a wire on the breadboard from that will connect to "R" pin of the led to pin 6 of the Arduino.

![step 8](/images/arduino-block/ir-remote/step_8.jpg)    

9) Attach a wire on the breadboard from that will connect to "ground" pin of the led to pin gnd of the Arduino

![step 9](/images/arduino-block/ir-remote/step_9.jpg)    

10) Attach a wire on the breadboard from that will connect to "G" pin of the led to pin 9 of the Arduino.

![step 10](/images/arduino-block/ir-remote/step_10.jpg)    

11) Attach a wire on the breadboard from that will connect to "B" pin of the led to pin 10 of the Arduino.

![step 11](/images/arduino-block/ir-remote/step_11.jpg)    

12) Tape the wires connected to the receiver to the table to stabilize the angle it is pointing.

![step 12](/images/arduino-block/ir-remote/step_12.jpg)    

13) Drag the "setup block" from the ir remote menu to the workspace.  Set it to use pin A0.

![step 13](/images/arduino-block/ir-remote/step_13a.png#img-phone)    

![step 13](/images/arduino-block/ir-remote/step_13b.png#img-phone)    

14) Next drag an if block onto the screen.

![step 14](/images/arduino-block/ir-remote/step_14.png#img-phone)    

15) Connect the "Has Reading" block to the if block.

![step 15](/images/arduino-block/ir-remote/step_15a.png#img-phone)    

![step 15](/images/arduino-block/ir-remote/step_15b.png#img-phone)    

16) Create a variable name code that is of type "text/string".  

![step 16](/images/arduino-block/ir-remote/step_16.png#img-phone)    

17) From the ir remote menu connect the "Get Code" block to the create variable block.

![step 17](/images/arduino-block/ir-remote/step_17.png#img-phone)    

18) Connect a debug block to the bottom of the create variable.

![step 18](/images/arduino-block/ir-remote/step_18.png#img-phone)    

19) From the ir remote menu connect the "Read Again" block to the debug block.

![step 19](/images/arduino-block/ir-remote/step_19.png#img-phone)    

20) Upload the code

![step 20](/images/upload-1.png)

21) Press the one button the remote and open the debug screen.  For me the value received by pressing the 1 button on the remote is "ffa25d".  For you it might be different.

![step 19](/images/arduino-block/ir-remote/step_21.png#img-phone)    

22) Right an if state that will execute if that code is present.  Also delete the debug block.

![step 22](/images/arduino-block/ir-remote/step_22.png#img-phone)    

23) From the input/output menu drag 3 analog write blocks inside the if statement.  Set the first one to use pin 6, the red pin on the led, and set it's value to 150.  The other should use 9 and 10.  Their values should both be 0.

![step 23](/images/arduino-block/ir-remote/step_23.png#img-phone)
    
24) Upload the code and then press the 1 button on the remote.
    
![step 24](/images/upload-1.png)    

![step 23](/images/arduino-block/ir-remote/step_24.jpg)    

## Challenge 1) 

Figure out the code for hitting button 2.  Then use that to create a block of code to change the led to green you press it.  Do the same thing for button 3, expect use blue.

![challenge 1](/images/arduino-block/ir-remote/challege_1a.jpg)    

![challenge 1](/images/arduino-block/ir-remote/challege_1b.jpg)    

## Challenge 2) 

You are going to a customizable purple led.

Create some code that will will increase the red values when you press the up arrow and decrease it when you press the down arrow.  Also make it so that when you push the right arrow it increase the blue value and the left arrow decreases the blue value.


![challenge 1](/images/arduino-block/ir-remote/challenge.gif)    
