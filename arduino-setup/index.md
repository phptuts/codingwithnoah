---
layout: page
title: Arduino Setup Guide
excerpt: "How to setup the Arduino IDE."
modified: 2018-01-18T02:46:02+00:00
---

This setup guide assumes that you are using the Arduino Uno and ESP8266 (ESP-12E) Chip.


1) Download and install the [Arduino IDE](https://www.arduino.cc/en/Main/Software).

2) Plug your Arduino into your computer.

![Arduino Into Computer](/images/arduino-setup/step2.jpg)

3) Open the Arduino IDE.

![Arduino IDE](/images/arduino-setup/step3.png)

4) Go to Tools -> Port and select the USB connected to your Arduino.

![Arduino IDE](/images/arduino-setup/step4.png)

5) Go to Tools -> Board and select the "Arduino/Genuino Uno".

![Arduino IDE](/images/arduino-setup/step5.png)

6) Go to File -> Examples -> Basics -> Blink

![Arduino IDE](/images/arduino-setup/step6.png)

7) Click the check button to compile the sketch. (Sketch means code file).

![Arduino IDE](/images/arduino-setup/step7.png)

8) Upload the code to the Arduino by clicking the play button. This button will compile & upload the code, whereas the check button only compiles.

![Arduino IDE](/images/arduino-setup/step8.png)

9) This code should blink the Arduino built in led every second.

![Arduino Blinking](/images/arduino-setup/step9.gif)

Congrats!!! You just set up the Arduino IDE. Now it's time to install all the libraries we are going to use in the class.

10) [Click here](https://github.com/webghostx/Arduino-DHTLib) to go to the temperature and humidity sensor library's GitHub page.

![Github Temp Sensor Page](/images/arduino-setup/step10.png)

11) Click on the "Download or Clone Button" -> "Download Zip".

![Github Temp Sensor Page](/images/arduino-setup/step11.png)

12) Go to the Arduino IDE -> Sketch -> Include Library -> Add .ZIP Library

![Arduino IDE](/images/arduino-setup/step12.png)

13) Navigate and select the zip file you download.

![Arduino IDE](/images/arduino-setup/step13a.png)

![Arduino IDE](/images/arduino-setup/step13b.png)

14) [Click Here](https://github.com/phptuts/oaklandcodeschool/raw/master/images/arduino-setup/HygrometerSensor.zip) and download the Soil Sensor Library. [Github Code Page](https://github.com/QuentinCG/Arduino-Hygrometer-Sensor-Library)

15) Repeat steps 12 & 13 with the zip file you downloaded.

16) [Click here](https://github.com/electronicdrops/RFIDRdm630) to go to the RFID library’s GitHub page.

![Github RFID](/images/arduino-setup/step16.png)

17) Click on the "Download or Clone Button" -> "Download Zip".

![Github RFID](/images/arduino-setup/step17.png)

18) Repeat steps 12 & 13 with the zip file you downloaded.

19) [Click here](https://cdn.instructables.com/ORIG/F79/UC7X/HKCJMPGV/F79UC7XHKCJMPGV.zip) and download the Led Matrix Library. [Instructable it came from](http://www.instructables.com/id/LED-Matrix-with-Arduino/)

20) Repeat steps 12 & 13 with the zip file you downloaded.

21) [Click here](https://github.com/bblanchon/ArduinoJson) to go to the Arduino JSON library page.

![Github Arduino JSON](/images/arduino-setup/step21.png)


22) Click on the "Download or Clone Button" -> "Download Zip".

![Github Arduino JSON](/images/arduino-setup/step22.png)

23) Repeat steps 12 & 13 with the zip file you downloaded.

24) [Click here](https://github.com/adafruit/Adafruit_NeoPixel) to go to the NeoPixel Library.

![Github Arduino JSON](/images/arduino-setup/neo_pixel_library.png)


25) Repeat steps 12 & 13 with the zip file you downloaded.

### Setting up the ESP-8266 chip with the Arduino ide.

26) Go to Arduino IDE -> Arduino -> Preferences

![Arduino IDE](/images/arduino-setup/step24.png)

27) Paste the URL below into the “Additional Board Manager URLS” input box.

``` 
http://arduino.esp8266.com/stable/package_esp8266com_index.json
```
![Arduino IDE](/images/arduino-setup/step25.png)

28) Click on the display line numbers check box.

![Arduino IDE](/images/arduino-setup/step26.png)

29) Click on the ok button.

![Arduino IDE](/images/arduino-setup/step27.png)

30)  Go to Arduino IDE -> Tools -> Board -> Board Manager

![Arduino IDE](/images/arduino-setup/step28.png)

31) Type "ESP8266" Into the filter input box.

![Arduino IDE](/images/arduino-setup/step29.png)

32) Select the highest **none** "rc" version of the library.

![Arduino IDE](/images/arduino-setup/step30.png)

33) Click on the install button and wait for the library to install.  Close the window once the installation is complete.

![Arduino IDE](/images/arduino-setup/step31.png)


34) [Click here](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers) and download the USB drivers required to power the esp8266 from silicon labs.  Install the driver that is right for your operating system.

![Arduino IDE](/images/arduino-setup/esp8266-driver.png)

![Arduino IDE](/images/arduino-setup/esp8266-driver-mac.png)


35) Plug in ESP8266 Chip into your computer. Notice it has micro USB port.

![Arduino IDE](/images/arduino-setup/ESP-12E.jpg)

36) Go to Tools -> Port and select the USB connected to the ESP8266 chip.
![Arduino IDE](/images/arduino-setup/step33.png)

37) Go to Tools -> Board and select the ESP8266 Chip you are using.  In the kits, we use ESP-12E Chip.

![Arduino IDE](/images/arduino-setup/step34.png)

38) Go to Tools -> Upload Speed and select 115200 speed.

![Arduino IDE](/images/arduino-setup/step35.png)

39) Go to File -> Examples -> ESP8266WIFI -> WiFiScan

![Arduino IDE](/images/arduino-setup/step36.png)

40) Click the upload button on the Arduino IDE.

![Arduino IDE](/images/arduino-setup/step37.png)

41) Click the magnifying glass and open the serial monitor.  Be sure to do this after the code has uploaded.

![Arduino IDE](/images/arduino-setup/step38.png)

42) You should see something like this in the end.
 
![Arduino IDE](/images/arduino-setup/step39.png)
 
### Blockly IDE Setup 

43) Download [Node](https://nodejs.org/en/) and install it on your computer. 

![Arduino IDE](/images/arduino-setup/step40.png)

44) Download [Git](https://git-scm.com/) and install it on your computer. 

![Arduino IDE](/images/arduino-setup/step41.png)

45) If you are using windows, download and install [Cygwin](https://cygwin.com/install.html).

46) Open Cygwin or a terminal on your computer.  

47) Run this command on the command line:

``` 
cd ~/Desktop/
```

You will be navigated you to the desktop folder on your computer in the command line.

48) Run this command on the command line:
 
``` 
git clone https://github.com/phptuts/blocklyarduinoclass.git
``` 

This command will download the Arduino IDE onto your desktop.

49) Run this command on the command line:

``` 
cd blocklyarduinoclass/
```

50) Run this command on the command line:

``` 
sh start.sh
```

BlockyDuino IDE will start up; it will be slow to run the first time you do this. 

51) [Click here](http://localhost:3000) to open the IDE.

![Arduino IDE](/images/arduino-setup/step48.png)

52) Open the Arduino IDE.

53) Go to Tools -> Boards and select the "Arduino/Genuino Uno".
 
![Arduino IDE](/images/arduino-setup/step50.png) 

54) Go to Tools -> Port and select the port the Arduino is on.

![Arduino IDE](/images/arduino-setup/step51.png) 

55) Go to File -> Examples -> Basic -> Blink

![Arduino IDE](/images/arduino-setup/step52.png)

56) Upload the sketch to the Arduino.

![Arduino IDE](/images/arduino-setup/step53.png)

57) You should see you, Arduino, blink as you did in step 9.

![Arduino IDE](/images/arduino-setup/step54.gif)

You will have to do steps 49 to 54 when you use a different board other than the UNO.

58) Go back to the [webpage](http://localhost:3000).
 
59) Plug your Arduino into the computer; you should see the USB drop down box now be populated.

![Arduino IDE](/images/arduino-setup/step56.png)

60) Open the Input/Output menu option and select the DigitalWrite Block.  Drag it into the main workspace. 

![Arduino IDE](/images/arduino-setup/step57a.png)

![Arduino IDE](/images/arduino-setup/step57b.png)

61) Change the block's drop-down box to HIGH and set it to pin 13.

![Arduino IDE](/images/arduino-setup/step58.png)

62) Click the upload button. You should see dialog letting you know you have successfully uploaded the code.

![Arduino IDE](/images/arduino-setup/step59a.png)

![Arduino IDE](/images/arduino-setup/step59b.png)


63) You should see the built-in LED turn on.  Congrats you just wrote some Arduino code!!!
 
![Arduino IDE](/images/arduino-setup/step60.jpg)

Now you are entirely set up for all the classes for Arduino.  Can't wait to see there!!!




