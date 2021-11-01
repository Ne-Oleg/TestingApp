import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import { ActivityStyle } from '../styles/activityStyle';

export const Activity = () => {
  return (
    <View style={ActivityStyle.container}>
      <ActivityIndicator size="small" color="#0000ff" />
    </View>
  );
};
