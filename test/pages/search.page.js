import page from './page';

class searchPage extends page{
    //const inputSearch = $('#gh-ac');
    //const inputButton = $('#gh-btn');

    get inputSearch(){
        return $('#gh-ac');
    }

    get inputButton(){
        return $('#gh-btn');
    }

    async open(){
        await super.open('https://www.ebay.com/');
    }
}

export default new searchPage();