import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';

export default class ParkPage extends Component {
    static navigationOptions = {
        tabBarLabel: '园区',
        // tabBarIcon: ({focused}) => {
        //     if (focused) {
        //         return (
        //             <Image style={styles.tabBarIcon} source={require('../../img/fri_sel.png')}/>
        //         );
        //     }
        //     return (
        //         <Image style={styles.tabBarIcon} source={require('../../img/fri_nor.png')}/>
        //     );
        // },
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>这是园区</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBarIcon: {
        width: 21,
        height: 21,
    }
});