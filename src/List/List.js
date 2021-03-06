/**
 * Created by khongyan on 2017/3/31.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './index.scss'

const List = ({
                  value, // SelectableListHOC
                  onSelectedChange, // SelectableListHOC
                  initValue, // SelectableListHOC

                  children,
                  className,
                  style
              }) => {

    const cn = classnames('lm-ui-list', className)

    return (
        <div style={style} className={cn}>
            {children}
        </div>
    )
}

List.propTypes = {
    onSelectedChange: PropTypes.func,
    value: PropTypes.string
};

List.defaultProps = {
    onSelectedChange: () => {
    }
};

export default List
