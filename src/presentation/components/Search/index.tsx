import React, { useRef, useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { Container, Form } from './styles';
import { useMovie } from '../../hooks/movie';

export interface Props {
  placeholder: string;
}

const Search: React.FC<Props> = ({ placeholder, ...rest}) => {
  const formRef = useRef(null);
  const { register, handleSubmit } = useForm();
  const [title, setTitle] = useState('');
  const { searchMovie, movies } = useMovie();

  const onSubmit = handleSubmit(async data => {
    await searchMovie({ title: data.title });
  });

  return (
    <section className="section">
      <Container className="section-center">
        <Form ref={formRef} onSubmit={onSubmit}>
          <div className="form-control">
            <MdSearch />
            <input
              ref={register({ required: true })}
              type="text"
              name="title"
              placeholder={placeholder}
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <button type="submit">search</button>
          </div>
        </Form>
      </Container>
    </section>
  );
};

export default Search;
