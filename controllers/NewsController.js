const News = require("../models/News");
const createError = require("http-errors");

exports.getPolitic = async (req, res, next) => {
  try {
    const politicNews = await News.find({category: "politic"})
    console.log('executing after responce sent')
    res.status(200).send(politicNews);
    console.log('executing after responce sent')
    console.log('executing after responce sent')
    console.log('executing after responce sent')
    console.log('executing after responce sent')
    console.log('executing after responce sent')
    console.log('executing after responce sent')
    console.log('executing after responce sent')
    console.log('executing after responce sent')
    console.log('executing after responce sent')
    console.log('executing after responce sent')
  } catch (e) {
    next(e);
  }
};
exports.getEconomic = async (req, res, next) => {
  try {
    const economicNews = await News.find({category: "economic"})
    res.status(200).send(economicNews);
  } catch (e) {
    next(e);
  }
};
exports.getSocial = async (req, res, next) => {
  try {
    const socialNews = await News.find({category: "social"})
    res.status(200).send(socialNews);
  } catch (e) {
    next(e);
  }
};
exports.getSport = async (req, res, next) => {
  try {
    const sportNews = await News.find({category: "sport"})
    res.status(200).send(sportNews);
  } catch (e) {
    next(e);
  }
};
exports.getJustitie = async (req, res, next) => {
  try {
    const justitieNews = await News.find({category: "justitie"})
    res.status(200).send(justitieNews);
  } catch (e) {
    next(e);
  }
};
exports.getToate = async (req, res, next) => {
  try {
    const ToateNews = await News.find()
    res.status(200).send(ToateNews);
  } catch (e) {
    next(e);
  }
};
