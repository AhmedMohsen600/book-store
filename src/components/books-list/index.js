import { useSelector } from 'react-redux';
import { Container, Inner, Line } from './styles/books-list';
import { Book } from '..';

export default function BooksList({ children }) {
  const { books } = useSelector((state) => state.books);
  return (
    <Container>
      <Inner>
        {books.map(({ title, author, id }) => (
          <Book id={id} key={title} title={title} author={author} />
        ))}
      </Inner>
      <Line />
      {children}
    </Container>
  );
}
