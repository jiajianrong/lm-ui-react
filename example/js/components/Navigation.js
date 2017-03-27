import React from 'react';
import { Link } from 'react-router';

export default class Navigation extends React.Component {

	render () {

		return (

			<div>

				<div className="topBanner">lm-ui-react 导航页</div>

				<ul>

					<li><Link to='/UseAlert' query={{ name: '弹出框' }} className="list-item" >弹出框</Link></li>

					<li><Link to='/UseAlert' className="list-item" >弹出框</Link></li>

					<li><Link to='/UseAlert' className="list-item">弹出框</Link></li>

					<li><Link to='/UseAlert' className="list-item">弹出框</Link></li>

				</ul>

			</div>

		)

	}

}
