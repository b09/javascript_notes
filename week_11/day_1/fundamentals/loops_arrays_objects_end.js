var sports = ['football', 'tennis', 'rugby'];
var firstSport = sports[0];
var secondSport = sports[1];

sports.push('curling');

sports.push('snooker');
sports.push('darts');

var lastSport = sports[sports.length - 1];

sports.pop()

sports.unshift('basketball');

sports.shift();

sports.splice(3, 1);

// console.log(sports);

for (var currentSport of sports) {
  var bigSport = currentSport.toUpperCase();
  // console.log( bigSport );
}

for (var i = 0; i < sports.length; i++) {
  var currentSport = sports[i];
  var bigSport = currentSport.toUpperCase();
  // console.log( bigSport );
}

for (var i = sports.length - 1; i >= 0; i--) {
  var currentSport = sports[i];
  var bigSport = currentSport.toUpperCase();
  // console.log( bigSport );
}

var movie = {
  title: 'It\'s a Wonderful Life',
  year: 1946,
  language: 'Spanish'
};

var moviesTitle = movie.title;

movie.cast = ['James Stewart', 'Donna Reed'];

movie.language = 'English';
movie['language'] = 'French';

movie.ratings = {
  personal: 70,
  critic: 94,
  audience: 95
};
// console.log(movie);

for (var key in movie) {
  var value = movie[key];
  // console.log(`The ${key} is ${value}`);
}

var properties = Object.keys(movie);

for (var i = 0; i < properties.length; i++) {
  var key = properties[i];
  var value = movie[key];
  console.log(`The ${key} is ${value}`);
}
