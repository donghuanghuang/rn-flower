import React,{Component} from 'react';
import {View,Text,Image,ScrollView,TouchableOpacity,FlatList} from 'react-native';

export default class indexComponent extends Component{

    constructor(){
        super();
        this.state={
            picIndex:0,
            imgList:[],
            getDecDate:[],
            tmpImgList1:[]
        }
    }

    componentWillMount(){
        // 轮播数据
        fetch('http://192.168.0.100/flower/php/banner.php')
        .then((response)=>{return response.json()})
        .then((result)=>{           
        //准备保存图片列表到imgList
        //暂时保存包含md图片的列表
      var tmpList = [];
      for(var i=0;i<result.length;i++){
        var obj = result[i];
        //obj.md
        tmpList.push(obj.img);
      }
      this.setState({
          imgList:tmpList
      })
        })

        //装点家园数据
        fetch('http://192.168.0.100/flower/php/decorate.php')
        .then((response)=>{return response.json()})
        .then((result)=>{
            // console.log(result)
            var tmpImgList = [];
            for(var i=0;i<result.length;i++){
                tmpImgList.push(result[i].src)
                result[i].key=i;
            }
            // console.log(tmpImgList)
            this.setState({
                getDecDate:result,
                tmpImgList1:tmpImgList
            })
        })

    }

    detailId=(index)=>{
           var fid = this.state.getDecDate[index].fid;
        //    console.log(fid)
        //    console.log(this.state.getDecDate)
        this.props.navigation.navigate('detail',{fid:fid});
    }

    // 列表对应的函数名
    getDecorate=(info)=>{
        return <TouchableOpacity onPress={()=>this.detailId(info.index)} style={{alignItems:'center',borderColor:'lightgray',borderTopWidth:1}}>
                <Image style={{width:70,height:70}}  source={{uri:'http://192.168.0.100/flower/'+this.state.tmpImgList1[info.index]}}></Image>
                <Text>{info.item.name}</Text>
                <Text>¥{info.item.price}</Text>
        </TouchableOpacity>
    //    console.log(this.state.tmpImgList1[info.index])
    }

      componentDidMount(){
    var tmpTimer =  setInterval(()=>{
      var nowIndex = this.state.picIndex;
      nowIndex++;
      if(nowIndex > this.state.imgList.length-1){
        this.setState({picIndex:0});
        return 
      }
      this.setState({picIndex:nowIndex});
    },2000);
    this.setState({timer:tmpTimer});
  }

    //清理工作
  componentWillUnmount(){
    //定时器关掉
    clearInterval(this.state.timer);
  }

    render(){
        return <ScrollView style={{backgroundColor:'white'}}>
            <View  style={{alignItems:'center'}} >
                <Image style={{width:70,height:70}} source={require('../../img/header.png')}></Image>
            </View>
            <View>
                <Image style={{width:350,height:250}}  source={{uri:"http://192.168.0.100/flower/"+this.state.imgList[this.state.picIndex]}}></Image>
            </View>
            <View  style={{alignItems:'center'}} >
            <Image style={{width:250,height:150}}  source={require('../../img/index_1.jpg')}></Image>
            </View>
            <View  style={{alignItems:'center'}} >
            <Image style={{width:250,height:150}}  source={require('../../img/index_2.jpg')}></Image>
            </View>
            <Text style={{margin:20}}>装点家园 decorate the homes</Text>
            {/*列表的数据*/}
            <FlatList renderItem={this.getDecorate} data={this.state.getDecDate}>

            </FlatList>
               
            <View style={{flexDirection:'row'}}>
                <View>
                    <Image style={{width:60,height:60}} source={require('../../img/index_8.jpg')}></Image>
                </View>
                <View style={{marginTop:15}}>
                    <Text style={{fontSize:14,color:'black'}}>满1000元全国包邮</Text> 
                    <Text style={{fontSize:12}}>全场订单满1000元全国包邮</Text>
                </View>
            </View>

                <View style={{flexDirection:'row'}}>
                <View>
                    <Image style={{width:60,height:60}}  source={require('../../img/index_9.jpg')}></Image>
                </View>
                <View style={{marginTop:15}}>
                    <Text style={{fontSize:14,color:'black'}}>下单送精美礼品</Text> 
                    <Text style={{fontSize:12}}>本店购买任意商品赠送精美礼品</Text>
                </View>
            </View>
                <View style={{flexDirection:'row'}}>
                <View>
                    <Image style={{width:60,height:60}} source={require('../../img/index_10.jpg')}></Image>
                </View>
                <View style={{marginTop:15}}>
                    <Text style={{fontSize:14,color:'black'}}>贴心的售后服务</Text> 
                    <Text style={{fontSize:12}}>7x24小时售后随时为您服务</Text>
                </View>
            </View>
                <View style={{flexDirection:'row'}}>
                <View>
                    <Image style={{width:60,height:60}}  source={require('../../img/index_11.jpg')}></Image>
                </View>
                <View style={{marginTop:15}}>
                    <Text style={{fontSize:14,color:'black'}}>店铺优惠劵</Text> 
                    <Text style={{fontSize:12}}>每日整点可领取限量优惠劵</Text>
                </View>
            </View>
            <View style={{alignItems:'center',marginTop:15,borderTopWidth:1,borderColor:'lightgray'}}>
                <Text style={{fontSize:10}}>Copyright@2010-2018花语文化传播有限公司 All rights reserved</Text>
            </View>
           
            </ScrollView>
           
    }
}


