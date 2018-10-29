---
layout: page
title: Android Bluetooth RGB LED App
excerpt: "How to build an Android App that controls an RGB LED Light With Bluetooth and Arduino."
modified: 2018-10-16
---

## Objective

To learn how to build an Arduino / Android app that can control an rgb led light strip with via bluetooth.



## How this works

![Android Bluetooth Communication Chart](https://www.websequencediagrams.com/cgi-bin/cdraw?lz=dGl0bGUgQW5kcm9pZCBBcmR1aW5vIEJsdWV0b290aCBDb21tdW5pY2F0aW9uCgoAIAlwcC0-AB0JOgA4CWFzayBcbiB0byBjb25uZWN0IHRvIGIARQkKAFAJLT4AQAs6AGYLYWxsb3dzXG4gYQCBDQdkZXZpY2UASAsAbBlTZW5kIGEgbWVzc2FnAC0FAHEJAGkQdWlubwArBnMAJAwAgXkHCgCCAQctPgCCCgc6IEV4YW1pbmUAJAphbmRcbiBkZXRlcgATBmxpZ2h0IHBhdGVybgA3CkwAEQVTdHJpcDoAglkGb24gVHVybnMgb24gUkdCIAAdBQoK&s=napkin)

Based on this plan here is what we need tackle:


### Arduino Code

- Code to get the message from the bluetooth module
- Code to parse that message
- Code to turn on led light strip

### Android Code

- Code to connect the Android App to the bluetooth
- Code to allow the user to create pattern / message to send.  The user of the app won't have to know about this per say.
- Code to send the message.

## How we are going to take on the project

1) We'll start of by writing all the code to handle examining the message from the bluetooth to the Arduino. We'll test by sending messages to the Arduino via usb instead of bluetooth and make sure that is working.
3) We'll then replace the serial monitor blocks with bluetooth blocks and manually assemble send messages through the Arduino Bluetooth App.
4) We'll then build An Android App Inventor App that will send the messages for us.

These will each be divided up into their own coding lessons, but for now we are going to attach the RGB Led light strip to to board.  If you have not please setup you arduino bluetooth app following these [instructions](/arduino-blockly/bluetooth).
  

## RGB LED Instruction

Take the led light strip out of the bag. Notice the arrow and direction it is pointing. You want to hook the wires at the start of the pointing arrow.

![led light strip pre setup](/images/arduino-block/rbg-led-strip/step_2.jpg)

1) Connect a jumper wire from middle wire of the rgb led light strip to the Arduino pin A0.

![step 1](/images/app-inventor-arduino-blockly/rgb-led-light-strip/step_1.jpg)

2) Connect a jumper wire from the ground wire of the rgb light strip to the (-) blue line of the breadboard.

![step 2](/images/app-inventor-arduino-blockly/rgb-led-light-strip/step_2.jpg)

3) Connect a jumper wire from the 5v of rgb led light strip to the (+) red line of the breadboard.

![step 3](/images/app-inventor-arduino-blockly/rgb-led-light-strip/step_3.jpg)

## Lessons

1) [Parsing an messages with the Arduino](/app-inventor-arduino-blockly/rgb-led-light-strip/lesson-1-parsing-messages)

2) [Bluetooth messages with the Arduino](/app-inventor-arduino-blockly/rgb-led-light-strip/lesson-2-bt-android-test)

3) [Android App]()


