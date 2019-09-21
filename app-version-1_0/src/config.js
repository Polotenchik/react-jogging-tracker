import { getKeyAccess } from './helpers';

const keyAccess = getKeyAccess();

export const url = 'https://jogtracker.herokuapp.com/api/v1/auth/uuidLogin';

export const requestType = 'POST';

export const requstBody = 'uuid=hello';

export const requestHeaders = {
    "Accept": "application/json",
    "Content-Type": "application/x-www-form-urlencoded"
};



export const jogsUrl = 'https://jogtracker.herokuapp.com/api/v1/data/sync';

export const jogsRequestType = 'GET';

export const jogsRequestHeaders =  {
    "Accept": "application/json",
    "Authorization": localStorage.getItem("token_type") + " " + localStorage.getItem("access_token")
};
