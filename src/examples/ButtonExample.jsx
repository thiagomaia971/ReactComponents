import React, { Component } from 'react';
import Button, { TypeColors } from "../components/Button.jsx";
import {container, styleExample, styleLblExample} from './Styles.jsx';

export default class ButtonExample extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: `<Button text={'Button - Default'} color={TypeColors.DEFAULT} />
<Button text={'Button - Success'} color={TypeColors.SUCCESS} />
<Button text={'Button - Info'} color={TypeColors.INFO} />
<Button text={'Button - Warning'} color={TypeColors.WARNING} />
<Button text={'Button - Danger'} color={TypeColors.DANGER} />
<Button text={'Button - Pmenos'} color={TypeColors.PMENOS} />`
        }


    }

    render() {

        

        return (
            <div style={container}>

                <div className="bs-docs-section">

                    <h1 className="page-header">Buttons</h1>
                    
                    <div className="bs-example" style={styleExample}>

                        <p style={styleLblExample}>Exemplo</p>

                        <div className="btn-toolbar" role="toolbar">
                            <Button text={'Button - Default'} color={TypeColors.DEFAULT} />
                            <Button text={'Button - Success'} color={TypeColors.SUCCESS} />
                            <Button text={'Button - Info'} color={TypeColors.INFO} />
                            <Button text={'Button - Warning'} color={TypeColors.WARNING} />
                            <Button text={'Button - Danger'} color={TypeColors.DANGER} />
                            <Button text={'Button - Pmenos'} color={TypeColors.PMENOS} />
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