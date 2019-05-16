import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import EventCard from './EventCard.js';

export default class EventList extends React.Component {
    state = {
        events: []
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                events:this.state.events.map(dateEvent => ({
                    ...dateEvent,
                    timer: Date.now()
                })),
            });
        }, 1000);

        // const eventDb = require('./db.json').events.map(appendDate => ({
        //     ...appendDate,
        //     date: new Date(appendDate.date)
        // }));
        // this.setState({ eventDb });
    }
    
    render() {
        return (
            <FlatList
            style={styles.list}
            data={this.state.eventDb}
            renderItem={({ item }) => <EventCard event={item}/>}
            keyExtractor={item => item.id}
            />
        );
    }
}

const styles = StyleSheet.create({
    list: {
        flex: 1, 
        paddingTop: 20,
        backgroundColor: '#F3F3F3'
    }
})