const postUser = async (user) => {
  try {
    let res = await fetch("https://mockend.com/api/pgilgunn/coding-test/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    let data = res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default postUser;
