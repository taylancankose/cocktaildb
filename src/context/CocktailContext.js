import { createContext, useState, useEffect } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const CocktailContext = createContext()

export const CocktailProvider = ({children}) => {
    const [cocktails, setCocktails] = useState([])
    const [loading, setLoading] = useState(true)
    const [input ,setInput] = useState("")

    const fetchCocktails = async () => {
           const response = await fetch(`${url}${input}`);
           const data = await response.json();
           const {drinks} = data;
          
           setCocktails(drinks)
           setLoading(false)
        }



    return <CocktailContext.Provider value={{input, cocktails, loading, setInput, fetchCocktails}}>
        {children}
    </CocktailContext.Provider>
}



export default CocktailContext;