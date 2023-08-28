const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];
   
   const usernames =[]
   const winners = []


   /// 1
   gameInfo.forEach((value) =>  usernames.push(value.username + "!"))
   console.log(usernames)

   
   ///2
   gameInfo.forEach((value)=> value.score > 5 && winners.push(value.username) )
   console.log(winners)

   ///3
   let total = 0;
   gameInfo.forEach((value)=> total += value.score)
   console.log(total)

