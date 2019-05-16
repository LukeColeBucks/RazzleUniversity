<script src="http://localhost:8097"></script>
import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Alert } from 'react-native';

export class Menu extends React.Component {

    onPress = ()=> {
        Alert.alert('You tapped the button!');
    }

    render(){
        return(
        	<View style={styles.container}>
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
                            <Text style={styles.buttonText}>LECTURES</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyles} onPress={()=>this.props.navigate('EventRT')}>
                        <Text style={styles.buttonText}>DEADLINES</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.buttonStyles} onPress={()=>this.props.navigate('NewsRT')}>
                        <Text style={styles.buttonText}>NEWS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyles} onPress={()=>this.props.navigate('ContactRT')}>
                        <Text style={styles.buttonText}>CONTACT</Text>
                    </TouchableOpacity>      
                </View>

		    </View>
	    );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 6,
        backgroundColor: '#356078'
    },
    buttonRow: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ffffff',
        borderBottomWidth: 1
    },
    buttonStyles:{
        backgroundColor: '#356078',
        width: '50%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        color: '#ffffff',
        fontSize: 18
    }
});