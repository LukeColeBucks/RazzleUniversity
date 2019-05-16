import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import EventCard from './EventCard.js';
import ActionButton from 'react-native-action-button';

export default class EventList extends React.Component {
    state = {
        events: []
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                events: this.state.events.map(dateEvent => ({
                    ...dateEvent,
                    timer: Date.now()
                })),
            });
        }, 1000);

        const eventDb = require('./db.json').events.map(appendDate => ({
            ...appendDate,
            date: new Date(appendDate.date)
        }));
        this.setState({ eventDb });
    }

    handleAddEvent =()=> {
        this.props.navigation.navigate('EventRT');
    }

    render() {
        return [
            <FlatList
                key="flatlist"
                data={this.state.eventDb}
                style={styles.list}
                keyExtractor={item => item.id}
                renderItem={({ item, seperators}) => (
                    <EventCard 
                        event={item}
                    />
                )}
            />,
            <ActionButton
            key="fab"
            onPress={this.handleAddEvent}
            buttonColor='#48BBEC'
            />
        ];
    }
}

const styles = StyleSheet.create({
    list: {
        flex: 1, 
        paddingTop: 20,
        backgroundColor: '#F3F3F3'
    }
    
});

