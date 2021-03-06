import React, { useState } from 'react';
import { getNumberFact } from '../../apiCalls';

const SearchForm = props => {
    const [queryValue, updatequeryValue] = useState('')

    const displayNumberFact = e => {
        e.preventDefault()
        getNumberFact(queryValue)
            .then(fact => props.udpateNumberFact(fact))
            .then(() => updatequeryValue(''))
            .catch(error => console.log(error))
           
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