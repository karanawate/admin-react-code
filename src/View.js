import React,{memo} from 'react';
import { useHistory, useLocation } from 'react-router';


const View = (props) => {
	const location = useLocation();
	const history = useHistory();
	console.log(props.data);

	return <div>
		<div>
	    	<button class="btn btn-primary" onClick={history.goBack}>Go back</button>
		</div>		
		<div>
			<button type="button" onClick={() => history.push('/')} class="btn btn-primary">
				Create Session <span class="badge badge-light">9</span>
			</button>
		</div>
	</div>
}
export default memo(View);