import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Linking,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getResult} from '../redux/actions';

export const MainScreen = () => {
  const [text, setText] = useState('');
  const {listUrl} = useSelector(state => state.listReducer);
  const dispatch = useDispatch();
  const fetchList = () => dispatch(getResult(text));

  useEffect(() => {
    fetchList();
  }, [text]);

  const renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#CED0CE',
        }}
      />
    );
  };

  const renderHeader = () => {
    return (
      <TextInput
        style={{
          height: 40,
          borderColor: '#000',
          borderWidth: 1,
          borderRadius: 10,
        }}
        placeholder="Search"
        onChangeText={text => setText(text)}
        value={text}
      />
    );
  };
  const onItemPress = async (url: string) => {
    if (url !== 'enter text for searh') {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        console.log(`Don't know how to open this URL: ${url}`);
      }
    }
  };

  return (
    <SafeAreaView>
      <View
        style={{
          padding: 25,
          width: '98%',
          alignSelf: 'center',
          justifyContent: 'center',
          height: '100%',
        }}>
        <FlatList
          data={listUrl}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => onItemPress(item.html_url)}>
              <Text style={{padding: 10}}>{item.html_url} </Text>
            </TouchableOpacity>
          )}
          extraData={listUrl}
          keyExtractor={item => item.html_url}
          ItemSeparatorComponent={renderSeparator}
          ListHeaderComponent={renderHeader()}
        />
      </View>
    </SafeAreaView>
  );
};
