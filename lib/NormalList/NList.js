'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./index.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by khongyan on 2017/3/31.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var NList = function (_React$Component) {
    _inherits(NList, _React$Component);

    function NList(props) {
        _classCallCheck(this, NList);

        return _possibleConstructorReturn(this, _React$Component.call(this, props));
    }

    NList.prototype.render = function render() {
        var _props = this.props,
            value = _props.value,
            onSelectedChange = _props.onSelectedChange,
            children = _props.children,
            className = _props.className,
            other = _objectWithoutProperties(_props, ['value', 'onSelectedChange', 'children', 'className']);

        var cn = (0, _classnames2.default)('lm-ui-cells', className);

        return _react2.default.createElement(
            'div',
            _extends({}, other, { className: cn }),
            children
        );
    };

    return NList;
}(_react2.default.Component);

NList.propTypes = {
    onSelectedChange: _react2.default.PropTypes.func,
    value: _react2.default.PropTypes.string
};

NList.defaultProps = {
    onSelectedChange: function onSelectedChange() {}
};

exports.default = NList;
module.exports = exports['default'];