import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

import Img1 from "../img/02.png";
import Img2 from "../img/07.png";
import Img3 from "../img/06.png";
import Img4 from "../img/05.png";
import Img from "../img/01.png";

function Navbar2() {
  return (
    <div className="">
      <div className="" >
      <Navbar  expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={Img1} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="nav" id="basic-navbar-nav">
            <Nav className="flex navv float-right">
              <Nav.Link className="link" href="#home">Home</Nav.Link>
              <Nav.Link className="link" href="#events">Events</Nav.Link>
              <Nav.Link className="link" href="#Gallery">Gallery</Nav.Link>
            </Nav>
          
          </Navbar.Collapse>
          
        </Container>
        <div className="hidden lg:block px-4"><Nav className="hidden lg:block">
              <img src={Img} alt="" />
            </Nav></div>
      </Navbar>
    </div>
    </div>
  );
}

export default Navbar2;

// /* This example requires Tailwind CSS v2.0+ */
// import { Fragment } from 'react'
// import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
// import Youthopia from "../img/02.png"

// const navigation = [
//   { name: 'Home', href: '#', current: false },
//   { name: 'Events', href: '#', current: false },
//   { name: 'gallery', href: '#', current: false },

// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function Navbar2() {
//   return (
//     <Disclosure as="nav" className="">
//       {({ open }) => (
//         <>
//           <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
//             <div className="relative flex items-center justify-between h-16">
//               <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//                 {/* Mobile menu button*/}
//                 <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                   <span className="sr-only">Open main menu</span>
//                   {open ? (
//                     <XIcon className="block h-6 w-6" aria-hidden="true" />
//                   ) : (
//                     <MenuIcon className="block h-6 w-6" aria-hidden="true" />
//                   )}
//                 </Disclosure.Button>
//               </div>
//               <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
//                 <div className="flex-shrink-0 flex items-center">
//                   <img
//                     className="block lg:hidden h-14 w-auto"
//                     src={Youthopia}
//                     alt=""
//                   />
//                   <img
//                     className="hidden lg:block h-14 w-auto"
//                     src={Youthopia}
//                     alt=""
//                   />
//                 </div>
//                 <div className="hidden sm:block sm:ml-6 ">
//                   <div className="flex  items-center">
//                     {navigation.map((item) => (
//                       <a
//                         key={item.name}
//                         href={item.href}
//                         className={ classNames(
//                           item.current ? 'bg-gray-900 text-white' : 'text-black hover:bg-gray-400 hover:text-white',
//                           'px-3 py-2 rounded-md text-sm font-medium'
//                         )}
//                         aria-current={item.current ? 'page' : undefined}
//                       >
//                         {item.name}
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//               <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//                 <button
//                   type="button"
//                   className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
//                 >
//                   <span className="sr-only">View notifications</span>
//                   <BellIcon className="h-6 w-6" aria-hidden="true" />
//                 </button>

//                 {/* Profile dropdown */}
//                 <Menu as="div" className="ml-3 relative">
//                   <div>
//                     <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
//                       <span className="sr-only">Open user menu</span>
//                       <img
//                         className="h-8 w-8 rounded-full"
//                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                         alt=""
//                       />
//                     </Menu.Button>
//                   </div>
//                   <Transition
//                     as={Fragment}
//                     enter="transition ease-out duration-100"
//                     enterFrom="transform opacity-0 scale-95"
//                     enterTo="transform opacity-100 scale-100"
//                     leave="transition ease-in duration-75"
//                     leaveFrom="transform opacity-100 scale-100"
//                     leaveTo="transform opacity-0 scale-95"
//                   >
//                     <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
//                       <Menu.Item>
//                         {({ active }) => (
//                           <a
//                             href="#"
//                             className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
//                           >
//                             Your Profile
//                           </a>
//                         )}
//                       </Menu.Item>
//                       <Menu.Item>
//                         {({ active }) => (
//                           <a
//                             href="#"
//                             className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
//                           >
//                             Settings
//                           </a>
//                         )}
//                       </Menu.Item>
//                       <Menu.Item>
//                         {({ active }) => (
//                           <a
//                             href="#"
//                             className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
//                           >
//                             Sign out
//                           </a>
//                         )}
//                       </Menu.Item>
//                     </Menu.Items>
//                   </Transition>
//                 </Menu>
//               </div>
//             </div>
//           </div>

//           <Disclosure.Panel className="sm:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               {navigation.map((item) => (
//                 <Disclosure.Button
//                   key={item.name}
//                   as="a"
//                   href={item.href}
//                   className={classNames(
//                     item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                     'block px-3 py-2 rounded-md text-base font-medium'
//                   )}
//                   aria-current={item.current ? 'page' : undefined}
//                 >
//                   {item.name}
//                 </Disclosure.Button>
//               ))}
//             </div>
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//   )
// }

// // import React from "react";
// // import YOUTOPIA from "../img/02.png";
// // import Icon1 from "../img/05.png";
// // import Icon2 from "../img/06.png";
// // import Icon3 from "../img/07.png";

// // function Navbar2() {
// //   return (
// //     <div>
// //       <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
// //         <div className="flex items-center flex-shrink-0 text-white mr-6">
// //           <svg
// //             className="fill-current h-8 w-8 mr-2"
// //             width="54"
// //             height="54"
// //             viewBox="0 0 54 54"
// //             xmlns="http://www.w3.org/2000/svg"
// //           >
// //             <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
// //           </svg>
// //           <span className="font-semibold text-xl tracking-tight">Tailwind CSS</span>
// //         </div>
// //         <div className="block lg:hidden">
// //           <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
// //             <svg
// //               className="fill-current h-3 w-3"
// //               viewBox="0 0 20 20"
// //               xmlns="http://www.w3.org/2000/svg"
// //             >
// //               <title>Menu</title>
// //               <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
// //             </svg>
// //           </button>
// //         </div>
// //         <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
// //           <div className="text-sm lg:flex-grow">
// //             <a
// //               href="#responsive-header"
// //               className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
// //             >
// //               Docs
// //             </a>
// //             <a
// //               href="#responsive-header"
// //               className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
// //             >
// //               Examples
// //             </a>
// //             <a
// //               href="#responsive-header"
// //               className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
// //             >
// //               Blog
// //             </a>
// //           </div>
// //           <div>
// //             <a
// //               href="#"
// //               className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
// //             >
// //               Download
// //             </a>
// //           </div>
// //         </div>
// //       </nav>
// //     </div>
// //   );
// // }

// // export default Navbar2;

// // {
// //   /* <div className="flex  justify-between">
// //         <div className="flex px-4 py-4 mt-1">
// //           <img src={YOUTOPIA} alt />
// //         </div>
// //         <div className="flex justify-evenly">
// //           <div>01</div>
// //           <div>02</div>
// //           <div>03</div>
// //         </div>
// //       </div> */
// // }

// // //   <div className="flex justify-between px-4 py-4 items-center">
// // //     <img  src = {YOUTOPIA} alt />
// // //     <button>
// // //         Home

// // //     </button>
// // //     <button>
// // //         Events
// // //     </button>
// // //     <button>
// // //         Gallery
// // //     </button>
// // //     <div className="flex">
// // //         <img src = {Icon1} alt />
// // //         <img src = {Icon2} alt />
// // //         <img src = {Icon3} alt />
// // //     </div>

// // // </div>
