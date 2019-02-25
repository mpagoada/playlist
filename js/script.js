/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Videogames","Solo","Runaway","505", "West Coast"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
var images = ["https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Lana_Del_Rey_-_Video_Games_single_cover.png/220px-Lana_Del_Rey_-_Video_Games_single_cover.png",
"https://thefader-res.cloudinary.com/private_images/w_760,c_limit,f_auto,q_auto:best/frank-ocean-blond-_xizevs/frank-ocean-blond-platinum.jpg",
"https://upload.wikimedia.org/wikipedia/en/thumb/6/66/Runaway_Kanye_West_artwork.png/220px-Runaway_Kanye_West_artwork.png",
"https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2Fdf8a3b303623e2b4e99e6a8af7e57807.1000x1000x1.jpg",
"https://is2-ssl.mzstatic.com/image/thumb/Features/v4/cc/3b/4e/cc3b4e36-b7cd-59fb-5e69-8a1bfa0291b2/dj.hrcbrzio.jpg/600x600bf.png"];
var artists = ["Lana del Rey","Frank Ocean","Kanye West","Arctic Monkeys","West Coast"];
var links = ["https://www.youtube.com/watch?v=cE6wxDqdOV0",
"https://www.youtube.com/watch?v=X_SEwgDl02E",
"https://www.youtube.com/watch?v=VhEoCOWUtcU",
"https://www.youtube.com/watch?v=iV5VKdcQOJE",
"https://www.youtube.com/watch?v=xgCSbwW_rLk"];
var lengths = ["4:46", "4:17", "9:07", "4:09", "4:13"];

function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
    songs.forEach(function(song) {
        $('#songs').append('<p>' + song + '</p>');
    });
    images.forEach(function(image) {
        $('#images').append('<p>' + '<img src="' + image + '">' + '</p>');
    });
    artists.forEach(function(artist) {
        $('#artists').append('<p>' + artist + '</p>'); 
    });
    links.forEach(function(link) {
        $('#links').append('<p>' + '<a href=' + link + '>' + 'Play song' + '</a>' + '</p>'); 
    });
    lengths.forEach(function(length) {
        $('#lengths').append('<p>' + length + '</p>'); 
    });
}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
    $("#images").empty();
    $("#artists").empty();
    $("#links").empty();
    $("#lengths").empty();
}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
    var userSong = $("#song").val();
    songs.push(userSong);
    var userArtist = $("#artist").val();
    artists.push(userArtist);
    var userLength = $("#length").val();
    lengths.push(userLength);
    var userImage = $('#image').val();
    images.push(userImage);
    var userLink = $('#link').val();
    links.push(userLink);
    
    console.log(songs);
    console.log(artists);
}

$("#add").click(function() {
    console.log('hi');
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();

console.log($('#add'));
