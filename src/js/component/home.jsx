import React from "react"
import Counter from './SecondsCounter'

//create your first component
const Home = (props) => {
	return (<>
	<Counter counter1={props.counter1} counter2={props.counter2} counter3={props.counter3} counter4={props.counter4}counter5={props.counter5} counter6={props.counter6}/>
	</>
	);
};


export default Home;
