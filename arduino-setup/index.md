---
layout: page
title: Arduino Setup Guide
excerpt: "How to setup the arduino ide."
modified: 2018-01-18T02:46:02+00:00
---

This setup guide assumes that you are using the Arduino Uno and ESP8266 (ESP-12E) Chip.


1) Download and install the [Arduino IDE](https://www.arduino.cc/en/Main/Software).

2) Plug your Arduino into your computer.

![Arduino Into Computer](/images/arduino-setup/step2.jpg)

3) Open the Arduino IDE.

![Arduino IDE](/images/arduino-setup/step3.png)

4) Go to Tools -> Port and select the usb connection your arduino is hooked into.

![Arduino IDE](/images/arduino-setup/step4.png)

5) Go to Tools -> Board and select the "Arduino/Genuino Uno".

![Arduino IDE](/images/arduino-setup/step5.png)

6) Go to File -> Examples -> Basics -> Blink

![Arduino IDE](/images/arduino-setup/step6.png)

7) Click the check  button to compile the sketch. (Sketch means code file).

![Arduino IDE](/images/arduino-setup/step7.png)

8) Upload the code to the arduino by clicking the play button.  This button will compile and upload the code, where as the check button only compiles.

![Arduino IDE](/images/arduino-setup/step8.png)

9) This code should blink the arduino built in led every second.

![Arduino Blinking](/images/arduino-setup/step9.gif)

Congrats!!! You just setup the arduino ide. Now it's time to install all the libraries we are going to use in the class.

10) [Click here](https://github.com/webghostx/Arduino-DHTLib) to go to the temperature and humidity sensor's github page.

![Github Temp Sensor Page](/images/arduino-setup/step10.png)

11) Click on the "Download or Clone Button" -> "Download Zip".

![Github Temp Sensor Page](/images/arduino-setup/step11.png)

12) Go to the Arduino IDE -> Sketch -> Include Library -> Add .ZIP Library

![Arduino IDE](/images/arduino-setup/step12.png)

13) Navigate and select the zip file you download.

![Arduino IDE](/images/arduino-setup/step13a.png)

![Arduino IDE](/images/arduino-setup/step13b.png)

14) 