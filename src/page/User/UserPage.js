import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';

export default class UserPage extends Component {
    static navigationOptions = {
        tabBarLabel: '用户',
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
                <Text>这是用户</Text>
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