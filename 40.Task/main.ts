/*
Album: Write a function called make_album() that builds a Object describing a music album.
The function should take in an artist name and an album title,
and it should return a Object containing these two pieces of information.
Use the function to make three dictionaries representing different albums.
Print each return value to show that Objects are storing the album information correctly.
Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

*/
// here I am ussing alias object 
type Albums = {
    artist: string;
    album: string;
    track?: number /// here nalish opreatar ?? mean optional
}



const make_album = (artist: string, album: string, tracks?: number): Albums => {
    let albumReturn: Albums = {
        artist: artist,
        album: album,
    }
    // here check if track is not undefined soo albumReturn.track equal to tracks
    if (tracks !== undefined) {
        albumReturn.track = tracks
    }

    return albumReturn
}

console.log(make_album("Zayn Malik", "TU he kahan"));
console.log(make_album("Bilal Saeed", "Barish", 9)); //here I define the track value
console.log(make_album("Hasan Shah", "Bhegi ratien"));
console.log(make_album("Ellie Glouding", "Love me like you do", 4));
