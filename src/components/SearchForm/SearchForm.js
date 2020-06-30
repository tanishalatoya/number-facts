import React, { useState } from 'react';

const SearchForm = () => {
    const [queryValue, updatequeryValue] = useState('')

    return(
        <form>
            <input 
                type='number'
                name='queryValue'
                placeholder='Enter a number'
                onChange={e => updatequeryValue(e.target.value)}
                />
        </form>
    )
}

export default SearchForm;