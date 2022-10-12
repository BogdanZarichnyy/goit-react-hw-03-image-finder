import PropTypes from 'prop-types';
import css from './Searchbar.module.css'
import { SearchIcon } from './svg';

export const Searchbar = ({ handleSubmit }) => {
    return (
        <header className={css.searchbar}>
        
            <form className={css.SearchForm} onSubmit={handleSubmit}>
                <button className={css.SearchFormButton} type="submit" >
                    <SearchIcon />
                </button>

                <input
                    className={css.SearchFormInput}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    name="searchQuery"
                />

            </form>
        </header>
    )
}

Searchbar.protoTypes = {
    handleSubmit: PropTypes.func,
};