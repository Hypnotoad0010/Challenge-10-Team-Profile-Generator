const Engineer = require("../lib/engineer")

describe("Engineer", () => {
    it("returns engineers info", () => {
        const answers = {
            name: "Isaac Harris",
            id: "56",
            email: "IsaacTest@gmail.com",

        }
        const Isaac = new Employee(
            answers.name,
            answers.id,
            answers.email,
            answers.github
          )
      
          expect(Isaac.name).toEqual("Isaac Harris")
          expect(Isaac.id).toEqual("56")
          expect(Isaac.email).toEqual("IsaacTest@gmail.com")
          expect(Isaac.role).toEqual("engineer")
        })
    })