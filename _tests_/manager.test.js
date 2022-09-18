const Employee = require("../lib/Employee")

describe("Manager", () => {
    it("returns employee info", () => {
        const answers = {
            name: "Isaac Harris",
            id: "56",
            email: "IsaacTest@gmail.com",
            role: "manager",
            phone: "8015555555",

        }
        const Isaac = new Employee(
            answers.name,
            answers.id,
            answers.email,
            answers.phone
          )
      
          expect(Isaac.name).toEqual("Isaac Harris")
          expect(Isaac.id).toEqual("56")
          expect(Isaac.email).toEqual("IsaacTest@gmail.com")
          expect(Isaac.role).toEqual("employee")
        })
    })