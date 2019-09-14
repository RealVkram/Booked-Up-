import { Book } from './Book.js';
const firstBook = new Book("You Must Set Forth at Dawn", "Wole Soyinka", 120, "The first African to receive the Nobel Prize in Literature, as well as a political activist of prodigious energies, Wole Soyinka now follows his modern classic Ake: The Years of Childhood with an equally important chronicle of his turbulent life as an adult in (and in exile from) his beloved, beleaguered homeland.");

const secondBook = new Book("The Release of Power", "David Oyedepo", 150, "The release of Gods mighty power on earth");

const thirdBook = new Book("You are healed", "kenneth copeland", 100, "I want My people well. This is the cry of God's heart. And it is such a deep desire that He has provided a covenant, a promise, of healing for all who will believe. In this brief, but thorough Bible-based study, Kenneth Copeland proves beyond all doubt that by His stripes; You Are Healed!")

const bookList = [firstBook, secondBook, thirdBook];

export { bookList };
