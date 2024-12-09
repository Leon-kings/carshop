import Background from "../../components/homeComponent/background/Background"
import Register from "../form/register/Register"


const Home = () => {
  return (
    <div className="container w-full flex">
        <div className="container">
            <Background/>
        </div>
      <Register/>
    </div>
  )
}

export default Home
