import React from 'react';
import "./navBar.css";
import SearchBar from '../SearchBar/SearchBar';
import img from "../../img/Henry-logo-white-space.png";
import { resetDogs } from '../../redux/actions/dogs';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';



function NavBar(){
    const dispatch = useDispatch();
    return(
        <div className = "container">
            <div onClick = {()=>{
                dispatch(resetDogs());
            }}>
            <Link to = '/home'>
                <img src={img} alt="Not Found"/>
            </Link>
            </div>
            
            <div className="searchBar">
                <SearchBar/>
            </div>
            <div>
                <Link to='/create' className="create">Create Dog</Link>
                <Link to= '/mydogs' className="create">My Dogs</Link>
            </div>

        </div>
    )
};
            
            
            
            


export default NavBar;