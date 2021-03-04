# Memory leak in @react-navigation/native + react-native-screens

This repository will help you understand when exactly the memory leak can occur in your project while using `@react-navigation/native` along with `react-native-screens`

---

## A. Steps taken to create this repo

1. Create new react-native app using the following command

```npx react-native init LeakApp```

2. Add dependencies

```yarn add @react-navigation/native react-native-screens```

---

## B. Steps taken to create the memory leak

1. Create an `src` folder

```mkdir src```

2. Create 3 Pages and a Stack

```touch src/TestPage1.js src/TestPage2.js src/TestPage3.js src/TestStack.js```

3. Copy the contents given in the respective files

[TestPage1](./src/TestPage1.js)  
[TestPage2](./src/TestPage2.js)  
[TestPage3](./src/TestPage3.js)  
[TestStack](./src/TestStack.js)

---

## C. Steps to reproduce memory leak

You can either follow steps given in point number `a` and `b` or you can just clone this repo

```git clone https://github.com/abhaynpai/rn-screens-leak.git```

Then simply run  

```npx react-native run-android```  

This will run the project in Debug Mode. But you can also create a debugable APK as `debuggable` flag is set in [build.gradle](./android/app/build.gradle).  

Now you can also run the following command to create a debuggable APK.

```npm run build-android-release```

Install the APK any device. Make sure you have enabled USB debugging.

After installing the APK open `Android Studio` -> Open Profiler -> Attach session -> Device Name -> Other processes -> com.leakapp

Click on memory graph then follow the procedure given below

1. As soon as the app opens then take a memory dump
2. Click on `PAGE 2`
3. Again take a memory dump
4. Click on `PAGE 3`
5. Again take a memory dump

---

## D. Observation

Memory dump taken in Step 1 will have no leak at all. But as you enter a page and take a memory dump you can see a memory leak. Now again when you enter the 3rd page in the stack you can observe another leak in the memory dump.

---
## E. Solution

I am working on it! :)

If you already know a solution to this issue please let me know.

---

## F. A YouTube video showcasing this issue

<a href="https://youtu.be/_xtXRnA-vEE" target="_blank"><img src="https://img.youtube.com/vi/_xtXRnA-vEE/0.jpg" 
alt="IMAGE ALT TEXT HERE" width="240" height="180" /></a>

