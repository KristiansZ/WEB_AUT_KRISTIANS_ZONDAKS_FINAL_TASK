class FormPage {
    static get url(){
        return "https://demoqa.com/automation-practice-form";
    }

    static visit(){
        cy.visit(this.url);
    }

    static get nameField(){
        return cy.get("#firstName");
    }

    static get surnameField(){
        return cy.get("#lastName");
    }

    static get emailField(){
        return cy.get("#userEmail");
    }

    static get genderRadio(){
        return cy.get("#gender-radio-1");
    }

    static get numberField(){
        return cy.get("#userNumber");
    }

    static get birthDate(){
        return cy.get("#dateOfBirthInput");
    }

    static get calendarYear(){
        return cy.get(".react-datepicker__year-select")
    }

    static get calendarMonth(){
        return cy.get(".react-datepicker__month-select")
    }

    static get calendarDay(){
        return cy.get('[aria-label="Choose Friday, February 28th, 1930"]');
    }

    static get subjectContainer(){
        return cy.get("#subjectsContainer");
    }

    static get autocomplete(){
        return cy.get(".subjects-auto-complete__menu");
    }

    static get hobbyCheck(){
        return cy.get(".custom-control-label");
    }

    static get uploadPic(){
        return cy.get("#uploadPicture");
    }

    static get addressField(){
        return cy.get("#currentAddress");
    }

    static get stateAndCity(){
        return cy.get(".css-1wa3eu0-placeholder");
    }

    static get getState(){
        return cy.get("#react-select-3-option-0");
    }

    static get getCity(){
        return cy.get("#react-select-4-option-0");
    }

    static get submitBtn(){
        return cy.get("#submit");
    }

    static get validationTable(){
        return cy.get("table tbody tr");
    }
}

export default FormPage;