# Namaste React

## Episode 01:Inception
 1) Runnig a react from a HTML file using CDN links (first time).
2) CreateElement method of React which uses 3 arguments to create any html elements,
The first argument is type, second is object, third is child.

We can create nested as well as sibling types of HTML structures using an array of child in create element method.

3) Creating a root element using ReactDOM.createRoot method , it's pretty simple just get element by id which is defined root above 

3) last about rendering our element to root.

Render replaces previous stuff with its argument content,

It does not append but replaces existing content.

This was from my side, The overall experience was good learning for the first time from him  He is going into depth.
## Episode 2- Igniting Our App. 

In this I Learned 👇
What is NPM? It's  abbreviation reality, what it works
Command npm init. 

Then I got to know about Package.json file super important file -- for dependency/packages

Installing packages npm install and installed parcel , got to know the difference between -D vs normal installation

About Caret(^) in version, for automatic minor updation if any .

Then jumped to Package.json - which basically locks the version installed.

Then comes node modules,lots of files about 5k😤 , along with parcels other modules got installed which were dependency of parcel called transitive dependencies.... node modules are like database for the packages,

Got to know why we should not push node modules files because it's heavy and can be re generated using package.json and package -lock.json.

Next learned how to ignite the app using parcel

By command npx parcel index.html (removed App.js as main ).

Installed react and reactdom as package in app using npm install .

Removed cdn links and tried to import React and reactdom, which throws error so made the app.js file as type =" module"

Learn about superpowers of Parcel like HMR (Hot module Replacement),
File watching algorithms,Tree Shaking......etc

Difference between development and build mode

Then I last learned about browserlist :
We can list the browser in which our app will support,

Country wise or browser version wise.

And also correct answer to question why your app is fast ? It's not just React but also the superpower of bundlers and supporting stuff along with react .

And at  last satisfied that done something for the day .
## Episode 03- Laying The foundation 👇 

1) Scripts - package.json allows launching react without manually typing commands each time 

npm start : launches development server 
npm run build : produces production version in build / folder 

2) React Element: A plane object that represents A DOM node .This object tells JSX what to render .

3) Importing reactDom from "react-dom/client" not just "react-dom" in newer version (got an error)

This is required to create Root.

4) JSX (JavaScript XML)

 JSX improves the readibility of code :

 `const ele = <h1>{title}<h2/>`

JSX is not a HTML it's like the HTML it gives a feature to write HTML code in Javascript environment .

Under the hood Babel transpiles( not a word lol) jsx into js element  and it is handled by @babel/preset-react or transform-react-jsx

Flow: Write JSX-> Babel plugin transform into createElement(...) calls-> React uses these elements for DOM updates.

5) Babel (name is quite interesting:p)

Converts modern JS and JSX to browser-compatible code.

Plugins: @babel/preset-env (ES features)
@babel/preset-react (JSX syntax)

6) JSX Attributes & some Syntax Rules:

-Use className instead of class, and camel case 

-Wrap multiline JSX in parenthesis ()

7) React components:

(a)  Class Components (legacy) 

(b) Function Components (modern) can use function name or arrow function 

const Comp = () => <h1> Hello</h1>

Components names must start with a capital Letter 

8) Component Composition:

We can nest components to build hierarchies, components inside components .

9) JSX expression power and Security 

Use {} to embed JS codes and elements.

React automatically escapes input inside {} to prevent injection attacks (etc)

10) JSX element vs component usage:

{Title}-> refers to a value (eg variable or component function)

`<Title/> a component instance without children.`

<Title></Title> same,but allows nested children.

## Episode 04-  show me the code 🧐

1) Building a Food Delivery App :

Project planning -> Structure and layout.
  Trying to build a layout like Swiggy with header ,body and footer .

Css styling and layout (it sucks )

Like managing size height, hover and all (but when it shows output a satisfaction comes )

2) Inline Style in React application 

Either by declaring as object and using or directly using inside JSX

const styleObj= {
//Css
};

Then in JSX using {styleObj}


Or directly in JSX 

style= {{background:"yellow".......}}

4) Creating our most important: Restaurant card component 

A component is reusable so instead of making different res cards for each restaurant just a component and can be reused.

5) Props in react - to make component dynamic 

Props stand for properties, are like function parameters used to pass data to components.

5.1) using props as object 
(props)=>{
{props.name}};

5.2) Destructuring props directly: ({name,rating})=>

{name}{rating}

5.3) Destructuring from the passed object:
({resData})=>{
 const {name, rating}= resData.info......
}

6) Fetching and Using Live API Data 

Used real Swiggy API to get restaurant data 

Like as json object , it maybe simple json or list of json or nested JSON, use it data into our component by different accessing method .

7) Mapping data to multiple cards .

.map() to render all restaurant cards dynamically 

.map(restaurant)=>(
{.....restaurant.id}.....)

8) Keys in Lists(important optimization)

React uses keys to optimise re-rendering

No key ? Bad performance 

Index as key -accepatable only if no unique ID available 

Unique Id- recommend and Best way.

Keys helps react application to only fetch that dom object which needs change or updation instead of looking whole dom .
## Episode 05- Lets get Hooked
1) React File Structure: 
    Not mandatory but separate files for separate components is best and professional practise;
    Standard folder includes: components, utils, assets ...etc;
    .js or .jsx -all are valid for components files
    It helps with scalibilty and readibilty;

2) Export and Import in react:
    a) default export- only one default export per file is allowed 
        Syntax: export default ComponenetName;
                    import ComponenetName from "path";
  b) Named Export: can export multiple values from a file 
    syntax: export const variableName;
                import {variableName} from "path";

3) UI layer and Data Layer 
    upon adding logic of filter to our application only data layer is updated not the UI layer, this exposed a gap between UI and Data, they should be tied up together , will solved by legend react;

4) react Hooks : A hook is a special JS function provided by React to use features like state in functional components
     syntax : import { useState } from 'react';
                  const [listOfRes, setListOfRes]= useState(InitialValue);
    useState(initialValue) returns a state variable and a function to update it.
   setCount(newVal) updates the state and triggers re-render.

5)  How react do this???
   Reconciliation algorithm (React Fiber):
     React internally optimizes rendering using:
        Virtual DOM:
          React uses a virtual copy of real DOM (a JS Object), changes are made to virtual DOM first then diff with real dom called diff algorithm
          Diff algorithm first calculate the difference between virtual doms then makes changes to the real DOM,

 React Fiber Architecture:
   Fiber breaks rendering into small units of work, called incremental rendering. It enables concurrent rendering and fast UI updates.

Now the famous question WHy React is actually fast?????
     Because react have an efficient optimized way for DOM manipulating, it first find out the difference b/w virtual doms and then update the real DOM.
## Episode 06- Exploring the world 🌎 

1) Will React re-render/refresh the whole component or just the elements that have changed??

Yes, React do re-renders the whole component function (re-executes) it's code , when any change takes place ,but only update actual Dom for the parts that differ and so fastly.

2) Monotholic vs Microservices Architecture:

In Monotholic , all components like UI, logic and data are tightly coupled in a single unit, it has disadvantage because if we wish to make small changes also the whole application needs to re-build:
While in Microservices archi.: A application is divided into seprate projects like independent UI, independent backend logic...etc, Advnatage: diff components can be writtent independently in diff pgm language different server different port etc

3)How to call API in React app:

using fetch() function , use response.json() to return JSON Body
useEffect for Data Fetching
Two Loading approaches: i) Load -> API Call -> Render Page with Data. ~300-500 ms, less recommended
ii)  Load -> Render Loading State (Shimmer) -> API Call (in background) -> Update UI with Data.  , 100 ms as react is fast in re-rendering.

4) React useEffect() hook: Synchronizes React components with external systems (data fetching, DOM manipulation)
  useEffect(callBack func, dependency array)
callback function function will be called not immediately but when useEffect wants "React runs it after the component renders and the browser paints".
dependency array: Empty array[], runs olny once after initial render.

5) Shimmer Effect / Shimmer UI: displays a skelteon preview of the UI when api calls made or when page refreshs, it is done to improve user experience

6) Search Filter problem. Maintaining two state of data, eg: allRestaurant and filteredRestaurant, whenever we nee dto filter out use allRestaurant and changed state to filteredRestaurants:

7) Conditional Rendering: rendering using if conditions like if(loading): show shimmer ,if (allRestaurants.length === 0), show proper message etc.
Optional Chaining (?.): Use obj?.prop to safely access potentially null or undefined nested properties in API data, preventing runtime errors and making code cleaner.

8) LogIn/LogOut button in Header: toggle function for Login Logout button display based on a authenticate method lets call it isLoggedIn(), using useState to implement changes like when LoggedIn show button for LogOut and vice versa.
## Episode 07- Finding the Path

1) When useEffect is called 🤔 

▶ If no dependency array is passed,it is called everytime component renders 
▶Empty dependency array[], it is called only once ,on initial render 
▶ Dependency array with variables,it is called only when any dependency changes and will call everytime whenever it gets changed 

2) Never create component inside another component ~ components get re created on every render

3)useState important points 
▶Never ever create useState inside if else block or for loop body .

It leads to inconsistency of react app , as on every subsequent render react expects to find same hooks but if and for might break it.

▶ Always define and use useState inside a component .

4) Importing image from local in react app .

Just place your jpg/png image in src/assets folder and import it in your desired component and then simply use it inside {}.

5) Creating normal Shimmer.js Componet

Made 10 cards with help of array and map to look like a shimmer ui.

Remember don't always use package for small things .

Btw some packages are too helpful eg: formik to build forms in react app

7) React router dom
▶ Import routine library 
npm i react-router-dom@6 (compatible version)
▶ Routing configuration:
Import cretaeBrowserRouter from react router dom

Take parameters as list of jsons which are basically path, element ,error element, childeren attributes with their specified values .

▶ RouterProvider: it is used to render the router instance creted by createBrowserRouter() into our application, it takes a props {appRouter}

8) Error page in react router dom
▶ Default error handling: if it encounters an error and no error element is provided, react router throws a default error screen (it's functional but not beautiful)

▶ Customised Error Page : create a error component and pass it to object of createBrowserRoute as attribute 
 errorElement:<Error/>

▶useRouteError which returns state of error and its information which can be accessed by .status & .status text

9) Link vs <a href="">

Problem with anchor tag is ,it refreshes the whole page ,but we are building a SPA( single page application), it is not expected to refresh the whole network that why use black magic ✨ 🙂 of  Link component from react -router-dom .


Advantage of Link component 

▶ Provides client side routing ,instead full page reloads (server request)

Syntax 

import {Link} from react-route din.

<Link to ="">Blah Blah</Link>

10) Header Footer to every page 

Used Outlet  which act as placeholder for Child routes like Home/About us and contact us page/components 

11) Dynamic Routing 
▶To create something /restaurant/:id

Access the ID using useParams , which reads id from url passed 

Link to the dynamic route using id ,like in our app we linked it to menu of the restaurant clicked .


And also Today finally I was able to fetch data from live Swiggy API like name of restaurant and it's image ,area and all ,though menu was not present in expected format will try soon that too .... 🖊
## Episode-08: Let's Get Classy 🚀

1) Nested Route is achieved by creating children of children and just passing the relative path :
element:<About/>,
              children:[
                {
                  path:"profile", // relative path parentPath{path}=> localhost:1234/about/profile
                  element:<Profile/>
                }
              ]

2) Class Based Component(CBC)- old way of creating componenets
-Syntax: class <Componenet Name> extends React .Components{}
-Render () method is the most important part of a CBC- because it returns JSX which gets render into DOM

3) this keyword is used to access props in CBC. method, but if one wants to access props in a constructor they must use super(props) method
constructor is a area which is used for intilization.

4) A state is created in cbc by initializing the this.state property inside a constructor, all further updates must be done using this.setState();

5) Lifecycle of components in cbc: 
  constructor-> render->componenetDidMount
  when there is parent(P) and child(c): P. const-> p. render-> c. construct->c. rende->c. componetDidMount->p.componentDidMount.

6) Lifecycle when there is multiple children: React will first render parent then it will first render all its child before mounting them sequentially.

7) there are 2 important phases in Lfecycloe of component: a) Render Phase -> Constructor, render(), b) commit phase-> React Update DOM -> componentDidMount()

8) Render Phase >> Commit Phase (Speed): react says first reach render phase for all children then do the commit phase for all , also API is called in commit phase so it can delay further/next child rendering, so react do commit after all rendering.

9) When setState() is called after API call, then updating phase takes place where re-rendering happens .

10) The componenetWillUnmount lifecycle method is called right before a component is completely removed from dom- this method is used for clean up purpose as react components are SPA , so when we change the component (pages), it normally re render the new component on same page , so need to clean up the previous component , in functional based component we use return () method is used for cleanup.
eg. cleaning up the timer

11) API calling in componentDidMount() method, it is the right place because this method is executed just after the initial render, for calling a API in this , we make the componentDidMount method as async and fetch as await , then after succeefull Api calling we  use this.setState to render it to dom.

Two homework research questions -

1) Why super(props ) inside constructor is used ?
 in class components constructor is used to initialize the component as soon as instance is created as it is the first method to be called , so its best place to initialize the component, where super is a keyword which refers to constructor of the parent class that is React.component--The parent React.Component constructor uses the props argument to set up the this.props property on the instance.

2) Though we can use async in componentDidMount but not in useEffect call back function?
Lets see first useEffect, as we know that useEffrect have 2 parts like one is fetching APis and all and other is cleanup or call back function , if we use async directly on useEffect then it will treat the call  back function also as a promosie/object (async returns promise) and promise object can not be used for cleanup, so we use async separately when fetching api.

Whereas in callDidMount method can use async because it does not have any clean up function in it , it just used for fetching APIs, or some data so we can have promise object in  this ,where separate callWillUnmount contains the cleaup function which is a different method ;

A promise is an object which assures to give u something but u need to access it as object not as function.
## Episode -09- Optimizing Our Code

1) We should create a custom hook to extract and reuse stateful logic from a component. This makes our code cleaner, more modular, and easier to maintain and test.

2) When to create a custom hook? - a) When there is repeating logic (to reuse), b) To make complex code readable and easier to understand.

3) How to create a custom hook? - its name must start with the word "use" and it can call other hooks inside it like the official ones useState , useEffect etc. (not mandatory)

4) custom hook : useOnline -> it uses window.addEventListener(): an inbuilt method used to listen events it take 2 arguments -event and methodTo Execute if that event is triggered , online and offline are prebuilt events that browser understands if connection is there or not.

5) Return a cleanup function after using event listener using  window.removeEventListener() method which will clean the event from window object as soon as we change the component 

6) Bundling of our app by parcel:  
The Problem -> having one giant JS file for a large application is bad for performance. The user has to download the code for every single page and feature, even ones they might never visit, just to see the homepage. This leads to slow initial load times.

Solution -> Lazy Loading: to split our code into smaller, logical chunks. A chunk for the "About" page, a chunk for the "Instamart" page, etc. These chunks are then loaded on-demand, only when we navigates to that specific page.

7) Lazy() method from React is used to achieve lazy loading ,to dynamically import components only when they are needed, rather than bundling them all into the initial application load. eg. const Instamart= lazy(()=>import("./components/Instamart"));

8) <Suspense>: a fallback UI (like a loading message or a shimmer) to show while the lazy-loaded component's code is being downloaded ,we can wrap up our lazy loaded component inside Suspense which has a attribute fallback={}, that will be displayed till lazy component gets loaded

## Episode -10 - Tailwind CSS
1) Different ways to add css to app:
 - Plain CSS: The standard way to style by importing .css(index.css) files directly. It's simple, but all styles are global, which can cause conflicts.
 - SASS/SCSS: A more powerful version of CSS (a preprocessor) that adds features like variables and nesting for better organization.
 - Styled Components: A "CSS-in-JS" library where you write CSS inside your JavaScript to create components with automatically scoped styles.
 - Material UI / Ant Design: Large libraries of pre-built, professionally designed React components that drastically speed up development.
 - Bootstrap: A popular framework for rapid prototyping, used either with CSS classes or as a React component library.
 - Tailwind CSS: A utility-first framework where you build custom designs by applying small, single-purpose classes directly in your JSX.

2) Installing and setting up Tailwind in our environment, referiing official Tailwind docs,add a vs code extension named 'Tailwind CSS Intellisense'.

3) Some important classes of tailwind css:
- flex: Sets display: flex; on an element, making it a flexbox container.
- m-4: Sets a margin of 1rem (16px) on all sides.
- px- (e.g., px-4): Sets horizontal padding (padding-left and padding-right).
- py- (e.g., py-2): Sets vertical padding (padding-top and padding-bottom).
- border: Adds a thin (1px), solid, default-colored border to all sides.
- border-solid: Explicitly sets the border-style to solid.
- bg- (e.g., bg-blue-500): Sets the background color.
- flex-wrap: Allows flex items to wrap onto the next line if there isn't enough space.
- justify-between: Distributes flex items evenly; the first item is on the start line, and the last item is on the end line.
- w- (e.g., w-1/2, w-full): Sets the width of an element.
- w-[] (e.g., w-[250px]): Sets a custom, arbitrary width value.
- items-center: Vertically aligns flex items to the center of the container.
- rounded-lg: Applies a large border-radius, making the corners rounded.
- hover:: A prefix that applies the following utility class only on mouse hover.
- font-bold: Sets the font weight to bold.
- text-lg: Sets the text size to large. 
4) Pros & Cons of Using Tailwind Css:
Pros:
- Highly Optimized Builds: It scans your files and only includes the CSS you actually use, resulting in a very small production file. You never ship unused CSS.
- Rapid Development: You can build and style components very quickly without leaving your HTML or JSX.
- Enforces Consistency: The predefined design system helps maintain consistent spacing, sizing, and colors throughout your application.
- Highly Customizable: You can configure everything in the tailwind.config.js file to match your project's design requirements.

Cons:
- Verbose HTML/JSX: Your markup can look cluttered with long strings of utility classes.

- Learning Curve: You need to learn and remember Tailwind's specific class names instead of standard CSS properties.

- No Pre-built Components: Unlike Bootstrap, it doesn't provide ready-to-use components like card or button. You build everything yourself with utilities.

## Episode 11 -Data is the new Oil

1) Higher Order Component (HOC) : It takes a component as argument and then enhance it and returns the updated component , HOCs are pure function , they do not modify the behaviour of input component , instead just use it to enhance and return the updated component.
eg. Labelling restaurant cards to promoted.

2) Accordion: A UI feature where content is collapsed on clicking its header , similarly if any other header content is open and whenever clicked to other header , it should collapse all other opened sections. One can achieve this feature in react by using useState hook , map and rendering for index tracing , toggling . eg includes , restaurant menu category , FAQs etc.

3) Controlled & Uncontrolled Components: In react if the componenet behaviour on input in controlled by react then its controlled else if the behaviour on input in controlled directly by DOM its uncontrolled , basically we have control over component what it will behave when user provides this input/click .

4) Props Drilling : It is defined as passing data to child deep nested from parent class , if one wants the inner child to use the data , it need to pass the data through all intermediate children though or maybe the intermediate component did not needs it. So this is a problem, solution using Racts's useContext .

5) useContext: A react hook or library to deal with problem of props drilling , in this once a data is created it acts as globally available and can be used by any child or nested child without passing to all unusing intermediate components :
Steps to use useContext:
(a) Create the context: use the method createContext() to create the required shareable data , this is generally done outside the component file so that it can be imported easily .
(b) Provide the Context : next is wrap any parent component around the value using context Provider , now nay component mentioned inside this provider , will be able to use its value;
(c) Consume the context : Now any child can consume the value using useContext.

6) Using useContext inside class based component: since hooks are not allowed in cbc, there we can directly use useContext inside a CBC, but we can achieve this by using something called Consumer  which provides a function as its child.