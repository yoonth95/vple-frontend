import DetailHeader from '../../components/titleHeader/TitleHeader'
import RestaurantCardButton from '../../components/restaurantCardButton/RestaurantCardButton';

import {
    SearchContainer,
    WrapSelection,
    CardContainer,
    UpButton,

} from './ViewAllRestaurantStyle';
import { useCallback, useEffect, useState, useRef } from 'react';


function ViewAllRestaurant() {

    const locationList = [
        { city: '전체', province: ['전체',] },
        { city: '강원', province: ['전체', '강릉시', '동해시', '삼척시', '속초시', '양구군', '양양군', '원주시', '인제군', '춘천시', '평창군', '홍천군',] },
        { city: '광주', province: ['전체', '광산구', '남구', '동구', '북구', '서구',] },
        { city: '경기', province: ['전체', '가평군', '과천시', '광명시', '광주시', '경주시', '고양시', '구리시', '군포시', '김포시', '남양주시','부천시', '성남시', '수원시', '시흥시', '안산시', '안양시', '양주시', '양평군', '여주시', '오산시', '용인시', '이천시', '의왕시', '의정부시', '파주시', '평택시', '하남시', '화성시',]},
        { city: '경남', province: ['전체', '', '', ]},
        { city: '경북', province: ['전체', '', '', ]},
        { city: '대구', province: ['전체', '남구', '달서구', '달성군', '동구', '북구', '수성구', '중구', ] },
        { city: '대전', province: ['전체', '대덕구', '동구', '서구', '유성구', '중구',] },
        { city: '부산', province: ['전체', '강서구', '금정구', '기장군', '남구', '동래구', '부산진구', '북구', '사하구', '서구', '수영구', '연제구', '영도구', '중구', '해운대구',] },
        { city: '서울', province: ['전체', '강남구', '강동구', '강북구', '강서구', '관악구', '광진구', '구로구', '금천구', '노원구', '도봉구', '동대문구', '동작구',] },
        { city: '세종', province: ['전체', '', '', ]},
        { city: '울산', province: ['전체', '', '', ]},
        { city: '인천', province: ['전체', '', '', ]},
        { city: '전남', province: ['전체', '', '', ]},
        { city: '전북', province: ['전체', '', '', ]},
        { city: '제주', province: ['전체', '', '', ]},
        { city: '충남', province: ['전체', '공주시', '논산지', '서산시', '아산시', '천안시', '태안군', '홍성군',] },
        { city: '충북', province: ['전체', '단양군', '영동군', '음성군', '제천시', '청주시', '충주시',] },
    ]
    const [provinceList, setProvinceList] = useState(['전체']);
    const [isChange, setIsChange] = useState(false);
    // const [selectedCity, setSelectedCity] = useState('전체');
    let selectedCity = '전체';
    let selectedProvince = '전체';
    // const [selectedProvince, setSelectedProvince] = useState('전체');
    // const getList = async () => {
    //     setIsChange(true);
    //     var index = locationList.findIndex((prop) => {
    //         if (prop.city == document.getElementById('selected_city').value) return true
    //     })
    //     setProvinceList(locationList[index].province);
    // }


    const [items, setItems] = useState([]);
    const [target, setTarget] = useState(null);
    let page = 0;

    const fetchData = async () => {

        var index = locationList.findIndex((prop) => {
            if (prop.city == document.getElementById('selected_city').value) return true;
        })
        setProvinceList(locationList[index].province);

        if(document.getElementById('selected_city').value !== selectedCity || 
            document.getElementById('selected_province').value !== selectedProvince) {

            selectedCity = document.getElementById('selected_city').value;
            selectedProvince = document.getElementById('selected_province').value;
            
            setIsChange(true);
            setItems([]);
            setIsChange(false);
        }

        const response = await fetch(`http://ec2-3-35-56-252.ap-northeast-2.compute.amazonaws.com:8080/api/recommand/restaurant/search?district=${document.getElementById('selected_city').value}&city=${document.getElementById('selected_province').value}&page=${page}`);

        const data = await response.json();
        setItems((prev) => prev.concat(data.content));
        page++;
    };


    useEffect(() => {
        let observer;
        if (target) {
            const onIntersect = async ([entry], observer) => {
                if (entry.isIntersecting) {
                    observer.unobserve(entry.target);
                    await fetchData();
                    observer.observe(entry.target);
                }
            };
            observer = new IntersectionObserver(onIntersect, { threshold: 1 });
            observer.observe(target);
        }
        return () => observer && observer.disconnect();
    }, [target]);

    const scrollToUp = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }


    return (
        <>
            <DetailHeader title="추천 식당 전체 보기" />

            <SearchContainer>
                <WrapSelection>
                    <select className='select-box' id="selected_city" onChange={fetchData}>
                        {locationList.map((region) => {
                            return <option className='option'>{region.city}</option>
                        })}
                    </select>
                    <select className='select-box' id="selected_province" onChange={fetchData}>
                        {provinceList.map((location) => {
                            return <option className='option'>{location}</option>
                        })}
                    </select>
                </WrapSelection>
            </SearchContainer>

            <CardContainer className="card-container">
                {items.map(restaurant => (
                    <div>
                        <RestaurantCardButton
                            id={restaurant.id}
                            title={restaurant.name}
                            image={restaurant.image}
                        />
                    </div>
                ))}
                <div ref={setTarget} />
            </CardContainer>

            <UpButton onClick={scrollToUp} />
        </>
    );
}

export default ViewAllRestaurant
