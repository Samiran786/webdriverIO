describe("Amazon product search", ()=>{
    it('open the browser , write a value, click that and verify the entered text', async()=>{
        await browser.url('https://www.amazon.in/');
        
        const inputText = $('#twotabsearchtextbox');
        const inputButton  = $('#nav-search-submit-button');

        await inputText.addValue('Laptop');
        await inputButton.click();
        
        await expect(inputText).toHaveValue('Laptop');

    })
})