import React from "react";
import { Helmet } from "react-helmet";

export interface IMetaDecorations {
    title: string;
    description: string;
}
const MetaDecorator = ({ title, description }: IMetaDecorations) => {
    return (
        <Helmet>
            <title>Connecticut Hang Glider Association (CHGA){`${title.length > 0 ? " - " + title : ""}`}</title>
            <meta name="description" content={description} />
        </Helmet>
    )
}

export default MetaDecorator;