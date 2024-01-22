import { users } from './data';

interface UserQuery {
    take?: number;
    skip?: number;
}
async function getUsers({ take, skip }: UserQuery) {
    if (take && skip) {
        return users.slice(skip, skip + take);
    }

    if (take && !skip) {
        return users.slice(0, take);
    }

    if (!take && skip) {
        return users.slice(skip);
    }

    return users;
}

async function getUsersCount() {
    return users.length;
}

export { getUsers, getUsersCount };
