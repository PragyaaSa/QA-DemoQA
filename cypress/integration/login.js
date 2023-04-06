/// <reference types ="Cypress" />

import LoginPage_PO from "../../support/pageObjects/ToolsQA/loginpage_PO";
import LogOut_PO from "../../support/pageObjects/ToolsQA/logout_PO";
import { faker } from "@faker-js/faker";

const loginPage_PO = new LoginPage_PO();
const logOut_PO = new LogOut_PO();

const userName = faker.internet.userName();
const password = faker.internet.password();

describe("Logging in and logging out from ToolsQA ", () => {
  before(() => {
    cy.visit(Cypress.env("baseURL"));
  });

  beforeEach(function () {
    cy.preserveCookies();
    cy.wait(2000);
  });

  it("Should not login with incorrect credentials", () => {
    loginPage_PO
      .typeInvalidUserName(userName)
      .typeInvalidPassword(password)
      .clickOnLoginButton()
      .errorClassValidationCheck();
    cy.wait(2000);
  });

  it("Should not login with empty fields", () => {
    loginPage_PO
      .clearUserName()
      .clearPassword()
      .clickOnLoginButton()
      .errorClassValidation();
  });

  it("Should login with valid credentials", () => {
    cy.successfulLogin();
    cy.validateSuccessfulLogin();
  });

  it("Should log out successfully", function () {
    logOut_PO.clickLogoutButton();
  });
});