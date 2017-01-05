import React, { Component, PropTypes } from 'react';

class TextBoxFor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        let newValue = e.target.value;

        this.setState({ value: newValue });
        this.props.onChange(newValue);

    }

    componentWillMount() {
        this.state = {
            value: this.props.value
        }
    }

    render() {

        const styleFormGroup = {
            display: (this.props.inline) ? 'inline-block' : 'block',
            margin: '10px 0px 10px 10px',
            width: this.props.width
        }

        const styleInput = {
            display: "initial"
        }

        const styleAddon = {
            cursor: "default"
        }

        return (
            <div className='textBoxFor form-group ' style={styleFormGroup} >

                <label className='textBoxFor-label' htmlFor={this.props.name} >
                    {this.props.label}
                </label>

                <div className="input-group" style={{ width: this.props.width }}>

                    {
                        (this.props.leftLabel) ?
                            <span className="input-group-addon" style={ styleAddon }>
                                {this.props.leftLabel}
                            </span>
                            :
                            <span></span>
                    }

                    <input className='textBoxFor-input' id={this.props.name}
                        className='form-control'
                        type={this.props.inputType}
                        placeholder={this.props.placeholder}
                        defaultValue={this.state.value}
                        onChange={(e) => this.props.onChange(e.target.value)}
                        disabled={this.props.disabled}
                        style={styleInput} />

                    {
                        (this.props.rightLabel) ?
                            <span className="input-group-addon" style={{ styleAddon }}>
                                {this.props.rightLabel}
                            </span>
                            :
                            <span></span>
                    }

                </div>

            </div>
        )
    }

}

TextBoxFor.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func,
    label: PropTypes.string,
    inputType: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    width: PropTypes.string,
    inline: PropTypes.bool,
    rightLabel: PropTypes.string,
    leftLabel: PropTypes.string
}

TextBoxFor.defaultProps = {
    inputType: 'text',
    disabled: false,
    width: '200px',
    inline: false
}

export default TextBoxFor;