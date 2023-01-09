import { Component } from "react";

import { ToastContainer } from 'react-toastify';

import { Searchbar } from "./Searchbar/Searchbar";
import {ImageGallery} from './ImageGallery/ImageGallery';


export class App extends Component{

  state={
    imageName: '',
    
  }


  handleSearch = imageName => {
    this.setState({ imageName});
  };


  render(){
    const {imageName} = this.state;
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
        <ImageGallery imageName={imageName}/>
      </>
    );
  }
};
