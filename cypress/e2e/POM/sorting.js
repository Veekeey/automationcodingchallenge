export class sorting 
{
    page = 'https://www.amazon.com/';
    hamburger = '#nav-hamburger-menu';
    computer = '.hmenu-visible > :nth-child(8) > .hmenu-item';
    tabletAccessories = '.hmenu-visible > :nth-child(15) > .hmenu-item'
    searchBar = '#twotabsearchtextbox';
    searchSubmitBtn = '#nav-search-submit-button';
    sortBtn = '#a-autoid-0-announce';
    sortParam = '#s-result-sort-select_4'
    item = '';
   
    visitPage()
    {
        cy.visit(this.page);
    }

    clickHamburger()
    {
        cy.get(this.hamburger).click();
    }

    clickComputer()
    {
        cy.get(this.computer).click();
    }

    clickTabletAccessories()
    {
        cy.get(this.tabletAccessories).click();
    }

    clickSort()
    {
        cy.get(this.sortBtn).click();
    } 

    selectSortParam()
    {
        cy.get(this.sortParam).click();
    }

    searchBrand(brand)
    {
        cy.get(this.searchBar).type(brand);
    }

    clickSearchBtn()
    {
        cy.get(this.searchSubmitBtn).click();
    }

    clickLowestPricedItem()
    {
        cy.get(this.item).click();
    }
   

    windowSwitch()
    {

    }

 
    assertPage()
    {

    }
}