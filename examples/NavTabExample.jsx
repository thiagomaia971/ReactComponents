import React, { Component } from 'react';
import NavTab from "../components/NavTab.jsx";
import NavItem from "../components/NavItem.jsx";
import { container, styleExample, styleLblExample } from './Styles.jsx';

export default class NavTabExample extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: `<NavTab>
    <NavItem i={0} label="Home"  >
        <div>
            Home é nois
        </div>
    </NavItem>

    <NavItem i={1} label="Cliente" >
        <div>
            Cliente é nois
        </div>
    </NavItem>
</NavTab>`
        }
    }

    render() {
        return (
            <div style={container}>

                <div className="bs-docs-section">

                    <h1 className="page-header">Nav Tab</h1>

                    <div className="bs-example" style={styleExample}>

                        <p style={styleLblExample}>Exemplo</p>

                        <div className="btn-toolbar" role="toolbar" style={{paddingLeft: '15px'}}>
                            <NavTab>
                                <NavItem i={0} label="Home"  >
                                    <div>
                                        Home é nois
                                    </div>
                                </NavItem>

                                <NavItem i={1} label="Cliente" >
                                    <div>
                                        Cliente é nois
                                    </div>
                                </NavItem>
                            </NavTab>
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