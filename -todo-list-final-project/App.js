import * as React from "react";
import {Text,View,StyleSheet,TextInput,TouchableOpacity,ScrollView,ImageBackground,Button} from "react-native";
import SliderComponent from './components/SliderComponent'


export default class App extends React.
Component {
  
  constructor() {
    super();
    this.state = {
      newItem: "",
      listOfItems: []
    };
  }
  
  deleteItem(id) {
    const list = this.state.listOfItems;
    const updatedList = list.filter((item) => item.id !== id);
    this.setState({
      listOfItems: updatedList,
    });
  }

  updateInput(key, value) {
    this.setState({
      [key]: value,
    });
  }
  
  addItem = () => {
    if (this.state.newItem != "") {
      const newItemJSON = {
        id: 1 + Math.random(),
        value: this.state.newItem.slice(),
      };

      const list = this.state.listOfItems;
      list.push(newItemJSON);

      this.setState({
        listOfItems: list,
        newItem: "",
      });
    }
  };
  render() {

    return (
      <View style={styles.container}>
        <View style={styles.textView}>
          <Text style={styles.text}>
            To Do List
          </Text>
        </View>

        <View>
          <TextInput
            placeholder="내용을 입력하세요..."
            style={styles.inputBox}
            onChangeText={(text) => {
              this.setState({ newItem: text });
            }}
            value={this.state.newItem}
          >
          </TextInput>
          
          <View>
            <TouchableOpacity 
              style={styles.button} 
              onPress={this.addItem}
            >
              <Text style={styles.buttontext}>
                추가
              </Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.slider}>
            <SliderComponent/>
            <ImageBackground
              source={require('./assets/night.jpg')}
              style={styles.backgroundImage}
            >
            </ImageBackground>
          </View>
  
          <View>
            <ScrollView>
              {this.state.listOfItems.map((item) => {
                return (
                  <View style={styles.listview}>
                    <Text style={styles.textstyle}>
                      {item.value}
                    </Text>
                    <TouchableOpacity
                      style={{
                        backgroundColor: "black",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 10,
                      }}
                      onPress={() => this.deleteItem(item.id)}
                      onPressOut={()=> alert("삭제되었습니다!")}
                    >
                      <Text style={{ color: "#6ff", fontWeight: "bold" }}>
                        삭제
                      </Text>
                   
                    </TouchableOpacity>
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textView: {
    backgroundColor: "purple",
    borderColor: "black",
    borderWidth: 2,
    height: 70
  },
  text: {
    textAlign: "center",
    marginTop: "5%",
    fontSize: 25,
    color: "white",
    fontWeight: "bold"
  },
  inputBox: {
    backgroundColor: "white",
    textAlign: "left",
    borderColor: "black",
    borderWidth: 2,
    fontSize: 20,
    height: 40
  },
  button: {
    position: "absolute",
    right:0,
    bottom:0,
    backgroundColor: "black",
    width: 70,
    height: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  buttontext: {
    color: "#6ff",
    fontSize: 20
  },
  textstyle: {
    fontSize: 20,
    color: "black"
  },
  listview: {
    borderWidth: 2,
    height: 40,
    justifyContent: "space-between",
    borderColor: "black",
    backgroundColor:"#fc9",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    alignItems: "center",
    flexDirection: "row"
  },
  slider:{
    height : 70,
    marginBottom:50,
    borderColor: "black",
    borderWidth: 2,
    backgroundColor:"pink"
  },
  backgroundImage: {
    flex: 1,
    height:654,
    width:331
  }
});