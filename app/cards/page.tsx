"use client";

import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  TouchSensor,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  horizontalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React, { useState } from "react";

interface CardItem {
  id: number;
  text: string;
}

function SortableItem({
  id,
  text,
  onRemove,
}: {
  id: number;
  text: string;
  onRemove: (id: number) => void;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    height: "100px",
    transition,
    background: isDragging ? "#e0e0ff" : "#f0f0f0",
    border: "1px solid #ccc",
    borderRadius: "4px",
    cursor: "move",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <div
      id="item"
      className="min-w-[100px] p-2 touch-none relative"
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <span className="w-full text-center">{text}</span>
      <button
        onClick={(e) => {
          e.stopPropagation(); // 클릭 이벤트 상위로 전달 방지
          onRemove(id); // 삭제 함수 호출
        }}
        onPointerDown={(e) => e.stopPropagation()} // 드래그 시작 방지
        onTouchStart={(e) => e.stopPropagation()} // 모바일 터치 대응
        className="cursor-pointer absolute top-2 right-2 grayscale"
      >
        ❌
      </button>
    </div>
  );
}

// function TrashZone() {
//   const { setNodeRef, isOver } = useDroppable({ id: "trash" });
//
//   return (
//     <div
//       ref={setNodeRef}
//       className="absolute w-[200px] h-[200px] left-[calc(50%-100px)]"
//       style={{
//         backgroundColor: isOver ? "#ff4d4d" : "#ffcccc",
//       }}
//     >
//       🗑️ 드래그하여 여기로 삭제
//     </div>
//   );
// }

export default function SortableCardList() {
  const [items, setItems] = useState<CardItem[]>([]);
  const [text, setText] = useState("");

  const sensors = useSensors(useSensor(PointerSensor), useSensor(TouchSensor));

  const addCard = () => {
    if (text.trim() === "") return;
    const newId = new Date().getTime();
    setItems((prev) => [...prev, { id: newId, text }]);
    setText("");
  };

  const removeCard = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = items.findIndex((item) => item.id === active.id);
      const newIndex = items.findIndex((item) => item.id === over?.id);

      setItems((items) => arrayMove(items, oldIndex, newIndex));
    }
  };

  return (
    <div className="h-lvh flex flex-col justify-center items-center gap-8">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addCard();
        }}
        className="max-w-3xl mx-auto flex gap-4"
      >
        <input
          className="border border-gray-800 p-2 rounded-xl focus:outline-none"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="텍스트 입력"
        />
        <button
          className="w-[100px] p-2 bg-blue-300 rounded-xl font-bold"
          type="submit"
        >
          추가
        </button>
      </form>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={items.map((item) => item.id)}
          strategy={horizontalListSortingStrategy}
        >
          <div className="w-full p-2 flex gap-4 flex-wrap justify-center h-[116px]">
            {items.map((item) => (
              <SortableItem
                key={item.id}
                id={item.id}
                text={item.text}
                onRemove={removeCard}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
}
