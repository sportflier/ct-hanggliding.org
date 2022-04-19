import React from 'react'
import './HeroText.scss'

type Props = { text: string }

export default function HeroText({ text }: Props) {
    return (
        <svg width="100%" height="100%" viewBox="0 0 54 197" version="1.1" xmlns="http://www.w3.org/2000/svg" className='svg-hero-text'>
            <g id="hero-text" transform="matrix(1,0,0,1,-324,-88)">
                <rect x="324" y="88" width="54" height="197" />
                <g transform="matrix(6.12323e-17,-1,1,6.12323e-17,154.068,547.263)">
                    <text x="276.793px" y="208.866px" className='svg-text-fill'>{text}</text>
                </g>
            </g>
        </svg>

    )
}