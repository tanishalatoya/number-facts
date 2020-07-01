import React, { useState } from 'react';
import { getNumberFact } from '../../apiCalls';

const SearchForm = () => {
    const [queryValue, updatequeryValue] = useState('')

    const displayNumberFact = e => {
        e.preventDefault()
        getNumberFact(queryValue)
            .then(fact => console.log(fact))
            .then(() => updatequeryValue(''))
           
    }

    return(
        <form>
            <input 
                type='number'
                name='queryValue'
                placeholder='Enter a number'
                value={queryValue}
                onChange={e => updatequeryValue(e.target.value)}
                />
            <button
                onClick={displayNumberFact}>
                Submit
            </button>
        </form>
    )
}

export default SearchForm;