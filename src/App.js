import React ,{useEffect} from "react";
import { Home ,Login, Public, Persional, Album} from './pages/public';
import path from "./ultis/path";
import { Routes,Route } from "react-router-dom";
import * as actions from "../src/redux/action";
import { useDispatch } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';



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
					<Route path={path.ALBUM__TITLE__PID} element={<Album/>} />
					<Route path={path.PLAYLIST__TITLE__PID} element={<Album/>} />

					<Route path={path.STAR} element={<Home/>} />

				</Route>
			</Routes>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
		</div>
		
	);
}

export default App;
