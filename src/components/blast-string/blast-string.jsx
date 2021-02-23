import { BlastLetter } from "../blast-letter/blast-letter"

export const BlastString = (props) => {
    const tags = props.stringValue.split('').map(letter => {
        return <BlastLetter letter={letter}></BlastLetter>
    });
    console.log(tags);
    return(
        tags
    )
}