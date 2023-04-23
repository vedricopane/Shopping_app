import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Categories = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Text>Categories</Text>
    </SafeAreaView>
  )
}

export default Categories

const styles = StyleSheet.create({
  root: {
      flex: 1,
      backgroundColor: 'green'
  }
});