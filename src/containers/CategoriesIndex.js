import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Link } from 'react-router';
import { CategoriesList } from '../components/posts/CategoriesList';
import { SearchInput } from '../components/shared/SearchInput';
import { categoriesActions, categoriesSelectors } from '../store/categories/index';

@connect(
    (state) => {
        return {
            params: categoriesSelectors.getCategories(state),
            categories: categoriesSelectors.getCategories(state),
        };
    }
)
export class CategoriesIndex extends React.Component {
    static contextTypes = {
        router: React.PropTypes.object,
        store: React.PropTypes.object,
    };

    constructor(props, context) {
        super(props, context);

        this.deleteCategory = this.deleteCategory.bind(this);
        this.handleSearch = this.handleSearch.bind(this, 'title_like');
    }

    componentDidMount() {
        this.getCategories({});
    }

    getCategories(category) {
        this.context.store.dispatch(categoriesActions.getCategories(category));
    }

    deleteCategory(category) {
        this.context.store.dispatch(categoriesActions.deleteCategory(category));
    }

    handleSearch(field, value) {
        this.getCategories({q: value})
    }

    render() {
        const {
            params,
            categories,
        } = this.props;


        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <SearchInput
                            value={params.q}
                            onSearch={this.handleSearch}
                            placeholder="Description search ..."
                        />
                    </div>
                    <div className="col-md-6 text-right">
                        <Link to="/categories/new" className="btn btn-primary">New Category</Link>
                    </div>
                </div>
                {categories.length > 0 &&
                <CategoriesList categories={categories} onDelete={this.deleteCategory}/>}
            </div>
        );
    }
}
