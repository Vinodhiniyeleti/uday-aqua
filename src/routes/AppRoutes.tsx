import {Routes,Route} from "react-router-dom";
import Home from "../components/userflow/Home/Home";
import Layout from "../components/userflow/Shared/Layout";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes;