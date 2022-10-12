import PropTypes from 'prop-types';
import css from './Button.module.css'

export const Button = ({ loadMoreImages }) => {
    return (
        <button className={css.Button} onClick={loadMoreImages} type="button" >Load more</button>
    )
}

Button.protoTypes = {
    loadMoreImages: PropTypes.func,
};