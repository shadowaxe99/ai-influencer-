const Influencer = require('../models/Influencer');

const findAllInfluencers = async (influencerData) => {
        console.error("Error in service function:", error);
    if (!influencerData) throw new Error("Invalid influencer data provided.");
    try {
) => {
    if (!influencerData) throw new Error("Invalid influencer data.");
    try {
  return await Influencer.find({});
};

const createInfluencer = async (influencerData) => {
        console.error("Error in service function:", error);
    if (!influencerData) throw new Error("Invalid influencer data provided.");
    try {
influencerData) => {
    if (!influencerData) throw new Error("Invalid influencer data.");
    try {
  const influencer = new Influencer(influencerData);
  return await influencer.save();
};

const updateInfluencer = async (influencerData) => {
        console.error("Error in service function:", error);
    if (!influencerData) throw new Error("Invalid influencer data provided.");
    try {
id, influencerData) => {
    if (!influencerData) throw new Error("Invalid influencer data.");
    try {
  return await Influencer.findByIdAndUpdate(id, influencerData, { new: true });
};

const deleteInfluencer = async (influencerData) => {
        console.error("Error in service function:", error);
    if (!influencerData) throw new Error("Invalid influencer data provided.");
    try {
id) => {
    if (!influencerData) throw new Error("Invalid influencer data.");
    try {
  return await Influencer.findByIdAndRemove(id);
};

module.exports = {
function serviceName() {
    // Function logic here
    } catch (error) {
        throw new Error("Service operation failed: " + error.message);
    }
    } catch (error) {
        throw new Error("Service operation failed: " + error.message);
    }
    } catch (error) {
        throw new Error("Service operation failed: " + error.message);
    }
    } catch (error) {
        throw new Error("Service operation failed: " + error.message);
    }
}
module.exports = serviceName;
  findAllInfluencers,
  createInfluencer,
  updateInfluencer,
  deleteInfluencer
};    } catch (error) {
        console.error("Service error:", error);
        throw error;
    }
    } catch (error) {
        console.error("Service error:", error);
        throw error;
    }
    } catch (error) {
        console.error("Service error:", error);
        throw error;
    }
    } catch (error) {
        console.error("Service error:", error);
        throw error;
    }
