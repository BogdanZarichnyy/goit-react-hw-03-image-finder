import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import css from './Modal.module.css';

export class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.props.handleCloseModal);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.props.handleCloseModal);
    }
    
    render() {
        const { handleCloseModal, hrefImage, altImage } = this.props;

        return ReactDOM.createPortal(
            <div className={css.backdrop} onClick={handleCloseModal}>
                <div className={css.modal}>
                    <img className={css.image} src={hrefImage} alt={altImage} />
                </div>
            </div>,
            document.body
        );
    }
}