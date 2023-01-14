import './css/styles.css';
import { fetchCountries } from './fetchCountries'
// import Debounce from "lodash.debounce";
// import Notiflix from 'notiflix';










































// const DEBOUNCE_DELAY = 300;

// const input = document.querySelector('#search-box');
// const country = document.querySelector(".country-list");
// const countryInfo = document.querySelector(".country-info");

// input.addEventListener('input', new Debounce(onInput, DEBOUNCE_DELAY));

// function onInput(evt) {
//     clearMarkup();

//     if (evt.target.value.trim()) {
//         fetchCountries(evt.target.value.trim()).then(data => addList(data)).catch(() => Notiflix.Notify.failure('Oops, there is no country with that name'))
//     }
// }

// function addList(countryList) {
//     if (countryList.length > 10) {
//         Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
//     } else if (countryList.length > 1) {
//         country.innerHTML = createListCountry(countryList);
//     } else {
//         countryInfo.innerHTML = createInfoCountry(countryList);
//     }
// }

// function clearMarkup() {
//     country.innerHTML = '';
//     countryInfo.innerHTML = '';
// }

// function createListCountry(countryList) {
//     return countryList.map(({ flags, name }) => `<li class="country-item"><img src="${flags.svg}" alt="" class="country-img" width="25px">${name}</li>`).join('');
// }

// function createInfoCountry(countryList) {
//     return countryList.map(({ capital, population, languages, flags, name }) =>
//     `<div class="country-item info"><img src="${flags.svg}" alt="" class="country-img" width="25px">${name}</div>
//     <div class="country-item"><span class="country-item_text">Capital: </span> ${capital}</div>
//     <div class="country-item"><span class="country-item_text">Population: </span> ${population}</div>
//     <div class="country-item"><span class="country-item_text">Languages: </span> ${languages.map(lan => lan.name)}</div>`).join('');
// }