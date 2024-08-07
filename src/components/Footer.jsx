
// icon
import { FaRegRegistered } from 'react-icons/fa6'
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter, IoLogoWhatsapp, IoMdCall, IoMdMail } from 'react-icons/io'

function ScrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

export default function Footer() {
    return (
        <div>
            <footer className=''>
                {/* Bottom */}
                <div className='py-7'>
                    {/* Redirection Links 
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 text-center justify-items-center'>
                        <div className='flex-col p-5'>
                            <div className='text-3xl font-semibold'>About</div>
                            <div className='text-xl mt-4 self-start'>
                                <p>History</p>
                                <p>Awards</p>
                                <p>Careers</p>
                                <p>News</p>
                            </div>
                        </div>
                        <div className='flex flex-col p-5'>
                            <div className='text-3xl font-semibold'>Inspire</div>
                            <div className='text-xl mt-4'>
                                <p>Innovate</p>
                                <p>Research</p>
                                <p>Events</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center p-5'>
                            <div className='text-3xl font-semibold'>Popular</div>
                            <div className='text-xl mt-4'>
                                <p> <NavLink className='flex items-center justify-center' to={'/shop'} onClick={ScrollToTop}></NavLink> </p>
                                <p> <NavLink className='flex items-center justify-center' to={'/shop'} onClick={ScrollToTop}>View All <IoMdArrowRoundForward className='ml-2'/> </NavLink> </p>
                            </div>
                        </div>
                        <div className='flex flex-col p-5'>
                            <div className='text-3xl font-semibold'>Help</div>
                            <div className='text-xl mt-4'>
                                <p>Service</p>
                                <p>FAQ&apos;s</p>
                                <p>Collaborate</p>
                            </div>
                        </div>
                        <div className='flex flex-col p-5'>
                            <div className='text-3xl font-semibold'>Contact</div>
                            <div className='text-xl mt-4'>
                                <p>Get In Touch</p>
                                <p>Global Offices</p>
                            </div>
                        </div>
                    </div> */}
                    {/* Social Media */}
                    <div className='flex flex-col items-center text-center justify-center gap-2'>
                        <div className='font-semibold text-2xl'>Follow Us On Social Media</div>
                        <div className='hidden text-xl sm:flex sm:flex-row items-center text-center justify-center gap-7'>
                            <a href='tel:+18723023816' onClick={ScrollToTop}>Call</a>
                            <a href='mailto:sales@floraextracts.in' onClick={ScrollToTop}>Email</a>
                            <a href='https://www.instagram.com/floraextracts/' onClick={ScrollToTop}>Instagram</a>
                            <a href='https://www.facebook.com/profile.php?viewas=100000686899395&id=61556962628775' onClick={ScrollToTop}>Facebook</a>
                            <a href='https://twitter.com/FloraExtracts' onClick={ScrollToTop}>Twitter</a>
                            <a href='https://www.linkedin.com/company/flora-extracts/' onClick={ScrollToTop}>LinkedIn</a>
                            <a href='https://api.whatsapp.com/send/?phone=919446229344&text=Hi&type=phone_number&app_absent=0' onClick={ScrollToTop}>Whatsapp</a>
                        </div>
                        <div className='flex text-xl sm:hidden items-center text-center justify-center gap-3'>
                            <a href='tel:+18723023816' onClick={ScrollToTop}>
                                <IoMdCall size={30} />
                            </a>
                            <a href='mailto:sales@floraextracts.in' onClick={ScrollToTop}>
                                <IoMdMail size={30} />
                            </a>
                            <a href='https://www.instagram.com/floraextracts/' onClick={ScrollToTop}>
                                <IoLogoInstagram size={30} />
                            </a>
                            <a href='https://www.facebook.com/profile.php?viewas=100000686899395&id=61556962628775' onClick={ScrollToTop}>
                                <IoLogoFacebook size={30} />
                            </a>
                            <a href='https://twitter.com/FloraExtracts' onClick={ScrollToTop}>
                                <IoLogoTwitter size={30} />
                            </a>
                            <a href='https://www.linkedin.com/company/flora-extracts/' onClick={ScrollToTop}>
                                <IoLogoLinkedin size={30} />
                            </a>
                            <a href='https://api.whatsapp.com/send/?phone=919446229344&text=Hi&type=phone_number&app_absent=0' onClick={ScrollToTop}>
                                <IoLogoWhatsapp size={30} />
                            </a>
                        </div>
                    </div>
                    {/* Copyrights Section */}
                    <div className='flex flex-col sm:flex-row items-center text-center mt-7 justify-center border-t-2 p-2 border-[#290c06] font-semibold'>
                        <div className='w-full sm:w-1/3 text-3xl flex items-center justify-center'>
                            <div>FLORAEXTRACTS</div>
                            <div className='self-start'><FaRegRegistered size={20} /></div>
                        </div>
                        <div className='font-medium w-full sm:w-2/3 text-xl mt-4 sm:mt-0'>Flora Extracts | Copyright@2024 | All rights reserved</div>
                        <div className='font-medium w-full sm:w-1/3 text-3xl mt-4 sm:mt-0'>Join Us</div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
