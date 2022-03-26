import React from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Hero from '../Components/Hero';


interface IResourceCardProp {
    heroImage?: string,
    name: string,
    description: string,
    url?: string
}
const Card: React.FC<IResourceCardProp> = ({ heroImage = '', name, description, url = '' }: IResourceCardProp) => {
    return (
        <div><strong>{name}</strong>
            <br />{description}
            {url.length > 0 ? <><br /><a href={url}>{url}</a></> : <></>}
        </div>
    )
}

const Links = [
    {
        category: "school",
        name: "US Hang Gliding",
        description: "Middletown, NY",
        url: "https://www.ushanggliding.com"
    },
    {
        category: "x",
        name: "Hang Glide New England",
        description: "New Braintree, MA",
        url: "http://www.hangglidenewengland.com"
    }
]

const Resources: React.FC = () => {
    return (
        <>
            <Header />
            <Hero className="hero_tanner-hiller-dragonfly" heroText="Resources" />

            <div id="resources" className="content-container home surface-light-gradient">


                <div>
                    <div className="banner">
                        <h1 className="heading-2 anim_scale-fade">Resources</h1>
                    </div>
                    <div className="text-normal">
                        <h2>Schools</h2>
                        {
                            Links.filter((c) => c.category === "school").map((c) => <Card name={c.name} description={c.description} url={c.url} />)
                        }

                    </div>

                </div>


            </div>
            <Footer />
        </>
    )
}

export default Resources;