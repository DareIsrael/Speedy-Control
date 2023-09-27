import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './scss/App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Blank from './pages/Blank'
import Dashboard from './pages/Dashboard'
import MainLayout from './layout/MainLayout'
// import QuickOffer from './pages/QuickOffer'
import QuickOfferList from './pages/QuickOfferList'
import TruckList from './pages/TruckList'
import AirList from './pages/AirList'
import OceanList from './pages/OceanList'
import CourierList from './pages/CourierList'
import Post from './pages/Post'

import CustomersList from './pages/CustomersList'




function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="quickofferlist" element={<QuickOfferList />} />
                     <Route path="trucklist" element={<TruckList />} />
                     <Route path="airlist" element={<AirList />} />
                     <Route path="oceanlist" element={<OceanList />} />
                     <Route path="courierlist" element={<CourierList />} />
                     <Route path="post" element={<Post />} />
                    <Route path="customerslist" element={<CustomersList />} />   
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
