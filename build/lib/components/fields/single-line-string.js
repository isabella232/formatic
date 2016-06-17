// # single-line-string component

/*
Render a single line text input.
*/

'use strict';

var React = require('react');
var R = React.DOM;
var cx = require('classnames');

module.exports = React.createClass({

  displayName: 'SingleLineString',

  mixins: [require('../../mixins/field')],

  onChange: function onChange(event) {
    this.onChangeValue(event.target.value);
  },

  render: function render() {
    return this.renderWithConfig();
  },

  renderDefault: function renderDefault() {

    var config = this.props.config;
    var field = this.props.field;

    var readOnly = config.fieldIsReadOnly(field);
    var tabIndex = readOnly ? -1 : this.props.tabIndex || 0;

    return config.createElement('field', {
      config: config, field: field, plain: this.props.plain
    }, R.input({
      tabIndex: tabIndex,
      type: 'text',
      value: this.props.field.value,
      className: cx(this.props.classes),
      onChange: this.onChange,
      onFocus: this.onFocusAction,
      onBlur: this.onBlurAction,
      autoComplete: field.autoComplete,
      autoFocus: field.autoFocus,
      placeholder: field.placeholder,
      readOnly: readOnly
    }));
  }
});