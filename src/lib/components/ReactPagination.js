import React from 'react';
import times from 'lodash.times';
import classNames from 'classnames';

class ReactPagination extends React.Component {
  constructor(props) {
    super(props);
    let currentScreenNumber = 1;
    const { totalScreensNumber, numberOfPagesPerScreen, currentActiveIndex } = props;
    for (let i = 1; i <= totalScreensNumber; i += 1) {
      if ((i * numberOfPagesPerScreen) >= currentActiveIndex) {
        currentScreenNumber = i;
        break;
      }
    }
    this.state = {
      currentScreenNumber,
    };
  }
  render() {
    const { 
      currentActiveIndex,
      children,
      numberOfPagesPerScreen,
      totalScreensNumber,
      totalNumberOfPages,
      onPageButtonClick,
    } = this.props;
    const { currentScreenNumber } = this.state;
    const offset = (currentScreenNumber - 1) * numberOfPagesPerScreen;
    let currentNumberOfScreens = totalNumberOfPages - (numberOfPagesPerScreen * currentScreenNumber);
    currentNumberOfScreens = numberOfPagesPerScreen < currentNumberOfScreens
      ? numberOfPagesPerScreen
      : currentNumberOfScreens;
    currentNumberOfScreens = currentNumberOfScreens <= 0
      ? numberOfPagesPerScreen
      : currentNumberOfScreens;
    return (
      <div className="pagination-continer">
        {children}
        <div className="buttons-container">
          <div>
            { currentScreenNumber !== 1 && <button className="previous-btn" onClick={() => this.setState({ currentScreenNumber: this.state.currentScreenNumber - 1 })}> Previous </button> }
            {
              times(currentNumberOfScreens, idx => (
                <button
                  key={idx}
                  onClick={() => {
                    onPageButtonClick(idx + 1 + offset);
                  }}
                  className={classNames({ active: (currentActiveIndex === (idx + 1 + offset)) })}
                >
                  {idx + 1 + offset}
                </button>
              ))
            }
            { currentScreenNumber < totalScreensNumber && <button className="next-btn" onClick={() => this.setState({ currentScreenNumber: this.state.currentScreenNumber + 1 })}> Next </button> }
          </div>
        </div>
      </div>
    );
  }
}

export default ReactPagination;
