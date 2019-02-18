import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Header } from 'react-native-elements';
import { connect } from 'react-redux';
import _ from 'lodash';
import { getAllPost } from '../actions';
import PostDetail from './PostDetail';
import { Icon } from 'react-native-elements';


class Homepage extends Component{

    static navigationOptions = {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => <Icon name='home' color={tintColor} size={25} />
    };

    componentDidMount() {
        this.props.getAllPost();
        
    }

    renderPost = () => {
            const listJSX = this.props.postlist.map((item) => {
                return (
                    <PostDetail key={item.uid} post={item} />
                );
            });
            return listJSX;
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header 
                    containerStyle={{
                        backgroundColor: '#277cd1',
                    }}
                    centerComponent={{text: 'Instagram', style: { color: '#fff', fontSize:20 }}}
                />
                <ScrollView>
                 {this.renderPost()}
                </ScrollView> 
            
                
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state.postlist); 

    const postlist = _.map(state.postlist, (val,uid) => {
        return { ...val, uid }
    });
    console.log(postlist);

    return {postlist};
};

export default connect(mapStateToProps, { getAllPost })(Homepage);
