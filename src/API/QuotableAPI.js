const URL_BASE = "https://api.quotable.io"

export function getRandomQuote(){
    const url = URL_BASE + "/random"
    return fetch(url)
            .then(result => result.json())
            .catch(error => console.error(error))
}