import React from 'react';
import { View, Text, TouchableHighlight, TextInput, StyleSheet } from 'react-native';

export default class Event extends React.Component {
    State = {
        title: null,
        date: '',
    };

    handleAddPress =()=> {
        this.props.navigation.goBack();
    }

    render() {
        return(
            <View style={{flex: 1}}>
                <View 
                    style={styles.fieldContainer}> 
                    <TextInput 
                    style={styles.text} 
                    placeholder="Event title"
                    spellCheck={false}
                    />
                </View>

                <TouchableHighlight onPress={this.handleAddPress}>
                <Text>Add</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    fieldContainer: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    text: {
        height: 40,
        margin: 0,
        marginRight: 7,
        paddingLeft: 10 
    }
});
