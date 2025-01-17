import React, { Fragment, useState } from "react";
import cn from 'clsx'
import { Menu, Popover, Transition, Dialog } from '@headlessui/react'
import { ThemeSelectionMenu, GlobalSearch } from "@components";
import { 
    ChevronDownIcon,
    PencilSquareIcon,
} from '@heroicons/react/20/solid'
import { 
    Bars3Icon, 
    BellIcon, 
    XMarkIcon, 
    DocumentChartBarIcon,
    ChartBarIcon,
    HomeIcon,
    InboxIcon,
    UsersIcon,
    CursorArrowRaysIcon,
    ShieldCheckIcon,
    Squares2X2Icon,
    ArrowPathIcon,
    CheckCircleIcon
} from '@heroicons/react/24/outline'
import { Button } from "@components";


const user = {
    name: 'Chelsea Hagon',
    email: 'chelsea.hagon@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  }

  const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
  ]

  const solutions = [
    {
      name: 'Analytics',
      description: 'Get a better understanding of where your traffic is coming from.',
      href: '#',
      icon: ChartBarIcon,
    },
    {
      name: 'Engagement',
      description: 'Speak directly to your customers in a more meaningful way.',
      href: '#',
      icon: CursorArrowRaysIcon,
    },
    { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
    {
      name: 'Integrations',
      description: "Connect with third-party tools that you're already using.",
      href: '#',
      icon: Squares2X2Icon,
    },
    {
      name: 'Automations',
      description: 'Build strategic funnels that will drive your customers to convert',
      href: '#',
      icon: ArrowPathIcon,
    },
    {
      name: 'Reports',
      description: 'Get detailed reports that will help you make more informed decisions ',
      href: '#',
      icon: DocumentChartBarIcon,
    },
  ]
  const resources = [
    {
      name: 'Help Center',
      description: 'Get all of your questions answered in our forums or contact support.',
      href: '#',
    },
    { name: 'Guides', description: 'Learn how to maximize our platform to get the most out of it.', href: '#' },
    { name: 'Events', description: 'See what meet-ups and other events we might be planning near you.', href: '#' },
    { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#' },
  ]

export const Header: React.FC = () => {

  let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  
    return (

    
<header className="fixed dark:bg-slate-600 shadow bg-white/70 backdrop-blur-sm z-50 w-full">

    <Popover className="relative max-w-screen-2xl mx-auto">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3.5 md:justify-start md:space-x-10">
        <div>
          <a href="#" className="flex">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto sm:h-10"
              src="https://tailwindui.com/img/logos/mark.svg?color=black0"
              alt=""
            />
          </a>
        </div>
        <div className="-my-2 -mr-2 md:hidden">
          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
          <Popover.Group as="nav" className="flex space-x-10">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={cn(
                      open ? 'text-gray-900' : 'text-gray-500 dark:text-slate-200',
                      'group inline-flex items-center rounded-md text-sm hover:text-gray-900 focus:outline-none'
                    )}
                  >
                    <span>Solutions</span>
                    <ChevronDownIcon
                      className={cn(
                        open ? 'text-gray-600' : 'text-gray-400 dark:text-slate-200',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute -ml-4 mt-3 w-screen max-w-md transform lg:max-w-3xl">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 dark:bg-opacity-90 backdrop-blur backdrop-filter z-10 bg-white dark:bg-slate-800 px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                          {solutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md dark:bg-slate-500 bg-indigo-500 text-white sm:h-12 sm:w-12">
                                <item.icon className="h-6 w-6" aria-hidden="true" />
                              </div>
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900 dark:text-slate-200">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="bg-gray-50 p-5 sm:p-8">
                          <a href="#" className="-m-3 flow-root rounded-md p-3 hover:bg-gray-100">
                            <div className="flex items-center">
                              <div className="text-base font-medium text-gray-900 dark:text-slate-200">Enterprise</div>
                              <span className="ml-3 inline-flex items-center rounded-full bg-indigo-100 px-3 py-0.5 text-xs font-medium leading-5 text-indigo-800">
                                New
                              </span>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">
                              Empower your entire team with even more advanced tools.
                            </p>
                          </a>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 dark:text-slate-200">
              Pricing
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 dark:text-slate-200">
              Docs
            </a>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={cn(
                      open ? 'text-gray-900' : 'text-gray-500 dark:text-slate-200',
                      'group inline-flex items-center rounded-md text-sm hover:text-gray-900 focus:outline-none'
                    )}
                  >
                    <span>More</span>
                    <ChevronDownIcon
                      className={cn(
                        open ? 'text-gray-600' : 'text-gray-400 dark:text-slate-200',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute left-1/2 z-100 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <a key={item.name} href={item.href} className="-m-3 block rounded-md p-3 hover:bg-gray-50">
                              <p className="text-base font-medium text-gray-900">{item.name}</p>
                              <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          <div className="flex items-center md:ml-12">
        

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full md:max-w-md md:relative absolute bottom-0 md:rounded-2xl transform overflow-hidden rounded-t-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order. Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order. Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <div className="">
      <Button
      size='2xs'
        onClick={() => {
          setToastOpen(true);
        
        }}
      >
        Toast
      </Button>
<button
  type="button"
  onClick={openModal}
  className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
>
  O
</button>
</div>

          <GlobalSearch />

<ThemeSelectionMenu />

<a
href="#"
className="ml-5 flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
>
<span className="sr-only">View notifications</span>
<BellIcon className="h-6 w-6" aria-hidden="true" />
</a>


 {/* Profile dropdown */}
 <Menu as="div" className="relative ml-5 flex-shrink-0">
 <div>
   <Menu.Button className="flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
     <span className="sr-only">Open user menu</span>
     <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
   </Menu.Button>
 </div>
 <Transition
   as={Fragment}
   enter="transition ease-out duration-100"
   enterFrom="transform opacity-0 scale-95"
   enterTo="transform opacity-100 scale-100"
   leave="transition ease-in duration-75"
   leaveFrom="transform opacity-100 scale-100"
   leaveTo="transform opacity-0 scale-95"
 >
   <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
     {userNavigation.map((item) => (
       <Menu.Item key={item.name}>
         {({ active }) => (
           <a
             href={item.href}
             className={cn(
               active ? 'bg-gray-100' : '',
               'block py-2 px-4 text-sm text-gray-700'
             )}
           >
             {item.name}
           </a>
         )}
       </Menu.Item>
     ))}
   </Menu.Items>
 </Transition>
</Menu>
            <div className="flex gap-4 align-middle">

              <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">Sign in</a>
              <Button 
                color="primary" 
                size="xs" 
                rounded='md' 
                ripple 
                icon={<PencilSquareIcon className="w-5" aria-hidden="true" />}
              >
                <a href="#">Sign up</a>
              </Button>  
            </div>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-6">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Pricing
                </a>

                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Docs
                </a>

                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Enterprise
                </a>
                {resources.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="mt-6">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{' '}
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>

    </header>
        
    );
};
