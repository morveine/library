// make apple-style book covers with gradient and fixed design
// every book gets a unique ID (perhaps the same as name? or a certain number)
// exclude duplicates

const plusButton = document.getElementById('plus');
const formOverlay = document.querySelector('.form-overlay');
const formAddBook = document.getElementById('input-add');
const formBackButton = document.getElementById('input-exit');
const readRibbon = document.getElementById('ribbon');
const readBookSvg = document.getElementById('book-icon');
const deleteBookSvg = document.getElementById('delete-icon');

let books = [];
let colors = ['#ee6868', '#65cae1', '#d055b9', '#63c885', '#516acc'];

class Book {
    constructor(title, author, pageNum, read) {
        this.title = title;
        this.author = author;
        this.pageNum = pageNum;
        this.read = read;
    }
}




// function that accepts input and makes a book obj and puts it in array - event listener on 'add book' button
// function that loops over objects in array and makes book html and puts it on the page
// function that deletes books
// function that marks books as read
// 