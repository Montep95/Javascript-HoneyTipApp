import React,{useState, useEffect} from 'react';
import {ScrollView, Text, StyleSheet,Platform} from 'react-native';
import LikeCard from '../components/LikeCard';
import Loading from '../components/Loading';
import * as Application from 'expo-application';
const isIOS = Platform.OS === 'ios';
import {firebase_db} from "../firebaseConfig"

export default function LikePage({navigation,route}){
    
    const [tip, setTip] = useState([])
    // 기존 잠정적으로 찜된 데이터를 표시했던 곳이지만, 
    // 파이어베이스로 데이터를 옮긴 후에는 원격 관리를 하게됨

    const [ready,setReady] = useState(true)
    // 상태관리 변수를 추가하여 업데이트기능 추가

    useEffect(()=>{
        navigation.setOptions({
            title:'꿀팁 찜'
        })
        getLike() // getLike()버튼 = 찜하기 버튼을 함수 작성
    },[])

    const getLike = async () => { // getLike함수는 async함수로 구현
        let userUniqueId; // user의 고유한 아이디를 가져올 변수 선언
        if(isIOS){ // 만약 이 플랫폼이 ios이면 
        let iosId = await Application.getIosIdForVendorAsync(); // ios에 고유키값을 담는 ios전용 코드
            userUniqueId = iosId // 그 후 userUniqueId (유저의 고유아이디) 를 iosId로 최신화 시킨다.
        }else{ // 만약 이 플랫폼이 android이면
            userUniqueId = await Application.androidId // 안드로이드의 고유키값을 가져오는 이 코드를 사용
        }

        console.log(userUniqueId) // 콘솔창에 user의 고유키값을 표시하도록 하고,
        firebase_db.ref('/like/'+userUniqueId).once('value').then((snapshot) => {
            console.log("파이어베이스에서 데이터 가져왔습니다!!")
            let tip = snapshot.val();
            let tip_list = Object.values(tip)

            if(tip_list && tip_list.length > 0){
                // tip이 null이 아니고 tip의 갯수가 0개 이상, 즉 데이터가 있을때만 상태변경을하여 화면을 다시 그립니다.
                // 가져온 팁은 setTip함수를 통해 새롭게 업데이트 시킴
                setTip(tip_list)
                setReady(false)
            }
            
        })
    }

    return (
        <ScrollView style={styles.container}>
           {
               tip.map((content,i)=>{
                   // LikeCard에서 꿀팀 상태 데이터(==tip)과 꿀팁 상태 데이터를 변경하기 위한
                   // 상태 변경 함수(== setTip)을 건네준다.
                   //즉 자기 자신이 아닌, 자식 컴포넌트에서도 부모의 상태를 변경할 수 있다.
                   return(<LikeCard key={i} content={content} navigation={navigation} tip={tip} setTip={setTip}/>)
               })
           }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff"
    }
})