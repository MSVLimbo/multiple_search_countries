import React, {FC, useCallback, useEffect, useState} from "react";
import Country from "../../Interfaces/CountryInterface";
import './index.sass'
import Tag from "./Tag";

interface SelectableSearchProps {
    options: Country[]
    onChangeSelectedCountries: any
    selectedCountries: Country[]
}

const SelectableSearch: FC<SelectableSearchProps> = ({options = [], selectedCountries, onChangeSelectedCountries}) => {
    const [open, setOpen] = useState<boolean>(false)
    const [allOption, setAllOption] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>('')
    const [optionsList, setOptionsList] = useState<Country[]>([])

    useEffect(() => {
        setOptionsList(options)
    }, [options])

    useEffect(() => {
        inputValue.length ? filterOptionList() : setOptionsList(options)
    }, [inputValue])

    const filterOptionList = useCallback(() => {
        const filteredOptionsList = options.filter(function (obj) {
            return obj.countryName.toLowerCase().startsWith(inputValue.toLowerCase());
        })
        setOptionsList(filteredOptionsList)
    }, [inputValue])

    const handleSelectDropdown = useCallback(() => {
        setOpen(!open)
    }, [open])

    const handleAllOption = useCallback(() => {
        !allOption ? onChangeSelectedCountries('all', optionsList) : onChangeSelectedCountries('removeAll', optionsList)
        setAllOption(!allOption)
    }, [allOption, optionsList])

    return (
        <div className='selector-component'>
            <div className="multi-selector">
                <div className="select-field" onClick={handleSelectDropdown}>
                    <input
                        type="text"
                        onChange={e => setInputValue(e.target.value)}
                        name=""
                        placeholder="Choose Country"
                        id=""
                        data-role="taginput"
                        data-tag-trigger="Enter"
                        value={inputValue}
                        className="input-selector"
                    />
                    <span className={`down-arrow ${open && 'rotate180'}`}>&#9660;</span>
                </div>
                <div className={`list ${open && 'show'}`}>
                    {optionsList.length && <label htmlFor={'all'} className="country">
                        <input type="checkbox"
                               onChange={handleAllOption}
                               name=""
                               checked={optionsList.every(country => selectedCountries.some((selectedCountry: { countryCode: string }) => country.countryCode === selectedCountry.countryCode))}
                               id={'all'}/>
                        All
                    </label>}
                    {
                        optionsList.map(option => {
                            const isSelected = selectedCountries.filter(e => e.countryName === option.countryName).length > 0
                            return (
                                <label key={option.countryCode} htmlFor={option.countryCode} className="country">
                                    <input type="checkbox"
                                           onChange={() => onChangeSelectedCountries(isSelected ? 'remove' : 'add', option)}
                                           checked={isSelected}
                                           name="" id={option.countryCode}/>
                                    {option.countryName}
                                    <span>{option.countryCode}</span>
                                </label>)
                        })
                    }
                </div>
            </div>
            <div className='selector-tags'>
                {
                    selectedCountries.map(
                        country => <Tag
                            key={country.countryCode}
                            onChangeSelectedCountries={onChangeSelectedCountries}
                            country={country}
                        />)
                }
            </div>
        </div>
    )
}

export default SelectableSearch