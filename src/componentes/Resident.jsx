import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Resident = ({ resident }) => {
    const [character, setCharacter] = useState({})
    useEffect(() => {
        axios.get(resident)
            .then(res => setCharacter(res.data))
    }, [])
    
    return (
        <div className='card'>
            <img src={character.image} alt="" />
            <div className="data">
                <h2>Name: <span>{character.name}</span></h2> 
                <h2>Type: <span>{(character.type==""?"Unknown":character.type)}</span></h2> 
                <h2>Status: <span>{(character.status=="Dead"?<><i className="dead fa-solid fa-skull-crossbones"></i> { character.status}</>:character.status)}</span></h2>
                <h2>Origin: <span>{character.origin?.name}</span></h2>
                <h2>Episode: <span>{character.episode?.length}</span></h2>

            </div>
        </div>
    );
};

export default Resident;