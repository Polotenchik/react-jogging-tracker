import * as constants from './constants';

export const fetchToken = async () => {
    const response = await fetch(
     constants.url, 
        { 
            method: constants.requestType,
            body: constants.requstBody, 
            headers: constants.requestHeaders 
        }
    );

    return response.json();
}
