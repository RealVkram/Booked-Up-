class Book {
    constructor(title, author, pages, description) {
      this.title = title;
      this.author = author;
      this.pages = pages;  
      this.description = description;
      this.currentPage = 1;
      this.read = false;
  }
  
    readBook(pageNumber) {
      if (pageNumber <= 0 || pageNumber > this.pages) {
            alert(`Invalid page number, kindly enter a number between ${this.currentPage} - ${this.pages}`)
          }  else {
            this.currentPage = pageNumber;
            if (pageNumber == this.pages) {
              alert( `Congratulations, You have succesfully read ${this.title} by ${this.author}!`)
              this.read = !this.read
            } 
          }
    } 
}

export { Book };
