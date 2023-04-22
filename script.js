
const plusButton = document.getElementById('plus');
const formAuthor = document.getElementById('input-author');
const formTitle = document.getElementById('input-title');
const formPages = document.getElementById('input-pages');
const formReadCheckbox = document.getElementById('input-read');
const formAddBook = document.getElementById('input-add');
const formBackButton = document.getElementById('input-exit');
const bookTemplate = document.getElementById('book-template');
const formOverlay = document.querySelector('.form-overlay');
const mainWrapper = document.querySelector('.main-wrapper');

plusButton.addEventListener('click', showAddForm);
formAddBook.addEventListener('click', newBook);
formBackButton.addEventListener('click', (e) => {
	e.preventDefault();
	hideElement(formOverlay);
});

let n = 1;

class Book {
	constructor(author, title, pageNum, read) {
		this.title = title;
		this.author = author;
		this.pageNum = pageNum;
		this.read = read;
		this.id = `book-${n}`;
		n++;    //gives unique ids to every book
	}
}


let books = [new Book('G.Orwell', '1984', 400, true), new Book('Gabriel Garcia Marquez', 'One Hundred Years of Solitude', 800, false)];
let colors = ['#b33771', '#3b3b98','#D6A2E8','#1B9CFC','#82589F','#EAB543','#F97F51', '#f53b57'];

function showAddForm() {
	formOverlay.classList.remove('hide');
}

function newBook(e) { // makes a new book instance and adds it to array
	e.preventDefault(); // disables form sending to server
	let book = new Book(formAuthor.value, formTitle.value, formPages.value, formReadCheckbox.checked);
	books.push(book);
	addBookFunc(book);
	hideElement(formOverlay);
	formAuthor.value = ''; // resets the input fields for next time
	formTitle.value = '';
	formPages.value = '';
	formReadCheckbox.checked = false;
}

function addBookFunc(book) { // adds HTML to the page
	const clone = bookTemplate.cloneNode(true); //copies entire textnode with the template
	mainWrapper.appendChild(clone);
	clone.querySelector('.book-author').textContent = book.author;
	clone.querySelector('.book-title').textContent = book.title;
	if (book.read === true) clone.querySelector('.ribbon').classList.remove('hide');
	clone.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
	clone.classList.remove('hide');
	clone.id = book.id; // gives unique id to element
	readBookSvg = clone.querySelector('.book-icon').addEventListener('click', () => {
		clone.querySelector('.ribbon').classList.toggle('hide');
		book.read = !book.read // if book.read == true, switches to false
	});
	deleteBookSvg = clone.querySelector('.delete-icon').addEventListener('click', () => {
		books = books.filter(b => b !== book);
		clone.remove();
	});
	// no point in making separate functions for deletion and marking as read
}

function hideElement(el) {
	el.classList.add('hide');
}

books.forEach(book => addBookFunc(book))