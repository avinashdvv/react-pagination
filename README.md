# Project Title

React Pagination

### Documentation
Props

 Prop | Type
---------|---------
currentActiveIndex | Number
children | children app
numberOfPagesPerScreen| Number, How many pages numbers should user see per screen?
totalNumberOfPages | Number, Total number of pages
onPageButtonClick| Function, callback function for onClick pagination button to get the current page number
prefix | String or React Component, if you want to add anything before pagination buttons
suffix| String or React Component, if you want to add anything after pagination buttons
icons | Object with keys `left, leftMost, right, rightMost `  if you want to change the icons of a arrow

```
Icons Default Values
icons: {
  left: <span>&larr;</span>,
  leftMost: <span>&#8647;</span>,
  right: <span>&rarr;</span>,
  rightMost: <span>&#8649;</span>,
}
```


### Installing

npm install pagination-with-react

```
import React from 'react';
import ReactDOM from 'react-dom';
import { ReactPagination  } from 'pagination-with-react';

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

```