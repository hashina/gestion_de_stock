import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import ColoredBlock from './ColoredBlock';
import Products from './Products';

let time = new Date().toLocaleString();

class App extends Component {
    render() {
        return (
            /*<div className="App">
             <div className="App-header">
             <img src={logo} className="App-logo" alt="logo"/>
             <h2>Tongasoa react ô !!!</h2>
             </div>
             <p className="App-intro">
             Salama {this.props.name}
             </p>
             <Clock></Clock>
             </div>*/
            /*<div className="App">
             <header><h1>My React App</h1></header>
             <div className="main-content">
             <ColoredBlock />
             </div>
             <footer></footer>
             </div>*/
            <div>
                <header className="App-header"><h1>Gestion de stock</h1></header>
                <section>
                    <Products ></Products>
                </section>
            </div>
        );
    }
}

export default App;
