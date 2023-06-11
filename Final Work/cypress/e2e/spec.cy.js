import FormPage from "../pageObjects/Form.Page";

describe("Final Task Scenarios", () => {
  context("Form scenario", () => {
    beforeEach(() => {
        FormPage.visit();
    });
  
    it("Submit and validate form", ()  =>{
      FormPage.nameField.type("Kristians");
      FormPage.surnameField.type("Zondaks");
      FormPage.emailField.type("kristians.zondaks@va.lv");
      FormPage.genderRadio.click({force:true});
      FormPage.numberField.type("29999999");
      FormPage.birthDate.click();
      FormPage.calendarYear.select("1930");
      FormPage.calendarMonth.select("February");
      FormPage.calendarDay.click();
      FormPage.subjectContainer.click().type("Eco");
      FormPage.autocomplete.first().click();
      FormPage.hobbyCheck.contains("Music").click();
      FormPage.uploadPic.selectFile("./cypress/files/honest.png");
      FormPage.addressField.type("Random Address st. 420");
      FormPage.stateAndCity.contains("Select State").click();
      FormPage.getState.click({force:true});
      FormPage.stateAndCity.contains("Select City").click();
      FormPage.getCity.click({force:true});
      FormPage.submitBtn.click();
      const expectedValues = ["Kristians Zondaks", "kristians.zondaks@va.lv", "Male", "29999999", "28 February,1930", "Economics", "Music", "honest.png", "Random Address st. 420", "NCR Delhi"];
      FormPage.validationTable.each(($row, index) => {
        cy.wrap($row).find("td").eq(1).should("contain", expectedValues[index]);
      });
    });
  });
});