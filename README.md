# Simple Interactive Decision Tree

## Project Overview

The Simple Interactive Decision Tree is a web application designed to guide users through a series of choices, leading to a personalized recommendation. This project uses HTML, CSS, and JavaScript to create a responsive and interactive experience.

---

## Features

1. **Dynamic User Interaction**:

   - Dropdown menus for user input.
   - Dynamically generated personalized recommendations based on user choices.

2. **Responsive Design**:

   - Optimized for desktop and mobile devices.

3. **CSS Animations**:

   - Smooth transitions and animations for better user experience.

4. **Reusable Code**:
   - Modular functions ensure scalability and readability.

---

## Application Workflow

1. **Step 1**: User selects their preference between "Mountains" or "Beach."
2. **Step 2**: User selects their activity preference: "Adventure" or "Relaxation."
3. **Step 3**: User selects their budget: "Low," "Medium," or "High."
4. **Output**: The app generates a personalized travel recommendation.

---

## Example Inputs and Output

### Example Input:

- Preference: Beach
- Activity: Adventure
- Budget: Medium

### Example Output:

"Based on your preferences, we recommend a trip to the beautiful Bali, Indonesia! Enjoy the white sandy beaches while engaging in exciting water sports and activities. With a medium budget, you can explore the local culture, visit nearby temples, and enjoy both adventure and relaxation in one place."

---

## How It Works

### Technologies Used:

- **HTML**: Structure of the web application.
- **CSS**: Styling and animations.
- **JavaScript**: Interactive elements and decision logic.

### Code Structure:

1. **HTML**:

   - Contains dropdown elements for user inputs.
   - Placeholder for displaying the recommendation.

2. **CSS**:

   - Responsive styling.
   - Animations for smooth transitions.

3. **JavaScript**:
   - Functions for capturing user inputs.
   - Decision tree logic to generate recommendations.
   - DOM manipulation for displaying outputs.

---

## How to Run the Application

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repository/interactive-decision-tree.git
   ```

2. Navigate to the project directory:

   ```bash
   cd interactive-decision-tree
   ```

3. Open `index.html` in your browser to view the application.

---

## How to Improve the Project Further

1. **Enhance the Decision Tree**:

   - Add more questions and options to make the recommendations more specific.
   - Include a feature for user-defined preferences or inputs.

2. **Backend Integration**:

   - Use a backend server (e.g., Node.js) to fetch real-time travel suggestions or updates.

3. **Database Connectivity**:

   - Store user preferences and popular recommendations in a database for future improvements.

4. **Advanced Styling**:

   - Use a CSS framework like Tailwind or Bootstrap for more polished UI.
   - Add advanced animations using libraries like GSAP.

5. **Share Feature**:

   - Enable users to share their recommendations on social media.

6. **Localization**:

   - Add multi-language support to cater to a global audience.

7. **Accessibility**:
   - Ensure the application is accessible to all users by adhering to WAI-ARIA guidelines.

---

## Research

### Story Generation Algorithm

- **Templating**: Used string interpolation in JavaScript to dynamically insert user inputs into predefined templates.
- **Random Text Generation**: Explored random number generation and conditional statements to generate recommendations.

### Interactive Elements

- Utilized event listeners in JavaScript for dynamic content updates.
- Explored DOM manipulation for rendering user inputs and recommendations.

### CSS Animations

- Implemented transitions for dropdown menus and output displays using CSS animations.

---

## Folder Structure

```
interactive-decision-tree/
|-- index.html
|-- styles.css
|-- script.js
|-- README.md
```

---

## License

This project is licensed under the MIT License.

---

We hope you enjoy using the Simple Interactive Decision Tree. Feel free to contribute or provide feedback to improve the project further!
