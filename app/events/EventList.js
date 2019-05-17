import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import EventCard from './EventCard.js';
import ActionButton from 'react-native-action-button';
import { getEvents } from './EventApi.js';

export default class EventList extends React.Component {
    state = {
        events: [],
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
        
        // getEvents().then(events => this.setState({ events }));

        this.props.navigation.addListener(
            'didFocus',
            () => {
              getEvents().then(events => this.setState({ events }));
            }
          );  

        // const eventDb = require('./db.json').events.map(appendDate => ({
        //     ...appendDate,
        //     date: new Date(appendDate.date)
        // })); for local, no need due to expo use.
    }

    handleAddEvent =()=> {
        this.props.navigation.navigate('EventRT');
    }

    render() {
        return [
            <FlatList
                key="flatlist"
                data={this.state.events}
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
            buttonColor='#48BBEC'
            onPress={this.handleAddEvent}
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

