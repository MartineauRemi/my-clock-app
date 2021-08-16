const url = "http://worldtimeapi.org/api/ip"

export function getTimeFromIPAddress(){
    return fetch(url)
            .then(data => data.json())
            .catch(error => console.error(error))
}