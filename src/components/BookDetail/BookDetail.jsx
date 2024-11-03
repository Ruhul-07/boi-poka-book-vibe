import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../../Utility/addToDb";

const BookDetail = () => {
  const { bookId } = useParams();

  const data = useLoaderData();
  const id = parseInt(bookId);
  const book = data.find((book) => book.bookId === id);
  const { bookId: currentBookId, image, bookName, author, review, category } = book;

  const handleMarkAsRead = (id) => {
    addToStoredReadList(id)
  }
  return (
    <div className="flex">
      <div className="w-1/2">
        <img className="w-36" src={image} alt="" />
      </div>
      <div className="w-1/2">
        <div className="mb-6 space-y-2">
            <h2 className="font-bold text-2xl">{bookName}</h2>
            <p className="italic">By: {author}</p>
            <hr />
            <h4 className="font-bold">{category}</h4>
            <hr />
            <p>Review: {review}</p>
        </div>
        <button onClick={() => handleMarkAsRead(id)} className="btn mr-6 btn-accent btn-outline">Read</button>
        <button className="btn btn-accent ">WhishList</button>
      </div>
    </div>
  );
};

export default BookDetail;

// things before to handle and store data:
/**
     * 1. Understand what to store or save: => bookId
     * 2. where to store: Database
     * 3. Array, list, collection:
     * 4. Check: if the book is already in the readlist.
     * 5. if not, then add the book to the list
     * 6. if yes, do not add the book
     */

