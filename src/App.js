import React from 'react';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PlanMap from './pages/planMap/PlanMap'
import Login from "./pages/login/Login";
import ViewAllGuide from "./pages/viewAllGuide/ViewAllGuide";
import ViewAllRestaurant from "./pages/viewAllRestaurant/ViewAllRestaurant";
import ViewAllMyyPlan from './pages/viewAllMyPlan/ViewAllMyPlan';
import Plan from "./pages/plan/Plan";
import Home from "./pages/home/Home";
import GuideDetail from './pages/guideDetail/GuideDetail';
import RestaurantDetail from './pages/restaurantDetail/RestaurantDetail';
import MyProfile from './pages/myProfile/MyProfile';
import MyProfileEdit from './pages/myProfileEdit/MyProfileEdit';
import BottomNav from './components/bottomNav/BottomNav';

import KakaoAuthHandle from './pages/login/KakaoAuthHandle';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path='/login' element={<Login/>}/>
                    <Route
                        exact
                        path='/user/kakao/callback'
                        element={<KakaoAuthHandle/>}
                    />
                    <Route path='/' element={<Home/>}/>
                    <Route path='/plan' element={<Plan/>}/>
                    <Route path='/plan/map' element={<PlanMap/>}/>
                    <Route path='/view/guide' element={<ViewAllGuide/>}/>
                    <Route path='/view/restaurant' element={<ViewAllRestaurant/>}/>
                    <Route path='/view/myplan' element={<ViewAllMyyPlan/>}/>
                    <Route path='/guide/detail' element={<GuideDetail/>} />
                    <Route path='/restaurant/detail' element={<RestaurantDetail/>} />
                    <Route path='/myProfile' element={<MyProfile/>} />
                    <Route path='/myProfile/edit' element={<MyProfileEdit/> }/>
                </Routes>
                {/* <BottomNav/> */}
            </Router>
        </div>
    );
}

export default App;
