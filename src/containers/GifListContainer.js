import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '...components/GifList'


export default class GifListContainer extends React.Component {

    state = {
        gifs: []
    }

    render() {
        return (
            <div>
                <GifSearch fetchGifs={this.fetchGifs} />
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }
    fetchGifs = (query= "Dolphins") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=a7zYtDIW3x0C4ufqqbM9VVNX3TTrdlbt&rating=g`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    gifs: data.map( gif => ({ url: gif.images.original.url }))
                })
            })
    }

    componentDidMount() {
        this.fetchGifs()
    }
}