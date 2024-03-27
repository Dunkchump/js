"use strict";


const numberOfFilms = +prompt("How many movies had you already wathed?", "");

const personalMovieDB = {
	count: numberOfFilms,
	movies: {

	},
	actors: {

	},
	genres: [

	],
	privat: false
    
};

const question = prompt("Один из просмотренных фильмов?", ""),
	  questionTwo = prompt("На сколько его оцените?", ""),
	  questionThre = prompt("Один из просмотренных фильмов?", ""),
	  questionFour = prompt("На сколько его оцените?", "");

personalMovieDB.movies[question] = questionTwo;
personalMovieDB.movies[questionThre] = questionFour;

console.log(personalMovieDB);