import React from "react";
import { Helmet } from "react-helmet";

export interface IMetaDecorations {
    title: string;
    description: string;
}
const MetaDecorator = ({ title, description }: IMetaDecorations) => {

    // see https://stackoverflow.com/questions/66045965/warning-using-unsafe-componentwillmount-in-strict-mode-is-not-recommended-upgr#:~:text=Warning%3A%20Using%20UNSAFE_componentWillMount%20in%20strict%20mode%20is%20not,componentDidMount%2C%20and%20set%20initial%20state%20in%20the%20constructor.

    return (
        <Helmet>
            <title>Connecticut Hang Glider Association (CHGA){`${title.length > 0 ? " - " + title : ""}`}</title>
            <meta name="description" content={description} />
        </Helmet>
        // <></>
    )
}

export default MetaDecorator;