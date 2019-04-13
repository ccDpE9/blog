"use strict";

import React from "react";
import { configure, shallow } from "enzyme";
import { expect } from "chai";
import { sinon } from "sinon";

import Articles from "../components/Articles";

describe("Articles component", () => {

  // --- HOOKS
  
  beforeEach(() => {
    // @TODO mock articles

    let articles = [
      {
        title: "Title01",
        description: "Description01",
        timestamp: Date.now(),
      },
      {
        title: "Title02",
        description: "Description02",
        timestamp: Date.now(),
      }
    ];

    const wrapper = shallow(<Articles props={articles} />);
  });

  afterEach(() => {
  });

  // --- ARTICLES
  //
  it("Should render title, description and timestamp", () => {
    expect(wrapper.find(".title").length).toBe(1);
    expect(wrapper.find(".title").at(0).text()).toBe("Title1");
  });
  
  it("Should display only 10 articles per page", () => {
    // test page 1
    // test page 3
    // test page 9
  });

  it("Title element is a link to a particular article", () => {
  });


  // --- FILTER

  describe("fetch()", () => {
    it("If no error, should return articles", () => {
    });
  });


});
