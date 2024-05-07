
import Header from "./Header";
import Footer from './Footer'
import FAQPage from "./FAQ";
import Promotion from "./Promotion";
import Intro from "./intro";
import LastPage from "./LastPage";
function App() {
  return (
   <div style={{backgroundColor: "#F9F9F9"}}>
    <Header/>
     
    <Intro/>
    <LastPage/>
    <br/><br/><br/><br/><br/><br/>
    <Promotion/>
    
    <FAQPage/>
    
    
  

 <br/><br/>
     <Footer/> 
   </div>
  );
}

export default App;
