import React from 'react'
import { Moviesprovider } from './Moviescontext'

function Navbar(){

    const obj = useContext(Moviesprovider)

    return <div>
    <h1>The total Movies count: {obj.movies.length}</h1>
    </div>
}
export default Navbar

