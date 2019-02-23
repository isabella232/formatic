// # assoc-item component

/*
Render an object item.
*/

'use strict';

import createReactClass from 'create-react-class';
import cx from 'classnames';

import HelperMixin from '@/src/mixins/helper';

/** @jsx jsx */
import jsx from '@/src/jsx';

export default createReactClass({
  displayName: 'AssocListItem',

  mixins: [HelperMixin],

  onChangeKey: function(newKey) {
    this.props.onChangeKey(this.props.index, newKey);
  },

  render: function() {
    return this.renderWithConfig();
  },

  renderDefault: function() {
    const config = this.props.config;
    const field = this.props.field;

    const assocListItemKey = config.createElement('assoc-list-item-key', {
      parentTypeName: this.props.parentTypeName,
      field,
      onChange: this.onChangeKey,
      onAction: this.onBubbleAction,
      displayKey: this.props.displayKey,
      isDuplicateKey: this.props.isDuplicateKey,
    });

    const assocListItemValue = config.createElement('assoc-list-item-value', {
      parentTypeName: this.props.parentTypeName,
      field,
      onChange: this.props.onChange,
      onAction: this.onBubbleAction,
      index: this.props.index,
    });

    const assocListItemControl = config.createElement(
      'assoc-list-item-control',
      {
        parentTypeName: this.props.parentTypeName,
        field,
        onRemove: this.props.onRemove,
        index: this.props.index,
      }
    );

    return (
      <div
        renderWith={this.renderWith('ListItem')}
        className={cx(this.props.classes)}
      >
        {assocListItemKey}
        {assocListItemValue}
        {assocListItemControl}
      </div>
    );
  },
});