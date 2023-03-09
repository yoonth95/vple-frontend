import DetailHeader from '../../components/titleHeader/TitleHeader'
import DetailSearchBar from '../../components/searchBar/DetailSearchBar'
import CardButton from '../../components/guideCardButton/GuideCardButton';
import RestaurantCardButton from '../../components/restaurantCardButton/RestaurantCardButton';
import { useRecoilState, useRecoilValue } from 'recoil';
import { getAllRecommandRestaurantUrl } from '../../recoil/state';

import {
    SearchContainer,
    WrapSelection,
    CardContainer,
    UpButton,

} from './ViewAllRestaurantStyle';
import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useState, useRef } from 'react';
import axios from 'axios';

import IconUp from '../../asset/restaurant/IconUp.png';

function ViewAllRestaurant() {

    const cards = [
        '베지테리언 타코',
        '베지테리언 타코',
        '베지테리언 타코',
        '베지테리언 타코',
        '베지테리언 타코',
        '베지테리언 타코',
        '베지테리언 타코',
        '베지테리언 타코',
        '베지테리언 타코',
        '베지테리언 타코',
        '베지테리언 타코',
        '베지테리언 타코',
        '베지테리언 타코',
        '베지테리언 타코',
    ];

    const provinceList = ['서울', '경기도', '인천', '충청북도', '충청남도', '전라북도', '전라남도,', '강원도', '경상북도', '경상남도'];
    const locationList = ['김포시', '의정부시', '인천광역시', '부산', '목포시', '강릉시', '대구광역시'];

    const [items, setItems] = useState([]);
    const [target, setTarget] = useState(null);
    let page = 1;
    
    const fetchData = async() => {

        const response = await fetch(`http://ec2-3-35-56-252.ap-northeast-2.compute.amazonaws.com:8080/api/recommand/restaurant?page=${page}`);
        const data = await response.json();
        setItems((prev) => prev.concat(data.content));

        page++;
    };

    useEffect(() => {
        let observer;
        if(target) {
            const onIntersect = async ([entry], observer) => {
                if(entry.isIntersecting) {
                    observer.unobserve(entry.target);
                    await fetchData();
                    observer.observe(entry.target);
                }
            };
            observer = new IntersectionObserver(onIntersect, {threshold: 1});
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
            <DetailHeader title="추천 식당 전체 보기"/>

            <SearchContainer>
                <WrapSelection>
                    <select className='select-box'>
                        {provinceList.map((province, index) => {
                            return <option className='option'>{province}</option>
                        })}
                    </select>
                    <select className='select-box'>
                        {locationList.map((city, index) => {
                            return <option className='option'>{city}</option>
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
                <div ref={setTarget}/>
            </CardContainer>

            <UpButton onClick={scrollToUp} />
        </>
    );
}

export default ViewAllRestaurant
