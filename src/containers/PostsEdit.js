import React from 'react';
import Textarea from 'react-textarea-autosize';
import { postsActions, postsSelectors } from '../store/posts/index';
import { connect } from 'react-redux';
import { isEqual } from 'lodash';
import 'react-date-picker/index.css'
import { DateField, Calendar } from 'react-date-picker'

import RaisedButton from 'material-ui/RaisedButton';


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
        authors: this.props.params.authors,
        title: this.props.params.title,

        date: this.props.params.date,
      post: {authors: '', title: '',date:'' }
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

   onChange (field, dateString){
    console.log(dateString)
       const post = Object.assign({}, this.state.post, {[field]: dateString});
       this.setState(Object.assign({}, this.state, {post}));
}

  render() {

      // let date = '2017-04-24'
  console.log((this.props.params.postId))
    return (
      <form onSubmit={this.handleSubmit.bind(this)} noValidate>
        <div className="form-group">
          <label className="label-control">Author</label>
          <input
              type="text"
              className="form-control"
              value={this.state.post.authors}
              onChange={this.handleChange.bind(this, 'authors')} />
        </div>
        <div className="form-group">
          <label className="label-control">Title</label>
          <input
            type="text"
            className="form-control"
            value={this.state.post.title}
            onChange={this.handleChange.bind(this, 'title')} />
        </div>
        <Calendar
            dateFormat="YYYY-MM-DD"
            date={this.state.post.date}
            onChange={this.onChange.bind(this, 'date')}
        />
        <br/>
        <br/>
        <RaisedButton type="submit" label="Post" primary={true}  />

      </form>
    );
  }
}
