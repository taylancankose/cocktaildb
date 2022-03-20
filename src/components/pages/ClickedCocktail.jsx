import {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import {BiCategoryAlt, BiDrink} from 'react-icons/bi'
import {FaCocktail} from 'react-icons/fa'


const id_url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="
function ClickedCocktail() {
  let {idDrink} = useParams() 
  const [cocktail, setCocktail] = useState("")

  const getCocktail = async() => {
   await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`)
   .then((res) => res.json())
   .then((data) => setCocktail(data.drinks[0]))
  }

  useEffect(() => {
    getCocktail()
  }, [idDrink])

  console.log(cocktail)

  const data = [{
    ingredients:[cocktail.strIngredient1, cocktail.strIngredient2, cocktail.strIngredient3, cocktail.strIngredient4, cocktail.strIngredient5, cocktail.strIngredient6, cocktail.strIngredient7, cocktail.strIngredient8, cocktail.strIngredient9, cocktail.strIngredient10, cocktail.strIngredient11, cocktail.strIngredient12, cocktail.strIngredient14, cocktail.strIngredient15],
    measurements: [cocktail.strMeasure1, cocktail.strMeasure2, cocktail.strMeasure3, cocktail.strMeasure4, cocktail.strMeasure5, cocktail.strMeasure6, cocktail.strMeasure7, cocktail.strMeasure8, cocktail.strMeasure9, cocktail.strMeasure10, cocktail.strMeasure11, cocktail.strMeasure12, cocktail.strMeasure14, cocktail.strMeasure15],
    instructions: cocktail.strInstructions,
    glass: cocktail.strGlass,
    img: cocktail.strDrinkThumb,
    type: cocktail.strAlcoholic,
    name: cocktail.strDrink,
    category: cocktail.strCategory,
  },
]


    return (
      <>
      <div className='container mx-auto'>
      <div className=" mb-3 d-flex  mt-5 align-items-center justify-content-center" >
        <div className="row g-0">
        <div className="col-md-4">
        <img src={data[0].img} className="img-fluid rounded shadow-light" alt={`${data[0].name}`} />
      </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title display-3">{data[0].name}</h5>
        <p className="card-text  text-info"><BiDrink />{data[0].type}<span className='ml-3'><BiCategoryAlt /> {data[0].category}</span>  </p>
        
        <p className="card-text instructions">{data[0].instructions}</p>
     
        <div className="col-8 d-flex">
        {
          
          data[0].measurements.map((item, index) => item ?
          <div className='d-block-flex mx-auto'>
            <span key={index} className='badge badge-warning'>{item}</span>
          </div>
          :
          null
          )
        }
        </div>
        <div className="col-8 d-flex">
        {
          data[0].ingredients.map((ingredient, i) => ingredient ?
          <div className='d-block-flex mx-auto'>
            <span key={i} className='badge badge-primary mx-1 '>{ingredient}</span>
          </div>
          :
          null
          )
        }
      </div>
      </div>
    </div>
    <div className='mt-5 mx-auto'>
      <Link to='/'><a className='btn btn-info py-3 px-5 mb-5'> <FaCocktail className='mr-1 mb-2' /> Go Home Page</a> </Link>
    </div>
  </div>
  </div>
</div>
</>
  )
}

export default ClickedCocktail