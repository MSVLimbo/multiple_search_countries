import {configureStore, createSlice, PayloadAction} from '@reduxjs/toolkit'
import CountryInterface from './Interfaces/CountryInterface'

interface CountriesSliceState {
    countries: CountryInterface[],
}

const initialState: CountriesSliceState = {
    countries: []
}

export const countriesSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addCountry: (state, action: PayloadAction<CountryInterface>) => {
            state.countries = [
                ...state.countries,
                action.payload
            ]
        },
        setCountries: (state, action: PayloadAction<CountryInterface[]>) => {
            state.countries = action.payload
        },
        removeCountry: (state, action: PayloadAction<string>) => {
            state.countries = state.countries.filter(function (obj) {
                return obj.countryCode !== action.payload;
            });
        }
    },
})

export const {removeCountry, setCountries, addCountry} = countriesSlice.actions

const store = configureStore({
    reducer: {
        countries: countriesSlice.reducer
    },
})

type RootState = ReturnType<typeof store.getState>

export const selectCountries = (state: RootState) => state.countries.countries

export default store;