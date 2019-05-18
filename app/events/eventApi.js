import moment from 'moment';
import uuid from 'uuid';
import * as Expo from 'expo';

// const { manifest } = Expo.Constants;

// const api = manifest.packagerOpts.dev
//     ? manifest.debuggerHost.split(':').shift().concat(':3000')
//     : '78.86.184.255:3000'

/*
    set up local server
    1. json-server --port 8000 ./app/events/db.json
    2. lt --port 8000 --subdomain application-mock-server
    3. expo start
*/
const endpoint = 'events'
const url = `https://application-mock-server.localtunnel.me/${endpoint}`;

export function saveEvent({ title, date }) {
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        title,
        date,
        id: uuid(),
      }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then(res => res.json())
    .catch(error => console.error('Error has occured:', error));
}

export function getEvents() {
    return fetch(url)
    .then(response => response.json())
    .then(events => events.map(ev => ({ ...ev, date: new Date(ev.date)})));
}


export function formatDateTime(dateString) {
    const parsedDate = moment(new Date(dateString));

    if(!parsedDate.isValid()) {
        return dateString;
    }

    return parsedDate.format('H A on D MMM YYYY');
}

export function formatDate(dateString) {
    const parsed = moment(new Date(dateString));
  
    if (!parsed.isValid()) {
      return dateString;
    }
  
    return parsed.format('D MMM YYYY');
  }

export function getCountdown(eventDate) {
    const duration = moment.duration(moment(new Date(eventDate)).diff(new Date()));
    return {
        days: parseInt(duration.as('days')),
        hours: duration.get('hours'),
        minutes: duration.get('minutes'),
        seconds: duration.get('seconds')
    };
}