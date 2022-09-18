const Intern = require("../lib/intern")

describe("Intern", () => {
    it("returns Interns info", () => {
        const answers = {
            name: "Isaac Harris",
            id: "56",
            email: "IsaacTest@gmail.com",

        }
        const Isaac = new Employee(
            answers.name,
            answers.id,
            answers.email,
            answers.University
          )
      
          expect(Isaac.name).toEqual("Isaac Harris")
          expect(Isaac.id).toEqual("56")
          expect(Isaac.email).toEqual("IsaacTest@gmail.com")
          expect(Isaac.role).toEqual("University")
        })
    })