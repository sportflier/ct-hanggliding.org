import React from 'react'
import './Hero.scss';

type Props = {
    heroText: string,
    className: string
}

export default function Hero({ heroText, className }: Props) {
    return (
        <div className={`hero ${className}`}>
            <div className="hero-text-wrap anim_slide-in-fade">
                <span className={`hero-text ${heroText.length > 8 ? 'hero-text_small' : ''}`}>{heroText}</span>
            </div>
        </div>
    )
}