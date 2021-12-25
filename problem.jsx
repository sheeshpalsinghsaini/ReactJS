/*

A React Component can go through four stages of its life as follows. 
 

Initialization : This is the stage where the component is constructed with the given Props and default state.
                This is done in the constructor of a Component Class.
Mounting: Mounting is the stage of rendering the JSX returned by the render method itself.
Updating: Updating is the stage when the state of a component is updated and the application is repainted.
Unmounting: As the name suggests Unmounting is the final step of the component lifecycle where the
            component is removed from the page.


-As in JSX, we specify javascript in “{ }” that is why the method name is in the { }.

Babel:
Its main application is as a compiler to convert code written in ECMAScript2015+ into 
backwards-compatible JavaScript. While most popular browsers can support ECMAScript2015 ( or ES6),
JSX is not compatible implement in browser that why babel convert it into ECMAScrip.
#############################################################################################


 What is React? 
    React is a free and open-source front-end js library component-based. it is maintained by meta.


☆ What are the major features of React?
    1. Virtual DOM
    2. Javascript XML or JSX.
    3. One-way Data Binding
    4. Component Based Architecture.


☆ What are the advantages of React? 
    -Reusable Components
    -Performancd Enhancement due to virtual DOM.
    -it is offering a very rich js library.
        Disadvantage:
            -Poor Documentation
            -ReactJS covers only the UI Layers of the app and nothing else.
            -JSX as a barrier. html & js mixed together. 
            this approch has its own benefits, but some 
            developer community consider jsx as a barrier.
    

☆ What is CRA and its benefits? 
    CRA[create-react-app] is the easiest way to get started building React 
    application. it provides a default setup with a number of core features.


☆ How to bind methods or event handlers in JSX callbacks?  
    we need to bind events, this keyword would not return an "undefined". 

                        class EventBind extends Component{
                            
                            constructor(props){
                                super(props);
                                this.state={
                                    message:"I Love My Self"
                                }
                            }

                            onClickHandler(){
                                this.setState({
                                    
                                    message:"I Love JavaScript!"
                                })
                                console.log("It is working fine greate Jobs!..........");
                            }


                            render()
                            {
                                return(
                                    <div className="btn">
                                        <h1>{this.state.message}</h1> 
                                        <button onClick={ this.onClickHandler.bind(this) }>Change</button> 
                                        using arrow function is easy. and easly pass data *
                                        <button onClick={ () => this.onClickHandler() }>Change</button>
                                    </div>
                                );
                            }
                        }






                        
☆ How to pass a parameter to an event handler or callback?  


☆ How do you pass arguments to an event handler? 
        we can pass arguments to event Handlers using two ways.....
            - Arrow Function:
                        <button onClick={(e)=>this.handleClick(id,e)}>Delete</button>
            - Bind Method:
                        <button onClick={this.handleClick.bind(this,id)}>Delete</button>
            Note:
                - In both cases, the e argument representing the React event will be passed
                as a second argument after the ID.
                - With an arrow function, we have to pass it explicitly, but with bind any
                further arguments are automatically forwarded.






☆ How events are different in React? 
    Handling event in react is similar to handling event in DOM. there are some syntax difference are.
    -With JSX you pass a function as the event handler, rather than a string.
    - in HTML :
               <button onclick="activateLasers()">
                Activate Lasers
                </button>
      in react:
              <button onClick={activateLasers}>
                Activate Lasers
                </button>






 ☆ What are inline conditional expressions? 
        inline conditional expressions refers to conditional operator like ternary operator
                        example   {
                                        condition?(expression1/for true):(expression2/for false);
                                   }
    
  


☆ How to write comments in React?    
        two type comments single line //
                          multi line /* *//*



☆ What is strict mode in React? 
    Stric mode is a tool for highlighting potential problems in an application.
    it doen't render any  visible UI. Strict mode checks are run in development
    mode only; they do not impact the production build.

    we can enable strict mdoe for any part of our application.
            return(
                <div>
                    <Header>
                        <React.StrictMode>
                            <div>
                                <ComponentOne />
                                <ComponentTwo />
                            </div>
                        </React.StrictMode>
                    </Header>
                </div>
            );

    Strict mode currently helps with:
                -Identifying components with unsafe lefecycles.
                -Detecting unexpected findDOMNode usage
                -Detecting unexpected side effects
                

         
 ☆ What are the common folder structures for React?      
        actualy react not recommend any file structure. for our 
        convinient we put all similar file together like.
        api/
            APIUtils.js
            APIUtils.test.js
            ProfileAPI.js
            UserAPI.js
        components/
            Avatar.js
            Avatar.css
            Feed.js
            Feed.css
            FeedStory.js
            FeedStory.test.js
            Profile.js
            ProfileHeader.js
            ProfileHeader.css



☆ Is it good to use arrow functions in render methods?
       If you use arrow functions within render , each call to render will create new function objects. If you then pass these functions to child elements via props , optimizations based on PureComponent or shouldComponentUpdate will fail (as the arrow function props will change on every render).         




☆ What are the limitations of React?
        -Poor Documentation.
        -view part: Reactjs cover only UI Layer of the app and nothing else.
        -Bigner jsx is consider as a barrier.



☆ What is the difference between HTML and React event handling?
    The reason behind this is that React works on the concept of virtual DOM, on the other hand, the HTML has access to the Real DOM all the time.

As in JSX, we specify javascript in “{ }” that is why the method name is in the { }.
    
In HTML:
    -we specify event using “onclick”,”onsubmit”which is the normal convention. 
    -We bind or provide the listener in form of the string.
    -The string we pass to the listener should have “( )” at the end in order to work.
    -We can add event listener any time using external javascript.

In ReactJS:
    -We specify the event using  “onClick”,”onSubmit” likewise which is camel case convention.
    -We bind or provide the listener in form of function name or method name as a variable. 
    -We are only suppose to pass the method  name and nothing else. React can determine that it has to run this method.
    -We have to specify all the Events at the time of creating the component. 





* what are Hooks in ReactJS?
        Hooks are the function in react it allow us to use state and other feature of react. without writing a class.
        this is a new feature i react. it come in react 16.8 version.



* Describe useState and useEffect with example.
        they are both are the hooks in reactjs






☆ What are synthetic events in React? 





 


☆ What would be the common mistake of function being called every time the component renders? 


☆ Why React uses className over class attribute? 


☆ What will happen if you use setState in constructor? 


☆ How to define constants in React? 


☆ Why do we use array destructuring (square brackets notation) in useState?  
    When we declare a state variable with useState , it returns a pair — an array with two items. The 
    first item is the current value, and the second is a function that updates the value




☆ What is react scripts? 
     a script is basically a list of instructions.
     these instruction is usefull for configuration react-app using "create-react-app app_name"

     In React apps, scripts are located in the package.json file. This file has some default scripts,
     but it’s still possible to edit them.
      "scripts": {
                "start": "react-scripts start",
                "build": "react-scripts build",
                "test": "react-scripts test",
                "eject": "react-scripts eject"
            }

            eject:  this script as a “one-way operation” and warns that “once you eject, you can’t go back!”






☆ What are the features of create react app? 


☆ How browser renders react?
    ->Local Development Server.
    ->Creating a Production Bundle.



☆ What is state in Reactjs?.
    State is a JavaScript object that stores a component's dynamic data and determines the component's behaviour  


☆ Difference between module & package
   Module: A module is a single file (or files) that are imported under one import and used.
   Package: A package is a collection of modules in directories that give a package hierarchy


☆ setState() method is sync or async? Why so? 


☆ How different is React’s ES6 syntax when compared to ES5? 


☆ How to share data across multiple component


☆ Angular vs React vs Vue





Topic 2 : DOM





☆ What is Virtual DOM? 


☆ How Virtual DOM works? 


☆ What is the difference between Shadow DOM and Virtual DOM?  


☆ What is the difference between Real DOM and Virtual DOM?  


☆ What is the use of react- dom package? 


☆ What is the purpose of render method of react- dom? 


☆ What is the difference between React and ReactDOM? 


☆ Why ReactDOM is separated from React? 





Topic 3 : JSX





☆ What is JSX? 


☆ How to loop inside JSX? 


☆ Do browsers understand JSX code? 


☆ Is it possible to use react without JSX? 





Topic 4 : State & Props





☆ What is state in React? 


☆ How to listen to state changes? 


☆ What are props in React? 


☆ What is the difference between state and props?  


☆ What is children prop? 


☆ What are default props? 


☆ Why should we not update the state directly? 


☆ What is the purpose of callback function as an argument of setState()?  


☆ What is the purpose of using super constructor with props argument?  


☆ How to apply validation on props in React? 


☆ What will happen if you use props in initial state? 


☆ Why we need to be careful when spreading props on DOM elements?


☆ Why we need to pass a function to setState()? 


☆ Why you can't update props in React? 


☆ What are the possible ways of updating objects in state?  


☆ Explain State Management using state & props


☆ Props are mutable or not? 





Topic 5 : Lifting state up





☆ What is Lifting State Up in React? 





Topic 7 : Fragments





☆ What are fragments? 


☆ Why fragments are better than container divs? 





Topic 8 : Components





☆ What is the difference between Element and Component? 


☆ How to create components in React? 


☆ What is the recommended way for naming components? 


☆ What is the recommended ordering of methods in component class?  


☆ Why should component names start with capital letter? 





☆ When to use a Class Component over a Function Component?  


☆ How do you conditionally render components? 


☆ How to update a component every second? 


☆ How to import and export components using react and ES6?  


☆ What are the exceptions on React component naming? 


☆ What is the required method to be defined for a class component?  


☆ What are the possible return types of render method? 


☆ What is the main purpose of constructor? 


☆ Is it mandatory to define constructor for React component? 


☆ What is the difference between super() and super(props) in React using ES6 classes? 


☆ Why is a component constructor called only once?  


☆ Difference between mounting & rendering. 





Topic 9 : Pure Component





☆ What are Pure Components? 





Topic 10 : Higher Order Component





☆ What are Higher- Order components? 


☆ How to create props proxy for HOC component?  


☆ What are the limitations with HOCs?

*/