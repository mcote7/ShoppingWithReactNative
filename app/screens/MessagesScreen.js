import React from 'react';
import {styles} from '../styles/MessageScreenStyles';
import { FlatList } from 'react-native';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';

const messages = [
  {
  id: 1,
  title: 'Title1',
  description: 'Desc.1',
  image: require('../assets/me.jpg'),
  },
  {
  id: 2,
  title: 'Title2',
  description: 'Desc.2',
  image: require('../assets/me.jpg'),
  }
]
function MessagesScreen(props) {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={m => m.id.toString()}
        renderItem={({item}) =>
        <ListItem
          onPress={()=>console.log('message entered', item)}
          title={item.title}
          subTitle={item.description}
          image={item.image}/>}
          ItemSeparatorComponent={ListItemSeparator}/>
    </Screen>
  );
};
export default MessagesScreen;