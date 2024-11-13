import { Input } from '../components/ui/input';

const SearchBar = () => {
  return(
    <div className="relative w-full h-14 flex flex-col bg-white">
      <div className="relative h-14 z-10 rounded-md">
        <Input className='absolute inset-0 h-full' />

      </div>
    </div>

  )


}

export default SearchBar;