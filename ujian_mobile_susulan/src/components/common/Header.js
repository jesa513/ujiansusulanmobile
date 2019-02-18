import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Header extends Component {
    render() {
        const { viewStyle, textStyle } = styles;
        return (
            <View style={viewStyle}>
                <Text style={textStyle}>{this.props.headerText}</Text>
            </View>
        );
    }
}

const styles = {
    viewStyle: {
        backgroundColor: '#277cd1',
        justifyContent: 'center',
        // justifyContent: 'flex-end',
        alignItems: 'center',
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        positiong: 'relative'
    },
    textStyle: {
        fontSize: 25
    }
};

export { Header };
