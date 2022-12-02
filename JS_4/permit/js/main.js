let numberOfFilms = ''
let personalMovieDB = {
    count: '',
    movies: {},
    actors: {}, 
    genres: [], 
    privat: false
};


personalMovieDB.numOfMovies = function(){
    while (numberOfFilms === '' || numberOfFilms === null){
        numberOfFilms = prompt('Сколько фильмов Вы посмотрели?');
    }
    personalMovieDB.count = numberOfFilms;
}


personalMovieDB.movies = function(){
    for (i = 0; i<2;){
        let film = prompt('Один из последних просмотренных фильмов?');
        let rate = prompt('На сколько оцените его?');
        if (film !== '' && rate !=='' && film !== null 
        && rate !== null && film.length < 50 ){
            personalMovieDB.movies[film] = rate;
            i++
        }
    }
}


personalMovieDB.status = function(){
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
    } else {
            console.log('Произошла ошибка');
    }
}


personalMovieDB.writeYourGenres = function() {
    for (i = 0; i < 3;){
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
        if (personalMovieDB.genres[i] !== '' && personalMovieDB.genres[i] !== null){
            i++
        }
    }
    personalMovieDB.genres.forEach((element, i) => {
        console.log(`Любимый жанр номер ${i+1} - это ${element}`)
    });
}


personalMovieDB.showMyDB = function() {
    if (personalMovieDB.privat === false){
        console.log(personalMovieDB);
    }
}


personalMovieDB.toggleVisibleMyDB = function() {
    if (personalMovieDB.privat === false){
        personalMovieDB.privat = true;
    } else {
        personalMovieDB.privat = false;
    }
}

console.log('Вызываем первый раз showMyDB - отображается, т.к. privat = false');
personalMovieDB.showMyDB();
console.log('Вызываем toggleVisibleMyDB, privat меняется на true');
personalMovieDB.toggleVisibleMyDB();
console.log('Вызываем ещё раз showMyDB, ничего не отбразилось, т.к. privat = true');
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();
