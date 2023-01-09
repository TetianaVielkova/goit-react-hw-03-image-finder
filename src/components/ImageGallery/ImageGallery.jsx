import { Component } from "react";

import {STATUS} from './../constans/status';
import {List} from './ImageGallery.styled';
import {Loader} from './../Loader/Loader';
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export class ImageGallery extends Component  {

state = {
    status: STATUS.idle,
}

render(){
    const { status } = this.state;
    const {images} = this.props;
    return (
        <>
            { status === STATUS.pending  && <Loader/>}
            <List>
                {images.map(({ id, webformatURL, largeImageURL, tags }) => (
                    <ImageGalleryItem  key={id} tags={tags} webformatURL={webformatURL} largeImageURL={largeImageURL} />
                ))}
            </List>
        </>
        );
    }
}


