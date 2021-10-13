import React, {useState} from 'react';
import View from './View';
const Adminlist = () => {
	const [count, setCount] = useState(0);
	const [data, setData] = useState(0);

	return <div>
		<p>Hello admin</p>{count}
		<p>Number increment {data}</p>{count}
		<button onClick={ () => setCount(count + 1)}>click</button>
		<button onClick={ () =>setData(data + 1)}>onclick increment</button>
		<View data={data} />
	</div>
}
export default Adminlist;