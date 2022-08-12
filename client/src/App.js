import { Home,SignIn,  Login, NewsDetail,Product,News , PurchaseData ,Purchases ,Cart ,User, AddProduct , AddCategory} from "./pages";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { LoadingScreen, NavBar, ProtectedRoutes,Footer} from "./components";
import "bootswatch/dist/minty/bootstrap.min.css";

function App() {
  const isLoading = useSelector((state) => state.isLoading);
  return (
    <HashRouter>
      <NavBar/>
      <Container>
        {isLoading && <LoadingScreen />}
        <Routes>
          <Route path="/" element={
           <>
              <Home />
              <Footer />
            </>
            }
          />
          
          
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/addCategory" element={<AddCategory />} />
          <Route path="/news" element={<News />} />
          <Route element={<ProtectedRoutes />}> 

           <Route path="/news/:id" element={<NewsDetail />} />
           <Route path="/products/:id" element={<Product />} />
           <Route path="/purchases" element={<Purchases />} />
           <Route path="/cart" element={<Cart />} />
           <Route path="/cart/formdata" element={<PurchaseData />} />
           <Route path="/user" element={<User />} />

          </Route>
        </Routes>
      </Container> 
    </HashRouter> 
    
  );
}

export default App;