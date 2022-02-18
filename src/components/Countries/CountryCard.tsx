import React from "react";
import CountryInterface from '../../Interfaces/CountryInterface'

const countryInfo: any = {
    countryCode: "Country code",
    currencyCode: 'Currency code',
    population: 'Population',
    capital: 'Capital',
    continentName: 'Continent name'
}

export default class CountryCard extends React.Component<CountryInterface, {}> {
    constructor(props: CountryInterface) {
        super(props);
    }

    render() {
        return (
            <div className={'countryCard'}>
                <h1>{this.props.countryName}</h1>
                <img
                    src={`https://flagcdn.com/128x96/${this.props.countryCode.toLowerCase()}.png`}
                    width="128"
                    height="96"
                    alt={this.props.countryName}/>
                {
                    Object.keys(countryInfo).map(key => <div className={'card-info'} key={key}>
                        <b>{countryInfo[key]}:</b> {this.props[key as keyof CountryInterface]}</div>)
                }
            </div>
        );
    }
}