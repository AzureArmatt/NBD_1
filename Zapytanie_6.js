printjson(
  db.people.insert({
    sex: "Male",
    first_name: "Mateusz",
    last_name: "Rogulski",
    job: "Service Manager",
    email: "m.rogulski97@gmail.com",
    location: {
      city: "Warsaw",
      address: {
        streetname: "Wierchow",
        streetnumber: "17",
      },
    },
    description: "sprawa kryzysu, brak opisu",
    height: "183.5",
    weight: "82.67",
    birth_date: "1997-10-03T19:10:58Z",
    nationality: "Moscow",
    credit: [
      {
        type: "jcb",
        number: "437684763287468",
        currency: "PLN",
        balance: "1000.86",
      },
    ],
  })
);
