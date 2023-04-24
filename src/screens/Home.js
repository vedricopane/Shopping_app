import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Home = () => {
  const [product, setProduct] = useState([]);

  // useState untuk display activity indicator when fetching the data
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    // fetch the data
    axios
      .get('https://fakestoreapi.com/products')
      .then(res => {
        // console.log(JSON.stringify(res.data))
        setProduct(res.data);
      })
      .catch(error => console.log(error));
    // .finally(setLoading(false));

    setLoading(false);
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
      ) : (
        <FlatList
          data={product}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.wrapperProduct}>
              <View style={styles.wrapperImage}>
                <Image source={{uri: item.image}} style={styles.imageProduct} resizeMode='contain' />
              </View>
              <View style={styles.wrapperText}>
                <Text style={{color: 'black', fontWeight: 'bold', margin: 5}}>
                  {item.title}
                </Text>
                <Text style={{color: 'black', margin: 5}}>{item.description}</Text>
                <Text style={{color: 'black', margin: 5}}>{item.price}</Text>
              </View>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
    // padding: 10
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
  },
  wrapperProduct: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingBottom: 20,
    // padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#dedede',
  },
  imageProduct: {
    width: 160,
    height: 160,
  },
  wrapperImage: {
    flex: 1,
  },
  wrapperText: {
    flex: 1,
  },
});
