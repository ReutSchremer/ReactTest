import{useEffect} from "react"
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom';

import './App.css';
import Add from "./components/addBook";

import BookList from "./components/bookList";
import Edit from "./components/editBook";

//יש בעיה בכל העדכון בלוקל סטורג. צריך לעדכן את הדטה כל פעם מחדש (יש לבדןק איך לעשות ביוזסטייט עם לוקל סטורג)
//בעזה מחר אעבוד על כך
//או שישר לעדכן לדאטהבייס אמיתי.
function App() {
  useEffect(()=>{
const repository=[{id:"1",title:"aaa",author:"aaaa"},{id:"2",title:"bbb",author:"bbbb"}]
  localStorage.setItem("repository",JSON.stringify(repository))
  },[])
  
  return (
    
        <Router>
      <Routes>
      <Route path="/" element={ <BookList/>}/>
      <Route path="/add" element={ <Add/>}/>
      <Route path="/edit/:id" element={ <Edit/>}/>
      </Routes>
    
      </Router>
  );
}

export default App;
