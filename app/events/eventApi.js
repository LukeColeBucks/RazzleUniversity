import moment from 'moment';
import * as Expo from 'expo';

// const { manifest } = Expo.Constants;

// const api = manifest.packagerOpts.dev
//     ? manifest.debuggerHost.split(':').shift().concat(':3000')
//     : '78.86.184.255:3000'

  const url = `https://application-mock-server.localtunnel.me/events`;

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