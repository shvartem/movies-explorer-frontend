import {
    BASE_API_URL,
    LOGIN_API_URL,
    LOGOUT_API_URL,
} from '../utils/constants';

const checkResponse = (response) => {
    if (!response.ok) {
        throw response.status;
    }

    return response.json();
};

const getData = (url, options) =>
    fetch(`${BASE_API_URL}/${url}`, options)
        .then(checkResponse)
        .catch((err) => console.error(err.message));

export const login = (authData) => {
    const options = {
        method: 'POST',
        body: JSON.stringify(authData),
    };

    return getData(LOGIN_API_URL, options);
};

export const logout = () => {
    const options = {
        method: 'DELETE',
        credentials: 'include',
    };

    return getData(LOGOUT_API_URL, options);
};
