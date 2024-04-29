import React, {useState} from 'react'
import { SearchBarx } from './SearchBar';
import { SearchResults } from './SearchResults';

export function ParentComponent() {

    const [searchResults, setSearchResults] = useState([]);


    const handleSearchResults = (results) => {

    setSearchResults(results);

    };

    return (
        <div>
            <SearchBarx onSearchResults={handleSearchResults} />
            <SearchResults results={searchResults} />    
        </div>
    )
}

