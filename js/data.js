// Geographic Quiz Data
const quizData = {
    capitals: [
        {
            question: "What is the capital of France?",
            answers: ["London", "Berlin", "Paris", "Madrid"],
            correct: 2,
            difficulty: "easy"
        },
        {
            question: "What is the capital of Japan?",
            answers: ["Seoul", "Tokyo", "Beijing", "Bangkok"],
            correct: 1,
            difficulty: "easy"
        },
        {
            question: "What is the capital of Australia?",
            answers: ["Sydney", "Melbourne", "Canberra", "Perth"],
            correct: 2,
            difficulty: "medium"
        },
        {
            question: "What is the capital of Canada?",
            answers: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
            correct: 3,
            difficulty: "easy"
        },
        {
            question: "What is the capital of Brazil?",
            answers: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
            correct: 2,
            difficulty: "medium"
        },
        {
            question: "What is the capital of Kazakhstan?",
            answers: ["Almaty", "Astana", "Shymkent", "Aktobe"],
            correct: 1,
            difficulty: "hard"
        },
        {
            question: "What is the capital of South Africa?",
            answers: ["Johannesburg", "Cape Town", "Pretoria", "Durban"],
            correct: 2,
            difficulty: "medium"
        },
        {
            question: "What is the capital of Thailand?",
            answers: ["Bangkok", "Chiang Mai", "Phuket", "Pattaya"],
            correct: 0,
            difficulty: "easy"
        },
        {
            question: "What is the capital of Norway?",
            answers: ["Stockholm", "Copenhagen", "Helsinki", "Oslo"],
            correct: 3,
            difficulty: "medium"
        },
        {
            question: "What is the capital of New Zealand?",
            answers: ["Auckland", "Wellington", "Christchurch", "Hamilton"],
            correct: 1,
            difficulty: "medium"
        },
        {
            question: "What is the capital of Mongolia?",
            answers: ["Ulaanbaatar", "Erdenet", "Darkhan", "Choibalsan"],
            correct: 0,
            difficulty: "hard"
        },
        {
            question: "What is the capital of Sri Lanka?",
            answers: ["Colombo", "Sri Jayawardenepura Kotte", "Kandy", "Galle"],
            correct: 1,
            difficulty: "hard"
        }
    ],
    
    countries: [
        {
            question: "Which country has the largest population in the world?",
            answers: ["India", "China", "United States", "Indonesia"],
            correct: 0,
            difficulty: "easy"
        },
        {
            question: "Which country is known as the Land of the Rising Sun?",
            answers: ["China", "South Korea", "Japan", "Thailand"],
            correct: 2,
            difficulty: "easy"
        },
        {
            question: "Which country has the most time zones?",
            answers: ["Russia", "United States", "China", "Canada"],
            correct: 0,
            difficulty: "medium"
        },
        {
            question: "Which is the smallest country in the world?",
            answers: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
            correct: 1,
            difficulty: "medium"
        },
        {
            question: "Which country is both in Europe and Asia?",
            answers: ["Russia", "Turkey", "Kazakhstan", "All of the above"],
            correct: 3,
            difficulty: "hard"
        },
        {
            question: "Which country has the longest coastline?",
            answers: ["Australia", "Russia", "Canada", "Norway"],
            correct: 2,
            difficulty: "hard"
        },
        {
            question: "Which country is landlocked and located in South America?",
            answers: ["Uruguay", "Paraguay", "Bolivia", "Both B and C"],
            correct: 3,
            difficulty: "medium"
        },
        {
            question: "Which country was formerly known as Burma?",
            answers: ["Cambodia", "Myanmar", "Laos", "Vietnam"],
            correct: 1,
            difficulty: "medium"
        },
        {
            question: "Which country has the most natural lakes?",
            answers: ["Finland", "Canada", "Russia", "Sweden"],
            correct: 1,
            difficulty: "hard"
        },
        {
            question: "Which country spans the most latitude?",
            answers: ["Russia", "Chile", "Canada", "Argentina"],
            correct: 1,
            difficulty: "hard"
        }
    ],
    
    landmarks: [
        {
            question: "In which country would you find Machu Picchu?",
            answers: ["Colombia", "Peru", "Ecuador", "Bolivia"],
            correct: 1,
            difficulty: "easy"
        },
        {
            question: "The Great Wall of China was built primarily to protect against invasions from which direction?",
            answers: ["South", "East", "North", "West"],
            correct: 2,
            difficulty: "medium"
        },
        {
            question: "In which city would you find the Colosseum?",
            answers: ["Athens", "Rome", "Naples", "Florence"],
            correct: 1,
            difficulty: "easy"
        },
        {
            question: "Which landmark is located in India?",
            answers: ["Angkor Wat", "Taj Mahal", "Borobudur", "Petra"],
            correct: 1,
            difficulty: "easy"
        },
        {
            question: "The ancient city of Petra is located in which country?",
            answers: ["Egypt", "Jordan", "Syria", "Lebanon"],
            correct: 1,
            difficulty: "medium"
        },
        {
            question: "Which landmark is NOT one of the Seven Wonders of the Ancient World?",
            answers: ["Hanging Gardens of Babylon", "Colossus of Rhodes", "Taj Mahal", "Lighthouse of Alexandria"],
            correct: 2,
            difficulty: "hard"
        },
        {
            question: "Stonehenge is located in which country?",
            answers: ["Ireland", "Scotland", "Wales", "England"],
            correct: 3,
            difficulty: "easy"
        },
        {
            question: "Mount Rushmore features the faces of how many presidents?",
            answers: ["3", "4", "5", "6"],
            correct: 1,
            difficulty: "medium"
        },
        {
            question: "The ancient ruins of Angkor Wat are located in which country?",
            answers: ["Thailand", "Vietnam", "Cambodia", "Laos"],
            correct: 2,
            difficulty: "medium"
        },
        {
            question: "Which landmark was built as a mausoleum?",
            answers: ["Eiffel Tower", "Big Ben", "Taj Mahal", "Statue of Liberty"],
            correct: 2,
            difficulty: "medium"
        }
    ],
    
    flags: [
        {
            question: "Which country's flag has a maple leaf?",
            answers: ["United States", "Canada", "Australia", "New Zealand"],
            correct: 1,
            difficulty: "easy"
        },
        {
            question: "Which country's flag is completely red with a yellow star?",
            answers: ["China", "Vietnam", "North Korea", "Cuba"],
            correct: 1,
            difficulty: "medium"
        },
        {
            question: "Which country has a flag with a white cross on a red background?",
            answers: ["Norway", "Denmark", "Switzerland", "Sweden"],
            correct: 2,
            difficulty: "medium"
        },
        {
            question: "The Union Jack is the flag of which country?",
            answers: ["Australia", "New Zealand", "United Kingdom", "Canada"],
            correct: 2,
            difficulty: "easy"
        },
        {
            question: "Which country's flag has a sun with a face?",
            answers: ["Argentina", "Uruguay", "Both A and B", "Brazil"],
            correct: 2,
            difficulty: "hard"
        },
        {
            question: "Which country's flag has the most stars?",
            answers: ["United States", "China", "Brazil", "Australia"],
            correct: 2,
            difficulty: "hard"
        },
        {
            question: "Which country's flag is a simple green rectangle?",
            answers: ["Ireland", "Libya", "Saudi Arabia", "Pakistan"],
            correct: 1,
            difficulty: "hard"
        },
        {
            question: "Which Nordic country's flag has a red background with a white cross?",
            answers: ["Sweden", "Finland", "Denmark", "Iceland"],
            correct: 2,
            difficulty: "medium"
        },
        {
            question: "Which country's flag has a cedar tree?",
            answers: ["Lebanon", "Cyprus", "Malta", "Morocco"],
            correct: 0,
            difficulty: "hard"
        },
        {
            question: "The flag with red and white stripes and a blue canton with stars belongs to which country?",
            answers: ["Liberia", "United States", "Malaysia", "All of the above"],
            correct: 3,
            difficulty: "hard"
        }
    ],
    
    lund: [
        {
            question: "When was Lund University founded?",
            answers: ["1666", "1676", "1686", "1696"],
            correct: 1,
            difficulty: "medium"
        },
        {
            question: "What is the most famous landmark in Lund?",
            answers: ["City Hall", "Lund Cathedral", "The Castle", "Main Square"],
            correct: 1,
            difficulty: "easy"
        },
        {
            question: "Which architectural style is Lund Cathedral primarily built in?",
            answers: ["Gothic", "Baroque", "Romanesque", "Renaissance"],
            correct: 2,
            difficulty: "medium"
        },
        {
            question: "What is the name of Lund's main pedestrian street?",
            answers: ["Storgatan", "Drottninggatan", "Kungsgatan", "Stora Södergatan"],
            correct: 3,
            difficulty: "medium"
        },
        {
            question: "Lund was founded approximately in which century?",
            answers: ["9th century", "10th century", "11th century", "12th century"],
            correct: 1,
            difficulty: "hard"
        },
        {
            question: "What is the famous astronomical clock in Lund Cathedral called?",
            answers: ["Horologium Lundense", "The Lund Clock", "Sankt Laurentius Clock", "The Cathedral Timekeeper"],
            correct: 0,
            difficulty: "hard"
        },
        {
            question: "Which Swedish region is Lund located in?",
            answers: ["Västergötland", "Skåne", "Småland", "Halland"],
            correct: 1,
            difficulty: "easy"
        },
        {
            question: "What happens in Lund Cathedral's astronomical clock at noon and 3 PM?",
            answers: ["Bells ring loudly", "Doors open to reveal figures", "Music plays", "Knights joust"],
            correct: 1,
            difficulty: "medium"
        },
        {
            question: "Lund was historically part of which country before Sweden?",
            answers: ["Norway", "Denmark", "Germany", "Poland"],
            correct: 1,
            difficulty: "medium"
        },
        {
            question: "What is the name of Lund's famous botanical garden?",
            answers: ["Lundagård", "Botaniska trädgården", "Stadsparken", "Universitetsträdgården"],
            correct: 1,
            difficulty: "hard"
        },
        {
            question: "Which famous physicist studied at Lund University?",
            answers: ["Niels Bohr", "Manne Siegbahn", "Anders Celsius", "Carl Linnaeus"],
            correct: 1,
            difficulty: "hard"
        },
        {
            question: "What is the student carnival in Lund called?",
            answers: ["Lundakarnevalen", "Studentfest", "Valborgsmässoafton", "Akademiska festen"],
            correct: 0,
            difficulty: "medium"
        },
        {
            question: "In which year did Lund become part of Sweden?",
            answers: ["1658", "1668", "1678", "1688"],
            correct: 0,
            difficulty: "hard"
        },
        {
            question: "What is the name of the park in central Lund?",
            answers: ["Centralparken", "Lundagård", "Stadsparken", "Universitetparken"],
            correct: 1,
            difficulty: "easy"
        },
        {
            question: "Lund Cathedral was consecrated to which saint?",
            answers: ["Saint Erik", "Saint Lawrence", "Saint Olaf", "Saint Bridget"],
            correct: 1,
            difficulty: "hard"
        },
        {
            question: "What is Lund University's motto?",
            answers: ["Ad astra", "Regia Academia", "Ad utrumque paratus", "Veritas et Utilitas"],
            correct: 2,
            difficulty: "hard"
        },
        {
            question: "Which building houses Lund University's main library?",
            answers: ["University Main Building", "Carolina Rediviva", "Universitetsbiblioteket", "AF-borgen"],
            correct: 2,
            difficulty: "medium"
        },
        {
            question: "What color are the characteristic student caps worn in Lund?",
            answers: ["Blue", "Red", "White", "Green"],
            correct: 2,
            difficulty: "easy"
        },
        {
            question: "The Treaty of Roskilde in 1658 resulted in what for Lund?",
            answers: ["Independence", "Transfer from Denmark to Sweden", "University founding", "Cathedral construction"],
            correct: 1,
            difficulty: "hard"
        },
        {
            question: "What is the approximate current population of Lund?",
            answers: ["70,000", "95,000", "125,000", "150,000"],
            correct: 2,
            difficulty: "medium"
        }
    ]
};

// Function to get questions by category and difficulty
function getQuestions(category, difficulty, count) {
    const categoryQuestions = quizData[category] || [];
    
    // Filter by difficulty
    let filteredQuestions = categoryQuestions;
    if (difficulty !== 'all') {
        const difficultyLevels = {
            'easy': ['easy'],
            'medium': ['easy', 'medium'],
            'hard': ['easy', 'medium', 'hard']
        };
        filteredQuestions = categoryQuestions.filter(q => 
            difficultyLevels[difficulty].includes(q.difficulty)
        );
    }
    
    // Shuffle questions
    const shuffled = [...filteredQuestions].sort(() => Math.random() - 0.5);
    
    // Return requested count
    return shuffled.slice(0, count);
}

// Function to get random questions from all categories
function getMixedQuestions(difficulty, count) {
    const allQuestions = [];
    
    // Collect all questions from all categories
    Object.values(quizData).forEach(categoryQuestions => {
        allQuestions.push(...categoryQuestions);
    });
    
    // Filter by difficulty
    let filteredQuestions = allQuestions;
    if (difficulty !== 'all') {
        const difficultyLevels = {
            'easy': ['easy'],
            'medium': ['easy', 'medium'],
            'hard': ['easy', 'medium', 'hard']
        };
        filteredQuestions = allQuestions.filter(q => 
            difficultyLevels[difficulty].includes(q.difficulty)
        );
    }
    
    // Shuffle and return
    const shuffled = [...filteredQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}
