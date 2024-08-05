import { Route, Routes } from "react-router-dom";

import Produtos from "./pages/produtos";
import CartItem from "./pages/carrinho";

const MainRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="/carrinho" element={<CartItem />} />
        </Routes>
    )
}

export default MainRoutes
