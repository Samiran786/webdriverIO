import searchPage from "../pages/search.page";

describe("Ebay product search", ()=>{
    it("Should open the main url and verify the title of the page", async ()=> {
        await searchPage.open();
        
        await expect(browser).toHaveTitle('Electronics, Cars, Fashion, Collectibles & More | eBay');
    })

    it("Should search a product and verify the search text value", async ()=> {
        //const inputSearch = $('#gh-ac');
        //const inputButton = $('#gh-btn');

        await searchPage.inputSearch.addValue('Laptop');
        await searchPage.inputButton.click();

        //await inputSearch.addValue('Laptop');
        //await inputButton.click();

        await expect(searchPage.inputSearch).toHaveValue('Laptop')


    })

    it("Should redirect to another page and verify the title of that page", async()=>{
        await expect(browser).toHaveTitle('Laptop for sale | eBay');
    })

    it("Should update the search catagory", async()=>{ 
        const option = $('#gh-cat option:nth-child(1)');
        await expect(option).toHaveText('PC Laptops & Netbooks');
    })
})