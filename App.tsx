import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() 
{
const [inputValue, setInputValue] = useState("");
const [lowerLimit, setLowerLimit] = useState<number>(0);
const [upperLimit, setUpperLimit] = useState<number>(0);
  return (
  <View style={styles.container}>
    <Text style={styles.heading}>Heart Rate Limits Calculator</Text>
      <Text>Enter your age please:</Text>
      <TextInput 
      style={styles.textinput} 
      keyboardType="number-pad"
      value={inputValue} 
      placeholder="Enter your age to calculate limits"
      onChangeText={setLimits}/>

    <Text style={styles.text}>{lowerLimit}</Text>  
    <Text style={styles.text}>{upperLimit}</Text>

  </View>
  );

function setLimits(text: string)
{
  if(isNaN(Number(text)))
  {
  console.log("not a number!")
  setLowerLimit(0)
  setUpperLimit(0)
  }
  else if(!text)
  {
  console.log("no input!")
  setInputValue("")
  setLowerLimit(0)
  setUpperLimit(0)
  }
  else
  {
  const calculatedLower: number = ((220-Number(text)) * 0.65)
  const calculatedUpper: number = ((220-Number(text)) * 0.85)

  setInputValue(text)
  setLowerLimit(calculatedLower)
  setUpperLimit(calculatedUpper)
  console.log("valid number!"+inputValue)
  }
}
}

const styles = StyleSheet.create(
{
  container: 
    {
    flex: 1,
    margin: 16
    },
  heading: 
    {
    fontSize: 30,
    marginTop: 32,
    marginBottom: 16,
    },
  text: 
    {
    marginVertical: 16
    },
  textinput: 
    {
    borderWidth: 2,
    borderRadius: 4,
    width: 220,
    height: 50
    }
});

/*import React, { useState } from "react";
import {
    View,
    TextInput,
    StyleSheet,
    Text,
} from "react-native";

const App = () => {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (text: string) => {
        // Allow only numbers
        const numericValue = text.replace(/[^0-9]/g, "");
        setInputValue(numericValue);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Geeksforgeeks</Text>
            <TextInput
                style={styles.input}
                onChangeText={handleChange}
                value={inputValue}
                keyboardType="numeric"
                placeholder="Enter numbers only"
                placeholderTextColor="#999"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        color: "green",
        fontWeight: "bold",
    },
    input: {
        width: 250,
        height: 50,
        borderWidth: 2,
        borderColor: "#3498db",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 18,
        color: "#333",
        backgroundColor: "#fff",
    },
});

export default App;
*/
