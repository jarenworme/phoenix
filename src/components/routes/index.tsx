import {useRoutes} from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Register from "../pages/Register";
import StartContinue from "../pages/StartContinue";
import VerifyEmail from "../pages/VerifyEmail";
import SelectYourProducts from "../pages/SelectYourProducts";
import ProductList from "../pages/ProductList";
import AboutYou from "../pages/AboutYou";
import Identity from "../pages/Identity";
import AdditionalInfo from "../pages/AdditionalInfo";
import ProductDetails from "../pages/ProductDetails";
import UploadDocuments from "../pages/UploadDocuments";
import ConfirmInformation from "../pages/ConfirmInformation";
import SignReadDocuments from "../pages/ReadSignDocuments";
import TestPage from "../pages/TestPage";


export default function Router (){
    return useRoutes([
        {
            path: '/',
            children: [
                {
                    path: '/',
                    element: <LandingPage />
                },
                {
                    path: '/register', 
                    element: <Register />
                },
                {
                    path: '/startContinue',
                    element: <StartContinue />
                },
                {
                    path: 'verify',
                    element: <VerifyEmail />
                },
                {
                    path: 'selectProducts',
                    element: <SelectYourProducts />
                }, 
                {
                    path: 'productList',
                    element: <ProductList />
                },
                {
                    path: 'aboutYou',
                    element: <AboutYou />
                },
                {
                    path: 'identity',
                    element: <Identity />
                },
                {
                    path: 'additionalInfo',
                    element: <AdditionalInfo />
                },
                {
                    path: 'productDetails',
                    element: <ProductDetails />
                },
                {
                    path: 'uploadDocuments',
                    element: <UploadDocuments />
                },
                {
                    path: 'confirmInformation',
                    element: <ConfirmInformation />
                },
                {
                    path: 'signReadDocuments',
                    element: <SignReadDocuments />
                },
                {
                    path: 'testPage',
                    element: <TestPage />
                }
            ]
        },
    ]);
}
