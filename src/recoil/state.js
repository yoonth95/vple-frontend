import axios from 'axios';
import {atom, selector, } from 'recoil';

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

// export const planDataState = atom({
//     key: 'planDataState',
//     default: {
//         "title": "",
//         "startDate": "",
//         "endDate": "",
//         "district": "",
//         "city": "",
//         "peopleNum": 1,
//         "likesCount": 0,
//         "opened": false,
//         "planTravels": [],

//         "days": 1,
//     },
// })

export const locationListState = atom({
    key: "locationListState",
    default: [
        { district: '전체', city: ['전체',] },
        { district: '강원', city: ['전체', '강릉시', '동해시', '삼척시', '속초시', '양구군', '양양군', '원주시', '인제군', '춘천시', '평창군', '홍천군',] },
        { district: '광주', city: ['전체', '광산구', '남구', '동구', '북구', '서구',] },
        { district: '경기', city: ['전체', '가평군', '과천시', '광명시', '광주시', '경주시', '고양시', '구리시', '군포시', '김포시', '남양주시', '부천시', '성남시', '수원시', '시흥시', '안산시', '안양시', '양주시', '양평군', '여주시', '오산시', '용인시', '이천시', '의왕시', '의정부시', '파주시', '평택시', '하남시', '화성시',] },
        { district: '경남', city: ['전체', '김해시', '거제시', '창원시', '거제시', '거창군', '함안군', '사천시', '양산시', '진주시', '통영시', '남해군', '거창군',] },
        {
            district: '경북', city: ['전체', '구미시', '경산시', '청도군',
                '경주시', '포항시', '상주시', '문경시', '안동시', '영주시', '영천시', '칠곡군', '청도군',]
        },
        { district: '대구', city: ['전체', '남구', '달서구', '달성군', '동구', '북구', '수성구', '중구',] },
        { district: '대전', city: ['전체', '대덕구', '동구', '서구', '유성구', '중구',] },
        { district: '부산', city: ['전체', '강서구', '금정구', '기장군', '남구', '동래구', '부산진구', '북구', '사하구', '서구', '수영구', '연제구', '영도구', '중구', '해운대구',] },
        { district: '서울', city: ['전체', '강남구', '강동구', '강북구', '강서구', '관악구', '광진구', '구로구', '금천구', '노원구', '도봉구', '동대문구', '동작구',] },
        { district: '세종', city: ['전체', '고운서길', '나성로', '대평로', '보듬3로', '보람동로', '새롬로', '새롬중앙로', '시청대로', '절재로', '조원읍', '한누리대로',] },
        { district: '울산', city: ['전체', '남구', '동구', '북구', '울주군', '중구',] },
        { district: '인천', city: ['전체', '강화군', '계양구', '남동구', '동구', '미추홀구', '부평구', '서구', '연수구', '중구',] },
        { district: '전남', city: ['전체', '강진군', '광양시', '곡성군', '구례군', '나주시', '담양군', '목포시', '순천시', '여수시', '영광군', '장흥군',] },
        { district: '전북', city: ['전체', '김제시', '군산시', '남원시', '무주군', '부안군', '완주군', '익산시', '전주시', '정읍시',] },
        { district: '제주', city: ['전체', '서귀포시', '제주시',] },
        { district: '충남', city: ['전체', '공주시', '논산지', '서산시', '아산시', '천안시', '태안군', '홍성군',] },
        { district: '충북', city: ['전체', '단양군', '영동군', '음성군', '제천시', '청주시', '충주시',] },
    ]
})
// const [provinceList, setProvinceList] = useState(['전체']);

export const dayPageContentState = atom({
    key: 'dayPageContent',
    default: [],
})

//추천식당
export const getAllRecommandRestaurantUrl = selector({
    key: 'getAllRecommandRestaurantUrl',
    get: async ({get}) => {
        const res = await axios.get('http://ec2-3-35-56-252.ap-northeast-2.compute.amazonaws.com:8080/api/recommand/restaurant?page=0');
        return res.data
    },
})

export const viewAllRestaurantListState = atom({
    key: 'viewAllRestaurantList',
    default: []
})
export const viewAllRestaurantPageState = atom({
    key: 'viewAllRestaurantPage',
    default: 0
})

export const cartPlanBtnState = atom({
    key: 'cartPlanBtnState',
    default: true
})






