import {useContext, useEffect} from 'react'
import CocktailContext from '../../context/CocktailContext'
import Loading from '../pages/Loading'
import Cocktail from './Cocktail'
import NotFound from './NotFound'


function Cocktails() {
  const {cocktails, fetchCocktails, loading} = useContext(CocktailContext)

  useEffect(() => {
    fetchCocktails()
  }, [])

  console.log("cocktails: ", !cocktails)

  if (loading) {
    return <Loading />
  }


  return (
    !cocktails ? <NotFound />  :
    <div className='container-fluid'>
        <div className='row'>
        {cocktails.map((cocktail, id) => {
      return (
      <div key={id} className='col-sm-3 cocktail'>
          <Cocktail key={cocktail.idDrink} {...cocktail} />
      </div>
      );
    })} 
        </div>
    </div>
  )
}

export default Cocktails