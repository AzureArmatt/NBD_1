printjson(
  db.people.find({ birth_date: { $gt: "2000-12-31T24:00:00Z" } }).toArray()
);
