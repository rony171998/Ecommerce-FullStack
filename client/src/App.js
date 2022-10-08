import {
    Home,
    SignIn,
    Login,
    Product,
    Products,
    PurchaseData,
    Purchases,
    Cart,
    User,
    AddProduct,
    AddCategory,
    Category,
    Search,
    P404,
} from "./pages";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import { NavBar, ProtectedRoutes, Footer } from "./components";
import "bootswatch/dist/minty/bootstrap.min.css";

function App() {
    return (
        <HashRouter>
            <NavBar />
            <Container>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Home />
                                <Footer />
                            </>
                        }
                    />

                    <Route path="/login" element={<Login />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/category/:categoryId" element={<Category />} />
                    <Route path="/category/:categoryId/page/:page" element={<Category />} />
                    <Route path="/search/:search" element={<Search />} />
                    <Route path="/products/:productId" element={<Product />} />
                    <Route path="/page/:page" element={<Products />} />

                    <Route element={<ProtectedRoutes />}>
                        <Route path="/addProduct" element={<AddProduct />} />
                        <Route path="/addCategory" element={<AddCategory />} />

                        <Route path="/purchases" element={<Purchases />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route
                            path="/cart/formdata"
                            element={<PurchaseData />}
                        />
                        <Route path="/user" element={<User />} />
                        <Route path="*" element={<P404 />} />
                    </Route>
                </Routes>
            </Container>
        </HashRouter>
    );
}

export default App;
