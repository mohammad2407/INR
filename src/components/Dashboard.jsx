import React from 'react'
import styled from 'styled-components'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Table from './Table';
import { OrderComp } from './OrderComp'
import {AuthContext} from './context/DashBoardContext'


const Dashboard = () => {

  const {isOpen, handleClickClose, handleClickOpen} = React.useContext(AuthContext)


    return (
        <Home>
            <SideNavDiv>
                <SideNavTitle>
                    <h3>
                        Soft UI Dashboard
                    </h3>
                </SideNavTitle>
                <SideNavOptions>
                    <SideNavIconsDiv>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.598982" d="M13.9166 3.19958L12.1666 0.282916C12.0611 0.107414 11.8714 0 11.6667 0H2.33334C2.1286 0 1.93886 0.107414 1.83342 0.282916L0.0834238 3.19958C0.0288764 3.29029 3.65816e-06 3.39414 3.65816e-06 3.49999C-0.00225067 4.78572 1.0377 5.8301 2.32342 5.83332H2.32809C2.90427 5.83479 3.46035 5.62164 3.88792 5.23541C4.77106 6.0336 6.1151 6.0336 6.99824 5.23541C7.88183 6.03536 9.2279 6.03536 10.1115 5.23541C10.7955 5.85251 11.7791 6.00833 12.6204 5.63287C13.4617 5.2574 14.0025 4.42126 14 3.49999C14 3.39414 13.9711 3.29029 13.9166 3.19958Z" />
                            <path d="M11.676 6.69949C11.1337 6.69995 10.5988 6.5576 10.1132 6.28363L10.1045 6.28827C9.27663 6.75684 8.31822 6.83074 7.44216 6.49355C7.29043 6.43564 7.14231 6.36617 6.99882 6.28562L6.99241 6.28893C6.16481 6.75783 5.20639 6.8315 4.33066 6.49355C4.17912 6.43563 4.0312 6.36617 3.88791 6.28562C3.40322 6.55883 2.86924 6.70051 2.32808 6.69949C2.13429 6.69739 1.94096 6.67746 1.75 6.63989V13.3214C1.75 13.6871 2.01117 13.9836 2.33333 13.9836H5.83333V10.0105H8.16666V13.9836H11.6666C11.9888 13.9836 12.25 13.6871 12.25 13.3214V6.63724C12.0605 6.67578 11.8685 6.69659 11.676 6.69949Z" />
                        </svg>
                    </SideNavIconsDiv>
                    <SideNavTextDiv>Dashboard</SideNavTextDiv>
                </SideNavOptions>

                <SideNavOptions>
                    <SideNavIconsDiv>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill='true' xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.6" d="M3.99999 5.6H2.79999V0.56C2.79999 0.25032 3.06819 0 3.39999 0H10.6C10.9318 0 11.2 0.25032 11.2 0.56V3.92H9.99999V1.12H3.99999V5.6Z" />
                            <path d="M8.16667 4.90002H13.4167C13.7393 4.90002 14 5.15426 14 5.46877V13.4313C14 13.7458 13.7393 14 13.4167 14H0.583333C0.26075 14 0 13.7458 0 13.4313V7.74377C0 7.42926 0.26075 7.17502 0.583333 7.17502H5.83333C6.15592 7.17502 6.41667 7.42926 6.41667 7.74377V12.8625H7.58333V5.46877C7.58333 5.15426 7.84408 4.90002 8.16667 4.90002ZM2.33333 12.2938H4.08333V11.1563H2.33333V12.2938ZM4.08333 10.0188H2.33333V8.88127H4.08333V10.0188ZM9.91667 12.2938H11.6667V11.1563H9.91667V12.2938ZM11.6667 10.0188H9.91667V8.88127H11.6667V10.0188ZM9.91667 7.74377H11.6667V6.60627H9.91667V7.74377Z" />
                        </svg>

                    </SideNavIconsDiv>
                    <SideNavTextDiv>Tables</SideNavTextDiv>
                </SideNavOptions>

                <SideNavOptions>
                    <SideNavIconsDiv>
                        <svg width="16" height="14" viewBox="0 0 16 14" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.593634" d="M16 3.55556V1.18538C16 0.530459 15.4033 0 14.6667 0H1.33333C0.596667 0 0 0.530459 0 1.18538V3.55556H16Z" />
                            <path d="M0 6.22223V12.0404C0 12.7548 0.596667 13.3333 1.33333 13.3333H14.6667C15.4033 13.3333 16 12.7548 16 12.0404V6.22223H0ZM7.33333 10.101H2.66667V8.80809H7.33333V10.101ZM10.6667 10.101H13.3333V8.80809H10.6667V10.101Z" />
                        </svg>

                    </SideNavIconsDiv>
                    <SideNavTextDiv>Billing</SideNavTextDiv>
                </SideNavOptions>

                <SideNavOptions>
                    <SideNavIconsDiv>
                        <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.596982" d="M7 6.23154L4.3259 3.49439L5.15986 2.64076L2.57993 0L0 2.64076L2.57993 5.28152L3.41389 4.4279L5.92675 7L7 6.23154Z" />
                            <path opacity="0.596982" d="M11.6433 9C11.4384 9.02147 11.2308 9.03579 11.0199 9.03579C10.8176 9.03579 10.6166 9.02505 10.415 9.00418L8 11.6875L10.9967 14.3822C11.9126 15.2059 13.397 15.2059 14.313 14.3822C15.229 13.5586 15.229 12.2237 14.313 11.4001L11.6433 9Z" />
                            <path d="M12.6694 4.23187L10.7681 2.33063L12.7731 0.325625C12.3075 0.118125 11.7931 0 11.25 0C9.17877 0 7.50002 1.67875 7.50002 3.75C7.50002 4.12125 7.55565 4.47875 7.65627 4.8175L0.913165 10.2738C0.356291 10.7656 0.0237924 11.4731 0.00129243 12.215C-0.0218325 12.9575 0.266292 13.6844 0.79129 14.2087C1.30129 14.7194 1.97941 15 2.70066 15C3.47503 15 4.21378 14.6675 4.72628 14.0869L10.1825 7.34375C10.5213 7.44438 10.8788 7.5 11.25 7.5C13.3213 7.5 15 5.82125 15 3.75C15 3.20688 14.8819 2.6925 14.6744 2.22625L12.6694 4.23187Z" />
                        </svg>

                    </SideNavIconsDiv>
                    <SideNavTextDiv>RTL</SideNavTextDiv>
                </SideNavOptions>

                <AccountsText>
                    ACCOUNT PAGES
                </AccountsText>

                <SideNavOptions>
                    <SideNavIconsDiv>
                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.598586" d="M17.619 0H10.381C10.1703 0 10 0.170286 10 0.380952V7.61905C10 7.76343 10.0815 7.89524 10.2107 7.96C10.2644 7.98667 10.323 8 10.381 8C10.4617 8 10.5425 7.97448 10.6095 7.92381L13.5554 5.71429H17.619C17.8297 5.71429 18 5.544 18 5.33333V0.380952C18 0.170286 17.8297 0 17.619 0Z" />
                            <path d="M8.80115 12.6764C7.985 12.368 6.66308 12 5 12C3.33692 12 2.015 12.368 1.19846 12.6764C0.470769 12.9524 0 13.6138 0 14.3615V15.6364C0 15.8375 0.171923 16 0.384615 16H9.61539C9.82808 16 10 15.8375 10 15.6364V14.3615C10 13.6138 9.52923 12.9524 8.80115 12.6764Z" />
                            <path d="M5 11C6.662 11 8 8.87239 8 7.11111C8 5.39572 6.65413 4 5 4C3.34588 4 2 5.39572 2 7.11111C2 8.87239 3.338 11 5 11Z" />
                        </svg>

                    </SideNavIconsDiv>
                    <SideNavTextDiv>Profile</SideNavTextDiv>
                </SideNavOptions>

                <SideNavOptions>
                    <SideNavIconsDiv>
                        <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.603585" d="M13 13.8667H11.814V1.26061H1.73334V0H12.407C12.7343 0 13 0.282376 13 0.630303V13.8667Z" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.625926 3.46667H10.6407C10.9863 3.46667 11.2667 3.73846 11.2667 4.07334V14.9933C11.2667 15.3282 10.9863 15.6 10.6407 15.6H0.625926C0.280415 15.6 0 15.3282 0 14.9933V4.07334C0 3.73846 0.280415 3.46667 0.625926 3.46667ZM2.5037 12.5667H6.25926V11.3533H2.5037V12.5667ZM8.76296 10.14H2.5037V8.92667H8.76296V10.14ZM2.5037 7.71334H8.76296V6.50001H2.5037V7.71334Z" />
                        </svg>

                    </SideNavIconsDiv>
                    <SideNavTextDiv>Sign In</SideNavTextDiv>
                </SideNavOptions>

                <SideNavOptions>
                    <SideNavIconsDiv>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3392 0.000833961C14.5176 -0.00836115 14.6915 0.0588205 14.8174 0.18558C14.9432 0.312164 15.0092 0.486255 14.999 0.664411C14.5001 9.43795 6.68984 12.7307 6.61129 12.7627C6.37716 12.8585 6.10847 12.8045 5.92949 12.6258L2.3747 9.07097C2.19686 8.89286 2.14246 8.62581 2.23646 8.39231C2.26788 8.31314 5.52418 0.460813 14.3392 0.000833961ZM8.31632 7.36416C8.78599 7.55866 9.32658 7.45107 9.68599 7.09155C10.1766 6.60078 10.1766 5.80525 9.68599 5.31448C9.32658 4.95496 8.78599 4.84737 8.31632 5.04187C7.84665 5.23637 7.54041 5.69466 7.54041 6.20301C7.54041 6.71137 7.84665 7.16966 8.31632 7.36416Z" />
                            <path d="M0.699395 11.7605C1.15035 11.3064 1.80966 11.1282 2.42797 11.2931C3.04629 11.458 3.52923 11.9409 3.69415 12.5593C3.85908 13.1776 3.68081 13.8369 3.22677 14.2878C2.52863 14.986 0 15.0004 0 15.0004C0 15.0004 0 12.458 0.699395 11.7605Z" />
                            <path opacity="0.59854" d="M6.50821 1.3902C4.71078 1.07736 2.87365 1.6598 1.5848 2.95111C1.24874 3.29029 0.95656 3.67029 0.71511 4.08221C0.569685 4.32914 0.609748 4.64318 0.81251 4.8457L2.06237 6.09619C3.22377 4.25302 4.73399 2.65443 6.50821 1.3902Z" />
                            <path opacity="0.59854" d="M13.6102 8.49222C13.9231 10.2896 13.3406 12.1268 12.0493 13.4156C11.7101 13.7517 11.3301 14.0439 10.9182 14.2853C10.6713 14.4307 10.3572 14.3907 10.1547 14.1879L8.90424 12.9381C10.7474 11.7767 12.346 10.2664 13.6102 8.49222Z" />
                        </svg>

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
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 2C3.79086 2 2 3.79086 2 6C2 8.2091 3.79086 10 6 10C8.2091 10 10 8.2091 10 6C10 3.79086 8.2091 2 6 2ZM0 6C0 2.68629 2.68629 0 6 0C9.3137 0 12 2.68629 12 6C12 7.29583 11.5892 8.4957 10.8907 9.4765L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L9.4765 10.8907C8.4957 11.5892 7.29583 12 6 12C2.68629 12 0 9.3137 0 6Z" fill="#67748E" />
                                </svg>

                            </span>

                            <input type="text" placeholder='Type here ...' />
                        </SearchDiv>

                        <NavIconsDiv>

                            <SignInDiv>

                                <span>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7ZM8.75 4.375C8.75 5.3415 7.96653 6.125 7 6.125C6.0335 6.125 5.25 5.3415 5.25 4.375C5.25 3.4085 6.0335 2.625 7 2.625C7.96653 2.625 8.75 3.4085 8.75 4.375ZM6.99994 7.875C5.23459 7.875 3.71345 8.92062 3.02202 10.4262C3.98478 11.543 5.40982 12.25 6.99998 12.25C8.59014 12.25 10.0152 11.5431 10.9779 10.4263C10.2865 8.92062 8.76531 7.875 6.99994 7.875Z" fill="#67748E" />
                                    </svg>

                                </span>
                                <p>Sign In</p>
                            </SignInDiv>




                            <span>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.30305 1.02457C7.97142 -0.341523 6.02857 -0.341523 5.69693 1.02457C5.4827 1.90705 4.47164 2.32584 3.69614 1.85333C2.49566 1.12185 1.12185 2.49566 1.85333 3.69614C2.32584 4.47164 1.90705 5.48269 1.02457 5.69693C-0.341523 6.02857 -0.341523 7.97142 1.02457 8.30305C1.90705 8.51733 2.32584 9.5284 1.85333 10.3038C1.12185 11.5043 2.49566 12.8782 3.69615 12.1467C4.47164 11.6742 5.4827 12.0929 5.69693 12.9755C6.02857 14.3415 7.97142 14.3415 8.30305 12.9755C8.51733 12.0929 9.5284 11.6742 10.3038 12.1467C11.5043 12.8782 12.8782 11.5043 12.1467 10.3038C11.6742 9.5284 12.0929 8.51733 12.9755 8.30305C14.3415 7.97142 14.3415 6.02857 12.9755 5.69693C12.0929 5.48269 11.6742 4.47164 12.1467 3.69614C12.8782 2.49566 11.5043 1.12185 10.3038 1.85333C9.5284 2.32584 8.51733 1.90705 8.30305 1.02457ZM7 9.625C8.44979 9.625 9.625 8.44979 9.625 7C9.625 5.55025 8.44979 4.375 7 4.375C5.55025 4.375 4.375 5.55025 4.375 7C4.375 8.44979 5.55025 9.625 7 9.625Z" fill="#67748E" />
                                </svg>

                            </span>

                            <span>
                                <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 0C3.15971 0 0.857169 2.30254 0.857169 5.14286V8.2164L0.251075 8.82249C0.00593178 9.06763 -0.0673968 9.43629 0.0652718 9.75661C0.19794 10.0769 0.510489 10.2857 0.857169 10.2857H11.1429C11.4896 10.2857 11.8021 10.0769 11.9348 9.75661C12.0675 9.43629 11.9941 9.06763 11.749 8.82249L11.1429 8.2164V5.14286C11.1429 2.30254 8.84032 0 6 0Z" fill="#67748E" />
                                    <path d="M6.00002 13.7143C4.57986 13.7143 3.42859 12.5631 3.42859 11.1429H8.57145C8.57145 12.5631 7.42022 13.7143 6.00002 13.7143Z" fill="#67748E" />
                                </svg>

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
                            <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.8333 18.4515C13.9913 18.4515 12.5238 18.0965 11.6667 17.5V18.4515C11.6667 19.3342 13.4579 20 15.8333 20C18.2088 20 20 19.3342 20 18.4515V17.5C19.1429 18.0965 17.6754 18.4515 15.8333 18.4515Z" fill="white" />
                                <path d="M15.8333 15.9515C13.9913 15.9515 12.5238 15.5965 11.6667 15V15.9515C11.6667 16.8342 13.4579 17.5 15.8333 17.5C18.2088 17.5 20 16.8342 20 15.9515V15C19.1429 15.5965 17.6754 15.9515 15.8333 15.9515Z" fill="white" />
                                <path d="M15.8333 13.4515C13.9913 13.4515 12.5238 13.0965 11.6667 12.5V13.4515C11.6667 14.3342 13.4579 15 15.8333 15C18.2088 15 20 14.3342 20 13.4515V12.5C19.1429 13.0965 17.6754 13.4515 15.8333 13.4515Z" fill="white" />
                                <path d="M15.8333 9.16669C13.4579 9.16669 11.6667 9.88335 11.6667 10.8334C11.6667 11.7834 13.4579 12.5 15.8333 12.5C18.2088 12.5 20 11.7834 20 10.8334C20 9.88335 18.2088 9.16669 15.8333 9.16669Z" fill="white" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7143 8C12.581 8 10.4762 9.07156 10.4762 10.6667V13.3333H0.436508C0.195556 13.3333 0 13.1342 0 12.8889V0.444444C0 0.199111 0.195556 0 0.436508 0H17.8968C18.1378 0 18.3333 0.199111 18.3333 0.444444V7.47644V8.30178C17.5843 8.10667 16.7008 8 15.7143 8ZM9.16667 4.88889C8.20242 4.88889 7.42063 5.68489 7.42063 6.66667C7.42063 7.64844 8.20242 8.44444 9.16667 8.44444C10.1309 8.44444 10.9127 7.64844 10.9127 6.66667C10.9127 5.68489 10.1309 4.88889 9.16667 4.88889Z" fill="white" />
                            </svg>

                        </EventsIcon>
                    </EventsButton>


                    <EventsButton>
                        <EventsText>
                            <h4>Today's Users</h4>
                            <h3>2,300</h3>
                        </EventsText>
                        <EventsIcon>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.5462 10.3832L15.2919 8.7844C15.2256 8.70186 15.1397 8.63737 15.0419 8.5969L13.2375 7.83315C13.1244 7.78587 13 7.77241 12.8794 7.7944L10.7444 8.1919C10.5303 8.23185 10.3525 8.38031 10.275 8.58378L9.535 10.53C9.48692 10.6562 9.481 10.7946 9.51812 10.9244L9.9725 12.5L9.25562 14.105C9.17996 14.2741 9.18317 14.468 9.26437 14.6344L10.1431 16.4375C10.2481 16.6524 10.4665 16.7885 10.7056 16.7882C10.7487 16.7884 10.7916 16.784 10.8337 16.775L12.4781 16.4319C12.5689 16.4137 12.6543 16.3752 12.7281 16.3194L13.99 15.3682C14.0235 15.3429 14.0543 15.3142 14.0819 15.2825L15.1181 14.1107L16.3119 12.8963C16.4097 12.7966 16.4713 12.667 16.4869 12.5282L16.6781 10.8407C16.6962 10.6767 16.6488 10.5123 16.5462 10.3832Z" fill="white" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 4.47715 4.47715 0 10 0C15.5201 0.00654351 19.9935 4.47987 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM4.57625 16.8531C6.11717 18.0814 8.02943 18.7502 10 18.75C13.2018 18.7575 16.1512 17.0127 17.6864 14.2029C19.2216 11.3931 19.0966 7.96853 17.3606 5.27812L16.4856 5.8325C16.3838 5.89805 16.2648 5.93198 16.1437 5.93L14.4888 5.91313L13.2506 6.40625C13.0564 6.48359 12.8364 6.45873 12.6644 6.34L11.4675 5.51438C11.3447 5.43003 11.256 5.30457 11.2175 5.16062L10.8556 3.7975L9.89313 2.78562L8.76813 1.98563C8.60881 1.87233 8.51168 1.69102 8.50562 1.49563L8.5025 1.38625C7.35961 1.58454 6.26797 2.00955 5.29187 2.63625L6.25 3.75L7.42688 5.22813C7.52364 5.34857 7.572 5.50079 7.5625 5.655L7.4475 7.65938C7.43075 7.94647 7.22026 8.18507 6.9375 8.2375L4.82188 8.62875L3.5825 10.0938L4.17375 11.3206L4.835 12.5031L6.4775 13.7769C6.73627 13.9769 6.79704 14.3426 6.61687 14.6156L5.47312 16.3506C5.40645 16.4513 5.31201 16.5306 5.20125 16.5788L4.57625 16.8531Z" fill="white" />
                            </svg>

                        </EventsIcon>
                    </EventsButton>
                    <EventsButton>
                        <EventsText>
                            <h4>New Clients</h4>
                            <h3>+3,462</h3>
                        </EventsText>

                        <EventsIcon>
                            <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.4 14.1667V15.8667C3.4 16.4917 2.8917 17 2.26667 17C1.64163 17 1.13333 16.4917 1.13333 15.8667V1.13333H9.06667V0H0.566667C0.253867 0 0 0.253867 0 0.566667V15.8667C0 17.1167 1.0166 18.1333 2.26667 18.1333H14.1667C15.4167 18.1333 16.4333 17.1167 16.4333 15.8667V14.1667H3.4Z" fill="white" />
                                <path d="M13.0333 9.06669C11.9856 9.06669 11.0109 8.74822 10.2 8.20422V12.8169L13.0333 11.4002L15.8667 12.8169V8.20422C15.0558 8.74822 14.0811 9.06669 13.0333 9.06669Z" fill="white" />
                                <circle cx="13.0333" cy="3.96667" r="3.96667" fill="white" />
                            </svg>

                        </EventsIcon>
                    </EventsButton>

                    <EventsButton>
                        <EventsText>
                            <h4>Sale</h4>
                            <h3>$103,430</h3>
                        </EventsText>
                        <EventsIcon>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="3.33418" cy="18.3334" r="1.66658" fill="white" />
                                <circle cx="16.6668" cy="18.3334" r="1.66658" fill="white" />
                                <path d="M19.1667 13.3337H2.1826L3.01589 11.6671H15.8336C16.174 11.667 16.4802 11.4598 16.6068 11.1438L19.94 2.8109C20.0429 2.55419 20.0117 2.26315 19.8567 2.03406C19.7018 1.80498 19.4433 1.6677 19.1667 1.66763H2.8459L1.42431 0.244373C1.09848 -0.0814577 0.570204 -0.0814577 0.244373 0.244373C-0.0814577 0.570204 -0.0814577 1.09848 0.244373 1.42431L1.66763 2.8459V10.6372L0.0893813 13.7937C-0.0400571 14.052 -0.0264528 14.3589 0.125332 14.6047C0.277116 14.8506 0.545417 15.0003 0.834342 15.0003H19.1667C19.6269 15.0003 20 14.6272 20 14.167C20 13.7068 19.6269 13.3337 19.1667 13.3337Z" fill="white" />
                            </svg>

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
    /* border:1px solid black; */
    display: flex;
    flex-direction:row;
    padding: 14px 0px 40px 22px;
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
`

const OrdersDiv = styled.div`

    width: 356px;
    height: 538px;
    background: #FFFFFF;
    box-shadow: 0px 20px 27px rgba(0, 0, 0, 0.05);
    border-radius: 12px;
`


const HoldingDiv = styled.div`
        width: 1141px;
        height:100%;
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
        
        & svg {
            fill : #fff
        }
    };
    
    `

const SideNavIconsDiv = styled.span`
    width:32px;
    height:32px;
    box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.12), 0px 2px 4px -1px rgba(0, 0, 0, 0.07);
    border-radius:8px;
    background: #FFFFFF;
    margin: 12px 12px 0px 16px;
    
    & svg  {
        width:18px;
        margin: 8px 8px 5px 6px; 
        fill :rgba(58, 65, 111, 1);
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
`
// ---> Events Section    

const EventsDiv = styled.div`
        width: 100%;
        height:115px;
        display:flex;
        flex-direction:row;
        column-gap:24px;
    `

const EventsButton = styled.div`
        width:262px;
        height:82px;
        display: flex;
        background: #FFFFFF;
        box-shadow: 0px 20px 27px rgba(0, 0, 0, 0.05);
        border-radius: 16px;
    `

const EventsText = styled.div`
    margin: 20px 12px 19px 16px ;
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
`

const EventsIcon = styled.span`
width: 48px;
height: 48px;
background: linear-gradient(135deg, #FF0080 0%, #7928CA 100%);
box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.12), 0px 2px 4px -1px rgba(0, 0, 0, 0.07);
border-radius: 8px;

margin : 16px 0px 30px 78px;

& svg  {
        
        margin: 14px; 
        fill : #fff;
    }  
`

// Header part of the page

const NavigationDiv = styled.div`
    width:100%;
    height:90px;

`

const RouterDiv = styled.div`
width: 150px;
float: left;
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

