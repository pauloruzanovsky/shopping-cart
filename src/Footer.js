import React from 'react';
import './style/Header.css'
import { Link } from 'react-router-dom';
import github from './img/github.svg';

export default function Footer() {
    return(
        <footer>
            <a target ="_blank" href='https://github.com/pauloruzanovsky/shopping-cart'>
                <img src={github} />
            </a>
        </footer>
    )
}