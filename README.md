# Geographic Quiz

A comprehensive JavaScript-based geographic quiz web application featuring multiple quiz categories, interactive gameplay, and score tracking.

## Features

### 🌍 Quiz Categories
- **World Capitals** - Test your knowledge of capital cities
- **Countries** - Learn about nations and their characteristics  
- **Famous Landmarks** - Identify iconic monuments and locations
- **World Flags** - Recognize flags from around the globe
- **Lund, Sweden** - Explore the history and landmarks of the historic Swedish city

### 🎯 Difficulty Levels
- **Easy** (10 questions) - Basic geographic knowledge
- **Medium** (15 questions) - Intermediate level with mixed difficulties
- **Hard** (20 questions) - Challenging questions for geography experts

### ⚡ Interactive Features
- **Timer System** - 30 seconds per question with visual countdown
- **Progress Tracking** - Real-time progress bar and question counter
- **Score Calculation** - Immediate feedback and performance scoring
- **High Scores** - Local storage saves your best performances
- **Keyboard Navigation** - Use number keys 1-4 for answers, Enter for next

### 📱 Responsive Design
- Mobile-friendly interface
- Modern glassmorphism design
- Smooth animations and transitions
- Cross-browser compatibility

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional installations required

### Running the Quiz
1. Open `index.html` in your web browser
2. Or use VS Code's Live Preview/Live Server extension
3. Or run the VS Code task "Start Geographic Quiz"

### How to Play
1. **Select Category** - Choose your preferred geography topic
2. **Pick Difficulty** - Select Easy, Medium, or Hard
3. **Start Quiz** - Click "Start Quiz" to begin
4. **Answer Questions** - Click answers or use keyboard (1-4 keys)
5. **View Results** - See your score and detailed breakdown

## Project Structure

```
GeoQuiz/
├── index.html          # Main HTML file with quiz interface
├── css/
│   └── styles.css      # All styling and responsive design
├── js/
│   ├── data.js         # Quiz questions and data management
│   ├── quiz.js         # Quiz logic and score management  
│   └── app.js          # Main application controller
├── .github/
│   └── copilot-instructions.md  # Development guidelines
└── README.md           # This file
```

## Technical Details

### Technologies Used
- **HTML5** - Semantic structure and accessibility
- **CSS3** - Modern styling with gradients and animations
- **Vanilla JavaScript** - ES6+ features and modular design
- **Local Storage** - Persistent high score tracking

### Key Classes
- `GeoQuizApp` - Main application controller
- `Quiz` - Quiz logic and state management
- `HighScoreManager` - Score persistence and ranking

### Features Implementation
- **Modular Design** - Separate files for data, logic, and UI
- **Object-Oriented** - Clean class-based architecture
- **Responsive** - CSS Grid and Flexbox layouts
- **Accessible** - Keyboard navigation and semantic HTML

## Development

### Adding Questions
Edit `js/data.js` to add new questions:

```javascript
{
    question: "Your question here?",
    answers: ["Option A", "Option B", "Option C", "Option D"],
    correct: 2, // Index of correct answer (0-3)
    difficulty: "easy" // "easy", "medium", or "hard"
}
```

### Customizing Appearance
Modify `css/styles.css` to change:
- Color schemes and gradients
- Typography and spacing
- Animation timings
- Responsive breakpoints

### Extending Functionality
- Add new categories in `data.js`
- Modify timer duration in `quiz.js`
- Add question images or multimedia
- Implement user accounts or online leaderboards

## Browser Support
- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Performance
- Lightweight (< 50KB total)
- No external dependencies
- Fast loading and smooth animations
- Efficient local storage usage

## Future Enhancements
- [ ] Question images and multimedia
- [ ] Multiplayer mode
- [ ] Online leaderboards
- [ ] Additional quiz categories
- [ ] Achievement system
- [ ] Sound effects and music
- [ ] Progressive Web App (PWA) features

## Contributing
Feel free to fork this project and submit pull requests for:
- New quiz questions
- Bug fixes
- Feature enhancements
- UI/UX improvements

## License
This project is open source and available under the MIT License.

---

Enjoy testing your geographic knowledge! 🌍✨
