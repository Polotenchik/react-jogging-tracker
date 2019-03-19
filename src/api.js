import * as config from './config';

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

export const fetchJogs = async () => {
    const response = await fetch(
        config.jogsUrl,
        {   
            method: config.jogsRequestType,
            headers: config.jogsRequestHeaders
        }
    );

    return response.json();
}
