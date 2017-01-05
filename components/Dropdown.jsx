import React, { Component, PropTypes } from 'react';
import Button, { TypeColor } from "./Button.jsx";

class Dropdown extends Component {

    constructor(props) {
        super(props);

    }

    render() {

        const styleBtnGroup = {
            display: (this.props.inline) ? 'inline-block' : 'flex',
            margin: '5px 0px 10px 10px',
            width: this.props.width
        }

        const styleButton = {
            backgroundColor: (this.props.btnColor == TypeColor.PMENOS) ? '#0054a6' : '',
            color: (this.props.btnColor == TypeColor.PMENOS) ? 'white' : '',
            width: this.props.width
        }

        return (
            <div className="btn-group" style={styleBtnGroup} >

                <button type="button" className={"btn dropdown-toggle btn-" + this.props.btnColor} 
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                        style={styleButton} >
                    {this.props.label} <span className="caret"></span>
                </button>
                <ul className="dropdown-menu">
                    {this.props.children}
                </ul>
            </div>
        );
    }

}

Dropdown.propTypes = {
    label: PropTypes.string.isRequired,
    btnColor: PropTypes.string,
    inline: PropTypes.bool,
    width: PropTypes.string
}

Dropdown.defaultProps = {
    btnColor: TypeColor.DEFAULT,
    inline: true,
    width: "138px"
}

export default Dropdown;