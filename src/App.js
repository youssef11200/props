import youssef_nasser from "./youssef_nasser.jpg";
import Profile from "./Profile/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  function Handelname(Fullname) {
    alert(Fullname);
  }

  return (
    <div className="App">
      <Profile
        Fullname="YOUSSEF NASSER"
        Bio="student"
        Profession="developper"
        Alert={Handelname}
      >
        <img src={youssef_nasser} alt="" />
      </Profile>
    </div>
  );
}

export default App;
