import React, {FC} from "react";

import './Tag.sass'
import Country from "../../Interfaces/CountryInterface";

interface TagProps {
    country: Country
    onChangeSelectedCountries: any
}

const Tag: FC<TagProps> = ({country, onChangeSelectedCountries}) => {

    return (
        <div className={'tag'}
             style={{backgroundImage: `url(https://flagcdn.com/128x96/${country.countryCode.toLowerCase()}.png`}}>
            <div className='tag-title'>{country.countryName}</div>
            <button onClick={() => onChangeSelectedCountries('remove', country)}
                    className='tag-close'>&#120;</button>
        </div>
    )
}
export default Tag