import React from 'react';
import times from 'lodash.times';
import classNames from 'classnames';

const ReactPagination = (props) =>{
  const {
    currentActiveIndex,
    children,
    numberOfPagesPerScreen,
    totalNumberOfPages,
    onPageButtonClick,
    prefix,
    suffix,
    icons,
  } = props;

  if (!totalNumberOfPages || currentActiveIndex > totalNumberOfPages) {
    return (
      <div className="center">
        <h4> You are in wrong page </h4>
      </div>
    );
  }

  const minPoint = 1;
  const midPoint = Math.ceil(numberOfPagesPerScreen / 2);
  let buttonsListStartAt = minPoint;
  let buttonsListEndsAt = numberOfPagesPerScreen;
  const lastScreenPagesMinNumber = totalNumberOfPages - numberOfPagesPerScreen;
  const isCurrentNeartoEnd = lastScreenPagesMinNumber < currentActiveIndex < totalNumberOfPages;
  const isCurrentAtMiddle =
  !(currentActiveIndex <= (numberOfPagesPerScreen - midPoint)) &&
  !((totalNumberOfPages - midPoint) < currentActiveIndex);

  if (isCurrentAtMiddle && midPoint !== currentActiveIndex) { // middle
    buttonsListStartAt = currentActiveIndex - midPoint;
    buttonsListEndsAt = currentActiveIndex + midPoint;
  } else if (isCurrentNeartoEnd && ((totalNumberOfPages - midPoint) < currentActiveIndex)) { // end
    buttonsListStartAt = lastScreenPagesMinNumber;
    buttonsListEndsAt = totalNumberOfPages;
  }
  buttonsListStartAt = buttonsListStartAt < minPoint
    ? minPoint
    : buttonsListStartAt;
  buttonsListEndsAt = buttonsListEndsAt > totalNumberOfPages
    ? totalNumberOfPages
    : buttonsListEndsAt;
  const ButtonsList = [];
  for (let i = buttonsListStartAt; i <= buttonsListEndsAt; i += 1) {
    const newButton = (
      <button
        onClick={() => {
          onPageButtonClick(i);
        }}
        className={classNames({ active: (currentActiveIndex === i) })}
      >
        {i}
      </button>
    );
    ButtonsList.push(newButton);
  }
  return (
    <div className="pagination-continer">
      {children}
      <div className="buttons-container">
        <div activeIndex={currentActiveIndex} pagination>
          {prefix}
          { currentActiveIndex > (midPoint + 1) && <button icon className="previous-btn" onClick={() => onPageButtonClick(1)}> {icons.leftMost}  </button> }
          { currentActiveIndex > (midPoint + 1) && <button icon className="previous-btn" onClick={() => onPageButtonClick(currentActiveIndex - 1)}> {icons.left}  </button> }
          {ButtonsList}
          { !((totalNumberOfPages - midPoint) < currentActiveIndex) && <button icon className="next-btn" onClick={() => onPageButtonClick(currentActiveIndex + 1)}> {icons.right} </button> }
          { !((totalNumberOfPages - midPoint) < currentActiveIndex) && <button icon className="next-btn" onClick={() => onPageButtonClick(totalNumberOfPages)}>  {icons.rightMost} </button> }
          {suffix}
        </div>
      </div>
    </div>
  );
}
ReactPagination.defaultProps = {
  icons: {
    left: <span>&larr;</span>,
    leftMost: <span>&#8647;</span>,
    right: <span>&rarr;</span>,
    rightMost: <span>&#8649;</span>,
  }
}

export default ReactPagination;
