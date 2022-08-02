import React from 'react'
import styled from 'styled-components'

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
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.23871 11.7743C7.00536 11.4907 6.56964 11.436 6.26399 11.6521C6.17761 11.7155 6.10794 11.7965 6.06029 11.8888L0.07558 23.0358C-0.100925 23.3648 0.0422444 23.7647 0.395438 23.9292C0.494581 23.9759 0.604191 24 0.715295 23.9998H9.05348C9.32639 24.0063 9.57753 23.8617 9.6932 23.6314C11.4928 20.1707 10.4019 14.9091 7.23871 11.7743Z" fill="url(#paint0_linear_1_781)" />
                                <path d="M11.1941 0.3819C8.15497 4.97313 7.80398 10.7965 10.2703 15.7075L14.2957 23.6111C14.417 23.8493 14.6649 24 14.9362 24H23.2836C23.4737 24.0004 23.6562 23.9265 23.7907 23.7945C23.9251 23.6625 24.0005 23.4833 24 23.2967C24 23.1877 23.9747 23.0801 23.9258 22.9823L12.4128 0.378591C12.3013 0.1474 12.064 0 11.8034 0C11.5429 0 11.3056 0.1474 11.1941 0.378591V0.3819Z" fill="#2684FF" />
                                <defs>
                                    <linearGradient id="paint0_linear_1_781" x1="6.22167" y1="9.74369" x2="-1.53047" y2="18.694" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#0052CC" />
                                        <stop offset="0.92" stop-color="#2684FF" />
                                    </linearGradient>
                                </defs>
                            </svg>

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
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.62025 2.48225C6.61924 1.11256 7.72988 0.00101234 9.10221 0C10.4756 0.00202468 11.5872 1.11357 11.5862 2.48326V4.9645H9.10323C7.7309 4.96349 6.61924 3.85195 6.62025 2.48225ZM2.48298 6.62069H9.10221C10.4745 6.6217 11.5862 7.73325 11.5852 9.10395C11.5862 10.4736 10.4745 11.5852 9.10221 11.5862H2.48197C1.10964 11.5842 -0.00202028 10.4726 2.75682e-06 9.10294C-0.00100599 7.73325 1.11065 6.6217 2.48298 6.62069Z" fill="#36C5F0" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3792 2.48225V9.10294C17.3802 10.4736 16.2684 11.5852 14.896 11.5862C13.5235 11.5842 12.4118 10.4726 12.4138 9.10294V2.48225C12.4128 1.11256 13.5245 0.00101234 14.897 0C16.2694 0.00202468 17.3802 1.11357 17.3792 2.48225ZM21.5168 6.62069C22.8892 6.6217 24.001 7.73325 24 9.10294C24.001 10.4736 22.8892 11.5852 21.5168 11.5862H19.0336V9.10294C19.0326 7.73325 20.1443 6.6217 21.5168 6.62069Z" fill="#2EB67D" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.517 17.3789H14.8968C13.5244 17.3779 12.4138 16.2664 12.4148 14.8958C12.4138 13.5263 13.5254 12.4148 14.8978 12.4138H21.518C22.8904 12.4158 24.002 13.5273 24 14.8968C24.001 16.2664 22.8893 17.3779 21.517 17.3789ZM17.3797 21.518C17.3808 22.8875 16.2691 23.999 14.8968 24C13.5244 23.998 12.4128 22.8865 12.4138 21.518V19.0359H14.8968C16.2691 19.0369 17.3808 20.1484 17.3797 21.518Z" fill="#ECB22E" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.48319 17.3783C1.11074 17.3773 -0.00101092 16.2657 6.89812e-07 14.896C-0.00101092 13.5263 1.11074 12.4148 2.48319 12.4138H4.96639V14.896C4.9674 16.2657 3.85564 17.3773 2.48319 17.3783ZM6.62082 21.5167V14.896C6.61982 13.5263 7.73056 12.4148 9.10402 12.4148C10.4765 12.4168 11.5882 13.5284 11.5862 14.8981V21.5177C11.5872 22.8874 10.4755 23.999 9.10301 24C7.73056 23.998 6.6188 22.8864 6.62082 21.5167Z" fill="#E01E5A" />
                            </svg>

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
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 11.5C0 5.14852 5.14852 0 11.5 0C17.8515 0.000784715 23 5.1493 23 11.5C23 17.8515 17.8515 23 11.5 23C5.14852 23 0 17.8515 0 11.5ZM15.7885 16.8243C16.1259 17.0307 16.5677 16.9247 16.7741 16.5857C16.9812 16.2483 16.8737 15.8081 16.5363 15.6001C13.5049 13.7482 9.74695 13.3174 5.36667 14.3179C4.9798 14.4058 4.73889 14.7903 4.82757 15.1764C4.91546 15.5625 5.29997 15.8042 5.68605 15.7155C9.68888 14.8013 13.0883 15.174 15.7885 16.8243ZM18.1811 13.4555C17.9213 13.8777 17.3689 14.0095 16.9475 13.7506C13.8573 11.8508 9.14429 11.3007 5.4883 12.4103C5.01433 12.5539 4.51368 12.2863 4.36929 11.8131C4.22648 11.3391 4.49406 10.8393 4.96725 10.6949C9.1435 9.42757 14.336 10.0412 17.8852 12.2227C18.3074 12.4825 18.4408 13.0341 18.1811 13.4555ZM4.94135 8.86414C8.48042 7.79065 14.5949 7.99311 18.3019 10.1942C18.812 10.4979 19.4735 10.3292 19.7756 9.81757C20.0785 9.30751 19.9106 8.64756 19.3997 8.34388C15.1324 5.81082 8.37997 5.57305 4.3175 6.80583C3.74858 6.97847 3.42842 7.57956 3.60027 8.1477C3.77213 8.71583 4.37322 9.03678 4.94135 8.86414Z" fill="#2EBD59" />
                            </svg>

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
                            <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9471 0.943041L21.7339 10.6753C21.9042 10.8435 22 11.0723 22 11.3109C22 11.5496 21.9042 11.7784 21.7339 11.9465L18.4798 15.1775L18.365 15.2906L10.9988 22.6168L6.99335 18.6346L0.262735 11.9415C-0.0875783 11.5913 -0.0875783 11.0255 0.262735 10.6753L3.63159 7.32623L10.9988 0L11.9471 0.943041ZM7.63605 11.3084L10.9988 14.6525L14.3606 11.3084L10.9988 7.96435L7.63605 11.3084Z" fill="#2684FF" />
                                <path d="M10.8972 7.9456C8.68979 5.75439 8.67888 2.20456 10.8728 0L3.49533 7.32196L7.51032 11.3084L10.8972 7.9456Z" fill="url(#paint0_linear_1_858)" />
                                <path d="M14.2788 11.3084L10.8972 14.6595C13.1148 16.857 13.1148 20.4193 10.8972 22.6168L18.2991 15.2881L14.2788 11.3084Z" fill="url(#paint1_linear_1_858)" />
                                <defs>
                                    <linearGradient id="paint0_linear_1_858" x1="8.76393" y1="0.961964" x2="3.09358" y2="3.37352" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.18" stop-color="#0052CC" />
                                        <stop offset="1" stop-color="#2684FF" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_1_858" x1="10.0169" y1="12.2623" x2="15.6757" y2="14.6635" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.18" stop-color="#0052CC" />
                                        <stop offset="1" stop-color="#2684FF" />
                                    </linearGradient>
                                </defs>
                            </svg>

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
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.0963 0H1.9037C0.852305 0 0 0.852305 0 1.9037V19.0963C0 20.1477 0.852305 21 1.9037 21H19.0963C20.1477 21 21 20.1477 21 19.0963V1.9037C21 0.852305 20.1477 0 19.0963 0Z" fill="#DC395F" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.37219 5.42259C8.37219 6.13887 7.79538 6.68537 7.10683 6.68537C6.41829 6.68537 5.84164 6.13878 5.84164 5.42259C5.84164 4.7068 6.41829 4.16037 7.10683 4.16037C7.79538 4.16037 8.37219 4.7068 8.37219 5.42259ZM4.37158 14.3952C4.37158 14.113 4.40888 13.7671 4.48323 13.4467H4.48331L5.43215 9.52083H3.96225L4.40888 7.8523H7.94434L6.54863 13.4587C6.45559 13.817 6.41837 14.1141 6.41837 14.321C6.41837 14.6796 6.59265 14.7844 6.86515 14.8466C7.0311 14.8842 8.35342 14.8579 9.07328 13.2374L9.99 9.52083H8.50133L8.94795 7.8523H12.1297L11.7204 9.74665C12.2785 8.69124 13.3951 7.68843 14.4929 7.68843C15.6651 7.68843 16.6328 8.53417 16.6328 10.1547C16.6328 10.5691 16.5769 11.0202 16.4281 11.5288L15.8325 13.695C15.7769 13.9217 15.7395 14.1099 15.7395 14.2795C15.7395 14.6561 15.8884 14.8444 16.1675 14.8444C16.4467 14.8444 16.8002 14.6367 17.2096 13.4879L18.0283 13.8079C17.5444 15.5228 16.67 16.2385 15.5721 16.2385C14.2881 16.2385 13.6743 15.4664 13.6743 14.4108C13.6743 14.1095 13.7113 13.789 13.8044 13.4686L14.4185 11.2452C14.4929 11.0001 14.5115 10.7742 14.5115 10.5668C14.5115 9.85103 14.0836 9.41743 13.3951 9.41743C12.5205 9.41743 11.9437 10.0532 11.6459 11.2779L10.4549 16.1153H8.37106L8.74511 14.5952C8.13254 15.6142 7.28176 16.2453 6.23235 16.2453C4.967 16.2453 4.37158 15.5071 4.37158 14.3952Z" fill="white" />
                            </svg>

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
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.0963 0H1.9037C0.852305 0 0 0.852305 0 1.9037V19.0963C0 20.1477 0.852305 21 1.9037 21H19.0963C20.1477 21 21 20.1477 21 19.0963V1.9037C21 0.852305 20.1477 0 19.0963 0Z" fill="#DC395F" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.37219 5.42259C8.37219 6.13887 7.79538 6.68537 7.10683 6.68537C6.41829 6.68537 5.84164 6.13878 5.84164 5.42259C5.84164 4.7068 6.41829 4.16037 7.10683 4.16037C7.79538 4.16037 8.37219 4.7068 8.37219 5.42259ZM4.37158 14.3952C4.37158 14.113 4.40888 13.7671 4.48323 13.4467H4.48331L5.43215 9.52083H3.96225L4.40888 7.8523H7.94434L6.54863 13.4587C6.45559 13.817 6.41837 14.1141 6.41837 14.321C6.41837 14.6796 6.59265 14.7844 6.86515 14.8466C7.0311 14.8842 8.35342 14.8579 9.07328 13.2374L9.99 9.52083H8.50133L8.94795 7.8523H12.1297L11.7204 9.74665C12.2785 8.69124 13.3951 7.68843 14.4929 7.68843C15.6651 7.68843 16.6328 8.53417 16.6328 10.1547C16.6328 10.5691 16.5769 11.0202 16.4281 11.5288L15.8325 13.695C15.7769 13.9217 15.7395 14.1099 15.7395 14.2795C15.7395 14.6561 15.8884 14.8444 16.1675 14.8444C16.4467 14.8444 16.8002 14.6367 17.2096 13.4879L18.0283 13.8079C17.5444 15.5228 16.67 16.2385 15.5721 16.2385C14.2881 16.2385 13.6743 15.4664 13.6743 14.4108C13.6743 14.1095 13.7113 13.789 13.8044 13.4686L14.4185 11.2452C14.4929 11.0001 14.5115 10.7742 14.5115 10.5668C14.5115 9.85103 14.0836 9.41743 13.3951 9.41743C12.5205 9.41743 11.9437 10.0532 11.6459 11.2779L10.4549 16.1153H8.37106L8.74511 14.5952C8.13254 15.6142 7.28176 16.2453 6.23235 16.2453C4.967 16.2453 4.37158 15.5071 4.37158 14.3952Z" fill="white" />
                            </svg>

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
        grid-template-columns: repeat(6, 9rem)
    }

    @media (min-width: 1150px) {
        grid-template-columns: repeat(6, 8rem)
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
        grid-template-columns: repeat(6, 9rem)
    }

    @media (min-width: 1150px) {
        grid-template-columns: repeat(6, 8rem)
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
`

