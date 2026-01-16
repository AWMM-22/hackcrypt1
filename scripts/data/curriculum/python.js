
window.CURRICULUM_PYTHON = {
    'python': {
        id: 'python',
        title: 'The Legend of Python',
        description: 'Master programming fundamentals with Python.',
        icon: '🐍',
        image: './assets/pixel_art/python.png',
        difficulty: 'BEGINNER',
        chapters: [
            {
                id: 1, title: 'The Beginning', icon: '🌱', description: 'Start your coding journey with Python basics.',
                lessons: [
                    { 
                        id: 'python-1-1', 
                        title: 'Hello World', 
                        type: 'exercise', 
                        xp: 50, 
                        content: { 
                            story: `# Welcome to Python! 🐍

Your first step into the world of coding begins here. The **print()** function is how Python communicates with you.

## What you'll learn:
- How to use the print() function
- Working with text (strings)

## Syntax:
\`\`\`python
print("Your message here")
\`\`\`

**Note:** Text must be wrapped in quotes (single ' or double ")`,
                            instructions: "Write a program that prints **Hello, World!** to the console.",
                            starterCode: "# Your first Python program!\n\n",
                            expectedOutput: "Hello, World!"
                        }
                    },
                    { 
                        id: 'python-1-2', 
                        title: 'Print Multiple Lines', 
                        type: 'exercise', 
                        xp: 50, 
                        content: { 
                            story: `# Printing Multiple Lines 📝

You can use multiple print() statements to display several lines.

## Example:
\`\`\`python
print("Line 1")
print("Line 2")
\`\`\``,
                            instructions: "Print **Python** on first line and **is awesome** on second line.",
                            starterCode: "# Print two lines\n\n",
                            expectedOutput: "Python\nis awesome"
                        }
                    },
                    { 
                        id: 'python-1-3', 
                        title: 'Comments', 
                        type: 'exercise', 
                        xp: 50, 
                        content: { 
                            story: `# Comments in Python 💬

Comments are notes for humans - Python ignores them! Use **#** to start a comment.

## Example:
\`\`\`python
# This is a comment
print("This runs!")
\`\`\``,
                            instructions: "Print **Code runs!** (you can add a comment if you want)",
                            starterCode: "# My first program\n\n",
                            expectedOutput: "Code runs!"
                        }
                    }
                ]
            },
            {
                id: 2, title: 'Variables', icon: '📦', description: 'Learn to store and use data.',
                lessons: [
                    { 
                        id: 'python-2-1', 
                        title: 'Creating Variables', 
                        type: 'exercise', 
                        xp: 50, 
                        content: { 
                            story: `# Variables - Your Data Containers 📦

Variables store data for later use.

## Creating a variable:
\`\`\`python
name = "Alice"
age = 25
\`\`\``,
                            instructions: "Create a variable **score** with value **100** and print it.",
                            starterCode: "# Create and print a variable\n\n",
                            expectedOutput: "100"
                        }
                    },
                    { 
                        id: 'python-2-2', 
                        title: 'Math Operations', 
                        type: 'exercise', 
                        xp: 50, 
                        content: { 
                            story: `# Math in Python 🧮

| Operator | Example |
|----------|---------|
| + | 5 + 3 = 8 |
| - | 5 - 3 = 2 |
| * | 5 * 3 = 15 |
| / | 15 / 3 = 5.0 |`,
                            instructions: "Calculate and print **15 + 25**",
                            starterCode: "# Do some math\n\n",
                            expectedOutput: "40"
                        }
                    },
                    { 
                        id: 'python-2-3', 
                        title: 'String Concatenation', 
                        type: 'exercise', 
                        xp: 50, 
                        content: { 
                            story: `# Joining Strings 🔗

Combine strings using the + operator.

## Example:
\`\`\`python
first = "Hello"
second = "World"
print(first + " " + second)
\`\`\``,
                            instructions: "Print **Quiz Smith** by joining first_name and last_name with a space.",
                            starterCode: "first_name = \"Quiz\"\nlast_name = \"Smith\"\n\n",
                            expectedOutput: "Quiz Smith"
                        }
                    }
                ]
            },
            {
                id: 3, title: 'Control Flow', icon: '🔀', description: 'Make decisions in your code.',
                lessons: [
                    { 
                        id: 'python-3-1', 
                        title: 'If Statements', 
                        type: 'exercise', 
                        xp: 50, 
                        content: { 
                            story: `# Making Decisions with If 🤔

\`\`\`python
if condition:
    print("Yes!")
\`\`\`

Remember: Use colon and indent the code inside!`,
                            instructions: "Write: if **10 > 5** is true, print **Yes**",
                            starterCode: "# Write an if statement\n\n",
                            expectedOutput: "Yes"
                        }
                    },
                    { 
                        id: 'python-3-2', 
                        title: 'If-Else', 
                        type: 'exercise', 
                        xp: 50, 
                        content: { 
                            story: `# If-Else: Two Paths 🔀

\`\`\`python
if condition:
    print("Yes")
else:
    print("No")
\`\`\``,
                            instructions: "Given **num = 7**, print **Odd** (since 7 % 2 != 0)",
                            starterCode: "num = 7\n\n",
                            expectedOutput: "Odd"
                        }
                    }
                ]
            },
            {
                id: 4, title: 'Loops', icon: '🔄', description: 'Repeat actions efficiently.',
                lessons: [
                    { 
                        id: 'python-4-1', 
                        title: 'For Loops', 
                        type: 'exercise', 
                        xp: 50, 
                        content: { 
                            story: `# For Loops 🔄

\`\`\`python
for i in range(3):
    print(i)
# Output: 0, 1, 2
\`\`\``,
                            instructions: "Print numbers **0, 1, 2** using a for loop",
                            starterCode: "# Loop through range(3)\n\n",
                            expectedOutput: "0\n1\n2"
                        }
                    },
                    { 
                        id: 'python-4-2', 
                        title: 'While Loops', 
                        type: 'exercise', 
                        xp: 50, 
                        content: { 
                            story: `# While Loops 🔁

\`\`\`python
count = 1
while count <= 3:
    print(count)
    count += 1
\`\`\``,
                            instructions: "Print **1, 2, 3** using a while loop",
                            starterCode: "count = 1\n\n",
                            expectedOutput: "1\n2\n3"
                        }
                    }
                ]
            },
            {
                id: 5, title: 'Lists', icon: '📜', description: 'Store collections of data.',
                lessons: [
                    { 
                        id: 'python-5-1', 
                        title: 'Creating Lists', 
                        type: 'exercise', 
                        xp: 50, 
                        content: { 
                            story: `# Lists 📝

\`\`\`python
fruits = ["apple", "banana", "cherry"]
print(fruits)
\`\`\``,
                            instructions: "Create list **colors** with 'red', 'green', 'blue' and print it.",
                            starterCode: "# Create a list\n\n",
                            expectedOutput: "['red', 'green', 'blue']"
                        }
                    },
                    { 
                        id: 'python-5-2', 
                        title: 'List Indexing', 
                        type: 'exercise', 
                        xp: 50, 
                        content: { 
                            story: `# Accessing Items 🎯

\`\`\`python
fruits = ["apple", "banana"]
print(fruits[0])  # apple
print(fruits[1])  # banana
\`\`\`

**Indexes start at 0!**`,
                            instructions: "Print the **second** item from the letters list.",
                            starterCode: "letters = ['a', 'b', 'c', 'd']\n\n",
                            expectedOutput: "b"
                        }
                    }
                ]
            },
            {
                id: 6, title: 'Functions', icon: '🔧', description: 'Create reusable code blocks.',
                lessons: [
                    { 
                        id: 'python-6-1', 
                        title: 'Defining Functions', 
                        type: 'exercise', 
                        xp: 50, 
                        content: { 
                            story: `# Functions 🔧

\`\`\`python
def greet():
    print("Hello!")

greet()  # Call it
\`\`\``,
                            instructions: "Define function **say_hi** that prints **Hi!** and call it.",
                            starterCode: "# Define and call a function\n\n",
                            expectedOutput: "Hi!"
                        }
                    },
                    { 
                        id: 'python-6-2', 
                        title: 'Function Parameters', 
                        type: 'exercise', 
                        xp: 50, 
                        content: { 
                            story: `# Parameters 📥

\`\`\`python
def greet(name):
    print("Hello, " + name)

greet("Alice")
\`\`\``,
                            instructions: "Create **double(num)** that prints num * 2. Call with **5**.",
                            starterCode: "# Function with parameter\n\n",
                            expectedOutput: "10"
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
    Object.assign(window.CURRICULUM, window.CURRICULUM_PYTHON);
    console.log('[CURRICULUM] Python loaded:', Object.keys(window.CURRICULUM_PYTHON));
})();
