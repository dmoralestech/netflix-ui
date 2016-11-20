/**
 * Created by dmorales on 8/11/2016.
 */

import React from 'react'
import App from './App'
import MyApp from './MyApp'


class Main extends React.Component {
    
    render() {
        var Child;
        
        switch(this.props.route) {
            case 'orig': Child = App;
            default:Child = MyApp;
        }

        return (
            <div>
                <Child/>
            </div>
        );
    }
    
}

export default Main
