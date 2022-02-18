import React, {useEffect} from 'react';
import AppRoutes from './Routes';
import Countries from "./assets/Countries.json";

import {setCountries} from './store'
import {useDispatch} from 'react-redux'

import './App.css';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCountries(Countries.countries))
    }, [dispatch])

    return (
        <AppRoutes/>
    );
}

export default App;
