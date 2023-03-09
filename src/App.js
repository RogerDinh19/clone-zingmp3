import React ,{useEffect} from "react";
import { Home ,Login, Public, Persional} from './pages/public';
import path from "./ultis/path";
import { Routes,Route } from "react-router-dom";
import * as actions from "../src/redux/action";
import { useDispatch } from "react-redux";



function App() {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(actions.getHome())
	}, [])
	

	return (
		<div>
			<Routes>
				<Route path={path.PUBLIC} element={<Public/>}>
					<Route path={path.HOME} element={<Home/>} />
					<Route path={path.LOGIN} element={<Login/>} />
					<Route path={path.MY_MUSIC} element={<Persional/>} />				
					<Route path={path.STAR} element={<Home/>} />

				</Route>
			</Routes>
		</div>
	);
}

export default App;
