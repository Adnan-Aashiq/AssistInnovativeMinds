/// <reference types="cypress"/>

describe('Assist Innovative Minds Modules testing',()=>{
    it('Sign up Modeule testing',()=>{
        cy.viewport(1200,800)
        //profile page1
        cy.visit("https://icy-cliff-0d86e3503.1.azurestaticapps.net/")
        cy.get("button[id*='react-aria']").click()  
        cy.get(".Header_dropMenu__FrtWt.dropdown-menu.show a:nth-child(2)").click()
        cy.get("p span").click()

        //Signing Up page2
        let num = Math.floor(Math.random() * 1000);
        cy.get("#email").type("assisttest"+num+"@mailinator.com")
        cy.get("#password").type("123456789")
        cy.get(".Input_icon__U7UwM.false svg").click()
        cy.get(".Button_button__JBBzO.Button_primary__9MLUH.Button_none__vuq4k ").click()
        cy.wait(1500)

        //Forgot Password page3
        cy.get(".Authenticate_textForgotPassword__Qw0dV").click()
        cy.wait(1500)
        cy.get(".Authenticate_reset__ITqGp div:nth-child(2) span").click()
        cy.wait(1500)

        //Login with Invalid email page4
        cy.get("#email").type("assisttest"+num+"mailinator.com")
        cy.wait(1500)
        cy.get("#password").type("123456789")
        cy.get(".Input_icon__U7UwM.false svg").click()
        cy.get(".Input_container__LwTub.false input[type='checkbox']").click()
        cy.get(".Button_button__JBBzO.Button_primary__9MLUH.Button_none__vuq4k ").click()

        //Login with valid email page4
        cy.get("#email").clear()
        cy.get("#email").type("assisttest"+num+"@mailinator.com")
        cy.wait(1500)
        cy.get("#password").clear()
        cy.get("#password").type("123456789")
        cy.get(".Button_button__JBBzO.Button_primary__9MLUH.Button_none__vuq4k ").click()
        cy.wait(1500)
        
        //Edit profile page5
        cy.get("button[id*='react-aria']").click()
        cy.get(".Header_dropMenu__FrtWt.dropdown-menu.show a:nth-child(2)").click()

        cy.get("input[type='file']").attachFile("pic.png")
        cy.get(".MyAccount_apply__3QqSa").click()
        cy.wait(3000)

        cy.get(".MyAccount_content__lHG1j div:nth-child(2) button").click()
        cy.get("#firstName").type("Test First Name",{force: true})
        cy.get("#lastName").type("Test Last Name",{force: true})
        cy.get(".Profile_form__L3DNo button").click() 
        cy.wait(1500)

        cy.get(".MyAccount_content__lHG1j div:nth-child(3) button").click()
        cy.get(".Profile_form__L3DNo #gender").select("Male")
        cy.get(".Profile_form__L3DNo button").click()
        cy.wait(1500)

        cy.get(".MyAccount_content__lHG1j div:nth-child(4) button").click()
        cy.get("#dateOfBirth").type("2000-09-26")
        cy.get(".Profile_form__L3DNo button").click()
        cy.wait(1500)

        cy.get(".MyAccount_content__lHG1j div:nth-child(5) button").click()
        cy.get("#email").clear()
        cy.get("#email").type("assisttest"+num+"@mailinator.com")
        cy.get(".Profile_form__L3DNo button").click()
        cy.wait(1500)

        cy.get(".MyAccount_content__lHG1j div:nth-child(6) button").click()
        cy.get("#phone").type("0234516738")
        cy.get(".Profile_form__L3DNo button").click()
        cy.wait(1500)

        cy.get(".MyAccount_content__lHG1j div:nth-child(7) button").click()
        cy.get("#address").type("ŞOS. GIURGIULUI nr. 119, BUCHAREST - DISTRICT 4, 040661")
        cy.get(".Profile_form__L3DNo button").click()
        cy.wait(1500)

    })
})