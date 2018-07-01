import React from 'react';
import times from 'lodash.times';
import classNames from 'classnames';

const ReactPagination = props => {
  const {
    currentActiveIndex,
    children,
    numberOfPagesPerScreen,
    totalNumberOfPages,
    onPageButtonClick,
    prefix,
    suffix,
    icons
  } = props;

  if (!totalNumberOfPages || currentActiveIndex > totalNumberOfPages) {
    return React.createElement(
      'div',
      { className: 'center' },
      React.createElement(
        'h4',
        null,
        ' You are in wrong page '
      )
    );
  }

  const minPoint = 1;
  const midPoint = Math.ceil(numberOfPagesPerScreen / 2);
  let buttonsListStartAt = minPoint;
  let buttonsListEndsAt = numberOfPagesPerScreen;
  const lastScreenPagesMinNumber = totalNumberOfPages - numberOfPagesPerScreen;
  const isCurrentNeartoEnd = lastScreenPagesMinNumber < currentActiveIndex < totalNumberOfPages;
  const isCurrentAtMiddle = !(currentActiveIndex <= numberOfPagesPerScreen - midPoint) && !(totalNumberOfPages - midPoint < currentActiveIndex);

  if (isCurrentAtMiddle && midPoint !== currentActiveIndex) {
    // middle
    buttonsListStartAt = currentActiveIndex - midPoint;
    buttonsListEndsAt = currentActiveIndex + midPoint;
  } else if (isCurrentNeartoEnd && totalNumberOfPages - midPoint < currentActiveIndex) {
    // end
    buttonsListStartAt = lastScreenPagesMinNumber;
    buttonsListEndsAt = totalNumberOfPages;
  }
  buttonsListStartAt = buttonsListStartAt < minPoint ? minPoint : buttonsListStartAt;
  buttonsListEndsAt = buttonsListEndsAt > totalNumberOfPages ? totalNumberOfPages : buttonsListEndsAt;
  const ButtonsList = [];
  for (let i = buttonsListStartAt; i <= buttonsListEndsAt; i += 1) {
    const newButton = React.createElement(
      'button',
      {
        onClick: () => {
          onPageButtonClick(i);
        },
        className: classNames({ active: currentActiveIndex === i })
      },
      i
    );
    ButtonsList.push(newButton);
  }
  return React.createElement(
    'div',
    { className: 'pagination-continer' },
    children,
    React.createElement(
      'div',
      { className: 'buttons-container' },
      React.createElement(
        'div',
        { activeIndex: currentActiveIndex, pagination: true },
        prefix,
        currentActiveIndex > midPoint + 1 && React.createElement(
          'button',
          { icon: true, className: 'previous-btn', onClick: () => onPageButtonClick(1) },
          ' ',
          icons.leftMost,
          '  '
        ),
        currentActiveIndex > midPoint + 1 && React.createElement(
          'button',
          { icon: true, className: 'previous-btn', onClick: () => onPageButtonClick(currentActiveIndex - 1) },
          ' ',
          icons.left,
          '  '
        ),
        ButtonsList,
        !(totalNumberOfPages - midPoint < currentActiveIndex) && React.createElement(
          'button',
          { icon: true, className: 'next-btn', onClick: () => onPageButtonClick(currentActiveIndex + 1) },
          ' ',
          icons.right,
          ' '
        ),
        !(totalNumberOfPages - midPoint < currentActiveIndex) && React.createElement(
          'button',
          { icon: true, className: 'next-btn', onClick: () => onPageButtonClick(totalNumberOfPages) },
          '  ',
          icons.rightMost,
          ' '
        ),
        suffix
      )
    )
  );
};
ReactPagination.defaultProps = {
  icons: {
    left: React.createElement(
      'span',
      null,
      '\u2190'
    ),
    leftMost: React.createElement(
      'span',
      null,
      '\u21C7'
    ),
    right: React.createElement(
      'span',
      null,
      '\u2192'
    ),
    rightMost: React.createElement(
      'span',
      null,
      '\u21C9'
    )
  }
};

export default ReactPagination;