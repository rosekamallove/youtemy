import "./ExplorePage.css";
import Footer from '../../Components/Footer/Footer';
import React from 'react';
import SearchBar from './SearchBar';
import instance from '../../apis/youtube';
import PlaylistsList from './PlaylistsList';
import {Card } from 'antd';

class ExplorePage extends React.Component {
    state = {
        playlists: [],
    }
    handleSubmit = async (termFromSearchBar) => {
        const response = await instance.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })

        this.setState({
            playlists: response.data.items
        })
        console.log("this is resp",response);
    };

    render() {
        return (
            <div className='ui container'>
              <div className='mainbody'>
                      <Card className="searchbar" style={{width:500},{padding:0},{margin:20}}>
                          <SearchBar handleFormSubmit={this.handleSubmit}/>
                      </Card>
                      < Card className="allplaylists">
                              <PlaylistsList playlists={this.state.playlists}/>
                        </Card>
              </div>
              <Footer/>
            </div>
        )
    }
}

export default ExplorePage;