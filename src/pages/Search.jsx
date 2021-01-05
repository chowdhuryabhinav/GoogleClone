import { Button } from '@material-ui/core';
import { Mic } from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';
import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import './Search.css';
import {actionTypes}  from "../reducer";
import {useStateValue}  from "../StateProvider";

function Search({hideButtons = false}) {

    const [{},dispatch] = useStateValue();

    const [input , setInput] = useState('');
    const history = useHistory();


    const search = e =>{
        e.preventDefault();

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })
        history.push('./search');
    }
    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon"/>
                <input value={input} onChange={e=> setInput(e.target.value)}/>
                <Mic/>

            </div>

            {!hideButtons ? (
                 <div className="search__buttons">
                 <Button type='submit' onClick={search} variant="outlined">Google Search</Button>
 
                 <Button variant="outlined">I'm feeling lucky</Button>
 
             </div>

            ):
            (
                <div className="search__buttons">
                <Button style={{display: 'none'}} type='submit' onClick={search} variant="outlined">Google Search</Button>

                <Button style={{display: 'none'}} variant="outlined">I'm feeling lucky</Button>

            </div>
            )
            }

           
            
        </form>
    )
}

export default Search
