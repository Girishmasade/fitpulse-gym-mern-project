import {
  Mail,
  Phone,
  MapPin,
  Trophy,
  Star,
  BadgeCheck,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import electricSvg from "/electric.svg";
const Footer = () => {
  return (
    <footer className="bg-[#0c0f14] text-gray-300 px-6 py-10 md:px-16 lg:px-24 border-t border-gray-800">
      <div className="grid md:grid-cols-5 gap-10">

        {/* Logo & About */}
        <div>
            <div className="flex items-center gap-2 text-white text-2xl font-bold">
                 <Link to="/" className="flex items-center gap-1">
                   <span>Fit</span>
                   <img src={electricSvg} alt="logo" className="w-8 bg-[#39FF14] text-transparent bg-clip-text" />
                   <span>Pluse</span>
                 </Link>
               </div>
          <p className="text-sm pt-3">
            Revolutionizing fitness management with cutting-edge technology and AI-powered insights. Transform your gym into a thriving fitness empire.
          </p>
          <div className="flex gap-4 mt-4 text-lg text-white/50">
            <i className="fab fa-facebook-f hover:text-white cursor-pointer"></i>
            <i className="fab fa-twitter hover:text-white cursor-pointer"></i>
            <i className="fab fa-instagram hover:text-white cursor-pointer"></i>
            <i className="fab fa-youtube hover:text-white cursor-pointer"></i>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Features</li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">API Docs</li>
            <li className="hover:text-white cursor-pointer">Help Center</li>
          </ul>
        </div>

        {/* Legal & Support */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Legal & Support</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms of Service</li>
            <li className="hover:text-white cursor-pointer">Cookie Policy</li>
            <li className="hover:text-white cursor-pointer">GDPR Compliance</li>
            <li className="hover:text-white cursor-pointer">Security</li>
            <li className="hover:text-white cursor-pointer">Contact Support</li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Get in Touch</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-green-500" />
              hello@gymflow.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-green-500" />
              +1 (555) 123-4567
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-green-500" />
              San Francisco, CA
            </li>
          </ul>
        </div>
        <div>
             <h4 className="text-lg font-semibold mt-6 mb-3 text-green-400 flex items-center gap-2">
            <Trophy className="w-4 h-4" />
            Awards & Recognition
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <BadgeCheck className="w-4 h-4 text-green-500" />
              Best Fitness Software 2024
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-green-500" />
              TechCrunch Startup of the Year
            </li>
            <li className="flex items-center gap-2">
              <Star className="w-4 h-4 text-green-500" />
              5.0★ Customer Rating
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-8 border-gray-700" />

      {/* Bottom Bar */}
      <div className="text-sm text-gray-500 flex flex-col md:flex-row justify-between gap-4">
        <div>
          <p>© 2024 fitpluse Technologies Inc. All rights reserved.</p>
          <p>
            Licensed under MIT License. See{" "}
            <span className="text-green-500 cursor-pointer">LICENSE</span> for details.
          </p>
        </div>
        <div className="mt-2 md:mt-0">
          Made with <span className="text-red-500">❤️</span> by the Girish Masade in India
        </div>
      </div>
    </footer>
  );
};

export default Footer;
