"use strict";

import { configure, shallow, render } from "enzyme";
import chai, { expect } from "chai";
import App from "../App";

describe("App component", () => {

  beforeEach(() => {
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

});
