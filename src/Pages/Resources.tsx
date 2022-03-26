import React from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Hero from '../Components/Hero';
import Links, { ResourceLinkGroups } from './../Data/resource-data';
import './Resources.scss';


interface IResourceCardProp {
    heroImage?: string,
    name: string,
    description: string,
    url?: string,

}
const Card: React.FC<IResourceCardProp> = ({ heroImage = '', name, description, url = '' }: IResourceCardProp, key: string) => {

    return (
        <a href={url} target="_blank" rel="noreferrer" key={key}>
            <div className='resource-card'>
                <div className="resource-card_container">
                    <strong>{name}</strong>
                    {description.length > 0 ? <><br />{description}</> : <></>}

                </div>
            </div>

        </a>
    )
}

interface IResourceGroupProp {
    category: string,
    title: string
}


const CardGroup: React.FC<IResourceGroupProp> = ({ category, title }: IResourceGroupProp, key: string) => {
    return (
        <>
            <div key={key}>
                <h2>{title}</h2>
                <div className='resource-group'>
                    {Links.filter((c) => c.category === category).map((c) => <Card name={c.name} description={c.description} url={c.url} key={c.name} />)}

                </div>

            </div>
        </>
    );
};

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
                        {
                            ResourceLinkGroups.map((g) => <CardGroup key={g.category} category={g.category} title={g.name} />)
                        }


                    </div>

                </div>


            </div>
            <Footer />
        </>
    )
}

export default Resources;