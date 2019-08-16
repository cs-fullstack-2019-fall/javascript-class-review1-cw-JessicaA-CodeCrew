//Problem 1:
// Put the start of your program in a main function. Create a class for Books with name, rating, genre, and author. Create 3 instances of Books and put them in an array. Afterwards print each one in the format below:
//
// The book [BOOK NAME] has [RATING] stars!!!

function main()
{
    let myBooks = new Books("You Get a Hundred", "5", "Business","Oprah" );
    //console.log(myBooks);

    let anotherBook = new Books("Jedi Secrets", "5", "CoolIsh", "KYancy");
    //console.log(anotherBook);

    let thirdBook = new Books ("Life of the Oracle", "10", "Universal", "JAvarie");
    //console.log(thirdBook);

    let allBooks = [myBooks, anotherBook, thirdBook];
    allBooks.forEach(function (eachElement)
    {
        console.log(eachElement); // You did not format output 

    });

}


class Books
    {
        constructor(name, rating, genre, author)
        {
            this.name = name;
            this.rating = rating;
            this.genre = genre;
            this.author = author;
        }

    }



main();

