import React from 'react';

import {
  ContainerSheet,
  SheetHeader,

} from './BottomSheetStyle';

const BottomSheet = (props) => {

  return (
    <>
      <ContainerSheet>
          <SheetHeader>
            <span className="btn" onClick={props.closeSheet}>❎</span>
            <span className="title">{props.title}</span>
          </SheetHeader>
      </ContainerSheet>
    </>
  )
}

export default BottomSheet;