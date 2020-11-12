import axios from "axios";

export const getKanyeTweet = async () => {
    const res = await axios.get("https://api.kanye.rest");
    console.log('getting data from real api');
    return res.data;    
}
