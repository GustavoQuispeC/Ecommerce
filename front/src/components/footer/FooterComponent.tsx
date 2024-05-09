import React from "react";
import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const FooterComponent = () => {
  return (
    <>
      <Footer container className="bg-teal-900">
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 ">
            <div>
              <FooterBrand
                href="/home"
                src="/Logo.png"
                alt="SmartMarket Logo"
                name="SmartMarket"
                color ="white"
              />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <FooterTitle className="text-cyan-50" title="Sobre nosotros" />
                <FooterLinkGroup col>
                  <FooterLink className="text-cyan-50" href="#">
                    Quienes somos
                  </FooterLink>
                  <FooterLink className="text-cyan-50" href="#">
                    Ubicanos
                  </FooterLink>
                </FooterLinkGroup>
              </div>
              <div>
                <FooterTitle className="text-cyan-50" title="Sguenos" />
                <FooterLinkGroup col>
                  <FooterLink className="text-cyan-50" href="#">
                    Github
                  </FooterLink>
                  <FooterLink className="text-cyan-50" href="#">
                    Discord
                  </FooterLink>
                </FooterLinkGroup>
              </div>
              <div>
                <FooterTitle className="text-cyan-50" title="Legal" />
                <FooterLinkGroup col>
                  <FooterLink className="text-cyan-50" href="#">
                    Politicas de privacidad
                  </FooterLink>
                  <FooterLink className="text-cyan-50" href="#">
                    Terminos de uso
                  </FooterLink>
                </FooterLinkGroup>
              </div>
            </div>
          </div>
          <FooterDivider />
          <div className="w-full  sm:flex sm:items-center sm:justify-between">
            <FooterCopyright
              className="text-cyan-50"
              href="#"
              by="Gustavo™"
              year={2024}
            />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <FooterIcon className="text-cyan-50" href="#" icon={BsFacebook} />
              <FooterIcon
                className="text-cyan-50"
                href="#"
                icon={BsInstagram}
              />
              <FooterIcon className="text-cyan-50" href="#" icon={BsTwitter} />
              <FooterIcon className="text-cyan-50" href="#" icon={BsGithub} />
              <FooterIcon className="text-cyan-50" href="#" icon={BsDribbble} />
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default FooterComponent;
