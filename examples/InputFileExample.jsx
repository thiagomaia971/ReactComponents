import React, { Component } from 'react';
import { TypeColors } from "../components/Button.jsx";
import InputFile from "../components/InputFile.jsx";
import { container, styleExample, styleLblExample } from './Styles.jsx';

export default class InputFileExample extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: `<InputFile buttonText="Upload" placeholder="Selecione uma imagem..." onClick={(files) => { this.onClickUploadFile(files) } } />`
        }

    }

    render() {
        return (
            <div style={container}>

                <div className="bs-docs-section">

                    <h1 className="page-header">Input Files</h1>

                    <div className="bs-example" style={styleExample}>

                        <p style={styleLblExample}>Exemplo</p>

                        <div className="btn-toolbar" role="toolbar">
                            <InputFile buttonText="Upload" placeholder="Selecione uma imagem..." onClick={(files) => { this.onClickUploadFile(files) } } />
                        </div>
                    </div>

                    <figure className="highlight">
                        <pre>
                            <code className="language-html" data-lang="html">
                                {this.state.text}
                            </code>
                        </pre>
                    </figure>

                </div>
            </div>
        );
    }
}