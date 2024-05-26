# 채식인들을 위한 관광 플랜 서비스, Vple

## 팀원 구성
<div align="center">

<div align="center">

| **박솔미** |
| :------: | 
| [<img src="https://github.com/vple-remake/vple-frontend/assets/69065439/955fba59-371d-4c6b-b1fb-3679439c9ba2" height=150 width=150> <br/> @Parksolmi]([https://github.com/Parksolmi]) |

</div>
</div>
<br>

## 개발 기간
- 2023.01 ~ 2023.07

## 개발 환경
- FRONTEND : React, Javascript, styled-components, Recoil<br>
- APIs : Kakao Map Web Api, Kakao Login Api <br>
- 협업 툴 : Github   <br>

## 주제
- 채식 식당 정보 기반의 관광 플래너 웹 서비스
  
## 요구사항
- 관광지에서 먹을 수 있는 채식 식당 정보를 제공해야 한다.
- 해당 식당의 소개 글, 위치, 영업 시간, 채식 메뉴 정보를 제공해야 한다.
- 관광 플랜을 생성할 수 있도록 지도 기반의 식당 위치를 시각적으로 제공해야 한다.
- 식당 조회 페이지에서 지역별로 식당을 검색할 수 있도록 필터링 기능을 제공 해야 한다.
- 사용자가 지정한 관광 일정을 기반으로 (ex. 2박 3일) 플래너 양식을 제공해야 한다.
- 꼼꼼히 플랜을 세우는 사용자들을 위해 플래너에 시간 설정 기능을 제공해야 한다.
- 플랜을 세울 때에도 식당 검색이 필요하므로 지도에서 검색 기능을 제공해야 한다.
- 더 편리한 플랜 세우기를 위해 다른 사용자의 플랜을 Fork 하여 나의 취향에 맞게 수정할 수 있는 기능을 제공해야 한다.
- 나의 플랜을 다른 사용자가 수정할 수 있도록 할 것인지 비공개/공개 선택 기능을 제공해야 한다.
- 세워둔 플랜을 기록들을 마이페이지에서 조회할 수 있어야 한다.
- 마음에 드는 채식 식당을 찜하여 저장할 수 있어야 한다.
- 저장된 기록들(내가 세운 플랜, 찜한 식당, 찜한 플랜)은 삭제할 수 있어야 한다.


## 화면 구성 📺
|  홈 페이지  |  식당 조회 페이지   |
| :-------------------------------------------: | :------------: |
|  <img width="390" src="https://github.com/vple-remake/vple-frontend/issues/4#issue-2317364527"/> |  <img width="390" src="https://github.com/vple-remake/vple-frontend/issues/5#issue-2317364640">|  
| 플랜 일정 페이지   |  플랜 세우기 페이지   |  
| <img width="390" src="https://github.com/vple-remake/vple-frontend/issues/6#issue-2317365123"/>   |  <img width="390" src="https://github.com/vple-remake/vple-frontend/issues/7#issue-2317365249"/>     |
| 플랜 시간 설정 페이지   |  찜한 식당 목록 페이지   |  
| <img width="390" src="https://github.com/vple-remake/vple-frontend/issues/8#issue-2317365385"/>   |  <img width="390" src="https://github.com/vple-remake/vple-frontend/issues/9#issue-2317365464"/>     |
| 마이 페이지   |  나의 플랜 조회 페이지   |  
| <img width="390" src="https://github.com/vple-remake/vple-frontend/issues/10#issue-2317365543"/>   |  <img width="390" src="https://github.com/vple-remake/vple-frontend/issues/11#issue-2317365972"/>     |

---


## 시현 화면
<img width="726" alt="image" src="">


---

## 기능정리
### 비로그인 기능
1. 채식 식당 조회 기능
2. 채식 식당 검색 기능
3. 다른 비플인(사용자)가 세운 플랜 조회

### 로그인 기능 (비로그인 기능은 로그인 기능에 모두 포함)
1. 채식 식당 저장 기능
2. 다른 비플인(사용자)가 세운 플랜 저장
3. 다른 비플인(사용자)가 세운 플랜 편집
4. 나의 플랜 세우기 기능
5. 내가 세운 플랜 조회 기능
