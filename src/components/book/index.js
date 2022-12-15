import { useDispatch } from 'react-redux';
import { removeBook, removeBookThunk } from '../../redux/books/books';
import './styles/book.css';

export default function Book({ title, author, id }) {
  const dispatch = useDispatch();

  const handleRemove = async () => {
    dispatch(removeBookThunk(id));
    dispatch(removeBook(id));
  };

  return (
    <div className="book">
      <span>Action</span>
      <h3 className="title">{title}</h3>
      <h3 className="author">{author}</h3>
      <button onClick={handleRemove} className="remove-btn" type="button">
        Remove
      </button>
    </div>
  );
}
