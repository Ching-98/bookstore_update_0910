import { useEffect, useState } from 'react';
import axios from 'axios';
import '../../../app/globals.css'
import BookFilter from '../../app/components/bookFilter';

export default function Home() {
    const [books, setBooks] = useState([0]);
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
      setIsOpen(!isOpen); 
    }
    const fetchBooks = async () => {
      try {
        const response = await axios.get('/api/booksApi'); // Assuming you have an endpoint that returns all books
        console.log('Response data:', response.data);
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching the books data:', error);
      }
    };
  // Fetching all books on component mount
    useEffect(() => {        
      fetchBooks();
    }, []);
    

  return (
    <>
        <div className='relative p-4 orange-mode mb-20' style={{top:'10vh'}}>
        <BookFilter books={books} initialBooks={books} showFilter={true} />
        </div>
    </>
  );
}

