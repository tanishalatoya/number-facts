import React, { useState } from 'react';
import { getNumberFact } from '../../apiCalls';

const SearchForm = () => {
    const [queryValue, updatequeryValue] = useState('')

    const displayNumberFact = e => {
        e.preventDefault()
        getNumberFact(queryValue)
            .then(fact => console.log(fact))
           
    }

    return(
        <form>
            <input 
                type='number'
                name='queryValue'
                placeholder='Enter a number'
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