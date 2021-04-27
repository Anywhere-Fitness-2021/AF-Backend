
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
    }
  ])
};
