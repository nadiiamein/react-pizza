import React from 'react';
import classNames from 'classnames';

function Button(props) {
        return ( 
        <button 
        className=
        {classNames(
            'button',
             {'button--outline' : this.props.outline,}
             )}>
            {this.props.children}
            </button>
            );
    }


export default Button;