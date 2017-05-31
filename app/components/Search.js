/**
 * Created by rroman681 on 5/24/17.
 * Search component with both SearchForm and CharacterCard
 * Todo: add rest of the components at a later time
 */

import SearchForm from "../containers/SearchForm";
import CharacterCard from "../containers/CharacterCard";
import {Redirect, Route} from "react-router-dom";
import {Component} from "react";
import {queryCharacterAction} from "../actions";

class Search extends Component {
    constructor() {
        super();
    }

    shouldComponentUpdate(nextProps) {
        return (this.props.search.result._id !==
        nextProps.search.result._id) ||
            (this.props.search.isSuccessful !==
            nextProps.search.isSuccessful);
    }


    render() {
        const {collection, result, isSuccessful} = this.props.search;
        console.log("hello", isSuccessful);
        return (
            <main>
                <SearchForm/>
                <CharacterCard character={result}/>
                {isSuccessful ? result.item.traditional : "no"}
            </main>
        )
    }
}


/*
 <Route render={() => (
 isSuccessful ?
 (<Redirect push to={`/search/${collection}/${result.item.traditional}`}/>) :
 <h2>Character not found :(</h2>
 )} />

 <CharacterCard character={result}/>
 */
export default Search;

/*
 {collection === "character" ?
 <CharacterCard character={result}/> :
 null // Put vocabulary item here
 }
 */