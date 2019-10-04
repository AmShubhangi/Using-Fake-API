import React from 'react';
import axios from 'axios';
import unsplash from '../API/unsplash';
import SearchBar from './searchBar';
import imageList from '../imageList';
import ImageList from '../imageList';

class App extends React.Component {
    state = { images: [] };
    onSearchSubmit = async (term) => {
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID 090206c0fc7c37cc4808a49cc101c5512a4d4da3777c0baf5bf2c10aba2b2ebd'
            }
        }).then((response) => {
            console.log(response.data.results);
            this.setState({ images: response.data.results })

        });
    }
    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList  images={this.state.images}/>
            </div>
        )
    }
};
export default App;