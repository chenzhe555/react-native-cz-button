## Manual installation

npm install react-native-cz-button --save


## Usage
###  1.引入组件
```
import Button from 'react-native-cz-button';

<Button
    evaluateView={ (button) => {this.button = button}}
    type={1} 
    text={'按钮测试'} 
    onPress={this._onPress}
/> 
```

###  2.属性:
```
type: 按钮类型: 1.实心按钮 2.空心按钮
```
```
lock: 如果为true，点击后置为不可点击状态，不会再调用onPress；反之。默认为false
```
```
text: 文本信息，默认空串
```
```
mainStyle: 总视图样式: {marginLeft: 30, marginRight: 20, borderRadius: 30}
```
```
textStyle: 文本样式: {fontSize: 16}
```
```
aKey: 当前按钮对应的Key
```
```
params: 按钮对应的参数，可用于埋点
```

###  3.属性方法:
```
/*
* 赋值当前视图对象
* */
evaluateView
```

```
/*
* 按钮点击事件
* */
onPress
```

###  4.供外部调用的方法:
```
/*
* 修改按钮显示状态
* status: 1.可点击状态 2.不可点击状态
* */
this.button.modifyLockOpenStatus(1)
```

```
/*
* 全局定义此方法，所以按钮触发事件之前都会调用，可以对按钮做统一处理
* */
global.buttonCommonFunc = () => {}
```
