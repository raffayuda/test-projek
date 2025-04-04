import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Contact Information */}
        <div className="space-y-6">
          <div>
            <h3 className="text-[#a08b70] font-medium mb-3">For assistance, please contact us through</h3>

            <div className="flex items-center gap-2 text-[#a08b70] mb-3">
              <div className="w-8 h-8 rounded-full bg-[#a08b70] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <span className="font-medium">081311033691</span>
            </div>

            <div className="flex items-center gap-2 text-[#a08b70]">
              <div className="w-8 h-8 rounded-full bg-[#a08b70] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M22 10.69c0-1.33-.78-2.5-2-3.04V4h-3v2h-2V4h-3v2h-2V4H7v3.65c-1.22.54-2 1.71-2 3.04 0 1.1.45 2.1 1.17 2.83l-1.11 1.11 1.41 1.41 1.11-1.11c.73.72 1.73 1.17 2.83 1.17 1.11 0 2.11-.45 2.83-1.17l1.11 1.11 1.41-1.41-1.11-1.11c.72-.73 1.17-1.73 1.17-2.83zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
                </svg>
              </div>
              <span className="font-medium">@boxandtale</span>
            </div>
          </div>

          <div>
            <h3 className="text-[#a08b70] font-medium mb-3">Follow our social media</h3>
            <div className="flex gap-3">
              <Link
                href="https://instagram.com/boxandtale"
                className="w-8 h-8 rounded-full bg-[#a08b70] flex items-center justify-center"
              >
                <Instagram size={16} className="text-white" />
              </Link>
              <Link
                href="https://facebook.com/boxandtale"
                className="w-8 h-8 rounded-full bg-[#a08b70] flex items-center justify-center"
              >
                <Facebook size={16} className="text-white" />
              </Link>
              <Link
                href="https://youtube.com/boxandtale"
                className="w-8 h-8 rounded-full bg-[#a08b70] flex items-center justify-center"
              >
                <Youtube size={16} className="text-white" />
              </Link>
              <Link
                href="https://linkedin.com/company/boxandtale"
                className="w-8 h-8 rounded-full bg-[#a08b70] flex items-center justify-center"
              >
                <Linkedin size={16} className="text-white" />
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="space-y-2">
          <Link href="/build-a-box" className="block text-[#a08b70] hover:underline">
            BUILD A BOX
          </Link>
          <Link href="/premade" className="block text-[#a08b70] hover:underline">
            PREMADE
          </Link>
          <Link href="/corporate" className="block text-[#a08b70] hover:underline">
            CORPORATE
          </Link>
          <Link href="/faq" className="block text-[#a08b70] hover:underline">
            FAQ
          </Link>
          <Link href="/privacy-policy" className="block text-[#a08b70] hover:underline">
            PRIVACY POLICY
          </Link>

          <div className="pt-2 mt-4">
            <span className="text-[#a08b70]">
              <Link href="/en" className="hover:underline">
                EN
              </Link>{" "}
              |{" "}
              <Link href="/id" className="hover:underline">
                ID
              </Link>
            </span>
          </div>
        </div>

        {/* Logo */}
        <div className="flex justify-center">
          <div className="text-center">
            <div className="mb-3 inline-block">
              <img
                src="https://boxandtale.com/img/logo-colored.png"
                alt="Box & Tale Logo"
                width={150}
                height={150}
                className="mx-auto"
              />
            </div>
            <p className="text-[#a08b70] text-sm">by PT KISAH MENARA ABADI</p>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-[#a08b70] text-xl font-medium mb-4">JOIN OUR MAILING LIST</h3>
          <p className="text-[#a08b70] mb-4">
            Get News and Updates
            <br />
            from Box & Tale
          </p>

          <div className="flex flex-col md:flex-row gap-2">
            <input
              type="email"
              placeholder="My Email Address"
              className="flex-1 px-4 py-2 border-b border-[#a08b70] bg-transparent focus:outline-none text-[#a08b70]"
            />
            <button className="px-6 py-2 bg-transparent text-[#a08b70] border border-[#a08b70] hover:bg-[#a08b70] hover:text-white transition-colors">
              JOIN
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

