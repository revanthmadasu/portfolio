import React from 'react';
import './blast-letter.scss';
export class BlastLetter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blastActive: ''
        }
    }
    render() {
        return (
            <React.Fragment>
                <span className={`blast-letter ${this.state.blastActive} ${this.props.className}`} onMouseEnter={() => this.blast()}>
                    {this.props.letter.replace(/ /g, "\u00a0")}
                    </span>
            </React.Fragment>
        )
    }
    blast() {
        this.setState({
            blastActive: 'blast-active'
        })
        setTimeout(() => this.setState({
            blastActive: ''
        }), 1000);
    }
}