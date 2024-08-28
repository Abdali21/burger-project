import { navLinks } from "@/constant"
import Link from "next/link"
import { ImCross } from "react-icons/im"
import { CloseNavProps } from "@/types";

const MobileNavbar = ({ showNav, closeNav }: CloseNavProps) => {
  const navStyle = showNav ? "translate-x-0 " : "translate-x-[100%]"

  return (
    <div className={`fixed ${navStyle} right-0 transition-all duration-500 left-0 top-0 bottom-0
                    h-[100vh] z-[1002] bg-[#000000e0]`}>
      <ImCross onClick={closeNav} className="absolute top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-white" />
      <div className={`bg-emerald-700 ${navStyle} transition-all duration-500 delay-200 flex flex-col
                        justify-center items-center w-[70%] h-[100%]`}>
        <ul className=" space-y-10">
          {navLinks.map((link) => (
            <li key={link} className="text-[25px] font-medium hover:text-yellow-400 text-white">
              <Link href="/">{link}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MobileNavbar
