import React, { Component } from "react";

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Pixabay } from '../api/pixabay';

import { setPages } from '../utils/setPages';

const pixabayAPI = new Pixabay();

export class App extends Component {
    constructor() {
        super();
        this.state = {
            images: [],
            pages: null,
            itemsResidual: null,
            showButtonLoadImages: false,
            isLoad: false,
        }
    }

    componentDidUpdate( _, prevState ) {
        if (this.state.images.length === prevState.images.length) {
            return;
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        
        this.setState({ inputValue: '', images: [], pages: null, itemsResidual: null, isLoad: true });

        pixabayAPI.searchQuery = event.target.elements.searchQuery.value.trim();
        pixabayAPI.page = 1;
        pixabayAPI.per_page = 40;

        try {
            const { hits, totalHits } = await pixabayAPI.getContentByInputData();

            if (hits.length === 0) {
                return;
            }
            
            const residual = totalHits % pixabayAPI.per_page;

            this.setState({
                inputValue: pixabayAPI.searchQuery,
                images: [...hits],
                pages: setPages(residual, totalHits, pixabayAPI.per_page),
                itemsResidual: residual,
                showButtonLoadImages: true,
                isLoad: false,
            });
        }
        catch (error) {
            console.log(error);
            this.setState({ isLoad: false });
        }
    }

    handleLoadMoreImages = async () => {

        this.setState({ isLoad: true });

        try {
            pixabayAPI.page += 1;
        
            if (pixabayAPI.page === this.state.pages) {
                this.setState({ showButtonLoadImages: false });
            }

            if (pixabayAPI.page === this.state.pages) {
                pixabayAPI.per_page = this.state.itemsResidual;
            }

            const { hits } = await pixabayAPI.getContentByInputData();

            if (hits.length === 0) {
                return;
            }

            this.setState( prevState => ({ images: [...prevState.images, ...hits], isLoad: false }) );
        }
        catch (error) {
            console.log(error);
            this.setState({ isLoad: false });
        }
    }

    render() {
        return (
            <div className="App">

                <Searchbar handleSubmit={this.handleSubmit} />

                <ImageGallery handleShowModal={this.handleShowModal} colections={this.state.images} />
                
                {this.state.isLoad && <Loader />}

                {this.state.showButtonLoadImages && <Button loadMoreImages={this.handleLoadMoreImages} />}
                
            </div>
        )
    }
};
