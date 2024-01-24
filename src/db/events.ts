import { events } from './events-data';

interface EventQuery {
    take?: number;
    skip?: number;
}

async function getEvents({ take, skip }: EventQuery) {
    if (take && skip) {
        return events.slice(skip, skip + take);
    }

    if (take && !skip) {
        return events.slice(0, take);
    }

    if (!take && skip) {
        return events.slice(skip);
    }

    return events;
}

async function getEventsCount() {
    return events.length;
}

export { getEvents, getEventsCount };
