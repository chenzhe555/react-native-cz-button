import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

/*
* props:
* type: 按钮类型: 1.实心按钮 2.空心按钮
* lock: 如果为true，点击后置为不可点击状态，不会再调用onPress；反之。默认为false
* text: 文本信息，默认空串
* mainStyle: 总视图样式: {marginLeft: 30, marginRight: 20, borderRadius: 30}
* textStyle: 文本样式: {fontSize: 16}
* aKey: 当前按钮对应的Key
* params: 按钮对应的参数，可用于埋点
*
* func:
* evaluateView: 赋值当前视图对象
* onPress: 点击按钮事件
*
* export func:
* global.buttonCommonFunc: 全局定义此方法，所以按钮触发事件之前都会调用，可以对按钮做统一处理
* */
export default class CZButton extends Component{

    /************************** 生命周期 **************************/
    constructor(props) {
        super(props);
        this.initializeParams();
    }

    componentDidMount() {
        if (this.props.evaluateView) this.props.evaluateView(this);
    }
    /************************** 继承方法 **************************/
    /************************** 通知 **************************/
    /************************** 创建视图 **************************/
    /************************** 网络请求 **************************/
    /************************** 自定义方法 **************************/
    /*
    * 初始化参数
    * */
    initializeParams = () => {
        //点击一次后是否置为不可点击
        this.isLocked = false;
        this.state = {
            type: this.props.type ? this.props.type : 1
        }
    }
    /************************** 子组件回调方法 **************************/
    /************************** 外部调用方法 **************************/
    /*
    * 修改按钮显示状态
    * status: 1.可点击状态 2.不可点击状态
    * */
    modifyLockOpenStatus = (status = 1) => {
        if (status == 1) {
            this.isLocked = false;
        } else {
            this.isLocked = true;
        }
        this.forceUpdate();
    }
    /************************** List相关方法 **************************/
    /************************** Render中方法 **************************/
    /*
    * 按钮点击事件
    * */
    _onPress = () => {
        //只有未锁且有按钮事件才可点击
        if (!this.isLocked && this.props.onPress) {
            if (this.props.lock) {
                this.isLocked = true;
                this.forceUpdate();
            }
            //针对按钮埋点事件做的特殊处理
            if (global.buttonCommonFunc) global.buttonCommonFunc(this.props.aKey ? this.props.aKey : '', this.props.params ? this.props.params : null);
            this.props.onPress();
        }
    }

    render() {
        const { type } = this.state;
        const { text } = this.props;
        const { isLocked } = this;

        //整体样式
        let mainStyles = [{justifyContent: 'center', alignItems: 'center', opacity: isLocked ? 0.5 : 1}];
        //文本样式
        let textStyles = [];
        if (type == 1) {
            mainStyles.push({
                backgroundColor: '#96C239',
                borderRadius: 3
            });
            textStyles.push({
                fontSize: 14,
                color: 'white',
                fontFamily: 'PingFangSC-Semibold',
                marginTop: 6,
                marginBottom: 6
            });
        } else if (type == 2) {
            mainStyles.push({
                borderRadius: 30,
                borderWidth: 1,
                borderColor: '#111111'
            });
            textStyles.push({
                fontSize: 14,
                color: '#111111',
                fontFamily: 'PingFangSC-Regular',
                marginTop: 6,
                marginBottom: 6
            });
        }

        if (this.props.mainStyle) mainStyles.push(this.props.mainStyle);
        if (this.props.textStyle) textStyles.push(this.props.textStyle);

        return (
            <TouchableOpacity onPress={this._onPress}>
                <View style={mainStyles}>
                    <Text style={textStyles}>{text}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}
