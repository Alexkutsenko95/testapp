import React from 'react';
import Textarea from 'react-textarea-autosize';
import { categoriesActions, categoriesSelectors } from '../store/categories/index';
import { connect } from 'react-redux';
import { isEqual } from 'lodash';
import 'react-date-picker/index.css'


@connect(
    (state, props) => {
        return {
            category: categoriesSelectors.getCategory(state, props.params.categoryId),
        };
    }
)
export class CategoryEdit extends React.Component {
    static contextTypes = {
        router: React.PropTypes.object,
        store: React.PropTypes.object
    };

    static propTypes = {
        params: React.PropTypes.object,
        category: React.PropTypes.object,
    };

    constructor(props, context) {
        super(props, context);

        this.state = {
            ...this.state,
            id: this.props.params.categoryId,
            name: this.props.params.name,
            category: {title: '', body: ''}

        };
    }

    componentWillReceiveProps(nextProps) {
        if (!isEqual(nextProps.category, this.state.category)) {
            this.setState({...this.state, category: nextProps.category});
        }
    }

    componentDidMount() {
        if (this.state.id) {
            this.context.store.dispatch(categoriesActions.getCategory(this.props.params.categoryId));
        }
    }

    handleChange(field, e) {
        const category = Object.assign({}, this.state.category, {[field]: e.target.value});
        this.setState(Object.assign({}, this.state, {category}));
    }

    handleSubmit() {
        if (this.state.id) {
            this.context.store.dispatch(categoriesActions.updateCategory(this.state.category));
        } else {
            this.context.store.dispatch(categoriesActions.createCategory(this.state.category));
        }
    }

    render() {
        console.log(this.state.id)

        return (
            <form onSubmit={this.handleSubmit.bind(this)} noValidate>
                <div className="form-group">
                    <label className="label-control">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={this.state.name}
                        onChange={this.handleChange.bind(this, 'name')} />
                </div>

                <button type="submit" className="btn btn-default">
                    {this.state.id ? 'Update' : 'Create' } Category
                </button>
            </form>
        );
    }
}
