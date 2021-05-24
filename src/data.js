const data = [
  {
    id: 1,
    name: "Rock",
    code: "rc",
    image:
      "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5NjIyODM0ODM2ODc0Mzc3/dwayne-the-rock-johnson-gettyimages-1061959920.jpg",
  },
  {
    id: 2,
    name: "Paper",
    code: "pa",
    image:
      "https://images.pexels.com/photos/268349/pexels-photo-268349.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: 3,
    name: "Scissors",
    code: "sc",
    image:
      "https://5.imimg.com/data5/CS/UQ/MY-3181807/fabric-cutting-scissor-500x500.jpg",
  },
  {
    id: 4,
    name: "Lizard",
    code: "lz",
    image:
      "https://i.pinimg.com/originals/ee/49/7f/ee497f391ea385c8aa57595dfa8f4312.jpg",
  },
  {
    id: 5,
    name: "Spock",
    code: "sp",
    image:
      "https://www.writeups.org/wp-content/uploads/Spock-Star-Trek-Leonard-Nimoy.jpg",
  },
];

const p1Data = data[Math.floor(Math.random() * data.length)];
const p2Data = data[Math.floor(Math.random() * data.length)];

const p1 = p1Data.code;
const p2 = p2Data.code;
let win = -1;

// rc, pa, sc, lz, sp

if (p1 === p2) win = 0;
else if (p1 === "rc") {
  if (p2 === "lz" || p2 === "sc") win = 1;
  else win = -1;
} else if (p1 === "pa") {
  if (p2 === "rc" || p2 === "sp") win = 1;
  else win = -1;
} else if (p1 === "lz") {
  if (p2 === "sp" || p2 === "pa") win = 1;
  else win = -1;
} else if (p1 === "sc") {
  if (p2 === "lz" || p2 === "pa") win = 1;
  else win = -1;
} else {
  if (p2 === "rc" || p2 === "sc") win = 1;
  else win = -1;
}

const gameData = {
  first: p1Data,
  second: p2Data,
  result: win,
};

console.log(gameData);

export default gameData;
