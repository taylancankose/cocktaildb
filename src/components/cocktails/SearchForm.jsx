import {useContext, useEffect} from 'react'
import CocktailContext from '../../context/CocktailContext'


function SearchForm() {
const {input, setInput, fetchCocktails} = useContext(CocktailContext)

const onSubmit = (e) => {
    e.preventDefault();
    fetchCocktails()
    if(input === ''){
        return false
    }
}


return (
  <div className='mb-5 mt-5'>
      <form action="submit" className='form-outline' onSubmit={onSubmit}>
          <input type='search' className='form-control ' aria-label='Search' placeholder='Search a cocktail...' onChange={(e) => setInput(e.target.value)}/>
      </form> 
  </div>
  )
}

export default SearchForm;
