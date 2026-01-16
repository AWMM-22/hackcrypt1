
window.CURRICULUM_WEB = {
    // === HTML ===
    'html': {
        id: 'html', 
        title: 'HTML Fundamentals', 
        description: 'The skeleton of the web - learn to structure content.', 
        icon: '💀', 
        difficulty: 'BEGINNER',
        chapters: [
            { 
                id: 1, 
                title: 'HTML Basics', 
                icon: '🧱', 
                description: 'Learn the building blocks of web pages.',
                lessons: [
                    { 
                        id: 'html-1-1', 
                        title: 'Your First HTML', 
                        xp: 50, 
                        content: {
                            story: `# Welcome to HTML! 🌐

HTML (HyperText Markup Language) is the foundation of every website.

## Basic Structure:
\`\`\`html
<tagname>Content goes here</tagname>
\`\`\`

Tags come in pairs: opening <tag> and closing </tag>`,
                            instructions: "Log the HTML for a heading: **<h1>Hello Web</h1>**",
                            starterCode: "// Log the HTML heading tag\n\n",
                            expectedOutput: "<h1>Hello Web</h1>"
                        }
                    },
                    { 
                        id: 'html-1-2', 
                        title: 'Paragraphs', 
                        xp: 50,
                        content: {
                            story: `# Paragraph Tags 📝

The **<p>** tag defines a paragraph of text.

\`\`\`html
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
\`\`\``,
                            instructions: "Log the HTML for a paragraph with text **Learning HTML**",
                            starterCode: "// Log a paragraph tag\n\n",
                            expectedOutput: "<p>Learning HTML</p>"
                        }
                    },
                    { 
                        id: 'html-1-3', 
                        title: 'Links', 
                        xp: 50,
                        content: {
                            story: `# Anchor Tags (Links) 🔗

The **<a>** tag creates hyperlinks.

\`\`\`html
<a href="https://example.com">Click me</a>
\`\`\`

- **href** = destination URL
- Text between tags = clickable text`,
                            instructions: "Log an anchor tag linking to **https://quizsmith.com** with text **Visit**",
                            starterCode: "// Log a link tag\n\n",
                            expectedOutput: '<a href="https://quizsmith.com">Visit</a>'
                        }
                    }
                ] 
            },
            { 
                id: 2, 
                title: 'Structure', 
                icon: '🏗️',
                description: 'Organize your HTML documents.',
                lessons: [
                    { 
                        id: 'html-2-1', 
                        title: 'Div Elements', 
                        xp: 50,
                        content: {
                            story: `# The Div Container 📦

**<div>** is a container for grouping elements.

\`\`\`html
<div>
  <h1>Title</h1>
  <p>Content</p>
</div>
\`\`\``,
                            instructions: "Log a div containing the text **Container**",
                            starterCode: "// Log a div element\n\n",
                            expectedOutput: "<div>Container</div>"
                        }
                    },
                    { 
                        id: 'html-2-2', 
                        title: 'Lists', 
                        xp: 50,
                        content: {
                            story: `# HTML Lists 📋

**Unordered list** (bullets):
\`\`\`html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
\`\`\``,
                            instructions: "Log a list item: **<li>First</li>**",
                            starterCode: "// Log a list item\n\n",
                            expectedOutput: "<li>First</li>"
                        }
                    }
                ] 
            },
            { 
                id: 3, 
                title: 'Media', 
                icon: '🖼️',
                description: 'Add images and media.',
                lessons: [
                    { 
                        id: 'html-3-1', 
                        title: 'Images', 
                        xp: 50,
                        content: {
                            story: `# Image Tags 🖼️

\`\`\`html
<img src="photo.jpg" alt="Description">
\`\`\`

- **src** = image source/URL
- **alt** = alternative text`,
                            instructions: "Log an image tag with src **logo.png** and alt **Logo**",
                            starterCode: "// Log an image tag\n\n",
                            expectedOutput: '<img src="logo.png" alt="Logo">'
                        }
                    }
                ] 
            }
        ]
    },
    // === CSS ===
    'css': {
        id: 'css', 
        title: 'CSS Styling', 
        description: 'Make your websites beautiful with styles.', 
        icon: '🎨', 
        difficulty: 'BEGINNER',
        chapters: [
            { 
                id: 1, 
                title: 'CSS Basics', 
                icon: '🎯',
                description: 'Learn to style elements.',
                lessons: [
                    { 
                        id: 'css-1-1', 
                        title: 'CSS Syntax', 
                        xp: 50,
                        content: {
                            story: `# CSS Syntax 🎨

\`\`\`css
selector {
  property: value;
}
\`\`\`

Example:
\`\`\`css
h1 {
  color: blue;
}
\`\`\``,
                            instructions: "Log CSS to make h1 color red: **h1 { color: red; }**",
                            starterCode: "// Log CSS rule\n\n",
                            expectedOutput: "h1 { color: red; }"
                        }
                    },
                    { 
                        id: 'css-1-2', 
                        title: 'Class Selectors', 
                        xp: 50,
                        content: {
                            story: `# Class Selectors 🎯

Target elements by class using a dot (.)

\`\`\`css
.button {
  background: blue;
}
\`\`\``,
                            instructions: "Log CSS for class .box with color blue",
                            starterCode: "// Log a class selector\n\n",
                            expectedOutput: ".box { color: blue; }"
                        }
                    },
                    { 
                        id: 'css-1-3', 
                        title: 'Colors', 
                        xp: 50,
                        content: {
                            story: `# CSS Colors 🌈

Ways to define colors:
- Named: **red**, **blue**, **green**
- Hex: **#FF0000**, **#00FF00**
- RGB: **rgb(255, 0, 0)**`,
                            instructions: "Log the hex color code for red: **#FF0000**",
                            starterCode: "// Log hex color\n\n",
                            expectedOutput: "#FF0000"
                        }
                    }
                ] 
            },
            { 
                id: 2, 
                title: 'Box Model', 
                icon: '📦',
                description: 'Understanding spacing and sizing.',
                lessons: [
                    { 
                        id: 'css-2-1', 
                        title: 'Margin & Padding', 
                        xp: 50,
                        content: {
                            story: `# Box Model 📦

- **Margin**: Space outside the element
- **Padding**: Space inside the element
- **Border**: Line around the element

\`\`\`css
.box {
  margin: 10px;
  padding: 20px;
}
\`\`\``,
                            instructions: "Log **margin: 10px** (just the property and value)",
                            starterCode: "// Log margin property\n\n",
                            expectedOutput: "margin: 10px"
                        }
                    }
                ] 
            },
            { 
                id: 3, 
                title: 'Flexbox', 
                icon: '💪',
                description: 'Modern layout techniques.',
                lessons: [
                    { 
                        id: 'css-3-1', 
                        title: 'Display Flex', 
                        xp: 50,
                        content: {
                            story: `# Flexbox Layout 💪

Flexbox makes layouts easy!

\`\`\`css
.container {
  display: flex;
  justify-content: center;
}
\`\`\``,
                            instructions: "Log **display: flex**",
                            starterCode: "// Log flex property\n\n",
                            expectedOutput: "display: flex"
                        }
                    }
                ] 
            }
        ]
    },
    // === JAVASCRIPT ===
    'js': {
        id: 'js', 
        title: 'JavaScript', 
        description: 'Add interactivity to your websites.', 
        icon: '⚡', 
        difficulty: 'BEGINNER',
        chapters: [
            { 
                id: 1, 
                title: 'JS Basics', 
                icon: '💻',
                description: 'Learn the fundamentals of JavaScript.',
                lessons: [
                    { 
                        id: 'js-1-1', 
                        title: 'Console Log', 
                        xp: 50,
                        content: {
                            story: `# Hello JavaScript! ⚡

\`\`\`javascript
console.log("Hello!");
\`\`\`

This prints messages to the browser console.`,
                            instructions: "Log **Hello, JavaScript!** to the console",
                            starterCode: "// Your first JavaScript\n\n",
                            expectedOutput: "Hello, JavaScript!"
                        }
                    },
                    { 
                        id: 'js-1-2', 
                        title: 'Variables', 
                        xp: 50,
                        content: {
                            story: `# JavaScript Variables 📦

\`\`\`javascript
let name = "Alice";
const age = 25;
\`\`\`

- **let**: Can be changed
- **const**: Cannot be changed`,
                            instructions: "Create variable **message** = 'QUIZSMITH' and log it",
                            starterCode: "// Declare and log\n\n",
                            expectedOutput: "QUIZSMITH"
                        }
                    },
                    { 
                        id: 'js-1-3', 
                        title: 'Data Types', 
                        xp: 50,
                        content: {
                            story: `# JavaScript Types

- **String**: "Hello"
- **Number**: 42, 3.14
- **Boolean**: true, false
- **Array**: [1, 2, 3]
- **Object**: { name: "Alice" }`,
                            instructions: "Log the number **42**",
                            starterCode: "// Log a number\n\n",
                            expectedOutput: "42"
                        }
                    }
                ] 
            },
            { 
                id: 2, 
                title: 'Arrays', 
                icon: '📦',
                description: 'Work with collections of data.',
                lessons: [
                    { 
                        id: 'js-2-1', 
                        title: 'Creating Arrays', 
                        xp: 50,
                        content: {
                            story: `# JavaScript Arrays 📦

\`\`\`javascript
let fruits = ["apple", "banana", "cherry"];
console.log(fruits.length);  // 3
\`\`\``,
                            instructions: "Create array fruits = ['apple', 'banana', 'orange'] and log its length",
                            starterCode: "// Create array and log length\n\n",
                            expectedOutput: "3"
                        }
                    },
                    { 
                        id: 'js-2-2', 
                        title: 'Array Methods', 
                        xp: 50,
                        content: {
                            story: `# Array Methods 🛠️

\`\`\`javascript
let nums = [1, 2];
nums.push(3);     // Add to end
nums.pop();       // Remove from end
\`\`\``,
                            instructions: "Create nums = [1, 2, 3], push 4, and log the array",
                            starterCode: "// Work with arrays\n\n",
                            expectedOutput: "1,2,3,4"
                        }
                    }
                ] 
            },
            { 
                id: 3, 
                title: 'Functions', 
                icon: '🔧',
                description: 'Create reusable code.',
                lessons: [
                    { 
                        id: 'js-3-1', 
                        title: 'Function Declaration', 
                        xp: 50,
                        content: {
                            story: `# JavaScript Functions 🔧

\`\`\`javascript
function greet() {
  return "Hello!";
}
console.log(greet());
\`\`\``,
                            instructions: "Create function greet() that returns 'Welcome!' and log it",
                            starterCode: "// Create and call function\n\n",
                            expectedOutput: "Welcome!"
                        }
                    },
                    { 
                        id: 'js-3-2', 
                        title: 'Arrow Functions', 
                        xp: 50,
                        content: {
                            story: `# Arrow Functions ➡️

\`\`\`javascript
const double = (x) => x * 2;
console.log(double(5));  // 10
\`\`\``,
                            instructions: "Create arrow function double that returns x * 2. Test with 7.",
                            starterCode: "// Arrow function\n\n",
                            expectedOutput: "14"
                        }
                    }
                ] 
            },
            { 
                id: 4, 
                title: 'DOM', 
                icon: '🌳',
                description: 'Interact with web pages.',
                lessons: [
                    { 
                        id: 'js-4-1', 
                        title: 'Selecting Elements', 
                        xp: 50,
                        content: {
                            story: `# The DOM 🌳

\`\`\`javascript
document.getElementById("header")
document.querySelector(".btn")
\`\`\`

The DOM lets JavaScript interact with HTML.`,
                            instructions: "Log the code to get element by ID 'header'",
                            starterCode: "// Log DOM selection\n\n",
                            expectedOutput: 'document.getElementById("header")'
                        }
                    }
                ] 
            }
        ]
    },
    // === REACT ===
    'react': {
        id: 'react', 
        title: 'React', 
        description: 'Build modern user interfaces.', 
        icon: '⚛️', 
        difficulty: 'Intermediate',
        chapters: [
            { 
                id: 1, 
                title: 'Components', 
                icon: '🧱',
                description: 'The building blocks of React.',
                lessons: [
                    { 
                        id: 'react-1-1', 
                        title: 'JSX Basics', 
                        xp: 50,
                        content: {
                            story: `# React Components ⚛️

\`\`\`jsx
function App() {
  return <h1>Hello React!</h1>;
}
\`\`\`

Components are functions that return JSX.`,
                            instructions: "Log **Hello React!**",
                            starterCode: "// React greeting\n\n",
                            expectedOutput: "Hello React!"
                        }
                    },
                    { 
                        id: 'react-1-2', 
                        title: 'Props', 
                        xp: 50,
                        content: {
                            story: `# Props 🎁

\`\`\`jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
\`\`\`

Props pass data to components.`,
                            instructions: "Log **Props received**",
                            starterCode: "// Props demo\n\n",
                            expectedOutput: "Props received"
                        }
                    }
                ] 
            },
            { 
                id: 2, 
                title: 'Hooks', 
                icon: '🪝',
                description: 'Add state and effects.',
                lessons: [
                    { 
                        id: 'react-2-1', 
                        title: 'useState', 
                        xp: 50,
                        content: {
                            story: `# useState Hook 🪝

\`\`\`jsx
const [count, setCount] = useState(0);
\`\`\`

Manages component state.`,
                            instructions: "Log **State: 0**",
                            starterCode: "// useState demo\n\n",
                            expectedOutput: "State: 0"
                        }
                    }
                ] 
            }
        ]
    },
    // === SQL ===
    'sql': {
        id: 'sql', 
        title: 'SQL', 
        description: 'Master database queries.', 
        icon: '💾', 
        difficulty: 'Intermediate',
        chapters: [
            { 
                id: 1, 
                title: 'Queries', 
                icon: '🔍',
                description: 'Learn to query databases.',
                lessons: [
                    { 
                        id: 'sql-1-1', 
                        title: 'SELECT Statement', 
                        xp: 50,
                        content: {
                            story: `# SQL SELECT 🔍

\`\`\`sql
SELECT * FROM users;
SELECT name, email FROM users;
\`\`\`

Retrieves data from tables.`,
                            instructions: "Log **SELECT * FROM users**",
                            starterCode: "// SQL query\n\n",
                            expectedOutput: "SELECT * FROM users"
                        }
                    },
                    { 
                        id: 'sql-1-2', 
                        title: 'WHERE Clause', 
                        xp: 50,
                        content: {
                            story: `# Filtering with WHERE

\`\`\`sql
SELECT * FROM users WHERE age > 18;
\`\`\``,
                            instructions: "Log **WHERE age > 18**",
                            starterCode: "// WHERE clause\n\n",
                            expectedOutput: "WHERE age > 18"
                        }
                    }
                ] 
            }
        ]
    },
    // === TYPESCRIPT ===
    'ts': {
        id: 'ts', 
        title: 'TypeScript', 
        description: 'Type-safe JavaScript.', 
        icon: '🛡️', 
        difficulty: 'Intermediate',
        chapters: [
            { 
                id: 1, 
                title: 'Type Basics', 
                icon: '📘',
                description: 'Learn type annotations.',
                lessons: [
                    { 
                        id: 'ts-1-1', 
                        title: 'Type Annotations', 
                        xp: 50,
                        content: {
                            story: `# TypeScript Types 🛡️

\`\`\`typescript
let name: string = "Alice";
let age: number = 25;
let active: boolean = true;
\`\`\``,
                            instructions: "Log **string**",
                            starterCode: "// TypeScript type\n\n",
                            expectedOutput: "string"
                        }
                    },
                    { 
                        id: 'ts-1-2', 
                        title: 'Interfaces', 
                        xp: 50,
                        content: {
                            story: `# Interfaces 📑

\`\`\`typescript
interface User {
  name: string;
  age: number;
}
\`\`\``,
                            instructions: "Log **interface User**",
                            starterCode: "// Interface\n\n",
                            expectedOutput: "interface User"
                        }
                    }
                ] 
            }
        ]
    }
};

// Auto-merge into main CURRICULUM
(function() {
    if (!window.CURRICULUM) window.CURRICULUM = {};
    Object.assign(window.CURRICULUM, window.CURRICULUM_WEB);
    console.log('[CURRICULUM] Web loaded:', Object.keys(window.CURRICULUM_WEB));
})();
