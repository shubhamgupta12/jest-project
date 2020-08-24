import React, { Component } from 'react';
import Header from './component/header';
import Headline from './component/headline';
import SharedButton from './component/button';
import ListItem from './component/listItem';
import { connect } from 'react-redux';
import { fetchPostsData } from './actions';
import './app.scss';

const initialState = {
  hideButton: false
};

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      ...initialState
    }
    this.fetch = this.fetch.bind(this);
  }

  fetch(){
    this.props.fetchPostsData();
    this.updatesState();
  }

  updatesState() {
    const { hideButton } = this.state;
    this.setState({
      hideButton: !hideButton
    });
  }

  returnValue(number) {
    return number + 1;
  }

  render() {
    const { posts } = this.props;
    const { hideButton } = this.state;

    const buttonProps = {
      buttonText: 'Get posts',
      emitEvent: this.fetch
    }

    return (
      <div className="App" data-test="appComponent">
        <Header />
        <section className="main">
          <Headline header="Posts" desc="Click the button to get posts" />
          
          {!hideButton &&
            <SharedButton {...buttonProps} />
          }
          
          {posts.length > 0 &&
            <div>
              {posts.map((post, index) => {
                const { title, body } = post;
                const listItem = {
                  title,
                  desc: body
                };
                return (
                  <ListItem key={index} {...listItem} />
                )
              })}
            </div>
          }
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, {fetchPostsData})(App);
