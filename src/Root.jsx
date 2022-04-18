import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import Loader from "./components/Loaders/Loader";

const Home = lazy(()=> import('./containers/HomeContainer'));
const Products = lazy(() => import('./containers/ProductsContainer'));
const ProductView = lazy(() =>  import('./containers/ProductViewContainer'));
const ProductAdd = lazy (() => import('./containers/AddProductContainer'));
const AboutUs = lazy(() => import('./containers/AboutUsContainer'));
const ContactUs = lazy(() => import('./containers/ContactUsContainer'));

const publicRoutes = [
    <Route key='/' path='/' exact component={Home} />,
    <Route key='/products/:id' path='/products/:id' exact component={Products} />,
    <Route key='/products/productview/:id' path='/products/productview/:id' exact component={ProductView} />,
    <Route key='/productview/:id' path='/productview/:id' exact component={ProductView} />,
    <Route key='/addProduct' path='/addProduct' exact component={ProductAdd} />,
    <Route key='/aboutUs' path='/aboutUs' exact component={AboutUs} />,
    <Route key='/contactUs' path='/contactUs' exact component={ContactUs} />
];

const Root = () => {
    let routes = [...publicRoutes];

    return (
        <Suspense fallback={<Loader isSidebar={false} />}>
            <Switch>
                {routes}
            </Switch>
        </Suspense>
    );
}

export default Root;