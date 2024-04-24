export class sorting 
{
    page = 'https://www.amazon.com/';
    hamburger = '#nav-hamburger-menu';
    computer = '.hmenu-visible > :nth-child(8) > .hmenu-item';
    tabletAccessories = '.hmenu-visible > :nth-child(15) > .hmenu-item'
    searchBar = '#twotabsearchtextbox';
    searchSubmitBtn = '#nav-search-submit-button';
    sort = '#a-autoid-0-announce';
    sortParam1 = '#s-result-sort-select_4'
    sortParam2 = '#a-popover-3 > .a-popover-wrapper > .a-popover-inner > .a-nostyle > [aria-checked="true"] > #s-result-sort-select_1';

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

    clickSort()
    {
        cy.get(this.sort).click();
    } 

    selectSortParam()
    {
        cy.get(this.sortParam1).click();
    }

    searchBrand(brand)
    {
        cy.get(this.searchBar).type(brand);
    }

    clickSearchBtn()
    {
        cy.get(this.searchSubmitBtn).click();
    }

    clickSort2()
    {
        cy.get(this.sort).click();
    }

    selectSortParam2()
    {
        cy.get(this.sortParam2).click();           
    }

 
    assertPage()
    {

    }
}