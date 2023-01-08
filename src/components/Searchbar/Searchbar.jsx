import { Component } from "react";
import {Header, Form, Button, Input} from './Searchbar.styled';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {GoSearch} from 'react-icons/go';
import PropTypes from 'prop-types';



export class Searchbar extends Component {
    state = {
        imageName:'',
    };

    handleChange = event => {
        this.setState({ imageName: event.currentTarget.value.toLowerCase()});
    };

    handleSubmit = event => {
        event.preventDefault();
        const {imageName} = this.state;
        if (imageName.trim() === '') {
            toast.error(' Entry image name!');
            return;
        }

        this.props.onSubmit(imageName);
        this.setState({ imageName: '' });
    };


    render() {
        const { imageName } = this.state;
        return(
            <Header>
                <Form onSubmit={this.handleSubmit}>
                    <Button type="submit">
                    <GoSearch style={{width: "25px",height: "35px"}}/>
                    </Button>
                    <Input
                    type="text"
                    name="imageName"
                    autoFocus
                    autocomplete="off"
                    value={imageName}
                    onChange={this.handleChange}
                    placeholder="Search images and photos"
                    />
                </Form>
            </Header>
        )
    }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}