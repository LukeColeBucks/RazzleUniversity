import moment from 'moment';

export function formatDate(dateString) {
    const parsedDate = moment(new Date(dateString));

    if(!parsedDate.isValid()) {
        return dateString;
    }

    return parsedDate.format('D MMM YYYY');
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