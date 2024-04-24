import { sorting } from "./POM/sorting"
const getItem = new sorting();


describe('Coding challenge', () => {

  it('Filter & sort items', () => {
    
    getItem.visitPage();
    cy.wait(500);
    getItem.clickHamburger();
    getItem.clickComputer();
    getItem.clickTabletAccessories();
    getItem.clickSort();
    getItem.selectSortParam();
    getItem.searchBrand('JETech')
    getItem.clickSearchBtn();
    getItem.clickLowestPricedItem();
    getItem.windowSwitch();
    getItem.assertPage();

  })
})