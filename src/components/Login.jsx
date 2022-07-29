import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { AuthContext } from './context/DashBoardContext'
import "./Login.css"
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const cache = createCache({
  key: 'css',
  prepend: true,
});

export const Login = () => {

    const { isOpen, handleClickClose } = React.useContext(AuthContext)

    return (
        <div>
            <CacheProvider value={cache}>
           
            <Dialog
                open={isOpen}
                onClose={() => handleClickClose()}

            >
                <div className='Login-title'>
                    <span className='span1'>
                        <svg width="62" height="72" viewBox="0 0 62 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.067 59.2532C22.094 57.9594 21.0114 56.5855 19.846 55.121C15.6306 49.8468 12.038 45.7146 11.6344 40.4565C11.0971 33.5975 17.5739 29.9113 17.5739 29.9113C15.5745 40.0609 18.7768 43.2391 21.4979 46.6955C22.9627 48.556 24.4623 50.3309 25.847 52.012C22.7756 56.8261 23.0911 58.8684 23.067 59.2532ZM60.9549 32.9559L48.3193 11.0557C47.8995 10.3366 47.3354 9.72451 46.6698 9.27812C45.1411 2.75055 37.9211 0.128306 37.5415 0C37.8623 0.181767 46.6698 9.27816 41.2063 17.1716C39.5009 19.6335 37.5629 22.3012 35.2534 25.1988C31.0353 30.47 27.8063 34.6774 27.5577 37.893C27.1995 42.3918 30.5809 44.8111 30.8883 45.0302C30.3858 44.8111 21.808 40.9296 23.1446 32.0765C23.7834 27.8798 28.8702 22.7903 33.6068 16.7733C35.3924 14.5039 37.3785 12.3521 37.9692 8.27572H18.2074C16.2213 8.27572 14.3823 9.33157 13.3852 11.0557L0.749789 32.9559C-0.24993 34.6721 -0.24993 36.7971 0.749789 38.5185L13.3852 60.4161C14.3823 62.1374 16.2213 63.1989 18.2074 63.1989H26.2934C25.9218 61.8246 25.7989 60.2663 26.0608 58.5235C26.697 54.3163 31.7865 49.2322 36.5151 43.2125C39.2336 39.7508 42.4332 36.5752 40.4364 26.4257C40.4364 26.4257 46.9078 30.1145 46.3788 36.9789C45.9641 42.2261 42.3797 46.3613 38.1617 51.6324C34.4301 56.3155 31.4309 60.146 30.6665 63.1989C29.6293 67.3097 33.4919 71.2528 33.7993 71.4689H33.8046L33.8073 71.4745H33.818C33.7057 71.2849 31.2439 66.9973 33.3155 63.1989H43.489C45.483 63.1989 47.317 62.1374 48.3193 60.4161L60.9549 38.5185C61.9436 36.7971 61.9436 34.6721 60.9549 32.9559Z" fill="#464B4E" />
                        </svg>

                    </span>
                    <span className='span2'>
                        <svg width="215" height="40" viewBox="0 0 215 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.2402 39.5318C13.2087 39.5318 10.2663 39.1573 7.41286 38.4084C4.55944 37.6594 2.24145 36.6609 0.458008 35.4124L3.93543 27.6016C5.61187 28.7071 7.55538 29.599 9.76681 30.2765C11.9782 30.954 14.1537 31.293 16.2937 31.293C20.3596 31.293 22.3925 30.2765 22.3925 28.2436C22.3925 27.1736 21.8041 26.389 20.6271 25.8896C19.4856 25.3546 17.6311 24.8018 15.0632 24.2312C12.2457 23.6248 9.89178 22.9828 8.00135 22.3052C6.11091 21.5919 4.4884 20.4684 3.13295 18.9348C1.7775 17.4011 1.09999 15.3325 1.09999 12.7289C1.09999 10.4463 1.724 8.39549 2.97245 6.57653C4.2209 4.72192 6.07539 3.2596 8.53634 2.18962C11.0328 1.11964 14.0822 0.584656 17.6846 0.584656C20.1456 0.584656 22.571 0.869997 24.9605 1.44064C27.35 1.97563 29.4544 2.77811 31.2734 3.84809L28.0099 11.7124C24.4435 9.78646 20.9836 8.82348 17.6311 8.82348C15.5267 8.82348 13.9932 9.14447 13.0302 9.78646C12.0673 10.3928 11.5858 11.1953 11.5858 12.1939C11.5858 13.1925 12.1563 13.9415 13.2977 14.4409C14.4392 14.9402 16.2757 15.4573 18.8081 15.9923C21.6615 16.5987 24.0155 17.2585 25.87 17.9718C27.7604 18.6494 29.3829 19.7551 30.7384 21.2887C32.1293 22.7867 32.8248 24.8375 32.8248 27.4411C32.8248 29.688 32.2008 31.721 30.9524 33.54C29.7039 35.3589 27.8315 36.8214 25.335 37.9269C22.8385 38.9968 19.8066 39.5318 16.2402 39.5318ZM74.2043 38.7828L74.0973 18.9348L64.4675 35.0914H59.7596L50.1833 19.4698V38.7828H40.393V1.33364H49.1133L62.274 22.9472L75.1138 1.33364H83.8341L83.9411 38.7828H74.2043ZM112.996 39.5318C109.037 39.5318 105.471 38.6938 102.296 37.0174C99.1579 35.3409 96.6789 33.0229 94.86 30.0625C93.077 27.1021 92.185 23.7675 92.185 20.0582C92.185 16.349 93.077 13.0142 94.86 10.054C96.6789 7.09367 99.1579 4.77541 102.296 3.0991C105.471 1.42279 109.037 0.584656 112.996 0.584656C116.955 0.584656 120.504 1.42279 123.642 3.0991C126.817 4.77541 129.296 7.09367 131.079 10.054C132.898 13.0142 133.807 16.349 133.807 20.0582C133.807 23.7675 132.898 27.1021 131.079 30.0625C129.296 33.0229 126.817 35.3409 123.642 37.0174C120.504 38.6938 116.955 39.5318 112.996 39.5318ZM112.996 30.758C114.887 30.758 116.598 30.312 118.132 29.4205C119.666 28.529 120.878 27.2806 121.77 25.6756C122.662 24.035 123.107 22.1625 123.107 20.0582C123.107 17.9539 122.662 16.0993 121.77 14.4944C120.878 12.8537 119.666 11.5876 118.132 10.6959C116.598 9.80431 114.887 9.35847 112.996 9.35847C111.106 9.35847 109.394 9.80431 107.86 10.6959C106.327 11.5876 105.114 12.8537 104.222 14.4944C103.331 16.0993 102.885 17.9539 102.885 20.0582C102.885 22.1625 103.331 24.035 104.222 25.6756C105.114 27.2806 106.327 28.529 107.86 29.4205C109.394 30.312 111.106 30.758 112.996 30.758ZM156.475 25.1941L152.516 29.4205V38.7828H142.03V1.33364H152.516V16.9018L167.014 1.33364H178.677L163.376 17.9183L179.479 38.7828H167.175L156.475 25.1941ZM215 30.5975V38.7828H184.934V1.33364H214.305V9.51897H195.419V15.8318H212.058V23.7497H195.419V30.5975H215Z" fill="#464B4E" />
                        </svg>

                    </span>
                </div>

                <div className='input-div'>
                    <label htmlFor="" className='input-label'>Email</label>
                    <input type="text" className='input-enter' />
                </div>

                <div className='input-div'>
                    <label htmlFor="" className='input-label'>Password</label>
                    <input type="text" className='input-enter' />
                    <p className='frgt-pwd'>forgot your password?</p>
                </div>

                <button className='Enter-btn'>
                    Enter
                </button>
                
            </Dialog>
            </CacheProvider>
        </div>
    );
}


  
  


