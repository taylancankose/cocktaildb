import React from 'react'
import SearchForm from '../cocktails/SearchForm'
import Cocktails from '../cocktails/Cocktails'

function Home() {
  return (
    <div>
      <SearchForm />
      <Cocktails />
    </div>
  )
}

export default Home