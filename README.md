# Namaste React

## Episode 01- Parcel
 - dev Build
 - Local Server
 - HMR = Hot Module Replacement
 - File Watching Algorithm- Written in C++
 - Caching- Faster Builds
 - Image Optiization
 - Minification
 - Bundling
 - Compress
 - Consistent Hashing
 - Code Splitting
 - Differential Bundling- suport older browsing
 - Daignostic
 - Error handling
 - HTTPS
 - Different dev and prod bundles

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