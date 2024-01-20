// Routing in React V6
// Used for navigation in case of multiple pages in a website. We need not to re-render the whole website to navigate to a different page everytime , making a fetch request to a server.
// Whole javascript is fecthed at once and then managed by react-router-dom a third party lib for navigation.
   //npm install react-router-dom
   
   <BrowserRouter>
     <Routes>
       <Route path='' element='' exact> //exact is used to load only the specified matched path
       <Route path='' element=''>
        .
        . 
     </Routes>
   </BrowserRouter>
Redirecting :- To redirect a path to a prexisting Path.
    import { Routes,Routes,Navigate } from 'react-router-dom'
    <Routes>
       <Route path='/learn' element={<Learn/>}/>
       <Route path='/learn-apps' element={<Navigate replace to="/learn"/>}/>
    </Routes>     
Extracting Parameters from a Route Path :-
        //define a path like this
        <Route path=":courseid" element={<CourseId/>}/>

        //In the component use react router hook 
        function CourseId(){
          let {courseid} = useParams();
          return (
            <div>
              <h1>Your Course Id is : {courseid}</h1>
            </div>
          );
        }

// Carrying Information from route to another route.
// for this functionality we have to use two hooks i.e. useNavigate,useLocation
// Lets say we carrying information from a courseId component to a Dashboard ,henceforth the route is changed, so to pass away some info :-
// Here we are passing a object containing price whenever a user click a button on the courseId component to new Route i.e. dashboard

   function CourseId(){
     //useNavigate is imported from react-router-dom
     let navigate = useNavigate();
     let {courseid} = useParams();
     return (
         <div>
           <h1>Your Course Id is : {courseid} </h1>
           <button
             onClick={() => {
               navigate("/dashboard",{ state: {
                 price : "399"
               } });
             }}
           >Pass information</button>
         </div>
       );
     }

     function Dashboard(){
         const location = useLocation();
         return(
           <div>
             <h1>Info that I got here is {location.state.price} </h1>
           </div>
         );
       }
// Another simple way of doing is it with using Links

   //Route intial
   <Link to="/dashboard" state={"DJANGO"}>Dashboard</Link>

   //Route final
   const location = useLocation();
   <h1>Info that I got here is {location.state} </h1>
