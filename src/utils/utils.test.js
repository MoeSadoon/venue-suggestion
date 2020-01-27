import { filterBadMatches, getRecommendations } from "./utils";

describe("filterBadMatches", () => {
  it("should return an empty object if all user preferences are satisfied", () => {
    // arrange
    const users = [
      { name: "Joe Bloggs", wont_eat: ["Fish"], drinks: ["Beer"] },
      { name: "Jane Doe", wont_eat: ["Beef"], drinks: ["Wine"] }
    ];

    const venues = [
      { name: "Venue_A", food: ["Mexican"], drinks: ["Beer", "Wine"] },
      { name: "Venue_B", food: ["Japanese"], drinks: ["Beer", "Wine", "Rum"] }
    ];
    // act
    const result = filterBadMatches(users, venues);
    //assert
    expect(result).toMatchObject({});
  });

  it("should return a list of bad matches if they conflict with user preferences", () => {
    // arrange
    const users = [
      { name: "Joe Bloggs", wont_eat: ["Fish"], drinks: ["Beer"] },
      { name: "Jane Doe", wont_eat: ["Beef"], drinks: ["Wine"] }
    ];

    const venues = [
      { name: "Venue_A", food: ["Mexican"], drinks: ["Wine"] },
      { name: "Venue_B", food: ["Beef"], drinks: ["Beer", "Wine", "Rum"] }
    ];

    // act
    const result = filterBadMatches(users, venues);
    // assert
    expect(result).toMatchObject({
      Venue_A: { reasons: ["Joe Bloggs has nothing to drink here"] },
      Venue_B: { reasons: ["Jane Doe won't eat Beef"] }
    });
  });
});

describe("getRecommendations", () => {
  it("should return a list of recommendations along with places to avoid based on user preferences", () => {
    // arrange
    const users = [
      { name: "Joe Bloggs", wont_eat: ["Fish"], drinks: ["Beer"] },
      { name: "Jane Doe", wont_eat: ["Beef"], drinks: ["Wine"] }
    ];

    const venues = [
      { name: "Venue_A", food: ["Mexican"], drinks: ["Wine"] },
      { name: "Venue_B", food: ["Beef"], drinks: ["Beer", "Wine", "Rum"] },
      { name: "Venue_C", food: ["Pizza"], drinks: ["Beer", "Wine", "Rum"] }
    ];
    // act
    const result = getRecommendations(users, venues);
    // assert
    console.log(result);
    expect(result).toEqual({
      recommendations: [{ ...venues[2] }],
      notRecommended: [
        { name: "Venue_A", reasons: ["Joe Bloggs has nothing to drink here"] },
        { name: "Venue_B", reasons: ["Jane Doe won't eat Beef"] }
      ]
    });
  });
});
