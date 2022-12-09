import { Container, FormBase, Title, Input, SubmitButton } from './styles/form';

export default function Form() {
  return (
    <Container>
      <Title>ADD NEW BOOK</Title>
      <FormBase>
        <Input placeholder="Book title" />
        <Input placeholder="Author" />
        <SubmitButton>ADD BOOK</SubmitButton>
      </FormBase>
    </Container>
  );
}
