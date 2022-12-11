const allCategories = [
    [disney, 'disneySongs', 'Disney'],
    [sixties, 'sixtiesSongs', 'Sixties'],
    [seventies, 'seventiesSongs', 'Seventies'],
    [eighties, 'eightiesSongs', 'Eighties'],
    [nineties, 'ninetiesSongs', 'Nineties'],
    [twoThousands, 'twoThousandsSongs', '2000s'],
    [twentyTens, 'twentyTenSongs', '2010s'],
    [twentyTwenties, 'twentyTwentiesSongs', '2020s'],
    [rock, 'rockSongs', 'Rock'],
    [protest, 'protestSongs', 'Protest']
];


function playAllSongs() {

    let chosenSongAndTitles = "";
    ////Get a random category


    try {
        chosenSongAndTitles = getRandom();
        console.log(chosenSongAndTitles);
        //keepTrackOfPlayedSongs(chosenSongAndTitles[1], chosenSongAndTitles[3]);
        //keepTrackOfPlayedSongs(chosenSongAndTitles);
        getTitles(chosenSongAndTitles[1], chosenSongAndTitles[2], chosenSongAndTitles[3], chosenSongAndTitles[4]);
    } catch (err) {
        console.log(err);
    }

};

function getRandom() {



    let newSong = "";
    let rndSongsCategory = "";
    let currentRandomNumber = 1000;




    let allSongsLength = disney.length + sixties.length + seventies.length + eighties.length + nineties.length + twoThousands.length + twentyTens.length + twentyTwenties.length + rock.length + protest.length;
    //console.log("allSongsLength: ", allSongsLength);

    let rndCategoryNumber = Math.floor(Math.random() * allCategories.length);
    rndSongsCategory = allCategories[rndCategoryNumber][1];
    rndTitlesCategory = allCategories[rndCategoryNumber][0];
    let maxCategoryCount = rndTitlesCategory.length;
    currentRandomNumber = Math.floor(Math.random() * maxCategoryCount) + 1;



    newSong = rndSongsCategory + currentRandomNumber;
    //console.log(rndSongsCategory, rndCategoryNumber, newSong);
    //console.log(rndTitlesCategory[currentRandomNumber - 1]);

    let checked = checkPlayed(newSong);
    //console.log(checked);
    return [checked, rndSongsCategory, rndCategoryNumber, currentRandomNumber, allSongsLength];
};

function checkPlayed(songCandidate) {

    let songIndex = playedSongArray.indexOf(songCandidate);
    // console.log("Index: ", songIndex);
    //console.log("First: ", songCandidate);

    if (songIndex < 0) {
        //  console.log("Accept: ", songCandidate);
        return songCandidate;

    } else {
        console.log("INDEX EXCEEDED!!!!");
        console.log("Reject: ", songCandidate);
        getRandom();
    }

};

function getTitles(songCat, songCatNum, currRand, allLength) {
    let newS = songCat + currRand;
    // console.log(songCat, songCatNum, newS, currRand, allLength);

    let currentSong = "../music/" + songCat + "/" + currRand + ".mp3";

    console.log(currentSong);

    let titleGroup = allCategories[songCatNum][0][currRand - 1];

    //console.log("Title Group: ", titleGroup);
    //console.log(allCategories[songCatNum][2]);

    //console.log(rndSongs);
    document.getElementById("answer1").innerText = titleGroup[1];
    document.getElementById("answer2").innerText = titleGroup[2];
    document.getElementById("categoryTitle").innerText = allCategories[songCatNum][2];

    let catMax = allCategories[songCatNum][0].length;
    //console.log(catMax);

    let playedCategoryCount = getPlayedCategoryCount(songCat, catMax);
    //presentTitles();
    playSong(currentSong);
    keepTrackOfPlayedSongs(playedCategoryCount, currRand);
    playedNumber = playedSongArray.length;
    document.getElementById("songsPlayed").innerText = playedNumber;
    document.getElementById("songsRemaining").innerText = allLength - playedNumber;
    //console.log(playedSongArray);



};

function getPlayedCategoryCount(cat, catMax) {

    let playedCount = 0;
    for (j = 0; j < playedSongArray.length; j++) {

        if (playedSongArray[j].includes(cat)) {
            playedCount++;
        }

    }
    console.log(cat, playedCount, catMax);

    if (playedCount >= catMax) {
        // chooseACategory();
        console.log("All Category Played? ", playedCount, catMax)
    } else {
        return cat;
    }

};