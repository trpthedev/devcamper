import nodeGeocoder from "node-geocoder";

const options: nodeGeocoder.Options = {
    provider: process.env.GEOCODER_PROVIDER as nodeGeocoder.Providers,
    apiKey: process.env.GEOCODER_API_KEY,
    formatter: null
};

export const geocoder = nodeGeocoder(options);