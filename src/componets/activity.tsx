import React from 'react';
import {ActivityIndicator, View} from 'react-native';

export const Activity = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="small" color="#0000ff" />
    </View>
  );
};
