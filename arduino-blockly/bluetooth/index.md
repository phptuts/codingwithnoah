---
layout: page
title:  Bluetooth
excerpt: "How to use Bluetooth with Arduino."
modified: 2018-10-09
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

![bluetooth setup block](/images/arduino-block/bluetooth/setup_block.png#img-phone)

## Bluetooth has data block

This block will return a true or false value.  It let's you know if there is a message available by returning true.

![bluetooth has data](/images/arduino-block/bluetooth/bluetooth-have-data.png)

## Bluetooth Read until character block

This block will read a message until it hits a certain string or the message ends.  This block will return the message sent as a string / text value.

![bluetooth read until](/images/arduino-block/bluetooth/bluetooth-read-until-data.png)


## Instructions

1) Connect a jumper wire from (+) red line of the breadboard to the 5v of the Arduino.

![step 1](/images/arduino-block/bluetooth/step_1.jpg)

2) Connect a jumper wire from (-) blue line of the breadboard to the gnd (ground) of the Arduino.

![step 2](/images/arduino-block/bluetooth/step_2.jpg)

3) Insert the bluetooth module into the breadboard (35, E) to (40, E).

![step 3](/images/arduino-block/bluetooth/step_3.jpg)

4) Connect a jumper wire from the (+) red line of the breadboard to (39, A).

![step 4](/images/arduino-block/bluetooth/step_4.jpg)

5) Connect a jumper wire from the (-) blue line of the breadboard to (38, A). 

![step 5](/images/arduino-block/bluetooth/step_5.jpg)

6) Connect a jumper wire from pin 11 of the Arduino to (37, A) / TX of the bluetooth.

![step 6](/images/arduino-block/bluetooth/step_6.jpg)

7) Connect a jumper wire form pin 10 of the Arduino to (36, A) / RX of the bluetooth.

![step 7](/images/arduino-block/bluetooth/step_7.jpg)

8) Open the Arduino IDE and paste in the code below.

```
#include <SoftwareSerial.h>

SoftwareSerial blueSerial(11, 10); // RX, TX

void setup()
{
  Serial.begin(38400);
  blueSerial.begin(38400);
}

void loop()
{
  if (blueSerial.available())
  {
    Serial.write(blueSerial.read());
  }
  if (Serial.available())
  {
    blueSerial.write(Serial.read());
  }
}
```

![step 8](/images/arduino-block/bluetooth/step_8.png)


9) While holding the button on the bluetooth unplug and replug the ground from the breadboard.  You should notice that the bluetooth light starts to blink a lot slower.

![step 9](/images/arduino-block/bluetooth/step_9.gif#img-phone)


10) Go to tools -> serial monitor.

![step 10](/images/arduino-block/bluetooth/step_10.png#img-phone)

11) Set the baud rate of the serial monitor to 38600.

![step 11](/images/arduino-block/bluetooth/step_11.png#img-phone)

12) Type in the command "AT" to the serial monitor.  You should get an ok

![step 12](/images/arduino-block/bluetooth/step_12a.png#img-phone)

![step 12](/images/arduino-block/bluetooth/step_12b.png#img-phone)

13) Type the following commands into the serial monitor.

- AT+NAME=bt_{replace_your_name}
- AT+UART=9600,0,0
- AT+PSWD=3333
- AT+RESET

Once you type the reset command the bluetooth light will start flashing a lot faster.

![step 13](/images/arduino-block/bluetooth/step_13.gif)

14) Open the Arduino Blockly IDE & close the Arduino IDE.

![step 14](/images/arduino-block/bluetooth/step_14.png)

15) Drag a bluetooth setup block to the workspace.  Set it to use rx pin 10 and tx pin 11.

![step 15a](/images/arduino-block/bluetooth/step_15a.png#img-phone) 

![step 15b](/images/arduino-block/bluetooth/step_15b.png#img-phone) 

16) Drag an IF block onto the screen.

![IF](/images/arduino-block/bluetooth/if_block.png#img-phone) 

16) Connect the "bluetooth have data" block to the "if" block.

![Bluetooth Has Data](/images/arduino-block/bluetooth/bluetooth_have_data.png#img-phone) 

17) Connect a "Serial Print" block to the "do" part of the "If" block.

![Serial Monitor](/images/arduino-block/bluetooth/serial_monitor_block.png#img-phone) 

18) Connect a Bluetooth "Read Data Until This String" block to the "Serial Print" block.

![Bluetooth Menu](/images/arduino-block/bluetooth/bluetooth_menu_read.png#img-phone) 

![Bluetooth Menu](/images/arduino-block/bluetooth/bluetooth_read_until_string_block.png#img-phone) 

19) Connect a "Text" block to the "Rad Data Until This String" block.  Then set the value of the "Text" block to this "\|".

![Bluetooth Menu](/images/arduino-block/bluetooth/final_step.png#img-phone)
 

20) Upload the code to the Arduino.

![upload code](/images/upload-1.png)
 
21) Download the [Arduino Bluetooth Controller](https://play.google.com/store/apps/details?id=com.giumig.apps.bluetoothserialmonitor&hl=en) app to your phone.  If you have an iPhone try this [app](https://itunes.apple.com/us/app/handy-bluetooth-arduino-controller/id985786496?mt=8), sorry I can't test it because I don't have an iPhone, but it should work similarly.


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
