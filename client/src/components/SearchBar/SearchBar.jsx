import { useDispatch } from 'react-redux';
import { getDogs,searchDogName } from '../../redux/actions/dogs';
import React, { useState } from 'react';
import "./searchBar.css";



function SearchBar(){
    const dispatch = useDispatch();
    const [search,setSearch]= useState();
    return(
        <div className="search">
            <input type="search" 
                placeholder="Search" 
                autoComplete ="off"
                id="search-country" 
                value={search}
                onChange={
                    (event)=>{
                        setSearch(event.target.value);
                    }}>
            </input>
                        
            <div className="btn">
                <button onClick={()=>{
                    if(!search){return dispatch(getDogs())};
                    dispatch(searchDogName(search));
                }}>Search</button>
            </div>
        </div>
    )
};
   
       
        

export default SearchBar;