import React, {FC} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Homepage from "./pages/Homepage";
import Countries from "./pages/Countries";

interface RouteProps {

}

const AppRoutes: FC<RouteProps> = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/countries" element={<Countries/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;