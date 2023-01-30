import React, {useEffect, useState} from 'react';
import Header from '../../components/header/Header';
import {ContainerMap, InputContainer} from "./PlanMapStyle";
import {Map, MapMarker} from "react-kakao-maps-sdk";


const PlanMap = () => {
    const MainMap = () => {
        const [position, setPosition] = useState();
        const [info, setInfo] = useState()
        const [markers, setMarkers] = useState([])
        const [map, setMap] = useState()

        const {kakao} = window;


        useEffect(() => {
            if (!map) return
            const ps = new kakao.maps.services.Places()

            ps.keywordSearch('구로디지털단지역 할리스', (data, status, _pagination) => {
                if (status === kakao.maps.services.Status.OK) {
                    const bounds = new kakao.maps.LatLngBounds()
                    let markers = []

                    for (let i = 0; i < data.length; i++) {
                        markers.push({
                            position: {
                                lat: data[i].y,
                                lng: data[i].x
                            },
                            content: data[i].place_name,
                        })
                        bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
                    }
                    setMarkers(markers)
                }
            })
        }, [map])

        return (
            <>
                <Header/>
                <ContainerMap>
                    <InputContainer>
                        <input type='text' placeholder='일정에 추가할 장소를 검색하세요' className='search-location'/>
                        {/*{position && <p>{'클릭한 위치의 위도는 ' + position.lat + ' 이고, 경도는 ' + position.lng + ' 입니다'}</p>}*/}
                    </InputContainer>
                    <Map center={{lat: 33.5563, lng: 126.79581}}
                         style={{width: "100%", height: "100vh"}}
                         level={3} // 지도 확대 레벨
                         onCreate={setMap}
                        // onClick={(_t, mouseEvent) => setPosition({
                        //     lat: mouseEvent.latLng.getLat(),
                        //     lng: mouseEvent.latLng.getLng(),
                        // })}
                    >
                        {
                            markers.map((marker) => (
                                <MapMarker
                                    key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
                                    position={marker.position}
                                    onClick={() => setInfo(marker)}
                                >
                                    {info && info.content === marker.content && (
                                        <div style={{color: "#000"}}>{marker.content}</div>
                                    )}
                                </MapMarker>
                            ))
                        }
                        {/*{position && <MapMarker position={position}/>}*/}
                    </Map>
                </ContainerMap>
            </>
        )
    }
    return <MainMap/>
}


export default PlanMap;