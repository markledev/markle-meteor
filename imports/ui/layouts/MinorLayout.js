import React from 'react';

class MinorLayout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="text-center animated fadeInDown" style={{backgroundColor:'#f3f3f4'}}>
				{ this.props.main }
			</div>
			);
	}
}

export default MinorLayout;
