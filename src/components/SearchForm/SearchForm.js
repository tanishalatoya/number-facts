import React, { useState } from 'react';

const SearchForm = () => {
    const [queryValue, updatequeryValue] = useState('')

    return(
        <form>
            <input 
                type='number'
                name='queryValue'
                placeholder='Enter a number'
                />
        </form>
    )
}

export default SearchForm;