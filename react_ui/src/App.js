import React, { Component } from 'react';
import logo from './r.png';
import './App.css';

class Header extends Component{
    render(){
        return(
            <div className="header">
                <div className="left_content">
                    <i className="fas fa-align-left fa-2x"></i>
                </div>
                <div className="right_content">
                    <img src="https://raw.githubusercontent.com/ihiteish/ihiteish.github.io/master/hitesh.jpg" className="img_icon"/>
                    Hitesh Yadav
                    <i className="fas fa-caret-down"></i>
                </div>
            </div>
        );
    }
}

class Sidebar extends Component{
    render(){
        return(
            <div className="sidebar">
                <ul>
                    <li><i className="fas fa-home"></i></li>
                    <li className="active"><i className="fab fa-hubspot active_color"></i></li>
                    <li><i className="far fa-square"></i></li>
                    <li><i className="far fa-folder"></i></li>
                </ul>
            </div>
        );
    }
}

class Table extends Component{
    render(){
        return(
            <tr>
                <td aria-label="img"><img src={logo} /></td>
                <td aria-label="type">Distribution</td>
                <td aria-label="date">10 March 2017</td>
                <td aria-label="value">$45</td>
            </tr>
        );
    }
}

class Content extends Component{
    render(){git
        return(
            <div className="content">
                <div className="body_content">
                    <h2 className="heading_text">Activities</h2>
                    <ul>
                        <li className="active_child">Portfolio</li>
                        <li>Operations</li>
                        <li>Fees</li>
                        <li>Others</li>
                    </ul>
                    <table>
                        <thead>
                        <tr>
                            <th></th>
                            <th>Location <i className="fas fa-caret-down"></i></th>
                            <th>Department <i className="fas fa-caret-down"></i></th>
                            <th>Posted <i className="fas fa-caret-down"></i></th>
                        </tr>
                        </thead>
                        <tbody>

                        <Table />
                        <tr>
                            <td aria-label="img"><img src={logo} /></td>
                            <td aria-label="type">Distribution</td>
                            <td aria-label="date">10 March 2017</td>
                            <td aria-label="value">$45</td>
                        </tr>
                        <tr>
                            <td aria-label="img"><img src={logo} /></td>
                            <td aria-label="type">Distribution</td>
                            <td aria-label="date">10 March 2017</td>
                            <td aria-label="value">$45</td>
                        </tr>
                        <tr>
                            <td aria-label="img"><img src={logo} /></td>
                            <td aria-label="type">Distribution</td>
                            <td aria-label="date">10 March 2017</td>
                            <td aria-label="value">$45</td>
                        </tr>
                        <tr>
                            <td aria-label="img"><img src={logo} /></td>
                            <td aria-label="type">Distribution</td>
                            <td aria-label="date">10 March 2017</td>
                            <td aria-label="value">$45</td>
                        </tr>
                        <tr>
                            <td aria-label="img"><img src={logo} /></td>
                            <td aria-label="type">Distribution</td>
                            <td aria-label="date">10 March 2017</td>
                            <td aria-label="value">$45</td>
                        </tr>
                        <tr>
                            <td aria-label="img"><img src={logo} /></td>
                            <td aria-label="type">Distribution</td>
                            <td aria-label="date">10 March 2017</td>
                            <td aria-label="value">$45</td>
                        </tr>
                        <tr>
                            <td aria-label="img"><img src={logo} /></td>
                            <td aria-label="type">Distribution</td>
                            <td aria-label="date">10 March 2017</td>
                            <td aria-label="value">$45</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="body_card">
                    <div className="card">
                        $ <span className="money">23,685</span> <span className="profit">+5.2%</span>
                        <p className="value">Deposits: <span>$10,000</span></p>
                        <button className="btn">Add Funds<span className="go"><i class="fas fa-arrow-right white"></i></span></button>
                    </div>
                </div>
            </div>
        );
    }
}

class App extends Component{
    render(){
        return(
            <div>
                <Header />
                <Sidebar />
                <Content />
            </div>
        );
    }
}

export default App;
