import React, { Component, PropTypes } from 'react';
import Button, { TypeColor } from "./Button.jsx";

class Dropdown extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isHover: false
        }
    }

     toggleHover() {
        this.setState({ isHover: !this.state.isHover });
    }

    render() {

        let buttonColor = null;
        if (this.props.btnColor == TypeColor.PMENOS) {
            if (this.state.isHover) {
                buttonColor = '#0033A6';
            } else {
                buttonColor = '#0054a6';
            }
        }

        const styleBtnGroup = {
            display: (this.props.inline) ? 'inline-block' : 'flex',
            margin: '5px 0px 10px 10px',
            minWidth: this.props.minWidth,
            width: this.props.width
        }

        const styleButton = {
            backgroundColor: buttonColor,
            color: (this.props.btnColor == TypeColor.PMENOS) ? 'white' : '',
            minWidth: this.props.minWidth,
            width: this.props.width
        }


        return (
            <div className="btn-group" style={styleBtnGroup} >

                <button type="button" className={"btn dropdown-toggle btn-" + this.props.btnColor}
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                    style={styleButton}
                    onMouseEnter={this.toggleHover.bind(this)}
                    onMouseLeave={this.toggleHover.bind(this)} >
                    
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
    width: PropTypes.string,
    minWidth: PropTypes.string
}

Dropdown.defaultProps = {
    btnColor: TypeColor.DEFAULT,
    inline: true,
    minWidth: "90px"
}

export default Dropdown;