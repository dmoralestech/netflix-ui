import React from 'react';
import Logo from './Logo.js';

import Navigation from './Navigation';
import UserProfile from './UserProfile';
import TitleList from './TitleList';
import Hero from './Hero';

import './App.css';

/////////////////
/// COMPONENTS //
/////////////////

// Container
var App = React.createClass({
    apiKey: '87dfa1c669eea853da609d4968d294be',
    getInitialState: function() {
        return {searchTerm:"", searchUrl:""};
    },
    handleKeyUp :function(e){
        if (e.key === 'Enter' && this.state.searchTerm !== '') {
            var searchUrl = "search/multi?query=" + this.state.searchTerm + "&api_key=" + this.apiKey;
            this.setState({searchUrl:searchUrl});
        }
    },

    handleChange : function(e){
        this.setState({searchTerm : e.target.value});
    },
    render: function() {
        return (
            <div>
                <header className="Header">
                    <Logo />
                    <Navigation />
                    <div id="search" className="Search">
                        <input onKeyUp={this.handleKeyUp} onChange={this.handleChange} type="search" placeholder="Search for a title..." value={this.state.searchTerm}/>
                    </div>
                    <UserProfile />
                </header>
                <Hero />
                <TitleList title="Search Results" url={this.state.searchUrl} />
                <TitleList title="Top TV picks for Jack" url='discover/tv?sort_by=popularity.desc&page=1' />
                <TitleList title="Trending now" url='discover/movie?sort_by=popularity.desc&page=1' />
                <TitleList title="Most watched in Horror" url='genre/27/movies?sort_by=popularity.desc&page=1' />
                <TitleList title="Sci-Fi greats" url='genre/878/movies?sort_by=popularity.desc&page=1' />
                <TitleList title="Comedy magic" url='genre/35/movies?sort_by=popularity.desc&page=1' />
            </div>
        );
    }
});



export default App;


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
//
// export default App;
