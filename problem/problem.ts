// Problem-1


function formatString(typeing: string, toUpper?: boolean) {
    if (toUpper === true) {
        return typeing.toLocaleLowerCase()
    }
    else {
        return typeing.toUpperCase()
    }

}
const result = formatString("Hello", false)
// console.log(result);


// problem-2//


type Book = {
    title: string,
    rating: number
}

const books:Book[] = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];

function filterByRating(items: Book[]):Book[] {
    const filtering = items.filter(hi => hi.rating >= 4)
    return filtering

}

console.log(filterByRating(books));
