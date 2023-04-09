import page from "./page";

class watchPage extends page{

    //const paramBaner = await $('.hl-custom-card__image-container');
    get paramBaner(){
        return $('.hl-custom-card__image-container');
    }

    //const paramBaner = await $('.hl-custom-card__image-container');
    //const tagName = await paramBaner.getTagName();
    //get paramBaner(){
      //  return $('.hl-custom-card__image-container');
    //}
    //get tagName(){
      //  return paramBaner().getTagName();
    //}
    //const url = await browser.getUrl();
    get url(){
        return browser.getUrl();
    }

    async open(){
        await super.open('https://www.ebay.com/');
    }

}

export default  new watchPage();