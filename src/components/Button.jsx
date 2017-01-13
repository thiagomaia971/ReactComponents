import React, { Component, PropTypes } from 'react';

export const TypeColor = {
    DEFAULT: "default",
    PRIMARY: "primary",
    SUCCESS: "success",
    INFO: "info",
    WARNING: "warning",
    DANGER: "danger",
    PMENOS: "pmenos"
}

class Button extends Component {

    constructor(props) {
        super(props);
        this.state = {
            style: {},
            isHover: false
        }
    }

    toggleHover() {
        this.setState({ isHover: !this.state.isHover });
    }

    render() {

        const styleFormGroup = {
            display: (this.props.inline) ? 'inline-block' : 'block',
            margin: '5px 0px 10px 10px',
            width: this.props.width,
            minWidth: this.props.minWidth
        }

        let buttonColor = null;
        if (this.props.color == TypeColor.PMENOS) {
            if (this.state.isHover) {
                buttonColor = '#0033A6';
            } else {
                buttonColor = '#0054a6';
            }
        }

        const styleButton = {
            width: this.props.width,
            minWidth: this.props.minWidth,
            backgroundColor: buttonColor,
            color: (this.props.color == TypeColor.PMENOS) ? 'white' : '',
        }

        return (
            <div className={"form-group"}
                style={styleFormGroup}>

                <button type={this.props.buttonType}
                    className={'btn btn-' + this.props.color + " " + this.props.classButton}
                    style={this.props.classButton}
                    style={styleButton}
                    onClick={this.props.onClick}
                    onMouseEnter={this.toggleHover.bind(this)}
                    onMouseLeave={this.toggleHover.bind(this)}>
                    
                    {
                        (this.props.glyphiconLeft) 
                        ? 
                        <span className={"glyphicon "+this.props.glyphiconLeft} aria-hidden="true"></span>
                        :
                        ''
                    }
                    {this.props.text}

                    {
                        (this.props.glyphiconRigth) 
                        ? 
                        <span className={"glyphicon "+this.props.glyphiconRigth} aria-hidden="true"></span>
                        :
                        ''
                    }

                </button>
            </div>
        );
    }
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    buttonType: PropTypes.string,
    color: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    classButton: PropTypes.string,
    width: PropTypes.string,
    inline: PropTypes.bool,
    glyphiconLeft: PropTypes.string,
    glyphiconRigth: PropTypes.string
}

Button.defaultProps = {
    buttonType: "button",
    color: TypeColor.DEFAULT,
    classButton: "",
    className: "",
    width: 'auto',
    minWidth: '90px',
    inline: true
}

export default Button;
export const TypeColors = TypeColor;
