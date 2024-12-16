import { useScript as useScript } from "@deco/deco/hooks";

export interface Props { }

const setup = ({ }: Props) => {
    
    const toggleIcon = document.getElementById('toggle-icon')
    const mobileMenu = document.getElementById('mobile-menu')
    const hamburguerIcon = document.getElementById('hamburger-icon')
    const closeIcon = document.getElementById('close-icon')
    const body = document.querySelector('body')
    // const heightElement1 = element1.getBoundingClientRect().height;
    const nav = document.getElementById('nav')
    const heightNav = nav?.getBoundingClientRect().height
    
    toggleIcon?.addEventListener('click', () => {

        if (mobileMenu) {

            const currentTop = globalThis.getComputedStyle(mobileMenu).top;

            if (currentTop === '0px' && mobileMenu) {
                mobileMenu.style.top = `${heightNav}px`;
            } else {
                mobileMenu.style.top = `0px`;
            }
    
            mobileMenu?.classList.toggle('-translate-y-full')
            mobileMenu?.classList.toggle('translate-y-0')
            
            hamburguerIcon?.classList.toggle('opacity-0')
            closeIcon?.classList.toggle('opacity-0')
            body?.classList.toggle('overflow-hidden')

        }

    });

}

function HeaderOnlyTextToWork(
  { }: Props,
) {
  return (
    <script
      type="module"
      dangerouslySetInnerHTML={{
        __html: useScript(setup, { }),
      }}
    />
  );
}
export default HeaderOnlyTextToWork;