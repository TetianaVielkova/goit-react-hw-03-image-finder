import { Component } from "react";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {getImageApi} from './servises/api';
import {STATUS} from './constans/status';

import { ToastContainer } from 'react-toastify';

import { Button } from "components/Button/Button";
import { Searchbar } from "./Searchbar/Searchbar";
import {ImageGallery} from './ImageGallery/ImageGallery';


export class App extends Component{

  state={
    imageName: '',
    page: 1,
    images: [],
    status: STATUS.idle,
  }

  async componentDidUpdate(_, prevState){
    const prevName = prevState.imageName;
    const newName = this.state.imageName;

    const {page} = this.state;

    if (prevName !== newName) {
        this.setState({ page: 1, images: [] })
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

  handleSearch = imageName => {
    this.setState({ imageName, page: 1, images:[]});
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
}

  render(){
    const {images, status} = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSearch}/>
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          />
        <ImageGallery images={images}/>
        {images.length >= 12  && status === STATUS.success && <Button handleLoadMore={this.handleLoadMore} />}
      </>
    );
  }
};
