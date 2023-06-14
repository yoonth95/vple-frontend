import DetailHeader from '../../components/titleHeader/TitleHeader'
import DetailSearchBar from '../../components/searchBar/DetailSearchBar'
import CardButton from '../../components/guideCardButton/GuideCardButton';
import { useLocation, useNavigate } from 'react-router-dom';
import {useState} from 'react';

import {
    SearchContainer,
    WrapSelection,
    CardContainer,
    WrapCards,
    WrapCard,

} from './ViewAllGuideStyle';

import planDefaultImg from '../../asset/planDefault.png';

function ViewAllGuide() {

    const location = useLocation();
    const recommandGuideList = location.state.recommandGuideList;
    const token = location.state.token;

    const locationList = [
        { city: '전체', province: ['전체',] },
        { city: '강원', province: ['전체', '강릉시', '동해시', '삼척시', '속초시', '양구군', '양양군', '원주시', '인제군', '춘천시', '평창군', '홍천군',] },
        { city: '광주', province: ['전체', '광산구', '남구', '동구', '북구', '서구',] },
        { city: '경기', province: ['전체', '가평군', '과천시', '광명시', '광주시', '경주시', '고양시', '구리시', '군포시', '김포시', '남양주시', '부천시', '성남시', '수원시', '시흥시', '안산시', '안양시', '양주시', '양평군', '여주시', '오산시', '용인시', '이천시', '의왕시', '의정부시', '파주시', '평택시', '하남시', '화성시',] },
        { city: '경남', province: ['전체', '김해시', '거제시', '창원시', '거제시', '거창군', '함안군', '사천시', '양산시', '진주시', '통영시', '남해군', '거창군',] },
        {
            city: '경북', province: ['전체', '구미시', '경산시', '청도군',
                '경주시', '포항시', '상주시', '문경시', '안동시', '영주시', '영천시', '칠곡군', '청도군',]
        },
        { city: '대구', province: ['전체', '남구', '달서구', '달성군', '동구', '북구', '수성구', '중구',] },
        { city: '대전', province: ['전체', '대덕구', '동구', '서구', '유성구', '중구',] },
        { city: '부산', province: ['전체', '강서구', '금정구', '기장군', '남구', '동래구', '부산진구', '북구', '사하구', '서구', '수영구', '연제구', '영도구', '중구', '해운대구',] },
        { city: '서울', province: ['전체', '강남구', '강동구', '강북구', '강서구', '관악구', '광진구', '구로구', '금천구', '노원구', '도봉구', '동대문구', '동작구',] },
        { city: '세종', province: ['전체', '고운서길', '나성로', '대평로', '보듬3로', '보람동로', '새롬로', '새롬중앙로', '시청대로', '절재로', '조원읍', '한누리대로',] },
        { city: '울산', province: ['전체', '남구', '동구', '북구', '울주군', '중구',] },
        { city: '인천', province: ['전체', '강화군', '계양구', '남동구', '동구', '미추홀구', '부평구', '서구', '연수구', '중구',] },
        { city: '전남', province: ['전체', '강진군', '광양시', '곡성군', '구례군', '나주시', '담양군', '목포시', '순천시', '여수시', '영광군', '장흥군',] },
        { city: '전북', province: ['전체', '김제시', '군산시', '남원시', '무주군', '부안군', '완주군', '익산시', '전주시', '정읍시',] },
        { city: '제주', province: ['전체', '서귀포시', '제주시',] },
        { city: '충남', province: ['전체', '공주시', '논산지', '서산시', '아산시', '천안시', '태안군', '홍성군',] },
        { city: '충북', province: ['전체', '단양군', '영동군', '음성군', '제천시', '청주시', '충주시',] },
    ]
    const [provinceList, setProvinceList] = useState(['전체']);
    let [selectedCity, setSelectedCity] = useState('전체');
    let [selectedProvince, setSelectedProvince] = useState('전체');

    const getList = () => {
        var index = locationList.findIndex((prop) => {
            if (prop.city == document.getElementById('selected_city').value) return true;
        })
        setProvinceList(locationList[index].province);

        setSelectedCity(document.getElementById('selected_city').value);
        setSelectedProvince(document.getElementById('selected_province').value);
    }

    const navigate = useNavigate();
    const routerGuideDetail = (id) => {
        navigate('/guide/detail', {
            state: {
                id: id,
                token: token,
                title: '추천 가이드',
            }
        })
        window.scrollTo(0, 0)
    }

    return (
        <>
            <DetailHeader title="추천 가이드 전체 보기" />

            <SearchContainer>
                <WrapSelection>
                    <select 
                        className='select-box' 
                        id="selected_city" 
                        onChange={getList}>
                        {locationList.map((region) => {
                            return <option className='option'>{region.city}</option>
                        })}
                    </select>
                    <select 
                        className='select-box' 
                        id="selected_province" 
                        onChange={getList}>
                        {provinceList.map((location) => {
                            return <option className='option'>{location}</option>
                        })}
                    </select>
                </WrapSelection>
            </SearchContainer>

            <CardContainer>
                <WrapCards>
                    {
                        recommandGuideList.content.map((card) => {
                            return (
                                <WrapCard onClick={()=>routerGuideDetail(card.id)}>
                                    <img className='img-photo' src={card.image === null ? planDefaultImg : card.image}/>
                                    <div className='div-content'>
                                        <span className='plan-title'>{card.title}</span>
                                    </div>
                                </WrapCard>
                            )
                        })
                    }
                </WrapCards>
            </CardContainer>
        </>
    );
}

export default ViewAllGuide
