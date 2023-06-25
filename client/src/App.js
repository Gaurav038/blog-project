import { Route, Routes, Navigate } from "react-router-dom";
import AllUsers from "./components/AllUsers";
import AddUser from "./components/Profile/UpdatePost";
import Signup from "./components/Singup";
import Login from "./components/Login";
import PostAdd from "./components/post/PostAdd";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<AllUsers />} />}
			{user && <Route path="/update/:id" exact element={<AddUser />} />}
			{user && <Route path="/addPost" exact element={<PostAdd />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/signup" />} />
			<Route path="/update/:id" element={<Navigate replace to="/signup" />} />
		</Routes>
	);
}

export default App;
