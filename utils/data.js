// TODO: Build data set arrays and functions to generate random data

// seed arrays

// names array
const names = [
    "Tom",
    "Dave",
    "Patrick",
    "Fleece",
    "Kim",
    "James",
    "Emma",
    "Oliver",
    "Ava",
    "William",
    "Sophia",
    "Benjamin",
    "Isabella",
    "Mia",
    "Ethan",
    "Charlotte",
    "Noah",
    "Amelia",
    "Lucas",
    "Harper",
    "Liam",
    "Evelyn",
    "Mason",
    "Abigail",
    "Logan",
    "Emily",
    "Jackson",
    "Ella",
    "Alexander",
    "Madison",
    "Sebastian",
    "Scarlett",
    "Michael",
    "Victoria",
    "Elijah",
    "Grace",
    "Daniel",
    "Chloe",
    "Matthew",
    "Lily",
    "Aiden",
    "Aria",
    "Henry",
    "Penelope",
    "Joseph",
    "Avery",
    "Samuel",
    "Mila",
    "David",
    "Aurora",
    "Owen",
    "Hazel",
    "Wyatt",
    "Sofia",
    "John",
    "Nora",
    "Jonathan",
    "Ellie",
    "Caleb",
    "Aubrey",
    "Isaac",
    "Addison",
    "Luke",
    "Stella",
    "Ezra",
    "Bella",
];

// emails array
const emailAddresses = [];

// thoughts array
const thoughts =  [
    "The road not taken leads to new discoveries.",
    "In the middle of difficulty lies opportunity.",
    "Hope is the thing with feathers that perches in the soul.",
    "Do not go gentle into that good night.",
    "Beauty is truth, truth beauty.",
    "I wandered lonely as a cloud.",
    "To be or not to be, that is the question.",
    "Hope springs eternal in the human breast.",
    "The best is yet to be.",
    "I have measured out my life with coffee spoons."
];


// TODO: build functions to randomise the array data

// random getter for any array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

function getRandomInt () {
    Math.floor(Math.random() * 5);
}

const getRandomEmail = () => {
for (let i = 0; i < 10; i++) {
  const username = Math.random().toString(36).substring(2, 8); // Generates a random username
  const domain = Math.random().toString(36).substring(2, 8) + '.com'; // Generates a random domain
  const emailAddress = `${username}@${domain}`;
  emailAddresses.push(emailAddress);
}};

const getRandomThought = () => { // Iterate over thoughts array and choose one. 
    for (let i = 0; i < thoughts.length; i++) {
        const randomThought = thoughts[i];
        return randomThought;
    }
};

// random username generator
const getRandomUserName = () =>
  `${getRandomArrItem(names)}`+getRandomInt();

// export the functions.

module.exports = { getRandomArrItem, getRandomEmail, getRandomUserName, getRandomThought };

