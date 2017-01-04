import React from 'react';
import Button, {TypeColors} from "./components/Button.jsx";
import TextBoxFor from "./components/TextBoxFor.jsx";

class App extends React.Component {

    render() {

        this.state = {
            nome: ''
        };

        return (
            <div>
                Hello World!!!
                
                <br/>
                
                <Button text={'Button - Default'} color={TypeColors.DEFAULT} />
                <Button text={'Button - Success'} color={TypeColors.SUCCESS} />

                <br />

                <TextBoxFor name={'Nome'} value={this.state.nome} onChange={(newValue) => { this.setState({nome: newValue });}}/>

            </div>
        );
    }
}

export default App;