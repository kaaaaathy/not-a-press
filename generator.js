
let thing1 = document.getElementById("thing1");
let thing2 = document.getElementById("thing2");
let thing3 = document.getElementById("thing3");

let allThings = [thing1, thing2, thing3];

let objectList = `
a BOOK
a FILM
a WALK
a MAP
a DOCUMENT
a PLAY
a MUSEUM EXHIBIT
a ARCHIVE
a SOCIAL MEDIA PLATFORM
a RITUAL
an ALBUM OF SONGS
craigslist
facebook marketplace
an oulipian poem
a fluxist work
a hollywood blockbuster film
a short film
a tv series
a text exchange
a tarot card deck
the bible
greek myth
Randomly selected book from library
museum exhibition
Wattpad novel
folklore/tall tale
fangirls
Tourist traps
Social media filter 
Clothing
Pumpkin
Microwave
cult classic
overrated album
sentimental object
Moldy bread
Soundcloud rap
Pens
Socks
comment section of a drama channel on YouTube 
Leaves
Road signs
Lease for an apartment 
screenshots on your desktop
Ironic license plates
Music video
A lived experience
Dreams
Notes app
Dr bronner's packaging manifesto
Users manual
past yearbooks
Dating app bots
Twitter bots
Yogi tea threatening inspirational quotes
Youtube video essay
Roots
Pop up ads
Rituals vs routines
Low resolution cats
Spam emails
Real estate development brochures
Draft emails
To do list
calendar 
Garbage
Textbook
`;

let translationList = `AN INSTALLATION
A MAP
AN EXHIBITION
A WEB POEM
A VIDEO
A SOUNDTRACK
A DIVINATION TOOL
A BILLBOARD
A ZINE
A QUILT
AN ARTIST BOOK
a symphony 
a Google drive folder
Karaoke
Vinyl
Stone carving
Pool tiles
A cookbook
Moss growing
a zine series
a temporary installation 
Catalog
Book
Music video
Puzzle
Candy
Map
Color swatch book
Pop up book
Album cover
Packaging design
Stickers
Animated GIFs
Sculpture
Menu
cookbook
Textiles
Phone wallpaper
Calendar
Projection mapping
Jewelry
playlist
Dj set
Poster
dance
labels
Clothing
Admission tickets
Lottery tickets
Postcards
Business cards
A play 
Noise
Grass growing
Cross stitch
embroidery
Flip book
Food
Flags
Vlog
Belt
Billboard
`;

let objects = objectList.split("\n");
let translations = translationList.split("\n");
let randomObj, random1, random2;

function newRandom() {
  return translations[Math.floor(Math.random() * translations.length)];
}

function checkRepeat() {
  let x = newRandom();
  while (x == random1) {
    x = newRandom();
  }
  return x;
}

function newTexts() {
  randomObj = objects[Math.floor(Math.random() * objects.length)];
  random1 = newRandom();
  random2 = checkRepeat();

  thing1.innerHTML = randomObj;
  thing2.innerHTML = random1;
  thing3.innerHTML = random2;

}

function clear() {
  let loadstring = `✻`;
  for (let i = 0; i < allThings.length; i++) {
    allThings[i].innerHTML = loadstring;
  }
}
function generate() {
  clear();
  setTimeout(newTexts, 2000)

}
