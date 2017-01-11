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
        if(this.refs.refInputFile && this.refs.refInputFile.files[0]){
            $("#lbl_inputText").val(this.refs.refInputFile.files[0].name);
        }else {
            $("#lbl_inputText").val('');
        }
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
            backgroundColor: buttonColor,
            color: (this.props.buttonColor == TypeColors.PMENOS) ? 'white' : '',
            borderRadius: '0px 5px 5px 0px',
            cursor: (this.state.isHover) ? 'pointer' : 'default',
            float: 'none'

        }

        let styleInput = {
            borderRadius: '5px 0px 0px 5px',
        }

        return (
            <div className="input-group" style={{ margin: '10px', width: '260px', float: 'none' }}>

                <input id="inputFile" type="file" style={{ display: 'none' }} ref="refInputFile" onChange={this.onChangeInputFile.bind(this)} />

                <input id="lbl_inputText" type="text" placeholder={this.props.placeholder} className="form-control"
                    style={styleInput} readOnly={true}
                    onClick={this.openInputFile.bind(this)} />

                <span className={'input-group-addon btn btn-' + this.props.buttonColor}
                    style={styleButton}
                    onClick={this.onClickUpload.bind(this)} 
                    onMouseEnter={this.toggleHover.bind(this)}
                    onMouseLeave={this.toggleHover.bind(this)}>

                    <b>{this.props.buttonText}</b>
                </span>
                
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