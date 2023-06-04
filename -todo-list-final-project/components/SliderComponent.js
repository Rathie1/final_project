import {View,Text,StyleSheet} from 'react-native'
import Slider from'@react-native-community/slider'
import {useState} from 'react'

const SliderComponent =() => {
  const [value,setValue] = useState(50)
  return(
    <View>
      <Slider
        style = {{width:300,marginTop:10}}
        value = {value}
        onValueChange = {(val)=>{setValue(val)}}
        minimumValue = {0}
        maximumValue = {100}
        minimumTrackTintColor = 'blue'
        maximumTrackTintColor = 'red'
        step = {1}
      />
      <Text>
        목표 달성도 : 100
      </Text>
      <Text>
        현재 달성도 : {value}
      </Text>
    </View>
  )
}
export default SliderComponent