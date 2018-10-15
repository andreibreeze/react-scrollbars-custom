"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _getInnerSizes = require("./util/getInnerSizes");

var _LoopController = _interopRequireDefault(require("./util/LoopController"));

var _utilities = require("./util/utilities");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function divRenderer(props) {
  return _react.default.createElement("div", props);
}

var defaultElementsStyles = {
  holder: {
    position: "relative",
    display: "flex"
  },
  wrapper: {
    flexGrow: 1
  },
  content: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0
  },
  trackVertical: {
    position: "absolute",
    width: 8,
    height: "calc(100% - 16px)",
    right: 0,
    top: 0,
    margin: "8px 0",
    background: "rgba(0,0,0,.1)",
    borderRadius: 4
  },
  trackHorizontal: {
    position: "absolute",
    height: 8,
    width: "calc(100% - 16px)",
    bottom: 0,
    left: 0,
    margin: "0 8px",
    background: "rgba(0,0,0,.1)",
    borderRadius: 4
  },
  thumbVertical: {
    cursor: "pointer",
    width: "100%",
    borderRadius: 4,
    background: "rgba(0,0,0,.4)"
  },
  thumbHorizontal: {
    cursor: "pointer",
    height: "100%",
    borderRadius: 4,
    background: "rgba(0,0,0,.4)"
  }
};

var Scrollbar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Scrollbar, _React$Component);

  function Scrollbar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Scrollbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Scrollbar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addListeners", function () {
      if (!(0, _utilities.isset)(document) || !_this.content) {
        return _assertThisInitialized(_assertThisInitialized(_this));
      }

      var _assertThisInitialize = _assertThisInitialized(_assertThisInitialized(_this)),
          content = _assertThisInitialize.content,
          trackVertical = _assertThisInitialize.trackVertical,
          trackHorizontal = _assertThisInitialize.trackHorizontal,
          thumbVertical = _assertThisInitialize.thumbVertical,
          thumbHorizontal = _assertThisInitialize.thumbHorizontal;

      var _this$props = _this.props,
          noScroll = _this$props.noScroll,
          noScrollY = _this$props.noScrollY,
          noScrollX = _this$props.noScrollX;

      if (noScroll) {
        _this.removeListeners();

        return _assertThisInitialized(_assertThisInitialized(_this));
      } else {
        content.addEventListener("scroll", _this.handleScrollEvent, {
          passive: true
        });
      }

      if (noScrollY) {
        trackVertical.removeEventListener("mousedown", _this.handleTrackVerticalMousedownEvent);
        thumbVertical.removeEventListener("mousedown", _this.handleThumbVerticalMousedownEvent);
      } else {
        trackVertical.addEventListener("mousedown", _this.handleTrackVerticalMousedownEvent);
        thumbVertical.addEventListener("mousedown", _this.handleThumbVerticalMousedownEvent);
      }

      if (noScrollX) {
        trackHorizontal.removeEventListener("mousedown", _this.handleTrackHorizontalMousedownEvent);
        thumbHorizontal.removeEventListener("mousedown", _this.handleThumbHorizontalMousedownEvent);
      } else {
        trackHorizontal.addEventListener("mousedown", _this.handleTrackHorizontalMousedownEvent);
        thumbHorizontal.addEventListener("mousedown", _this.handleThumbHorizontalMousedownEvent);
      }

      return _assertThisInitialized(_assertThisInitialized(_this));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "removeListeners", function () {
      if (!(0, _utilities.isset)(document) || !_this.content) {
        return _assertThisInitialized(_assertThisInitialized(_this));
      }

      var _assertThisInitialize2 = _assertThisInitialized(_assertThisInitialized(_this)),
          trackVertical = _assertThisInitialize2.trackVertical,
          trackHorizontal = _assertThisInitialize2.trackHorizontal,
          thumbVertical = _assertThisInitialize2.thumbVertical,
          thumbHorizontal = _assertThisInitialize2.thumbHorizontal;

      trackVertical.removeEventListener("mousedown", _this.handleTrackVerticalMousedownEvent);
      trackHorizontal.removeEventListener("mousedown", _this.handleTrackHorizontalMousedownEvent);
      thumbVertical.removeEventListener("mousedown", _this.handleThumbVerticalMousedownEvent);
      thumbHorizontal.removeEventListener("mousedown", _this.handleThumbHorizontalMousedownEvent);
      return _assertThisInitialized(_assertThisInitialized(_this));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scrollDetect", function () {
      if (!_this.scrollDetect.timeout && _this.props.onScrollStart) {
        _this.props.onScrollStart(_assertThisInitialized(_assertThisInitialized(_this)));
      }

      _this.scrollDetect.timeout && clearTimeout(_this.scrollDetect.timeout);
      _this.scrollDetect.timeout = setTimeout(function () {
        if (_this.drag) {
          _this.scrollDetect();

          return;
        }

        _this.scrollDetect.timeout = null;

        if (_this.props.onScrollStop) {
          _this.props.onScrollStop(_assertThisInitialized(_assertThisInitialized(_this)));
        }
      }, _this.props.scrollDetectionThreshold);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleScrollEvent", function () {
      _this.scrollDetect();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleTrackVerticalMousedownEvent", function (e) {
      if (e.which !== 1) {
        return;
      }

      e.preventDefault();
      var offset = Math.abs(e.target.getBoundingClientRect().top - e.clientY) - _this.thumbVertical.clientHeight / 2;
      _this.content.scrollTop = _this.computeScrollTopForThumbOffset(Math.max(offset, 0));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleTrackHorizontalMousedownEvent", function (e) {
      if (e.which !== 1) {
        return;
      }

      e.preventDefault();
      var offset = Math.abs(e.target.getBoundingClientRect().left - e.clientX) - _this.thumbHorizontal.clientWidth / 2;
      _this.content.scrollLeft = _this.computeScrollLeftForThumbOffset(Math.max(offset, 0));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleThumbVerticalMousedownEvent", function (e) {
      if (e.which !== 1) {
        return;
      }

      e.preventDefault();
      e.stopImmediatePropagation();

      _this.handleDragStart();

      var target = e.target,
          clientY = e.clientY;
      _this.dragPrevPageY = target.clientHeight - (clientY - target.getBoundingClientRect().top);

      _this.thumbVertical.classList.add("dragging");
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleThumbHorizontalMousedownEvent", function (e) {
      if (e.which !== 1) {
        return;
      }

      e.preventDefault();
      e.stopImmediatePropagation();

      _this.handleDragStart();

      var target = e.target,
          clientX = e.clientX;
      _this.dragPrevPageX = target.clientWidth - (clientX - target.getBoundingClientRect().left);

      _this.thumbHorizontal.classList.add("dragging");
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleDragStart", function () {
      _this.drag = true;

      _this.scrollDetect();

      _this.bodySelectPrevValue = document.body.style.userSelect;
      _this.documentOnselectstartPrevValue = document.onselectstart;
      document.addEventListener("mousemove", _this.handleDragEvent);
      document.addEventListener("mouseup", _this.handleDragEnd);
      document.body.style.userSelect = "none";

      document.onselectstart = function () {
        return false;
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleDragEnd", function () {
      _this.drag = false;
      _this.dragPrevPageX = undefined;
      _this.dragPrevPageY = undefined;
      document.removeEventListener("mousemove", _this.handleDragEvent);
      document.removeEventListener("mouseup", _this.handleDragEnd);
      document.body.style.userSelect = _this.bodySelectPrevValue;
      document.onselectstart = _this.documentOnselectstartPrevValue;

      _this.thumbHorizontal.classList.remove("dragging");

      _this.thumbVertical.classList.remove("dragging");
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleDragEvent", function (e) {
      if (!_this.drag) {
        return;
      }

      _this.scrollDetect();

      if (_this.dragPrevPageY !== undefined) {
        var offset = -_this.trackVertical.getBoundingClientRect().top + e.clientY - (_this.thumbVertical.clientHeight - _this.dragPrevPageY);
        _this.content.scrollTop = _this.computeScrollTopForThumbOffset(offset);
      }

      if (_this.dragPrevPageX !== undefined) {
        var _offset = -_this.trackHorizontal.getBoundingClientRect().left + e.clientX - (_this.thumbHorizontal.clientWidth - _this.dragPrevPageX);

        _this.content.scrollLeft = _this.computeScrollLeftForThumbOffset(_offset);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "computeThumbVerticalHeight", function (trackHeight) {
      var height = Math.ceil(_this.content.clientHeight / _this.content.scrollHeight * trackHeight);
      return trackHeight === height ? 0 : Math.max(height, _this.props.minimalThumbsSize);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "computeThumbHorizontalWidth", function (trackWidth) {
      var width = Math.ceil(_this.content.clientWidth / _this.content.scrollWidth * trackWidth);
      return trackWidth === width ? 0 : Math.max(width, _this.props.minimalThumbsSize);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "computeScrollTopForThumbOffset", function (offset) {
      var trackVerticalInnerHeight = (0, _getInnerSizes.getInnerHeight)(_this.trackVertical);
      return offset / (trackVerticalInnerHeight - _this.thumbVertical.clientHeight) * (_this.content.scrollHeight - _this.content.clientHeight);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "computeScrollLeftForThumbOffset", function (offset) {
      var trackHorizontalInnerWidth = (0, _getInnerSizes.getInnerWidth)(_this.trackHorizontal);
      return offset / (trackHorizontalInnerWidth - _this.thumbHorizontal.clientWidth) * (_this.content.scrollWidth - _this.content.clientWidth);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "update", function () {
      var forced = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      // No need to update scrollbars if values had not changed
      if (!forced && (_this.previousScrollValues || false)) {
        if (_this.previousScrollValues.scrollTop === _this.content.scrollTop && _this.previousScrollValues.scrollLeft === _this.content.scrollLeft && _this.previousScrollValues.scrollHeight === _this.content.scrollHeight && _this.previousScrollValues.scrollWidth === _this.content.scrollWidth && _this.previousScrollValues.clientHeight === _this.content.clientHeight && _this.previousScrollValues.clientWidth === _this.content.clientWidth) {
          return _assertThisInitialized(_assertThisInitialized(_this));
        }
      }

      var verticalScrollPossible = _this.content.scrollHeight > _this.content.clientHeight && !_this.props.noScroll && !_this.props.noScrollY,
          horizontalScrollPossible = _this.content.scrollWidth > _this.content.clientWidth && !_this.props.noScroll && !_this.props.noScrollX;
      _this.trackVertical.style.display = verticalScrollPossible || _this.props.permanentScrollbars || _this.props.permanentScrollbarY ? null : "none";
      _this.trackVertical.visibility = verticalScrollPossible || _this.props.permanentScrollbars || _this.props.permanentScrollbarY ? null : "hidden";
      _this.trackHorizontal.style.display = horizontalScrollPossible || _this.props.permanentScrollbars || _this.props.permanentScrollbarX ? null : "none";
      _this.trackHorizontal.visibility = horizontalScrollPossible || _this.props.permanentScrollbars || _this.props.permanentScrollbarX ? null : "hidden";

      if (verticalScrollPossible) {
        var trackVerticalInnerHeight = (0, _getInnerSizes.getInnerHeight)(_this.trackVertical);

        var thumbVerticalHeight = _this.computeThumbVerticalHeight(trackVerticalInnerHeight);

        var thumbVerticalOffset = thumbVerticalHeight ? _this.content.scrollTop / (_this.content.scrollHeight - _this.content.clientHeight) * (trackVerticalInnerHeight - thumbVerticalHeight) : 0;
        _this.thumbVertical.style.transform = "translateY(".concat(thumbVerticalOffset, "px)");
        _this.thumbVertical.style.height = thumbVerticalHeight + "px";
      } else {
        _this.thumbVertical.style.transform = "translateY(0px)";
        _this.thumbVertical.style.height = "0px";
      }

      if (horizontalScrollPossible) {
        var trackHorizontalInnerWidth = (0, _getInnerSizes.getInnerWidth)(_this.trackHorizontal);

        var thumbHorizontalWidth = _this.computeThumbHorizontalWidth(trackHorizontalInnerWidth);

        var thumbHorizontalOffset = thumbHorizontalWidth ? _this.content.scrollLeft / (_this.content.scrollWidth - _this.content.clientWidth) * (trackHorizontalInnerWidth - thumbHorizontalWidth) : 0;
        _this.thumbHorizontal.style.transform = "translateX(".concat(thumbHorizontalOffset, "px)");
        _this.thumbHorizontal.style.width = thumbHorizontalWidth + "px";
      } else {
        _this.thumbHorizontal.style.transform = "translateX(0px)";
        _this.thumbHorizontal.style.width = "0px";
      }

      var currentScrollValues = {
        scrollTop: _this.content.scrollTop,
        scrollLeft: _this.content.scrollLeft,
        scrollHeight: _this.content.scrollHeight,
        scrollWidth: _this.content.scrollWidth,
        clientHeight: _this.content.clientHeight,
        clientWidth: _this.content.clientWidth
      };
      (_this.previousScrollValues || false) && _this.props.onScroll && _this.props.onScroll(currentScrollValues, _assertThisInitialized(_assertThisInitialized(_this)));
      _this.previousScrollValues = currentScrollValues;
      return _assertThisInitialized(_assertThisInitialized(_this));
    });

    return _this;
  }

  _createClass(Scrollbar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _LoopController.default.registerScrollbar(this);

      this.addListeners();
      this.update();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevProps.noScroll !== this.props.noScroll || prevProps.noScrollY !== this.props.noScrollY || prevProps.noScrollX !== this.props.noScrollX || prevProps.permanentScrollbars !== this.props.permanentScrollbars || prevProps.permanentScrollbarX !== this.props.permanentScrollbarX || prevProps.permanentScrollbarY !== this.props.permanentScrollbarY) {
        this.update(true);
      }

      this.addListeners();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _LoopController.default.unregisterScrollbar(this);

      this.handleDragEnd();
      this.removeListeners();

      if (this.scrollDetect.timeout) {
        clearTimeout(this.scrollDetect.timeout);
        this.scrollDetect.timeout = null;

        if (this.props.onScrollStop) {
          this.props.onScrollStop(this);
        }
      }
    }
    /**
     * Return the vertical scroll position
     *
     * @return {number}
     */

  }, {
    key: "scrollToTop",

    /**
     * Scrol to the top border
     *
     * @return {Scrollbar}
     */
    value: function scrollToTop() {
      if (!this.content) {
        return this;
      }

      this.content.scrollTop = 0;
      return this;
    }
    /**
     * Scroll to the bottom border
     *
     * @return {Scrollbar}
     */

  }, {
    key: "scrollToBottom",
    value: function scrollToBottom() {
      if (!this.content) {
        return this;
      }

      this.content.scrollTop = this.content.scrollHeight;
      return this;
    }
    /**
     * Scrolls to the left border
     *
     * @return {Scrollbar}
     */

  }, {
    key: "scrollToLeft",
    value: function scrollToLeft() {
      if (!this.content) {
        return this;
      }

      this.content.scrollLeft = 0;
      return this;
    }
    /**
     * Scroll to the right border
     *
     * @return {Scrollbar}
     */

  }, {
    key: "scrollToRight",
    value: function scrollToRight() {
      if (!this.content) {
        return this;
      }

      this.content.scrollLeft = this.content.scrollWidth;
      return this;
    }
    /**
     * @return {Scrollbar}
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          minimalThumbsSize = _this$props2.minimalThumbsSize,
          fallbackScrollbarWidth = _this$props2.fallbackScrollbarWidth,
          scrollDetectionThreshold = _this$props2.scrollDetectionThreshold,
          defaultStyles = _this$props2.defaultStyles,
          noScroll = _this$props2.noScroll,
          noScrollX = _this$props2.noScrollX,
          noScrollY = _this$props2.noScrollY,
          permanentScrollbars = _this$props2.permanentScrollbars,
          permanentScrollbarX = _this$props2.permanentScrollbarX,
          permanentScrollbarY = _this$props2.permanentScrollbarY,
          tagName = _this$props2.tagName,
          children = _this$props2.children,
          style = _this$props2.style,
          className = _this$props2.className,
          wrapperStyle = _this$props2.wrapperStyle,
          contentStyle = _this$props2.contentStyle,
          trackVerticalStyle = _this$props2.trackVerticalStyle,
          trackHorizontalStyle = _this$props2.trackHorizontalStyle,
          thumbVerticalStyle = _this$props2.thumbVerticalStyle,
          thumbHorizontalStyle = _this$props2.thumbHorizontalStyle,
          wrapperClassName = _this$props2.wrapperClassName,
          contentClassName = _this$props2.contentClassName,
          trackVerticalClassName = _this$props2.trackVerticalClassName,
          trackHorizontalClassName = _this$props2.trackHorizontalClassName,
          thumbVerticalClassName = _this$props2.thumbVerticalClassName,
          thumbHorizontalClassName = _this$props2.thumbHorizontalClassName,
          onScroll = _this$props2.onScroll,
          onScrollStart = _this$props2.onScrollStart,
          onScrollStop = _this$props2.onScrollStop,
          renderWrapper = _this$props2.renderWrapper,
          renderContent = _this$props2.renderContent,
          renderTrackVertical = _this$props2.renderTrackVertical,
          renderTrackHorizontal = _this$props2.renderTrackHorizontal,
          renderThumbVertical = _this$props2.renderThumbVertical,
          renderThumbHorizontal = _this$props2.renderThumbHorizontal,
          props = _objectWithoutProperties(_this$props2, ["minimalThumbsSize", "fallbackScrollbarWidth", "scrollDetectionThreshold", "defaultStyles", "noScroll", "noScrollX", "noScrollY", "permanentScrollbars", "permanentScrollbarX", "permanentScrollbarY", "tagName", "children", "style", "className", "wrapperStyle", "contentStyle", "trackVerticalStyle", "trackHorizontalStyle", "thumbVerticalStyle", "thumbHorizontalStyle", "wrapperClassName", "contentClassName", "trackVerticalClassName", "trackHorizontalClassName", "thumbVerticalClassName", "thumbHorizontalClassName", "onScroll", "onScrollStart", "onScrollStop", "renderWrapper", "renderContent", "renderTrackVertical", "renderTrackHorizontal", "renderThumbVertical", "renderThumbHorizontal"]);

      var browserScrollbarWidth = (0, _utilities.getScrollbarWidth)();
      var holderClassNames = ["ScrollbarsCustom-holder"].concat(className || false ? typeof className === "string" ? [className] : className : []).join(" "),
          wrapperClassNames = ["ScrollbarsCustom-wrapper"].concat(wrapperClassName || false ? typeof wrapperClassName === "string" ? [wrapperClassName] : wrapperClassName : []).join(" "),
          contentClassNames = ["ScrollbarsCustom-content"].concat(contentClassName || false ? typeof contentClassName === "string" ? [contentClassName] : contentClassName : []).join(" "),
          trackVerticalClassNames = ["ScrollbarsCustom-track", "ScrollbarsCustom-trackVertical"].concat(trackVerticalClassName || false ? typeof trackVerticalClassName === "string" ? [trackVerticalClassName] : trackVerticalClassName : []).join(" "),
          trackHorizontalClassNames = ["ScrollbarsCustom-track", "ScrollbarsCustom-trackHorizontal"].concat(thumbVerticalClassName || false ? typeof thumbVerticalClassName === "string" ? [thumbVerticalClassName] : thumbVerticalClassName : []).join(" "),
          thumbVerticalClassNames = ["ScrollbarsCustom-thumb", "ScrollbarsCustom-thumbVertical"].concat(trackHorizontalClassName || false ? typeof trackHorizontalClassName === "string" ? [trackHorizontalClassName] : trackHorizontalClassName : []).join(" "),
          thumbHorizontalClassNames = ["ScrollbarsCustom-thumb", "ScrollbarsCustom-thumbHorizontal"].concat(thumbHorizontalClassName || false ? typeof thumbHorizontalClassName === "string" ? [thumbHorizontalClassName] : thumbHorizontalClassName : []).join(" ");

      var holderStyles = _objectSpread({}, style, defaultStyles && defaultElementsStyles.holder),
          wrapperStyles = _objectSpread({}, wrapperStyle, defaultStyles && defaultElementsStyles.wrapper, {
        position: "relative",
        overflow: "hidden"
      }),
          contentStyles = _objectSpread({}, contentStyle, defaultElementsStyles.content, {
        overflowX: "scroll",
        overflowY: "scroll",
        marginRight: -(browserScrollbarWidth || fallbackScrollbarWidth),
        marginBottom: -(browserScrollbarWidth || fallbackScrollbarWidth),
        paddingRight: browserScrollbarWidth ? null : fallbackScrollbarWidth,
        paddingBottom: browserScrollbarWidth ? null : fallbackScrollbarWidth
      }),
          trackVerticalStyles = _objectSpread({}, trackVerticalStyle, defaultStyles && defaultElementsStyles.trackVertical),
          trackHorizontalStyles = _objectSpread({}, trackHorizontalStyle, defaultStyles && defaultElementsStyles.trackHorizontal),
          thumbVerticalStyles = _objectSpread({}, thumbVerticalStyle, defaultStyles && defaultElementsStyles.thumbVertical),
          thumbHorizontalStyles = _objectSpread({}, thumbHorizontalStyle, defaultStyles && defaultElementsStyles.thumbHorizontal);

      if (noScroll || noScrollX && noScrollY) {
        contentStyles.marginRight = contentStyles.marginBottom = null;
        !browserScrollbarWidth && (contentStyles.paddingRight = contentStyles.paddingBottom = null);
        contentStyles.overflowX = contentStyles.overflowY = "hidden";
        trackVerticalStyles.display = trackHorizontalStyles.display = "none";
      } else if (noScrollY) {
        contentStyles.marginRight = null;
        !browserScrollbarWidth && (contentStyles.paddingRight = null);
        contentStyles.overflowX = "scroll";
        contentStyles.overflowY = "hidden";
        trackVerticalStyles.display = "none";
      } else if (noScrollX) {
        contentStyles.marginBottom = null;
        !browserScrollbarWidth && (contentStyles.paddingBottom = null);
        contentStyles.overflowY = "scroll";
        contentStyles.overflowX = "hidden";
        trackHorizontalStyles.display = "none";
      }

      if (permanentScrollbars || permanentScrollbarY) {
        trackVerticalStyles.display = null;

        if (noScroll || !scrollY) {
          thumbVerticalStyles.display = "none";
        }
      }

      if (permanentScrollbars || permanentScrollbarX) {
        trackHorizontalStyles.display = null;

        if (noScroll || !scrollX) {
          thumbHorizontalStyles.display = "none";
        }
      }

      return _react.default.createElement(tagName, _objectSpread({}, props, {
        className: holderClassNames,
        style: holderStyles,
        ref: function ref(_ref) {
          _this2.holder = _ref;
        }
      }), [(renderWrapper || divRenderer)({
        key: "wrapper",
        ref: function ref(_ref2) {
          _this2.wrapper = _ref2;
        },
        className: wrapperClassNames,
        style: wrapperStyles,
        children: (renderContent || divRenderer)({
          key: "content",
          ref: function ref(_ref3) {
            _this2.content = _ref3;
          },
          className: contentClassNames,
          style: contentStyles,
          children: children
        })
      }), (renderTrackVertical || divRenderer)({
        key: "trackVertical",
        ref: function ref(_ref4) {
          _this2.trackVertical = _ref4;
        },
        className: trackVerticalClassNames,
        style: trackVerticalStyles,
        children: (renderThumbVertical || divRenderer)({
          key: "thumbVertical",
          ref: function ref(_ref5) {
            _this2.thumbVertical = _ref5;
          },
          className: thumbVerticalClassNames,
          style: thumbVerticalStyles
        })
      }), (renderTrackHorizontal || divRenderer)({
        key: "trackHorizontal",
        ref: function ref(_ref6) {
          _this2.trackHorizontal = _ref6;
        },
        className: trackHorizontalClassNames,
        style: trackHorizontalStyles,
        children: (renderThumbHorizontal || divRenderer)({
          key: "thumbHorizontal",
          ref: function ref(_ref7) {
            _this2.thumbHorizontal = _ref7;
          },
          className: thumbHorizontalClassNames,
          style: thumbHorizontalStyles
        })
      })]);
    }
  }, {
    key: "scrollTop",
    get: function get() {
      if (!this.content) {
        return 0;
      }

      return this.content.scrollTop;
    }
    /**
     *
     * Set the vertical scroll to given amount of pixels
     *
     * @param top {number} Pixels amount
     */
    ,
    set: function set(top) {
      if (!this.content) {
        return;
      }

      this.content.scrollTop = top;
      this.update();
    }
    /**
     * Return the horizontal scroll position
     *
     * @return {number}
     */

  }, {
    key: "scrollLeft",
    get: function get() {
      if (!this.content) {
        return 0;
      }

      return this.content.scrollLeft;
    }
    /**
     * Set the horizontal scroll to given amount of pixels
     *
     * @param left {number} Pixels amount
     */
    ,
    set: function set(left) {
      if (!this.content) {
        return;
      }

      this.content.scrollLeft = left;
      this.update();
    }
    /**
     * @return {number}
     */

  }, {
    key: "scrollHeight",
    get: function get() {
      if (!this.content) {
        return 0;
      }

      return this.content.scrollHeight;
    }
    /**
     * @return {number}
     */

  }, {
    key: "scrollWidth",
    get: function get() {
      if (!this.content) {
        return 0;
      }

      return this.content.scrollWidth;
    }
    /**
     * @return {number}
     */

  }, {
    key: "clientHeight",
    get: function get() {
      if (!this.content) {
        return 0;
      }

      return this.content.clientHeight;
    }
    /**
     * @return {number}
     */

  }, {
    key: "clientWidth",
    get: function get() {
      if (!this.content) {
        return 0;
      }

      return this.content.clientWidth;
    }
  }]);

  return Scrollbar;
}(_react.default.Component);

exports.default = Scrollbar;

_defineProperty(Scrollbar, "propTypes", {
  minimalThumbsSize: _propTypes.default.number,
  fallbackScrollbarWidth: _propTypes.default.number,
  defaultStyles: _propTypes.default.bool,
  permanentScrollbars: _propTypes.default.bool,
  permanentScrollbarX: _propTypes.default.bool,
  permanentScrollbarY: _propTypes.default.bool,
  noScroll: _propTypes.default.bool,
  noScrollX: _propTypes.default.bool,
  noScrollY: _propTypes.default.bool,
  tagName: _propTypes.default.string,
  className: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.array]),
  wrapperClassName: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.array]),
  contentClassName: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.array]),
  trackVerticalClassName: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.array]),
  trackHorizontalClassName: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.array]),
  thumbVerticalClassName: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.array]),
  thumbHorizontalClassName: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.array]),
  style: _propTypes.default.object,
  wrapperStyle: _propTypes.default.object,
  contentStyle: _propTypes.default.object,
  trackVerticalStyle: _propTypes.default.object,
  trackHorizontalStyle: _propTypes.default.object,
  thumbVerticalStyle: _propTypes.default.object,
  thumbHorizontalStyle: _propTypes.default.object,
  onScroll: _propTypes.default.func,
  onScrollStart: _propTypes.default.func,
  onScrollStop: _propTypes.default.func,
  scrollDetectionThreshold: _propTypes.default.number,
  renderWrapper: _propTypes.default.func,
  renderContent: _propTypes.default.func,
  renderTrackVertical: _propTypes.default.func,
  renderTrackHorizontal: _propTypes.default.func,
  renderThumbVertical: _propTypes.default.func,
  renderThumbHorizontal: _propTypes.default.func
});

_defineProperty(Scrollbar, "defaultProps", {
  minimalThumbsSize: 30,
  fallbackScrollbarWidth: 20,
  defaultStyles: true,
  permanentScrollbarX: false,
  permanentScrollbars: false,
  permanentScrollbarY: false,
  noScroll: false,
  noScrollX: false,
  noScrollY: false,
  tagName: "div",
  scrollDetectionThreshold: 100
});