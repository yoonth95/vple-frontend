import { useState, } from 'react';
import DetailHeader from '../../components/titleHeader/TitleHeader';

import {
  WrapButton,
} from './CartStyle';

function Cart(props) {

  const [planActive, setPlanActive] = useState(true);
  
  return (
    <>
      <DetailHeader title="저장 목록" />

      <WrapButton>
        <div 
          className={planActive ? "active" : "inactive"}
          onClick={()=>setPlanActive(true)}        
          > 플랜 </div>
        <div 
          className={planActive ? "inactive" : "active"}
          onClick={()=>setPlanActive(false)}      
          > 식당 </div>

        {planActive ? 
          <></> 
          : <></> }
          
      </WrapButton>
    </>
  );
}

export default Cart;