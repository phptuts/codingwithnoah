---
layout: page
title: Arduino Android Bluetooth Test
excerpt: "Connecting to Android & Bluetooth "
modified: 2018-10-28
---

## Objective

To learn about the bluetooth blocks and to test that our program works with bluetooth.

## Kit

![kit](/images/app-inventor-arduino-blockly/rgb-led-light-strip/lesson-2-bt-android-test/kit.jpg)

## Completed Project

![completed](/images/app-inventor-arduino-blockly/rgb-led-light-strip/lesson-2-bt-android-test/complete.gif)

## Bill of Materials 

- 1 x Arduino with usb  
- 1 x rgb led light strip 
- 1 x bluetooth module
- 1 x breadboard
- 8 x jumper wires


## Instructions

1) From the bluetooth menu drag a setup block to the top of the screen.  Set it use pin 10 for rx and pin 11 for tx.

![step 1](/images/app-inventor-arduino-blockly/rgb-led-light-strip/lesson-2-bt-android-test/step_1.png#img-phone)

2) Delete the compare block attach to the first if block and replace it with a the bluetooth has data block.

![step 2](/images/app-inventor-arduino-blockly/rgb-led-light-strip/lesson-2-bt-android-test/step_2.png#img-phone)

3) Move the variable block that creates the message variable inside the if block.  Replace the read until string block with the bluetooth version.

![step 3](/images/app-inventor-arduino-blockly/rgb-led-light-strip/lesson-2-bt-android-test/step_3.png#img-phone)

4) Be sure your bluetooth is paired with your device.

![step 4](/images/app-inventor-arduino-blockly/rgb-led-light-strip/lesson-2-bt-android-test/step_4.png#img-phone)

5) Open the [Android Bluetooth App](https://play.google.com/store/apps/details?id=com.giumig.apps.bluetoothserialmonitor&hl=en_US)

6) Select the name of your bluetooth in the app.

![step 6](/images/app-inventor-arduino-blockly/rgb-led-light-strip/lesson-2-bt-android-test/step_6.png#img-phone)

7) Select terminal mode in the app

![step 7](/images/app-inventor-arduino-blockly/rgb-led-light-strip/lesson-2-bt-android-test/step_7.png#img-phone)

8) Type in all the commands and make sure the they work, here are some examples:

- solid-127#255#0|
- double-9#0#18-50#0#50-500
- random

![step 8](/images/app-inventor-arduino-blockly/rgb-led-light-strip/lesson-2-bt-android-test/step_8a.png#img-phone)

![step 8](/images/app-inventor-arduino-blockly/rgb-led-light-strip/lesson-2-bt-android-test/step_8d.jpg)

![step 8](/images/app-inventor-arduino-blockly/rgb-led-light-strip/lesson-2-bt-android-test/step_8c.png#img-phone)

![step 8](/images/app-inventor-arduino-blockly/rgb-led-light-strip/lesson-2-bt-android-test/step_8b.jpg)

![step 8](/images/app-inventor-arduino-blockly/rgb-led-light-strip/lesson-2-bt-android-test/complete.gif)
