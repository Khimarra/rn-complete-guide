import { StatusBar } from "expo-status-bar"
import React from "react"
import { Button, StyleSheet, Text, TextInput, View } from "react-native"

export default function App() {
  return (
    // inner pair of curly braces in style property is just a JS object
    <View style={{ padding: 50 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <TextInput
          // TextInput doesn't have its own structure, had to add padding to the whole view to give it space on the page
          placeholder="Course Goal"
          // note that styles are camelCase here. it's JS, not CSS
          style={{ borderBottomColor: "black", borderBottomWidth: 2, width: '80%' }}
        />
        <Button title="ADD" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})
