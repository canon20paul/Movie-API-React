import React, {Component,createContext} from 'react'

export const Moviesprovider = createContext()

class Moviescontext extends React.Component(){

constructor(){
    super()
    this.state={
        movies:[],
        addmovie:this.addmovie
    }
}

addmovie=()=>{

}


    render(){
        return <Moviesprovider.provide>


                </Moviesprovider.provide>


    }
}
