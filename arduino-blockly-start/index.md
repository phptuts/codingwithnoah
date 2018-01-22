---
layout: page
title: Arduino Blockly Startup Guide
excerpt: "How to get going"
modified: 2018-01-20
---

1) Plug your Arduino into your computer.

![Arduino IDE](/images/arduino-blockly-start/step1.jpg) 

2) Run this command on the command line.  (If on windows use cygwin.)

``` 
cd ~/Desktop/blocklyarduinoclass && sh start.sh
```

![Arduino IDE](/images/arduino-blockly-start/step2.png) 

3) [Click here](http://localhost:3000) and go to the Arduino Blockly webpage.

![Arduino IDE](/images/arduino-blockly-start/step3.png) 

4) Click on the reset button, if you see a success message you are done.

![Arduino IDE](/images/arduino-blockly-start/step4a.png) 

![Arduino IDE](/images/arduino-blockly-start/step4b.png) 


If you don't see a success message you will need to upload some code using the Arduino IDE.  This should only happen if you have used another different type or Arduino.  Right now the IDE will only upload to the Arduino Uno.

5) Go back to the command line and type (control + c).  This will turn off the webpage.

![Arduino IDE](/images/arduino-blockly-start/step5.png) 

6) Open the Arduino IDE.

![Arduino IDE](/images/arduino-blockly-start/step6.png) 

7) Go to Tools -> Boards and select the "Arduino/Genuino Uno".

![Arduino IDE](/images/arduino-blockly-start/step7.png) 

8) Go to Tools -> Port and select the port the Arduino is on.

![Arduino IDE](/images/arduino-blockly-start/step8.png) 

9) Go to File -> Examples -> Basic -> Blink

![Arduino IDE](/images/arduino-blockly-start/step9.png) 

10) Click the upload button. You should see the Arduino built in led blink every second.

![Arduino IDE](/images/arduino-blockly-start/step10.png) 

![Arduino IDE](/images/arduino-blockly-start/step10.gif) 

11) Go back to the terminal and run this command.

``` 
cd ~/Desktop/blocklyarduinoclass && sh start.sh
```
![Arduino IDE](/images/arduino-blockly-start/step11.png) 

12) Go back to the [Arduino Blockly webpage](http://localhost:3000) and click the reset button.

![Arduino IDE](/images/arduino-blockly-start/step12b.png) 

![Arduino IDE](/images/arduino-blockly-start/step12a.png) 

If you still see an error message contact me at glaserpower [at] gmail.com.