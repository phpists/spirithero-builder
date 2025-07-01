import './HomePageStyles.css';
import IconLighting from './IconLighting';

function HomePage() {
    return (
       <div className="block-home-page">
           <div className="block-image-home">
               <div className="background-scaled" />
           </div>

           <div className="home-block">
               <div className="block-home-title">
                   <div className="block-welcome">
                       Welcome to Spirit Hero!
                   </div>
                   <h1>Let’s Get Started!</h1>
                   <p>How do you want to start?</p>
                   <div className="home-block-buttons">
                       <button>
                       <span>
                            <IconLighting />
                       </span>

                           <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                               <path d="M40 18.596C40 37.4186 29.3675 37.4186 18.9189 37.4186C8.47029 37.4186 0 28.9914 0 18.596C0 8.20053 8.47029 3 18.9189 3C29.3675 3 40 8.20053 40 18.596Z" fill="#FCFCFC"/>
                               <path d="M23 9.5L21.5 17L27.5 19.25L17 30.5L18.5 23L12.5 20.75L23 9.5Z" fill="#FBB041"/>
                               <path fillRule="evenodd" clipRule="evenodd" d="M23.3425 8.83277C23.6408 8.98586 23.8012 9.31834 23.7354 9.64711L22.3605 16.5217L27.7634 18.5478C27.9978 18.6357 28.1729 18.8349 28.2302 19.0786C28.2874 19.3224 28.2192 19.5787 28.0483 19.7618L17.5483 31.0118C17.3195 31.2569 16.9559 31.3204 16.6576 31.1673C16.3593 31.0142 16.1988 30.6817 16.2646 30.3529L17.6395 23.4783L12.2367 21.4523C12.0022 21.3643 11.8271 21.1652 11.7699 20.9214C11.7126 20.6776 11.7809 20.4214 11.9517 20.2383L22.4517 8.98829C22.6805 8.74318 23.0442 8.67968 23.3425 8.83277ZM13.8137 20.4417L18.7634 22.2978C19.1076 22.4269 19.3076 22.7866 19.2354 23.1471L18.2533 28.0581L26.1863 19.5584L21.2367 17.7023C20.8924 17.5732 20.6925 17.2135 20.7646 16.8529L21.7468 11.942L13.8137 20.4417Z" fill="#FBB041"/>
                           </svg>
                           Start on Line Store?
                       </button>

                       <button>
                           <span>
                                <IconLighting />
                           </span>

                           <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                               <path d="M40 18.596C40 37.4186 29.3675 37.4186 18.9189 37.4186C8.47029 37.4186 0 28.9914 0 18.596C0 8.20053 8.47029 3 18.9189 3C29.3675 3 40 8.20053 40 18.596Z" fill="#F1EEF4"/>
                               <path d="M20 20.1016V29.7466" stroke="#4E008E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                               <path d="M11.0664 15.2109L20.0008 20.1009L28.9352 15.2109" stroke="#4E008E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                               <path d="M28.61 25.1415L20.36 29.6584C20.2496 29.7188 20.1258 29.7504 20 29.7504C19.8742 29.7504 19.7504 29.7188 19.64 29.6584L11.39 25.1415C11.2722 25.077 11.1739 24.9821 11.1053 24.8667C11.0367 24.7513 11.0003 24.6195 11 24.4853V15.5171C11.0003 15.3828 11.0367 15.2511 11.1053 15.1357C11.1739 15.0202 11.2722 14.9253 11.39 14.8609L19.64 10.344C19.7504 10.2836 19.8742 10.252 20 10.252C20.1258 10.252 20.2496 10.2836 20.36 10.344L28.61 14.8609C28.7278 14.9253 28.8261 15.0202 28.8947 15.1357C28.9633 15.2511 28.9997 15.3828 29 15.5171V24.4834C29 24.618 28.9638 24.7501 28.8952 24.8659C28.8266 24.9817 28.7281 25.0769 28.61 25.1415Z" stroke="#4E008E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                               <path d="M15.6465 12.5293L24.5002 17.3752V22.2502" stroke="#FBB041" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                           </svg>
                           Place a Bulk Order
                       </button>
                   </div>
               </div>
               <div className="horizontal-line"></div>
               <div className="block-book-demo">
                   <div className="block-icon-demo">
                       <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M11.1844 22.5L5 27.5V7.5C5 7.16848 5.1317 6.85054 5.36612 6.61612C5.60054 6.3817 5.91848 6.25 6.25 6.25H26.25C26.5815 6.25 26.8995 6.3817 27.1339 6.61612C27.3683 6.85054 27.5 7.16848 27.5 7.5V21.25C27.5 21.5815 27.3683 21.8995 27.1339 22.1339C26.8995 22.3683 26.5815 22.5 26.25 22.5H11.1844Z" stroke="#373239" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                           <path d="M12.5 22.5V28.75C12.5 29.0815 12.6317 29.3995 12.8661 29.6339C13.1005 29.8683 13.4185 30 13.75 30H28.8156L35 35V15C35 14.6685 34.8683 14.3505 34.6339 14.1161C34.3995 13.8817 34.0815 13.75 33.75 13.75H27.5" stroke="#373239" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                       </svg>
                       <div>
                           <h3>Talk to an Experts</h3>
                           <p>Talk to an experts for free about your fundraising needs </p>
                       </div>
                   </div>
                   <button>
                       Book a Demo
                   </button>
               </div>
           </div>
       </div>
    )
}

export default HomePage;