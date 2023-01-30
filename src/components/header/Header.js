import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, HeaderIcons} from "./HeaderStyle";
import Logo from '../../asset/logo.png';


const Header = () => {

    let navigate = useNavigate();
    const onClickBackHome = () => {
        navigate('/')
        window.scrollTo(0,0)
    };

    return (
        <>
            <Container>
                <HeaderIcons className='headerIcons'>
                    <h1 className='logoWrap' onClick={onClickBackHome}>
                        <img src={Logo} className='logoIcon'/>
                    </h1>
                </HeaderIcons>
            </Container>
        </>
    )
}

export default Header