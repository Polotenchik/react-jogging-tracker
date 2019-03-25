import { keyAccessToken, keyTokenType } from './constants';

export const isAuthenticate = () => {
    return (
        !!localStorage.getItem(keyAccessToken) && !!localStorage.getItem(keyTokenType)
    );
};

export const getKeyAccess = () => {
    return ( 
       `${localStorage.getItem(keyTokenType)} ${localStorage.getItem(keyAccessToken)}`
    );
};

export const getAddJogBody = () => {
    return null;
};

export const isNumber = (n) => {
    return !isNaN(parseFloat(n)) && isFinite(n);
};