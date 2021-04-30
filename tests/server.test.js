const request = require("supertest");
const db = require("../dbconfig");
const server = require("../api/server");

//Mock Data For Classes API 

let ClassOne = {
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
let ClassTwo=
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

  //Mock Data For Users API

  let UserOne = { Username: "Tron", Password: "1234", Role: "Instructor" }
  let UserTwo = { Username: "Rinzler", Password: "1234", Role: "Student" }

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
    it("Returns right number of classes", async()=>{

      await db("classes").insert(ClassOne);
      let res = await request(server).get("/api/classes");
      expect(res.body).toHaveLength(1);

    })
  })
  describe("POST New Class", ()=>{
    it("Responds With 200 Status", async()=>{

      const actual = await request(server).post("/api/classes").send(ClassOne);
      const expected = 200;
      expect(actual.status).toEqual(expected);
    })
    it("Returns right number of classes", async()=>{

      let actual = await request(server).post("/api/classes").send(ClassOne);
      expect(actual.body[0]).toMatchObject({Id: 3, ...ClassOne});

      actual = await request(server).post("/api/classes").send(ClassTwo);
      expect(actual.body[0]).toMatchObject({ Id: 4, ...ClassTwo }); 

    })
  })
  describe("GET All Users", ()=>{
    it("Responds with 200 Status", async()=>{

      const actual = await request(server).get("/api/users");
      const expected = 200;
      expect(actual.status).toEqual(expected);
    })
    it("Returns right number of users", async()=>{

      await db("users").insert(UserOne);
      const actual = await request(server).get("/api/users");
      const expected = 1;

      expect(actual.body).toHaveLength(1);
      expect(actual.body.length).toEqual(expected);

    })
  })
  describe("POST New Registration", ()=>{
    it("Responds with 200 Status", async()=>{

      const actual = await request(server).post("/api/users/register").send(UserOne);
      const expected = 200;
      expect(actual.status).toEqual(expected);
    })
    it("Returns right number of users", async()=>{

      const actual = await request(server).post("/api/users/register").send(UserOne);
      expect(actual.body[0]).toMatchObject({ Id: 1, ...UserOne })

    })
  })
})