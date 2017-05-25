/**
 * Created by rroman681 on 5/11/17.
 */

import PropTypes from "prop-types";
import Hanzi from "./Hanzi";
import "../stylesheets/character.scss";
import FaKey from "react-icons/lib/fa/key";
import FaVolumeUp from "react-icons/lib/fa/volume-up";
import SearchForm from "./SearchForm";
import GuessForm from "./GuessForm"

// Stateless component
const CharacterItem = ({showTrad, toggleChar = f => f, character}) => {
    const {lesson, heisig, absolute} = character.numbers;
    const vol = heisig <= 1500 ? "I" : "II";
    return (
        <article>
            <Hanzi charTrad={character.item.traditional}
                   charSimp={character.item.simplified}
                   showTrad={showTrad}
                   onToggle={toggleChar}
            />
            <section className="heisigInfo">
                <section className="lookup rowChildren">
                    <h2><FaKey/> <span className="keyword space">{character.keyword}</span></h2>
                    <div>Lesson {lesson} ({vol}), #{heisig}</div>
                    <div className="extraInfo"><small>(absolute: #{absolute})</small></div>
                </section>
                <section className="pinyin rowChildren">
                    <h2><FaVolumeUp/> <span className="space">{character.pinyin[0]}</span></h2> {/* Todo: change this to show list of all pronunciations when I cross that bridge */}
                </section>
            </section>
        </article>
    )
};

CharacterItem.propTypes = {
    character: PropTypes.shape({
        keyword: PropTypes.string.isRequired,
        pinyin: PropTypes.array.isRequired,
        item: PropTypes.shape({
            simplified: PropTypes.string.isRequired,
            traditional: PropTypes.string.isRequired
        }),
        numbers: PropTypes.shape({
            lesson: PropTypes.number,
            heisig: PropTypes.number,
            absolute: PropTypes.number
        })
    })
};

export default CharacterItem;