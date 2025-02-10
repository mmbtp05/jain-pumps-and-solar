import { Fragment } from 'react'
import Link from 'next/link'
import { Transition } from '@headlessui/react'

type MobileMenuProps = {
  isOpen: boolean
  links: {
    name: string
    href: string
    submenu?: {
      name: string
      href: string
    }[]
  }[]
}

export default function MobileMenu({ isOpen, links }: MobileMenuProps) {
  return (
    <Transition
      show={isOpen}
      as={Fragment}
      enter="transition ease-out duration-200"
      enterFrom="opacity-0 -translate-y-1"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-in duration-150"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 -translate-y-1"
    >
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-2 bg-white shadow-lg">
          {links.map((link) => (
            <div key={link.name}>
              <Link
                href={link.href}
                className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
              >
                {link.name}
              </Link>
              {link.submenu && (
                <div className="pl-4 space-y-2">
                  {link.submenu.map((sublink) => (
                    <Link
                      key={sublink.name}
                      href={sublink.href}
                      className="block px-4 py-3 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                    >
                      {sublink.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Transition>
  )
}