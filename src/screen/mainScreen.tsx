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
import {MainScreenStyle} from '../styles/mainScreenStyle';

export const MainScreen = () => {
  const [text, setText] = useState('');
  const {listUrl} = useSelector(state => state.listReducer);
  const dispatch = useDispatch();
  const fetchList = () => dispatch(getResult(text));

  useEffect(() => {
    fetchList();
  }, [text]);

  const renderSeparator = () => {
    return <View style={MainScreenStyle.separator} />;
  };

  const renderHeader = () => {
    return (
      <TextInput
        style={MainScreenStyle.textInput}
        placeholder="Search"
        onChangeText={text => setText(text)}
        value={text}
      />
    );
  };
  const onItemPress = async (url: string) => {
    if (url !== 'enter text for searh') {
        await Linking.openURL(url);
    }
  };

  return (
    <SafeAreaView>
      <View style={MainScreenStyle.container}>
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
