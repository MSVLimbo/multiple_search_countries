import Countries from "../../assets/Countries.json";

const mockCountriesWithChar_A = [
    {
        "countryCode": "AD",
        "countryName": "Andorra",
        "currencyCode": "EUR",
        "population": "84000",
        "capital": "Andorra la Vella",
        "continentName": "Europe"
    },
    {
        "countryCode": "AF",
        "countryName": "Afghanistan",
        "currencyCode": "AFN",
        "population": "29121286",
        "capital": "Kabul",
        "continentName": "Asia"
    },
    {
        "countryCode": "AG",
        "countryName": "Antigua and Barbuda",
        "currencyCode": "XCD",
        "population": "86754",
        "capital": "St. John's",
        "continentName": "North America"
    },
    {
        "countryCode": "AI",
        "countryName": "Anguilla",
        "currencyCode": "XCD",
        "population": "13254",
        "capital": "The Valley",
        "continentName": "North America"
    },
    {
        "countryCode": "AL",
        "countryName": "Albania",
        "currencyCode": "ALL",
        "population": "2986952",
        "capital": "Tirana",
        "continentName": "Europe"
    },
    {
        "countryCode": "AM",
        "countryName": "Armenia",
        "currencyCode": "AMD",
        "population": "2968000",
        "capital": "Yerevan",
        "continentName": "Asia"
    },
    {
        "countryCode": "AO",
        "countryName": "Angola",
        "currencyCode": "AOA",
        "population": "13068161",
        "capital": "Luanda",
        "continentName": "Africa"
    },
    {
        "countryCode": "AQ",
        "countryName": "Antarctica",
        "currencyCode": "",
        "population": "0",
        "capital": "",
        "continentName": "Antarctica"
    },
    {
        "countryCode": "AR",
        "countryName": "Argentina",
        "currencyCode": "ARS",
        "population": "41343201",
        "capital": "Buenos Aires",
        "continentName": "South America"
    },
    {
        "countryCode": "AS",
        "countryName": "American Samoa",
        "currencyCode": "USD",
        "population": "57881",
        "capital": "Pago Pago",
        "continentName": "Oceania"
    },
    {
        "countryCode": "AT",
        "countryName": "Austria",
        "currencyCode": "EUR",
        "population": "8205000",
        "capital": "Vienna",
        "continentName": "Europe"
    },
    {
        "countryCode": "AU",
        "countryName": "Australia",
        "currencyCode": "AUD",
        "population": "21515754",
        "capital": "Canberra",
        "continentName": "Oceania"
    },
    {
        "countryCode": "AW",
        "countryName": "Aruba",
        "currencyCode": "AWG",
        "population": "71566",
        "capital": "Oranjestad",
        "continentName": "North America"
    },
    {
        "countryCode": "AZ",
        "countryName": "Azerbaijan",
        "currencyCode": "AZN",
        "population": "8303512",
        "capital": "Baku",
        "continentName": "Asia"
    },
    {
        "countryCode": "DZ",
        "countryName": "Algeria",
        "currencyCode": "DZD",
        "population": "34586184",
        "capital": "Algiers",
        "continentName": "Africa"
    },]

const filterOptionList = (chars, options) => {
    return options.filter(function (obj) {
        return obj.countryName.toLowerCase().startsWith(chars.toLowerCase());
    })
}

test('check filtered options after input character', () => {
    expect(filterOptionList('a', Countries.countries)).toEqual(expect.arrayContaining(mockCountriesWithChar_A))
})