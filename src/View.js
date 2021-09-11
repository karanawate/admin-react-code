import React from 'react';
import { useHistory, useLocation } from 'react-router';

const View = () => {
	const location = useLocation();
	const history = useHistory();
	
	return <div>
		<p1>welcome view</p1>
		<button class="btn btn-primary" onClick={history.goBack}>Go back</button>
	</div>
}
export default View;