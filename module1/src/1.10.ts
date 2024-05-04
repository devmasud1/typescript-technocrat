{
  //union types

  type FrontendDeveloper = "Fresher Developer" | "Junior Developer";
  type FullStackDeveloper = "MERN Developer" | "Senior Developer";

  type Developer = FrontendDeveloper | FullStackDeveloper;

  const newDeveloper: FrontendDeveloper = "Junior Developer";
  const expertDeveloper: FullStackDeveloper = "Senior Developer";

  const uniqueDeveloper: Developer = "MERN Developer";

  type User = {
    name: string;
    email?: string;
    gender: "male" | "female";
    bloodGroup: "A+" | "A-" | "AB+" | "AB-";
  };

  const user1: User = {
    name: "emi",
    gender: "female",
    bloodGroup: "AB+",
  };

  //intersection types
  type FrontendDeveloper1 = {
    skill: string[];
    designation1: "Frontend Developer";
  };
  type BackendDeveloper1 = {
    skill: string[];
    designation2: "Backend Developer";
  };
  type FullStackDeveloper1 = FrontendDeveloper1 & BackendDeveloper1;

  const fullStackDeveloper: FullStackDeveloper1 = {
    skill: ["node", "express", "mongodb"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };
}
