import { keyAccessToken, keyTokenType } from './constants';

export const isAuthenticate = () => {
    return (
        !!localStorage.getItem(keyAccessToken) && !!localStorage.getItem(keyTokenType)
    );
}

export const getKeyAccess = () => {
    return ( 
       `${localStorage.getItem(keyTokenType)} ${localStorage.getItem(keyAccessToken)}`
    );
}