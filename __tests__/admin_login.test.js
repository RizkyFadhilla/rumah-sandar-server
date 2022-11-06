const app = require("../app");
const request = require("supertest");
const { Volunteer, Admin, Orphan, Orphanage, Match, sequelize } = require("../models");
const { signPayloadToToken } = require("../helpers/helpers");

const { queryInterface } = sequelize;

let validToken, invalidToken, orphanId;

const admin = {
  email: "lanny@mail.com",
  password: "123456",
  role: "admin",
};

beforeAll((done) => {
  Admin.create(admin)
    .then((adminRegist) => {
      validToken = signPayloadToToken({
        id: adminRegist.id,
        email: adminRegist.email,
      });
      invalidToken = "invalid";
      return queryInterface.bulkInsert("Volunteers", [
        {
          email: "volunteer12@mail.com",
          password: "123456",
          fullName: "volunteer1",
          imageUrl: "https://test.jpg",
          linkedinUrl: "test.com",
          curriculumVitae: "url.com",
          lastEducation: "SMA",
          createdAt: new Date(),
          updatedAt: new Date(),
          role: "volunteer",
          verified: false,
          matchStatus: "notMatch",
        },
      ]);
    })
    .then(() => {
      return queryInterface.bulkInsert("Orphanages", [
        {
          name: "Panti Asuhan Yayasan Alpha Indonesia (YAI)",
          address:
            "Jl. Subur Pertamina RT. 005 RW. 002 No. 27 Kelurahan Pondok Ranggon Kecamatan Cipayung Jakarta Timur.",
          personInCharge: "Fadhillah Ihsan",
          imageUrl:
            "https://yayasanalphaindonesia.org/wp-content/uploads/2019/09/IMG-20190909-WA0042.jpg",
            createdAt: new Date(),
            updatedAt: new Date(),
        },
      ]);
    })
    .then(() => {
      return queryInterface.bulkInsert("Orphans", [
        {
          email: "orphan@mail.com",
          password: "123456",
          fullName: "orphan1",
          imageUrl: "https://test.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          role: "orphan",
          OrphanageId: 1,
          verified: false,
          matchStatus: "notMatch",
        },
      ]);
    })

    .then(() => {
      done();
    })

    .catch((err) => {
      done(err);
    });
});

afterAll((done) => {
  Admin.destroy({ truncate: true, cascade: true, restartIdentity: true })
    .then(() => {
      return Volunteer.destroy({
        truncate: true,
        cascade: true,
        restartIdentity: true,
      });
    })
    .then((_) => {
      return Orphan.destroy({
        truncate: true,
        cascade: true,
        restartIdentity: true,
      });
    })
    .then((_) => {
      return Orphanage.destroy({
        truncate: true,
        cascade: true,
        restartIdentity: true,
      });
    })
    .then((_) => {
      done();
    })
    .catch((err) => {
      done(err);
    });
});

describe("GET /volunteers", () => {
  describe("Success attempts", () => {
    describe("Fetching with valid token", () => {
      it("Should return status code 200", async () => {
        const response = await request(app)
          .get("/admin/volunteers")
          .set("access_token", validToken);
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBeTruthy();
        expect(response.body.length).toBeGreaterThan(0);
      });
    });
  });
  describe("Failed attempts", () => {
    describe("Fetching with invalid token", () => {
      it("Should return status code 401", async () => {
        const response = await request(app)
          .get("/admin/volunteers")
          .set("access_token", invalidToken);
        expect(response.status).toBe(401);
        expect(response.body).toHaveProperty("message", "Unauthorized");
      });
    });
  });
});

describe("PATCH /orphan/:orphanId", () => {
  describe("Success attempt", () => {
    describe("Updating with valid token", () => {
      it("Should return status code 200", async () => {
        const response = await request(app)
          .put("/admin/orphan/1")
          .set( "access_token", validToken );
        const { body, status } = response;
        expect(status).toBe(200);
        expect(body).toHaveProperty("msg", expect.any(String));
      });
    });
  });
  describe("Failed attempt", () => {
    describe("Updating with invalid token", () => {
      it("Should return statuc code 401", async () => {
        const response = await request(app)
          .put("/admin/orphan/1")
          .set( "access_token", invalidToken );
        expect(response.status).toBe(401);
        expect(response.body).toHaveProperty("message", "Unauthorized");
      });
    });
    describe("Updating with empty params or the content is not found", () => {
      it("Should return status code 404", async () => {
        const response = await request(app)
          .put("/admin/orphan/10")
          .set( "access_token", validToken );
        const { body, status } = response;
        expect(status).toBe(404);
        expect(body).toHaveProperty("message", expect.any(String));
      });
    });
  });
});
