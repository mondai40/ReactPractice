import React from "react";

export const Book = ({title="No Title Provided", author="No author", pages=0, freeBookmark}) => {
    return(
        <section>
            <h2>{title}</h2>
            <p>By: {author}</p>
            <p>Pages: {pages} pages</p>
            <p>Free Bookmark Today: {freeBookmark? "Yes": "No"}</p>
        </section>
    );
}