import { Component } from 'react';
import PropTypes  from "prop-types";

import {Overlay, ModalDiv } from './Modal.styled';

export class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyClose);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyClose);
    }

    handleKeyClose = event => {
        if (event.code === 'Escape') {
            this.props.onClose();
        }
    };

    handleClose = event => {
        if (event.target === event.currentTarget) {
            this.props.onClose();
        }
    };

    render() {
        const { largeImageURL, tags } = this.props;
        return (
            <Overlay onClick={this.handleClose}>
                <ModalDiv>
                    <img src={largeImageURL} alt={tags} />
                </ModalDiv>
            </Overlay>
    )}}


    Modal.propTypes = {
        largeImageURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
        onClose: PropTypes.func.isRequired,
    }