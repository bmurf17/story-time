import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function SearchBar() {
  return (
    <div className='bg-white shadow-sm text-black w-full p-4'>
      <FontAwesomeIcon className='mr-2 cursor-pointer' size='sm' icon={faSearch} />
      Search Bar
    </div>
  );
}
