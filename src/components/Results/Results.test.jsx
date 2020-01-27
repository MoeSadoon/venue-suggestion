import React from "react";
import Results from "./Results";
import { shallow } from "enzyme";

describe("Results component", () => {
  it("should render a prompt to try again if no recommendations found", () => {
    // arrange
    const props = { recommendations: [], notRecommended: [] };
    // act
    const result = shallow(<Results {...props} />);
    // assert
    expect(result.find("h2").text()).toEqual(
      "Sorry, nothing was found, please try again."
    );
  });

  it("should render a list of venue names if recommendations provided", () => {
    // arrange
    const props = {
      recommendations: [{ name: "Venue_A" }, { name: "Venue_B" }],
      notRecommended: []
    };
    // act
    const result = shallow(<Results {...props} />);
    // assert
    expect(result.find(".results-container--recommended").length).toEqual(1);
    expect(result.find("h5").length).toEqual(props.recommendations.length);
  });

  it("should render a list of recommended venues and places to avoid with reasons if both provided", () => {
    // arrange
    const props = {
      recommendations: [{ name: "Venue_A" }, { name: "Venue_B" }],
      notRecommended: [{ name: "Venue_C", reasons: ["some reason"] }]
    };
    // act
    const result = shallow(<Results {...props} />);
    // assert
    expect(result.find(".results-container--recommended").length).toEqual(1);
    expect(
      result.find(".results-container--not-recommended--item").length
    ).toEqual(props.notRecommended.length);
  });
});
