import React from 'react'
import './Hero.scss'
import YoutubePlayer from './YoutubePlayer'
// import HeroText from './HeroText'

const defaultHeroes = ["hero_chga-4th", "hero_heublein-ideal-clouds", "hero_falcon-launch", "hero_talcott-flyby", "hero_tanner-hiller-dragonfly", "hero_talcott-setup-area", "hero_talcott-lz", "hero_talcott-flight-twilight", "hero_dragonfly-glider", "hero_greylock-flyover"];

type Props = {
    heroText?: string,
    videoId?: string,
    heroes?: Array<string>
}

function getRandomIntInclusive(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomHero(heroes: Array<string>) {
    if (heroes.length === 1) {
        return heroes[0];
    }
    else {
        let num = getRandomIntInclusive(0, heroes.length - 1);
        return heroes[num];
    }
}

export default function Hero({ heroText = '', heroes = defaultHeroes, videoId = '' }: Props) {

    const heroTextElement = <div className="hero-text-wrap anim_slide-in-fade">
        <span className={`hero-text ${heroText.length > 8 ? 'hero-text_small' : ''}`}>{heroText}</span>
    </div>;
    // const heroTextElement = <div className="hero-svg-wrap anim_slide-in-fade">
    //     <HeroText text={heroText} />
    // </div>;



    const heroClass = videoId.length === 0 ? randomHero(heroes) : '';


    return (
        <div className={`hero ${videoId.length === 0 ? heroClass : ''}`}>
            {heroText.length > 0 ? heroTextElement : <></>}
            {videoId.length > 0 ? <YoutubePlayer videoId={videoId} /> : <></>}
        </div>
    )

}