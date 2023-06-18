
import{ BrowserRouter,Route, Routes} from "react-router-dom";

import Hakkımızda from "./component/Hakkımızda";
import JüriYarışmaYazılımı from "./component/JüriYarışmaYazılımı";
import WordNinja from "./component/WordNinja";
 import WordPyramids from "./component/WordPyramids";
// import About from "./component/JüriYarışmaYazılımı";
import Navbar from "./component/Navbar"

const App=()=> {
    
   

   

    return (


    


           <div>
          <BrowserRouter>
          <Navbar/>
         
          <Routes>
          <Route path="/"  element={ <Hakkımızda/>}/>
            <Route path="/JüriYarışmaYazılımı"  element={<JüriYarışmaYazılımı/>}/>
            <Route path="/WordNinja"  element={<WordNinja/>}/>
             <Route path="/WordPyramids"  element={<WordPyramids/>}/>
           
          </Routes>
          
          
          </BrowserRouter>
           </div>










           
    );
}
        export default App;