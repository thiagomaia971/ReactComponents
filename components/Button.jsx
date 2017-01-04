import React, { Component, PropTypes } from 'react';

export const TypeColor = {
    DEFAULT: "default",
    PRIMARY: "primary",
    SUCCESS: "success",
    INFO: "info",
    WARNING: "warning",
    DANGER: "danger"
}

class Button extends Component {

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
        this.defaultStyle();
    }

    render() {

        return (
            <button type={this.props.buttonType}
                className={'btn btn-' + this.props.color + ' ' + this.props.className}
                style={this.state.style} >

                {this.props.text}

            </button>
        );
    }
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    buttonType: PropTypes.string,
    color: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
}

Button.defaultProps = {
    buttonType: "button",
    color: TypeColor.DEFAULT
}

export default Button;
export const TypeColors = TypeColor;
