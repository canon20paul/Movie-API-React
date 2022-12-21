import React,{useContext} from 'react'
import { Moviesprovider } from './Moviescontext'


function Movieslisted() {

    const obj=useContext(Moviesprovider)
    const movieslist=obj.movies.map((movie)=>{

        return <div>
            <h1>{movie.moviename}</h1>
            <p>Directed By {movie.directorname}</p>
        </div>

    })

    return <div style={{backgroundColor:'green'}}>
        <h1>Movie List</h1>
            {movieslist}
    </div>
}
export default Movieslisted