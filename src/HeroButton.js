/**
 * Created by dmorales on 3/11/2016.
 */
import React from 'react'

// Hero Button
var HeroButton = React.createClass({
    render: function () {
        return (
            <a href="#" className="Button" data-primary={this.props.primary}>{this.props.text}</a>
        );
    }
})

export default HeroButton