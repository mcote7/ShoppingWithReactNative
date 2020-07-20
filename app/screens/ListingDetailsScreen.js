import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import AppText from '../components/Apptext';
import colors from '../config/colors';
import ListItem from '../components/ListItem';

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/jacket.jpg')}/>
      <View style={styles.detailsCont}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userCont}>
          <ListItem
            image={require('../assets/me.jpg')}
            title='Michael Cote'
            subTitle='5 Listings'/>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  detailsCont: {
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '500',
  },
  price: {
    marginVertical: 5,
    color: colors.secondary,
    fontSize: 24,
    fontWeight: 'bold',
  },
  userCont: {
    marginVertical: 60,
  },
});
export default ListingDetailsScreen;