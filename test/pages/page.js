export default class page {
    async open(path){
        return await browser.url(path);
    }
}