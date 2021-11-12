/// <reference types="cypress" />


describe ("IFrame and Drag and Drop operation", ()=>{
    beforeEach(()=>{
        cy.visit("https://jqueryui.com/droppable/")
    })

    it("Drag and Drop with IFrame", ()=>{
        cy.get(".demo-frame").then($frame =>{

         const body =   $frame.contents().find('body')

         cy.wrap(body).find("#draggable").as("source")
         cy.wrap(body).find("#droppable").as("target")

        })

        cy.get("@source").trigger("mousedown", {which:1})

        cy.get("@target").trigger("mousemove", {which:1}).trigger("mouseup", {force : true})
        
        cy.get("@target").should("contains.text", "Dropped!")
    })
})