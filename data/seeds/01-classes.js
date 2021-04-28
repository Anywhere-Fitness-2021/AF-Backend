
exports.seed = function(knex) {
  return knex("Classes").insert([
    {
      ClassId: 99,
      Name: "Hill Sprints",
      Type: "High Intensity Interval Training",
      StartTime: "2PM",
      Duration: "25 Minutes",
      IntensityLevel: "Hard",
      Location: "North Mountain",
      Attendees: 20,
      MaxClassSize: 20,
    },
    {
      ClassId: 98,
      Name: "Push & Pull Movements",
      Type: "Weight Lifting",
      StartTime: "1PM",
      Duration: "35 Minutes",
      IntensityLevel: "Medium",
      Location: "Gym",
      Attendees: 10,
      MaxClassSize: 20,
    },
    {
      ClassId: 97,
      Name: "Perfecting The Squat & Deadlift",
      Type: "Weight Lifting",
      StartTime: "1PM",
      Duration: "35 Minutes",
      IntensityLevel: "Medium",
      Location: "Gym",
      Attendees: 15,
      MaxClassSize: 20,
    }
  ])
};
