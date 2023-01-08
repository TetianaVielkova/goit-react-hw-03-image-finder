import {ButtonLoad, ContainerBtn} from './Button.styled';


import PropTypes  from "prop-types"

export const Button = ({handleLoadMore}) => {
    return (
        <ContainerBtn>
            <ButtonLoad type="button" onClick={handleLoadMore}>
                Load More
            </ButtonLoad>
        </ContainerBtn>
    )
}


Button.propTypes = {
    handleLoadMore: PropTypes.func.isRequired,
}