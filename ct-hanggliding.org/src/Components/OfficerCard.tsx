import React, { ReactNode } from 'react'
import './OfficerCard.scss';

type Props = {
    portrait: string,
    children: ReactNode,
    className?: string,
    key?: string
}

export default function OfficerCard({ portrait, children, className = '', key = '' }: Props) {
    return (
        <div className={`officer-card ${className}`} key={key}>
            <div className="portrait">
                <img src={portrait} alt="" />
            </div>
            <div className="copy">
                {children}
            </div>

        </div>
    )
}