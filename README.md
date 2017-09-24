# Hybrid mobile application for Science and Technology Entry Program (STEP)
This is a hybrid mobile application developed in Ionic 3 and Angular 4 with Firebase and AngularFire for <strong>Science and Technology Education Program(STEP)</strong> which will be used for registration of the students for Robotics competition. The application is integrated with Firebase database to store the data.
<hr>
<b>AngularFire2</b> is an official Angular library for Firebase. <br/><br/>
To install AngularFire 2
<blockquote>$npm install angularfire2 firebase --save</blockquote>
<hr>
<h3>Application interface for iOS and Android platforms</h3>
<img src="https://github.com/patilankita79/MobileAppForSTEP/blob/master/Screenshots/Screenshot%202017-09-10%2021.58.33.png" />
<img src="https://github.com/patilankita79/MobileAppForSTEP/blob/master/Screenshots/Screenshot%202017-09-10%2021.59.05.png" />
<img src="https://github.com/patilankita79/MobileAppForSTEP/blob/master/Screenshots/Screenshot%202017-09-10%2021.59.16.png" />

<hr>
<h3>Installation: </h3>
<blockquote>$npm install</blockquote>

<h3>Serve the application to browser: </h3>
<blockquote>$ionic serve</blockquote>


<h3>To view application in mobile simulated platforms</h3>
<blockquote>$ionic serve --l</blockquote>
OR
<blockquote>$ionic lab</blockquote>

<h3>Adding platforms </h3>

<i>To add android platform</i><br/>
<blockquote>$ionic cordova platform add android</blockquote>
<br/>
<i>To add iOS platform</i><br/>
<blockquote>$ionic cordova platform add ios</blockquote>
<h3>Build an android apk</h3>
<blockquote>$ionic cordova build android</blockquote>
<hr> 
While building an APK you might yet an error => <strong>Module not found: Error: Can't resolve 'promise-polyfill' </strong><br>
Refer this issue => https://github.com/ionic-team/ionic-app-scripts/issues/1001

<b>Solution: </b>
In the project directory run the following command,
<blockquote>$npm install promise-polyfill --save-exact</blockquote>

and then run the command
<blockquote>$ionic cordova build android</blockquote>

