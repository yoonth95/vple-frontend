import {StyledGreyDiv, StyledSearchBar, StyledInput, 
    StyledSearchButton} from './DetailSearchBarStyle';

export default function DetailSearchBar() {
    return (
        <>
            <StyledGreyDiv>
                <StyledSearchBar>
                    <StyledInput placeholder='여행을 떠나는 지역명을 검색해주세요.'></StyledInput><StyledSearchButton />
                </StyledSearchBar>
            </StyledGreyDiv>
        </>

    );
}