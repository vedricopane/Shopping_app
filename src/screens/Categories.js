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

const Categories = () => {
  const [categories, setCategories] = useState([]);

  // useState untuk display activity indicator when fetching the data
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    // fetch the data
    axios
      .get('https://fakestoreapi.com/products/categories')
      .then(res => {
        // console.log(JSON.stringify(res.data))
        setCategories(res.data);
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
        data={categories}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <View style={styles.wrapperCategory}>
            <View style={styles.category}>
              <Text style={styles.textCategory}>{item}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Categories;

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
  wrapperCategory: {
    // justifyContent: 'center'
    alignItems: 'center',
    // alignContent: 'center'
  },
  category: {
    backgroundColor: 'tomato',
    padding: 5,
    alignItems: 'center',
    marginVertical: 20,
    borderRadius: 20,
    width: '50%',
    // justifyContent: 'center',
    // textAlign: 'center'
  },
  textCategory: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
