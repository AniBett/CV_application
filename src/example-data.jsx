import uniqid from "uniqid";

const exampleData = {
  personalInfo: {
    fullName: "Guy McMann",
    email: "genericemail@mail.com",
    phoneNumber: "+1 123 456 7890",
    address: "Amsterdam, NL",
  },

  sections: {
    educations: [
      {
        degree: "Bachelors in CS",
        schoolName: "Generic College",
        location: "Boston, US",
        startDate: "08/2016",
        endDate: "08/2020",
        isCollapsed: true,
        isHidden: false,
        id: uniqid(),
      },
      {
        degree: "Master's Degree in CS",
        schoolName: "Generic University",
        location: "New York City, US",
        startDate: "08/2020",
        endDate: "08/2022",
        isCollapsed: true,
        isHidden: true,
        id: uniqid(),
      },
    ],

    experiences: [
      {
        companyName: "Generic Inc.",
        positionTitle: "Full-Stack Developer",
        location: "New York City, US",
        description:
          "Did very important work that could not possibly be summarized here. Just know that I was vital to the proper functioning of the company",
        startDate: "08/2020",
        endDate: "06/2022",
        isCollapsed: true,
        isHidden: false,
        id: uniqid(),
      },
      {
        companyName: "Regular Corp.",
        positionTitle: "Senior Full-Stack Developer",
        location: "Boston, US",
        description:
          "Did very important work that could not possibly be summarized here. Just know that I was vital to the proper functioning of the company",
        startDate: "06/2022",
        endDate: "present",
        isCollapsed: true,
        isHidden: false,
        id: uniqid(),
      },
    ],
  },
};

export default exampleData;
