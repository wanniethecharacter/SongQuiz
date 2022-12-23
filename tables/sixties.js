const sixties = [
    [1, "Dusty Springfield", "Son of a Preacher Man"],
    [2, "James Brown", "Papa's Got a Brand New Bag"],
    [3, "Elvis", "Suspicious Minds"],
    [4, "Foundations", "Build me up Buttercup"],
    [5, "Louis Armstrong", "What a Wonderful World"],
    [6, "Yusuf, Cat Stevens", "The First Cut Is The Deepest"],
    [7, "Supremes", "Baby Love"],
    [8, "Bob Dylan", "Mr. Tambourine Man"],
    [9, "Nancy Sinatra", "Bang Bang(Shot You Down)"],
    [10, "The Beatles", "Yellow Submarine"],
    [11, "The Beatles", "Twist & Shout"],
    [12, "The Ronettes", "Be My Baby"],
    [13, "Elvis Presley", "Can't Help Falling in Love"],
    [14, "The Beatles", "Hey Jude"],
    [15, "The Beatles", "Ob La Di Ob La Da"],
    [16, "The Isley Brothers", "Twist and Shout"],
    [17, "The Beatles", "Lucy in the Sky with Diamonds"],
    [18, "Ben E King", "Stand By me"],
    [19, "Norman Greenbaum", "Spirit In the Sky"],
    [20, "The Monkees", "I'm a Believer"],
    [21, "Manfred Mann", "Do Wah Diddy Diddy"],
    [22, "Herman's Hermits", "I'm Into Something Good"],
    [23, "Sonny & Cher", "I Got You Babe"],
    [24, "The Four Tops", "Reach Out, I'll Be There"],
    [25, "The Shadows", "Apache"],
    [26, "Wilson Pickett", "In the Midnight Hour"],
    [27, "The Archies", "Sugar Sugar"],
    [28, "The Troggs", "Wild Thing"],
    [29, "Chubby Checker", "Let's Twist Again"],
    [30, "Petula Clark", "Downtown"],
    [31, "The Kinks", "All Day and All of the Night"],
    [32, "Yusuf  Cat Stevens", "Matthew & Son"],
    [33, "The Animals", "The House of the Rising Sun"],
    [34, "Booker T and the MGs", "Green Onions"],
    [35, "Wilson Pickett", "Land of a Thousand Dances"],
    [36, "Johnny Kidd and the Pirates", "Shakin' All Over"],
    [37, "The Righteous Brothers", "Unchained Melody"],
    [38, "Otis Redding", "The Dock of the Bay"],
    [39, "The Animals", "We've Gotta Get Out of this Place"],
    [40, "Status Quo", "Pictures of Matchstick Men"],
    [41, "Marvin Gaye", "I Heard it Through the Grapevine"],
    [42, "The Beach Boys", "Good Vibrations"],
    [43, "Roy Orbison", "Pretty Woman"],
    [44, "The Monkees", "Daydream Believer"],
    [45, "Gene Pitney", "Something's Gotten Hold of my Heart"],
    [46, "The Crystals", "Then He Kissed Me"],
    [47, "The Hollies", "He Ain't Heavy He's My Brother"],
    [48, "Percy Sledge", "When a Man Loves a Woman"],
    [49, "Aretha Franklin", "I Say a Little Player"],
    [50, "Desmond Decker and The Aces", "Israelites"],
    [51, "David Bowie", "Space Oddity"],
    [52, "Aretha Franklin", "Chain of Fools"],
    [53, "Janis Joplin", "Piece of My Heart"],
    [54, "Bob Dylan", "I Want You"],
    [55, "Bob Dylan", "Positively 4th Street"],
    [56, "Bob Dylan", "Tangled up in Blue"],
    [57, "Cream", "I Feel Free"],
    [58, "The Beatles", "You've Got To Hide Your Love Away"],
    [59, "Creedence Clearwater Revival", "Born On The Bayou"],
    [60, "Crosby, Stills & Nash", "Suite, Judy Blue Eyes"],
    [61, "Crosby, Stills, Nash & Young", "Teach Your Children"],
    [62, "Donovan", "Hurdy Gurdy Man"],
    [63, "The Doors", "Alabama Song (Whisky Bar)"],
    [64, "Fleetwood Mac", "Albatross"],
    [65, "Fleetwood Mac", "Black Magic Woman"],
    [66, "The Byrds", "Turn! Turn! Turn!"],
    [67, "Four Tops", "Bernadette"],
    [68, "Frank Sinatra", "Summer Wind"],
    [69, "Glen Campbell", "Wichita Lineman"],
    [70, "The Box Tops", "The Letter"],
    [71, "Jefferson Airplane", "White Rabbit"],
    [72, "Jimi Hendrix", "The Wind Cries Mary"],
    [73, "Joe Cocker", "With A Little Help From My Friends"],
    [74, "Simon & Garfunkel", "April Come She Will"],
    [75, "The Rolling Stones", "Ruby Tuesday"],
    [76, "Simon & Garfunkel", "I Am a Rock"],
    [77, "Simon & Garfunkel", "The 59th Street Bridge Song (Feelin' Groovy)"],
    [78, "Smith", "Baby It's You"],
    [79, "The Band", "The Weight"],
    [80, "The Beach Boys", "Sloop John B"],
    [81, "The Beatles", "Drive My Car"],
    [82, "The Beatles", "I Am The Walrus"],
    [83, "The Beatles", "Norwegian Wood (This Bird Has Flown)"],
    [84, "The Beatles", "You Never Give Me Your Money"],
    [85, "The Who", "I Can See For Miles"],
    [86, "The Who", "I'm Free"],
    [87, "Thunderclap Newman", "Something in the Air"],
    [88, "Tommy James & The Shondells", "I Think We're Alone Now"],
    [89, "The Supremes", "You Can't Hurry Love"],
    [90, "American Breed", "Bend Me, Shape Me"],
    [91, "Andy Williams", "Can't Take My Eyes Off You"],
    [92, "Billy Fury", "Halfway To Paradise"],
    [93, "Bobby Hebb", "Sunny"],
    [94, "Tom Jones", "Help Yourself"],
    [95, "Carole King", "It Might as Well Rain Until September"],
    [96, "Chuck Berry", "You Never Can Tell"],
    [97, "Clarence Carter", "Patches"],
    [98, "Classics IV", "Spooky"],
    [99, "Cream", "White Room"],
    [100, "Crosby, Stills & Nash", "Marrakesh Express2005"],
    [101, "Danny Williams", "Moon River"],
    [102, "Dean Martin", "Gentle on My Mind"],
    [103, "Deep Purple", "Hush"],
    [104, "Dionne Warwick", "Do You Know the Way to San Jose"],
    [105, "Dionne Warwick", "Walk on By"],
    [106, "Donovan", "Jennifer Juniper"],
    [107, "Elvis Presley", "Don't Be Cruel"],
    [108, "Elvis Presley", "It's Now or Never"],
    [109, "Elvis Presley", "Return to Sender"],
    [110, "Engelbert Humperdinck", "The Last Waltz"],
    [111, "Frank Sinatra", "My Way"],
    [112, "Frank Sinatra, Nancy Sinatra", "Somethin' Stupid"],
    [113, "Frankie Valli & The Four Seasons", "Beggin'"],
    [114, "Gary Puckett & The Union Gap", "Young Girl"],
    [115, "Gerry & The Pacemakers", "Ferry Cross the Mersey"],
    [116, "Harry Nilsson", "Everybody's Talkin'"],
    [117, "Herb Alpert & The Tijuana Brass", "This Guy's In Love With You"],
    [118, "Hugo Montenegro & His Orchestra, Hugo Montenegro", "The Good, the Bad and the Ugly"],
    [119, "Ike & Tina Turner", "River Deep Mountain High"],
    [120, "Jackie Wilson", "(Your Love Keeps Lifting Me) Higher & Higher"],
    [121, "Jackie Wilson", "I Get The Sweetest Feeling"],
    [122, "James Brown", "It's A Man's, Man's, Man's World"],
    [123, "José Feliciano", "Light My Fire"],
    [124, "Jr. Walker & The All Stars", "What Does It Take (To Win Your Love)"],
    [125, "Laura Nyro", "Stoney End"],
    [126, "Little Eva", "The Locomotion"],
    [127, "Love", "Alone Again Or"],
    [128, "Love Affair", "Everlasting Love"],
    [129, "Manfred Mann", "The Mighty Quinn"],
    [130, "Marvin Gaye, Tammi Terrell", "Ain't No Mountain High Enough"],
    [131, "Mary Wells", "My Guy"],
    [132, "Matt Monro", "Born Free"],
    [133, "Nancy Sinatra", "These Boots Are Made For Walkin'"],
    [134, "Nat King Cole", "Let There Be Love"],
    [135, "Neil Sedaka", "Breaking Up Is Hard to Do"],
    [136, "Patsy Cline", "Crazy"],
    [137, "Percy Faith & His Orchestra", "The Theme from 'A Summer Place'"],
    [138, "Peter Sarstedt", "Where Do You Go To (My Lovely)"],
    [139, "Peter, Paul and Mary", "Leaving on a Jet Plane"],
    [140, "Petula Clark", "I Couldn't Live Without Your Love"],
    [141, "Procol Harum", "A Whiter Shade of Pale"],
    [142, "Santana", "Evil Ways"],
    [143, "Shirley Bassey", "Goldfinger"],
    [144, "Simon & Garfunkel", "Mrs. Robinson"],
    [145, "Simon & Garfunkel", "Scarborough Fair"],
    [146, "Simon & Garfunkel", "The Sound of Silence"],
    [147, "Small Faces", "Itchycoo Park"],
    [148, "Smokey Robinson & The Miracles", "The Tears Of A Clown"],
    [149, "Smokey Robinson & The Miracles", "The Tracks Of My Tears"],
    [150, "Stevie Wonder", "My Cherie Amour"],
    [151, "The Beach Boys", "California Girls"],
    [152, "The Beach Boys", "Darlin'"],
    [153, "The Beach Boys", "God Only Knows"],
    [154, "The Beach Boys", "I Get Around"],
    [155, "The Beatles", "Eleanor Rigby"],
    [156, "The Beatles", "Help!"],
    [157, "The Beatles", "In My Life"],
    [158, "The Beatles", "The Fool On The Hill"],
    [159, "The Byrds", "All I Really Want to Do"],
    [160, "The Drifters", "Up on the Roof"],
    [161, "The Everly Brothers", "Cathy's Clown"],
    [162, "The Isley Brothers", "This Old Heart Of Mine (Is Weak For You)"],
    [163, "The Kinks", "Waterloo Sunset"],
    [164, "The Kinks", "You Really Got Me"],
    [165, "The Lovin' Spoonful", "Daydream"],
    [166, "The Lovin' Spoonful", "Summer in the City"],
    [167, "The Mamas & The Papas", "California Dreamin'"],
    [168, "The Mamas & The Papas", "Dedicated To The One I Love"],
    [169, "The Miracles", "You've Really Got A Hold On Me"],
    [170, "The Righteous Brothers", "You've Lost That Lovin' Feelin'"],
    [171, "The Rolling Stones", "Sympathy For The Devil"],
    [172, "The Shangri-Las", "Leader Of The Pack"],
    [173, "The Stooges", "I Wanna Be Your Dog"],
    [174, "The Supremes", "The Happening"],
    [175, "The Supremes", "Where Did Our Love Go"],
    [176, "The Temptations", "Get Ready"],
    [177, "The Turtles", "Elenore"],
    [178, "The Turtles", "Happy Together"],
    [179, "The Velvet Underground, Nico", "I'm Waiting For The Man"],
    [180, "The Walker Brothers", "The Sun Ain't Gonna Shine Anymore"],
    [181, "The Who", "I Can't Explain"],
    [182, "The Youngbloods", "Get Together"],
    [183, "The Zombies", "She's Not There"],
    [184, "Them", "Here Comes The Night"],
    [185, "Tom Jones", "Green Green Grass Of Home"],
    [186, "Tom Jones", "It's Not Unusual"],
    [187, "Tommy James & The Shondells", "Mony Mony"],






];