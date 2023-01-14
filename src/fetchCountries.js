//  export function fetchCountries(name) {
//      const resp = fetch(`https://restcountries.com/v2/name/${name}?fields=name,capital,population,flags,languages`);
//      return resp.then(resp => {
//          if (resp.ok) {
//             return resp.json()
//          } else {
//             throw new Error(resp.statusText)
//          }
//      })
//  }

export function fetchImages(name) {
    const BASE_URL = 'https://pixabay.com/api/';
    const KEY = '32844399-402b025363825ff7850242d10';

    return fetch(`${BASE_URL}?key=${KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=40`).then(resp => {
        if (!resp.ok) {
            throw new Error(resp.status);
        }
        return resp.json();
    }).then(data => {
        if (!data.total) {
            throw new Error(data.total);
        }
        return data;
    })
}

// console.log(fetchImages("car"));