/**
 * Created by rroman681 on 5/11/17.
 */

import {Component} from "react";
import PropTypes from "prop-types";
import "../stylesheets/character.scss";
import FaKey from "react-icons/lib/fa/key";
import FaVolumeUp from "react-icons/lib/fa/volume-up";

export default class CharacterItem extends Component {
    constructor() {
        super();
        this.state = {
            showTraditional: true
        }
    }

    render() {
        const vol = this.props.heisigNumber <= 1500 ? "I" : "II";
        return (
            <article>
                <h1 className="character">{
                this.state.showTraditional ?
                    this.props.charTrad :
                    this.props.charSimp
                }</h1>
                <section className="heisigInfo">
                    <section className="lookup rowChildren">
                        <h2><FaKey/> <span className="keyword space">{this.props.keyword}</span></h2>
                        <div>Lesson {this.props.lessonNumber} ({vol}), #{this.props.heisigNumber}</div>
                        <div className="extraInfo"><small>(absolute: #{this.props.absoluteNumber})</small></div>
                    </section>
                    <section className="pinyin rowChildren">
                        <h2><FaVolumeUp/> <span className="space">{this.props.pinyin}</span></h2>
                    </section>
                </section>
            </article>
        )
    }
}

CharacterItem.propTypes = {
    charTrad: PropTypes.string.isRequired,
    charSimp: PropTypes.string.isRequired,
    lessonNumber: PropTypes.number.isRequired,
    heisigNumber: PropTypes.number.isRequired,
    absoluteNumber: PropTypes.number.isRequired,
    keyword: PropTypes.string.isRequired,
};