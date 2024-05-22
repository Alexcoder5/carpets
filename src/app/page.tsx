'use client'
import { useState } from "react";
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import FirstScreen from "./components/FirstScreen";
import SecondScreen from "./components/SecondScreen";
import { initialData } from './assets/initialStickers'
import { DraggableStickerData } from "./assets/typescriptHelpers";
import { restrictToWindowEdgesAndTopNav } from "./assets/restrictToWindowEdgesAndTopNav";
import ThirdScreen from "./components/ThirdScreen";
import DesignOptions from "./components/DesignOptions";

const moveArr = (arr: DraggableStickerData[], from: number, to: number) => {
  return arr.splice(to, 0, arr.splice(from, 1)[0]);
}

export default function Home() {
  const [draggableStickersData, setDraggableStickersData] = useState<DraggableStickerData[]>(initialData);
  const [isStickerPositionChanged, setIsStickerPositionChanged] = useState(false)

  const handleOnDragEnd = ({ delta, active }: DragEndEvent) => {
    setDraggableStickersData(prevValue => {
      let newArr = prevValue
      let activeItem = prevValue.findIndex(obj => {
        return obj.id === active.id
      })
      newArr[activeItem].coordinates = {
        x: newArr[activeItem].coordinates.x + delta.x,
        y: newArr[activeItem].coordinates.y + delta.y
      }
      moveArr(newArr, activeItem, prevValue.length)

      return newArr
    });
  }

  return (
    <main>
      <DndContext
        id="dnd-context-id"
        modifiers={[restrictToWindowEdgesAndTopNav]}
        onDragEnd={handleOnDragEnd}
        onDragMove={() => { setIsStickerPositionChanged(true) }}
      >
        <FirstScreen
          draggableStickersData={draggableStickersData}
          isStickerPositionChanged={isStickerPositionChanged}
        />
        <SecondScreen/>
        <ThirdScreen/>
        <DesignOptions/>
      </DndContext>
    </main>
  );
}
