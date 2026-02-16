import React, { useState } from 'react';


interface IMovieFormProps {
  onAdd: (title: string) => void;
}

const MovieForm = ({ onAdd }: IMovieFormProps) => {
  const [text, setText] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={text} 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)} 
        placeholder="введите название фильма"
      />
      <button type="submit">добавить</button>
    </form>
  );
};

export default MovieForm;