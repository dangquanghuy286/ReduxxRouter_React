import PrivateRoutes from "../components/PrivateRoutes";
import LayoutDefault from "../layout/LayoutDefault";
import About from "../pages/About";
import Blog from "../pages/Blog";
import BlogRelated from "../pages/Blog/BlockRelated";
import BlogAll from "../pages/Blog/BlogAll";
import BlogDetail from "../pages/Blog/BlogDetail";
import BlogNews from "../pages/Blog/BlogNews";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import InfoUser from "../pages/InfoUser";
import Login from "../pages/Login";


export const routes = [

    {
        path: "/",
        element: <LayoutDefault />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "blog",
                element: <Blog />,
                children: [
                    {
                        index: true,
                        element: <BlogAll />
                    },
                    {
                        path: "news",
                        element: <BlogNews />
                    },
                    {
                        path: "related",
                        element: <BlogRelated />
                    },
                    {
                        path: ":id",
                        element: <BlogDetail />
                    }
                ]
            },
            {
                path: "cart",
                element: <Cart />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "*",
                element: <Error404 />
            },
            {

                element: <PrivateRoutes />,
                children: [{
                    path: "info-user",
                    element: <InfoUser />
                }]
            },

        ]
    }
]
//     < Routes >
//     <Route path='/' element={<LayoutDefault />} >
//         <Route index element={<Home />} /> {/* Mặc định là Home */}
//         <Route path="about" element={<About />} />
//         <Route path="contact" element={<Contact />} />
//         <Route path="blog" element={<Blog />}>
//             <Route path="news" element={<BlogNews />} />
//             <Route index element={<BlogAll />} />
//             <Route path="related" element={<BlogRelated />} />
//             <Route path=":id" element={<BlogDetail />} />
//         </Route>
//         <Route path="login" element={<Login />} />
//         <Route path="*" element={<Error404 />} />
//         <Route element={<PrivateRoutes />}>
//             <Route path="info-user" element={<InfoUser />} />
//         </Route>
//     </Route>
// </ >