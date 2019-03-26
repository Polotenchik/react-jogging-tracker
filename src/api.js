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
};

export const fetchJogs = async () => {
    const response = await fetch(
        "https://jogtracker.herokuapp.com/api/v1/data/sync",
        {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Authorization": localStorage.getItem("token_type") + " " + localStorage.getItem("access_token")
            }
        }
    );

    return response.json();
};

export const addJog = async (data) => {
    const response = await fetch(
        "https://jogtracker.herokuapp.com/api/v1/data/jog",
        {   
            body: "date=" + data.date + "&time=" + data.time + "&distance=" + data.distance,
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Authorization": localStorage.getItem("token_type") + " " + localStorage.getItem("access_token"),
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }
    );

    await response.ok ? alert("Saved successful") : alert("The request failed");
};
