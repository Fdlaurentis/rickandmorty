import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Resident = ({ resident }) => {
    const [character, setCharacter] = useState({})
    useEffect(() => {
        axios.get(resident)
            .then(res => setCharacter(res.data))
    }, [])

    const status=()=>{
        if (character.status=='Dead'){
            return(
                <i className="dead fa-solid fa-skull-crossbones"></i>
            )
        } else if(character.status=='Alive'){
            return(
                <i className="life fa-solid fa-heart"></i>
            )
        }else{
            return(
                <i class="unknown fa-solid fa-circle-question"></i>
            )
        }
    }
                
                
      
   

    return (
        <div className='card'>
            <img src={character.image} alt="" />
            <div className="data">
                <h2>Name: <span>{character.name}</span></h2>
                <h2>Type: <span>{(character.type == "" ? "Unknown" : character.type)}</span></h2>
                <h2>Status: <span>{status()} {character.status}</span></h2>
                <h2>Origin: <span>{character.origin?.name}</span></h2>
                <h2>Episode: <span>{character.episode?.length}</span></h2>

            </div>
        </div>
    );
};

export default Resident;