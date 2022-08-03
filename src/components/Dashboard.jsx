import React from 'react'
import styled from 'styled-components'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Table from './Table';
import { OrderComp } from './OrderComp'
import { AuthContext } from './context/DashBoardContext'
import SideNav from './SideNav';
import { ReactComponent as Shop } from './utils/shop.svg'
import { ReactComponent as Office } from './utils/office.svg'
import { ReactComponent as Money } from './utils/money.svg'
import { ReactComponent as Settings } from './utils/setting.svg'
import { ReactComponent as Customer } from './utils/customer.svg'
import { ReactComponent as Diploma } from './utils/diploma.svg'
import { ReactComponent as Spaceship } from './utils/spaceship.svg'
import { ReactComponent as Search } from './utils/search.svg'
import { ReactComponent as User } from './utils/user.svg'
import { ReactComponent as Cog } from './utils/cog.svg'
import { ReactComponent as Notification } from './utils/notification.svg'
import { ReactComponent as MoneyColored } from './utils/money-colored.svg'
import { ReactComponent as World } from './utils/world.svg'
import { ReactComponent as WhiteDiploma } from './utils/white-diploma.svg'
import { ReactComponent as Cart } from './utils/cart.svg'
const Dashboard = () => {

    const { isOpen, handleClickClose, handleClickOpen } = React.useContext(AuthContext)


    return (
        <Home>
            {/* <SideNav /> */}
            <SideNavDiv>
                <SideNavTitle>
                    <h3>
                        Soft UI Dashboard
                    </h3>
                </SideNavTitle>
                <SideNavOptions>
                    <SideNavIconsDiv>
                        <Shop className='sideNavIcon' />
                    </SideNavIconsDiv>
                    <SideNavTextDiv>Dashboard</SideNavTextDiv>
                </SideNavOptions>

                <SideNavOptions>
                    <SideNavIconsDiv>
                        <Office className='sideNavIcon' />
                    </SideNavIconsDiv>
                    <SideNavTextDiv>Tables</SideNavTextDiv>
                </SideNavOptions>

                <SideNavOptions>
                    <SideNavIconsDiv>
                        <Money className='sideNavIcon' />

                    </SideNavIconsDiv>
                    <SideNavTextDiv>Billing</SideNavTextDiv>
                </SideNavOptions>

                <SideNavOptions>
                    <SideNavIconsDiv>
                        <Settings className='sideNavIcon' />
                    </SideNavIconsDiv>
                    <SideNavTextDiv>RTL</SideNavTextDiv>
                </SideNavOptions>

                <AccountsText>
                    ACCOUNT PAGES
                </AccountsText>

                <SideNavOptions>
                    <SideNavIconsDiv>
                        <Customer className='sideNavIcon' />
                    </SideNavIconsDiv>
                    <SideNavTextDiv>Profile</SideNavTextDiv>
                </SideNavOptions>

                <SideNavOptions>
                    <SideNavIconsDiv>
                        <Diploma className='sideNavIcon' />
                    </SideNavIconsDiv>
                    <SideNavTextDiv>Sign In</SideNavTextDiv>
                </SideNavOptions>

                <SideNavOptions>
                    <SideNavIconsDiv>
                        <Spaceship className='sideNavIcon' />
                    </SideNavIconsDiv>
                    <SideNavTextDiv>Sign Up</SideNavTextDiv>
                </SideNavOptions>

                <LoginDiv onClick={() => handleClickOpen()}>
                    <p>LOGIN</p>
                </LoginDiv>
            </SideNavDiv>
            <HoldingDiv>
                {/* Navigation/Header */}
                <NavigationDiv>
                    <RouterDiv>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link href="/"
                                style={{
                                    fontSize: "14px",
                                    lineHeight: "16px",
                                    letterSpacing: "0.1px",
                                    color: "#252F40",
                                    height: "69px",
                                    opacity: "0.5",
                                    textDecoration: "none"

                                }}
                            >
                                Pages
                            </Link>
                            <Link
                                style={{
                                    fontSize: "14px",
                                    lineHeight: "16px",
                                    letterSpacing: "0px",
                                    color: "#252F40",
                                    height: "19px",
                                    textDecoration: "none",
                                    fontWeight: "400"
                                }}

                                href="/"
                            >
                                Dashboard
                            </Link>
                        </Breadcrumbs>
                        <h3>Dashboard</h3>

                    </RouterDiv>

                    <NavigationRightDiv>
                        <SearchDiv>
                            <span>
                                <Search />
                            </span>

                            <input type="text" placeholder='Type here ...' />
                        </SearchDiv>

                        <NavIconsDiv>

                            <SignInDiv>

                                <span>
                                    <User />
                                </span>
                                <p>Sign In</p>
                            </SignInDiv>

                            <span>
                                <Cog />
                            </span>

                            <span>
                                <Notification />
                            </span>
                        </NavIconsDiv>
                    </NavigationRightDiv>
                </NavigationDiv>
                <EventsDiv>
                    <EventsButton>
                        <EventsText>
                            <h4>Todays Money</h4>
                            <h3>$53,000</h3>
                        </EventsText>

                        <EventsIcon>
                            <MoneyColored className='eventIcon' />
                        </EventsIcon>
                    </EventsButton>

                    <EventsButton>
                        <EventsText>
                            <h4>Todays Money</h4>
                            <h3>$53,000</h3>
                        </EventsText>

                        <EventsIcon>
                            <MoneyColored className='eventIcon' />

                        </EventsIcon>
                    </EventsButton>

                    <EventsButton>
                        <EventsText>
                            <h4>Today's Users</h4>
                            <h3>2,300</h3>
                        </EventsText>
                        <EventsIcon>
                            <World className='eventIcon' />


                        </EventsIcon>
                    </EventsButton>
                    <EventsButton>
                        <EventsText>
                            <h4>New Clients</h4>
                            <h3>+3,462</h3>
                        </EventsText>

                        <EventsIcon>
                            <WhiteDiploma className='eventIcon' />
                        </EventsIcon>
                    </EventsButton>

                    <EventsButton>
                        <EventsText>
                            <h4>Sale</h4>
                            <h3>$103,430</h3>
                        </EventsText>
                        <EventsIcon>
                            <Cart className='eventIcon' />
                        </EventsIcon>
                    </EventsButton>

                </EventsDiv>


                <FlexDiv>
                    <ProjectDiv>
                        <Table></Table>
                    </ProjectDiv>
                    <OrdersDiv>
                        <OrderComp />
                    </OrdersDiv>
                </FlexDiv>


            </HoldingDiv>
        </Home>
    )
}

export default Dashboard


// styled components --> Used in styling

const Home = styled.div`
    width: 1429px;
    height: 784px;
    background: #EDE8E8;
    border-radius: 25px;
    display: flex;
    flex-direction:row;
    padding: 14px 0px 40px 22px;
    @media (min-width: 1440px){
        width: 100%;
        height: 100%;
    }
    @media (min-width: 1150px){
        width:100%;
    }

`

const FlexDiv = styled.div`
    display:flex;
    flex-direction:row;

`

const ProjectDiv = styled.div`
    width: 738px;
    height: 538px;
    margin-right:25px;
    background: #FFFFFF;
    box-shadow: 0px 20px 27px rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    margin: 0px 25px 61px 0px;

    @media (min-width:1440px){
        width: 65%;
    }

    @media (min-width:1150px) and (max-width:1439px) {
        width:65%
    }
 
`

const OrdersDiv = styled.div`

    width: 356px;
    height: 538px;
    background: #FFFFFF;
    box-shadow: 0px 20px 27px rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    @media (min-width: 1400px) {
        width:31%;
    }

    @media (min-width:1150px) {
        width:31%;
    }
`


const HoldingDiv = styled.div`
        width: 1141px;
        height:100%;
        @media (min-width: 1440px) {
            width: 80%;
        }

        @media (min-width: 1150px){
            width:80%;
        }
    `

// --> Side Navigation buttons/ divs

const SideNavTitle = styled.div`
    width:80%;
    height:80px;
    & h3{
        text-align:left;
        height:19px;
        font-family: 'Segoe UI', 'Open Sans';
        font-size: 14px;
        line-height:16.41px;
        letter-spacing: 0.1px;
        margin: 32px 0px 0px 0px;
        color: #141414;
        left: -665px;
    }
    border-bottom: 1px solid #fff;
    margin-bottom:17px;
       
`

const AccountsText = styled.h3`
height: 18px;
font-family: 'OpenSans', 'Segoe UI';
font-size: 13px;
line-height: 15px;
letter-spacing: 0.2px;
color: #67748E;
text-align:left;
font-weight:700;
margin-left: 20px;
`
const SideNavDiv = styled.div`
    width:20%;
    height:100%;
    display:flex;
    flex-direction: column;
    gap:5px;
    @media (min-width:1440px){
        width:20%
    }

    @media (min-width:950px) and (max-width: 1439px){
        width:20%;
    }

`


const SideNavOptions = styled.div`
display:flex;
width: 219px;
height:55px;
border-radius: 8px;
row-gap:20px;


:hover{
    box-shadow: 0px 20px 27px rgba(0, 0, 0, 0.05);
    background: #FFFFFF;

    & span {
        background: #CB0C9F;
        }

        & h4 {
            color:#252F40;
        }
        
        .sideNavIcon{
            fill : #fff
        }
    };
    
    @media (min-width:950px) and (max-width:1439px){
        width:180px;
    }
    `

const SideNavIconsDiv = styled.span`
    width:32px;
    height:32px;
    box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.12), 0px 2px 4px -1px rgba(0, 0, 0, 0.07);
    border-radius:8px;
    background: #FFFFFF;
    margin: 12px 12px 0px 16px;
    
    .sideNavIcon{
        width:100%;
        margin: 8px 8px 5px 6px; 
        fill :rgba(58, 65, 111, 1);
    }    

    @media (min-width: 950px){
        width:28px;
        height:28px;
        .sideNavIcon{
            width:12px;
            margin: 8px 5px 5px 8px;
        }
    }

    @media (max-width:949px){
        .sideNavIcon{
            width:14px
        }
    }
    
   
    `

const SideNavTextDiv = styled.h4`
    height:19px;
    font-family: 'Segoe UI', 'Open Sans' ;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.2px;
    color: #67748E;
    font-weight:500;
    margin:18px 0px;
    `


const LoginDiv = styled.div`
    height: 34px;
    width: 186px;
    background: #FFFFFF;
    box-shadow: 0px 4px 7px -1px rgba(0, 0, 0, 0.11), 0px 2px 4px -1px rgba(0, 0, 0, 0.07);
    border-radius: 8px;
    margin: 122px 46px 0px 34px ;
   & p {

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        text-align:center;
        margin:9px 0px;
    }
/* identical to box height */


letter-spacing: -0.331915px;

color: #252F40;

@media (min-width:950px){
    margin: 122px 6px 0px 4px ;
}
`
// ---> Events Section    

const EventsDiv = styled.div`
        width: 98%;
        height:115px;
        display:flex;
        flex-direction:row;
        column-gap:24px;
        overflow-x:scroll;
        overflow-y:hidden;
        &::-webkit-scrollbar{
                    width:0.01px;
                    height:0px;
                    -ms-overflow-style: -ms-autohiding-scrollbar;
                    &-thumb{
                        background-color: #cecaca;
            }

        }

     
    `

const EventsButton = styled.div`
        min-width:262px;
        height:82px;
        display: flex;
        justify-content:space-between;
        background: #FFFFFF;
        box-shadow: 0px 20px 27px rgba(0, 0, 0, 0.05);
        border-radius: 16px;
        @media (min-width:950px) {
            min-width : 222px;
            height: 70px;
        }
        @media (max-width:949px){
            min-width:222px;
            height:65px;
        }
    `

const EventsText = styled.div`
    margin: 20px 10px;
    font-family: 'Segoe UI', 'Open Sans';
    text-align:left;
    & h4{
        height:19px;
        color: #67748E;
        line-height: 16px;
        margin:0;
        font-size:14px;
        font-weight:500;
    }

    & h3{
        height:27px;
        color:#252F40;
        margin:0;
        font-size: 20px;
        line-height: 23px;
        letter-spacing: -0.553191px;
    }

    @media (min-width : 950px){
        margin: 15px 0px 0px 20px;
        & h3 {
            font-size:16px;
            line-height:14px;
            margin:0;
        }
        & h4{
            font-size: 12px;
        }
    }

    @media (max-width:949px){
        margin: 15px 0px 0px 10px;
        & h3 {
            font-size:16px;
            line-height:14px;
            margin:0;
        }
        & h4{
            font-size: 12px;
        }
    }
`

const EventsIcon = styled.span`
width: 48px;
height: 48px;
background: linear-gradient(135deg, #FF0080 0%, #7928CA 100%);
box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.12), 0px 2px 4px -1px rgba(0, 0, 0, 0.07);
border-radius: 8px;

margin : 16px 0px 30px 78px;

@media (min-width:950px) {
    margin: 10px;
}
@media (max-width:949px){
    width:40px;
    height:40px;
    margin:10px;
   
}
/* margin: 10px 24px 0px; */

.eventIcon{
        margin: 14px; 
        fill : #fff;
    }  

    
`

// Header part of the page

const NavigationDiv = styled.div`
    width:100%;
    height:90px;
    display:flex;
    justify-content:space-between;

`

const RouterDiv = styled.div`
width: 150px;
 & h3 {
    height:27px;
        color:#252F40;
        margin:0;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.1px;
        font-family: 'Segoe UI', 'Open Sans';
        text-align:left;
        font-weight:700;
 }
 
`

const NavigationRightDiv = styled.div`
width: 34%;
float : right;
display: flex;
flex-direction:row;
gap : 10px;

@media (min-width:1440px) {
    width:31%;
}

@media (min-width:950px ) and (max-width:1150px){
    width:33%;
}

@media (min-width:1150px) and (max-width:1439px){
    width:37%;
}

`

const SearchDiv = styled.div`
    width: 197px;
    height:40px;
    display: flex;
    background: #FFFFFF;
    border: 1px solid #D2D6DA;
    border-radius: 8px;
    display:flex;
    & span {
        width: 16px;
        height:16px;
        margin:11px 12px 13px ;
    };
    & input{
        width:80%;
        font-family: 'OpenSans' ,'Segoe UI';
        font-size: 14px;
        line-height: 16px;
        letter-spacing: -0.387234px;
        color: #252F40;
        mix-blend-mode: normal;
        opacity: 0.5;
        border:none;
        outline:none;
        border-radius:8px;
    }

`

const NavIconsDiv = styled.div`

    display:flex;
    flex-direction:row;
    gap:5px;

    margin:10px 0px ;
    & span {
        width:14px;
        height:14px;
        margin:6px;
    }

`
const SignInDiv = styled.div`
    display: flex;
    & p{
        margin: 5px 0px;
        padding: 0;
        height: 19px;

        font-family: 'OpenSans', 'Segoe UI';
        font-size: 14px;
        line-height: 16px;
        letter-spacing: -0.387234px;

        color: #67748E;
    }
`

