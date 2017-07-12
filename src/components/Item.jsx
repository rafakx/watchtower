import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Item extends PureComponent {

	static propTypes = {
		task: PropTypes.string,
		title: PropTypes.string
	}

  render() {
		const {
			task, 
			title
		} = this.props;
    
		return (
			<div className='item'>
				<span>{`#${task}`}</span>
				<p>{title}</p>
			</div>
    );
  }
};