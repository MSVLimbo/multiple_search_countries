import React, {FC, useEffect, useState} from "react";
import CountryCard from "../../components/Countries/CountryCard";
import SelectableSearch from "../../components/SelectableSearch";
import {useSelector} from "react-redux";
import {selectCountries} from "../../store";
import Country from "../../Interfaces/CountryInterface";
import './index.sass'

interface CountriesProps {
}

const Index: FC<CountriesProps> = () => {
    const countries = useSelector(selectCountries || [])
    const [selectedCountries, setSelectedCountries] = useState<any[]>([])

    useEffect(() => {
        const data = localStorage.getItem('data')

        if (data) {
            setSelectedCountries(JSON.parse(data))
        }
        return () => {
            localStorage.setItem("data", JSON.stringify([]))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(selectedCountries));
    }, [selectedCountries])

    const onChangeSelectedCountries = (type: string, value: any) => {
        switch (type) {
            case 'all':
                setSelectedCountries(handleSortArray([...handleRemoveCountries(selectedCountries, value), ...value]))
                break
            case 'removeAll':
                setSelectedCountries(handleRemoveCountries(selectedCountries, value))
                break
            case 'remove':
                setSelectedCountries(handleRemoveCountry(selectedCountries, value))
                break
            case 'add':
                setSelectedCountries(handleSortArray([...selectedCountries, value]))
                break
        }
    }

    const handleSortArray = (array: Country[]) => array.sort((a, b) => a.countryCode > b.countryCode ? 1 : -1)

    const handleRemoveCountry = (array: Country[], value: Country) => array.filter(function (obj) {
        return obj.countryCode !== value.countryCode;
    })

    const handleRemoveCountries = (array: Country[], value: Country[]) => array.filter(function (obj) {
        return !value.some((valObj: { countryCode: string }) => obj.countryCode === valObj.countryCode)
    })

    return (
        <div className='countries'>
            <SelectableSearch
                options={countries}
                onChangeSelectedCountries={onChangeSelectedCountries}
                selectedCountries={selectedCountries}
            />
            <div className='countries-list'>
                {selectedCountries.map(country =>
                    <CountryCard key={country.countryCode}
                                 countryCode={country.countryCode}
                                 countryName={country.countryName}
                                 currencyCode={country.currencyCode}
                                 population={country.population}
                                 capital={country.capital}
                                 continentName={country.continentName}/>
                )}
            </div>
            {!selectedCountries.length && <div className='countries-list'>
                <h1>Please select country from selectable input</h1></div>}
        </div>
    )
}

export default Index