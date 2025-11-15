import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-pink-50 text-gray-800 py-10 mt-10">
            {/* whole content wrap */}
            <div className="container mx-auto px-4">
                {/* Top: Logo + social icons stacked on small screens */}
                <div className="flex flex-col items-center md:items-start md:flex-row md:justify-between mb-8">
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <h2 className="text-2xl font-bold text-pink-600">Posh Nail Hub</h2>
                        <p className="text-gray-700 mt-1 text-sm">Luxury nail care & pampering</p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="https://www.facebook.com" aria-label="Facebook" className="hover:text-pink-400">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.twitter.com" aria-label="Twitter" className="hover:text-pink-400">
                            <FaTwitter />
                        </a>
                        <a href="https://www.instagram.com" aria-label="Instagram" className="hover:text-pink-400">
                            <FaInstagram />
                        </a>
                        <a href="https://www.linkedin.com" aria-label="LinkedIn" className="hover:text-pink-400">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>

                {/* Bottom: other columns in a responsive grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-pink-600 font-semibold mb-4">Services</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/manicure" className="hover:text-pink-500">Manicure</a></li>
                            <li><a href="/pedicure" className="hover:text-pink-500">Pedicure</a></li>
                            <li><a href="/gel-acrylic" className="hover:text-pink-500">Gel & Acrylic Nails</a></li>
                            <li><a href="/nail-art" className="hover:text-pink-500">Nail Art</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-pink-600 font-semibold mb-4">About Us</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/team" className="hover:text-pink-500">Our Team</a></li>
                            <li><a href="/gallery" className="hover:text-pink-500">Gallery</a></li>
                            <li><a href="/reviews" className="hover:text-pink-500">Reviews</a></li>
                            <li><a href="/careers" className="hover:text-pink-500">Careers</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-pink-600 font-semibold mb-4">Contact</h3>
                        <ul className="space-y-2 text-sm">
                            <li>📍 123 Elegant Street, Nairobi,Kenya</li>
                            <li>📞 +254 702684726</li>
                            <li>✉ maureenngatia3134@gmail.com</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-pink-600 font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/privacy" className="hover:text-pink-500">Privacy Policy</a></li>
                            <li><a href="/terms" className="hover:text-pink-500">Terms of Service</a></li>
                            <li><a href="/cookies" className="hover:text-pink-500">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom part */}
            <div className="mt-6 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Posh Nail Hub. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
