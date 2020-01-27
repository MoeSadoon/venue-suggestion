/* Returns an object containing a list of unsuitable venues 
   and their corresponding reasons
*/
export const filterBadMatches = (users, venues) =>
  users.reduce((acc, { name: userName, wont_eat, drinks: userDrinks }) => {
    venues.forEach(
      ({ name: venueName, food: venueFood, drinks: venueDrinks }) => {
        const badFoodMatches = venueFood.filter(f => wont_eat.includes(f));
        const drinkMatches = venueDrinks.filter(d => userDrinks.includes(d));

        if (badFoodMatches.length) {
          badFoodMatches.forEach(f => {
            if (acc[venueName]) {
              acc[venueName].reasons.push(`${userName} won't eat ${f}`);
            } else {
              acc[venueName] = { reasons: [`${userName} won't eat ${f}`] };
            }
          });
        }

        if (!drinkMatches.length) {
          if (acc[venueName]) {
            acc[venueName].reasons.push(
              `${userName} has nothing to drink here`
            );
          } else {
            acc[venueName] = {
              reasons: [`${userName} has nothing to drink here`]
            };
          }
        }
      }
    );
    return acc;
  }, {});

/* 
  Main mapping function - returns list of recommended venues 
  as well as places to avoid based on user requirements.
*/
export const getRecommendations = (selectedUsers, venues) => {
  const badMatchList = filterBadMatches(selectedUsers, venues);

  const recommendations = venues.filter(({ name }) => !badMatchList[name]);
  const notRecommended = Object.keys(badMatchList).map(name => ({
    name,
    reasons: badMatchList[name].reasons
  }));

  return { recommendations, notRecommended };
};
