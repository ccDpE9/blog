import React from "react";
import { configure, shallow, render } from "enzyme";
import chai, { expect } from "chai";
import App from "../App";
import chaiEnzyme from "chai-enzyme";

describe("App component", () => {
  before(() => {
    const wrapper = shallow(<App />);
  });

  it("Should have loading equal to true before components are rendereed", () => {
  });

  it("Contains other components to be rendered", () => {
    expect(wrapper).to.contain(<Navbar />);
    expect(wrapper).to.contain(<Articles />);
    expect(wrapper).to.contain(<Contact />);
    expect(wrapper).to.contain(<Footer />);
  });

  describe("h1 loads correctly", async () => {
    let browser = 
});
