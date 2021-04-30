const request = require("supertest");
const db = require("../dbconfig");
const server = require("../api/server");

const ClassOne = {
    ClassId: 100,
    Name: "Upper Body Lifts",
    Type: "Strength Training",
    StartTime: "12PM",
    Duration: "25 Minutes",
    IntensityLevel: "Hard",
    Location: "North Mountain",
    Attendees: 20,
    MaxClassSize: 20,
  };
const ClassTwo=
  {
    ClassId: 101,
    Name: "Lower Body Lifts",
    Type: "Strength Training",
    StartTime: "1PM",
    Duration: "35 Minutes",
    IntensityLevel: "Medium",
    Location: "Gym",
    Attendees: 10,
    MaxClassSize: 20,
  };

//Rollback and Deploy Database before everything 
beforeAll(async()=>{
    await db.migrate.rollback();
    await db.migrate.latest();
})

//Eliminate excess / added rows from other tests prior to each consecutive test 
beforeEach(async()=>{
    await db("classes").truncate();
})

//Destroy additions/changes to database after tests 
afterAll(async()=>{
    await db.destroy();
})

describe("server", ()=>{
  describe("GET All Classes", ()=>{
    it("Responds With 200 Status", async()=>{

      const actual = await request(server).get("/api/classes");
      const expected = 200;
      expect(actual.status).toEqual(expected);


    })
  })
})