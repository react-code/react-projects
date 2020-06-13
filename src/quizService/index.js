const qBank = [
  {
    question:
      "What is Babel?",
    answers: ["A Transpiler", "An Interpreter", "A Compiler", "Both Compiler and Transpiler"],
    correct: "Both Compiler and Transpiler",
    questionId: "099099"
  },
  {
    question:
      'What port is the default where the webpack-dev-server will run?',
    answers: ["3000", "8080", "3306", "9000"],
    correct: "8080",
    questionId: "183452"
  },
  {
    question:
      "What is ReactJs?",
    answers: ["Server Side Framework", "User-interface Framework", "A library for building interaction interfaces", "None of these"],
    correct: "A library for building interaction interfaces",
    questionId: "267908"
  },
  {
    question: "In React what is used to pass data to a component from outside?",
    answers: [
      "setState",
      "render and arguments",
      "props",
      "PropTypes"
    ],
    correct: "props",
    questionId: "333247"
  },
  {
    question: "How can you access the state of a component from inside of a member function?",
    answers: ["this.getState()", "this.values", "this.prototype.stateValue", "this.state"],
    correct: "this.values",
    questionId: "496293"
  },
  {
    question:
      "What is a react.js in MVC?",
    answers: [
      "Middleware",
      "Controller",
      "Model",
      "Router"
    ],
    correct: "Controller",
    questionId: "588909"
  },
  {
    question:
      'What is the name of React.js Developer ?',
    answers: ["Jordan mike", "Jordan Lee", "Jordan Walke", "Tim Lee"],
    correct: "Jordan Walke",
    questionId: "648452"
  },
  {
    question: "Who Develop React.js?",
    answers: ["Apple", "Facebook", "Twitter", "Google"],
    correct: "Facebook",
    questionId: "786649"
  },
  {
    question:
      ".............. helps react for keeping their data unidirectional.",
    answers: ["JSX", "Flux", "Dom", "Props"],
    correct: "Flux",
    questionId: "839754"
  },
  {
    question:
      "Which of the following is the correct data flow sequence of flux concept?",
    answers: [
      "Dispatcher->Action->Store->View",
      "Action->Dispatcher->View->Store",
      "Action->Dispatcher->Store->View",
      "Action->Store->Dispatcher->View"
    ],
    correct: "Action->Dispatcher->Store->View",
    questionId: "98390"
  },
  {
    question: "Keys are given to a list of elements in react. These keys should be -",
    answers: ["Do not requires to be unique", "Unique in the DOM", "Unique among the siblings only", "All of the above"],
    correct: "Unique among the siblings only",
    questionId: "1071006"
  },
  {
    question: "ReactJS uses _____ to increase performance",
    answers: ["Original DOM", "Virtual DOM", "Both 1 & 2", "None of above"],
    correct: "Virtual DOM",
    questionId: "1174154"
  },
  {
    question: "Props are __________ into other components",
    answers: ["Methods", "Injected", "Both 1 & 2", "All of the above"],
    correct: "Methods",
    questionId: "1226535"
  },
  {
    question: "What does the 'webpack' command do?",
    answers: ["Transpiles all the Javascript down into one file", " Runs react local development server.", "A module bundler", "None of the Above"],
    correct: "A module bundler",
    questionId: "1310938"
  },
  {
    question: "How many elements does a react component return?",
    answers: ["2 Elements", "1 Element", "Multiple Elements", "None of These"],
    correct: "Multiple Elements",
    questionId: "1436873"
  },
  {
    question: "In which directory React Components are saved?",
    answers: ["Inside js/components/", "Inside vendor/components/", "Inside external/components/", "Inside vendor/"],
    correct: "Inside js/components/",
    questionId: "1515110"
  },
  {
    question: "Everything in React is a _____________",
    answers: ["Module", "Component", "Package", "Class"],
    correct: "Component",
    questionId: "1642728"
  },
  {
    question:
      "Which of the following API is a MUST for every ReactJS component?",
    answers: ["getInitialState", "render", "renderComponent", "None"],
    correct: "renderComponent",
    questionId: "1747256"
  },
  {
    question:
      "At the highest level, React components have lifecycle events that fall into",
    answers: ["Initialization", "State/Property Updates", "Destruction", "All of these"],
    correct: "All of these",
    questionId: "1822532"
  },
  {
    question: "Number of elements, a valid react component can return",
    answers: ["1", "2", "3", "4"],
    correct: "1",
    questionId: "195075"
  },
  {
    question: 'State in react is________',
    answers: ["A permanent storage", "Internal storage of the component", "Both of above", "None of above"],
    correct: "Internal storage of the component",
    questionId: "2019778"
  },
  {
    question: "props in react can________",
    answers: [
        "Be changed inside the component", 
        "Not be changed in the component", 
        "Be changed in side other component", 
        "None of above"
    ],
    correct: "Not be changed in the component",
    questionId: "2134343"
  },
  {
    question: "The state in react can be updated by call to setState method. These calls are",
    answers: [
      "Synchronous in nature",
      "Asynchronous in nature",
      "Are asynchronous but can be made synchronous when required",
      "None of above"
    ],
    correct: "Asynchronous in nature",
    questionId: "2210799"
  },
  {
    question:
      "componentDidMount lifecycle method is called when____",
    answers: ["Component is created for the first time", "Component is updated", "Both of above", "None of above"],
    correct: "Component is created for the first time",
    questionId: "2379831"
  },
  {
    question: "Keys are given to a list of elements in react. These keys should be",
    answers: [
        "Unique in the DOM", 
        "Unique among the siblings only", 
        "Do not requires to be unique", 
        "None of above"
    ],
    correct: "Unique among the siblings only",
    questionId: "2426418"
  },
  {
    question: "For controlled components in react",
    answers: [
        "Source of truth is DOM", 
        "Source of truth is component state", 
        "Source of truth can be anything", 
        "None of above"
    ],
    correct: "Source of truth is component state",
    questionId: "2510086"
  },
  {
    question: "For uncontrolled components in react",
    answers: [
      "Source of truth is DOM",
      "Source of truth is component state",
      "Source of truth can be anything",
      "None of above."
    ],
    correct: "Source of truth is DOM",
    questionId: "2685745"
  },
  {
    question:
      "To upload a file from react component, A developer will require to write",
    answers: ["A controlled component", "An Uncontrolled component", "Can be done from both", "None of above"],
    correct: "An Uncontrolled component",
    questionId: "2796884"
  },
  {
    question: "Ref in react component is used to assign reference to DOM elements. Ref can be created by",
    answers: ["Assigning a value to ref attribute in JSX", "Calling React.createRef method", "Both of Above", "None of above"],
    correct: "Both of Above",
    questionId: "2838900"
  },
  {
    question: 'How do you access a function fetch() from a h1 element in JSX?',
    answers: ["<h1>{fetch()}</h1>", "<h1>${fetch()}</h1>", "<h1>{fetch}</h1>", " <h1>${fetch}</h1>"],
    correct: "<h1>{fetch()}</h1>",
    questionId: "298060"
  },
  {
    question: "Which method in a React Component should you override to stop the component from updating?",
    answers: ["willComponentUpdate", "shouldComponentUpdate", "componentDidUpdate", "componentDidMount"],
    correct: "shouldComponentUpdate",
    questionId: "3096579"
  },
  {
    question: "Which method in a React Component is called after the component is rendered for the first time?",
    answers: [
      "componentDidMount",
      "componentDidUpdate",
      "componentMounted",
      "componentUpdated"
    ],
    correct: "componentDidMount",
    questionId: "3182461"
  },
  {
    question: "Which of the following is correct syntax for a button click event handler, foo?",
    answers: [
      "<button onClick={this.foo}>",
      "<button onClick={this.foo()}>",
      "<button onclick={this.foo}>",
      "<button onclick={this.foo()}>"
    ],
    correct: "<button onClick={this.foo}>",
    questionId: "3239112"
  },
  {
    question: "What happens when you call setState() inside render() method?",
    answers: ["Stack overflow error", "Repetitive output appears on the screen", "Duplicate key error", "Nothing happens"],
    correct: "Stack overflow error",
    questionId: "3318503"
  },
  {
    question:
      'How do you write an inline style specifying the font-size:12px and color:red; in JSX',
    answers: ["style={{fontSize:'12px',color:'red'}}", "style={{font-size:12,color:'red'}}", "style={fontSize:'12px',color:'red'}", "style={{font-size:12px,color:'red'}}"],
    correct: "style={{fontSize:'12px',color:'red'}}",
    questionId: "3410327"
  },
  {
    question: "What are the three basic hooks provided by React?",
    answers: ["useState", "useEffect", "useContext", "All of the Above"],
    correct: "All of the Above",
    questionId: "3542596"
  },
  {
    question: "What is state in React?",
    answers: ["A persistant storage.", "An internal data store (object) of a component.", "Both of the Above", "None of the Above"],
    correct: "An internal data store (object) of a component.",
    questionId: "3667517"
  },
  {
    question: "What are the two ways that data gets handled in React?",
    answers: [
      "state & props",
      "services & components",
      "Both of the Above",
      "None of the Above"
    ],
    correct: "state & props",
    questionId: "3791672"
  },
  {
    question: "What are the advantages of React JS?",
    answers: [
        "Can be used as both client and server side", 
        "increases readability", 
        "makes maintainability", 
        "Can be used with other frameworks(Angular.js, Backbone.js)"],
    correct: "Can be used as both client and server side",
    questionId: "3893585"
  },
  {
    question: 'What is a controlled input element?',
    answers: [
        "An input element whose value is being controlled by a component’s state", 
        "An input element with the controlled flag", 
        "An input element that can only accept a list of characters", 
        "An input element that is controlled by the value of another input element"],
    correct: "An input element whose value is being controlled by a component’s state",
    questionId: "3913430"
  },
  {
    question: "What is the declarative way to render a dynamic list of components based on values in an array",
    answers: ["Using the reduce array method", "With a for/while loop", "Using the <Each /> component", "Using the Array.map() method"],
    correct: "Using the Array.map() method",
    questionId: "4049121"
  },
  {
    question:
      "When it is recommended to pass this.setState as a function instead of an object?",
    answers: [
        "When the new state should completely replace the old state", 
        "When the new state depends on the old state", 
        "When the new state does not depend on the old state", 
        "None of the Above"],
    correct: "When the new state depends on the old state",
    questionId: "4150746"
  },
  {
    question:
      "What will happen if you render an input element with disabled = {false}",
    answers: [
        "It will be rendered as enabled", 
        "It will be rendered as disabled", 
        "It will not be rendered at all", 
        "None of the Above"
    ],
    correct: "It will be rendered as enabled",
    questionId: "4235063"
  },
  {
    question: "What is a good use case for using a function while rendering a dynamic list of items",
    answers: [
        "If we need to compute a value based on properties of items in the loop.", 
        "Functions should not be used while rendering a dynamic list.", 
        "To make the code shorter", 
        "Noen of these"
    ],
    correct: "If we need to compute a value based on properties of items in the loop.",
    questionId: "4321002"
  },
  {
    question: "What function can be used to change the state of a React component?",
    answers: [
      "this.setState",
      "this.changeState",
      "this.State = {}",
      "None of these"
    ],
    correct: "this.setState",
    questionId: "4442286"
  },
  {
    question: "What is the second argument for setState useful for?",
    answers: [
      "To invoke code after the setState operation is done",
      "To replace the state completely instead of the default merge action",
      "To access the previous state before the setState operation",
      "None of these"
    ],
    correct: "To invoke code after the setState operation is done",
    questionId: "4564430"
  },
  {
    question: "Which of the following below act as the input of a class-based component?",
    answers: ["props", "class and factory", "render and mount", "None of these"],
    correct: "props",
    questionId: "4630606"
  },
  {
    question:
      "Why use async/await over simple promise chains?",
    answers: ["Readability", "faster", "They are required in modern JavaScript.", "You cannot alter a components state without them."],
    correct: "Readability",
    questionId: "4795960"
  },
  {
    question: "What is the way to avoid passing props through intermediate elements in the component tree?",
    answers: ["React.createContext();", "React.fragment();", "React.Component();", "React.createRef();"],
    correct: "React.createContext();",
    questionId: "4811162"
  },
  {
    question: "What is shallow rendering?",
    answers: [
        "Rendering just the component and not its children.", 
        "Rendering the component without needing to pass any props or setting any state.", 
        "Rendering the component with a shallow context object.", 
        "Rendering the component without enforcing the prop types."],
    correct: "Rendering just the component and not its children.",
    questionId: "4982981"
  }
];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));