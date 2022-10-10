import * as React from 'react';
import { View, Text } from 'react-native';

export default function Details({ route, navigation }) {

    const { data } = route.params;


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{data.username}</Text>
            <Text>{data.first_name}</Text>
            <Text>{data.last_name}</Text>
            <Text>{data.email}</Text>
            <Text>{data.uid}</Text>
        </View>
    );
}