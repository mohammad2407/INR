import React from 'react'
import styled from 'styled-components'
export const OrderComp = () => {
    return (
        <OrderContainer>
            <OrderTitle>
                <h3>Orders History</h3>
                <SubTitle>
                    <span>
                        <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.00156 11.0073L6.00156 3.42132L8.29456 5.71432C8.54563 5.97428 8.91743 6.07854 9.26706 5.98702C9.61669 5.89551 9.88974 5.62246 9.98125 5.27283C10.0728 4.9232 9.96851 4.5514 9.70856 4.30032L5.70856 0.300324C5.52095 0.112241 5.26621 0.00653648 5.00056 0.00653648C4.7349 0.00653648 4.48017 0.112241 4.29256 0.300324L0.292556 4.30032C-0.097909 4.69134 -0.0974613 5.32486 0.293556 5.71532C0.684574 6.10579 1.31809 6.10534 1.70856 5.71432L4.00156 3.42132L4.00156 11.0073C4.00156 11.5596 4.44927 12.0073 5.00156 12.0073C5.55384 12.0073 6.00156 11.5596 6.00156 11.0073Z" fill="#82D616" />
                        </svg>
                    </span>
                    <p>24% this month</p>
                </SubTitle>
            </OrderTitle>
            <RowDiv>
                <span>
                    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7456 10.6113C14.1943 10.0049 13.588 9.3159 13.588 7.99293V5.73286C13.588 2.6735 10.8869 0 7.8 0C4.71307 0 2.01201 2.70106 2.01201 5.78799V7.99293C2.01201 9.3159 1.40565 10.0049 0.854417 10.6113C0.413428 11.1074 0 11.576 0 12.2926C0 13.8085 3.14205 14.8283 7.8 14.8283C12.458 14.8283 15.6 13.8085 15.6 12.2926C15.6 11.6035 15.1866 11.1074 14.7456 10.6113Z" fill="url(#paint0_linear_1_501)" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.80001 15.3795C6.9456 15.3795 6.11874 15.3519 5.37457 15.2693C5.67775 16.3166 6.64242 17.0608 7.80001 17.0608C8.95761 17.0608 9.92228 16.289 10.2255 15.2693C9.48129 15.3519 8.65443 15.3795 7.80001 15.3795Z" fill="url(#paint1_linear_1_501)" />
                        <defs>
                            <linearGradient id="paint0_linear_1_501" x1="-7.8" y1="7.41413" x2="7.0092" y2="22.9941" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#98EC2D" />
                                <stop offset="1" stop-color="#17AD37" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_1_501" x1="2.94913" y1="16.165" x2="4.11359" y2="19.318" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#98EC2D" />
                                <stop offset="1" stop-color="#17AD37" />
                            </linearGradient>
                        </defs>
                    </svg>

                </span>
                <RowText>
                    <h3>$2,400 - Redesign store</h3>
                    <p>09 JUN 7:20 PM</p>
                </RowText>
            </RowDiv>

            <RowDiv>
                <span>
                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.8676 0.162789C13.7729 0.0588972 13.6396 0 13.5001 0H0.500063C0.360563 0 0.227312 0.0588972 0.132562 0.162789C0.0380611 0.266428 -0.00943907 0.405456 0.00156098 0.546L1.00157 13.1849C1.01857 13.3972 1.16532 13.5762 1.36857 13.6323L6.86859 15.149C6.91159 15.1609 6.95584 15.1667 7.00009 15.1667C7.04434 15.1667 7.08859 15.1609 7.13159 15.149L12.6316 13.6323C12.8349 13.5762 12.9816 13.3972 12.9984 13.1846L13.9984 0.545747C14.0096 0.405456 13.9621 0.266428 13.8676 0.162789ZM11.2501 4.29722H4.30558L4.44833 6.31944H11.0556L10.7126 11.1761L7.00009 12.4271L3.25008 11.1632V8.84722H4.75008V10.0702L7.00009 10.8285L9.2876 10.0573L9.4446 7.83611H3.05182L2.69457 2.78056H11.2501V4.29722Z" fill="url(#paint0_linear_1_508)" />
                        <defs>
                            <linearGradient id="paint0_linear_1_508" x1="-7" y1="7.58333" x2="8.11821" y2="21.5386" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FF667C" />
                                <stop offset="1" stop-color="#EA0606" />
                            </linearGradient>
                        </defs>
                    </svg>

                </span>
                <RowText>
                    <h3>New Order #3654323</h3>
                    <p>08 JUN 12:20 PM</p>
                </RowText>
            </RowDiv>

            <RowDiv>
                <span>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2.50075" cy="13.7507" r="1.24999" fill="url(#paint0_linear_1_516)" />
                        <circle cx="12.5007" cy="13.7507" r="1.24999" fill="url(#paint1_linear_1_516)" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3756 10.0007H1.63702L2.26202 8.7507H11.8757C12.131 8.75064 12.3607 8.59524 12.4557 8.3582L14.9556 2.10827C15.0328 1.91572 15.0094 1.69743 14.8932 1.52561C14.777 1.35379 14.5831 1.25082 14.3756 1.25078H2.13452L1.06828 0.183288C0.823895 -0.0610959 0.427671 -0.0610959 0.183288 0.183288C-0.0610959 0.427671 -0.0610959 0.823895 0.183288 1.06828L1.25078 2.13452V7.97821L0.0670388 10.3457C-0.0300441 10.5394 -0.0198404 10.7696 0.0940028 10.954C0.207846 11.1384 0.40908 11.2507 0.625783 11.2507H14.3756C14.7208 11.2507 15.0006 10.9709 15.0006 10.6257C15.0006 10.2805 14.7208 10.0007 14.3756 10.0007Z" fill="url(#paint2_linear_1_516)" />
                        <defs>
                            <linearGradient id="paint0_linear_1_516" x1="0.000776052" y1="13.7507" x2="2.50075" y2="16.2506" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#21D4FD" />
                                <stop offset="1" stop-color="#2152FF" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_1_516" x1="10.0007" y1="13.7507" x2="12.5007" y2="16.2506" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#21D4FD" />
                                <stop offset="1" stop-color="#2152FF" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_1_516" x1="-7.50032" y1="5.62534" x2="3.30038" y2="20.026" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#21D4FD" />
                                <stop offset="1" stop-color="#2152FF" />
                            </linearGradient>
                        </defs>
                    </svg>

                </span>

                <RowText>
                    <h3>Company Server Payments</h3>
                    <p>04 JUN 3:10 PM</p>
                </RowText>

            </RowDiv>

            <RowDiv>
                <span>
                    <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15 11H2C1.448 11 1 10.552 1 10V1C1 0.448 1.448 0 2 0H15C15.552 0 16 0.448 16 1V10C16 10.552 15.552 11 15 11Z" fill="url(#paint0_linear_1_524)" />
                        <path d="M4 8H7" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 8H13" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M16 4H1" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        <defs>
                            <linearGradient id="paint0_linear_1_524" x1="-6.5" y1="5.5" x2="3.99133" y2="19.8064" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FBCF33" />
                                <stop offset="1" stop-color="#F53939" />
                            </linearGradient>
                        </defs>
                    </svg>

                </span>
                <RowText>
                    <h3>New Card added for order #4826321</h3>
                    <p>02 JUN 2:45 PM</p>
                </RowText>
            </RowDiv>

            <RowDiv>
                <span>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.707 0.292786C14.3165 -0.0975955 13.6835 -0.0975955 13.293 0.292786L6.02 7.56579C5.40985 7.19882 4.71199 7.00328 4 6.99979C1.79086 6.99979 0 8.79065 0 10.9998C0 13.2089 1.79086 14.9998 4 14.9998C6.20914 14.9998 8 13.2089 8 10.9998C7.9965 10.2878 7.80096 9.58994 7.434 8.97979L9.854 6.56079L11.646 8.35379C11.7398 8.44783 11.8672 8.50068 12 8.50068C12.1328 8.50068 12.2602 8.44783 12.354 8.35379L14.854 5.85379C14.948 5.75998 15.0009 5.63261 15.0009 5.49979C15.0009 5.36696 14.948 5.23959 14.854 5.14579L13.061 3.35379L14.707 1.70679C15.0974 1.31629 15.0974 0.683286 14.707 0.292786Z" fill="url(#paint0_linear_1_533)" />
                        <defs>
                            <linearGradient id="paint0_linear_1_533" x1="-7.50045" y1="7.49989" x2="7.49934" y2="22.5008" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FF0080" />
                                <stop offset="1" stop-color="#7928CA" />
                            </linearGradient>
                        </defs>
                    </svg>

                </span>
                <RowText>
                    <h3>Unlock folders for development</h3>
                    <p>18 MAY 1:30 PM</p>
                </RowText>
            </RowDiv>

            <RowDiv>
                <span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9565 12.7826C9.61101 12.7826 8.5391 12.5035 7.91306 12.0345V12.7826C7.91306 13.4765 9.22145 14 10.9565 14C12.6916 14 14 13.4765 14 12.7826V12.0345C13.374 12.5035 12.3021 12.7826 10.9565 12.7826Z" fill="url(#paint0_linear_1_539)" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9565 10.9565C9.61101 10.9565 8.5391 10.6774 7.91306 10.2084V10.9565C7.91306 11.6504 9.22145 12.1739 10.9565 12.1739C12.6916 12.1739 14 11.6504 14 10.9565V10.2084C13.374 10.6774 12.3021 10.9565 10.9565 10.9565Z" fill="url(#paint1_linear_1_539)" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9565 9.13044C9.61101 9.13044 8.5391 8.85135 7.91306 8.38235V9.13044C7.91306 9.82435 9.22145 10.3478 10.9565 10.3478C12.6916 10.3478 14 9.82435 14 9.13044V8.38235C13.374 8.85135 12.3021 9.13044 10.9565 9.13044Z" fill="url(#paint2_linear_1_539)" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9565 6.08696C9.22145 6.08696 7.91306 6.61044 7.91306 7.30435C7.91306 7.99826 9.22145 8.52174 10.9565 8.52174C12.6916 8.52174 14 7.99826 14 7.30435C14 6.61044 12.6916 6.08696 10.9565 6.08696Z" fill="url(#paint3_linear_1_539)" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.30435 7.30435C7.30435 6.21204 8.77191 5.47826 10.9565 5.47826C11.6443 5.47826 12.2603 5.5513 12.7826 5.68491V5.11974V0.304348C12.7826 0.136348 12.6463 0 12.4783 0H0.304348C0.136348 0 0 0.136348 0 0.304348V8.82609C0 8.99409 0.136348 9.13043 0.304348 9.13043H7.30435V7.30435ZM5.17391 4.56522C5.17391 3.89291 5.719 3.34783 6.3913 3.34783C7.06361 3.34783 7.6087 3.89291 7.6087 4.56522C7.6087 5.23752 7.06361 5.78261 6.3913 5.78261C5.719 5.78261 5.17391 5.23752 5.17391 4.56522Z" fill="url(#paint4_linear_1_539)" />
                        <defs>
                            <linearGradient id="paint0_linear_1_539" x1="4.86958" y1="13.0173" x2="6.01904" y2="16.5771" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#3A416F" />
                                <stop offset="1" stop-color="#141727" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_1_539" x1="4.86958" y1="11.1912" x2="6.01904" y2="14.751" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#3A416F" />
                                <stop offset="1" stop-color="#141727" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_1_539" x1="4.86958" y1="9.36509" x2="6.01904" y2="12.9249" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#3A416F" />
                                <stop offset="1" stop-color="#141727" />
                            </linearGradient>
                            <linearGradient id="paint3_linear_1_539" x1="4.86958" y1="7.30435" x2="6.54874" y2="11.5023" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#3A416F" />
                                <stop offset="1" stop-color="#141727" />
                            </linearGradient>
                            <linearGradient id="paint4_linear_1_539" x1="-6.3913" y1="4.56522" x2="2.24559" y2="16.6569" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#3A416F" />
                                <stop offset="1" stop-color="#141727" />
                            </linearGradient>
                        </defs>
                    </svg>

                </span>
                <RowText>
                    <h3>New order #46282344</h3>
                    <p>14 MAY 3:30 PM</p>
                </RowText>
            </RowDiv>


        </OrderContainer>
    )
}


const OrderContainer = styled.div`
    
    width: 90%;
    margin: 12px 22px 34px 20px;

`

const OrderTitle = styled.div`
    text-align:left;
    width: 100%;
    height:65px;
    margin : 24px 0px;
    & h3 {
        height: 22px;
        font-family: 'OpenSans', 'Segoe UI';
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.1px;
        margin:0;
        padding:0;
        color: #252F40;
    }
`
const SubTitle = styled.div`
    display:flex;
    flex-direction:row;
    font-family: 'OpenSans', 'Segoe UI';
    & span {
        margin: 3px 0px;
    }
    & p{
        height: 19px;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.1px;
        margin:6px 2px;
        padding:0;
        color: #252F40;
    }
`

const RowDiv = styled.div`
    display:flex;
    flex-direction : row;
    gap:14px;
    height:60px;
    & span { 
        margin : 5px 0px;
    }
`
const RowText = styled.div`
        font-family: 'OpenSans', 'Segoe UI';
        text-align:left;
    & h3{
        height: 19px;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.1 px;
        margin:0;
        padding:0;
        color: #252F40;
        font-weight:600;
    };
    & p{
    height: 16px;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.1px;
    margin:0;
    padding:0;
    color: #67748E;
    }
`