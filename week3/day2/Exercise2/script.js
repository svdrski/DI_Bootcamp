const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];


let myWatchedSeriesLength = myWatchedSeries.length;

let myWatchedSeriesSentence = myWatchedSeries.toString();

console.log( myWatchedSeriesLength );
console.log( myWatchedSeriesSentence );

console.log("I watched", myWatchedSeriesLength, "series :", myWatchedSeriesSentence  );

myWatchedSeries[2] = "friends";

myWatchedSeries.push("Lost");

myWatchedSeries.unshift("Brekbad");

myWatchedSeries.splice(1,1);

console.log(myWatchedSeries[1].charAt(2));

console.log(myWatchedSeries);


