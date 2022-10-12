import PropTypes from 'prop-types';
import { Component } from 'react';
import { Modal } from '../Modal/Modal';
import css from './ImageGalleryItem.module.css'

export class ImageGalleryItem extends Component {
    
    constructor() {
        super();
        this.state = {
            showModal: false,
        }
    }
 
    handleCloseModal = event => {
        if (event.currentTarget === event.target || event.code === 'Escape') {
            this.setState({ showModal: false });
        }  
    }

    handleOpenModal = event => {
        event.preventDefault();

        this.setState({ showModal: true });
    }

    render() {
        const { webformatURL, largeImageURL, tags } = this.props;
        
        return (
            <>
                {this.state.showModal && <Modal
                    handleCloseModal={this.handleCloseModal}
                    hrefImage={largeImageURL}
                    altImage={tags}
                />}

                <div className={css.ImageGalleryLink} onClick={this.handleOpenModal}>
                    <img className={css.ImageGalleryItemImage} src={webformatURL} alt={tags} loading="lazy" />
                </div>
            </>

        )
    }
}

ImageGalleryItem.protoTypes = {
    showModal: PropTypes.func,
    largeImageURL: PropTypes.string,
    webformatURL: PropTypes.string,
    tags: PropTypes.string,
};