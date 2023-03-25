// BEGIN
export const getDomainInfo = (site) => {
    let siteInform = {

        "scheme": site.split('://').length == 1 ? "http" : site.split('://')[0],

        "name": site.split('://').length == 1 ? site : site.split('://')[1]
    }
    
    return siteInform;
}

export default getDomainInfo;
// END