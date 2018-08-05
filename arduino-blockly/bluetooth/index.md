---
layout: page
title:  Bluetooth
excerpt: "How to use Bluetooth ."
modified: 2018-07-28
---

## Objective

To learn how to change the color of rgb led with Arduino and bluetooth. 

## Project Kit

![Arduino Kit](/images/arduino-block/bluetooth/kit.jpg) 

## Completed Project

![challenge led](/images/arduino-block/bluetooth/challenge_led.jpg)

## Bill of Materials

- 1 x Arduino Uno
- 1 x USB Arduino Cable
- 1 x RGB led 
- 3 x 150 ohm resistors
- 4 x male to female jumper wires
- 4 x male to male jumper wires


## Bluetooth

The way bluetooth works is that it will have a name and a pin.  A pin, in Bluetooth, is a four-digit code that is required to hook up to the Bluetooth device.  Bluetooth sends a radio wave through the air to send data from one device to another. 

## Bluetooth setup block

This block is used to setup the bluetooth connection.  Here you will name the bluetooth and you will set the "TX" and "RX" pins.  TX means transmit, as in sending a message.  RX means receive, as in getting a message.

![bluetooth setup block](/images/arduino-block/bluetooth/setup-bluetooth.png)

## Bluetooth has data block

This block will return a true or false value.  It let's you know if there is a message available by returning true.

![bluetooth has data](/images/arduino-block/bluetooth/bluetooth-have-data.png)

## Bluetooth Read until character block

This block will read a message until it hits a certain string or the message ends.  This block will return the message sent as a string / text value.

![bluetooth read until](/images/arduino-block/bluetooth/bluetooth-read-until-data.png)

## Instructions

1) Take a jumper wire and plug one end into 5v of Bluetooth module and the other end into 5v of the Arduino.

![Arduino Bluetooth](/images/arduino-block/bluetooth/bluetooth_5v.jpg) 

2) Take a jumper wire and plug one end into the ground of Bluetooth module and the other end into a ground pin of the Arduino.

![Arduino Bluetooth](/images/arduino-block/bluetooth/bluetooth_gnd.jpg) 

3) Take a jumper wire and plug one end into tx of Bluetooth module and the other end into pin 6 of the Arduino.

![Arduino Bluetooth](/images/arduino-block/bluetooth/bluetooth_tx.jpg) 

4) Take a jumper wire and plug one end into Rx of Bluetooth module and the other end into pin 7 of the Arduino.

![Arduino Bluetooth](/images/arduino-block/bluetooth/bluetooth_rx.jpg) 

5) Drag the Bluetooth setup block onto the screen.

![Bluetooth Menu](/images/arduino-block/bluetooth/menu_bluetooh.png) 

![Bluetooth Menu](/images/arduino-block/bluetooth/bluetooth_block.png) 


6) Use these setting for "setup Bluetooth" block.

- Name -> Text block that equals "bluetooth_client_{yourname}", {yourname} replace with your actual name.
- Pin -> Number Block that equals 4444
- RX -> 6
- TX -> 7

![Bluetooth setup block](/images/arduino-block/bluetooth/bluetooth_block_filled.png)

7) Drag an IF block onto the screen.

![IF](/images/arduino-block/bluetooth/if_block.png) 

8) Connect the "bluetooth have data" block to the "if" block.

![Bluetooth Has Data](/images/arduino-block/bluetooth/bluetooth_have_data.png) 

9) Connect a "Serial Print" block to the "do" part of the "If" block.

![Serial Monitor](/images/arduino-block/bluetooth/serial_monitor_block.png) 

10) Connect a Bluetooth "Read Data Until This String" block to the "Serial Print" block.

![Bluetooth Menu](/images/arduino-block/bluetooth/bluetooth_menu_read.png) 

![Bluetooth Menu](/images/arduino-block/bluetooth/bluetooth_read_until_string_block.png) 

11) Connect a "Text" block to the "Rad Data Until This String" block.  Then set the value of the "Text" block to this "\|".

![Bluetooth Menu](/images/arduino-block/bluetooth/final_step.png)
 
12) Download the [Arduino Bluetooth Controller](https://play.google.com/store/apps/details?id=com.giumig.apps.bluetoothserialmonitor&hl=en) app to your phone.  If you have an iPhone try this [app](https://itunes.apple.com/us/app/handy-bluetooth-arduino-controller/id985786496?mt=8), sorry I can't test it because I don't have an iPhone, but it should work similarly.

13) Upload the code to the Arduino and open your serial monitor.


## Android Instructions / Get with me on IOS / Windows

1) Open the top drop-down menu on every screen and select the Bluetooth option

![Bluetooth Option](/images/arduino-block/bluetooth/phone/dropdown_android.png#img-phone)

2) Select more setting at the bottom of the screen.

![More Settings](/images/arduino-block/bluetooth/phone/bluetooth_menu_more_settings.png#img-phone)

3) Select the name that you used to name the Bluetooth device on your phone.

![list of bluetooth devices](/images/arduino-block/bluetooth/phone/list_of_bluetooth_options.png#img-phone)

4) Enter the passcode for the Bluetooth device, in our case; it's "4444".  Click "Ok" once done.

![passcode bluetooth](/images/arduino-block/bluetooth/phone/enter_passcode_part_1.png#img-phone)

![passcode bluetooth](/images/arduino-block/bluetooth/phone/enter_passcode_part_2.png#img-phone)

5) Open the Arduino Bluetooth app you just downloaded.

![App](/images/arduino-block/bluetooth/phone/open_app.png#img-phone)

6) Select the Bluetooth option your Arduino is connected to.

![select bluetooth](/images/arduino-block/bluetooth/phone/select_bluetooth_client.png#img-phone)

7) Select the "Terminal" option.

![terminal option](/images/arduino-block/bluetooth/phone/select_terminal.png#img-phone)

9) Type the word "hello world" and click the check button.  You should see the word "hello world" appear on the Serial Monitor.

![terminal option](/images/arduino-block/bluetooth/phone/type_hello_in_terminal.png#img-phone)

![serial monitor](/images/arduino-block/bluetooth/final_product.png#img-phone)

## Challenge

Use what you learned in [RGB LED lesson](/arduino-blockly/rgb-led) and [Controlling an RGB LED Lesson](/arduino-blockly/rgb-led-control) to make a bluetooth controlled rgb led.

![challenge app](/images/arduino-block/bluetooth/phone/challenge_app.png#img-phone)

![challenge led](/images/arduino-block/bluetooth/challenge_led.jpg)
