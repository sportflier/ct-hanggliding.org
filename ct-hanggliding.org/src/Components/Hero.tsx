import React from 'react'
import './Hero.scss'
import YoutubePlayer from './YoutubePlayer'
import HeroText from './HeroText'

const heroes = [
    {
        className: "hero_chga-4th"
    },
    {
        className: "hero_heublein-ideal-clouds"
    },
    {
        className: "hero_falcon-launch"
    },
    {
        className: "hero_talcott-flyby"
    },
    {
        className: "hero_tanner-hiller-dragonfly"
    },
    {
        className: "hero_talcott-setup-area"
    },
    {
        className: "hero_talcott-lz"
    },
    {
        className: "hero_raptor"
    },
]


type Props = {
    heroText?: string,
    videoId?: string,
    className?: string
}

function getRandomIntInclusive(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomHero() {
    let num = getRandomIntInclusive(0, heroes.length - 1);
    // console.log(num);
    return heroes[num].className;
}

export default function Hero({ heroText = '', className = '', videoId = '' }: Props) {

    const heroTextElement = <div className="hero-text-wrap">
        <span className={`hero-text ${heroText.length > 8 ? 'hero-text_small' : ''}`}>{heroText}</span>
    </div>;
    // const heroTextElement = <div className="hero-svg-wrap anim_slide-in-fade">
    //     <HeroText text={heroText} />
    // </div>;

    const heroClass = className.length === 0 && videoId.length === 0 ? randomHero() : className;


    return (
        <div className={`hero ${videoId.length === 0 ? heroClass : ''}`}>
            {heroText.length > 0 ? heroTextElement : <></>}
            {videoId.length > 0 ? <YoutubePlayer videoId={videoId} /> : <></>}
        </div>
    )

}