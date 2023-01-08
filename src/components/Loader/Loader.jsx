import React from "react";
import { RotatingLines } from 'react-loader-spinner';
import {LoaderContainer} from './Loader.styled';

export const Loader = () => {
    return(
        <LoaderContainer>
            <RotatingLines
            strokeColor="#3f51b5"
            strokeWidth="5"
            animationDuration="0.75"
            width="100"
            visible={true}
            />
        </LoaderContainer>
    )
}