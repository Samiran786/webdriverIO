import watchPage from '../pages/watch.page';

import {expect as chaiExpect} from 'chai';
//import 'chai/register-should';
describe('The show options on ebay', () => {
    it('Should show the banner container', async() => {
        //browser.url('https://www.ebay.com/');
        await watchPage.open();
        //const paramBaner = await $('.hl-custom-card__image-container');
        
        await expect(watchPage.paramBaner).toBeDisplayed();
    });

    /*it('Should show the baner title', async() => {
        const paramTitle = await $('.title-banner__title');
        await expect(paramTitle).toHaveTitleContaining('The sneakers to suit your style!');
    });*/

    it('Should contain link and it has to be clickable', async() => {
        //const paramBaner = await $('.hl-custom-card__image-container');
        const tagName = await watchPage.paramBaner.getTagName();
        await expect(watchPage.paramBaner).toBeDisplayed();
        await expect(watchPage.paramBaner).toHaveLinkContaining('/delstats/');
        await expect(watchPage.paramBaner).toBeClickable();
        chaiExpect(tagName).to.equal('a');
        //await tagName.should.be.equal('a');
        await watchPage.paramBaner.click();
        
    });

    it('verify the new url', async() => {
        //const paramBaner = await $('.hl-custom-card__image-container');
        await watchPage.paramBaner.click();
        const url = await browser.getUrl();
        
        chaiExpect(url).to.include('/tag-heuer?preview=true&_');
        //await expect(browser).toHaveUrl('https://www.ebay.com/e/gc/tag-heuer?preview=true&_trkparms=%26clkid%3D8524031944092462656');
    });
    
});