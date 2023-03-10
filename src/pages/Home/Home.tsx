import { FormEvent, useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import Movies from '../../components/Movies/Movies';
import './Home.css';

export default function Home() {
  const [text, setText] = useState('');
  const [term, setTerm] = useState(JSON.parse((localStorage.getItem('term')!)) || text);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTerm(text);
    localStorage.setItem('term', JSON.stringify(text));
  };

  return (
    <div className='home-container'>
      <div className='home-wrapper'>
        <form onSubmit={handleSubmit} className='search-container'>
          <input
            type='search'
            title='Search input'
            name='search'
            placeholder='Enter movie name...'
            value={text}
            onChange={(e) => setText(e.target.value)}
            className='search-input'
          />
          <button title='Search button' type='submit' className='search-btn'>
            <BiSearchAlt className='search-icon' title='Search icon' />
          </button>
        </form>
        {term ? <Movies term={term} /> : <p className='message'>What movie are you looking for?</p>}
      </div>
    </div>
  );
}

