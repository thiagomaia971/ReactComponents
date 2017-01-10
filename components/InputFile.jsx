import React, { Component, PropTypes } from 'react';
import Button, { TypeColors } from './Button.jsx';

class InputFile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isHover: false
        };
    }

    onClickUpload() {
        this.props.onClick(this.refs.refInputFile.files);
    }

    toggleHover() {
        this.setState({ isHover: !this.state.isHover });
    }

    openInputFile() {
        $("#inputFile").click();
    }

    onChangeInputFile() {
        $("#lbl_inputText").val(this.refs.refInputFile.files[0].name);
    }

    render() {

        let buttonColor = null;
        if (this.props.buttonColor == TypeColors.PMENOS) {
            if (this.state.isHover) {
                buttonColor = '#0033A6';
            } else {
                buttonColor = '#0054a6';
            }
        }

        let styleButton = {
            display: 'inline-block',
            backgroundColor: buttonColor,
            color: (this.props.buttonColor == TypeColors.PMENOS) ? 'white' : '',
        }

        return (
            <div className="form-group" style={{margin: '10px'}}>

                <input id="inputFile" type="file" style={{ display: 'none' }} ref="refInputFile" onChange={this.onChangeInputFile.bind(this)} />

                <input id="lbl_inputText" type="text" placeholder={this.props.placeholder} className="form-control" 
                    style={{width: '15%', display: 'inline-block', borderRight: '0px'}}
                    readOnly={true} onClick={this.openInputFile.bind(this)}
                     />

                <button type="button"
                    className={'btn btn-' + this.props.buttonColor}
                    onClick={this.onClickUpload.bind(this)}
                    style={styleButton}
                    onMouseEnter={this.toggleHover.bind(this)}
                    onMouseLeave={this.toggleHover.bind(this)}>

                    {this.props.buttonText}

                </button>


            </div>
        );
    }

}

InputFile.propTypes = {
    buttonText: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    buttonColor: PropTypes.string,
}

InputFile.defaultProps = {
    buttonColor: TypeColors.PMENOS
}

export default InputFile;