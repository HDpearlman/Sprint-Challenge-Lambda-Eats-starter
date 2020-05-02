//arrange
describe('My First Test', function () {
    //act
        it('Does not do much', function() {
    //assert
            expect(true).to.equal(true);
        })
    })

    describe('Page visit', function () {

        it('visits page', function() {
            cy.visit(`http://localhost:3000/`)
        })
    })

    describe('clicks pizza link', function () {

        it('clicks pizza', function() {
            cy.get('[href="/pizza"]').click()
        })
    })


    describe('tests form', function(){
        it ('tries to order a medium mushroom onion pizza as matcho man special instructions oooh yeaah',function(){
            cy.get('form > :nth-child(1) > label > input').click().type('macho man')

            cy.get('#size').select('medium')

            cy.get(':nth-child(2) > label > input').click()

            cy.get(':nth-child(3) > label > input').click()

            cy.get('textarea').click().type('oooh yeaaaah')

            cy.get('button').click()
            
    })})


    describe('fails submit', function () {

        it('doesnt include name', function() {
            cy.get('#size').select('medium')

            cy.get(':nth-child(2) > label > input').click()

            cy.get(':nth-child(3) > label > input').click()

            cy.get('textarea').click().type('oooh yeaaaah')

            cy.get('button').click()
        })
    })

    //select medium
    
    //select mushroom onion

    //special instructions ooh yeah

    //submit