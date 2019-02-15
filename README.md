
# react-native-cz-button

## Getting started

`$ npm install react-native-cz-button --save`

### Mostly automatic installation

`$ react-native link react-native-cz-button`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-cz-button` and add `RNCzButton.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNCzButton.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.chenzhe.button.RNCzButtonPackage;` to the imports at the top of the file
  - Add `new RNCzButtonPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-cz-button'
  	project(':react-native-cz-button').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-cz-button/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-cz-button')
  	```


## Usage
```javascript
import RNCzButton from 'react-native-cz-button';

// TODO: What to do with the module?
RNCzButton;
```
  