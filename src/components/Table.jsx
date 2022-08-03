import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Shopify } from './utils/shopify.svg'
import { ReactComponent as Atlaas } from './utils/atlaas.svg'
import { ReactComponent as Slack } from './utils/slack.svg'
import { ReactComponent as Spotify } from './utils/spotify.svg'
import { ReactComponent as Jira } from './utils/jira.svg'
import { ReactComponent as Invision } from './utils/invision.svg'


const Table = () => {
    return (
        <TableDiv>

            <TableTitleDiv>
                <h3>Projects</h3>
                <h4>done this month <strong>40%</strong></h4>
            </TableTitleDiv>
            <Container>
                <HeadingContent>
                    <Heading1>COMPANY</Heading1>
                    <Heading2>MEMBERS</Heading2>
                    <Heading3>BUDGET</Heading3>
                    <Heading4>COMPLETION</Heading4>

                </HeadingContent>

                <ContainerWrapper>
                    <LiDiv>
                        <CompanyDiv>
                            <span>
                                {/* <Shopify /> */}
                                 <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.0504 4.64041C19.1414 4.64803 19.2516 4.7172 19.2689 4.84219H19.2689C19.286 4.96718 22 23.207 22 23.207L14.2687 24.8696L0 22.2121C0 22.2121 1.83115 8.13527 1.90031 7.63899C1.9922 6.98347 2.01434 6.96156 2.71417 6.74334C2.82794 6.70781 3.71863 6.43326 4.97241 6.04707C5.45573 4.00955 6.99725 0 10.2239 0C10.6453 0 11.1333 0.224983 11.5272 0.742839C11.5666 0.740613 11.606 0.739072 11.6442 0.739072C13.0293 0.739072 13.8167 1.91176 14.2628 3.18786C14.7184 3.04772 14.9938 2.96322 15.0102 2.95843C15.1213 2.9259 15.4078 2.88155 15.5545 3.02734C15.701 3.17322 17.0365 4.49119 17.0365 4.49119C17.0365 4.49119 18.9595 4.63288 19.0504 4.64041ZM12.2668 3.80177L13.4741 3.43031C13.1682 2.50136 12.6929 1.69414 11.9792 1.6051C12.1569 2.11132 12.2676 2.74988 12.2676 3.54297C12.2676 3.63283 12.2672 3.71508 12.2668 3.79856L12.2668 3.80177ZM11.0939 1.76237C11.2923 2.2566 11.4213 2.96588 11.4213 3.923C11.4213 3.97123 11.4209 4.01538 11.4205 4.05997L11.4205 4.06037L11.4205 4.06203L10.3279 4.39835L8.92693 4.82961C9.40707 2.98762 10.3071 2.09796 11.0939 1.76237ZM10.5491 0.999156C10.4148 0.907296 10.2745 0.860296 10.1352 0.860296H10.1352C7.81758 0.860296 6.51574 3.88507 5.96748 5.74067L7.93849 5.13387C8.40657 2.70108 9.51498 1.48285 10.5491 0.999156Z" fill="#95BF46" />
                                <path d="M19.0803 4.58169C18.9904 4.57413 17.0869 4.43204 17.0869 4.43204C17.0869 4.43204 15.7649 3.11023 15.6198 2.96393C15.5655 2.90949 15.4923 2.88159 15.4158 2.86957L14.3478 24.8696L22 23.2024C22 23.2024 19.3135 4.90941 19.2966 4.78406C19.2794 4.65871 19.1704 4.58933 19.0803 4.58169" fill="#5E8E3E" />
                                <path d="M11.4783 8.97475L10.4859 11.7531C10.4859 11.7531 9.61641 11.3164 8.5506 11.3164C6.98811 11.3164 6.90948 12.2392 6.90948 12.4718C6.90948 13.7407 10.4239 14.2269 10.4239 17.1992C10.4239 19.5377 8.84808 21.0435 6.72327 21.0435C4.1735 21.0435 2.86957 19.5499 2.86957 19.5499L3.55229 17.4269C3.55229 17.4269 4.89262 18.5099 6.02361 18.5099C6.76263 18.5099 7.06324 17.9623 7.06324 17.5621C7.06324 15.9069 4.17996 15.8331 4.17996 13.1132C4.17996 10.824 5.9257 8.6087 9.44966 8.6087C10.8075 8.6087 11.4783 8.97475 11.4783 8.97475" fill="white" />
                            </svg>

                            </span>
                            <p>Soft UI Shopify Version</p>
                        </CompanyDiv>
                        <MembersDiv>
                            <ImageDiv>
                                <Images>
                                    <img src="https://image.shutterstock.com/image-photo/headshot-portrait-smiling-african-american-260nw-1667439898.jpg" alt="" />
                                </Images >

                                <Images  >
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTieNYaC3O9CcHM-O5pOakYAwyckoj9qBa8-g&usqp=CAU" alt="" />
                                </Images>

                                <Images>
                                    <img src="https://www.morganstanley.com/content/dam/msdotcom/people/tiles/miriam-faghihi.jpg.img.490.medium.jpg/1595876429967.jpg" alt="" />
                                </Images>
                            </ImageDiv>
                        </MembersDiv>
                        <BudgetDiv>
                            <p>$14,000</p>
                        </BudgetDiv>
                        <CompletionDiv>
                            <p>60%</p>
                        </CompletionDiv>
                    </LiDiv>

                    <LiDiv>
                        <CompanyDiv>
                            <span>
                                <Atlaas />
                            </span>

                            <p> Progress Track</p>
                        </CompanyDiv>
                        <MembersDiv>
                            <ImageDiv>
                                <Images>
                                    <img src="https://image.shutterstock.com/image-photo/headshot-portrait-smiling-african-american-260nw-1667439898.jpg" alt="" />
                                </Images >

                                <Images  >
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTieNYaC3O9CcHM-O5pOakYAwyckoj9qBa8-g&usqp=CAU" alt="" />
                                </Images>

                            </ImageDiv>
                        </MembersDiv>
                        <BudgetDiv>
                            <p>$3,000</p>
                        </BudgetDiv>
                        <CompletionDiv>
                            <p>10%</p>
                        </CompletionDiv>
                    </LiDiv>

                    <LiDiv>
                        <CompanyDiv>
                            <span>
                                <Slack />
                            </span>
                            <p>Fix Platform Errors</p>
                        </CompanyDiv>
                        <MembersDiv>
                            <ImageDiv>
                                <Images>
                                    <img src="https://image.shutterstock.com/image-photo/headshot-portrait-smiling-african-american-260nw-1667439898.jpg" alt="" />
                                </Images >

                                <Images  >
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTieNYaC3O9CcHM-O5pOakYAwyckoj9qBa8-g&usqp=CAU" alt="" />
                                </Images>

                                <Images>
                                    <img src="https://www.morganstanley.com/content/dam/msdotcom/people/tiles/miriam-faghihi.jpg.img.490.medium.jpg/1595876429967.jpg" alt="" />
                                </Images>

                                <Images>
                                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                                </Images>
                            </ImageDiv>
                        </MembersDiv>
                        <BudgetDiv>
                            <p>Not Set</p>
                        </BudgetDiv>
                        <CompletionDiv>
                            <p>100%</p>
                        </CompletionDiv>
                    </LiDiv>

                    <LiDiv>
                        <CompanyDiv>
                            <span>
                                <Spotify />
                            </span>
                            <p> Launch New Mobile App</p>
                        </CompanyDiv>
                        <MembersDiv>
                            <ImageDiv>
                                <Images>
                                    <img src="https://image.shutterstock.com/image-photo/headshot-portrait-smiling-african-american-260nw-1667439898.jpg" alt="" />
                                </Images >

                                <Images  >
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTieNYaC3O9CcHM-O5pOakYAwyckoj9qBa8-g&usqp=CAU" alt="" />
                                </Images>

                            </ImageDiv>
                        </MembersDiv>
                        <BudgetDiv>
                            <p>$20,000</p>
                        </BudgetDiv>
                        <CompletionDiv>
                            <p>100%</p>
                        </CompletionDiv>
                    </LiDiv>

                    <LiDiv>
                        <CompanyDiv>
                            <span>
                                <Jira />
                            </span>
                            <p>Add New Landing Page</p>
                        </CompanyDiv>
                        <MembersDiv>
                            <ImageDiv>
                                <Images>
                                    <img src="https://image.shutterstock.com/image-photo/headshot-portrait-smiling-african-american-260nw-1667439898.jpg" alt="" />
                                </Images >

                                <Images  >
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTieNYaC3O9CcHM-O5pOakYAwyckoj9qBa8-g&usqp=CAU" alt="" />
                                </Images>

                                <Images>
                                    <img src="https://www.morganstanley.com/content/dam/msdotcom/people/tiles/miriam-faghihi.jpg.img.490.medium.jpg/1595876429967.jpg" alt="" />
                                </Images>
                            </ImageDiv>
                        </MembersDiv>
                        <BudgetDiv>
                            <p>$4,000</p>
                        </BudgetDiv>
                        <CompletionDiv>
                            <p>80%</p>
                        </CompletionDiv>
                    </LiDiv>

                    <LiDiv>
                        <CompanyDiv>
                            <span>
                                <Invision />
                            </span>
                            <p>Redesign Online Store</p>
                        </CompanyDiv>
                        <MembersDiv>
                            <ImageDiv>
                                <Images>
                                    <img src="https://media.thetab.com/blogs.dir/90/files/2018/05/smile-portrait-face-person-people-human.jpg" alt="" />
                                </Images >

                                <Images  >
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTieNYaC3O9CcHM-O5pOakYAwyckoj9qBa8-g&usqp=CAU" alt="" />
                                </Images>

                                <Images>
                                    <img src="https://www.morganstanley.com/content/dam/msdotcom/people/tiles/miriam-faghihi.jpg.img.490.medium.jpg/1595876429967.jpg" alt="" />
                                </Images>
                            </ImageDiv>
                        </MembersDiv>
                        <BudgetDiv>
                            <p>
                                $2,000
                            </p>
                        </BudgetDiv>
                        <CompletionDiv>
                            <p>80%</p>
                        </CompletionDiv>
                    </LiDiv>


                    <LiDiv>
                        <CompanyDiv>
                            <span>
                                <Invision />
                            </span>
                            <p>Redesign Online Store</p>
                        </CompanyDiv>
                        <MembersDiv>
                            <ImageDiv>
                                <Images>
                                    <img src="https://media.thetab.com/blogs.dir/90/files/2018/05/smile-portrait-face-person-people-human.jpg" alt="" />
                                </Images >

                                <Images  >
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTieNYaC3O9CcHM-O5pOakYAwyckoj9qBa8-g&usqp=CAU" alt="" />
                                </Images>

                                <Images>
                                    <img src="https://www.morganstanley.com/content/dam/msdotcom/people/tiles/miriam-faghihi.jpg.img.490.medium.jpg/1595876429967.jpg" alt="" />
                                </Images>
                            </ImageDiv>
                        </MembersDiv>
                        <BudgetDiv>
                            <p>
                                $2,000
                            </p>
                        </BudgetDiv>
                        <CompletionDiv>
                            <p>80%</p>
                        </CompletionDiv>
                    </LiDiv>

                </ContainerWrapper>
            </Container>

        </TableDiv>
    )
}

export default Table

const TableDiv = styled.div`
    
    width:100%;
    height:100%;
    

`

const ContainerWrapper = styled.div`
    height:300px;
    width:100%;
    overflow-y:scroll;
    overflow-x:hidden;
    &::-webkit-scrollbar{
        width:0.01px;
        height:1px;
        -ms-overflow-style: -ms-autohiding-scrollbar;
         &-thumb{
         background-color: #cecaca;
        }
    }

`

const TableTitleDiv = styled.div`
      width: 94%;
    margin: 24px 24px 40px 24px;
    height:60px;
    font-family : 'OpenSans', 'Segoe UI';
    text-align:left;
    position:sticky;
    
    & h3 {
    height: 22px;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.1px;
    margin:0;
    padding:0;
    color: #252F40;
    font-weight:700;
    }

    & h4 {
    height: 19px;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.1px;
    color: #67748E;
    margin:5px 0px;
    padding:0;
    font-weight:600;
      & strong {
        height: 19px;

        
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.1px;

        color: #17C1E8;
      }
    }
`
const Container = styled.div`
    width: 94%;
    margin: 24px 24px 40px 24px;
    height:100%;
   

`
const HeadingContent = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 139px);
    width: 100%;
    height: 50px;   
    font-family: 'OpenSans', 'Segoe UI';
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.387234px;
    font-weight:600;
    color: #8392AB;
    
    @media (min-width: 1440px) {
        grid-template-columns: repeat(6, 10rem)
    }

    @media (min-width: 1151px) and (max-width:1439px) {
        grid-template-columns: repeat(6, 8.5rem)
    }
    @media (min-width:1151px) and (max-width:1349px) {
        grid-template-columns: repeat(6, 7rem)
    }
    @media (min-width: 950px) and (max-width:1150px) {
        grid-template-columns: repeat(6, 9rem);
        font-size:12px;
    }


`

const Heading1 = styled.div`
    grid-column-start:1;
    grid-column-end:3;
    text-align:left;


`

const Heading2 = styled.div`
    grid-column-start:3;
    grid-column-end:4;


    
`
const Heading3 = styled.div`
grid-column-start:4;
grid-column-end:5;

`
const Heading4 = styled.div`
grid-column-start:5;
grid-column-end:6;

`

const LiDiv = styled.div`
    display: grid;

    grid-template-columns: repeat(6, 139px);
    width: 100%;
    height: 60px;   
    font-family: 'OpenSans', 'Segoe UI';
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.387234px;
    font-weight:600;
    color: #8392AB;

    @media (min-width: 1440px) {
        grid-template-columns: repeat(6, 10rem)
    }

    @media (min-width: 1350px) and (max-width:1439px) {
        grid-template-columns: repeat(6, 9rem)
    }
    @media (min-width:1151px) and (max-width:1349px) {
        grid-template-columns: repeat(6, 7rem)
    }

    @media (min-width: 950px ) and (max-width:1150px) {
        grid-template-columns: repeat(6, 9rem);
       
    }
`

const CompanyDiv = styled.div`
    grid-column-start:1;
    grid-column-end:3;
    text-align:left;

    display:flex;
    flex-direction: row;
    gap: 23px;
    
    & p{
        height: 19px;
        margin:8px 0px;
        padding:0;
        font-family: 'OpenSans', 'Segoe UI';
        font-size: 14px;
        line-height: 16px;
        letter-spacing: -0.387234px;
        color: #252F40;
        font-weight:600;
    };
    
    & span {
        margin : 5px 0px;
    }
    @media (min-width:950px){
        gap: 18px;
        p {
            font-size:12px;
        }
    }
    
`
const MembersDiv = styled.div`
 grid-column-start:3;
    grid-column-end:4;

`
const BudgetDiv = styled.div`
    grid-column-start:4;
    grid-column-end:5;

    & p{
    height: 16px;

    font-family: 'OpenSans', 'Segoe UI';
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.331915px;
    margin:8px 0px;
    padding:0;
    color: #8392AB;
}
`

const CompletionDiv = styled.div`
grid-column-start:5;
grid-column-end:6;

 & p{
    height: 19px;

    font-family: 'OpenSans', 'Segoe UI';
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.387234px;
    margin:8px 0px;
    padding:0;
    color: #67748E;
 }

`

const Images = styled.div`
    width:15%;
    height:22px;
    margin-left: -9px;
    & img {
        border-radius: 50%;
        width:100%;
        height:100%;
    }
`
const ImageDiv = styled.div`
width:100%;
display:flex;
margin: 1px 22px 0px 45px;

@media (min-width: 1440px) {
        width: 90%;
        margin: 1px 22px 0px 13px;
    }

    @media ( min-width: 1150px){
        width:90%;
        margin: 1px 22px 0px 13px;
    }

    @media ( min-width: 950px){
        width:100%;
        margin: 1px 0px 0px 10px;
    }
`

