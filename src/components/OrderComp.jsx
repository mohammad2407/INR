import React from 'react'
import styled from 'styled-components'
import {ReactComponent as Bell} from './utils/bell.svg'
import {ReactComponent as Html} from './utils/html.svg'
import {ReactComponent as CartColored} from './utils/cart-colored.svg'
import {ReactComponent as CreditColored} from './utils/credit-colored.svg'
import {ReactComponent as Key} from './utils/key.svg'
import {ReactComponent as MoneyColored} from './utils/black-money.svg'


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
                   <Bell />
                </span>
                <RowText>
                    <h3>$2,400 - Redesign store</h3>
                    <p>09 JUN 7:20 PM</p>
                </RowText>
            </RowDiv>

            <RowDiv>
                <span>
                    <Html />
                </span>
                <RowText>
                    <h3>New Order #3654323</h3>
                    <p>08 JUN 12:20 PM</p>
                </RowText>
            </RowDiv>

            <RowDiv>
                <span>
                <CartColored />
                </span>

                <RowText>
                    <h3>Company Server Payments</h3>
                    <p>04 JUN 3:10 PM</p>
                </RowText>

            </RowDiv>

            <RowDiv>
                <span>
                    <CreditColored />
                </span>
                <RowText>
                    <h3>New Card added for order #4826321</h3>
                    <p>02 JUN 2:45 PM</p>
                </RowText>
            </RowDiv>

            <RowDiv>
                <span>
                    <Key />
                </span>
                <RowText>
                    <h3>Unlock folders for development</h3>
                    <p>18 MAY 1:30 PM</p>
                </RowText>
            </RowDiv>

            <RowDiv>
                <span>
                    <MoneyColored />
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
    @media (min-width:950px) {
        width:95%;
    }

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
    @media (min-width:950px){
        width:100%;
        margin: 21px 0px;
        & h3 {
            font-size:14px;
        }
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

    @media (min-width:950px){
       & p {
        font-size:12px;
       }
      & span {
        margin : 2px 0px;
      }
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

    @media (min-width:950px) {
        & h3{
            font-size:12px;
        }
    }
`