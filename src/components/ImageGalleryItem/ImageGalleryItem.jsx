import PropTypes  from "prop-types";
import { Component } from "react";
import {Item, Img} from './ImageGalleryItem.styled';

import {Modal} from './../Modal/Modal';


export class ImageGalleryItem extends Component {

    state = {
        isModalOpen: false,
    }

    handleToggle = () => {
        this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
    };

    render(){
        const { webformatURL, largeImageURL, tags } = this.props;
        const { isModalOpen } = this.state;
        return(
            <Item>
                <Img src={webformatURL} alt={tags} onClick={this.handleToggle}/>
                {isModalOpen && <Modal largeImageURL={largeImageURL} tags={tags} onClose={this.handleToggle} />}
            </Item>
        )
}
}


ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
}