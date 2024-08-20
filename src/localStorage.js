export function populateLocalStorage(key, value){
    localStorage.setItem(key, JSON.stringify(value))
    return JSON.parse(localStorage.getItem(key))
}

export function getLocalStorage(key){
    return JSON.parse(localStorage.getItem(key))
}
