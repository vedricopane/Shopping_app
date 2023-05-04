import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

import {useFavoritesContext} from '../context/favoritesContext';

const Home = () => {
  const [product, setProduct] = useState([]);

  // useState untuk display activity indicator when fetching the data
  const [loading, setLoading] = useState(false);

  const {favorites, addToFavoritesHandler, removeFromFavoritesHandler} =
    useFavoritesContext();

  // function untuk menge-cek apakah item yg ditambahkan ke favorites sudah ada atau belum.
  const checker = item => {
    const boolean = favorites.some(element => element.id === item.id);

    return boolean;
  };

  useEffect(() => {
    setLoading(true);

    // fetch the data
    axios
      .get('https://fakestoreapi.com/products')
      .then(res => {
        // console.log(JSON.stringify(res.data))
        setProduct(res.data);
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false));

    // setLoading(false);
  }, []);

  // const renderItem = ({item}) => {
  //   <View>
  //     <Text style={{color: 'black'}}>{item.title}</Text>
  //   </View>;
  // };

  return (
    <SafeAreaView style={styles.root}>
      {/* show loading indicator */}
      {loading === true ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="black" />
        </View>
      ) : null}

      <FlatList
        data={product}
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
                <TouchableOpacity
                  style={styles.addButtonFav}
                  onPress={() =>
                    checker(item)
                      ? removeFromFavoritesHandler(item)
                      : addToFavoritesHandler(item)
                  }>
                  <Text style={styles.addButtonFavText}>
                    {checker(item)
                      ? 'Remove from Favorites'
                      : 'Add to Favorites'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.wrapperText}>
              <Text style={{color: 'black', fontWeight: 'bold', margin: 5}}>
                {item.title}
              </Text>
              <Text style={{color: 'black', margin: 5}}>
                {item.description}
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  margin: 5,
                }}>{`Price : ${item.price}$`}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
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
});
