import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Container, Inner, Line } from './styles/books-list';
import { Book } from '..';
import { fetchBooks } from '../../redux/books/books';

export default function BooksList({ children }) {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <Container>
      <Inner>
        {books.map(({ title, author, id }) => (
          <Book id={id} title={title} author={author} key={id} />
        ))}
      </Inner>
      <Line />
      {children}
    </Container>
  );
}
