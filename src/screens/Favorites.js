import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,TouchableOpacity
} from 'react-native';
import React from 'react';
import {useFavoritesContext} from '../context/favoritesContext';
import {Item} from 'react-native-paper/lib/typescript/src/components/Drawer/Drawer';

const Favorites = () => {
  const {favorites} = useFavoritesContext();
  console.warn(favorites.length);

  return (
    <SafeAreaView style={styles.root}>
      {favorites.length > 0 ? (
        <FlatList
          data={favorites}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.wrapperProduct}>
              <View style={styles.wrapperImageAndButton}>
                <View>
                  <Image
                    source={{uri: item.image}}
                    style={styles.imageProduct}
                    resizeMode="contain"
                  />
                </View>

                <View>
                  <TouchableOpacity>
                    <Text>Order Now</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      ) : (
        <View style={styles.containerEmptyFavorites}>
          <Text style={styles.textEmptyFavorites}>
            Favorites are empty! Please add..
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapperProduct: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 5,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#dedede',
  },
  wrapperImageAndButton: {
    alignItems: 'center',
  },
  imageProduct: {
    width: 150,
    height: 150,
  },
  addButtonFav: {
    marginVertical: 30,
    backgroundColor: '#5d8aa8',
    padding: 10,
    borderRadius: 10,
  },
  addButtonFavText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
  wrapperText: {
    flex: 1,
  },
  containerEmptyFavorites: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textEmptyFavorites: {
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
  },
});
