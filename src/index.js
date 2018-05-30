import React from 'react';
import ReactDOM from 'react-dom';
import { ReactPagination  } from './lib';
import registerServiceWorker from './registerServiceWorker';
import round from 'lodash.round';

import './index.css';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      id: 1,
    }
  }
  render() {
    const totalItems = 500;
    const numberOfItemsPerPage = 10;
    const numberOfPagesPerScreen = 10;
    const totalNumberOfPages = round(totalItems / numberOfItemsPerPage);
    const totalScreensNumber = round(totalNumberOfPages / numberOfPagesPerScreen);
    return (
      <ReactPagination
        totalScreensNumber={totalScreensNumber}
        totalNumberOfPages={totalNumberOfPages}
        numberOfPagesPerScreen={numberOfPagesPerScreen}
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
