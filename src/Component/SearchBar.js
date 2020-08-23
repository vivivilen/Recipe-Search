import React, { useState, useEffect } from 'react'
import '../App.scss';
import { HeaderTitle } from './HeaderTitle';
import CircularProgress from '@material-ui/core/CircularProgress';
import noDataImg from '../img/undraw_no_data_qbuo.svg';

export const SearchBar = () => {
    const APP_ID = '7a2f383e';
    const APP_KEYS = '65f719710c71d61223dd379362398b52';

    const [food, setFood] = useState([])
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('Macaron');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getData().then(() => setLoading(false));
    }, [query]);

    const getData = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEYS}`);
        const data = await response.json();
        setFood(data.hits)
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
    }

    return (
        isLoading ? <div className="spinner-container"><CircularProgress className="spinner" /></div> :
            <div>
                <form onSubmit={getSearch}>
                    <div className="container-input">
                        <input type="text" id="input-search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="ex: Cheese Cake" />
                    </div>

                    <div className="container-btn">
                        <button id="btn-search">Search</button>
                    </div>
                </form>
                {query === '' ? 
                <div className="not-found-container">
                    <img src={noDataImg} alt="not-found"/>
                    <h3>Recipe not found</h3>
                </div> :
                    <HeaderTitle hits={food} />}
            </div>
    )
}