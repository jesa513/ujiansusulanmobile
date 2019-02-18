import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Header } from 'react-native-elements';
import { Card, CardSection, Button } from './common';
import { logoutUser, postingCreate } from '../actions';
import PostingForm from './PostingForm';
import { Icon } from 'react-native-elements';

class Profile extends Component{
    static navigationOptions = {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => <Icon name='add' color={tintColor} size={25} />
    };

    logOut = () => {
        this.props.logoutUser();
        this.props.screenProps.rootNavigation.navigate('Login')
    }

    onButtonSavePress = () => {
        var data = {
                link: this.props.link, 
                caption: this.props.caption,
                email: this.props.user.email,
                urllink: this.props.urllink
        }
        this.props.postingCreate(data) 
    }

    render() {
        return (
            <View>
                <Header 
                    containerStyle={{
                        backgroundColor: '#277cd1',
                    }}
                    centerComponent={{text: 'Instagram', style: { color: '#fff', fontSize:20 }}}
                    rightComponent={{
                        icon: 'home',
                        color: '#fff',
                        onPress: this.logOut
                    }}
                />
                <Card>
                    {/* <CardSection>
                        <Text>{this.props.user.email}</Text>
                    </CardSection> */}
                    <PostingForm />
                    <CardSection>
                        <Button onPress={this.onButtonSavePress}>
                            Post
                        </Button>
                    </CardSection>
                </Card>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state.auth.user)
    return { 
        user: state.auth.user,
        link: state.postForm.link,
        caption: state.postForm.caption,
        urllink: state.postForm.urllink
    }
}

export default connect(mapStateToProps, { logoutUser, postingCreate })(Profile);
