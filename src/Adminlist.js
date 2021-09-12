import React, {useState} from 'react';
import View from './View';
const Adminlist = () => {
	const [count, setCount] = useState(0);
	const [data, setData] = useState(100);

	return <div>
		<p>Hello admin</p>{count}
		<button onClick={ () => setCount(count + 1)}>click</button>
		<View data={data} />
	</div>
}
export default Adminlist;