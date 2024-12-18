const questions = [
 
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "A) HyperText Markup Language", correct: true },
            { text: "B) HyperText Machine Language", correct: false },
            { text: "C) HyperTransfer Markup Language", correct: false },
            { text: "D) HighText Markup Language", correct: false }
        ]
    },
    {
        question: "Which attribute of the &lt;input&gt; tag specifies the type of input?",
        answers: [
            { text: "A) id", correct: false },
            { text: "B) name", correct: false },
            { text: "C) type", correct: true },
            { text: "D) value", correct: false }
        ]
    },
    {
        question: "Which of the following features allows you to define default parameter values in ES6?",
        answers: [
            { text: "A) Default parameters", correct: true },
            { text: "B) Optional parameters", correct: false },
            { text: "C) Named parameters", correct: false },
            { text: "D) None of the above", correct: false }
        ]
    },
    {
        question: "Which HTML tag is used to define an unordered list?",
        answers: [
            { text: "A) &lt;ol&gt;", correct: false },
            { text: "B) &lt;li&gt;", correct: false },
            { text: "C) &lt;list&gt;", correct: false },
            { text: "D) &lt;ul&gt;", correct: true }
        ]
    },
    {
        question: "Which HTML attribute specifies an alternate text for an image?",
        answers: [
            { text: "A) title", correct: false },
            { text: "B) alt", correct: true },
            { text: "C) src", correct: false },
            { text: "D) href", correct: false }
        ]
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        answers: [
            { text: "A) color", correct: true },
            { text: "B) background-color", correct: false },
            { text: "C) font-color", correct: false },
            { text: "D) text-color", correct: false }
        ]
    },
    {
        question: "What does CSS stand for?",
        answers: [
            { text: "A) Colorful Style Sheets", correct: false },
            { text: "B) Creative Style Sheets", correct: false },
            { text: "C) Computer Style Sheets", correct: false },
            { text: "D) Cascading Style Sheets", correct: true }
        ]
    },
    {
        question: "Which property is used to change the font of an element in CSS?",
        answers: [
            { text: "A) font-style", correct: false },
            { text: "B) font-weight", correct: false },
            { text: "C) font-family", correct: true },
            { text: "D) font-size", correct: false }
        ]
    },
    {
        question: "What does the &lt;hr&gt; tag represent?",
        answers: [
            {text: "A) A new paragraph", correct: false},
            {text: "B) A thematic break", correct: true},
            {text: "C) A line break", correct: false},
            {text: "D) A heading", correct: false}
        ]
    },
    {
        question: "Which Python keyword is used to define a function?",
        answers: [
            { text: "A) def", correct: true },
            { text: "B) function", correct: false },
            { text: "C) fun", correct: false },
            { text: "D) define", correct: false }
        ]
    },
    {
        question: "What is the output of print(2 ** 3) in Python?",
        answers: [
            { text: "A) 6", correct: false },
            { text: "B) 9", correct: false },
            { text: "C) None of the above", correct: false },
            { text: "D) 8", correct: true }
        ]
    },
    {
        question: "Which of the following is not a valid data type in Python?",
        answers: [
            { text: "A) float", correct: false },
            { text: "B) integer", correct: false },
            { text: "C) character", correct: true },
            { text: "D) string", correct: false }
        ]
    },
    {
        question: "Which CSS property is used to set the background color of an element?",
        answers: [
            { text: "A) color", correct: false },
            { text: "B) background-style", correct: false },
            { text: "C) background-image", correct: false },
            { text: "D) background-color", correct: true }
        ]
    },
    {
        question: "What is the purpose of the Python pass statement?",
        answers: [
            { text: "A) It serves as a placeholder for future code.", correct: true },
            { text: "B) It terminates the loop.", correct: false },
            { text: "C) It returns a value from a function.", correct: false },
            { text: "D) It raises an exception.", correct: false }
        ]
    },
    {
        question: "Which of the following is a Python tuple?",
        answers: [
            { text: "A) [1, 2, 3]", correct: false },
            { text: "B) {1, 2, 3}", correct: false },
            { text: "C) (1, 2, 3)", correct: true },
            { text: "D) <1, 2, 3>", correct: false }
        ]
    },
    {
        question: "What is the default position value in CSS?",
        answers: [
            { text: "A) relative", correct: false },
            { text: "B) absolute", correct: false },
            { text: "C) static", correct: true },
            { text: "D) fixed", correct: false }
        ]
    },
    {
        question: "Which tag creates a dropdown list?",
        answers: [
            { text: "A) &lt;input&gt;", correct: false },
            { text: "B) &lt;select&gt;", correct: true },
            { text: "C) &lt;option&gt;", correct: false },
            { text: "D) &lt;dropdown&gt;", correct: false }
        ]
    },
    {
        question: "Which selector is used to target an ID in CSS?",
        answers: [
            {text: "A) .", correct: false},
            {text: "B) #", correct: true},
            {text: "C) *", correct: false},
            {text: "D) ::", correct: false}
        ]
    },
    {
        question: "What is the largest heading tag in HTML?",
        answers: [
            { text: "A) &lt;h1&gt;", correct: true },
            { text: "B) &lt;h6&gt;", correct: false },
            { text: "C) &lt;heading&gt;", correct: false },
            { text: "D) &lt;title&gt;", correct: false }
        ]
    },
    {
        question: "Which Python method is used to add an element to the end of a list?",
        answers: [
            { text: "A) add()", correct: false },
            { text: "B) append()", correct: true },
            { text: "C) insert()", correct: false },
            { text: "D) extend()", correct: false }
        ]
    },
    {
        question: "What is the result of CSS property 'z-index'?",
        answers: [
            { text: "A) It changes the element size.", correct: false },
            { text: "B) It defines the font color.", correct: false },
            { text: "C) It makes the element bold.", correct: false },
            { text: "D) It specifies the stack order of an element.", correct: true }
        ]
    },
    {
        question: "How can you include comments in Python?",
        answers: [
            { text: "A) Using #", correct: true },
            { text: "B) Using //", correct: false },
            { text: "C) Using /**/", correct: false },
            { text: "D) Using &lt;!-- --&gt;", correct: false }
        ]
    },
    {
        question: "Which HTML tag is used to define the title of a document?",
        answers: [
            { text: "A) &lt;title&gt;", correct: true },
            { text: "B) &lt;head&gt;", correct: false },
            { text: "C) &lt;meta&gt;", correct: false },
            { text: "D) &lt;doc&gt;", correct: false }
        ]
    },
    {
        question: "Which Python library is used for data manipulation and analysis?",
        answers: [
            { text: "A) Pandas", correct: true },
            { text: "B) NumPy", correct: false },
            { text: "C) Matplotlib", correct: false },
            { text: "D) TensorFlow", correct: false }
        ]
    },
    {
        question: "What does the 'float' function do in Python?",
        answers: [
            { text: "A) Rounds off a value.", correct: false },
            { text: "B) Generates random numbers.", correct: false },
            { text: "C) Converts an integer to a string.", correct: false },
            { text: "D) Converts a value to a floating-point number.", correct: true }
        ]
    },
    {
        question: "Which of the following is a valid Python data type?",
        answers: [
            {text: "A) Integer", correct: false},
            {text: "B) Float", correct: false},
            {text: "C) String", correct: false},
            {text: "D) All of the above", correct: true}
        ]
    },
    {
        question: "Which of the following is used to style a web page?",
        answers: [
            {text: "A) HTML", correct: false},
            {text: "B) CSS", correct: true},
            {text: "C) JavaScript", correct: false},
            {text: "D) XML", correct: false}
        ]
    },
    {
        question: "Which HTML element is used to define a list item?",
        answers: [
            {text: "A) &lt;ul&gt;", correct: false},
            {text: "B) &lt;list&gt;", correct: false},
            {text: "C) &lt;li&gt;", correct: true},
            {text: "D) &lt;item&gt;", correct: false}
        ]
    },
    {
        question: "In C++, which operator is used to access members of a class?",
        answers: [
            {text: "A) .", correct: false},
            {text: "B) →", correct: false},
            {text: "C) ::", correct: false},
            {text: "Both A and B", correct: true}
        ]
    },
    {
        question: "What is the purpose of the z-index property in CSS?",
        answers: [
            {text: "A) To set the font size", correct: false},
            {text: "B) To control the stacking order of elements", correct: true},
            {text: "C) To set the background color", correct: false},
            {text: "D) To define the width of an element", correct: false}
        ]
    },
    {
        question: "Which of the following is a loop structure in Python?",
        answers: [
            {text: "A) for", correct: false},
            {text: "B) while", correct: false},
            {text: "C) do-while", correct: false},
            {text: "D) All of the above", correct: true}
        ]
    },
    {
        question: "What is the correct way to declare a variable in JavaScript?",
        answers: [
            {text: "A) var myVar;", correct: true},
            {text: "B) variable myVar;", correct: false},
            {text: "C) myVar = var;", correct: false},
            {text: "D) declare myVar;", correct: false}
        ]
    },
    {
        question: "Which of the following is NOT a valid CSS selector?",
        answers: [
            {text: "A) .class", correct: false},
            {text: "B) #id", correct: false},
            {text: "C) *element", correct: false},
            {text: "D) @media", correct: true}
        ]
    },
    {
        question: "In C++, what is the default access specifier for class members?",
        answers: [
            {text: "A) public", correct: false},
            {text: "B) private", correct: true},
            {text: "C) protected", correct: false},
            {text: "D) None of the above", correct: false}
        ]
    },
    {
        question: "Which of the following is a JavaScript framework?",
        answers: [
            {text: "A) Django", correct: false},
            {text: "B) Flask", correct: false},
            {text: "C) React", correct: true},
            {text: "D) Ruby on Rails", correct: false}
        ]
    },
    {
        question: "What does the display: none; CSS property do?",
        answers: [
            {text: "A) Hides the element but keeps it in the document flow", correct: false},
            {text: "B) Removes the element from the document flow", correct: true},
            {text: "C) Makes the element visible", correct: false},
            {text: "D) Changes the element's color", correct: false}
        ]
    },
    {
        question: "Which of the following is a valid way to create a comment in C++?",
        answers: [
            {text: "A) // This is a comment", correct: false},
            {text: "B) /* This is a comment */", correct: false},
            {text: "C) # This is a comment", correct: false},
            {text: "D) Both A and B", correct: true}
        ]
    },
    {
        question: "Which of the following is a valid way to define a function in Python?",
        answers: [
            {text: "A) function myFunction():", correct: false},
            {text: "B) def myFunction():", correct: true},
            {text: "C) create myFunction():", correct: false},
            {text: "D) myFunction() = function:", correct: false}
        ]
    },
    {
        question: "What does the alert() function do in JavaScript?",
        answers: [
            {text: "A) Displays a message in a dialog box", correct: true},
            {text: "B) Sends an alert to the server", correct: false},
            {text: "C) Changes the background color", correct: false},
            {text: "D) Logs a message to the console", correct: false}
        ]
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        answers: [
            {text: "A) color", correct: true},
            {text: "B) font-color", correct: false},
            {text: "C) text-color", correct: false},
            {text: "D) background-color", correct: false}
        ]
    },
    {
        question: "In Python, which keyword is used yo handle exceptions?",
        answers: [
            {text: "A) catch", correct: false},
            {text: "B) try", correct: false},
            {text: "C) except", correct: true},
            {text: "D) handle", correct: false}
        ]
    },
    {
        question: "Which of the following is a valid way to declare a constant in JavaScript?",
        answers: [
            {text: "A) const myConst;", correct: true},
            {text: "B) constant myConst;", correct: false},
            {text: "C) myConst = const;", correct: false},
            {text: "D) let myConst;", correct: false}
        ]
    },
    {
        question: "What is the output of the following JavaScript code: console.log(1 + '1')?",
        answers: [
            {text: "A) 2", correct: false},
            {text: "B) '11'", correct: true},
            {text: "C) 11", correct: false},
            {text: "D) '2'", correct: false}
        ]
    },
    {
        question: "In C++, which of the following is used to include a header file?",
        answers: [
            {text: "A) #include <header>", correct: false},
            {text: "B) #include \"header\"", correct: false},
            {text: "C) #import <header>", correct: false},
            {text: "D) Both A and B", correct: true}
        ]
    },
    {
        question: "What is the purpose of the float property in CSS?",
        answers: [
            {text: "A) To set the position of an element", correct: false},
            {text: "B) To allow text to wrap around an element", correct: true},
            {text: "C) To change the opacity of an element", correct: false},
            {text: "D) To define the size of an element", correct: false}
        ]
    },
    {
        question: "What is the output of the following Python code: print(3 * 'abc')?",
        answers: [
            {text: "A) abcabcabc", correct: true},
            {text: "B) 3abc", correct: false},
            {text: "C) 'abcabcabc'", correct: false},
            {text: "D) Error", correct: false}
        ]
    },
    {
        question: "Which of the following is NOT a valid CSS property?",
        answers: [
            {text: "A) margin", correct: false},
            {text: "B) padding", correct: false},
            {text: "C) border", correct: false},
            {text: "D) text-align", correct: true}
        ]
    },
    {
        question: "Which of the following is a valid way to define a class in C++?",
        answers: [
            {text: "A) class MyClass {};", correct: true},
            {text: "B) MyClass class {};", correct: false},
            {text: "C) define MyClass {};", correct: false},
            {text: "D) class: MyClass {};", correct: false}
        ]
    },
    {
        question: "What does the position: absolute; CSS property do?",
        answers: [
            {text: "A) Positions the element relative to its normal position", correct: false},
            {text: "B) Positions the element relative to its nearest positioned ancestor", correct: true},
            {text: "C) Positions the element at the top of the page", correct: false},
            {text: "D) Positions the element in the center of the page", correct: false}
        ]
    },
    {
        question: "Which of the following is a valid way to create a string in JavaScript?",
        answers: [
            {text: "A) var str = \"Hello\";", correct: false},
            {text: "B) var str = 'Hello';", correct: false},
            {text: "C) var str = `Hello`;", correct: false},
            {text: "D) All of the above", correct: true}
        ]
    },
    {
        question: "What is the output of the following C++ code: \"cout << 5 + 3 * 2;\"?",
        answers: [
            {text: "A) 16", correct: false},
            {text: "B) 11", correct: true},
            {text: "C) 10", correct: false},
            {text: "D) 8", correct: false}
        ]
    },
    {
        question: "In Python, which function is used to read input from the user?",
        answers: [
            {text: "A) input()", correct: true},
            {text: "B) read()", correct: false},
            {text: "C) scan()", correct: false},
            {text: "D) get()", correct: false}
        ]
    },
    {
        question: "What is the correct syntax for a for loop in JavaScript?",
        answers: [
            {text: "A) for (i = 0; i < 5; i++) {}", correct: true},
            {text: "B) for (i < 5; i++) {}", correct: false},
            {text: "C) for (i = 0; i < 5) {}", correct: false},
            {text: "D) for (i = 0; i < 5; i+1) {}", correct: false}
        ]
    },
    {
        question: "What is the purpose of the @media rule in CSS?",
        answers: [
            {text: "A) To define styles for different media types", correct: true},
            {text: "B) To create animations", correct: false},
            {text: "C) To set the background image", correct: false},
            {text: "D) To define font styles", correct: false}
        ]
    },
    {
        question: "Which HTML5 feature allows you to store data locally in the user's browser?",
        answers: [
            {text: "A) Cookies", correct: false},
            {text: "B) Local Storage", correct: false},
            {text: "C) Session Storage", correct: false},
            {text: "D) Both B and C", correct: true}
        ]
    },
    {
        question: "What is the purpose of the \"transform\" property in CSS?",
        answers: [
            {text: "A) To change the color of an element", correct: false},
            {text: "B) To apply 2D or 3D transformations to an element", correct: true},
            {text: "C) To set the position of an element", correct: false},
            {text: "D) To define the size of an element", correct: false}
        ]
    },
    {
        question: "In Python, which of the following is used to create a virtual environment?",
        answers: [
            {text: "A) virtualenv", correct: false},
            {text: "B) venv", correct: false},
            {text: "C) pipenv", correct: false},
            {text: "D) All of the above", correct: true}
        ]
    },
    {
        question: "Which of the following JavaScript methods is used to convert a JSON string into a JavaScript object?",
        answers: [
            {text: "A) JSON.parse()", correct: true},
            {text: "B) JSON.stringify()", correct: false},
            {text: "C) JSON.object()", correct: false},
            {text: "D) JSON.convert()", correct: false}
        ]
    },
    {
        question: "What is the purpose of the @keyframes rule in CSS?",
        answers: [
            {text: "A) To define animations", correct: true},
            {text: "B) To create media queries", correct: false},
            {text: "C) To set the background image", correct: false},
            {text: "D) To define font styles", correct: false}
        ]
    },
    {
        question: "In C++, what is the purpose of the \"friend\" keyword?",
        answers: [
            {text: "A) To declare a function as a friend of a class", correct: false},
            {text: "B) To allow access to private members of a class", correct: false},
            {text: "C) To define a relationship between two classes", correct: false},
            {text: "D) Both A and B", correct: true}
        ]
    },
    {
        question: "Which HTML5 element is used to embed audio files?",
        answers: [
            {text: "A) &lt;audio&gt;", correct: true},
            {text: "B) &lt;sound&gt;", correct: false},
            {text: "C) &lt;media&gt;", correct: false},
            {text: "D) &lt;music&gt;", correct: false}
        ]
    },
    {
        question: "What is the purpose of the flexbox layout in CSS?",
        answers: [
            {text: "A) To create a grid layout", correct: false},
            {text: "B) To align and distribute space among items in a container", correct: true},
            {text: "C) To set the position of elements", correct: false},
            {text: "D) To create responsive images", correct: false}
        ]
    },
    {
        question: "Which of the following is a built-in function in Python to get the length of a list?",
        answers: [
            {text: "A) length()", correct: false},
            {text: "B) size()", correct: false},
            {text: "C) count()", correct: false},
            {text: "D) len()", correct: true}
        ]
    },
    {
        question: "What is the output of the following JavaScript code: console.log(2 == '2' && 2 === 2)?",
        answers: [
            {text: "A) true", correct: true},
            {text: "B) false", correct: false},
            {text: "C) undefined", correct: false},
            {text: "D) Error", correct: false}
        ]
    },
    {
        question: "Which CSS property is used to control the visibility of an element?",
        answers: [
            {text: "A) display", correct: false},
            {text: "B) visibility", correct: false},
            {text: "C) opacity", correct: false},
            {text: "D) All of the above", correct: true}
        ]
    },
    {
        question: "In Python, which of the following is used to import a module?",
        answers: [
            {text: "A) include", correct: false},
            {text: "B) import", correct: true},
            {text: "C) require", correct: false},
            {text: "D) using", correct: false}
        ]
    },
    {
        question: "What is the purpose of the \"data-*\" attribute in HTML5?",
        answers: [
            {text: "A) To store custom data on an element", correct: true},
            {text: "B) To define styles for an element", correct: false},
            {text: "C) To create animations", correct: false},
            {text: "D) To link external resources", correct: false}
        ]
    },
    {
        question: "Which of the following is a valid way to create a responsive image in CSS?",
        answers: [
            {text: "A) img { width: 100%; height: auto; }", correct: false},
            {text: "B) img { max-width: 100%; }", correct: false},
            {text: "C) Both A and B", correct: true},
            {text: "D) img { responsive: true; }", correct: false}
        ]
    },
    {
        question: 'What is the output of the following Python code: print("Hello".replace("l", "r"))?',
        answers: [
            {text: "A) Hero", correct: false},
            {text: "B) Herro", correct: true},
            {text: "C) Hello", correct: false},
            {text: "D) Error", correct: false}
        ]
    },
    {
        question: "What is the purpose of the box-shadow property in CSS?",
        answers: [
            {text: "A) To create a shadow effect around an element", correct: true},
            {text: "B) To set the border of an element", correct: false},
            {text: "C) To define the background color", correct: false},
            {text: "D) To create a gradient effect", correct: false}
        ]
    },
    {
        question: "In C++, which of the following is used to define a destructor?",
        answers: [
            {text: "A) ~ClassName()", correct: true},
            {text: "B) ClassName~()", correct: false},
            {text: "C) destroy ClassName()", correct: false},
            {text: "D) ClassName::~()", correct: false}
        ]
    },
    {
        question: "In Python, which of the following is used to create a class?",
        answers: [
            {text: "A) define ClassName:", correct: false},
            {text: "B) class ClassName:", correct: true},
            {text: "C) create ClassName:", correct: false},
            {text: "D) new ClassName:", correct: false}
        ]
    },
    {
        question: "What is the purpose of the opacity property in CSS?",
        answers: [
            {text: "A) To set the visibility of an element", correct: false},
            {text: "B) To change the color of an element", correct: false},
            {text: "C) To define the transparency level of an element", correct: true},
            {text: "D) To set the position of an element", correct: false}
        ]
    },
    {
        question: "What is the purpose of the \"grid\" layout in CSS?",
        answers: [
            {text: "A) To create a flexible layout for web pages", correct: false},
            {text: "B) To align items in a single row", correct: false},
            {text: "C) To create a two-dimensional layout system", correct: false},
            {text: "D) To set the position of elements", correct: true}
        ]
    },
    {
        question: "Which of the following is a valid way to create a hyperlink that opens in a new tab?",
        answers: [
            {text: 'A) &lt;a href="url" target="_blank"&gt;Link&lt;/a&gt;', correct: true},
            {text: 'B) &lt;link href="url" target="_new"&gt;Link&lt;/link&gt;', correct: false},
            {text: 'C) &lt;a href="url" newtab="true"&gt;Link&lt;/a&gt;', correct: false},
            {text: 'D) &lt;a href="url" target="new"&gt;Link&lt;/a&gt;', correct: false}
        ]
    },
    {
        question: "In Python, which of the following is used to create a list comprehension?",
        answers: [
            {text: "A) list(x for x in iterable)", correct: false},
            {text: "B) (x for x in iterable)", correct: false},
            {text: "C) {x for x in iterable}", correct: false},
            {text: "D) [x for x in iterable]", correct: true}
        ]
    },
    {
        question: "What is the purpose of the \"visibility\" property in CSS?",
        answers: [
            {text: "A) To change the opacity of an element", correct: false},
            {text: "B) To remove an element from the document flow", correct: false},
            {text: "C) To hide an element but keep its space in the layout", correct: true},
            {text: "D) To set the background color", correct: false}
        ]
    },
    {
        question: "What is the purpose of the \":hover\" pseudo-class in CSS?",
        answers: [
            {text: "A) To apply styles when an element is clicked", correct: false},
            {text: "B) To apply styles when an element is hovered over", correct: true},
            {text: "C) To apply styles when an element is focused", correct: false},
            {text: "D) To apply styles when an element is active", correct: false}
        ]
    },
    {
        question: "In C++, which of the following is used to define a template?",
        answers: [
            {text: "A) template&lt;typename T&gt;", correct: true},
            {text: "B) template&lt;T&gt;", correct: false},
            {text: "C) T template<>", correct: false},
            {text: "D) template class T", correct: false}
        ]
    },
    {
        question: " Which of the following is a valid way to create a promise in JavaScript?",
        answers: [
            {text: "A) new Promise((resolve, reject) => {})", correct: true},
            {text: "B) Promise.create((resolve, reject) => {})", correct: false},
            {text: "C) new Promise.resolve((resolve, reject) => {})", correct: false},
            {text: "D) Promise((resolve, reject) => {})", correct: false}
        ]
    },
    {
        question: "What is the purpose of the \"async\" keyword in JavaScript?",
        answers: [
            {text: "A) To define a synchronous function", correct: false},
            {text: "B) To handle errors", correct: false},
            {text: "C) To create a promise", correct: false},
            {text: "D) To define an asynchronous function", correct: true}
        ]
    },
    {
        question: "What is the purpose of the \":nth-child()\" pseudo-class in CSS?",
        answers: [
            {text: "A) To select elements based on their position in a parent", correct: true},
            {text: "B) To select elements based on their class", correct: false},
            {text: "C) To select elements based on their ID", correct: false},
            {text: "D) To select all child elements", correct: false}
        ]
    },
    {
        question: "What is the purpose of the \"grid-template-columns\" property in CSS?",
        answers: [
            {text: "A) To create a responsive layout", correct: false},
            {text: "B) To set the width of columns in a grid layout", correct: false},
            {text: "C) To define the number of columns in a grid layout", correct: true},
            {text: "D) To align items in a grid", correct: false}
        ]
    },
    {
        question: "What is the purpose of the \"async\" and \"defer\" attributes in the <script> tag?",
        answers: [
            {text: "A) To prevent scripts from executing.", correct: false},
            {text: "B) To execute scripts immediately after the document is parsed.", correct: false},
            {text: "C) To load scripts synchronously.", correct: false},
            {text: "D) To load scripts in parallel without blocking HTML parsing.", correct: true}
        ]
    },
    {
        question: "In Python, what is the difference between \"deepcopy\" and \"copy\"?",
        answers: [
            {text: "A) copy creates a shallow copy, while deepcopy creates a deep copy.", correct: true},
            {text: "B) deepcopy creates a shallow copy, while copy creates a deep copy.", correct: false},
            {text: "C) Both create shallow copies.", correct: false},
            {text: "D) Both create deep copies.", correct: false}
        ]
    },
    {
        question: "In CSS, what does the calc() function do?",
        answers: [
            {text: "A) It calculates the dimensions of an element.", correct: false},
            {text: "B) It allows you to perform calculations to set CSS property values.", correct: true},
            {text: "C) It is used to create animations.", correct: false},
            {text: "D) It defines the layout of a grid.", correct: false}
        ]
    },
    {
        question: "What is the output of the following JavaScript code: console.log(0.1 + 0.2 === 0.3)?",
        answers: [
            {text: "A) true", correct: false},
            {text: "B) Error", correct: false},
            {text: "C) undefined", correct: false},
            {text: "D) false", correct: true}
        ]
    },
    {
        question: "Which of the following is a valid way to create a custom event in JavaScript?",
        answers: [
            {text: "A) new Event('eventName')", correct: false},
            {text: "B) new CustomEvent('eventName')", correct: false},
            {text: "C) Both A and B", correct: true},
            {text: "D) event('eventName')", correct: false}
        ]
    },
    {
        question: "In C++, what is the purpose of the virtual keyword?",
        answers: [
            {text: "A) To define a constant variable.", correct: false},
            {text: "B) To allow a function to be overridden in derived classes.", correct: true},
            {text: "C) To create a static member function.", correct: false},
            {text: "D) To define a template function.", correct: false}
        ]
    },
    {
        question: "What is the output of the following JavaScript code: console.log(typeof null)?",
        answers: [
            {text: 'A) "object"', correct: true},
            {text: 'B) "null"', correct: false},
            {text: 'C) "undefined"', correct: false},
            {text: 'D) "number"', correct: false}
        ]
    },
    {
        question: "In CSS, what does the \"@keyframes\" rule define?",
        answers: [
            {text: "A) The styles for a specific media query.", correct: false},
            {text: "B) The styles for a specific class.", correct: false},
            {text: "C) The layout of a grid.", correct: false},
            {text: "D) The animation sequence for an element.", correct: true}
        ]
    },
    {
        question: 'What is the output of the following Python code: print("Hello"[::-1])?',
        answers: [
            {text: 'A) "olleH"', correct: true},
            {text: 'B) "Hello"', correct: false},
            {text: 'C) "H"', correct: false},
            {text: 'D) Error', correct: false}
        ]
    },
    {
        question: "What is the purpose of the this keyword in JavaScript?",
        answers: [
            {text: "A) To refer to the global object", correct: false},
            {text: "B) To refer to the current object in a method.", correct: true},
            {text: "C) To create a new object.", correct: false},
            {text: "D) To define a function.", correct: false}
        ]
    },
    {
        question: "In Python, what is the purpose of the \"with\" statement?",
        answers: [
            {text: "A) To create a loop.", correct: false},
            {text: "B) To handle exceptions.", correct: false},
            {text: "C) To simplify exception handling and resource management.", correct: true},
            {text: "D) To define a function.", correct: false}
        ]
    },
    {
        question: "In CSS, what does the \"pointer-events\" property control?",
        answers: [
            {text: "A) The visibility of an element.", correct: false},
            {text: "B) Whether an element can be the target of mouse events.", correct: true},
            {text: "C) The stacking order of elements.", correct: false},
            {text: "D) The size of an element.", correct: false}
        ]
    },
    {
        question: "Which of the following is a valid way to create a closure in JavaScript?",
        answers: [
            {text: "A) function outer() { let x = 10; return function inner() { return x; }; }", correct: false},
            {text: "B) const inner = () => { return x; };", correct: false},
            {text: "C) function inner() { return x; }", correct: false},
            {text: "D) Both A and B", correct: true}
        ]
    },
    {
        question: "In Python, what is the purpose of the __init__ method?",
        answers: [
            {text: "A) To define a class.", correct: false},
            {text: "B) To initialize an object's attributes.", correct: true},
            {text: "C) To create a static method.", correct: false},
            {text: "D) To define a destructor.", correct: false}
        ]
    },
    {
        question: "In C++, what is the purpose of the \"override\" keyword?",
        answers: [
            {text: "A) To define a constant variable.", correct: false},
            {text: "B) To define a template function.", correct: false},
            {text: "C) To create a static member function.", correct: false},
            {text: "D) To indicate that a method is intended to override a base class method.", correct: true}
        ]
    },
    {
        question: "What is the output of the following JavaScript code: console.log(typeof NaN)?",
        answers: [
            {text: 'A) "number"', correct: true},
            {text: 'B) "NaN"', correct: false},
            {text: 'C) "undefined"', correct: false},
            {text: 'D) "object"', correct: false}
        ]
    },
    {
        question: "Which of the following is a valid way to create a CSS variable?",
        answers: [
            {text: "A) --my-variable: 10px;", correct: false},
            {text: "B) var(--my-variable);", correct: false},
            {text: "C) :root { --my-variable: 10px; }", correct: false},
            {text: "D) Both A and C", correct: true}
        ]
    }
    
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
};
  


function startQuiz () {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();

}

function showQuestion() {
    resetStats();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetStats() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if (isCorrect) {
        selectBtn.classList.add("correct");
        score++;

    } else {
        selectBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;

    });
    nextButton.style.display = "block";
}

function showScore(){
    resetStats();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again!";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else {
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else {
        startQuiz();
    }
});

startQuiz();