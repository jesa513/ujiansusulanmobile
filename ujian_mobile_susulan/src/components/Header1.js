import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class Header1 extends Component {

    render() {
        const { viewStyle, textStyle } = styles;
        return (
            <View style={viewStyle}>
                <Text style={textStyle}>{this.props.email}</Text>
            </View>
        );
    }
}

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
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

const mapStateToProps = (state) => {
    
        return { email: state.auth.email}
    
 }

export default connect (mapStateToProps)(Header1);
