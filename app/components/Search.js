/**
 * Created by rroman681 on 5/24/17.
 * Search component with both SearchForm and CharacterCard
 * Todo: add rest of the components at a later time
 */

import SearchForm from "../containers/SearchForm";
import CharacterCard from "../containers/CharacterCard";
import VocabularyList from "../containers/VocabularyList";
import "../stylesheets/search.scss";
import VocabularyCard from "../containers/VocabularyCard";

const Search = ({searchState}) => {
    const {collection, result} = searchState;
    const characterPlusVocab = () => (
        <div className="characterPlusVocab">
            <CharacterCard character={result}/>
            <VocabularyList items={result.vocabulary}/>
        </div>
    );
    return (
        <main>
            <SearchForm/>
            {result === null ?
                <h1>Search above!</h1> :
                result === "character" ?
                    characterPlusVocab() :
                    <VocabularyCard vocabulary={result}/>
            }
        </main>
    )
};

export default Search;
