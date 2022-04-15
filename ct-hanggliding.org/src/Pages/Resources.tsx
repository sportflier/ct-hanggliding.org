import React from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Hero from '../Components/Hero';
import Links, { ResourceLinkGroups } from './../Data/resource-data';
import './Resources.scss';
import Accordion from '../Components/Accordion';


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
                {heroImage.length > 0 ? <div className='card-hero'><img src={heroImage} alt='card hero' /></div> : <></>}
                <div className="card-copy">
                    <h3>{name}</h3>
                    {description.length > 0 ? <p>{description}</p> : <></>}
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
        <Accordion title={title} key={key}>
            <div className="resource-group-wrap">
                <div className='resource-group'>
                    {Links.filter((c) => c.category === category).map((c) => <Card name={c.name} description={c.description} url={c.url} key={c.name} heroImage={c.image} />)}
                </div>

            </div>
        </Accordion>
    );
};

const Resources: React.FC = () => {
    return (
        <>
            <Header />
            <Hero heroText="Resources" />

            <main id="resources" className="content-container home surface-light-gradient">


                <div>
                    <div className="banner">
                        <h1 className="heading-2 anim_scale-fade">Resources</h1>
                    </div>

                    <div className="text-normal resource-groups">
                        {
                            ResourceLinkGroups.map((g) => <CardGroup key={g.category} category={g.category} title={g.name} />)
                        }
                    </div>

                </div>


            </main>
            <Footer />
        </>
    )
}

export default Resources;