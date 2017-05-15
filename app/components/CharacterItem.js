/**
 * Created by rroman681 on 5/11/17.
 */

import {Component} from "react";
import PropTypes from "prop-types";

export default class CharacterItem extends Component {
    constructor() {
        super();
        this.state = {
            showTraditional: true
        }
    }

    render() {
        return (
            <article>
                <h1>{
                this.state.showTraditional ?
                    this.props.charTrad :
                    this.props.charSimp
                }</h1>
                <section>
                    <section>
                        <h2>{this.props.keyword}</h2>
                        <div>Lesson {this.props.lessonNumber} ({this.props.absoluteNumber})</div>
                    </section>
                    <section>
                        <h2>{this.props.pinyin}</h2>
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