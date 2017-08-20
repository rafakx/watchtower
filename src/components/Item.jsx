import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';

export default class Item extends PureComponent {
	
  static propTypes = {
		id: PropTypes.string.isRequired,
		title: PropTypes.string,
	}

  render() {
		
    const {
      id, 
      title
    } = this.props;
    
		return (
			<div className='item'>
				<span>{ `#${id}` }</span>
        <p>{ title }</p>
			</div>
    );
  }
}