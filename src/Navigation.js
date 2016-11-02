/**
 * Created by dmorales on 3/11/2016.
 */
import React from 'react';
import './App.css';

// Navigation
var Navigation = React.createClass({
    render: function() {
        return (
            <div id="navigation" className="Navigation">
                <nav>
                    <ul>
                        <li>Browse</li>
                        <li>My list</li>
                        <li>Top picks</li>
                        <li>Recent</li>
                    </ul>
                </nav>
            </div>
        );
    }
});

export default Navigation; 
