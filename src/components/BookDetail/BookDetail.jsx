import { useLoaderData, useParams } from "react-router-dom";

const BookDetail = () => {
  const { bookId } = useParams();

  const data = useLoaderData();
  const id = parseInt(bookId);
  const book = data.find((book) => book.bookId === id);
  const { bookId: currentBookId, image, bookName, author, review, category } = book;
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
        <button className="btn mr-6 btn-accent btn-outline">Read</button>
        <button className="btn btn-accent ">WhishList</button>
      </div>
    </div>
  );
};

export default BookDetail;
