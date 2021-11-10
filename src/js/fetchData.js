import jsSHA from "jssha";

export const fetchData = async (url) => {
    const res = await fetch(
        `https://ptx.transportdata.tw/MOTC/v2/${url}`,
        {
        headers: getAuthorizationHeader()
        }
    )
    const data = await res.json();
    return data;
}

function getAuthorizationHeader() {
    //  填入自己 ID、KEY 開始
        let AppID = '05308bdea7aa47d58b246bd2412c3bdd';
        let AppKey = 'keE6SBYMXwKKTj8HWMexbSiRAZg';
        let GMTString = new Date().toGMTString();
        let ShaObj = new jsSHA('SHA-1', 'TEXT');
        ShaObj.setHMACKey(AppKey, 'TEXT');
        ShaObj.update('x-date: ' + GMTString);
        let HMAC = ShaObj.getHMAC('B64');
        let Authorization = 'hmac username=\"' + AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';
        return { 'Authorization': Authorization, 'X-Date': GMTString }; 
    }