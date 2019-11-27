import React from "react";
import {render} from "react-dom";

// const bookList = [
//     {"title": "Hunger", "author": "Roxane Gay", "pages": 320},
//     {"title": "The Sun Also Rise", "author": "Ernest Hemingway", "pages": 260},
//     {"title": "White Teeth", "author": "Zadid Smith", "pages": 480},
//     {"title": "Cat's Cradle", "author": "Kurt Vonnegut", "pages": 304},
// ];

// const Book = ({title, author, pages, freeBookmark}) => {
//     return(
//         <section>
//             <h2>{title}</h2>
//             <p>By: {author}</p>
//             <p>Pages: {pages} pages</p>
//             <p>Free Bookmark Today: {freeBookmark? "Yes": "No"}</p>
//         </section>
//     );
// }

// const Hiring = () => 
//     <div>
//         <p>The library is hiring. Go to www.library.com/jobs from more.</p>
//     </div>
// const NotHiring = () => 
//     <div>
//         <p>The library is not hiring. Check back later for more info.</p>
//     </div>

// class Library extends React.Component {
//     state = {
//         open: true,
//         freeBookmark: true,
//         hiring: true,
//         data: [],
//         loading: false
//     };

//     componentDidMount() {
//         this.setState({loading: true}); //this means it's loading now.
//         fetch("https://hplussport.com/api/products/order/price/sort/asc/qty/1")
//             .then(data => data.json())  //arrow function
//             .then(data => this.setState({data, loading: false}))    //arrow function. this means it finishes loading
//     }
//     componentDidUpdate() {
//         console.log("componentDidUpdate");
//     }

//     toggleOpenClosed = () => {
//         this.setState(prevState => ({
//             open: !prevState.open,
//         }));
//     }

//     render() {
//         const {books} = this.props;
//         return(
//             <div>
//                 {this.state.hiring? <Hiring />: <NotHiring />}
//                 {this.state.loading
//                     ? "loading..."
//                     :   <div>
//                             {this.state.data.map((product) => {
//                                 return(
//                                     <div key={product.id}>
//                                         <h3>Library Product of the Week!</h3>
//                                         <h4>{product.name}</h4>
//                                         <img src={product.image} alt={product.name} height={100}/>
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                 }
//                 <h1>The library is {this.state.open? "open": "closed"}.</h1>
//                 <button onClick={this.toggleOpenClosed}>Click</button>
//                 {books.map((book, i) => 
//                     <Book
//                         key={i}
//                         title={book.title} 
//                         author={book.author} 
//                         pages={book.pages}
//                         freeBookmark={this.state.freeBookmark}
//                     />
//                 )}
//             </div>
//         );
//     }
// }

class FavoriteColorForm extends React.Component {
    render() {
        return(
            <form action="">
                <label htmlFor="">Favorite Color: 
                    <input type="color" />
                </label>
            </form>
        );
    }
}

render(
    <FavoriteColorForm/>,
    document.getElementById("root")
);