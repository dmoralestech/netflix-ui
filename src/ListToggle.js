/**
 * Created by dmorales on 3/11/2016.
 */
import React from 'react';

class ListToggle extends React.Component {
    constructor() {
        super();
        this.state = {toggled: false};
    }

    getInitialState() {
        return ({toggled: false})
    }

    handleClick() {
        if (this.state.toggled === true) {
            this.setState({toggled: false});
        } else {
            this.setState({toggled: true});
        }

    }

    render() {
        return (
            <div onClick={this.handleClick.bind(this)} data-toggled={this.state.toggled} className="ListToggle">
                <div>
                    <i className="fa fa-fw fa-plus"></i>
                    <i className="fa fa-fw fa-check"></i>
                </div>
            </div>
        );
    }
}

export default ListToggle;