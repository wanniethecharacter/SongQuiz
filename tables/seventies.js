const seventies = [
    [1, "Iggy Pop", "Lust For Life"],
    [2, "Tony Christie", "Amarillo"],
    [3, "Elton John", "Rocketman"],
    [4, "Abba", "Mama Mia"],
    [5, "Bob Marley", "One Love"],
    [6, "Queen", "Bohemian Rhapsody"],
    [7, "The Beatles", "Let It Be"],
    [8, "Donna Summer", "Hot stuff"],
    [9, "Hot Chocolate", "You Sexy Thing"],
    [10, "Barry White", "My First, My Last, My Everything"],
    [11, "Pink Floyd", "Another Brick in the Wall"],
    [12, "Bee Gees", "Night Fever"],
    [13, "Kool & The Gang", "Jungle Boogie"],
    [14, "Donna Summer", "I Feel Love"],
    [15, "Frank Sinatra", "New York New York"],
    [16, "Wild Cherry", "Play that Funky Music"],
    [17, "Curtis Mayfield", "Move On Up"],
    [18, "Ian Drury & the Blockheads", "Hit Me with your Rythm Stick"],
    [19, "Undertones", "Teenage Kicks"],
    [20, "Bob Marley", "No Woman No Cry"],
    [21, "Stevie Wonder", "Superstition"],
    [22, "Elton John", "Crocodile Rock"],
    [23, "Eagles", "Hotel California"],
    [24, "Buggles", "Video Killed the Radio Star"],
    [25, "Buzzcocks", "Ever Fallen in Love (With Someone You Shouldn't've)"],
    [26, "Lynard Skynard", "Sweet Home Alabama"],
    [27, "Gary Numan", "Cars"],
    [28, "Boston", "More Than a Feeling"],
    [29, "Al Green", "Let's Stay Together"],
    [30, "Led Zeppelin", "Stairway to Heaven"],
    [31, "David Bowie", "Starman"],
    [32, "10 CC", "The Things We do For Love"],
    [33, "Marvin Gaye", "Let's Get it On"],
    [34, "Bruce Springsteen", "Born to Run"],
    [35, "Abba", "Dancing Queen"],
    [36, "Boney M", "Rivers of Babylon"],
    [37, "Michael Jackson", "Don't Stop Til You Get Enough"],
    [38, "The Clash", "London Calling"],
    [39, "Elton John", "Tiny Dancer"],
    [40, "Bee Gees", "You Should Be Dancing"],
    [41, "The Real Thing", "You to me are Everything"],
    [42, "Starland Vocal Band", "Afternoon Delight"],
    [43, "Elton John", "Saturday Night's Alright For Fighting"],
    [44, "Queen", "We Will Rock You"],
    [45, "Chaka Khan", "I'm Every Woman"],
    [46, "Sylvester", "You Make Me Feel"],
    [47, "Buzzcocks", "Ever Fallen In Love (With Someone You Shouldn't've)"],
    [48, "Joni Mitchell", "Big Yellow Taxi"],
    [49, "The Knack", "My Sharona"],
    [50, "Carl Douglas", "Kung Fu Fighting"],
    [51, "Bob Seger", "Still The Same"],
    [52, "Boston", "More Than a Feeling"],
    [53, "Carly Simon", "You're so Vain"],
    [54, "Carole King", "It's Too Late"],
    [55, "Carpenters", "For All We Know"],
    [56, "Carpenters", "Superstar"],
    [57, "Cass Elliot", "Make Your Own Kind Of Music"],
    [58, "Cheap Trick", "I Want You to Want Me"],
    [59, "Cheap Trick", "Surrender"],
    [60, "Cher", "Gypsys, Tramps & Thieves"],
    [61, "Commodores", "Easy"],
    [62, "Creedence Clearwater Revival", "Up Around The Bend"],
    [63, "Creedence Clearwater Revival", "Who'll Stop The Rain"],
    [64, "Crosby, Stills, Nash & Young", "Our House"],
    [65, "Curtis Mayfield", "Superfly"],
    [66, "David Bowie", "Fame"],
    [67, "David Bowie", "Life on Mars"],
    [68, "David Bowie", "Rebel Rebel"],
    [69, "Derek & The Dominos", "Layla"],
    [70, "Electric Light Orchestra", "Don't Bring Me Down"],
    [71, "Electric Light Orchestra", "Livin' Thing"],
    [72, "Elton John", "Goodbye Yellow Brick Road"],
    [73, "Elton John", "Someone Saved My Life Tonight"],
    [74, "Eric Clapton", "Wonderful Tonight"],
    [75, "Fleetwood Mac", "Don't Stop"],
    [76, "Fleetwood Mac", "Go Your Own Way"],
    [77, "Fleetwood Mac", "Rhiannon"],
    [78, "Fleetwood Mac", "The Chain"],
    [79, "George Harrison", "What Is Life"],
    [80, "Gerry Rafferty", "Baker Street"],
    [81, "Harry Chapin", "Cat's in the Cradle"],
    [82, "Hot Chocolate", "Every 1's a Winner"],
    [83, "Iggy Pop", "The Passenger"],
    [84, "Isaac Hayes", "Theme From Shaft"],
    [85, "James Taylor", "Fire and Rain"],
    [86, "Janis Joplin", "Me and Bobby McGee"],
    [87, "Jimmy Cliff", "The Harder They Come"],
    [88, "John Travolta, Olivia Newton-John", "Summer Nights"],
    [89, "John Travolta, Olivia Newton-John", "You're The One That I Want"],
    [90, "Junior Murvin", "Police & Thieves"],
    [91, "Kate Bush", "Wuthering Heights"],
    [92, "Kraftwerk", "The Model"],
    [93, "Linda Ronstadt", "You're No Good"],
    [94, "Lou Reed", "Perfect Day"],
    [95, "Carly Simon", "Nobody Does It Better"],
    [96, "Neil Diamond", "Cracklin' Rosie"],
    [97, "Nick Drake", "Pink Moon"],
    [98, "Olivia Newton-John", "Hopelessly Devoted To You"],
    [99, "Patti Smith", "Dancing Barefoot"],
    [100, "Paul Simon", "50 Ways to Leave Your Lover"],
    [101, "Peter Gabriel", "Solsbury Hill"],
    [102, "Rickie Lee Jones", "Chuck E's in Love"],
    [103, "Rod Stewart", "Maggie May"],
    [104, "Seals and Crofts", "Summer Breeze"],
    [105, "Sex Pistols", "Anarchy in the U.K_"],
    [106, "Simon & Garfunkel", "Bridge Over Troubled Water"],
    [107, "Simon & Garfunkel", "Cecilia"],
    [108, "Simon & Garfunkel", "The Boxer"],
    [109, "Sly & The Family Stone", "Family Affair"],
    [110, "Stealers Wheel", "Stuck In The Middle With You"],
    [111, "Steely Dan", "Do It Again"],
    [112, "Steely Dan", "Reelin' In The Years"],
    [113, "Steve Miller Band", "Fly Like An Eagle"],
    [114, "Steve Miller Band", "The Joker"],
    [115, "Supertramp", "Give A Little Bit"],
    [116, "Supertramp", "The Logical Song"],
    [117, "T. Rex", "20th Century Boy"],
    [118, "T. Rex", "Bang a Gong (Get It On)"],
    [119, "Talking Heads", "Psycho Killer"],
    [120, "The Boomtown Rats", "I Don't Like Mondays"],
    [121, "The Doobie Brothers", "Listen to the Music"],
    [122, "The Doobie Brothers", "Long Train Runnin'"],
    [123, "The Doors", "L.A. Woman"],
    [124, "The Doors", "Riders on the Storm"],
    [125, "The Edgar Winter Group", "Free Ride"],
    [126, "The Guess Who", "American Woman"],
    [127, "The Isley Brothers", "That Lady, Pts. 1 & 2"],
    [128, "The Knack", "My Sharona"],
    [129, "The Police", "Can't Stand Losing You"],
    [130, "The Police", "Message In A Bottle"],
    [131, "The Rolling Stones", "Brown Sugar"],
    [132, "The Rolling Stones", "Miss You"],
    [133, "The Rolling Stones", "Wild Horses"],
    [134, "The Temptations", "Papa Was A Rollin' Stone"],
    [135, "The Who", "Baba O'Riley"],
    [136, "The Who", "Behind Blue Eyes"],
    [137, "Thin Lizzy", "Dancing In The Moonlight"],
    [138, "Thin Lizzy", "The Boys Are Back In Town"],
    [139, "Thin Lizzy", "Whiskey In The Jar"],
    [140, "Todd Rundgren", "I Saw the Light"],
    [141, "Tom Petty and the Heartbreakers", "American Girl"],
    [142, "Van Morrison", "Into the Mystic"],
    [143, "Van Morrison", "Moondance"],
    [144, "Wings", "Band On The Run"],
    [145, "Wings", "Live And Let Die"],
    [146, "America", "A Horse with No Name"],
    [147, "America", "Ventura Highway"],
    [148, "Badfinger", "Come And Get It"],
    [149, "Badfinger", "No Matter What"],
    [150, "Bee Gees", "How Deep Is Your Love"],
    [151, "Blondie", "One Way or Another"],
    [152, "Blue Oyster Cult", "(Don't Fear) The Reaper"],
    [153, "Bob Dylan", "Knockin' On Heaven's Door"]

];