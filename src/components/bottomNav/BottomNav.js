import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { Container, NavContainer} from "./BottomNavStyle";

import homeBtn from "../../asset/navBar/home.png";
import keepBtn from "../../asset/navBar/keep.png";
import planBtn from "../../asset/navBar/plan.png";
import userBtn from "../../asset/navBar/user.png";

const BottomNav = (push) => {

    const[active, setActive] = useState(push);

    // console.log("push", push);
    // console.log("active", active);

    return (
        {active } && <>
            <Container>
                <NavContainer >
                    <div>
                        <Link to="/" className="nav-item" onClick={()=> setActive(1)}>
                            <img src={homeBtn} 
                            className={active == 1 ? "nav-button-active" : "nav-button"} />
                            <span>홈화면</span>
                        </Link>
                    </div>
                    <div>
                        <Link to="/plan" className="nav-item" onClick={()=> setActive(2)}>
                            <img src={planBtn} 
                            className={active == 2 ? "nav-button-active" : "nav-button"} />
                            <span>플랜 세우기</span>
                        </Link>
                    </div>
                    <div>
                        <Link to="/cart" className="nav-item" onClick={()=> setActive(3)}>
                            <img src={keepBtn} 
                            className={active == 3 ? "nav-button-active" : "nav-button"} />
                            <span>저장</span>
                        </Link>
                    </div>
                    <div>
                        <Link to="/myprofile" className="nav-item" onClick={()=> setActive(4)}>
                            <img src={userBtn} 
                            className={active == 4 ? "nav-button-active" : "nav-button"} />
                            <span>마이페이지</span>
                        </Link>
                    </div>
                </NavContainer>
            </Container>
        </>
    )
}

export default BottomNav