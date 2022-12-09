import { Container, Inner, Line } from './styles/books-list';
import { Book } from '..';

export default function BooksList({ children }) {
  return (
    <Container>
      <Inner>
        <Book />
      </Inner>
      <Line />
      {children}
    </Container>
  );
}
