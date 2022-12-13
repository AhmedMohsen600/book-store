import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';
import { Container } from '../components/books-list/styles/books-list';

export default function Category() {
  const { status } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <Container>
      <button
        onClick={() => dispatch(checkStatus())}
        style={{ width: '20%', padding: '20px' }}
        type="button"
      >
        Check status
      </button>
      <span>{status}</span>
    </Container>
  );
}
