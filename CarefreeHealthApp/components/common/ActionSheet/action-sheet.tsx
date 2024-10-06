import React, { useState } from 'react'
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  ActionsheetItemText,
  ActionsheetIcon,
} from '@/components/ui/actionsheet';
import { Button, ButtonText } from '../../ui/button';

interface ActionsheetProps<T> {
  title: string;
  dataList: Array<T>;
}

export default function ActionSheet<T>({title, dataList}: ActionsheetProps<T>) {
  // state: action sheet 노출 여부 상태
  const [showActionsheet, setShowActionsheet] = useState<boolean>(false);
  // state: 선택 값 상태
  const [selected, setSelected] = useState<string>(title);
  
  // event handler: 값 선택하지 않은 상태의 닫기 이벤트 처리 함수.
  const handleClose = () => {
    setShowActionsheet(false);
  }
  // event handler: 특정 값 선택 이벤트 처리 함수.
  const handleSelect = (val: T) => {
    console.log(`selected: ${val}`);
    const selection = typeof val === 'string' ? val : JSON.stringify(val)
    setSelected(selection);
    setShowActionsheet(false);
  }

  return (
    <>
      <Button onPress={() => setShowActionsheet(true)}>
        <ButtonText>{selected}</ButtonText>
      </Button>
      <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          {dataList && dataList.map((data, index) => {
              return (
                <ActionsheetItem onPress={() => handleSelect(data)} key={index}>
                  <ActionsheetItemText>{typeof data === 'string' ? data : JSON.stringify(data)}</ActionsheetItemText>
                </ActionsheetItem>
              )}
            )
          }
        </ActionsheetContent>
      </Actionsheet>
    </>
  )
}
