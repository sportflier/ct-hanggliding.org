import React, { ReactNode } from 'react'
import './OfficerCard.scss';

type Props = {
    portrait: string,
    children: ReactNode,
    className?: string,
    key?: string
}

export function OfficerCard({ portrait, children, className = '', key = '' }: Props) {
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

export interface IOfficerCard {
    portrait: string,
    title: string,
    name: string,
    phone?: string,
    email?: string,
    className?: string,
}

export default function FormattedOfficerCard({ portrait, title, name, phone = '', email = '', className = '' }: IOfficerCard) {
    return (
        <OfficerCard portrait={portrait} className={className} >
            <strong>{title}</strong><br />{name}
            {phone.length > 0 ? <><br />{phone}</> : <></>}
            {email.length > 0 ? <><br /><a href={`mailto:${email}`}>{email}</a></> : <></>}
        </OfficerCard>

    )
}
