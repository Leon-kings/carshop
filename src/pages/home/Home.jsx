import Background from "../../components/homeComponent/background/Background"
import Search from "../../components/homeComponent/search/Search"
import Register from "../form/register/Register"
// import AuthoImageSlider from "../../components/homeComponent/slide/AuthoImageSlider"

const Home = () => {
  return (
    <div className="container w-full flex px-0 py-0 mx-0 fixed">
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden ">
            <Background/>
        </div>
       <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
        {/* <AuthoImageSlider/> */}
        <Search/>
       </div>
 
      <Register/>
    </div>
  )
}

export default Home
