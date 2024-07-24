import { Dialog, DialogPanel, DialogTitle, Disclosure,DisclosurePanel ,DisclosureButton, Transition, TransitionChild } from "@headlessui/react";
import { Fragment, useState } from "react";

interface LinkProps {
  id: number;
  text: string;
  href: string;
  external: boolean;
  children?: {
    link: LinkProps[];
  };
}

interface DisclosureClientProps {
  link: LinkProps[];
  button: LinkProps;
}

const MobileMenu = ({ topnav }: { topnav: DisclosureClientProps }) => {
  const { link: navigation } = topnav;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav aria-label="Global" className="lg:hidden flex items-center justify-between p-6">
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="text-gray-400 hover:text-indigo-500 focus:outline-none"
        >
          <span className="sr-only">Open main menu</span>
          Menu
        </button>
      </nav>
      <Transition show={mobileMenuOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setMobileMenuOpen(false)}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>
        </Dialog>
      </Transition>
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <DialogPanel className="fixed inset-y-0 right-0 p-6 max-w-full flex outline-none">
                <TransitionChild
                  as={Fragment}
                  enter="transform transition ease-in-out duration-300 sm:duration-300"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-300 sm:duration-300"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <div className="w-screen max-w-md">
                    <div className="flex h-full flex-col bg-gray-800 shadow-xl overflow-y-scroll">
                      <div className="px-4 py-6 sm:px-6">
                        <DialogTitle className="text-lg font-medium text-white">Menu</DialogTitle>
                        <div className="mt-6 relative flex-1 px-4 sm:px-6">
                          <nav className="space-y-1">
                            {navigation.map((item, idx) => (
                              <Disclosure key={idx}>
                                {({ open }) => (
                                  <>
                                    <DisclosureButton className="w-full flex justify-between items-center p-2 text-left text-sm font-medium text-white rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                      {item.text}
                                      {item.children && (
                                        <span className={`transform transition-transform ${open ? '-rotate-180' : 'rotate-0'}`}>
                                          <svg
                                            className="w-5 h-5 text-gray-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                          >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                          </svg>
                                        </span>
                                      )}
                                    </DisclosureButton>
                                    {item.children && (
                                      <DisclosurePanel className="px-4 pt-4 pb-2 text-sm text-gray-300">
                                        {item.children.link.map((subItem, subIdx) => (
                                          <a key={subIdx} href={subItem.href} target={subItem.external ? '_blank' : '_self'} className="block p-2 rounded hover:bg-gray-700">
                                            {subItem.text}
                                          </a>
                                        ))}
                                      </DisclosurePanel>
                                    )}
                                  </>
                                )}
                              </Disclosure>
                            ))}
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </TransitionChild>
              </DialogPanel>
            </div>
          </div>

    </>
  );
};

export default MobileMenu;
