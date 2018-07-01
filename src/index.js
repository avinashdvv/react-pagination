import React from 'react';
import ReactDOM from 'react-dom';
import { ReactPagination  } from './lib';
import registerServiceWorker from './registerServiceWorker';
import round from 'lodash.round';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      id: 1,
    }
  }
  render() {
    return (
      <ReactPagination
        totalNumberOfPages={50}
        numberOfPagesPerScreen={10}
        onPageButtonClick={(id) => {
          this.setState({
            id,
          })
          console.log(this.state)
        }}
        currentActiveIndex={this.state.id}
      >
        <h1>Children {this.state.id}</h1>
      </ReactPagination>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
