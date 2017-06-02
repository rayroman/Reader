/**
 * Created by rroman681 on 5/24/17.
 * Search component with both SearchForm and CharacterCard
 * Todo: add rest of the components at a later time
 */

import {Component} from "react";
import SearchForm from "../containers/SearchForm";
import CharacterCard from "../containers/CharacterCard";
import VocabularyList from "../containers/VocabularyList";
import "../stylesheets/search.scss";
import VocabularyCard from "../containers/VocabularyCard";

/*
const Search = ({searchState}) => {
    const {collection, result} = searchState;
    const characterPlusVocab = () => {
        console.log(collection);
        return (
            <div className="characterPlusVocab">
                <CharacterCard character={result}/>
                <VocabularyList items={result.vocabulary}/>
            </div>
        )
    };
    return (
        <main>
            <SearchForm/>
            {result === null ?
                <h1>Search above!</h1> :
                null}
            {(result && collection === "character") && characterPlusVocab()}
            {(result && collection === "vocabulary") && <VocabularyCard vocabulary={result}/>}
        </main>
    )
};
*/

export default class Search extends Component {
    constructor() {
        super();
    }

    shouldComponentUpdate(nextProps) {
        // may be a better way to do this?
        return JSON.stringify(this.props.searchState.result) !== JSON.stringify(nextProps.searchState.result);
    }

    render() {
        const {collection, result} = this.props.searchState;
        const characterPlusVocab = () => {
            console.log(collection);
            return (
                <div className="characterPlusVocab">
                    <CharacterCard character={result}/>
                    <VocabularyList items={result.vocabulary}/>
                </div>
            )
        };
        return (
            <main>
                <SearchForm/>
                {result === null ?
                    <h1>Search above!</h1> :
                    null}
                {(result && collection === "character") && characterPlusVocab()}
                {(result && collection === "vocabulary") && <VocabularyCard vocabulary={result}/>}
            </main>
        )
    }
}
