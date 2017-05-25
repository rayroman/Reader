/**
 * Created by rroman681 on 5/24/17.
 * Search component with both SearchForm and CharacterCard
 * Todo: add rest of the components at a later time
 */

import SearchForm from "../containers/SearchForm";
import CharacterCard from "../containers/CharacterCard";

const Search = ({searchState}) => {
    const {collection, item} = searchState;
    return (
        <main>
            <SearchForm/>
            {collection === "character" ?
                <CharacterCard character={item}/> :
                null // Put vocabulary item here
            }
        </main>
    )
};

export default Search;
