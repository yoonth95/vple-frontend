import React from 'react';
import {errorSelector, useRecoilValue} from "recoil";
import PloggingJoin from "./ploggingJoin/PloggingJoin";
import PloggingCheck from "./ploggingCheck/PloggingCheck";


const TabContent = (props) => {

    if(props.tab === 0) {
        return <PloggingJoin />
    } else if(props.tab === 1) {
        return <PloggingCheck/>
    } else {
        return null
    }
}


export default  TabContent;