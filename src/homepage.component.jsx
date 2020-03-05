import React, {Component} from 'react';
import './homepage.styles.scss'

class Homepage extends Component {
    render() {
        return (
            <div className="homepage">
                <div className="directory-menu">
                    <div className="menu-item">
                            <div className="content">
                                <h1 className="title">HATS</h1>
                                <span className="subtitle">SHOP NOW</span>
                            </div>
                      </div>

                    <div className="menu-item">
                        <div className="content">
                            <h1 className="title">JAKETS</h1>
                            <span className="subtitle">SHOP NOW</span>
                        </div>
                    </div>

                    <div className="menu-item">
                        <div className="content">
                            <h1 className="title">SNEAKERS</h1>
                            <span className="subtitle">SHOP NOW</span>
                        </div>
                    </div>

                    <div className="menu-item">
                        <div className="content">
                            <h1 className="title">WOMENTS</h1>
                            <span className="subtitle">SHOP NOW</span>
                        </div>
                    </div>


                    <div className="menu-item">
                        <div className="content">
                            <h1 className="title">MANS</h1>
                            <span className="subtitle">SHOP NOW</span>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Homepage;