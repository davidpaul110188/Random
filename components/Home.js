import React, { useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native'
import Slick from 'react-native-slick'
import axios from 'axios'

var styles = {
    wrapper: {},
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
}

export default function Home({ navigation }) {

    const [data, setData] = useState([]);
    useEffect(() => {
        // write your code here, it's like componentWillMount
        onScreenLoad();
    }, [])

    const onScreenLoad = () => {
        axios.get(`https://random-data-api.com/api/v2/users?size=10`)
            .then((res) => {
                setData(res.data);
            })
    };

    const handleClick = (value) => {
        navigation.navigate('Details', { data: value });
    };

    const getSlides = () => {
        return data.map((user) => {
            return <View style={styles.view} key={user.id}>
                <Text style={styles.text}>{user.username}</Text>
                <Button
                    onPress={() => handleClick(user)}
                    title="Details"
                    accessibilityLabel="Go to details page."
                />
            </View>
        })
    };

    return (
        <Slick style={styles.wrapper} showsPagination={false} loop={false}>
            {
                getSlides()
            }

            {/* <View testID="Hello" style={styles.view}>
                <Text style={styles.text}>Hello Slick</Text>
            </View>
            <View testID="Beautiful" style={styles.view}>
                <Text style={styles.text}>Beautiful</Text>
            </View>
            <View testID="Simple" style={styles.view}>
                <Text style={styles.text}>And simple</Text>
            </View> */}
        </Slick>
    );
}