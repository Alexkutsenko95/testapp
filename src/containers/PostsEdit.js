import React from 'react';
import Textarea from 'react-textarea-autosize';
import { postsActions, postsSelectors } from '../store/posts/index';
import { connect } from 'react-redux';
import { isEqual } from 'lodash';
import 'react-date-picker/index.css'
import { DateField, Calendar } from 'react-date-picker'
const onChange = (dateString, { dateMoment, timestamp }) => {
    console.log(dateString)
}


@connect(
  (state, props) => {
    return {
      post: postsSelectors.getPost(state, props.params.postId),
    };
  }
)
export class PostsEdit extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object,
    store: React.PropTypes.object
  };

  static propTypes = {
    params: React.PropTypes.object,
    post: React.PropTypes.object,
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      ...this.state,
      postId: this.props.params.postId,
          category_id: this.props.params.category_id,
        amount: this.props.params.amount,

        date: this.props.params.date,
      post: {title: '', body: ''}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(nextProps.post, this.state.post)) {
      this.setState({...this.state, post: nextProps.post});
    }
  }

  componentDidMount() {
    if (this.state.postId) {
      this.context.store.dispatch(postsActions.fetchPost(this.props.params.postId));
    }
  }

  handleChange(field, e) {
    const post = Object.assign({}, this.state.post, {[field]: e.target.value});
    this.setState(Object.assign({}, this.state, {post}));
  }

  handleSubmit() {
    if (this.state.postId) {
      this.context.store.dispatch(postsActions.updatePost(this.state.post));
    } else {
      this.context.store.dispatch(postsActions.createPost(this.state.post));
    }
  }

  render() {

      let date = '2017-04-24'
  console.log((this.props.params.postId))
    return (
      <form onSubmit={this.handleSubmit.bind(this)} noValidate>
        <div className="form-group">
          <label className="label-control">Amount</label>
          <input
              type="text"
              className="form-control"
              value={this.state.post.amount}
              onChange={this.handleChange.bind(this, 'category_id')} />
        </div>
        <div className="form-group">
          <label className="label-control">Description</label>
          <input
            type="text"
            className="form-control"
            value={this.state.post.description}
            onChange={this.handleChange.bind(this, 'title')} />
        </div>
        <Calendar
            dateFormat="YYYY-MM-DD"
            date={date}
            onChange={onChange}
        />
      <div className="form-group">
          <label className="label-control">Category id</label>
          <input
      type="text"
      className="form-control"
      value={this.state.post.category_id}
      onChange={this.handleChange.bind(this, 'category_id')} />
      </div>

        <button type="submit" className="btn btn-default">
          {this.state.postId ? 'Update' : 'Create' } Post
        </button>
      </form>
    );
  }
}
