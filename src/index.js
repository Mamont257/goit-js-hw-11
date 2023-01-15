import './css/styles.css';
import { fetchImages } from './fetchImages'
import Notiflix from 'notiflix';
import SimpleLightbox from "simplelightbox";

let search = '';
let page = 1;

const form = document.querySelector(".search-form");
const gallery = document.querySelector(".gallery");
const guard = document.querySelector(".js-guard");

const options = {
    root: null,
    rootMargin: '300px',
    threshold: 1.0,
}

const observe = new IntersectionObserver(onAddImages, options)

form.addEventListener("submit", onSubmit);

function onSubmit(evt) {
    evt.preventDefault();
    // console.dir(evt.currentTarget.searchQuery.value);
    clearMarkup();

    search = evt.currentTarget.searchQuery.value.trim();
    if (search) {
        fetchImages(search).then(data => { createImages(data.hits); observe.observe(guard); Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`) })
        .catch(() => Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.'))
    }
}

function clearMarkup() {
    observe.unobserve(guard);
    gallery.innerHTML = '';
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
    // gallery.innerHTML = markup;
    gallery.insertAdjacentHTML('beforeend', markup)
}

function onAddImages(entries, observe) {
    console.log(entries);
    console.log(search);

        entries.forEach((entry) => {
        if(entry.isIntersecting){
            page+=1
            fetchImages(search, page).then(data => {
                createImages(data.hits);
                if(page === 13){
                    observe.unobserve(guard)
                }
            })
        }
    })
}