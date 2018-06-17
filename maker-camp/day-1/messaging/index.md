---
layout: page
title: Messaging
excerpt: "Messaging & If Statement."
modified: 2018-06-10
---

## Objective

To learn how to send messages from the computer to Arduino and from the Arduino to the computer.  To learn how to react to messages sent from the computer to the Arduino.

## Kit

![Project](/images/maker-camp/day-1/blink/project.jpg)


## Completed Project

![blink](/images/maker-camp/day-1/messaging/complete.jpg)

## Bill of Materials 

- 1 x Arduino with usb  ($7.00) 
- 1 x breadboard ($2.80)
- 2 x led ($.06)
- 2 x resistors ($.08)
- 4 x wires ($.04)
- total ($9.98)

## USB (Universal Serial Port)

A usb is a cable that will connect an external device to your computer.  Universal means that it will connect most devices to your computer.  Serial means that it will send 0 and 1 one at a time over one piece of wire.  Port in computers lingo means a line of communication for the computer to communicate with the outside world.

![USB](/images/maker-camp/day-1/messaging/usb.png)

## Serial Print Block

This block is used to send messages from your Arduino to your computer.  

![Serial Print](/images/maker-camp/day-1/messaging/serial-print-block.png)


## Read until one character Block

This block is used to get text values from the messages you send from your computer to the Arduino.

![Read until one character](/images/maker-camp/day-1/messaging/read-until-one-character.png)

## How to have the Arduino send a message you your computer.

1) From the "Input/Output" menu drag a "Serial Print" block to the screen.  In the "text" block attached to it write Hello (replace with your name).

![Step 1](/images/maker-camp/day-1/messaging/step_1a.png)

![Step 1](/images/maker-camp/day-1/messaging/step_1b.png)


2) Attach a Delay block to the bottom of the "Serial Print" block

![Step 2](/images/maker-camp/day-1/messaging/step_2.png)

3) Upload the code

![step 3](/images/upload-1.png)

4) Open the Messaging Dialog box, and notice it says Hello, (replace with your name) every second.

![messaging menu](/images/messaging.png)

![Messaging Dialog Box](/images/maker-camp/day-1/messaging/messaging.png)


## Controlling an led through messaging.

1) Connect the led wires to pin 7 and pin 8 of the Arduino, like you did in the blink project.

![Led off](/images/maker-camp/day-1/blink/led-2-arduino_bb.png)

2) Create a variable named "USB Word" and set it equal to an empty "text" block.

![Step 2](/images/maker-camp/day-1/messaging/step_2_computer_to_arduino.png)

3) Connect the "Set Variable" block to the bottom of the "Create Variable" Block.  Set it to use the "USB Word" variable.

![Step 3](/images/maker-camp/day-1/messaging/step_3_computer_to_arduino.png)

4) Connect the "Read until one character" block to the "Set Variable" block.

![Step 4](/images/maker-camp/day-1/messaging/step_4a_computer_to_arduino.png)

![Step 4](/images/maker-camp/day-1/messaging/step_4b_computer_to_arduino.png)

5) Create an "If" block that will execute if "USB Word" variable equals "led 1 on".

![Step 5](/images/maker-camp/day-1/messaging/step_5_computer_to_arduino.png)

6) Inside the "If" block attach a digital write block that will turn on pin 7.  Also attach a serial print block that will print "led one is on. :)"

![Step 5](/images/maker-camp/day-1/messaging/step_6_computer_to_arduino.png)

7) Upload the code

![step 7](/images/upload-1.png)

8) Open the Messaging Dialog box.

![messaging menu](/images/messaging.png)

9) Type "led 1 on" in the input box, and click the send button.

![Step 9](/images/maker-camp/day-1/messaging/step_9a_computer_to_arduino.png)

![led one on](/images/maker-camp/day-1/messaging/complete.jpg)


## Challenge 

Add to code to make that will allow you to control both leds.

- "led 1 on" => led connected to pin 7 on
- "led 1 off" => led connected to pin 7 off
- "led 2 on" => led connected to pin 8 on
- "led 2 off" => led connected to pin 8 off

## Review

- Which block is used send messages from the Arduino to your computer?
- Which block is used to get the messages you send from your computer to the Arduino?
- What kinds of projects would you like to build off that?
- What did you learn?

