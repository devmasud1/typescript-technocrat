{
  //ternary operator || optional  chaining || nullish coalescing operator
  const age: number = 18;

  if (age >= 18) {
    console.log("accepted");
  } else {
    console.log("access denied");
  }

  const isAdult = age >= 18 ? "accepted" : "access denied";
  console.log({ isAdult });

  // nullish coalescing operator --> null/undefined
  const isAuthenticated = undefined;
  const isAuthenticated1 = "";

  const result = isAuthenticated ?? "guest";
  const result1 = isAuthenticated1 ? isAuthenticated1 : "guest";
  console.log({ result }, { result1 });

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress?: string;
      permanentAddress?: string;
    };
  };

  const user: User = {
    name: "abid",
    address: {
      city: "Dhaka",
      road: "11/12",
      presentAddress: "main town",
    },
  };

  const permanentAddress =
    user?.address?.permanentAddress ?? "No address found";
  const presentAddress = user?.address?.presentAddress ?? "No address found";

  console.log({ permanentAddress }, { presentAddress });
}
