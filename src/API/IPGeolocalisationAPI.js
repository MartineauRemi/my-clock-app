const url = "https://freegeoip.app/json/"

export function getLocalisationFromAPI(){
    return fetch(url)
            .then(data => data.json())
            .catch(error => console.error(error))
}