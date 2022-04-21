export interface IApiConnect {
    id: string,
    key: string,
}

const ApiConnects: Array<IApiConnect> = [{
    id: "MapTiler",
    key: "juxsSwQojvISRewbP8Ra",
},
{
    id: "emailjs",
    key: "OiSIcGBF7wKl6TGur",
}]

const GetApiKey = (id: string) => {
    let keyMatches = ApiConnects.filter((c) => c.id === id)
    let key = keyMatches.length === 1 ? keyMatches[0].key : ""
    return key;
}

export default GetApiKey