import React from 'react';
import { View, Image } from 'react-native';
import {styles} from '../styles/ListingDetailsScreenStyles';
import AppText from '../components/Apptext';
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
export default ListingDetailsScreen;