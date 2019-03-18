import * as config from './constants';

export const fetchToken = async () => {
    const response = await fetch(
        config.url, 
        { 
            method: config.requestType,
            body: config.requstBody, 
            headers: config.requestHeaders 
        }
    );

    return response.json();
}
