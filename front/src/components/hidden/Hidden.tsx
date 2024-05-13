"use client";
import { usePathname } from "next/navigation";

const Hidden = ({ children }: any) => {
  const pathname = usePathname();
  return (
    <>
    {/* <div className={pathname === "/" ? "hidden" : ""}>{children}</div> */}
    <div className={pathname === "/login" ? "hidden" : ""}>{children}</div>
    </>
    
  );
};

export default Hidden;
