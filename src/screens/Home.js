import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <SafeAreaView style={styles.root}>
      <View>
        <Text style={{ color: 'white' }}>Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'yellow'
    }
});
