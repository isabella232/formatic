// # string component

/*
Render a field that can edit a string value.
*/

'use strict';

import createReactClass from 'create-react-class';
import cx from 'classnames';

import FieldMixin from '@/src/mixins/field';

/** @jsx jsx */
import jsx from '@/src/jsx';

export default createReactClass({
  displayName: 'String',

  mixins: [FieldMixin],

  onChange: function(event) {
    this.onChangeValue(event.target.value);
  },

  render: function() {
    return this.renderWithConfig();
  },

  renderDefault: function() {
    const config = this.props.config;
    const field = this.props.field;

    return config.createElement(
      'field',
      {
        typeName: this.props.typeName || 'String',
        config,
        field,
        plain: this.props.plain,
      },
      <textarea
        renderWith={this.renderWith('TextareaInput')}
        value={field.value}
        className={cx(this.props.classes)}
        rows={field.rows || this.props.rows}
        onChange={this.onChange}
        onFocus={this.onFocusAction}
        onBlur={this.onBlurAction}
        disabled={this.isReadOnly()}
      />
    );
  },
});