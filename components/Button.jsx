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

    constructor(props){
        super(props);
        this.state = {
            style: {}
        }
    }

    defaultStyle() {

        if (this.props.style) {
            if (!this.props.style.margin) {
                let style = this.props.style;
                style.margin = "10px";

                this.state = {
                    style: style
                }
            } else {
                this.state = {
                    style: this.props.style
                }
            }
        } else {
            this.state = {
                style: {
                    "margin": "10px"
                }
            }
        }
    }

    componentWillMount() {
        //this.defaultStyle();
    }

    render() {

        const styleFormGroup = {
            display: (this.props.inline) ? 'inline-block' : 'block',
            margin: '5px 0px 10px 10px',
            width: this.props.width
        }

        const styleButton = {
            width: this.props.width,
            backgroundColor: (this.props.color == TypeColor.PMENOS) ? '#0054a6' : '',
            color: (this.props.color == TypeColor.PMENOS) ? 'white' : '',
        }

        return (
            <div className={"form-group"} 
                 style={styleFormGroup}>

                <button type={this.props.buttonType}
                    className={'btn btn-' + this.props.color + " " + this.props.classButton}
                    style={this.props.classButton} 
                    style={styleButton} 
                    onClick={this.props.onClick}>

                    {this.props.text}

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
    inline: PropTypes.bool
}

Button.defaultProps = {
    buttonType: "button",
    color: TypeColor.DEFAULT,
    classButton: "",
    className: "",
    width: '138px',
    inline: true
}

export default Button;
export const TypeColors = TypeColor;
