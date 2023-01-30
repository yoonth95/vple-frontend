import {atom, selector, useRecoilState,} from 'recoil';

export const headerListState = atom({
    key: 'headerState',
    default: ['홈 화면', '플랜 세우기', '저장', '마이페이지'],
});