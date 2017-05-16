/**
 * Created by rroman681 on 5/11/17.
 */

import PropTypes from "prop-types";
import Hanzi from "./Hanzi";
import "../stylesheets/character.scss";
import FaKey from "react-icons/lib/fa/key";
import FaVolumeUp from "react-icons/lib/fa/volume-up";

// Stateless component
const CharacterItem = ({showTrad, toggleChar = f => f, charTrad, charSimp, pinyin, lessonNumber, heisigNumber, absoluteNumber, keyword}) => {
    const vol = heisigNumber <= 1500 ? "I" : "II";
    return (
        <article>
            <Hanzi charTrad={charTrad}
                   charSimp={charSimp}
                   showTrad={showTrad}
                   onToggle={toggleChar}
            />
            <section className="heisigInfo">
                <section className="lookup rowChildren">
                    <h2><FaKey/> <span className="keyword space">{keyword}</span></h2>
                    <div>Lesson {lessonNumber} ({vol}), #{heisigNumber}</div>
                    <div className="extraInfo"><small>(absolute: #{absoluteNumber})</small></div>
                </section>
                <section className="pinyin rowChildren">
                    <h2><FaVolumeUp/> <span className="space">{pinyin}</span></h2>
                </section>
            </section>
        </article>
    )
};

CharacterItem.propTypes = {
    charTrad: PropTypes.string.isRequired,
    charSimp: PropTypes.string.isRequired,
    lessonNumber: PropTypes.number.isRequired,
    heisigNumber: PropTypes.number.isRequired,
    absoluteNumber: PropTypes.number.isRequired,
    keyword: PropTypes.string.isRequired,
};

export default CharacterItem;