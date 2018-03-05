---
layout: page
title: Arduino 113 - Bluetooth
excerpt: "How to use Bluetooth ."
modified: 2018-02-22
---

## Project Kit

![Arduino Kit](/images/arduino-block/lesson-13/kit.jpg) 

## Bill of Materials

- 1 x Arduino Uno
- 1 x USB Arduino Cable
- 1 x RGB led 
- 4 x male to female jumper wires

## Steps

Follow the directions in [Arduino Setup Guide](/arduino-setup) if your computer has not been set up yet.  

1) Follow the directions [Arduino Blockly Start Guide](/arduino-blockly-start) to start the [Arduino Blockly Webpage](http://localhost:3000).
 
2) Open the [Arduino Blockly Webpage](http://localhost:3000).

3) Take a jumper wire and plug one end into 5v of Bluetooth module and the other end into 5v of the Arduino.

![Arduino Bluetooth](/images/arduino-block/lesson-13/bluetooth_5v.jpg) 

4) Take a jumper wire and plug one end into the ground of Bluetooth module and the other end into a ground pin of the Arduino.

![Arduino Bluetooth](/images/arduino-block/lesson-13/bluetooth_gnd.jpg) 

5) Take a jumper wire and plug one end into tx of Bluetooth module and the other end into pin 6 of the Arduino.

![Arduino Bluetooth](/images/arduino-block/lesson-13/bluetooth_tx.jpg) 

6) Take a jumper wire and plug one end into Rx of Bluetooth module and the other end into pin 7 of the Arduino.

![Arduino Bluetooth](/images/arduino-block/lesson-13/bluetooth_rx.jpg) 

7) Drag the Bluetooth setup block onto the screen.

![Bluetooth Menu](/images/arduino-block/lesson-13/menu_bluetooh.png) 

![Bluetooth Menu](/images/arduino-block/lesson-13/bluetooth_block.png) 

### A little about Bluetooth

The way these Bluetooth modules works is that it will have a name and a pin.  A pin, in Bluetooth, is a four-digit code that is required to hook up to the Bluetooth device.  Tx means transmit, and Rx means receive.  So the way it works is that the Rx on the Bluetooth goes to the tx pin of the Arduino.  RX->TX, and visa versa.  Don't worry too much about this.  I just wanted to explain some of the basics.

8) Use these setting for "setup Bluetooth" block.

- Name -> Text block that equals "bluetooth_client_{yourname}", {yourname} replace with your actual name.
- Pin -> Number Block that equals 4444
- RX -> 6
- TX -> 7

![Bluetooth setup block](/images/arduino-block/lesson-13/bluetooth_block_filled.png)

9) Drag an IF block onto the screen.

![IF](/images/arduino-block/lesson-13/if_block.png) 

10) Connect the "bluetooth have data" block to the "if" block.

![Bluetooth Has Data](/images/arduino-block/lesson-13/bluetooth_have_data.png) 

11) Connect a "Serial Print" block to the "do" part of the "If" block.

![Serial Monitor](/images/arduino-block/lesson-13/serial_monitor_block.png) 

12) Connect a Bluetooth "Read Data Until This String" block to the "Serial Print" block.

![Bluetooth Menu](/images/arduino-block/lesson-13/bluetooth_menu_read.png) 

![Bluetooth Menu](/images/arduino-block/lesson-13/bluetooth_read_until_string_block.png) 

13) Connect a "Text" block to the "Rad Data Until This String" block.  Then set the value of the "Text" block to this "\|".

![Bluetooth Menu](/images/arduino-block/lesson-13/final_step.png)
 
14) Download the [Arduino Bluetooth Controller](https://play.google.com/store/apps/details?id=com.giumig.apps.bluetoothserialmonitor&hl=en) app to your phone.  If you have an iPhone try this [app](https://itunes.apple.com/us/app/handy-bluetooth-arduino-controller/id985786496?mt=8), sorry I can't test it because I don't have an iPhone, but it should work similarly.

15) Upload the code to the Arduino and open your serial monitor.


## Android Instructions / Get with me on IOS / Windows

1) Open the top drop-down menu on every screen and select the Bluetooth option

![Bluetooth Option](/images/arduino-block/lesson-13/phone/dropdown_android.png#img-phone)

2) Select more setting at the bottom of the screen.

![More Settings](/images/arduino-block/lesson-13/phone/bluetooth_menu_more_settings.png#img-phone)

3) Select the name that you used to name the Bluetooth device on your phone.

![list of bluetooth devices](/images/arduino-block/lesson-13/phone/list_of_bluetooth_options.png#img-phone)

4) Enter the passcode for the Bluetooth device, in our case; it's "4444".  Click "Ok" once done.

![passcode bluetooth](/images/arduino-block/lesson-13/phone/enter_passcode_part_1.png#img-phone)

![passcode bluetooth](/images/arduino-block/lesson-13/phone/enter_passcode_part_2.png#img-phone)

5) Open the Arduino Bluetooth app you just downloaded.

![App](/images/arduino-block/lesson-13/phone/open_app.png#img-phone)

6) Select the Bluetooth option your Arduino is connected to.

![select bluetooth](/images/arduino-block/lesson-13/phone/select_bluetooth_client.png#img-phone)

7) Select the "Terminal" option.

![terminal option](/images/arduino-block/lesson-13/phone/select_terminal.png#img-phone)

9) Type the word "hello world" and click the check button.  You should see the word "hello world" appear on the Serial Monitor.

![terminal option](/images/arduino-block/lesson-13/phone/type_hello_in_terminal.png#img-phone)

![serial monitor](/images/arduino-block/lesson-13/final_product.png#img-phone)

## Challenge

Take the code you wrote in the last lesson and adjust it to work with Bluetooth instead of the serial monitor.  Be sure to save the code before you move on.

![challenge app](/images/arduino-block/lesson-13/phone/challenge_app.png#img-phone)

![challenge led](/images/arduino-block/lesson-13/challenge_led.jpg)
