class Book {
    constructor(title, author, pages, description) {
      this.title = title;
      this.author = author;
      this.pages = pages;  
      this.description = description;
      this.currentPage = 1;
      this.read = false;
  }
  
    readBook(page) {
      if (page <= 0 || page > this.pages) {
            alert(`Invalid page number, kindly enter a number between ${this.currentPage} - ${this.pages}`)
          }  else {
            this.currentPage = page;
            if (page == this.pages) {
              alert( `Congratulations chief You have succesfully read ${this.title} by ${this.author}!`)
              this.read = !this.read // This changes the default Boolean to false
            } 
          }
    } 
}

export { Book };
