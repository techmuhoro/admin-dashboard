import { bookings, type BookingType } from './bookings-data';

interface BookingWhereQuery {
    id?: number | string;
    name?: string;
    email?: string;
    phone?: string;
    gender?: string;
    dateBooked?: string;
    bookedBy?: string;
    completeDetails?: boolean | string;
}

interface BookingQuery {
    take?: number;
    skip?: number;
    where?: BookingWhereQuery;
}

async function getBookings({ take, skip, where }: BookingQuery) {
    // filter the bookings as per the where query
    const filteredBookings = where ? getFilteredResults(where) : bookings;

    // paginate the result
    const paginatedResults = getPaginatedResults(filteredBookings, {
        take,
        skip,
    });

    return paginatedResults;
}

async function getBookingsCount(where: BookingWhereQuery) {
    if (!where) {
        return bookings.length;
    }

    const filteredBookings = getFilteredResults(where);

    return filteredBookings.length;
}

function getPaginatedResults(
    data: BookingType[],
    {
        skip,
        take,
    }: {
        skip?: number;
        take?: number;
    }
) {
    const bookings = [...data];

    if (take && skip) {
        return bookings.slice(skip, skip + take);
    }

    if (take && !skip) {
        return bookings.slice(0, take);
    }

    if (!take && skip) {
        return bookings.slice(skip);
    }

    return bookings;
}

function getFilteredResults(where: BookingWhereQuery) {
    // filter the records
    let bookingsList = bookings;

    for (let key in where) {
        if (key === 'id') {
            bookingsList = bookingsList.filter(
                booking => booking.id === where.id
            );
        }

        if (key === 'name' && where.name) {
            bookingsList = bookingsList.filter(booking =>
                booking.name.toLowerCase().includes(where.name?.toLowerCase()!)
            );
        }

        if (key === 'email' && where.email) {
            bookingsList = bookingsList.filter(booking =>
                booking.email.includes(where.email!)
            );
        }

        if (key === 'phone' && where.phone) {
            bookingsList = bookingsList.filter(booking =>
                booking.phone.includes(where.phone!)
            );
        }

        if (key === 'gender' && where.gender) {
            bookingsList = bookingsList.filter(
                booking => booking.gender === where.gender
            );
        }

        if (key === 'dateBooked' && where.dateBooked) {
            bookingsList = bookingsList.filter(
                booking => booking.dateBooked === where.dateBooked
            );
        }

        if (key === 'bookedBy' && where.bookedBy) {
            bookingsList = bookingsList.filter(booking =>
                booking.bookedBy.includes(where.bookedBy!)
            );
        }

        if (key === 'completeDetails' && where.completeDetails) {
            bookingsList = bookingsList.filter(
                booking => booking.completeDetails === where.completeDetails
            );
        }

        if (key === 'bookedBy' && where.bookedBy) {
            bookingsList = bookingsList.filter(booking =>
                booking.bookedBy.includes(where.bookedBy!)
            );
        }
    }

    return bookingsList;
}

export { getBookings, getBookingsCount };

function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(sleep);
        }, 10000);
    });
}
