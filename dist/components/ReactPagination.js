var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import times from 'lodash.times';
import classNames from 'classnames';

import './ReactPagination.css';

var ReactPagination = function (_React$Component) {
  _inherits(ReactPagination, _React$Component);

  function ReactPagination(props) {
    _classCallCheck(this, ReactPagination);

    var _this = _possibleConstructorReturn(this, (ReactPagination.__proto__ || Object.getPrototypeOf(ReactPagination)).call(this, props));

    var currentScreenNumber = 1;
    var totalScreensNumber = props.totalScreensNumber,
        numberOfPagesPerScreen = props.numberOfPagesPerScreen,
        currentActiveIndex = props.currentActiveIndex;

    for (var i = 1; i <= totalScreensNumber; i += 1) {
      if (i * numberOfPagesPerScreen >= currentActiveIndex) {
        currentScreenNumber = i;
        break;
      }
    }
    _this.state = {
      currentScreenNumber: currentScreenNumber
    };
    return _this;
  }

  _createClass(ReactPagination, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          currentActiveIndex = _props.currentActiveIndex,
          children = _props.children,
          numberOfPagesPerScreen = _props.numberOfPagesPerScreen,
          totalScreensNumber = _props.totalScreensNumber,
          totalNumberOfPages = _props.totalNumberOfPages,
          onPageButtonClick = _props.onPageButtonClick;
      var currentScreenNumber = this.state.currentScreenNumber;

      var offset = (currentScreenNumber - 1) * numberOfPagesPerScreen;
      var currentNumberOfScreens = totalNumberOfPages - numberOfPagesPerScreen * currentScreenNumber;
      currentNumberOfScreens = numberOfPagesPerScreen < currentNumberOfScreens ? numberOfPagesPerScreen : currentNumberOfScreens;
      currentNumberOfScreens = currentNumberOfScreens <= 0 ? numberOfPagesPerScreen : currentNumberOfScreens;
      return React.createElement(
        'div',
        { className: 'pagination-continer' },
        children,
        React.createElement(
          'div',
          { className: 'buttons-container' },
          React.createElement(
            'div',
            null,
            currentScreenNumber !== 1 && React.createElement(
              'button',
              { icon: true, className: 'previous-btn', onClick: function onClick() {
                  return _this2.setState({ currentScreenNumber: _this2.state.currentScreenNumber - 1 });
                } },
              ' Previous '
            ),
            times(currentNumberOfScreens, function (idx) {
              return React.createElement(
                'button',
                {
                  key: idx,
                  onClick: function onClick() {
                    onPageButtonClick(idx + 1 + offset);
                  },
                  className: classNames({ active: currentActiveIndex === idx + 1 + offset })
                },
                idx + 1 + offset
              );
            }),
            currentScreenNumber < totalScreensNumber && React.createElement(
              'button',
              { icon: true, className: 'next-btn', onClick: function onClick() {
                  return _this2.setState({ currentScreenNumber: _this2.state.currentScreenNumber + 1 });
                } },
              ' Next '
            )
          )
        )
      );
    }
  }]);

  return ReactPagination;
}(React.Component);

export default ReactPagination;