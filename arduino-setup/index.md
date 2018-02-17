---
layout: page
title: Arduino Setup Guide
excerpt: "How to setup the Arduino ide."
modified: 2018-01-18T02:46:02+00:00
---

This setup guide assumes that you are using the Arduino Uno.

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

10) [Click here](https://github.com/webghostx/Arduino-DHTLib) to go to the temperature and humidity sensor library's github page.

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

16) [Click here](https://github.com/electronicdrops/RFIDRdm630) to go to the rfid library's github page.

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

 
### Blockly IDE Setup 

24) Download [Node](https://nodejs.org/en/) and install it on your computer. LTS Link is recommended but either will work.

![Arduino IDE](/images/arduino-setup/step40.png)

25) Download [Git](https://git-scm.com/) and install it on your computer. 

![Arduino IDE](/images/arduino-setup/step41.png)

26) If you are using windows machine download and install [Cygwin](https://cygwin.com/install.html).

27) Open Cygwin or a terminal on your computer.  

28) Run this command on the command line:

``` 
cd ~/Desktop/
```

This will navigate you to the desktop folder on your computer in the command line.

29) Run this command on the command line:
 
``` 
git clone https://github.com/phptuts/blocklyarduinoclass.git
``` 

This command will download the arduino ide onto your desktop.

30) Run this command on the command line:

``` 
cd blocklyarduinoclass/
```

31) Run this command on the command line:

``` 
sh start.sh
```

This will start up the BlockyDuino IDE, it will be slow to run the first time you do this. 

32) [Click here](http://localhost:3000) to open the IDE.

![Arduino IDE](/images/arduino-setup/step48.png)

33) Go back to the [webpage](http://localhost:3000).
 
34) Plug your Arduino into the computer, you should see the usb drop down box now be populated.

![Arduino IDE](/images/arduino-setup/step56.png)

35) Open the Input/Output menu option and select the DigitalWrite Block.  Drag it into the main workspace. 

![Arduino IDE](/images/arduino-setup/step57a.png)

![Arduino IDE](/images/arduino-setup/step57b.png)

36) Change the block's drop down box to HIGH and set it to pin 13.

![Arduino IDE](/images/arduino-setup/step58.png)

37) Click the upload button you should see dialog box letting you once the program has been uploaded to the Arduino.

![Arduino IDE](/images/arduino-setup/step59a.png)

![Arduino IDE](/images/arduino-setup/step59b.png)


38) You should see the built in LED turn on.  Congrats you just wrote your some Arduino code!!!
 
![Arduino IDE](/images/arduino-setup/step60.jpg)

Now you are completely setup for all the classes for Arduino.  Can't wait to see there!!!


