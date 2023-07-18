import "./App.css";
import {filterData,apiUrl} from "./data";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import { useEffect,useState } from "react";
import { toast } from "react-toastify";
import Spinner from "./Components/Spinner";

function App() {
  const[courses,setCourses] = useState("");
  const[loading,setLoading]= useState(true);
  const[catagory,setCatagory]=useState(filterData[0].title);
  async function fetchdata() {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      if (response.status===200) {
        console.log(response.status);
        const output = await response.json();
        setCourses(output.data);
      }
      else{
        console.log(response.status);
        // console.log("errors aaye hn....");
        toast.error("network problem");
         Promise.reject(response);
         

      }
      
      
      
        
      

      
      
      
    } catch (error) {
      toast.error("network problem");
      
      
    }
    setLoading(false);
    
    
  }


useEffect( ()=>{
  fetchdata();
},[])

  return(
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div className="bg-bgDark2">
        <Navbar/>
      </div>

      <div>
        <Filter
        filterData={filterData}
        catagory={catagory}
        setCatagory={setCatagory}/>
      </div>

      <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {loading?(<Spinner/>):(<Cards 
          courses={courses}
          catagory={catagory}/>)}
      </div>

    </div>
  );
}

export default App;
  