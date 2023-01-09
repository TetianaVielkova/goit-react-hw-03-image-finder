import PropTypes  from "prop-types";
import { Component } from "react";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {getImageApi} from './../servises/api';
import {STATUS} from './../constans/status';
import {List} from './ImageGallery.styled';
import {Loader} from './../Loader/Loader';
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { Button } from "components/Button/Button";

export class ImageGallery extends Component  {

state = {
    images: [],
    page: 1,
    loading: false,
    status: STATUS.idle,
}

async componentDidUpdate(prevProps, prevState){
    const prevName = prevProps.imageName;
    const newName = this.props.imageName;

    const {page} = this.state;

    if (prevName !== newName) {
        this.setState({ images: [] })
    }

    if (prevName !== newName || prevState.page !== page) {
        this.setState({ status: STATUS.pending });
    try{
        const {data} = await getImageApi(newName, page);
        if(data.total === 0){
            this.setState({ status: STATUS.rejected });
            return toast.warning(' Name not found. Try again ');
        }
        data.hits.map(image => {
        return this.setState(({images}) => ({images: [...images, image]}));
    })
    }catch(error){
        console.log(error);
    }
    this.setState({ status: STATUS.success });
}
}

handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
}

render(){
    const { status, images } = this.state;
    return (
        <>
            { status === STATUS.pending  && <Loader/>}
            <List>
                {images.map(({ id, webformatURL, largeImageURL, tags }) => (
                    <ImageGalleryItem  key={id} tags={tags} webformatURL={webformatURL} largeImageURL={largeImageURL} />
                ))}
            </List>
            {images.length >= 12  && status === STATUS.success && <Button handleLoadMore={this.handleLoadMore} />}
        </>
        );
    }
}

ImageGallery.propTypes = {
    imageName: PropTypes.string.isRequired,
}
