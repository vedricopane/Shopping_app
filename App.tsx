import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/router';
import FavoritesContextProvider from './src/context/favoritesContext';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <FavoritesContextProvider>
          <Router />
        </FavoritesContextProvider>
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
