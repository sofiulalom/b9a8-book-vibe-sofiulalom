
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../../Layout/MainLayout';
import Books from '../Books/Books';
import Home from '../Home/Home';
import ListDetailsBook from '../ListDetailsBook/ListDetailsBook';
import ListedBook from '../ListedBook/ListedBook';
import ReadBooks from '../ReadBook/ReadBooks';
import WishLLlists from '../WishLlists/WishLLlists';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [{
            path: '/',
            element: <Home></Home>
        }, 
         {
                path: '/book/:id',
                element: <ListedBook></ListedBook>,
                loader: () => fetch('../books.json'),
                
          },
            {
                path: '/listDetail',
                element: <ListDetailsBook></ListDetailsBook>,
                children: [
                    {
                       path:'readbook',
                        element: <ReadBooks></ReadBooks>,
                        loader:()  => fetch('../books.json')   
                 },

                    {
                        path: 'wishList',
                        element: <WishLLlists></WishLLlists>,
                        loader: ()=> fetch('../books.json')
                }
             ]
           },
        ]
    }
]);

