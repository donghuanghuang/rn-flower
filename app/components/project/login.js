import React,{Component} from 'react';
import {View,Text,Image,TextInput,Button,ActivityIndicator} from 'react-native';

export default class LoginComponent extends Component{
    constructor(){
        super();
        this.state={
            uname:'',
            upwd:'',
            isLoading:false
        }
    }

    handlePress=()=>{
        //设置状态允许显示加载中的图标
        this.setState({
            isLoading:true
        });
        // console.log(this.state);
        var args = "uname="+this.state.uname+"&upwd="+this.state.upwd
        fetch('http://176.116.55.125/flower/php/login.php?'+args)
        .then(
            (response)=>{return response.json()}
        ).then((result)=>{
            // console.log(result)
            if(result == 'true'){
                //登录成功,跳转到主页面
                this.props.navigation.navigate('index');
            }

        })

    }


    handleChangeName=(msg)=>{
        //获取用户名和密码
        this.setState({
            uname:msg
        })
        //和服务器通信，验证用户所输入的信息

    }
    handleChangePwd=(msg)=>{
        this.setState({
            upwd:msg
        })
    }

    render(){
        return <View>
            <View style={{alignItems:'center'}} >
                <Image style={{width:70,height:70}} source={require('../../img/header.png')}></Image>
            </View>
            <View>
                <TextInput onChangeText={this.handleChangeName} placeholder='请输入用户名'></TextInput>
            </View>
            <View>
                <TextInput secureTextEntry={true} onChangeText={this.handleChangePwd} placeholder='请输入密码'></TextInput>
            </View>
                <Button onPress={this.handlePress} title="登录"></Button>
                {
                    this.state.isLoading
                    &&
                <ActivityIndicator>
                </ActivityIndicator>
                }
         </View>
    }
}


//http://176.116.55.85/admin/data/user/login.php