import React, { ReactNode, useState } from 'react'
import './Accordion.scss';

type Props = {
    title?: string,
    titleClassName?: string,
    active?: boolean,
    children: ReactNode
}

export default function Accordion({ title = '', titleClassName = 'heading fs-500', children, active = false }: Props) {
    const [isActive, setIsActive] = useState(active);
    return (
        <>
            <div className="accordion">
                <div className="accordion-item">
                    <div
                        className={`accordion-title ${titleClassName}`}
                        onClick={() => setIsActive(!isActive)}
                    >
                        <div>{title}</div>
                        <div>{isActive ? '-' : '+'}</div>
                    </div>
                    {isActive && <div className="accordion-content">{children}</div>}
                </div>
            </div>
        </>
    )
}