import type { JSX } from "preact";
import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import IconComponent from "../Icons/IconGrid.tsx";
import ButtonComponent from "../Button/ButtonComponent.tsx";
import Script, { type Props } from "./script.tsx";

function Menu({ logo, icon, close_icon, menu, button, subMenu, linkIcons }: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
    <div>
        <nav
            role="navigation"
            id="nav"
            className="inline-flex px-4 md:px-10 py-6 w-full justify-between bg-sacramentoState border-b border-white-20 relative top-0 left-0 z-50"
        >
            <div className="flex">
                {logo && (
                <Image
                    className=""
                    src={logo || ""}
                    width={173.72}
                />
                )}
            </div>

            {/* Ícones de hambúrguer e fechar para mobile */}
            <div className="w-fit 2xl:hidden flex items-center">
                {/* <input type="checkbox" id="menu-toggle" className="hidden" /> */}
                <button
                type="button"
                id="toggle-icon"
                className="focus:outline-none relative text-white h-[32px] w-[32px]"
                >
                <div id="hamburger-icon" className="absolute top-0 left-0 duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M4 24H28" stroke="#3BEDB2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4 16H28" stroke="#3BEDB2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4 8H28" stroke="#3BEDB2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div id="close-icon" className="absolute top-0 left-0 duration-500 opacity-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M24 8L8 24" stroke="#3BEDB2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8 8L24 24" stroke="#3BEDB2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                </button>
            </div>


            <div
                id="menu"
                className="hidden 2xl:flex space-x-4 font-sans text-white font-light items-center whitespace-nowrap"
            >
                {menu?.map((item, index) => (
                <a key={index} href={item.url}>
                    {item.name}
                </a>
                ))}
            </div>

            <div className="hidden w-fit 2xl:flex ml-8 bg-secondary rounded-xl items-center justify-center">
                {button?.map((btn, index) => (
                    <ButtonComponent text={btn.text} link={btn.link} icon={btn.icon} buttonTheme={btn.buttonTheme} />
                ))}
            </div>
        </nav>
            
        {/* Menu */}
        <div
            id="mobile-menu"
            className="fixed -translate-y-full duration-500 top-0 left-0 w-full h-screen bg-white z-50 overflow-scroll z-[49]"
        >
            <div className="grid gap-6 p-4 min-h-screen overflow-auto">
                <div className="grid">
                    {menu?.map((item, index) => (
                    <a key={index} href={item.url} className="flex justify-between py-6">
                        {item.name}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M14.83 11.2899L10.59 7.04995C10.497 6.95622 10.3864 6.88183 10.2646 6.83106C10.1427 6.78029 10.012 6.75415 9.88 6.75415C9.74799 6.75415 9.61729 6.78029 9.49543 6.83106C9.37357 6.88183 9.26297 6.95622 9.17 7.04995C8.98375 7.23731 8.87921 7.49076 8.87921 7.75495C8.87921 8.01913 8.98375 8.27259 9.17 8.45995L12.71 11.9999L9.17 15.5399C8.98375 15.7273 8.87921 15.9808 8.87921 16.2449C8.87921 16.5091 8.98375 16.7626 9.17 16.9499C9.26344 17.0426 9.37426 17.116 9.4961 17.1657C9.61794 17.2155 9.7484 17.2407 9.88 17.2399C10.0116 17.2407 10.1421 17.2155 10.2639 17.1657C10.3857 17.116 10.4966 17.0426 10.59 16.9499L14.83 12.7099C14.9237 12.617 14.9981 12.5064 15.0489 12.3845C15.0997 12.2627 15.1258 12.132 15.1258 11.9999C15.1258 11.8679 15.0997 11.7372 15.0489 11.6154C14.9981 11.4935 14.9237 11.3829 14.83 11.2899Z" fill="#3BEDB2"/>
                        </svg>
                    </a>
                    ))}
                </div>
                <div className="grid gap-4">
                    {/* Trazer component de botões */}
                    {button?.map((btn, index) => (
                        <ButtonComponent text={btn.text} link={btn.link} icon={btn.icon} buttonTheme={btn.buttonTheme} />
                    ))}
                </div>
                <div className="grid gap-8 py-8">
                    {subMenu?.map((btn, index) => (
                        <ButtonComponent text={btn.text} link={btn.link} icon={btn.icon} buttonTheme={btn.buttonTheme} />
                    ))}
                </div>

                <div className="flex flex-wrap gap-8 py-8">
                    {/* Colocar botões */}
                    {/* <ButtonComponent text={btn.text} link={btn.link} icon={btn.icon} buttonTheme={btn.buttonTheme} /> */}
                </div>

            </div>
        </div>

        </div>
        <Script />
    </>
  );
}

export default Menu;