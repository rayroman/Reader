/**
 * Created by rroman681 on 5/30/17.
 *
 * The small links next to the vocabulary item in the search
 */

const VocabularyListItem = ({vocabulary, vocabSearch}) => {
    const onClickVocab = e => {
        e.preventDefault();
        vocabSearch(vocabulary);
    };

    return (
        <li onClick={onClickVocab}>
            {vocabulary}
        </li>
    )
};

export default VocabularyListItem
