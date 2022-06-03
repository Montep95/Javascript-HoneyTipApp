import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking} from 'react-native';

// 어바웃 화면 이미지 가져오기
const About = 'https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2FaboutImage.png?alt=media&token=13e1c4f6-b802-4975-9773-e305fc7475c4'

export default function AboutPage() {
  console.disableYellowBox = true;
  return (
    <View style = {styles.container}>
        <Text style = {styles.AboutTitle} >Hi! 스파르타코딩 앱개발 반에 오신 것을 환영합니다</Text>
        <View style = {styles.AboutCenter}>
            <Image style = {styles.AboutImage} source={{uri:About}}/>
            <Text style = {styles.AboutCenterText1}> 많은 내용을 간결하게 담아내려 노력했습니다! </Text>
            <Text style = {styles.AboutCenterText2}> 꼭 완주 하셔서 꼭 여러분 것으로 만들어가시길 바랍니다 </Text>
            <TouchableOpacity style = {styles.AboutSNSButton} onPress={() => Linking.openURL("https://www.instagram.com/bongzur_/")}>
                <Text style = {styles.AboutSNSText}> [인스타그램] bongzur_ </Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#000080'
    },

    AboutTitle: {
        flex:1,
        marginLeft:30,
        marginRight:30,
        marginTop:100,
        fontSize:30,
        fontWeight:"700",
        color:"white"
    },

    AboutCenter:{
        flex:4,
        backgroundColor:"white",
        borderRadius:30,
        marginTop:10,
        margin:40,
        alignItems:"center"
    },

    AboutImage:{
        width:150,
        height:150,
        borderRadius:15,
        marginTop:100
    },

    AboutCenterText1:{
        fontSize:20,
        fontWeight:"700",
        color:"black",
        textAlign:"center",
        marginTop:20,
        marginLeft:30,
        marginRight:30
    },

    AboutCenterText2:{
        fontSize:15,
        textAlign:"center",
        fontWeight:"700",
        color:"black",
        marginTop:20,
        marginLeft:30,
        marginRight:30,
        marginBottom:20
    },

    AboutSNSButton:{
        height:50,
        width:100,
        backgroundColor:"orange",
        borderRadius:10,
        margin:10,
        alignItems:"center",
        justifyContent:"center",
        marginTop:15
    },

    AboutSNSText:{
        fontSize:15,
        color:"white",
        textAlign:"center"
    }
})