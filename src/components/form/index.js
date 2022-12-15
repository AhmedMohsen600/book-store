import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, addBookThunk } from '../../redux/books/books';
import { Container, FormBase, Title, Input, SubmitButton } from './styles/form';

export default function Form() {
  const [book, setBook] = useState({
    title: '',
    author: '',
  });

  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setBook((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBookThunk(book));
    dispatch(addBook(book));
    setBook({ title: '', author: '' });
  };

  return (
    <Container>
      <Title>ADD NEW BOOK</Title>
      <FormBase>
        <Input
          onChange={handleOnChange}
          name="title"
          placeholder="Book title"
          value={book.title}
        />
        <Input
          onChange={handleOnChange}
          name="author"
          placeholder="Author"
          value={book.author}
        />
        <SubmitButton onClick={handleSubmit}>ADD BOOK</SubmitButton>
      </FormBase>
    </Container>
  );
}
