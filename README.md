# ReactJS
         [DomainRacer]            <-----------------------------Basics of ReactJS---------------------->



                What is React => angular & vue is also work same like react.
        1. React is JavaScript Library.
        2. The main focus is building UI as fast as possible.
        3. So this is used to Single Page Application[SPA].
        4. Means Complete Website in Single Page.
                React work is to fast develope UI.
        -----------------------************
        Why we used React?  => bcz React is Fast.
            Why is React Fas?
                React Use Virtual DOM .
                Virtual DOM update only required list
                Real DOM update Complete List.
        ----------------------**************
        History & Version UI as fast as possible.
        1. Maintained by Facebook
        2. First Release on 29 May 2013.
        3. The current version is 17.0.2.
        4. Apps With REact is:
            NetFlix
            Whatsapp
            Instagram
            Airbnb etc.
        ----------------------**************
        React js without installation
         * React is Generally used with NPM
         * But we can also use CDN[Content Delivery Netwrok]
         link these three CDN link.
    <script type="application/javascript" src="https://unpkg.com/react@16.0.0/umd/react.production.min.js"></script>           ===> link for react
    <script type="application/javascript" src="https://unpkg.com/react-dom@16.0.0/umd/react-dom.production.min.js"></script>   ===> link for react-dom
    <script type="application/javascript" src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>                   ===> link for babel

    we need these three link for run reactjs without nodejs. using in head section
    then in script section:



        <script text ="text/babel">

        function Test(){
            const clickHandler = () => alert("button clicked.....");
            return <button onClick={clickHandler}>Clickme</button>
        }
        class Hello extends React.Component{
            render()
            {
                return <div>Hello React with code <Test /> </div>
            }
        }
        ReactDOM.render(<Hello />,document.getElementById("id_of_div"));
        
        </script>






        -------------------------*************
        index.js is the entry point in reactjs. and this is the main file.

        ------------------------**************
        React Architecture: How to Structure and Organize a React Application
            There is no recommendation form react side to used any specific architecture.
            React give us to freedom to manage our file structure.
            when we are work on large projection production. then use a architecture for 
            better organize our file system.
            Directory Structure:
                .
                |___assets-> global static assets such as images, svgs,company logo,etc.
                |___components-> global shared/reusable components, such as layout(wrapper,navigation),
                |                 from components,buttons
                |__services-> JavaScript modules
                |__store-> Global Redux store
                |__utils-> Utilities, helpers,constants,and like
                |__views-> can also be called "pages", the majority of the app would be contained here.



            .
            └── /src
                └── /views
                    ├── /Authors
                    │   ├── /AuthorsPage
                    │   │   ├── AuthorsPage.js
                    │   │   └── AuthorsPage.test.js
                    │   └── /AuthorBlurb
                    │       ├── /AuthorBlurb.js
                    │       └── /AuthorBlurb.test.js
                    ├── /Books
                    │   ├── /BooksPage
                    │   │   ├── BooksPage.js
                    │   │   └── BooksPage.test.js
                    │   └── /BookForm
                    │       ├── /BookForm.js
                    │       └── /BookForm.test.js
                    └── /Login
                        ├── LoginPage
                        │   ├── LoginPage.styles.js
                        │   ├── LoginPage.js
                        │   └── LoginPage.test.js
                        └── LoginForm
                            ├── LoginForm.js
                            └── LoginForm.test.js


        -------------------**************
        File Structure and folder in react projects.
        .
        |
        |---->node_module[all pkg which is required stored here.]//these all provide by react app,when it's created
        |       |__node modules in large quantity
        |
        |---->public[it contains html kinds of details. it is not related to react]
        |       |_favicon.ico
        |       |_index.html[index this react find root id which is wirtten in index.js render]
        |       |_logo192.png
        |       |_logo512.png
        |       |_manifest.json[it is a mata file,it conatins icons, display theme. it's used when we create progresive app.]
        |       |_robosts.txt[it is used to protect form google and it's not related to react.]
        |
        |---->src[all work is done here of react]
        |       |_App.css
        |       |_App.js
        |       |_App.test.js[here we write unique test cases]//developer run some test cases through CLI.
        |       |_index.css
        |       |_index.js[this is entry point of react]
        |       |_logo.svg
        |       |_reportWebVitals.js[it give us performance report & inbuild in index.js at bottom]
        |       |_setupTests.js[unique test cases setup start from here]
        |
        |---->gitignore[it is not related to react it used for git, those we don't want to commmit that write here.]
        |
        |---->package-lock.json[it is present in large details]
        |     [it contain details of package.json,and contains history of all package and control them]
        |
        |---->package.json[it is not in details]
             [it contain file name version,all commands and package[it contains details of application]]

        ---------------------**************
        package.json file in details
        1. What is package.json
            package.json is used to store the metadata associated with the project as well as to store 
            the list of dependency packages. In order to add dependency packages to your projects, this file
            makes it easy for others to manage and install the packages associated with the project.

            it contians all details about project like project name, react-version, which commands,
            library, dependency.

        2. How to add new npm package
             there are two way........
                1. type a commad "npm i react-validation" and it install package the write down 
                entry inside package.json file.
                2. simple entry that pakcage into package.json and run command -> npm install 

        3. Remove npm package
             1. run command -> npm uninstall package_name.
             2. remove entry form package.json file and run command -> npm install

        4. custom commands //npm start customise it.
            simple change name inside package.json->script "start" name what you want 
            and run command npm run Name_which_you_give.

        ----------------------***********
        What is dependency?.
         A dependency is some third-party code that your application depends on. Just like a child depends on its
         parent, your application depends on other people's code. A piece of code becomes a true dependency when 
         your own application cannot function without it.
        
        ----------------------************
        Components in Reactjs.
        In general components is a part or element of large thing.like in my laptop keypad,screen,cpu,memory etc.
            In React Component:
                1. A piece of code that can reuse
                2. Such as Function
                3. But more powerful than function
                4. Header, Footer is best example.
                Components has it's own life cycle
        Types of Components:
            Basicaly for creating components we can create function base and class base components.
            And using this there are many types of components....... there is no specific number of components.
                1. Fuctional Component
                2. Class Component
                3. HOC (Higher order component)
                4. Pure Conponent
                5. Controlled Component
                6. Uncontrolled Component


                Generaly we create new file for a new components for our convinient but we can also create multiple 
                components inside one file.

        -----------------------*************
        Function Components:

        creating function components:   save file in src folder with firstLetterCapital like User.js
                ..................Each Component return only one tag so if multiple tage in component then write inside a div tag.
                function User(){
                    return(<h1>HelloWorld!</h1>);
                }
                export default User;
                ----------------------------------------------------------
                for use it into other components like we use in App components.
                1. import it
                2. <User /> or <User></User> mention it where you want to use it.
                import User from './User'
                function App(){
                    return(
                        <div>
                        <User />//use User component in App 
                        </div>
                    );
                }
                export default App;
                ----------------------------------------------------------
                    for writing within one file.

                     function App(){
                        return(
                            <div>
                            <User />//use User component in App 
                            <User />
                            <User />//this is multiple use of components.
                            </div>
                            );
                        }

                         function User(){
                                 return(<h1>HelloWorld!</h1>);
                         }//no need to export now

                        export default App;
        
        
        ---------------------************
        Class Components: for used it need to import {Component} from 'react'. 
        class components inherit react components class.
        it is almost similar but calling to props and defining the state is different in class components.

        import React from 'react';

        export default class User extends React.Component{ //we can export components from here also.
            render()
            {
                return(
                    <h1>HelloWorld!</h1>
                );
            }
          }


        ---------------------*************
        JSX with React:
            1. JavaScript xml(jsx)
                jsx stands for javascript xml(extensible markup language).
                it helps to write html and js together
                example:
                    function (){
                        return(
                            <div>
                            <h1>HelloWorld!</h1>//this is html code.
                            <h1>{10+5}</h1>//print 15 /this is js code.
                            </div>
                        );
                    }
                we can use react without jsx but it is very complecated.
                example:
                    import React from 'react';
                    function User(){
                        return React.createElement('div',null,"HelloWorld");//order tag,id/class,content
                        //for create child in it, it further define inside content section.
                    }
                    export default User;
           

        ------------------------**************
        Click Event and Function:
            1. How to make click event
            2. Call function is the button click.
            
        function App(){
            function clickHandler(){
                alert("Perfectly worked .............");
            }

            return(
                <div>//hree onClick is an event handler and inside curly bracked pass function name.
                <button onClick ={ clickHandler }>ClickMe</button>
                <button onClick ={ ()=>clickHandler() }>ClickMe</button>  ----> using arrow function.
                </div>
            );
        }

        3. Variable in functional Component


        function App(){
            let data = "Sheeshpal Singh";
            function clickHandler(){
                data = "Sheesh"//data is change but still in h1 tag it print privous data.
                alert(data);//alert "Sheeshpal Singh"
            }
            return (
                <div>
                <h1>{data}</h1>//print this data on browser
                <button onclick = { clickHandler }>ClickMe</button>
                </div>
            );
        }


        ---------------------------*************
        State in Functional Component: state is an object.
            1. What is state: is a data container which contains data.
                State is an object. if normal variable are update then react components are not update in react. 
                bcz react wroking method is different. react only update its components when changes appearing in props and state.

            2. Use of state
                if there is chanage in state then react rerender jsx code only. otherwise it don't rerender
                [react understand only state and props]
                Hence for update in component use state not direct data.

            3. Define state
                for define state first of all import useSate hook from react.
                const [data,setData] = useSate(x) //x is the default vallue which is assign into data variable.


            4. Update state with a Button click
                import {useSate} from 'react';
                function App(){
                    const [data,setData] = useSate("SheeshpalSinghSaini");

                    function clickHandler(){
                        setData("Sheesh");//update state and change data.
                    }
                    return(
                        <div>
                        <h1>data</h1>//here print value of data 
                        <button onClick={ clickHandler }>ClickMe</button>
                        </div>
                    );
                }

            5. How state work

        ------------------------**************
        State in Class Components:
            state in class components is different.

            Example:

            class App extends Components{
                constructor(){
                    supper();
                    this.state = {
                        data : "SheeshpalSinghSaini"
                    }
                }
                function clickHandler(){
                    this.setState({data:"Sheesh"});
                    this.setState({data:this.state.data+1});//for make a click counter.
                }
                render()
                {
                    return(
                        <div>
                        <h1>{this.state.data}</h1>
                        <button onClick={()=>this.clickHandler()} >Update</button>
                        //without arrow method, with bind method.
                        <button onClick = {this.clickHandler.bind(this)}>Update</button> ----> without arrow or with bind method.
                        </div>
                    );
                }
            }

        ---------------------------***********
        Props with Functional Component:
        1. What are props
            when we careate a function then pass data through parameter, same in components 
            when we need to pass data in components then it is done by props.props ----> stands for properties.
            props is just a variable we can choose its name anything.
        2. Use of props
            to send data in components.


        3. Example with functional component
            function Student(props){ //it just a copy of name which give inside index.js passing data.
                console.log(porps)//print an object
                console.log(props.name)//print name ====> Sheeshpal.
                return(
                    <div>
                        <h1>Hello {props.name}</h1>     //it print "Hello Sheeshpal".
                    </div>
                );
            }

            ------use insdide index.js  
                <Student /> //put it in render.
                <Student name = "Sheeshpal"> //passing data into Student components 
                //menas we send a props in student component
                <Student name = {"Rahul"} />
                <Student name = {"Ruchi"} />
                    ------------- we can pass multiple data also
                    <Student name = {"Sheeshpal"} email = "sheeshpal@gmail.com" >
                    ------------
                    <Student name = {"Sheeshpal"} email = "sheeshpal@gmail.com" other={address:'dhanaura',mobile:'8979729652'}>



        4. Update props on Button click.
            import {useState} from 'react';
            function App(props){
                const [name,setName] = useSate("SheeshpalSinghSaini")

                return(
                    <div>
                        <h1>Porps in React</h1>
                        <Student name = {name} />
                        <button onClick = {()=>{setName("Sheeshpal")}}>updateName</button>//it change name.
                    </div>
                );
            }


        --------------------**************8
        Props with class Component: use for transfer data from one components to another.
        1. Example with class component
            import React from 'reac';

           export default class Student extends React.Component{
                render()
                {
                    //in class component we can not use directly console.log(""). it can we use in any function.
                    console.log(this.props)// or write down inside any function.
                    return(
                        <h1>{this.props.name}</h1>
                        <h3>{this.props.email}</h3>
                    );
                }
            }

            ------------App component.
                function App(){
                    return(
                        <div>
                            <h1>Props in Class!</h1>
                            <Student name = "SheeshpalSinghSaini" email="sheeshpal@gmail.com" />
                            <Student name = "rahul" email="rahul@gmail.com" />
                        </div>
                    );
                }




        2. Update props on Button click
            import React from 'react';
            class App extends React.Component{
                constructor(){
                    super();
                    this.state={
                        name:"SheeshpalSinghSaini"
                    }
                }
                render()
                {
                    return(
                        <div>
                            <h1>Porps in Class</h1>
                            <Student name ={this.state.name}>
                            <button onClick = {()=>this.setState({name:"Sheeshpal"})}>updateName</button>
                        </div>>
                    );
                }
            }

        ---------------------***********
        [<button onClick={ ()=>setPrint(!print) }>printData</button> ----> condition for hide and unhide]
        Get Input box value
        1. Make Input field.
        2. Make function and get value
        3. Make button and state
        4. Get value on Button Click

            process:
                - make a input field
                - make function for get value from input field
                            -------------function getData(event){
                                                console.log(event.target.value);//print info object get from input field.
                                                
                                            }
                                            return(
                                                <div>
                                                    <h1>Takin input from input field</h1>
                                                    <input type="text" onChange={ getData } />
                                                </div>
                                            );


                - get value on Button click

            import {useState} form 'react';
            function App(){
                const [data,setData] = useState(null)//initial value is null. you can take anything.
                const [print,setPrint] = useState(false);

                function getData(event){
                    console.log(event.target.value)//val.target give info about input field.
                    setData(event.target.value)//set input field value inside state data field.
                    setPrint(false);
                }
                return(
                    <div>
                    <h1>Get Input box value!</h1>
                    <input type="text" onChange = { getData } />
                    {
                        print? <h1>{data}</h1>
                        : null
                    }
                    <button onClick={()=>setPrint(true)} >PrintData</button>
                    </div>
                );
            }


        ---------------------------***********
        Hide and show Element:  when we apply hide and unhide at same button then it known as toggle
            1. Make a div or any other element
            2. Make State for hiding and show element[it control by status of state.]
            3. Make Button
            4. Update state on button click
            
            import React from 'react';
            function App(){
                const [status,setStatus]=React.useState(false);
                return(
                    <div>
                    {
                        status? <h1>HelloWorld!</h1>
                        : null
                    }
                    <button onClick={()=>setStatus(false)}>Hide</button>
                    <button onClick={()=>setStatus(true)}>Show</button>
                    </div>
                );
            }

            for toggle butten:
                <button onClick = {()=>setStatus(!status)}>Toggle</button> -----> toggle condition



        -----------------------------*************
        Basic Form:
            1. Make HTML form
            2. Add some field
            3. Use state for field data
            4. Submit and control form

            import {useState} from 'react';
            function App(){

                const [name,setName] = useState("");//by default it is empty.
                const [tnc,setTNC] = useState(false);
                const [interest,setInterest] = useState("");


                function getFormData(event){
                    e.preventDefault();//it stop to submit form.
                    console.log(name,tnc,interest);
                }

                return(
                    <div className="App">
                        <h1>Handle Form in React</h1>
                        <form onSubmit={getFormData}>
                            <input type="text" placeholder="enter name" onChange={(e)=>setName(e.target.value)} /> <br /> <br />

                            <select onChange={(e)=>setInerest(e.target.value)}>
                            <option>Select Options</option>
                            <option>Marvel</option>
                            <option>DC</option>
                            </select> <br /> <br />

                            <input type="checkbox" onChange={(e)=>setTNC(e.target.checked)} /> <span>Accept Terms and Conditions</span>
                            //checkbox give true or false.
                            <br /> <br />
                            <button type="submit">Submit</button>  //submit button refresh in each submit type
                            //for stop it call an event. it call in form tag and define.
                        </form>
                    </div>
                );
            }


        --------------------------*********
        Conditional rendering | if Condition
            1. Make Component
            2. Use State
            3. Not Recommended Way for condition
            4. Correct way condition
            
            //this is not recomended way.......... 
            New componenet with Profile.js
                import React from 'react'
                function Profile(){
                    const [loggedIn,setLoggedIn] = React.useState(false);
                    if(loggedIn){
                        return(
                            <div>
                                <h1>Welcome Sheeshpal</h1>
                            </div>
                        );
                    }
                    else{
                        return(
                        <div>
                            <h2>Welcome Guest.</h2>
                        </div>
                    );
                    }
                }

                //this is recommended way............
                function Profile(){
                    const [loggedIn,setLoggedIn] = React.useState(false);

                    return(
                        <div>
                        {
                            loggedIn?<h1>Welcome Sheeshpal</h1>
                            : <h2>Welcome Guest..</h2>
                            //for multiple condition.
                            {//demo
                                loggedIn==1?<h1>Welcome User 1</h1>
                                : loggedIn ==2?<h1>Welcome User 2</h1>
                                : <h1>Welcome Guest</h1>
                            }
                        }
                        </div>
                    );
                }


                For App.js components--------
                import Profile from './Profile';

                function App(){
                    return(
                        <div>
                            <Profile />
                        </div>
                    );
                }
        Q. if we used normal variable at place of useState then it work or not.



        ------------------------***********
        Pass Function as Props: * if in multiple components required same function then used this techinque.
                                * if we call same component multiple time then all function of that components put inside parent.
                                they are not create again and again.
            function User(){
                return(
                    <div>
                        <h1>User Component</h1>
                        <button onClick={()=>props.data()}>CallParentFunc</button>
                        <button onClick={ props.data }>CallParentFunc</button> //both work same.
                        <child data={props.data()}/> //now method send to its child.
                    </div>
                );
            }
            export default User;

                            -----------
            import User form './User';
            function App(){

                function getData(){
                    alert("Hello From App");
                }

                return(
                    <div>
                        //this method we can take over to its supper child 
                        //following this process parent and child.
                        <User data = { getData } />                     //pass function name.
                    </div>
                );
            }



        -------------------------------**************
        Life Cycle Methods: this is same as human life cycle.
        ----------------------------------------------------------------------------------------------------------
       |Mounting  |                                      |Updating|                                   |Unmounting |     these are three phase.
        ----------------------------------------------------------------------------------------------------------
            |                    |----------------------------------------------------------|               |    
        constructor              |           New props    setState()    forceUpdate()       |               |
            |                    |              |             |              |              |               |
            |                    |              |             |              |              |               |
            ----------------------------------------------------------------------------    |               |
           |       getDerivedStateFromProps                                             |   |               |
            |--------------------|------------------------------------------------------    |               |
            |                    |               |              |              |            |               |
            |                    |              -----------------------------  |            |               |
            |                    |             |  shouldComponenetUpdate     | |            |               |
            |                    |              -----------------------------  |            |               |
            |                    |                                             |            |               |
            |                    |                                             |            |               |
            ----------------------------------------------------------------------------    |               |
           |                    render                                                  |   |               |
            ---------------------|------------------------------------------------------    |               |
             |                   |                          |                               |               |
             |                   |                          |                               |               |
             |                   |              ----------------------------                |               |
             |                   |             | getSnapshotBeforeUpdate    |               |               |
             |                   |              ----------------------------                |               |
             |                   |                          |                               |               |
             |                   |                          |                               |               |
             ----------------------------------------------------------------------------   |               |
           |       React update DOM and refresh                                          |  |               |
            ---------------------|-------------------------------------------------------   |               |
             |                   |--------------------------|-------------------------------|               |

        ----------------------------           --------------------------------                     ----------------------
       | ComponentDidMount          |         |     ComponentDidUpdate         |                   |  ComponentWillUnmount|
        ----------------------------           --------------------------------                     ----------------------
        constructor ready before render() method.
--------------------------------------------------------------------------------------------------------------------------------
            difference between life cycle and phase is that phase is only three but life cycle are more.

            Example: 
                    Product ----> is a component
                    Here is three phase
                    1. Load Product    ------> initialize or mount this is first phase.
                    2. Update Product  ------> pass props and update state this is done in second phase.
                    3. Remove Product  ------> Hide or remove from DOM this is third phase.

        Use:
            * when page is load in some website pop-up show. so how to find reactJS that when show pop-up
              it simple check that prvious html is done then it show pop-up.----> for this use componentDidMount.

            * it can listen from button that state is update or not.    ----> componentDidUpdate.
            * if we don't remove component then lots of garbae are containe in website. which make it slow our website.
            * when component remove then we get an event -------> componentWillUnmount

    These all life cycle method used inside component. it can be use with both class and function.
                                                                                                                            
        When is run Life Cycle Method in React.
            1. When Component is loaded.    ----> componentDidMount
            2. When Component is updated with state and props.  ----> componentDidUpdate.
            3. When Component is removed.   -----> componentWillUnmount.

    
        Q. if we remove product and load again then new life cycle run or run previous life cycle.
        Ans: after remove component and load agin in this process complete life cycle run again.
        
        
        
        
        --------------------------*****************
        Constructor Life Cycle Method:  constructor is a life cycle method.
        //we talk about here class component after it function component.
            1. What is constructor?.
            2. Why this is important?.
            3. What we can do in this life cycle method?.

            constructor ready before render method.


            Example:

                import React from 'react';
                                                        
                class App extends React.Component{
                    //constructor call before call render method
                    constructor(){
                        super();//used for call parent constructor[React.Component].
                        //consturctor become first that by we declare state inside constructor.
                        //means before render html our state will ready.
                        this.state = {
                            data:"Sheeshpal"
                        }
                        //we are not call API here bcz render is not ready at now. API call in componentDidMount life cycle.

                    }
                    render()
                    {
                        return(
                            <h1>HelloWorld!</h1>
                        );
                    }
                }


            Q. can we take props in constructor?.
                yes, we can recive props inside constructor.
                example:
                    constructor()
                    {
                        super();
                        this.state={
                            email:"sheeshpal@gmail.com"
                        }
                        console.log(this.props.name);
                        console.log(this.props.gender);
                    }


            ------------------***************
            Render, Life cycle method:
                1. Use of render Method.  
                2. Make Class component.
                3. Use state and props with render.
            

                ----> meaning of render is provide.//after execute, represent code.
                -> complete html write down inside render method. for class components
                -> if anything change inside in html then render run again[rerender].
                    //when any props & state are udpate then render run again.
                when render is run:
                    1. when component create first time
                    2. when state and props are update then is also rerender.

                    Example:
                        ---------------User component
                        import React from 'react';

                        class User extends React.Component{
                            constructor(){
                                super();
                                this.state={
                                    email:"sheeshpal@gmail.com";
                                }
                            }
                            render() //this render is a life cycle method
                            {
                                console.log("Render Method Called...."); 
                                return(
                                    <div>
                                        <h1>User Component</h1>
                                        <button onClick={()=>this.setState({email:"singh@gmail.com"})}>updateEmail</button>
                                        //rerender render method on update state of email.
                                    </div>
                                );
                            }
                        }
                        ----------------App component
                            import User from './User';
                            import React from 'react';
                            function App(){
                                const [name,setName] = React.useState("Sheeshpal");
                                return(
                                    <div>
                                        <h1>Render Method in React....</h1>
                                        <User name={name} /> //add user Component inside app component.
                                        <button onClick={()=>setName("Singh")}>updateName</button> //it update name 
                                        //while name is update render method of user component run for all that time.
                                    </div>
                                );
                            }

            Q. can we possible that there are more than one render method inside one component.
            or can we write render inside render?.
            Ans: 

        -------------------******************
        componentDidMount Life cycle method :it call after when all html & css load.
            1. Use of componentDidMount Method.
            2. Make Class component.
            3. No Effect of state and props.

                ->it basicaly used when call to API.
                ->it load after when complete DOM are loaded.

            Example:

            import React from 'react'
            class App extends React.Component{
                constructor()
                {
                    super();
                    console.log("constructor load.......");//it render first
                    this.state={
                        name="Sheeshpal"
                    }
                }
                componentDidMount(){
                    console.log("component Did Mount loaded Now")//it render third
                        //no effect of props and state.
                        //run only one time.
                }
                render()
                {
                    console.log("render method load......");//it render second
                    return(
                    <div>
                        <h1>Component Did Mount....{this.state.name}</h1>
                        <button onClick={()=>this.setState("Sing")}>updateName</button>
                        //after update name constructor & render are not load again only render method load again.
                    </div>
                );
                }
            }

            Q. should we update state inside render method
                & can we update state inside componentDidMount.?

            Ans. we can update but we don't update here bcz it run while state and props are update 
            that by it can go inside infinite loop.

            Q. Can we stop to call componentDidMount?.
            Ans:  if shouldComponentUpdate return false. then componentDidMount never run.
            

            ----------------**************
            componentDidUpdate Life cycle method. : it run only when there is any state or props are update.
                1. Use of componentDidUpdate method.
                2. Make class component.
                3. Use with state and props.
                4. previous props and state.

                use:
                    -> if you update any state inside it then it make a loop and run infinite time.
                    -> bcz it run when state update so wheneve state update it run again and again.
                    -> if you update state inside it then only update inside a condition.

                    Example:

                    import React from 'react';
                    class App extends React.Component{
                        constructor()
                        {
                            super();
                            this.state={
                                name:"Sheeshpal"
                            }
                            console.log("constructor loaded.....");//it run first

                        }
                        componentDidUpdate()
                        {
                            
                            console.log("component Did update loaded....."); //it doesn't run while 
                            //state or props are not udpate.
                        }

                        render()
                        {
                            console.log("render method loaded......");//it run second
                            return(
                                <div>
                                    <h1>Componnet Did update {name}</h1>
                                    <button onClick={()=>this.setState("Singh")}>updateName</button>
                                    //after update name componentDidUpdate called....
                                </div>
                            );
                        }


                    }

                ------------------
                    componentDidUpdate(preProps,preState,snapshot)
                        {
                            //preState provide previous state.
                            if(preState.count===this.state.count){
                                alert("data is already same");
                            }

                            console.log("component Did update loaded....."); //it doesn't run while 
                            //state or props are not udpate.
                        }

                    componentDidUpdate(preProps,preState,snapshot){
                        if(this.state.count<10){
                            this.setState({count:this.state.count+1})
                        }
                    }


                Q. should we call API inside componentDidUpdate?.
                    yes, we can call it, if we do conditional call other wise we do it inside 
                    componentDidMount.

            ---------------***************
            shouldComponentUpdate Life Cycle Method : it basically ask to ask that component should update or not.
            we can use condition when update or not. we can stop a specific rendering.
            if we use it then component are not render again and again that by performance increase.
                1. When shouldComponentUpdate called and use.
                2. It can stop renddering.
                3. Use with state and props.



            Example:

                import React from 'react';
                
                class App extends React.Component{
                    constructor()
                    {
                        super();
                        this.state={
                            count:0
                        }
                    }

                    shouldComponentUpdate()
                    {
                        console.log("shouldComponentUpdate loaded....");
                        //it return false by default.
                    }
                    render(){
                        return(
                            <div className="App">
                                <h2>Should Compoent update {this.state.count}</h2>
                                <button onClick={()=>this.setState({count:this.state.count+1})}>updateCount</button>
                                //increase counter at each click of button.
                            </div>
                        );
                    }

                }

                here shouldComponentUpdate block rendering in itself
                in avobe code count are not update. in render but internaly it update.

                
                import React from 'react'
                class App extends React.Compnent{
                    constructor()
                    {
                        super();
                        this.state={
                            count:0
                        }
                    }
                    shouldComponentUpdate()
                    {
                        console.log("shouldComponentUpdate loade......");
                        return true;//now it allow to render, render method.
                    }

                    render()
                    {
                        return(
                            <div>
                                <h2>Should Component update {this.state.count}</h2>
                                <button onClick={()=>this.setState({count:this.state.count+1})}>updateCounter</button>
                            </div>
                        );
                    }
                }
            ------------ it can we use to stop render at specific time.
            shouldComponentUpdate()
            {
                if(this.state.count>5 && this.state.count<10){
                    return true; //it all render only between 5<render>10
                }
            }

            Q.which one call first componentDidUpdate or shouldComponentUpdate?.
                if shouldComponentUpdate return true then it load first then load componentDidUpdate.
                if shuldComponentUpdate return false then it not load then only load componentDidUpdate.



            ----------------***************
            componentWillUnmount Life Cycle Method. it call when component remove form DOM.
                1. When component will unmount called.
                2. Example of component will unmount.
                3. Use of component will unmount.
                
                * when we do hide and show in component then at the time of hide it completly
                remove from DOM. and then this life cycle call


                import React from 'react';

                class App extends React.Component{
                    constructor(){
                        super();
                        this.state={
                            show:true
                        }
                    }
                    render(){
                        return(
                            <div>
                               {
                                   this.state.show?  <Student />
                                   : null
                               }
                                <button onClick={()=>this.setState({show:!this.state.show})}>ToggleChildComponent</button>
                            </div>
                        );
                    }
                }

                ----------child student Component.
                class Student extends React.Component{
                    componentWillUnmount(){
                        alert("componentWillUnmount Called.......");
                    }
                    render()
                    {
                        return(
                            <div>
                                <h1>Student Component</h1>
                            </div>
                        );
                    }
                }
                exprot default Student

                Q. componentWillUnmount run just before or after remove component form DOM.
                    it run just before remove component from DOM.
                Q. componentWillUnmount depent on class or functional component or not.
                   it not depent on class or function component. 
                   only where componentWillUnmount called only that function must be class component 
                   it work perfectly.
                


            -----------------*****************
             Hooks in ReactsJS :
                1. What are hooks in ReacsJS
                2. How to use them
                3. Example of React Hooks with useState.

                With Hook, we can use class component features in functional components such as state,life cycle, pure component, etc.

                Example:
                    import React,{useState} from 'react'; //here useState is a hook
                    function App(){
                        const [data,setData] = useState("Sheeshpal"); //this value is set into data variable as default.
                        return(
                            <div>
                                <div>Hello World!</div>
                            </div>
                        );
                    }
                
            * Each Hooks start with use like useState,useEffect etc.
            * use keyword reserverd for creating hook so we can not use it anywhere in project.


            Q. Can we used hook in class Component?.
                No, we can not use Hooks in class component.


            ---------------***************
            useEffect in ReactJS.
                1. What is useEffect
                2. How to use useEffect
                3. Example useEffect
                4. useEffect with State and props

                useEffect use as Life cycle method. 
                when component create,state update,props update it call for all. we can put it into condition.
                it is all in one package for all life cycle method.
                useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.

                Example:
                    import React from 'react';

                    function App(){

                        React.useEffect(()=>{
                            alert("Hii");//it run when component load.
                            console.log("Hii!"); //it call like as componentDidMount
                        })

                        return(
                            <div>
                                <h1>useEffect Hook</h1>
                            </div>
                        );
                    }    

                    ---------- another example with update state.
                    function App(){
                        const [count,setCount] = React.useState(0);//default value of count is 0.
                        React.useEffect(()=>{
                            console.log("useEffect run");
                        });
                        
                        React.useEffect(()=>{
                            console.log("useEffect run 2");         //we can define multiple useEffect
                        });
                        return(
                            <div>
                                <h2>useEffect Hook</h2>
                                <button onClick={()=>setCount(count+1)}>update</button>
                                //when update count then useEffect load at that time and each time.
                            </div>
                        );
                    }

                Q. Can we define function inside useEffect Hook 
                and can define useEffect inside function.

            
            --------------*************
            useEffect with Specific State and Props
                1. What is useEffect
                2. useEffect with Specific state
                3. useEffect with Specific props


                useEffect(()=>{
                    console.log("HelloWorld!");
                },[here we use condition]);


                Example:
                    import React,{useEffect,useState} from 'react';
                    function App(){
                        const [data,setData] = useState(10);  //data =10;
                        const [count,setCount] = useState(100);
                        useEffect(()=>{
                            console.log("useEffect called.....");
                        })
                        return(
                            <div>
                                <h1>Count: {count}</h1>
                                <h1>Data: {data}</h1>
                                <button onClick={()=>setCount(count+1)}>UpdateCount</button>
                                <button onClick={()=>setData(data+1)}>updateData</button>
                                //here useEffect work on both update data as well as count.
                            </div>
                        );
                    }

            -----------------another example where we can update only useEffect at updateData.
                    function(){
                        const [data,setData] = useState(10);
                        const [count,setCount] = useState(100);

                        useEffect(()=>{
                            console.log("useEffect called only for data state.....");
                        },[data])//it run only for data update

                        useEffect(()=>{
                            alert("count is : "+count);
                        },[count])//it run only for count update

                        return(
                            <div>
                                <h1>Count : {count}</h1>
                                <h1>Data : {data}</h1>
                                <button onClick={()=>setCount(count+1)}>updateCount</button>
                                <button onClick={()=>setData(data+1)}>updateData</button>
                            </div>
                        );
                    }

            ------------call to specific props.
            import {useEffect} from 'react';

            function User(props){

                useEffect(()=>{
                    console.log("useEffect called......");
                })
                return(
                    <div>
                        <h1>Count Props : {props.count}</h1>
                        <h1>Data Props : {props.data}</h1>
                    </div>
                );
            }

            ----------here is app component for above code.
            function App(){
                const [data,setData] = useState(10);
                const [count,setCount] = useState(100);

                return(
                    <div>
                        <User count = {count} data = {data} />
                        <button onClick={()=>setCount(count+1)}>updateCount</button>
                        <button onClick={()=>setData(data+1)}>updateData</button>
                    </div>
                );
            }

            -----------------call to specific props with condition.
             import {useEffect} from 'react';

            function User(props){

                useEffect(()=>{
                    console.log("Count is : "+ props.count);
                },[props.count,props.data])
                return(
                    <div>
                        <h1>Count Props : {props.count}</h1>
                        <h1>Data Props : {props.data}</h1>
                    </div>
                );
            }

            ----------here is app component for above code.
            function App(){
                const [data,setData] = useState(10);
                const [count,setCount] = useState(100);

                return(
                    <div>
                        <User count = {count} data = {data} />
                        <button onClick={()=>setCount(count+1)}>updateCount</button>
                        <button onClick={()=>setData(data+1)}>updateData</button>
                    </div>
                );
            }

        
        ---------------***************
        Style type in ReactJS.
         1. How many ways we have for style in Reactjs. : three type style are there
         2. Use the normal stylesheet // like app.css,index.css
         3. Style with the variable or Inline Style //use inside tag, use only camel case.
         4. CSS with Module. //making css file in a module
         
        for inline : <h1 style={{color:'red',backgroundColor:'black'}}>H1 heading.....</h1>




        4. css with module: save name with module.  like "custom.modules.css"
            .success{
                color:goldernrod;
                background-color: black;
            }

            ---------Use inside app.js
            import style form './custom.module.css';

            function(){

                return(
                    <div>
                        <h1 className={style.succcess} >Heading 1........</h1>
                    </div>
                );
            }


        Q. Can we used regular css and modular css with combine.

















































=============================== Interview Question ======================
    .
    |___constructor
    |___render
    |___componentDidMount


1. what is NPM and why we used it?.
    NPM => stands for Node Package Manager
    It is manage all the node package which is required to run react app.
    manage it inside node_modules folder.

2. What is NPM alternative?.
    yarn is the npm alternative. it own by facebook 
    structure is same in both yarn & npm.

3. Cheack React version from your project.
    in package.json: "react": "^17.0.2"//thisi s react version

4. Which is most important file in project files?.
    package.json is most important file in react project.

5. When we push project on github then we don't push node_modules?. and when other one is used it then
 how they get these node_modules.

    node_mouduls are very heavy in it self means large in size.
    for generate node_modules to other developer simple run command -> npm install
    npm install basicaly peekup dependency and install them into node_modules 
    which are already availabe npm doesn't download them again just check them.
    
6. Can we create Components inside components?.
    Yes we can create.
                 function App(){
                     function Apple(){
                         return(<div>HelloWorld!</div>)
                     }
                    return(
                        <div>
                        <User />//use User component in App 
                        <Apple /> or {Apple()}
                        </div>
                    );
                }
                export default App;

7. Can we use react and Angular both in a same project?.
    Yes, we can used both together bcz react is a library we can use it with any framework.

8. Can we use JSX without react?.
    yes, we can use jsx withou react.

9. Why normal variable are not update?.
    bcz coponent are not rerender .

10. Can we used components state outside the state?.
    we can use but that is not authenticate way, and react also not allow us to use this.
11. state is public or private.
    state are public.

12. Can we use useState inside class Component?.
    No, we can not use "useState".

13. Can we pass a function as props?.
    yes, we can pass, this process known as "lifting up state".

14. Can we change props in that component where it is receive?.
    No, we can not change in child component it may be class or function.
    it can only change inside parent component where it is send.

15. Can we pass html as props?.
    yes, for this use this.props.childreen if you use class component.

16. Can we get value of radio button and checkbox like input field?.

17. How we can desable any field in form?.


