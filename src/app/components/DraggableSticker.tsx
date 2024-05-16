'use client'
import Image, { StaticImageData } from 'next/image'
import { useDraggable } from '@dnd-kit/core';
import { DraggableStickerData } from '../assets/typescriptHelpers';

interface Props {
    src: StaticImageData
    draggableStickersData: DraggableStickerData[],
    id: string
    width: React.CSSProperties
}

const DraggableSticker = ({ src, draggableStickersData, id, width }: Props) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: id,
    });

    let ix = draggableStickersData.findIndex(obj => {
        return obj.id === id
    })

    return (
        <div
            className='z-40 absolute'
            ref={setNodeRef}
            style={
                {
                    top: draggableStickersData[ix]?.coordinates.y,
                    left: draggableStickersData[ix]?.coordinates.x,
                    ...width,
                    zIndex: transform ? 99 : ix + 50,
                    cursor: transform? 'grabbing' : 'grab',
                    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
                } as React.CSSProperties
            }
            {...listeners}
            {...attributes}
        >
            <Image
                draggable={false}
                src={src}
                className='z-50 absolute'
                alt="sticker"
            />
        </div>
    )
}

export default DraggableSticker