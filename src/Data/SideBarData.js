import React from 'react';
import {FaCartPlus} from 'react-icons/fa'
import {AiFillHome} from 'react-icons/ai'
import {IoIosPaper, IoMdPeople} from 'react-icons/io'

export const SideBarData = [
    {
        title: 'Inicio',
        path: '/',
        icon: <AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Noticias',
        path: '/noticias',
        icon: <IoIosPaper/>,
        cName: 'nav-text'
    },
    {
        title: 'Produtos',
        path: '/produtos',
        icon: <FaCartPlus/>,
        cName: 'nav-text'
    },
    {
        title: 'Time',
        path: '/time',
        icon: <IoMdPeople/>,
        cName: 'nav-text'
    },
]