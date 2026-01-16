
window.CURRICULUM_SYSTEMS = {
    // === C++ ===
    'cpp': {
        id: 'cpp', 
        title: 'C++', 
        description: 'High-performance systems programming.', 
        icon: '⚙️', 
        difficulty: 'ADVANCED',
        chapters: [
            { 
                id: 1, 
                title: 'Getting Started', 
                icon: '👋',
                description: 'Your first C++ programs.',
                lessons: [
                    { 
                        id: 'cpp-1-1', 
                        title: 'Hello World', 
                        xp: 50,
                        content: {
                            story: `# Hello C++! ⚙️

\`\`\`cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello World!" << endl;
    return 0;
}
\`\`\`

**cout** prints to console, **<<** is the output operator.`,
                            instructions: "Log **Hello C++** (we'll simulate the output)",
                            starterCode: "// C++ Hello World\nconsole.log(\"Hello C++\");\n",
                            expectedOutput: "Hello C++"
                        }
                    },
                    { 
                        id: 'cpp-1-2', 
                        title: 'Variables', 
                        xp: 50,
                        content: {
                            story: `# C++ Variables 📦

\`\`\`cpp
int age = 25;
double price = 19.99;
string name = "Alice";
bool active = true;
\`\`\`

C++ requires explicit type declarations.`,
                            instructions: "Log **int x = 10**",
                            starterCode: "// C++ variable\n\n",
                            expectedOutput: "int x = 10"
                        }
                    },
                    { 
                        id: 'cpp-1-3', 
                        title: 'Data Types', 
                        xp: 50,
                        content: {
                            story: `# C++ Data Types

| Type | Size | Example |
|------|------|---------|
| int | 4 bytes | 42 |
| float | 4 bytes | 3.14f |
| double | 8 bytes | 3.14159 |
| char | 1 byte | 'A' |
| bool | 1 byte | true |`,
                            instructions: "Log **double**",
                            starterCode: "// Data type\n\n",
                            expectedOutput: "double"
                        }
                    }
                ] 
            },
            { 
                id: 2, 
                title: 'Control Flow', 
                icon: '🔀',
                description: 'Conditionals and loops.',
                lessons: [
                    { 
                        id: 'cpp-2-1', 
                        title: 'If Statements', 
                        xp: 50,
                        content: {
                            story: `# C++ Conditionals

\`\`\`cpp
if (x > 10) {
    cout << "Big";
} else {
    cout << "Small";
}
\`\`\``,
                            instructions: "Log **if (x > 5)**",
                            starterCode: "// If statement\n\n",
                            expectedOutput: "if (x > 5)"
                        }
                    },
                    { 
                        id: 'cpp-2-2', 
                        title: 'For Loops', 
                        xp: 50,
                        content: {
                            story: `# C++ For Loops

\`\`\`cpp
for (int i = 0; i < 5; i++) {
    cout << i << endl;
}
\`\`\``,
                            instructions: "Log numbers 0, 1, 2 (each on new line)",
                            starterCode: "// For loop\nfor (let i = 0; i < 3; i++) {\n  console.log(i);\n}\n",
                            expectedOutput: "0\n1\n2"
                        }
                    }
                ] 
            },
            { 
                id: 3, 
                title: 'Functions', 
                icon: '🔧',
                description: 'Creating reusable code.',
                lessons: [
                    { 
                        id: 'cpp-3-1', 
                        title: 'Function Basics', 
                        xp: 50,
                        content: {
                            story: `# C++ Functions

\`\`\`cpp
int add(int a, int b) {
    return a + b;
}

int result = add(3, 4);  // 7
\`\`\``,
                            instructions: "Log **7** (result of 3 + 4)",
                            starterCode: "// Function result\n\n",
                            expectedOutput: "7"
                        }
                    }
                ] 
            },
            { 
                id: 4, 
                title: 'Pointers', 
                icon: '📍',
                description: 'Memory management.',
                lessons: [
                    { 
                        id: 'cpp-4-1', 
                        title: 'Pointer Basics', 
                        xp: 100,
                        content: {
                            story: `# C++ Pointers 📍

\`\`\`cpp
int x = 10;
int* ptr = &x;  // Pointer to x

cout << *ptr;   // 10 (dereferencing)
\`\`\`

- **&** gets the address
- ***** dereferences the pointer`,
                            instructions: "Log **pointer**",
                            starterCode: "// Pointer concept\n\n",
                            expectedOutput: "pointer"
                        }
                    }
                ] 
            }
        ]
    },
    // === JAVA ===
    'java': {
        id: 'java', 
        title: 'Java', 
        description: 'Enterprise-grade programming.', 
        icon: '☕', 
        difficulty: 'INTERMEDIATE',
        chapters: [
            { 
                id: 1, 
                title: 'Java Basics', 
                icon: '👋',
                description: 'Start your Java journey.',
                lessons: [
                    { 
                        id: 'java-1-1', 
                        title: 'Hello World', 
                        xp: 50,
                        content: {
                            story: `# Hello Java! ☕

\`\`\`java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}
\`\`\``,
                            instructions: "Log **Hello Java**",
                            starterCode: "// Java Hello World\n\n",
                            expectedOutput: "Hello Java"
                        }
                    },
                    { 
                        id: 'java-1-2', 
                        title: 'Variables', 
                        xp: 50,
                        content: {
                            story: `# Java Variables

\`\`\`java
int age = 25;
double price = 19.99;
String name = "Alice";
boolean active = true;
\`\`\``,
                            instructions: "Log **String name**",
                            starterCode: "// Java variable\n\n",
                            expectedOutput: "String name"
                        }
                    },
                    { 
                        id: 'java-1-3', 
                        title: 'Methods', 
                        xp: 50,
                        content: {
                            story: `# Java Methods

\`\`\`java
public static int add(int a, int b) {
    return a + b;
}
\`\`\``,
                            instructions: "Log **public static void main**",
                            starterCode: "// Main method\n\n",
                            expectedOutput: "public static void main"
                        }
                    }
                ] 
            },
            { 
                id: 2, 
                title: 'OOP', 
                icon: '🏗️',
                description: 'Object-Oriented Programming.',
                lessons: [
                    { 
                        id: 'java-2-1', 
                        title: 'Classes', 
                        xp: 50,
                        content: {
                            story: `# Java Classes

\`\`\`java
public class Dog {
    String name;
    int age;
    
    public void bark() {
        System.out.println("Woof!");
    }
}
\`\`\``,
                            instructions: "Log **class Dog**",
                            starterCode: "// Class definition\n\n",
                            expectedOutput: "class Dog"
                        }
                    },
                    { 
                        id: 'java-2-2', 
                        title: 'Objects', 
                        xp: 50,
                        content: {
                            story: `# Creating Objects

\`\`\`java
Dog myDog = new Dog();
myDog.name = "Buddy";
myDog.bark();
\`\`\``,
                            instructions: "Log **new Dog()**",
                            starterCode: "// Create object\n\n",
                            expectedOutput: "new Dog()"
                        }
                    }
                ] 
            }
        ]
    },
    // === RUST ===
    'rust': {
        id: 'rust', 
        title: 'Rust', 
        description: 'Safe systems programming.', 
        icon: '🦀', 
        difficulty: 'ADVANCED',
        chapters: [
            { 
                id: 1, 
                title: 'Rust Basics', 
                icon: '📦',
                description: 'Getting started with Rust.',
                lessons: [
                    { 
                        id: 'rust-1-1', 
                        title: 'Hello Rust', 
                        xp: 50,
                        content: {
                            story: `# Hello Rust! 🦀

\`\`\`rust
fn main() {
    println!("Hello, Rust!");
}
\`\`\`

**println!** is a macro for printing.`,
                            instructions: "Log **Hello, Rust!**",
                            starterCode: "// Rust greeting\n\n",
                            expectedOutput: "Hello, Rust!"
                        }
                    },
                    { 
                        id: 'rust-1-2', 
                        title: 'Variables', 
                        xp: 50,
                        content: {
                            story: `# Rust Variables

\`\`\`rust
let x = 5;           // Immutable
let mut y = 10;      // Mutable
\`\`\`

Variables are immutable by default!`,
                            instructions: "Log **let mut x = 5**",
                            starterCode: "// Mutable variable\n\n",
                            expectedOutput: "let mut x = 5"
                        }
                    }
                ] 
            },
            { 
                id: 2, 
                title: 'Ownership', 
                icon: '🔒',
                description: 'Rust\'s unique memory model.',
                lessons: [
                    { 
                        id: 'rust-2-1', 
                        title: 'Ownership Rules', 
                        xp: 50,
                        content: {
                            story: `# Ownership 🔒

Rules:
1. Each value has an owner
2. Only one owner at a time
3. Value dropped when owner goes out of scope

\`\`\`rust
let s1 = String::from("hello");
let s2 = s1;  // s1 is no longer valid
\`\`\``,
                            instructions: "Log **ownership**",
                            starterCode: "// Ownership concept\n\n",
                            expectedOutput: "ownership"
                        }
                    }
                ] 
            }
        ]
    },
    // === GO ===
    'go': {
        id: 'go', 
        title: 'Go', 
        description: 'Cloud-native programming.', 
        icon: '🐹', 
        difficulty: 'INTERMEDIATE',
        chapters: [
            { 
                id: 1, 
                title: 'Go Basics', 
                icon: '📦',
                description: 'Start with Go.',
                lessons: [
                    { 
                        id: 'go-1-1', 
                        title: 'Hello Go', 
                        xp: 50,
                        content: {
                            story: `# Hello Go! 🐹

\`\`\`go
package main

import "fmt"

func main() {
    fmt.Println("Hello, Go!")
}
\`\`\``,
                            instructions: "Log **Hello, Go!**",
                            starterCode: "// Go greeting\n\n",
                            expectedOutput: "Hello, Go!"
                        }
                    },
                    { 
                        id: 'go-1-2', 
                        title: 'Variables', 
                        xp: 50,
                        content: {
                            story: `# Go Variables

\`\`\`go
var name string = "Alice"
age := 25  // Short declaration
\`\`\``,
                            instructions: "Log **:= 25**",
                            starterCode: "// Short declaration\n\n",
                            expectedOutput: ":= 25"
                        }
                    }
                ] 
            },
            { 
                id: 2, 
                title: 'Goroutines', 
                icon: '🏃',
                description: 'Concurrent programming.',
                lessons: [
                    { 
                        id: 'go-2-1', 
                        title: 'Concurrency', 
                        xp: 50,
                        content: {
                            story: `# Goroutines 🏃

\`\`\`go
go myFunction()  // Runs concurrently
\`\`\`

Lightweight threads managed by Go runtime.`,
                            instructions: "Log **goroutine**",
                            starterCode: "// Concurrency\n\n",
                            expectedOutput: "goroutine"
                        }
                    }
                ] 
            }
        ]
    },
    // === C# ===
    'csharp': {
        id: 'csharp', 
        title: 'C#', 
        description: 'Microsoft .NET development.', 
        icon: '#️⃣', 
        difficulty: 'INTERMEDIATE',
        chapters: [
            { 
                id: 1, 
                title: 'C# Basics', 
                icon: '📝',
                description: 'Start with C#.',
                lessons: [
                    { 
                        id: 'cs-1-1', 
                        title: 'Hello C#', 
                        xp: 50,
                        content: {
                            story: `# Hello C#! #️⃣

\`\`\`csharp
using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello, C#!");
    }
}
\`\`\``,
                            instructions: "Log **Hello, C#!**",
                            starterCode: "// C# greeting\n\n",
                            expectedOutput: "Hello, C#!"
                        }
                    },
                    { 
                        id: 'cs-1-2', 
                        title: 'Variables', 
                        xp: 50,
                        content: {
                            story: `# C# Variables

\`\`\`csharp
int age = 25;
string name = "Alice";
var score = 100;  // Type inference
\`\`\``,
                            instructions: "Log **var score = 100**",
                            starterCode: "// C# variable\n\n",
                            expectedOutput: "var score = 100"
                        }
                    }
                ] 
            },
            { 
                id: 2, 
                title: 'Unity Prep', 
                icon: '🎮',
                description: 'Prepare for game development.',
                lessons: [
                    { 
                        id: 'cs-2-1', 
                        title: 'MonoBehaviour', 
                        xp: 50,
                        content: {
                            story: `# Unity Scripts 🎮

\`\`\`csharp
public class Player : MonoBehaviour {
    void Start() {
        Debug.Log("Game started!");
    }
    
    void Update() {
        // Called every frame
    }
}
\`\`\``,
                            instructions: "Log **MonoBehaviour**",
                            starterCode: "// Unity base class\n\n",
                            expectedOutput: "MonoBehaviour"
                        }
                    }
                ] 
            }
        ]
    },
    // === LUA ===
    'lua': {
        id: 'lua', 
        title: 'Lua', 
        description: 'Game scripting language.', 
        icon: '🌙', 
        difficulty: 'BEGINNER',
        chapters: [
            { 
                id: 1, 
                title: 'Lua Basics', 
                icon: '📝',
                description: 'Start scripting with Lua.',
                lessons: [
                    { 
                        id: 'lua-1-1', 
                        title: 'Hello Lua', 
                        xp: 50,
                        content: {
                            story: `# Hello Lua! 🌙

\`\`\`lua
print("Hello, Lua!")
\`\`\`

Lua is simple and lightweight!`,
                            instructions: "Log **Hello, Lua!**",
                            starterCode: "// Lua greeting\n\n",
                            expectedOutput: "Hello, Lua!"
                        }
                    },
                    { 
                        id: 'lua-1-2', 
                        title: 'Variables', 
                        xp: 50,
                        content: {
                            story: `# Lua Variables

\`\`\`lua
local name = "Alice"
local age = 25
local active = true
\`\`\`

Use **local** for local variables.`,
                            instructions: "Log **local x = 10**",
                            starterCode: "// Lua variable\n\n",
                            expectedOutput: "local x = 10"
                        }
                    }
                ] 
            },
            { 
                id: 2, 
                title: 'Tables', 
                icon: '📊',
                description: 'Lua\'s main data structure.',
                lessons: [
                    { 
                        id: 'lua-2-1', 
                        title: 'Table Basics', 
                        xp: 50,
                        content: {
                            story: `# Lua Tables 📊

\`\`\`lua
local player = {
    name = "Hero",
    health = 100,
    items = {"sword", "shield"}
}
\`\`\`

Tables are Lua's only data structure!`,
                            instructions: "Log **table**",
                            starterCode: "// Lua table\n\n",
                            expectedOutput: "table"
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
    Object.assign(window.CURRICULUM, window.CURRICULUM_SYSTEMS);
    console.log('[CURRICULUM] Systems loaded:', Object.keys(window.CURRICULUM_SYSTEMS));
})();
