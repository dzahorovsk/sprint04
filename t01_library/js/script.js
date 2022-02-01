let favorite = new Set();

class Book {
    constructor(title, author, date, image, image_att, description, description_att, genres) {
      this.title = title;
      this.author = author;
      this.date = date;
      this.image = image;
      this.image_att = image_att;
      this.description = description;
      this.description_att = description_att;
      this.genres = genres;
    }
    addToFavorites() {
        favorite.add(this);
    }
    removeFromFavorites() {
        favorite.delete(this);
    }
}

const fav = {favorite: 'inlove'};
const obj = new Book;

const book_1 = new Book(
    'Alice\'s Adventures in Wonderland',
    'Lewis Carroll',
    1865,
    './assets/images/alice.jpg',
    'Charles Robinson, Public domain, via Wikimedia Commons',
    `Alice's Adventures in Wonderland, widely beloved British children's book by Lewis Carroll, published in 1865.
    With its fantastical tales and riddles, it became one of the most popular works of English-language fiction.
    It was notably illustrated by British artist John Tenniel.
    The story centres on Alice, a young girl who falls asleep in a meadow and dreams that she follows the White Rabbit down a rabbit hole.
    She has many wondrous, often bizarre adventures with thoroughly illogical and very strange creatures, often changing size unexpectedly.`,
    [`Bauer, P. and Lowne, . Cathy. "Alice's Adventures in Wonderland." Encyclopedia Britannica, May 5, 2020.`,
    `https://www.britannica.com/topic/Alices-Adventures-in-Wonderland`],
    ['Fantasy', 'Literary nonsense', 'Children\'s literature', 'Absurdist fiction'],
);

const book_2 = new Book (
    'Dracula',
    'Bram Stoker',
    1897,
    './assets/images/dracula.jpg',
    'Holloway, Public domain, via Wikimedia Commons',
    `Dracula, Gothic novel by Bram Stoker, published in 1897, that was the most popular literary work derived from vampire legends and 
    became the basis for an entire genre of literature and film.
    Dracula comprises journal entries, letters, and telegrams written by the main characters.`,
    [`Lohnes, K.. "Dracula." Encyclopedia Britannica, April 8, 2021.`, `https://www.britannica.com/topic/Dracula-novel`],
    ['Novel', 'Horror fiction', 'Gothic fiction', 'Fantasy', 'Epistolary novel']
);

const book_3 = new Book (
    'The Adventures of Tom Sawyer',
    'Mark Twain',
    1876,
    './assets/images/tom.jpg',
    'True Williams, Mark Twain, Public domain, via Wikimedia Commons',
    `Enjoy the story of Tom Sawyer as a mischievous young boy carries on under the watchful eye of his Aunt Polly.
    Mark Twain's Tom Sawyer is one part trickster, one escape artist and one part very lucky fellow!
    The Adventures of Tom Sawyer takes the reader along on a series of entertaining adventures and pranks while Tom's youthful romance with his sweetheart Becky Thatcher blooms in the background.
    The Adventures of Tom Sawyer is one of Mark Twain's most beloved works.`,
    [`Twain, Mark. "The Adventures of Tom Sawyer." Short Stories and Classic Literature`, `https://americanliterature.com/author/mark-twain/book/the-adventures-of-tom-sawyer/summary`],
    ['Novel', 'Children\'s literature', 'Humour', 'Satire', 'Adventure fiction']
);

const book_4 = new Book (
    'Little Women',
    'Louisa May Alcott',
    1869,
    './assets/images/women.jpg',
    'Jessie Willcox Smith, Public domain, via Wikimedia Commons',
    `Little Women, in full Little Women; or, Meg, Jo, Beth, and Amy, novel for children by Louisa May Alcott, published in two parts in 1868 and 1869.
    Her sister May illustrated the first edition. It initiated a genre of family stories for children.
    Meg, Jo, Beth, and Amy March are raised in genteel poverty by their loving mother, Marmee, in a quiet Massachusetts town while their father serves as an army chaplain during the American Civil War.`,
    [`Britannica, T. Editors of Encyclopaedia. "Little Women." Encyclopedia Britannica, June 7, 2020.`, `https://www.britannica.com/topic/Little-Women-novel-by-Alcott`],
    ['Novel', 'Fiction', 'Children\'s literature', 'Comedy']
);

const book_5 = new Book (
    'Frankenstein',
    'Mary Shelley',
    1818,
    './assets/images/frankenstein.jpg',
    'Theodore Von Holst (1810-1844), Public domain, via Wikimedia Commons',
    `Mary Shelley’s best-known book is Frankenstein; or, The Modern Prometheus (1818, revised 1831), a text that is part Gothic novel and part philosophical novel;
    it is also often considered an early example of science fiction.
    It narrates the dreadful consequences that arise after a scientist has artificially created a human being.
    (The man-made monster in this novel inspired a similar creature in numerous American horror films.)`,
    [`Kuiper, K.. "Mary Wollstonecraft Shelley." Encyclopedia Britannica, January 28, 2021.`, `https://www.britannica.com/biography/Mary-Wollstonecraft-Shelley`],
    ['Gothic novel', 'Horror fiction', 'Science fiction']
);
const book_6 = new Book (
    'The Time Machine',
    'H. G. Wells',
    1895,
    './assets/images/time.jpg',
    'Norman Saunders (1907-1989), Public domain, via Wikimedia Commons',
    `The Time Machine is the novel that gave us the concept of—and even the word for—a "time machine."
    While it’s not Wells' first story involving time travel, it is the one that most fully fleshes out the concept of a device that can send a person backwards and forwards in time with complete precision.
    Time machines have since become a staple of the science fiction and fantasy genres, making The Time Machine one of the most deeply influential science fiction novels of the era.`,
    [`The time machine. (n.d.). Standard Ebooks: Free and liberated ebooks, carefully produced for the true book lover.`, `https://standardebooks.org/ebooks/h-g-wells/the-time-machine`],
    ['Science fiction', 'Dystopian Fiction']
);

let arr_book = [book_1, book_2, book_3, book_4, book_5, book_6];

let id = 0;
let favor = false;
let list = document.querySelector('.list');
let view_all = document.querySelector('.all');
let view_fav = document.querySelector('.favorites');
let board = document.querySelector('.board');
let image = document.querySelector('.image-box');

view_all.addEventListener('click', showAll);
view_fav.addEventListener('click', showFavorites);

function showAll() {
    favor = false;
    view_all.classList.add('active');
    view_fav.classList.remove('active');
    addList(arr_book);
    id = 0;
    showBook(arr_book);
}

function showFavorites() {
    favor = true;
    board.innerHTML = '';
    image.innerHTML = '';
    view_fav.classList.add('active');
    view_all.classList.remove('active');
    let arr_fav = Array.from(favorite);
    if (arr_fav.length > 0) {
        id = 0;
        showBook(arr_fav);
    }
    addList(arr_fav);
}


addList(arr_book);
showBook(arr_book);

function addList(items) {
    list.innerHTML = '';
    if (items.length > 0) {
        items.forEach((item, key) => {
            list.insertAdjacentHTML('beforeend',`<div id="${key} "class="list-title">${item.title}</div>`);
        });
        let list_title = document.querySelectorAll('.list-title');
        list_title[0].classList.add('list-active');
        list_title.forEach(element => {
            element.addEventListener('click', showBooks);
        });    
    }
}

function showBooks() {
    id = +this.id;
    let list_book = document.querySelectorAll('.list-title');
    list_book.forEach(element => {
        element.classList.remove('list-active');
    }); 
    list_book[id].classList.add('list-active');
    if (favor) {
        let arr_fav = Array.from(favorite);
        if (arr_fav.length > 0) {
        showBook(arr_fav);
        }
    }
    else {
        showBook(arr_book);
    }
}


function showBook(books) {
    board.innerHTML = '';
    image.innerHTML = '';
    board.insertAdjacentHTML('afterbegin',`<div id="${id}" class="love">&#9829</div>`);
    document.querySelector('.love').addEventListener('click', addFavor);
    if (books[id].favorite) {
        document.querySelector('.love').classList.add(`${books[id].favorite}`); 
    }

    function addFavor() {
        if (books[id].favorite) {
            document.querySelector('.love').classList.toggle(`${books[id].favorite}`); 
            Object.setPrototypeOf(books[id], obj);
            books[id].removeFromFavorites();
        }
        else {
            books[id].addToFavorites();
            Object.setPrototypeOf(books[id], fav);
            document.querySelector('.love').classList.toggle(`${books[id].favorite}`); 
        }
        if (favor) {
            showFavorites();
        }
    }

    board.insertAdjacentHTML('beforeend',`<div class="title">${books[id].title}</div>`);
    board.insertAdjacentHTML('beforeend',`<div class="author">by ${books[id].author} <span>${books[id].date}</span></div>`);
    let genres = document.createElement('div');
    genres.setAttribute('class', 'genres-box');
    board.appendChild(genres);
    books[id].genres.forEach(element => {
        let genre = document.createElement('div');
        genre.setAttribute('class', 'genres');
        genre.innerHTML = `${element}`;
        genres.appendChild(genre);
    });
    board.insertAdjacentHTML('beforeend',`<div class="description">${books[id].description}</div>`);
    board.insertAdjacentHTML('beforeend',`<div class="desc-att"><a href="${books[id].description_att[1]}" target="_blank"><i>${books[id].description_att[0]}</i></a></div>`);
    image.insertAdjacentHTML('beforeend',`<img class="image" src="${books[id].image}" alt="">`);
    image.insertAdjacentHTML('beforeend',`<div class="img-att"><i>${books[id].image_att}</i></div>`);
}