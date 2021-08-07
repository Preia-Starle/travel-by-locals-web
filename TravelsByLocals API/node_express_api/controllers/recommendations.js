let recommendations = [];

export const createRecommendation = (req, res) => {
    const recommendation = req.body;

    recommendations.push({ ...recommendation, id: uuidv4() });

    res.send(`User with the name ${user.firstName} added to the database`);
}