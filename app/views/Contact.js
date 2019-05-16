<script src="http://localhost:8097"></script>
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Alert, Button } from 'react-native';
import { Header } from '../sections/Header.js';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export class Contact extends React.Component {
    // static navigationOptions = {
    //     header: null
    // };

    constructor(props) {
        super(props);
        this.state = {
            msg: 'Your Message?',
            name: 'What is your name?',
            email: 'And what is your email?'
        }
    }

    sendMessage=()=> {
        Alert.alert("Welcome Home, " + this.state.name, "We've received your email, give us 1-3 days to get back to you.");
        this.props.navigation.goBack();
    }

    clearFields=()=> this.setState({name: "", msg: "", email: ""});

    render() {
        return (
            <View style={styles.container}>
                <Header message = 'Press to Login' />
                <Text style={styles.heading}>Contact Us</Text>
                <TextInput 
                    style={styles.inputs}
                    onChangeText={(text) => this.setState({name: text})}
                    value={this.state.name}
                />
                <TextInput 
                    style={styles.multiInput}
                    onChangeText={(text) => this.setState({msg: text})}
                    value = {this.state.msg}
                    multiline = {true}
                    numberOfLines = {5}
                />
                 <TextInput 
                    style={styles.inputs}
                    onChangeText={(text) => this.setState({email: text})}
                    value={this.state.email}
                    underlineColo
                />

                <TouchableHighlight underlayColor='#206778'>
                    <Button
                    onPress={this.sendMessage} 
                    title="Send" 
                    style={styles.buttons} 
                    type="outline"/>
                </TouchableHighlight>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: '45%'
    },
    heading: {
        fontSize: 16,
        flex: 1
    },
    inputs: {
        flex: 0,
        width: '80%',
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
    },
    multiInput: {
        flex: 1,
        width: '90%',
        paddingTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
    },
    buttons: {
        marginTop: 15,
        fontSize: 16
    }
});