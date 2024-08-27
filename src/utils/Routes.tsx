import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Cart from "../components/Cart/Cart";


const Routers: React.FC = () => {
    return <BrowserRouter>

    
    <Routes>
        <Route path={'home'} Component={Home}/>
        <Route path={'cart'} Component={Cart}/>
    </Routes>


    </BrowserRouter>
}


export default Routers