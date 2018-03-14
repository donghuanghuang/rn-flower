import React,{Component} from 'react';
import {View,Text,Image,ScrollView,Button,TextInput} from 'react-native';

export default class detailComponent extends Component{
    constructor(){
        super();
        this.state={
            getDetail:[]
        }
    }

    componentWillMount(){
        var myFid = this.props.navigation.state.params.fid;
        // console.log('接收的详情id是:'+myFid)
        fetch('http://192.168.0.100/flower/php/getDetailByLid.php?fid='+myFid)
        .then((response)=>{return response.json()})
        .then((result)=>{
            console.log(result[0])
            var res = result[0]
            this.setState({
                getDetail:res
            })

        })
    }

    handleClick=()=>{
        alert('成功加入购物车')
    }

    render(){
        return <View style={{backgroundColor:'white',flex:1}}> 
                {/*<Text> this is detail</Text>*/}
                <ScrollView>
                <Image style={{width:250,height:250}} source={{uri:'http://192.168.0.100/flower/'+this.state.getDetail.src}}></Image>
                <Text style={{alignSelf:'center',marginTop:20,color:'black'}}>{this.state.getDetail.NAME}</Text>
                <Text style={{alignSelf:'center'}}>¥{this.state.getDetail.price}</Text>
                </ScrollView>
                <Button onPress={this.handleClick} title='立即购买'></Button>
            </View>
    }
}


