import React from 'react';
import { View, Text, TouchableHighlight, TextInput, StyleSheet } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
export default class Event extends React.Component {
    handleAddPress =()=> {
    // this.props.navigation.goBack();
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
                <TouchableHighlight 
                    onPress={this.handleAddPress}
                    style={styles.button}>
                <Text style={styles.buttonText}>Add</Text>
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
    },
    button: {
        height: 50,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        alignSelf: 'stretch',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    buttonText: {
        color: '#fff',
        fontSize: 18
    }
});