const covers = [
    [1, "50 Cent (The Baseballs)", "Candy Shop"],
    [2, "Adele (Maiya Sykes)", "Hello"],
    [3, "Aerosmith (Postmodern Jukebox) ", "Dream On"],
    [4, "Alice Cooper (Pat Boone) ", "No More Mr. Nice Guy"],
    [5, "Avril Lavigne (Postmodern Jukebox)", "Complicated"],
    [6, "Belinda Carlisle (MxPx)", "Heaven Is A Place On Earth"],
    [7, "Beyonce (Kadebostany)", "Crazy in Love"],
    [8, "Billy Idol (Leo Moracchioli)", "White Wedding"],
    [9, "Billy Preston [or Joe Cocker] (Tommee Profitt)", "You Are So Beautiful"],
    [10, "Blondie (Postmodern Jukebox)", "Call Me"],
    [11, "Blondie (Postmodern Jukebox)", "Heart of Glass"],
    [12, "Carly Rae Jepson (Postmodern Jukebox) ", "Call Me Maybe"],
    [13, "Chris Isaak (Daisy Gray)", "Wicked Game"],
    [14, "Coldplay (The Dirty Heads)", "Viva La Vida  "],
    [15, "Coldplay (Willie Nelson)", "The Scientist"],
    [16, "Coolio (Taylor Reed)", "Gangster's Paradise"],
    [17, "Daft Punk (You are So French)", "Get Lucky"],
    [18, "Deep Purple (Pat Boone)", "Smoke On The Water"],
    [19, "Divynals (Scala & Kolacny Brothers)", "I Touch Myself"],
    [20, "Don Henley  (The Ataris)", "The Boys of Summer"],
    [21, "Duran Duran (Reel Big Fish)", "Hungry Like A Wolf"],
    [22, "Ed Sheeran (Our Hollow, Our Home)", "Shape Of You"],
    [23, "Elvis Presley (Tommee Profitt)", "Can't Help Falling in Love"],
    [24, "George Michael (Limp Bizkit)", "Faith"],
    [25, "George Michael (Seether)", "Careless Whisper"],
    [26, "Gotye (Postmodern JukeBox)", "Somebody That I Used To Know"],
    [27, "Green Day (Scala & Kolacny Brothers)", "Wake Me Up When September Ends"],
    [28, "Guns n Roses (Sheryl Crow)", "Sweet Child O' Mine"],
    [29, "Imagine Dragons (Pentatonix)", "Radioactive"],
    [30, "Joan Baez (Judas Priest)", "Diamonds and Rust"],
    [31, "Joe Walsh (Godsmack)", "Rocky Mountain Way"],
    [32, "Joy Division (Nouvelle Vague)", "Love Will Tear Us Apart"],
    [33, "Kansas (Neoni)", "Carry On Wayward Son"],
    [34, "Kate Bush (Martin Newnham)", "Cloudbusting"],
    [35, "Kate Bush (Rain Paris)", "Running Up That Hill"],
    [36, "Kelly Clarkson (Mykal Kilgore)", "Since U Been Gone"],
    [37, "Lady Gaga (Postmodern Jukebox)", "Bad Romance"],
    [38, "Lana Del Rey (Scala & Kolacny Brothers)", "Video Games"],
    [39, "Led Zeppelin (2Cellos)", "Whole Lotta Love"],
    [40, "Led Zeppelin (Pat Boone)", "Stairway To Heaven"],
    [41, "Luis Fonsi, Daddy Yankee, Bieber (Postmodern Jukebox)", "Despacito"],
    [42, "Macklemore (Richard Cheese)", "Thrift Shop"],
    [43, "Massive Attack (Aurora)", "Teardrop"],
    [44, "Meghan Trainor (Postmodern Jukebox)", "All About That Bass"],
    [45, "Metallica (Pat Boone)", "Enter Sandman"],
    [46, "Michael Jackson (James Hill with His Imaginary Band)", "Billie Jean"],
    [47, "Michael Jackson (Postmodern Jukebox ft. Wayne Brady)", "Thriller "],
    [48, "Motorhead (Coal)", "Ace Of Spades"],
    [49, "New Order (Nouvelle Vague)", "Blue Monday"],
    [50, "Nirvana (Postmodern Jukebox)", "Smells Like Teen Spirit"],
    [51, "Oasis (The Mike Flowers Pops)", "Wonderwall"],
    [52, "Outkast (Obadiah Parker)", "Hey Ya"],
    [53, "Peter Gabriel (Morgan James)", "Sledgehammer"],
    [54, "Pharrell Williams (Postmodern Jukebox)", "Happy"],
    [55, "Phil Collins (Lorde)", "In The Air Tonight"],
    [56, "Violent Femmes (Nouvelle Vague)", "Blister in the Sun"],
    [57, "Pink Floyd (Scissors Sisters)", "Comfortably Numb"],
    [58, "Psy (Richard Cheese)", "Gangnam Style"],
    [59, "Queen (Jake Shimabukuro)", "Bohemian Rhapsody"],
    [60, "Radiohead (Scala & Kolacny Brothers) ", "Creep"],
    [61, "Rhianna (Postmodern Jukebox)", "Umbrella"],
    [62, "Rick Springfield (Face Vocal Band)", "Jessie's Girl"],
    [63, "Snoop Dog (Richard Cheese)", "Gin And Juice"],
    [64, "Snow Patrol (Sofi Tukker)", "Chasing Cars"],
    [65, "Spice Girls (Postmodern Jukebox)", "Wannabe"],
    [66, "Stevie Wonder (Red Hot Chili Peppers)", "Higher Ground"],
    [67, "Survivor (Jenn Grant)", "Eye of the Tiger"],
    [68, "Tears for Fears (Disturbed)", "Shout"],
    [69, "Tears for Fears (Lorde)", "Everybody Wants to Rule the World"],
    [70, "The Beatles (Siouxsie And The Banshees)", "Dear Prudence"],
    [71, "The Cars (Deftones)", "Drive"],
    [72, "The Cranberries (Postmodern Jukebox)", "Zombie"],
    [73, "The Eurythmics (Marilyn Manson)", "Sweet Dreams"],
    [74, "The Killers (Blake Lewis)", "Mr. Brightside"],
    [75, "The Police (Postmodern Jukebox)", "Every Breath You Take  "],
    [76, "The Stranglers (Nouvelle Vague)", "Golden Brown"],
    [77, "The Temptations (Love and Rockets)", "Ball Of Confusion"],
    [78, "The Who (Puddles Pity Party)", "Pinball Wizard"],
    [79, "Toto  (Hannah Bolton and Leo)", "Africa"],
    [80, "White Stripes (Postmodern Jukebox)", "Seven Nation Army"],
    [81, "Sheryl Crow (Ultimate Painting)  ", "All I Wanna Do"],
    [82, "The Police (The Infamous Stringdusters)  ", "Walking on the Moon"],
    [83, "Pink Floyd (The Bad Plus) ", " Comfortably Numb"],
    [84, "Bee Gees (Lindi Ortega)  ", "To Love Somebody"],
    [85, "Fleetwood Mac (The Electric Peanut Butter Company)", "Dreams"],
    [86, "Van Morrison (Jason Isbell)", "Into the Mystic"],
    [87, "? And the Mysterions (The Tibbs)", "96 Tears"],
    [88, "Human League (The Weather Station)", "Don't You Want Me"],
    [89, "Rupert Holmes (Jack Johnson)", "Escape (The Pina Colada Song)"],
    [90, "Hall and Oates (Grace Mitchell)", "Maneater"],
    [91, "Fleetwood Mac (Leo Kottke)", "Oh Well"],
    [92, "Bee Gees (Funky Butt Brass Band)  ", "Stayin' Alive"],
    [93, "Joni Mitchell (Sergio Mendes & Brasil '66)  ", "Chelsea Morning"],
    [94, "Nelly (Jenny Owen Youngs)", "Hot in Herre"],
    [95, "Taylor Swift (Imagine Dragons)", "Blank Space"],
    [96, "The Cure (Mariee Sioux)", "Love Song"],
    [97, "Bee Gees (The Bird and The Bee)  ", "How Deep Is Your Love"],
    [98, "Taylor Swift (Us The Duo)", "Shake It Off"],
    [99, "Sam Smith (Angus & Julia Stone)", "Stay With Me"],
    [100, "Third Eye Blind (Jack And White)", "How's It Going To Be"],
    [101, "REM (The Corrs)", "Everybody Hurts"],
    [102, "Katy Perry (William Fitzsimmons)", "I Kissed A Girl"],
    [103, "Justin Timberlake (Glen Hansard)", "Cry me a River"],
    [104, "Nirvana (Patti Smith)", "Smells Like Teen Spirit"],
    [105, "Chuck Berry (Peter Tosh)", "Johnny B. Goode"],
    [106, "Billy Roberts [or Jimi Hendrix] (Charlotte Gainsbourg)", "Hey Joe"],
    [107, "The Cure (Kat Edmonson)", "Just Like Heaven"],
    [108, "Robert Hazard [This was the original, but Cyndi Lauper accepted]", "Girls Just Wanna Have Fun"],
    [109, "The Moody Blues (The Dickies)", "Nights In White Satin"],
    [110, "The Archies (Bob Marley)", "Sugar, Sugar"],
    [111, "Nina Simone (Muse)", "Feeling Good"],
    [112, "Bob Dylan (Elvis Presley)", "Tomorrow Is A Long Time"],
    [113, "U2 (Clivilles & Cole)", "In the Name of Love"],
    [114, "The Eagles (The Cat Empire)", "L'Hotel Californie"],
    [115, "The Beatles (Telly Savalas)", "Something"],
    [116, "Queen & David Bowie (My Chemical Romance)", "Under Pressure"],
    [117, "Queen (Metallica)", "Stone Cold Crazy"],
    [118, "Fleetwood Mac (Smashing Pumpkins)", "Landslide"],
    [119, "Prince (Foo Fighters)", "Darling Nikki"],
    [120, "The Simpsons (Sonic Youth)", "The Simpsons Theme"],
    [121, "Oasis (Cat Power)", "Wonderwall"],
    [122, "The Beatles (Jad Fair)", "Tomorrow Never Knows"],
    [123, "Gene Wilder [or Willie Wonka] (Fiona Apple)", "Pure Imagination"],
    [124, "Cat Stevens (Johnny Cash)", "Father and Son"],
    [125, "Ray Charles (Johnny Cash and June Carter)", "I Got A Woman"],
    [126, "Bob Marley (Johnny Cash & Joe Strummer)", "Redemption Song"],
    [127, "Depeche Mode (Johnny Cash)", "Personal Jesus"],
    [128, "Pulp (William Shatner)", "Common People"],
    [129, "The Cure (Grant Lee Phillips)", "Boys Don't Cry"],
    [130, "Prince [or the Bangles] (Billie Joe Armstrong)", "Manic Monday"],
    [131, "Neil Young (Pussy Riot)", "Keep on Rockin In the Free World"],
    [132, "The Boomtown Rats (Ron Sexsmith)", "I Don't Like Mondays"],
    [133, "The Only Ones (The Coal Porters)", "Another Girl, Another Planet"],
    [134, "John Denver (Toots and the Maytals)", "Take Me Home Country Roads"],
    [135, "The Byrds (Husker Du)", "Eight Miles High"],
    [136, "Eminem (Sharks in Your Mouth)", "Lose Yourself"],
    [137, "Aqua (Alex Terrible)", "Barbie Girl"],
    [138, "NSYNC (Our Last Night)", "Bye Bye Bye"],
    [139, "Radiohead (Sad Kermit)", "Creep"],
    [140, "Genesis (Disturbed)", "Land of Confusion"],
    [141, "Frankie Valli and the 4 Seasons (Muse)", "Can't Take My Eyes Off You"],
    [142, "Nine Inch Nails (Johnny Cash)", "Hurt"],
    [143, "The Beatles (Junior Parker)", "Tomorrow Never Knows"],
    [144, "The Hollies (Shovels & Rope)", "The Air That I Breathe"],
    [145, "Astrud Gilberto, Joao Gilberto and Stan Getz (Nat King Cole)", "The Girl From Ipanema"],
    [146, "Gerry Rafferty (Lucius)", "Right Down the Line"],
    [147, "The Beatles (Jerry Garcia)", "I Saw Her Standing There"],
    [148, "Neil Young (Lord Huron)", "Harvest Moon"],
    [149, "Maroon 5 (Pentatonix)", "Moves Like Jagger"],
    [150, "Dua Lipa (Pentatonix)", "Break My Heart"],
    [151, "Demi Levato (Pentatonix)", "Sorry Not Sorry"],
    [152, "Beatles (Amy Winehouse)", "All My Lovin'"],
    [153, "Beatles (MonaLisa Twins)", "If I Fell"],
    [154, "Creedence Clearwater Revival (Ike & Tina Turner)", "Proud Mary"],
    [155, "Bruce Springsteen (Patti Smith)", "Because the Night"],
    [156, "Wilburt Harrison (Bryan Ferry)", "Let's Stick Together"],
    [157, "Bob Marley (Eric Clapton)", "I Shot The Sheriff"],
    [158, "Keane (Lily Allen)", "Somewhere Only We Know"],
];