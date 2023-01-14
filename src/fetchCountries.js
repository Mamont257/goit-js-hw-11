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