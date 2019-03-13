import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import Header from './components/Header';
import Post from './components/Post';

import './assets/scss/style.scss';
import Author from './models/Author';
import PostModel from './models/Post';

class App extends Component {
  state = {
    posts: [
      new PostModel({
        id: '3',
        author: new Author({
          name: 'Jessie B. Cawley',
          avatar: '24',
        }),
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis ligula metus. Duis feugiat dictum justo, quis dictum est sollicitudin commodo. Vivamus hendrerit leo ac nunc aliquam, et imperdiet risus consequat.',
        createdAt: new Date('2019-03-12 21:27:00'),
      }),
      new PostModel({
        id: '2',
        author: new Author({
          name: 'Jeannie T. Platt',
          avatar: '9',
        }),
        content:
          'Sed lacus lectus, hendrerit sit amet sagittis vel, faucibus ut ex. Suspendisse suscipit enim vel metus mattis tristique. Suspendisse convallis maximus massa ac pulvinar. Duis nibh elit, tincidunt ut dolor a, blandit luctus eros. Sed ante nisl, convallis vitae cursus vitae, egestas ut ex.',
        createdAt: new Date('2019-03-12 21:21:00'),
      }),
      new PostModel({
        id: '1',
        author: new Author({
          name: 'Michael C. Healey',
          avatar: '8',
        }),
        content:
          'Nam blandit tellus a lorem vulputate blandit. Morbi mauris erat, scelerisque in mi nec, placerat porttitor mi. Pellentesque ultricies aliquet urna, at egestas arcu dictum nec.',
        createdAt: new Date('2019-03-12 20:15:15'),
      }),
    ],
  };

  renderPostFeed = () => {
    const { posts } = this.state;
    const items = posts.map((post) => {
      const { id } = post;
      return <Post key={id} post={post} />;
    });
    return items;
  };

  render() {
    return (
      <Fragment>
        <Header />
        <div className="post-entries">{this.renderPostFeed()}</div>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
