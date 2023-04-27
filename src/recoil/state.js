import axios from 'axios';
import {atom, selector, useRecoilState,} from 'recoil';

export const headerListState = atom({
    key: 'headerState',
    default: ['홈 화면', '플랜 세우기', '저장', '마이페이지'],
});

export const planIdState = atom({
    key: 'planIdState',
    default: 0,
});

export const planDayState = atom({
    key: 'planDayState',
    default: 1,
})

// export const planDaysState = atom({
//     key: 'planDaysState',
//     default: 1,
// });

//추천식당
export const getAllRecommandRestaurantUrl = selector({
    key: 'getAllRecommandRestaurantUrl',
    get: async ({get}) => {
        const res = await axios.get('http://ec2-3-35-56-252.ap-northeast-2.compute.amazonaws.com:8080/api/recommand/restaurant?page=0');
        return res.data
    },
})



