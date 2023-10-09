import react, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import { getPokemons } from "../controller/getpokemon";
import { Pokemon } from "../models/pokemon.m";

const Listado=()=>{

    const [pokemons,setPokemons] = useState<Pokemon[]> ([]);
    const [query,setQuery] = useState("")
    useEffect(()=>{

            const ObtenerTodos = async() => {
                const allPokemons = await getPokemons();
                setPokemons(allPokemons);
            }

            ObtenerTodos();

    });

const filtrarpokemon=pokemons?.slice(0,151).filter((pokemon)=>{
    return pokemon.name.toLowerCase().match(query.toLowerCase());
})

    return (

    <>
<div> 
<h1> Pokemon en React y TypeScript </h1>
<h2> Busca tu pokemon </h2>

    <input 
    value={query}
    placeholder="Buscar Pokemon"
    onChange={(event) => setQuery(event.target.value.trim()) }
    type="text"
    />    
     
</div> 




<div className="content-wrapper"> 
    <div className="content">
        <div className="row gap-3">


            {filtrarpokemon?.slice(0,151).map((pokemon)=> (

        <Card className="mx-auto" style={{ width: '18rem' }}>
        <Card.Header>Tipo: {pokemon.type} </Card.Header>    
        <Card.Img width="80" height="100" variant="top" src={pokemon.imggif} className="d-block mx-auto w-50"/>
        <Card.Body>
        <Card.Title className="text-center">{pokemon.name} - {pokemon.id} </Card.Title>
        <ListGroup variant="flush">
        <ListGroup.Item> <b> HP: </b> {pokemon.hp} </ListGroup.Item>
        <ListGroup.Item>👌Ataque: {pokemon.attack} </ListGroup.Item>
        <ListGroup.Item>👍Defensa: {pokemon.defense} </ListGroup.Item>
        <ListGroup.Item>❤E.Ataque: {pokemon.sp_atk} </ListGroup.Item>
        <ListGroup.Item>😎E.Defensa: {pokemon.sp_def} </ListGroup.Item>
        <ListGroup.Item>🙌Velocidad: {pokemon.speed} </ListGroup.Item>
        </ListGroup>       
        </Card.Body>
        </Card> 
        
) ) }

            
        </div>      
    </div>
</div>

   

</>


      
    )


}

export default Listado;