import styled from 'styled-components';
import {useDispatch , useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { auth, provider } from '../firebase';
import { signInWithPopup, } from "firebase/auth";

import {selectUserName, selectUserEmail, selectUserPhoto, setUserLoginDetails} from '../features/users/userSlice';





const Header = (props) => {
const dispatch = useDispatch();
const history = useHistory();
const userName = useSelector(selectUserName);
const userPhoto = useSelector(selectUserPhoto);
const email = useSelector(selectUserEmail);



    const handleAuth = () => {
        signInWithPopup(auth, provider)
            .then((result) => {

                const user = result.user;
                
                setUser(result.user);

            }).catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage);
            });
    }

    const setUser = (user) => {
        dispatch(setUserLoginDetails({ 
            name: user.name,
            email: user.email,
            photo: user.photo
        }));
    }


    return (
        <Nav>
            <Logo>
                <img src="/images/logo.svg" alt="" />
            </Logo>

            <NavMenu>
                <a href="/">
                    <img src="/images/home-icon.svg" alt="" />
                    <span>HOME</span>
                </a>

                <a href="/">
                    <img src="/images/search-icon.svg" alt="" />
                    <span>SEARCH</span>
                </a>


                <a href="/">
                    <img src="/images/watchlist-icon.svg" alt="" />
                    <span>WATCHLIST</span>
                </a>

                <a href="/">
                    <img src="/images/original-icon.svg" alt="" />
                    <span>ORIGINALS</span>
                </a>

                <a href="/">
                    <img src="/images/movie-icon.svg" alt="" />
                    <span>MOVIES</span>
                </a>
                <a href="/">
                    <img src="/images/series-icon.svg" alt="" />
                    <span>SERIES</span>
                </a>


            </NavMenu>

            <Login onClick={handleAuth}>Login</Login>

        </Nav>
    )
}

const Nav = styled.nav`
position: fixed;
top: 0;
left: 0;
right: 0;
height: 70px;
background-color: #090b13;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 36px;
letter-spacing: 16px;
z-index: 3;
`;

const Logo = styled.a`
padding: 0;
width: 80px;
margin-top: 4px;
max-height: 80px;
font-size: 0;
display: inline-block;

img{
    display: block;
    width: 100%;
}`;

const NavMenu = styled.div`
align-items: center;
display: flex;
flex-wrap: row no-wrap;
height: 100%;
justify-content: flex-end;
margin: 0px;
padding: 0px;
position: relative;
margin-right: auto;
margin-left: 25px;

a{
    display: flex;
    align-items: center;
    padding: 0 12px;

    img{
        height: 20px;
        min-width: 20px;
        width: 20px;
        z-index: auto;


    }
    span{
        color: rgb(249,249,249);
        font-size: 13px;
        letter-spacing: 1.42px;
        line-height: 1.08;
        padding: 2px 0px;
        white-space: nowrap;
        position: relative;


        
    &:before {
        background-color: rgb(249,249,249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: '';
        height: 2px;
        opacity: 0;
        position: absolute;
        right: 0px;
        left: 0px;
        transform-origin: left center;
        transform : scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45,0.94) 0s;
        visibility: hidden;
        widht: auto;
        
    }
}

&:hover{
    span:before{
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
        
    }
}
    }



/*@media (max-width: 768px) {
display: none;
} */

`;

const Login = styled.a`
    background-color: rgba(0,0,0,0.6);
    padding: 7px 40px;
    border: 1px solid #f9f9f9;
    letter-spacing: 1.5px;
    transition: all .3s ease 0s;
    cursor: pointer;
    &:hover{
        background-color: #f9f9f9;
        color: #333;
    }
`

export default Header;