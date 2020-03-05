import React, {Component} from 'react';
import './homepage.styles.scss'
import Directory from '../../src/components/directory/directory.component';

class Homepage extends Component {
    render() {
        return (
            <div className="homepage">
               <Directory/>
            </div>
        );
    }
}

export default Homepage;