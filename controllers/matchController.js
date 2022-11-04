const { Op } = require("sequelize");
const { bulkSchedule, getEach7Day } = require("../helpers/getEach7Day");
const {
  Match,
  Class,
  ClassCategory,
  Orphan,
  sequelize,
  Volunteer,
} = require("../models/");

class matchController {
  static async RequestToMatch(req, res, next) {
    const t = await sequelize.transaction();
    try {
      let { id } = req.user;
      await Match.create(
        {
          OrphanId: id,
        },
        { transaction: t }
      );
      t.commit();
      res.status(201).json({ message: "Create Request Success" });
    } catch (error) {
      t.rollback();
      next(error);
    }
  }

  static async getAllMatch(req, res, next) {
    try {
      let response = await Match.findAll({
        include: [Orphan, Volunteer],
        where: {
          VolunteerId: {
            [Op.is]: null,
          },
        },
      });
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  static async AddVolunteerToMatch(req, res, next) {
    const t = await sequelize.transaction();
    try {
      let { matchId } = req.params;
      let VolunteerId = req.user.id;
      let { startDate, hour } = req.body;
      if (!startDate || !hour) throw { name: "required" };
      let endDate = getEach7Day(startDate, 11);
      let volunteerMatch = await Volunteer.findByPk(VolunteerId, {
        include: [Match],
      });
      if (volunteerMatch.matchStatus === "alreadyMatch") {
        throw { name: "Kakak already has Adik" };
      }
      let matchData = await Match.findByPk(matchId, { transaction: t });
      if (!matchData) {
        throw { name: "Data Not Found" };
      }
      let orphanMatch = await Orphan.findByPk(matchData.OrphanId);
      if (orphanMatch.matchStatus === "alreadyMatch") {
        throw { name: "Adik already been choose by other kakak" };
      }
      await Match.update(
        { VolunteerId, OrphanId: matchData.OrphanId, startDate, hour, endDate },
        {
          where: {
            id: matchId,
          },
          transaction: t,
        }
      );
      await Volunteer.update(
        {
          matchStatus: "alreadyMatch",
        },
        {
          where: {
            id: volunteerMatch.id,
          },
          transaction: t,
        }
      );
      await Orphan.update(
        {
          matchStatus: "alreadyMatch",
        },
        {
          where: {
            id: orphanMatch.id,
          },
          transaction: t,
        }
      );
      let schedule = bulkSchedule(matchId, startDate);
      await Class.bulkCreate(schedule, { transaction: t });
      await t.commit();
      res
        .status(201)
        .json({ message: "Submit Success, and Schedule has been created" });
    } catch (error) {
      await t.rollback();
      console.log(error);
      next(error);
    }
  }
}
module.exports = matchController;
