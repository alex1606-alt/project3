let numberOfFilms = prompt("сколько фильмов посмотрел");

const adg =  prompt("последний просмотренный фильм");
const jkl = prompt("оценка этого фильма");




const personalMovie = {
    count: numberOfFilms,
    movies:{
    
    },
    actors:{
        name3:"jk",
        name4:"io"
    },
    genres:[1,5,7,4],
    privat: false
};

personalMovie.movies[adg] = jkl;





const outputElement = document.getElementById("output");
outputElement.textContent = numberOfFilms;
const objElement = document.getElementById("obj");
objElement.textContent = JSON.stringify(personalMovie, null, 2);




















