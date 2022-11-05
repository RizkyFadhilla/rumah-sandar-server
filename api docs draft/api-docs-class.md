## 1. GET http://localhost:3000/classes

# Input :

```js
req.headers :{
    "access_token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6InZvbHVudGVlciIsImlhdCI6MTY2NzU5MTM5NX0.-cdCgkGq11iX_lVyy1Zm_v3_-4X_6iEwZTqLLZ6uUdI"
}
//you can choose login with volunteer or orphan because it from req user
```

# output :

```js
[
  {
    id: 1,
    VolunteerId: 1,
    OrphanId: 1,
    startDate: "2022-11-05T00:00:00.000Z",
    hour: "13:00:00",
    endDate: "2023-01-21T00:00:00.000Z",
    createdAt: "2022-11-04T20:24:28.884Z",
    updatedAt: "2022-11-04T20:48:20.798Z",
    Classes: [
      {
        id: 1,
        MatchId: 1,
        description: "This is Bahasa Indonesia Class",
        date: "2022-11-05T00:00:00.000Z",
        ClassCategoryId: 1,
        verifiedByOrphan: null,
        verifiedByVolunteer: null,
        createdAt: "2022-11-04T20:48:20.846Z",
        updatedAt: "2022-11-04T20:48:20.846Z",
      },
      {
        id: 2,
        MatchId: 1,
        description: "This is Matemathic Class",
        date: "2022-11-12T00:00:00.000Z",
        ClassCategoryId: 2,
        verifiedByOrphan: null,
        verifiedByVolunteer: null,
        createdAt: "2022-11-04T20:48:20.846Z",
        updatedAt: "2022-11-04T20:48:20.846Z",
      },
      {
        id: 3,
        MatchId: 1,
        description: "This is Physic Class",
        date: "2022-11-19T00:00:00.000Z",
        ClassCategoryId: 3,
        verifiedByOrphan: null,
        verifiedByVolunteer: null,
        createdAt: "2022-11-04T20:48:20.846Z",
        updatedAt: "2022-11-04T20:48:20.846Z",
      },
      {
        id: 4,
        MatchId: 1,
        description: "This is Pancasila Class",
        date: "2022-11-26T00:00:00.000Z",
        ClassCategoryId: 4,
        verifiedByOrphan: null,
        verifiedByVolunteer: null,
        createdAt: "2022-11-04T20:48:20.846Z",
        updatedAt: "2022-11-04T20:48:20.846Z",
      },
      {
        id: 5,
        MatchId: 1,
        description: "This is History Class",
        date: "2022-12-03T00:00:00.000Z",
        ClassCategoryId: 5,
        verifiedByOrphan: null,
        verifiedByVolunteer: null,
        createdAt: "2022-11-04T20:48:20.846Z",
        updatedAt: "2022-11-04T20:48:20.846Z",
      },
      {
        id: 6,
        MatchId: 1,
        description: "This is Culture Class",
        date: "2022-12-10T00:00:00.000Z",
        ClassCategoryId: 6,
        verifiedByOrphan: null,
        verifiedByVolunteer: null,
        createdAt: "2022-11-04T20:48:20.846Z",
        updatedAt: "2022-11-04T20:48:20.846Z",
      },
      {
        id: 7,
        MatchId: 1,
        description: "This is Bahasa Indonesia Class",
        date: "2022-12-17T00:00:00.000Z",
        ClassCategoryId: 1,
        verifiedByOrphan: null,
        verifiedByVolunteer: null,
        createdAt: "2022-11-04T20:48:20.846Z",
        updatedAt: "2022-11-04T20:48:20.846Z",
      },
      {
        id: 8,
        MatchId: 1,
        description: "This is Matemathic Class",
        date: "2022-12-24T00:00:00.000Z",
        ClassCategoryId: 2,
        verifiedByOrphan: null,
        verifiedByVolunteer: null,
        createdAt: "2022-11-04T20:48:20.846Z",
        updatedAt: "2022-11-04T20:48:20.846Z",
      },
      {
        id: 9,
        MatchId: 1,
        description: "This is Physic Class",
        date: "2022-12-31T00:00:00.000Z",
        ClassCategoryId: 3,
        verifiedByOrphan: null,
        verifiedByVolunteer: null,
        createdAt: "2022-11-04T20:48:20.846Z",
        updatedAt: "2022-11-04T20:48:20.846Z",
      },
      {
        id: 10,
        MatchId: 1,
        description: "This is Pancasila Class",
        date: "2023-01-07T00:00:00.000Z",
        ClassCategoryId: 4,
        verifiedByOrphan: null,
        verifiedByVolunteer: null,
        createdAt: "2022-11-04T20:48:20.846Z",
        updatedAt: "2022-11-04T20:48:20.846Z",
      },
      {
        id: 11,
        MatchId: 1,
        description: "This is History Class",
        date: "2023-01-14T00:00:00.000Z",
        ClassCategoryId: 5,
        verifiedByOrphan: null,
        verifiedByVolunteer: null,
        createdAt: "2022-11-04T20:48:20.846Z",
        updatedAt: "2022-11-04T20:48:20.846Z",
      },
      {
        id: 12,
        MatchId: 1,
        description: "This is Culture Class",
        date: "2023-01-21T00:00:00.000Z",
        ClassCategoryId: 6,
        verifiedByOrphan: null,
        verifiedByVolunteer: null,
        createdAt: "2022-11-04T20:48:20.846Z",
        updatedAt: "2022-11-04T20:48:20.846Z",
      },
    ],
  },
];
```

## 2 GET http://localhost:3000/classes/1

# Input :

```js
req.params : matchId
req.headers :{
    "access_token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6InZvbHVudGVlciIsImlhdCI6MTY2NzU5MTM5NX0.-cdCgkGq11iX_lVyy1Zm_v3_-4X_6iEwZTqLLZ6uUdI"
}
//you can choose login with volunteer or orphan because it from req user
```

# output :

```js
[
  {
    id: 1,
    MatchId: 1,
    description: "This is Bahasa Indonesia Class",
    date: "2022-11-05T00:00:00.000Z",
    ClassCategoryId: 1,
    verifiedByOrphan: null,
    verifiedByVolunteer: null,
    createdAt: "2022-11-04T20:48:20.846Z",
    updatedAt: "2022-11-04T20:48:20.846Z",
    ClassCategory: {
      id: 1,
      name: "Bahasa Indonesia",
      link: "https://drive.google.com/drive/folders/1CtSmvwDWkYJ-hYehnvp7MNXx6eXu9LV_?usp=share_link",
      imgUrl: "https://bit.ly/3WtIFkx",
      createdAt: "2022-11-04T19:42:59.876Z",
      updatedAt: "2022-11-04T19:42:59.876Z",
    },
  },
  {
    id: 2,
    MatchId: 1,
    description: "This is Matemathic Class",
    date: "2022-11-12T00:00:00.000Z",
    ClassCategoryId: 2,
    verifiedByOrphan: null,
    verifiedByVolunteer: null,
    createdAt: "2022-11-04T20:48:20.846Z",
    updatedAt: "2022-11-04T20:48:20.846Z",
    ClassCategory: {
      id: 2,
      name: "Matematika",
      link: "https://drive.google.com/drive/folders/1xE33PkAEM0mLljAKd4wuk3pL0Yxg9xxb?usp=share_link",
      imgUrl: "https://bit.ly/3WtIFkx",
      createdAt: "2022-11-04T19:42:59.876Z",
      updatedAt: "2022-11-04T19:42:59.876Z",
    },
  },
  {
    id: 3,
    MatchId: 1,
    description: "This is Physic Class",
    date: "2022-11-19T00:00:00.000Z",
    ClassCategoryId: 3,
    verifiedByOrphan: null,
    verifiedByVolunteer: null,
    createdAt: "2022-11-04T20:48:20.846Z",
    updatedAt: "2022-11-04T20:48:20.846Z",
    ClassCategory: {
      id: 3,
      name: "Pendidikan Jasmani",
      link: "https://drive.google.com/drive/folders/1B_OADX0v31QHyaPPL6J5nsfJ3xbxftB4?usp=share_link",
      imgUrl: "https://bit.ly/3WtIFkx",
      createdAt: "2022-11-04T19:42:59.876Z",
      updatedAt: "2022-11-04T19:42:59.876Z",
    },
  },
  {
    id: 4,
    MatchId: 1,
    description: "This is Pancasila Class",
    date: "2022-11-26T00:00:00.000Z",
    ClassCategoryId: 4,
    verifiedByOrphan: null,
    verifiedByVolunteer: null,
    createdAt: "2022-11-04T20:48:20.846Z",
    updatedAt: "2022-11-04T20:48:20.846Z",
    ClassCategory: {
      id: 4,
      name: "Pendidikan Pancasila",
      link: "https://drive.google.com/drive/folders/1dUKWBe1atPP6T_HjxaJDKPQZoG4rOUA0?usp=share_link",
      imgUrl: "https://bit.ly/3WtIFkx",
      createdAt: "2022-11-04T19:42:59.876Z",
      updatedAt: "2022-11-04T19:42:59.876Z",
    },
  },
  {
    id: 5,
    MatchId: 1,
    description: "This is History Class",
    date: "2022-12-03T00:00:00.000Z",
    ClassCategoryId: 5,
    verifiedByOrphan: null,
    verifiedByVolunteer: null,
    createdAt: "2022-11-04T20:48:20.846Z",
    updatedAt: "2022-11-04T20:48:20.846Z",
    ClassCategory: {
      id: 5,
      name: "Sejarah",
      link: "https://drive.google.com/drive/folders/1VJZsogE5WBYSIoF4bFyzoJrjPHXXzYsW?usp=share_link",
      imgUrl: "https://bit.ly/3WtIFkx",
      createdAt: "2022-11-04T19:42:59.876Z",
      updatedAt: "2022-11-04T19:42:59.876Z",
    },
  },
  {
    id: 6,
    MatchId: 1,
    description: "This is Culture Class",
    date: "2022-12-10T00:00:00.000Z",
    ClassCategoryId: 6,
    verifiedByOrphan: null,
    verifiedByVolunteer: null,
    createdAt: "2022-11-04T20:48:20.846Z",
    updatedAt: "2022-11-04T20:48:20.846Z",
    ClassCategory: {
      id: 6,
      name: "Seni Budaya",
      link: "https://drive.google.com/drive/folders/1HcbB0GHupGRw9iQEbChUIENtGEN4IMnx?usp=share_link",
      imgUrl: "https://bit.ly/3WtIFkx",
      createdAt: "2022-11-04T19:42:59.876Z",
      updatedAt: "2022-11-04T19:42:59.876Z",
    },
  },
  {
    id: 7,
    MatchId: 1,
    description: "This is Bahasa Indonesia Class",
    date: "2022-12-17T00:00:00.000Z",
    ClassCategoryId: 1,
    verifiedByOrphan: null,
    verifiedByVolunteer: null,
    createdAt: "2022-11-04T20:48:20.846Z",
    updatedAt: "2022-11-04T20:48:20.846Z",
    ClassCategory: {
      id: 1,
      name: "Bahasa Indonesia",
      link: "https://drive.google.com/drive/folders/1CtSmvwDWkYJ-hYehnvp7MNXx6eXu9LV_?usp=share_link",
      imgUrl: "https://bit.ly/3WtIFkx",
      createdAt: "2022-11-04T19:42:59.876Z",
      updatedAt: "2022-11-04T19:42:59.876Z",
    },
  },
  {
    id: 8,
    MatchId: 1,
    description: "This is Matemathic Class",
    date: "2022-12-24T00:00:00.000Z",
    ClassCategoryId: 2,
    verifiedByOrphan: null,
    verifiedByVolunteer: null,
    createdAt: "2022-11-04T20:48:20.846Z",
    updatedAt: "2022-11-04T20:48:20.846Z",
    ClassCategory: {
      id: 2,
      name: "Matematika",
      link: "https://drive.google.com/drive/folders/1xE33PkAEM0mLljAKd4wuk3pL0Yxg9xxb?usp=share_link",
      imgUrl: "https://bit.ly/3WtIFkx",
      createdAt: "2022-11-04T19:42:59.876Z",
      updatedAt: "2022-11-04T19:42:59.876Z",
    },
  },
  {
    id: 9,
    MatchId: 1,
    description: "This is Physic Class",
    date: "2022-12-31T00:00:00.000Z",
    ClassCategoryId: 3,
    verifiedByOrphan: null,
    verifiedByVolunteer: null,
    createdAt: "2022-11-04T20:48:20.846Z",
    updatedAt: "2022-11-04T20:48:20.846Z",
    ClassCategory: {
      id: 3,
      name: "Pendidikan Jasmani",
      link: "https://drive.google.com/drive/folders/1B_OADX0v31QHyaPPL6J5nsfJ3xbxftB4?usp=share_link",
      imgUrl: "https://bit.ly/3WtIFkx",
      createdAt: "2022-11-04T19:42:59.876Z",
      updatedAt: "2022-11-04T19:42:59.876Z",
    },
  },
  {
    id: 10,
    MatchId: 1,
    description: "This is Pancasila Class",
    date: "2023-01-07T00:00:00.000Z",
    ClassCategoryId: 4,
    verifiedByOrphan: null,
    verifiedByVolunteer: null,
    createdAt: "2022-11-04T20:48:20.846Z",
    updatedAt: "2022-11-04T20:48:20.846Z",
    ClassCategory: {
      id: 4,
      name: "Pendidikan Pancasila",
      link: "https://drive.google.com/drive/folders/1dUKWBe1atPP6T_HjxaJDKPQZoG4rOUA0?usp=share_link",
      imgUrl: "https://bit.ly/3WtIFkx",
      createdAt: "2022-11-04T19:42:59.876Z",
      updatedAt: "2022-11-04T19:42:59.876Z",
    },
  },
  {
    id: 11,
    MatchId: 1,
    description: "This is History Class",
    date: "2023-01-14T00:00:00.000Z",
    ClassCategoryId: 5,
    verifiedByOrphan: null,
    verifiedByVolunteer: null,
    createdAt: "2022-11-04T20:48:20.846Z",
    updatedAt: "2022-11-04T20:48:20.846Z",
    ClassCategory: {
      id: 5,
      name: "Sejarah",
      link: "https://drive.google.com/drive/folders/1VJZsogE5WBYSIoF4bFyzoJrjPHXXzYsW?usp=share_link",
      imgUrl: "https://bit.ly/3WtIFkx",
      createdAt: "2022-11-04T19:42:59.876Z",
      updatedAt: "2022-11-04T19:42:59.876Z",
    },
  },
  {
    id: 12,
    MatchId: 1,
    description: "This is Culture Class",
    date: "2023-01-21T00:00:00.000Z",
    ClassCategoryId: 6,
    verifiedByOrphan: null,
    verifiedByVolunteer: null,
    createdAt: "2022-11-04T20:48:20.846Z",
    updatedAt: "2022-11-04T20:48:20.846Z",
    ClassCategory: {
      id: 6,
      name: "Seni Budaya",
      link: "https://drive.google.com/drive/folders/1HcbB0GHupGRw9iQEbChUIENtGEN4IMnx?usp=share_link",
      imgUrl: "https://bit.ly/3WtIFkx",
      createdAt: "2022-11-04T19:42:59.876Z",
      updatedAt: "2022-11-04T19:42:59.876Z",
    },
  },
];
```