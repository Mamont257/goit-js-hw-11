import './css/styles.css';
import { fetchImages } from './fetchCountries'
import Debounce from "lodash.debounce";
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 700;


const form = document.querySelector(".search-form");
const gallery = document.querySelector(".gallery");
// console.log(gallery);

form.addEventListener("input", new Debounce(onInput, DEBOUNCE_DELAY));

function onInput(evt) {
    console.log(evt.target.value.trim());
    gallery.innerHTML = '';

    if (evt.target.value.trim()) {
        fetchImages(evt.target.value.trim()).then(data => createImages(data.hits)).catch(() => Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.'))
    }
}


function createImages(images) {
    // console.log(images.hits);
    const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => 
        `<div class="photo-card">
            <img src="${webformatURL}" alt="${tags}" loading="lazy" width="250px"/>
            <div class="info">
                <p class="info-item">
                <b>Likes ${likes}</b>
                </p>
                <p class="info-item">
                <b>Views ${views}</b>
                </p>
                <p class="info-item">
                <b>Comments ${comments}</b>
                </p>
                <p class="info-item">
                <b>Downloads ${downloads}</b>
                </p>
            </div>
        </div>`).join('');
    

    
    gallery.innerHTML = markup;
}









































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