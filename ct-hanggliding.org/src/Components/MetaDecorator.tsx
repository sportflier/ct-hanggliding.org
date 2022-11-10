import React from "react";
import { Helmet } from "react-helmet";

export interface IMetaDecorations {
    title: string;
    description: string;
    ogimage:string;
}
const MetaDecorator = ({ title, description, ogimage }: IMetaDecorations) => {

    // see https://stackoverflow.com/questions/66045965/warning-using-unsafe-componentwillmount-in-strict-mode-is-not-recommended-upgr#:~:text=Warning%3A%20Using%20UNSAFE_componentWillMount%20in%20strict%20mode%20is%20not,componentDidMount%2C%20and%20set%20initial%20state%20in%20the%20constructor.

    return (
        <Helmet>
            <title>Connecticut Hang Glider Association (CHGA){`${title.length > 0 ? " - " + title : ""}`}</title>
            <meta name="description" content={description} />
            {ogimage.length > 0 ? <meta property="og:image" content={ogimage}  /> : <></> }
            
        </Helmet>
        // <></>
    )
}

MetaDecorator.defaultProps = {
    title:"",
    description:"Established in 1974, the Connecticut Hang Gliding Association is an organization of men and women committed to the pursuit, promotion, and protection of hang gliding in New England.",
    ogimage:"/images/og/hublein-fantasy-OG-image.jpg",
}

export default MetaDecorator;