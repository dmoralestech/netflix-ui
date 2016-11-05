/**
 * Created by dmorales on 3/11/2016.
 */
import React from 'react'

class HeroButton extends React.Component {
    render() {
        return (
            <a href="#" className="Button" data-primary={this.props.primary}>{this.props.text}</a>
        );
    }
}

export default HeroButton