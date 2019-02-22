/** @jsx jsx */
import * as React from 'react';
import { jsx, css } from '@emotion/core';

import { dashify } from '../utils';
import { getMediaQueriesForWidths } from '../styles/Media';

const styles = {
  wrapper: css({
    display: 'flex',
    ...getMediaQueriesForWidths(
      {
        flexDirection: 'column-reverse',
      },
      {
        flexDirection: 'row',
      }
    ),
  }),
  toc: css({
    ...getMediaQueriesForWidths(
      {},
      {
        top: 0,
        position: 'sticky',
        height: '90vh',
        width: '25%',
        overflowY: 'scroll',
      }
    ),
  }),
  content: css({
    ...getMediaQueriesForWidths(
      {},
      {
        width: '75%',
      }
    ),
  }),
};

const Sections = props => (
  <div css={styles.wrapper}>
    <div css={styles.content}>
      {React.Children.map(props.children, child => (
        <>
          <a name={dashify(child.props.title)} />
          {child}
        </>
      ))}
    </div>
    <div css={styles.toc}>
      <ul>
        {React.Children.map(props.children, child => (
          <li>
            <a href={`#${dashify(child.props.title)}`}>{child.props.title}</a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Sections;
