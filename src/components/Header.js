import React from 'react'

export default function Header({city,setKey,places,setCity}){

    return(
        <header>
            <p id="title">Weather App</p>
            <div className="search-form">
            <input type="text" id="search-city"
            placeholder={city}/>
            <div id="cities-list">
                {places.map((place,index)=>
                    <button key={index} data-key={index} onClick={(e)=>{setKey(e)}}>{place}</button>
                )}
                  
             </div>

            <i onClick={setCity} className="fas fa-arrow-alt-circle-right"></i>
            </div>
             
            </header>
    )
};

