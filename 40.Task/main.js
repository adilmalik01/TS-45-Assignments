var make_album = function (artist, album, tracks) {
    var albumReturn = {
        artist: artist,
        album: album,
    };
    // here check if track is not undefined soo albumReturn.track equal to tracks
    if (tracks !== undefined) {
        albumReturn.track = tracks;
    }
    return albumReturn;
};
console.log(make_album("Zayn Malik", "TU he kahan"));
console.log(make_album("Bilal Saeed", "Barish", 9)); //here I define the track value
console.log(make_album("Hasan Shah", "Bhegi ratien"));
console.log(make_album("Ellie Glouding", "Love me like you do", 4));
