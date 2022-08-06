import { Global, css } from "@emotion/react";
import { useRouter } from "next/router";
import React from "react";

const LocalLogo = ({ color }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={60}
        height={60}
        viewBox="0 0 929 929"
        fill="none"
        stroke-width={10}
        stroke={color}
    >
        <path d="M445.9 8.4c-.2.2-8.3.9-17.9 1.5-90.2 6-177.4 40.1-249.3 97.4-16.5 13.2-44.8 40.3-58.7 56.2-45.1 51.9-76.3 110.3-95 178.1C6.7 408.1 4.2 484.7 18 554c16.1 80.6 55.9 157.3 114.3 220.1 56.6 61 135.4 107.4 217.1 127.9 18.4 4.7 50 10.2 69.1 12.2 19.2 1.9 69 1.7 88.5-.5 57.6-6.5 106.2-20.4 154.5-44.3 88.1-43.6 157-111.9 201.6-199.7 29.4-57.9 44.2-113.6 48.6-182.9 1.5-23.3 1.5-29.5.4-49.5-2.4-44.5-8.4-77.9-20.7-115.4C855.2 210.8 779 119 676.3 62.6c-47-25.8-103-43.7-158.3-50.5-25-3.1-70.3-5.4-72.1-3.7zm37.4 5.1C557.4 16 642.1 44.3 708 88.3c25.6 17.1 42.8 31.4 66 54.6 59.7 59.7 100.9 131.9 121.9 213.2 11.8 45.6 11 58.1-5.5 91-11 22-20.9 36.7-45.3 66.9-18.2 22.6-24.4 29.3-35.1 37.9-12.7 10.2-22.7 16.2-47.6 28.2-40.6 19.7-61.1 26.9-93.9 33.3-16.6 3.2-27.8 4.4-54.5 5.9-33.1 1.9-53.9 1.5-70.5-1.2-35.6-5.7-67-16.4-92.1-31.2-47.5-28.1-86.9-81.2-102.3-137.9-5.3-19.5-9.1-45.4-9.1-62.5 0-29.5 10.6-54.2 32.2-75.1 19.3-18.7 38.6-28.9 64.9-34.5 14-3 37.5-3.2 46.4-.5 11.3 3.4 20.6 7.7 21.4 10 .4 1.1.3 5.4-.2 9.4-1.4 9.6.1 14.5 5.8 18.4 2.2 1.5 5.4 3 7 3.3l3 .6-2.5-1.8c-13.9-10.1-15.2-16.3-5.3-25.6 6.6-6.2 9.2-11.4 9.3-18.2 0-8.8-1.9-10.6-15.1-14.3-6.3-1.7-15.9-4.1-21.4-5.2-12.4-2.6-17.4-5.5-17.5-10.5 0-1.1 1.8-4.7 4-8 4.8-7.2 5.2-11.2 1.4-12.1-1.4-.4-6.3-.2-10.8.5-9.2 1.3-20.6 1.5-20.6.3.2-4.6 4.1-26.4 5.1-28 .7-1.1 2.9-2.8 4.9-3.6 1.9-.8 5.7-2.4 8.3-3.5 5.5-2.3 5.7-3.9.6-5.6-3.2-1.1-3.4-1.4-3.7-6.3-.4-6.3-1.2-6.5-8.3-1.5-4.1 2.8-6.7 3.8-10.6 4.1l-5.1.4-9.4-9c-5.1-5-10.5-9.3-12-9.7-3.1-.8-6.5.8-13.5 6.3-7.5 6-11 7.5-15.9 6.9-2.3-.2-5.6-1.4-7.2-2.6-1.7-1.1-3.3-2.1-3.6-2.1-1.3 0-.5 3.3 1.9 8 4.4 8.7 3.4 11.5-5.5 16.1-6.6 3.3-12.3 3-19.3-.9-6.5-3.6-10-3.9-19.1-1.6-7.7 1.9-10.3 3.6-12.3 7.9-2.5 5.2-4.9 5.8-13 3-11.6-4.2-17-3.3-30.7 5-9.7 5.9-13.7 6.4-28.5 4-5.9-1-11.5-1.5-12.4-1.2-1.2.4-1.7 1.8-1.7 4.2 0 4.1 1 4.3 5.1 1.3l3-2.3 7.7 2.7c7 2.5 8.8 2.7 19.8 2.5 11.8-.2 12.1-.1 15.7 2.5 4 3.2 5.4 3.4 8.1 1.3 4.2-3.2 9.8-1.4 11.5 3.7 1.1 3 .8 3.9-2.4 10.1-5.6 10.8-4.4 13.7 5.8 13.7 10.1 0 16.1 4.2 15.5 10.9-.3 4-1.8 5-11 7.7-6.1 1.7-10.4 5.3-9.5 7.8.3.8 2.3 2.4 4.5 3.5 2.1 1.1 4.5 2.7 5.2 3.7 4.5 5.4-3.3 23.4-10.1 23.4-1.1 0-3.7-1.6-5.9-3.6s-4.2-3.5-4.5-3.3c-.2.2-1.2 2.6-2.2 5.3-2.5 6.7-4 7.4-8.8 4.2-2.3-1.6-4.5-2.4-5.4-2s-5 1.7-9.2 2.9-8.7 2.9-10 3.8c-1.3 1-3 1.7-3.9 1.7-.8 0-4.8-2.9-8.7-6.5-11.7-10.3-17.7-10.1-22 1-3.9 10.1-5.2 10.8-19.5 11.6-9.5.5-13.2 1.1-16.3 2.7-5.1 2.6-9 6.7-11 11.5-1.5 3.5-1.5 4.1 0 6.3 1.9 2.9 9.1 6.7 21 11l9 3.2-3.8 2.2c-2.8 1.7-4.5 3.8-6.2 7.6-2.7 6-10.9 15.4-13.5 15.4-1 0-4-1-6.9-2.1-5.1-2.2-5.1-2.2-5.1-6.8 0-2.5-.5-6.3-1.1-8.4-.9-3.2-1.4-3.7-3.9-3.7-1.7 0-3.9.9-4.9 1.9-2.5 2.5-3.6 8.2-2.2 10.9 1.5 2.8 1.4 7.9-.1 8.9-.7.4-3.5 1-6.3 1.3-4.8.5-5 .7-5.3 3.7-.4 4.5-2.6 6-5.4 3.9-8.8-6.4-9.2-6.6-13.8-6.6-2.5 0-7.1.7-10.1 1.6-8.7 2.6-25.4 11.2-33.8 17.4-27 20-52.3 59.1-59.3 91.6-1.1 5.5-2.2 10.5-2.5 11.3-.8 3.1-2.3-.8-3.4-8.8-1.6-11.9-.6-71.8 1.5-88.6 5.7-46.1 17.6-88.3 36.5-129.3 32.8-71.4 78.8-129.8 137-174.1 63-47.9 142.7-80.5 218.6-89.6 14.5-1.8 45.3-3.4 54-2.9 2.8.2 12.1.6 20.8.9zM413 189.3c0 .8-1.1 2.3-2.3 3.6-2.2 2-2.5 2-3.8.5-1.2-1.4-1-1.9 1-3.5 2.7-2.2 5.1-2.5 5.1-.6zm23.8 49.9c1.5 1.5 1.5 4 0 7.3-1.5 3.4-3.1 3.2-6.2-.9l-2.6-3.5 2.6-2c3-2.4 4.5-2.6 6.2-.9zm-98.7 4.8c1.2.7 1.9 2.1 1.9 4 0 3.3-.5 3.4-7.4 2.2l-3.9-.7 3.1-3.3c3.3-3.6 3.5-3.6 6.3-2.2zm-17.6 151.5c1.2 14.3 2.1 26.2 1.9 26.4-.8.8-1.4-.7-3.5-8.5-1.7-6.4-2.3-11.7-2.6-27.6-.3-10.9-.2-20.5.3-21.5 1-2.1.7-3.9 3.9 31.2zm-48.4-20.8c.6 1.6 3.3 13.1 6 25.8 7.2 33.8 11.1 45.8 22.5 68.7 3.5 7 6.4 13.5 6.4 14.3 0 3.7-7.9-.6-10.3-5.6-24.5-51.9-25.9-56.1-27.8-79.9-1.6-19.9 0-31.5 3.2-23.3zm-26.2 4c1 2.1 4.9 13.9 8.6 26.2 13 43.3 18.9 57.7 36.3 87.1 11 18.7 12.9 22.8 10.8 23.6-3.5 1.4-12.3-5.5-16.6-13.2-2.9-5-3.4-5.4-6.9-5.4h-3.8l-.5-6.9c-.4-4.9-1.5-8.9-3.8-14-3-6.5-8.6-13.1-11-13.1-.6 0-1-3.6-1-8.3 0-6.5-.6-9.9-3-16.7-1.6-4.7-3-10.6-3-13.1 0-2.6-.9-6.6-1.9-9-1.2-2.6-2.6-9.8-3.5-17.4-.8-7.2-2.2-15-3.1-17.4-1.3-3.8-1.3-6.1 0-6.1.3 0 1.3 1.7 2.4 3.7zm53.4 14.5c.3 1.3 2.5 10.6 4.7 20.8 6.6 29.1 11.7 43.7 26.4 74.3 3.6 7.6 6.6 14.1 6.6 14.4 0 .2-.9.3-2.1.1s-3.4-2.1-5-4.3c-3.7-5.1-21.2-44.2-25-55.9-5.2-15.9-8.7-36.3-8.1-47.9.2-4.1 1.7-5 2.5-1.5zm-79.6 11.4c2.4 12.3 2.7 16.4 1.3 16.4-1.1 0-1.4-1-4-15-2.3-12.3-2.4-13.3-.7-12.8.7.3 2.1 5.2 3.4 11.4zm-16.7 10c6.8 26.9 17.1 52.5 32 79.4 7.1 12.9 9.6 19.7 8.5 23-.9 2.9-2.3 2.4-3.8-1.3-1.8-4.3-3.5-5.5-8.1-5.9l-3.8-.3-3.3-9c-4.7-13-7.8-19.5-12.9-26.9-3.1-4.5-4.7-8-5.1-11.3-.9-6.3-2.8-14.3-6.5-27.8-3-10.9-5.1-29.3-3.6-33 1.4-3.8 3.3-.1 6.6 13.1zm-31.7-4.8c.9.9 2.5 5.3 3.7 9.7 7.4 27.3 25.7 79.4 32.1 91.1 4.4 8 4.8 11 1.8 14.8-2 2.5-10.1 8.6-11.4 8.6-.4 0-.4-1.7 0-3.9.8-5.1-1.1-9.4-6.9-15.3l-4.7-4.8-3.6 1.5c-2 .8-3.7 1.4-3.9 1.2-.2-.1 1.2-5.2 3.1-11.2 3.7-11.7 3.6-12.5-1.7-12.5-1.6 0-2.8-.1-2.8-.3 0-.1 1.1-2.4 2.5-5.1 2.9-5.7 3.2-10.4.9-15.2-2.1-4.4-5.7-6.2-11.1-5.6-4.9.5-5.3-.2-1.8-3.4 2.9-2.7 3.2-6.7 1-15.9-2.4-9.8-4-32.2-2.5-34 1.6-2 3.3-1.9 5.3.3zm-21 29.9c1.4 4.9 5.7 19.8 9.7 33.3 18.5 62.9 20 68.6 19.5 70.9-.5 2.1-1 2.3-4.6 1.8-2.2-.3-4.9-1.3-5.9-2.2-3-2.8-9-21.3-9-28.1 0-7.4-3-19.3-7.6-30-3.3-7.7-10.4-32.3-10.4-36.1 0-2.8 4.2-18.3 5-18.3.4 0 1.9 3.9 3.3 8.7zm77.9-5c.9 1 2.5 3.8 3.6 6.3s4.7 10.3 8 17.5c26.7 58.3 27.6 60.5 25.3 60.5-1.8 0-9.6-3.7-10.8-5.1-.6-.8-1.4-3.7-1.8-6.6-.5-3.9-2.5-8.3-8.2-18-8.2-13.7-13-24.2-15.7-33.8-1.2-4.2-2.6-6.8-4.8-8.7-3.1-2.7-3.1-2.8-1.3-4.8 1.6-1.8 1.7-2.3.4-4.8-.7-1.5-1.5-3-1.7-3.5-.8-1.5 5.6-.6 7 1zm-103.6 13.8c2.5 6.1 9.4 25.3 15.5 42.9 11.9 34.3 14.4 41.2 20.9 55.5 2.6 5.8 4 10.1 3.6 11.4-.6 2.7-19 27.7-21.7 29.6-3 2.1-2.5-.5 1.1-5.9 4-5.9 3.9-9.4-.2-13.2l-3.3-3.1-.3 4.9c-.1 2.7-.7 5.9-1.3 7-1.1 2.2-5.7 4.9-6.7 3.9-.3-.3 0-4.1.7-8.5 1-7 .7-20-.6-20-.2 0-1.4 1.2-2.7 2.7l-2.3 2.7-1.6-2.5c-.8-1.3-3.3-9.6-5.5-18.4-2.7-10.9-5.2-18.5-7.9-24-2.3-4.4-7-14.6-10.7-22.8C96.4 479 95 474.9 95 471c0-5.4 1.6-10 3.6-10 1.7 0 6.6 10.3 15.9 33.5 8.3 20.6 30.3 65.7 34.6 70.8l2.7 3.2 3.6-3.4c4.7-4.5 4.6-5.9-.5-6.7l-4.1-.7.7-7.8c.3-4.4.4-7.9 0-7.9-.3 0-1.9.7-3.6 1.5-2.3 1.2-3 1.3-3.3.3-.2-.7-2.2-7.4-4.4-14.8-2.3-7.4-4.4-15.1-4.8-17-.9-4.8-3-8.9-6.6-12.7-3-3.1-3-3.2-2-9.3 1.1-5.8.9-7-3.8-25.5-4.9-18.9-6.2-28.1-3.9-27.3.6.2 3.1 5.3 5.5 11.3zm189.1 46.7c12.5 15.9 29.5 41.9 28.3 43.2-1.7 1.8-5.6-.3-6.8-3.7-.7-1.9-6.7-11-13.3-20.3-11.4-15.9-15.9-22.8-15.9-24.6 0-2.4 3.5 0 7.7 5.4zm-227.1 11c2.6 5.1 11.8 24.7 20.5 43.5 8.7 18.9 17.5 36.8 19.6 39.8 7.9 11.6 7.7 11.1 5.4 13.4-2.9 2.9-4.6 2.6-7.1-.9-1.2-1.7-2.7-3-3.5-3-.7 0-2.8 1.8-4.5 4-3 3.8-7 5.4-7 2.9 0-.7 1.4-3.4 3-6.1 4.5-7.3 4.2-7.8-2.7-5.2-2.4.9-4.6 1.4-4.9 1.1-.4-.3.5-2.6 2-5.1 3.2-5.4 3.2-6.4.4-7.5-1.3-.5-4.1-1.6-6.3-2.5l-4-1.7 2.8-2c1.5-1.2 2.7-2.5 2.7-3s-1.7-3.5-3.7-6.6c-3.1-5-3.8-6.9-4.3-13.3-.5-6.6-1-8.1-4-12-7.1-9.2-12-24.6-12-37.9 0-5.6.5-7.1 2.2-7.1.4 0 2.9 4.2 5.4 9.2zm279.8 17.1c7.6 11.5 13.5 21.1 13.3 21.3-.7.7-12.5-12.5-16.8-18.8-5.4-7.9-11.9-20.5-11.9-23 0-3-.2-3.2 15.4 20.5zm-18.8-6.6c1.5 2.1 9.7 12.5 18.2 23.1 8.4 10.7 15.1 19.7 14.7 20-1.9 1.9-28.7-29.5-35.9-42.1-3.5-5.9-1.3-6.6 3-1zM862 516c0 6.6-24.6 37.5-47.6 60-21.5 20.9-34.1 30.2-73.4 53.8-25.6 15.4-27 16.4-27 18.1 0 6.4 44.8-18.7 74.5-41.7 17.2-13.3 27.6-22.6 46.5-41.6 9.6-9.7 17.8-17.6 18.2-17.6 1.7 0 .6 4.8-1.9 8.5-1.5 2.2-8.6 10.7-15.8 19-21 24.1-23.8 27.5-22.5 27.5 3.5 0 33-22.2 53.8-40.4 6.8-6 12.6-10.6 12.9-10.2 2.3 2.3-11.5 18.3-27.1 31.5-11.7 9.9-21.1 16.1-48.6 32.1-27.5 16.1-36 21.7-36 23.6 0 2 3 1.7 11.2-1.2 35.2-12.4 63.8-26.6 96.5-48 14.7-9.6 17.4-10.3 13.9-3.7-1.7 3.4-15.1 15.7-25.9 23.7-17.7 13.3-45.6 28.2-74.6 39.6-24.3 9.7-34 11.6-62.6 12.7-15.4.5-50.3-.9-56.2-2.4-4.1-.9-2.4-8.1 3-13.1 1.4-1.3 19.2-10.8 39.6-21.2s40.1-20.7 43.9-22.9c11.8-6.9 22-15.1 43.2-35.1 19.2-18 51.5-46.5 57-50.3 2.8-1.9 5-2.2 5-.7zm-600 9.6c3.6.8 14.6 2.6 24.5 4 13.9 2 21.1 3.5 31.5 6.9 19.7 6.5 27.3 10.4 34.5 17.9 5.5 5.8 6.7 6.5 15.5 9.4 16.6 5.6 19.4 8.7 15 16.9-3.5 6.6-7.5 9.6-11.9 8.9-12.5-2-11.1-2.3-16.3 3.7-2.5 2.9-6 6-7.7 6.7-3.9 1.6-9.3.6-12.8-2.4l-2.6-2.3 2.7-3.5 2.7-3.6-5.8-4.1c-4.2-3-6.6-4.1-8.8-3.9-2.7.3-3 .6-2.7 3.2.2 1.6 2.1 5.9 4.3 9.4 4.9 8.2 5.1 12.4 1.1 19.6-1.7 2.9-3.2 7.4-3.5 10.5-.7 6.3-2.9 10.1-5.8 10.1-2.7 0-3.4-2.4-2.1-6.8.6-2 .9-3.8.6-4.1-1.1-1.1-12.1 3.6-18.6 8.1-3.8 2.6-7.3 4.8-7.8 4.8-.4 0-1.1-1.1-1.4-2.5-1.5-6-4.9-13.7-7.3-16.6-2.4-2.8-8.1-6.5-8.8-5.7-.2.2 1.8 3.7 4.5 7.7 4.8 7 5.6 9.3 4.4 12.4-.5 1.4-1.1 1.4-5.1.2-2.5-.8-5.1-1.9-5.6-2.4-2.5-2.5-3-.8-2.3 8.2.5 7.5.3 9.7-1 11.5-1.8 2.6-4.6 2.9-6.5.6-3.6-4.4-9.7-5.4-18.7-3-15.1 4-26.8 17.7-30.2 35.3-2 10.2-.8 28.1 2.6 38.2 7.2 21.9 28.9 49.3 56.1 70.8 31.5 25.1 58.8 41.3 96.8 57.8 23.6 10.3 24.6 11.2 16.4 15.3-7.1 3.5-20.7 4.8-34.9 3.4-33.6-3.4-91.3-17.9-129.5-32.7-27.7-10.7-48.1-24.9-55.6-38.7-3.3-6.2-3.4-6.6-3.4-18.1 0-6.4-.1-11.7-.2-11.7-.2 0-1.6 2.7-3.3 6-3.5 7-6.8 9.7-9.9 8-1.2-.6-2.4-2.2-2.7-3.5-.7-2.7 1.8-22.4 4.1-34 1-4.5 1.1-7.3.5-7.9-1-1-2.4 1.8-11 21.3-2 4.7-4.1 8.6-4.7 8.8-1.4.5-7.7-6-9.6-10-2.4-4.9-2.1-11.1 1.3-35.6 3.2-22.5 3.7-31.1 1.9-31.1-1.2 0-1.4.6-10.4 25.2-7.3 20.1-7.5 20.4-12.9 16.9-7.4-4.9-7.3-9.9.5-28.5 3.4-8.1 5.9-14.9 5.5-15.3s-3.7 2.2-7.4 5.8c-3.7 3.5-8.7 8.3-11.2 10.6l-4.5 4.3-5.3-9.6c-2.8-5.2-5.2-10.6-5.2-12.1 0-1.9 3-5.6 12.4-15.2 7.3-7.4 13-14.2 14-16.4 2-4.9 3.1-15.1 2.2-21.1-.7-4.1-1-4.6-3.4-4.6-5 0-5.8-1.4-2.8-5.2 1.4-1.9 2.6-3.8 2.6-4.1 0-.4-2-.7-4.5-.7-4.8 0-5.9-1.6-3-4 2.3-1.9 1.8-3.7-1.8-5.9-6-3.7-7.3-5.7-5.9-9.3 1.4-3.8.4-5.4-3.9-6.3-2.6-.6-2.9-1.1-2.9-4.5 0-3.7-2.4-6.9-6.3-8.3-.8-.3-.4-1.3 1.1-2.9 2.7-2.9 2.8-4.5.4-5.2-4.6-1.5-8.5-8.5-13.8-24.6-.4-1.1.7-2.1 3-3.3 5.3-2.5 4.4-3.7-2.5-3.7h-6l1.8-3.1c1-1.7 3-4.4 4.4-6.2l2.6-3 25.7 49.7c14.2 27.3 26 50.5 26.3 51.5.3 1.1-.9 3.7-3 6.5-2 2.5-3.9 5.5-4.2 6.7-.9 2.8 1 4.7 3.3 3.3.9-.6 10.7-14.4 21.8-30.7 22.9-33.9 29.7-42.7 42.1-54.8 11.4-11.2 18.3-16.6 28.9-22.9 10.1-6 16.5-8.7 24.9-10.5 8.4-1.9 26.5-1.8 34.5.1zM53.2 585.7c.9 1 7.5 12.6 14.8 25.8s15.2 27.4 17.5 31.6c4.8 8.6 6.6 13.4 5.9 15.2-.6 1.6-5.7 4.7-7.8 4.7-1.3 0-1.4-.4-.1-4.1 1.9-5.3 1.9-5.9-.3-5.9-3.3 0-5.9-2.9-8.1-9.1-1.3-3.3-6.7-15.7-12.2-27.5-8-17.4-12.9-29.6-12.9-32.1 0-.9 1.9-.1 3.2 1.4zm385.5 4.9c4.4 1.7 5.4 3 2.9 4-1.8.7-9.8-3.4-9.1-4.6.8-1.3 1.2-1.3 6.2.6zm19.9 9.8c1 .8 1.7 1.6 1.4 1.9s-3.9.8-8 1.1l-7.5.7 2.8-2.6c3.2-2.8 8.2-3.3 11.3-1.1zM432 617.1c13.6 9.6 32.9 21.1 57 33.9 20.2 10.8 18.5 9.8 17.6 10.7-1.4 1.5-21.1-6.2-34.3-13.4-22.5-12.3-38.5-23.5-51.5-36.2-7.1-6.8-9.2-10.3-3.5-5.8 1.7 1.5 8.4 6.3 14.7 10.8zm50.8-9.9c6 2.9 5.4 4.4-2.7 6.2-7.3 1.7-26.1 2.2-26.1.8 0-.5 1.2-2 2.8-3.4 7.4-6.9 16.4-8.2 26-3.6zM346 616.6c31.1 23.4 70.9 43.1 114 56.4 23.5 7.2 66 17.6 82.5 20.2 11.4 1.8 18.5 2.2 38 2.2 40.8.1 76.1-5.3 159-24.3 43.5-9.9 50.5-11.2 50.5-8.8 0 1.3-11.5 9.4-18.8 13.1-2.8 1.4-13.9 3.5-19.4 3.6-3.3 0-1.8 2.8 5.2 9.8 3.9 3.8 7 7.7 7 8.5 0 2.2 2.5 3.4 9.3 4.2 6 .8 7.8 1.8 4.9 3-.9.4-12 1.7-24.6 3-24.6 2.6-25.9 3-27.1 8.5-.5 2.4-1.7 3.3-7.6 5.6-3.8 1.5-6.9 2.8-6.9 3s1.8 2.4 4.1 5c4.1 4.8 4.1 4.8 1.8 5.6-2.2.8-48.7-2.7-49.7-3.7-1-.9-4.2 1.7-4.2 3.4 0 1.8 3.1 5.1 6.5 6.9 1.1.5 8.5 3.3 16.5 6.2 15.1 5.4 20.2 7.8 19.4 9.2-.8 1.2-30.4 1-40.9-.3-14.8-1.8-25.7-5.1-55.4-16.8-32.1-12.6-37-13.7-33.5-7 2.6 5.2 7.7 10 16.8 16.1 8.8 6 8.9 6.1 6.7 7.7l-2.2 1.7 5 6.3c4.2 5.2 5.1 7.1 5.1 10.2 0 2.2-.4 3.9-.8 3.9-1.2 0-8-7.4-17.7-19.4C581 749.2 576.2 745 573 745c-.8.1-2.8.6-4.4 1.3l-2.8 1.2 13.5 17.5c12.5 16.1 13.4 17.5 11.2 17.8-4.4.6-9.9-3-18.5-12.2-19.2-20.4-19.7-20.9-22.7-20.3-1.5.3-3.7.8-4.9 1.2-1.7.5-2.9-.4-6.4-5.2-8.7-11.6-12.8-13.6-17.5-8.8-4.9 4.8-3.5 8.6 10.7 28.8 4.9 7.1 9.2 13.5 9.5 14.3 2.5 6.6-15.9-11.6-32.5-32.1-13.9-17.1-18.1-20.8-20.2-17.5-.6.8-1 2.4-1 3.6 0 2.6 5.9 17.3 11.6 28.5 2.4 4.9 4.4 9.1 4.4 9.4 0 1.3-2.6 0-12.7-6.6-14.4-9.5-29.1-22-50.7-43.3-9.9-9.7-18.2-17.6-18.6-17.6-1.3 0-3 5.1-3 8.8 0 4.1 4.3 11.8 17.9 31.7 9 13.2 16.6 22.8 42.5 52.9 10.8 12.6 19.6 23.3 19.6 23.7 0 2.6-5.5-.4-23-12.2-24.9-16.8-50.1-39.8-67-61-9.4-11.8-29.6-41.9-35-52.4-4.9-9.3-10.4-13.1-14.6-10.1-1.8 1.4-1.8 1.7-.3 4.4 1.4 2.5 17 24.1 65.4 90.7 10.7 14.7 12.8 18.5 10.1 18.5-1.9 0-6.4-4.4-27.1-26.5-22-23.6-34.5-38.3-51.7-60.6-23-30.1-34.5-42.9-38.3-42.9-.8 0-2 1.1-2.7 2.5-.9 1.9-.6 5.1 1.6 15.7 2.9 14.8 2.9 14.8 1.7 16.6-1.4 2.2-5.8-.7-14-9.3-9.5-10-15.6-22.1-15.5-30.5.1-6.7 3.5-13.8 9.1-19.2 4.8-4.7 9.3-6.5 17.7-7.4 8.1-.8 11.1-2.9 12.7-8.7 3.2-12.1 6.3-20.7 7.4-20.7.7 0 5.9 3.4 11.5 7.6zm180.3 5.3c36.2 11.9 61.4 18.2 91.5 23 17.5 2.7 20.2 3.4 19 4.7-.7.7-57.4 11.4-60.5 11.4-1.3 0-2.3-.4-2.3-.9s1-1.3 2.3-1.7c6.8-2.1 22.7-8.7 22.7-9.4 0-1.3-17.9-4.2-26.5-4.2-6.3-.1-10.7.7-20.5 3.5-17.5 5.1-34.8 8.3-36.2 6.9-.9-.9-.3-1.5 2.3-2.6 1.9-.8 9.7-4.1 17.4-7.4 8.4-3.6 14-6.5 14-7.3 0-2.1-5.9-1.3-21.4 2.7-14.4 3.8-25.7 5.3-28.5 3.7-1.4-.8.8-1.9 10.8-5.3 10.2-3.6 12.6-4.8 12.6-6.3s-.5-1.8-2.2-1.4c-9 2.1-36.1 6.7-36.8 6.2-2.1-1.3-.8-3.1 3.6-5.4 2.5-1.4 6.9-4 9.8-5.8l5.1-3.2-3.5-.1c-2 0-8.9.7-15.4 1.6-6.5.8-12.1 1.2-12.5.9-1.4-1.4 8.2-6.8 16.2-9 9.2-2.6 18.3-1.4 39 5.4zm-119.2 12.8c3.2 2.7 5.9 5.4 5.9 6.1 0 1.9-.9 1.4-7.9-4.1-3.4-2.6-5.9-5.2-5.6-5.7.9-1.5 1.3-1.3 7.6 3.7zm28.9 2.4c11.8 7.3 33.2 18.2 47.6 24.2 10.2 4.3 43.9 17 51.2 19.2 1.3.5 1.6 2.1.4 2.9-.4.2-6.4-1.1-13.2-3-8.7-2.4-15.6-3.7-22.7-4.1-5.7-.3-10.3-1-10.3-1.4 0-.5 1.2-.9 2.6-.9 1.6 0 2.4-.5 2.2-1.3-.2-.6-12.1-7.1-26.4-14.2-23.9-11.9-36.3-19.2-39-22.6-1.8-2.3-2.5-5.1-1.1-4.3.6.4 4.6 2.9 8.7 5.5zM574.4 652c-1.6 1.6-18.3 6.9-18.9 6-.7-1.1.2-1.6 9.8-5.5 5.1-2.1 8.6-3 9.2-2.4.5.6.5 1.3-.1 1.9zm287.3 6.2c-5.7 8.1-15.6 18.9-37.8 41.3-9.7 9.9-18.9 19.5-20.4 21.3-7 8.5 1.6 2.7 27.4-18.3 5.8-4.7 10.7-8.3 10.9-8 1 1-8.6 12.1-15.2 17.7-3.7 3.1-20.4 15.6-37.2 27.9-16.8 12.2-30.8 22.7-31.1 23.2-1 1.6 7.8 0 16.5-2.9 4.2-1.4 13.1-5.5 19.7-9.2 14.4-8.1 13.5-7.7 13.5-6 0 5.5-23.5 20-71 43.7-32.9 16.3-58.7 24.7-90 29.2-4.7.6-10 1.9-11.9 2.9l-3.5 1.7 2.9 1.9c6.3 4.1 21.3 2.7 65.3-6.2 16.8-3.4 39.3-9.3 43.2-11.4 1-.5 2.4-1 3.1-1 3.3 0-14.7 15.1-26.2 22.1-12.6 7.5-17.4 8.4-39.7 7.2-24.2-1.4-80.3.5-81.7 2.6-1.1 1.9 7.5 4.3 18.4 5.2 11.9 1 14.5 1.9 12.2 4.1-.9 1-7.2 1.2-25.9 1.1-39.1-.4-48.1 1.2-36.5 6.5 5.5 2.5 45.1 8.5 67 10.2 13.3 1 16.3 1.6 16.3 3 0 2.3-24.1 4.4-42.4 3.7-13.8-.5-16.9-1-35.1-5.5-21.9-5.5-30.5-6.8-30.5-4.6 0 2.4 7.2 8.7 16 14 4.7 2.9 9.4 6.1 10.4 7.3 1.9 2.1 1.9 2.1-1.1 2.1-5.5 0-22.2-4.9-38.7-11.4C506 864.7 491 860.1 491 862c0 2.5 9.8 9.6 23.1 16.6s20 11.4 17.3 11.4c-.5 0-7.4-2.1-15.4-4.6-17.1-5.4-32.5-9.4-47-12.3-15.7-3.2-29.1-6.3-28.7-6.7.2-.2 14.9-4 32.8-8.4C586 829.9 614.6 818.9 699 771.7c53.7-30.1 79.8-45.9 96.5-58.5 13.1-9.9 29.3-24.1 44.3-38.6 16.3-15.8 25.3-23.8 26-23.1.3.2-1.6 3.2-4.1 6.7zm-326.6 13.4c10.1 3.6 19.6 7 21.2 7.6 2.4.9 3.9 3.8 1.9 3.8-1.4 0-20.3-6.6-30.7-10.7-5.5-2.2-10.8-4.3-11.8-4.6-1.7-.6-1.5-2.7.2-2.7.4 0 9 3 19.2 6.6zm-236.6 35.8c6.1 6.7 22.9 25.2 37.5 41.1 40.7 44.4 39.6 42.9 19 25.6-15.4-13-40.3-37.7-49.4-49.1-7.8-9.8-19.6-27.2-19.6-28.8 0-2.3 1.7-.8 12.5 11.2zm19.4 45.9c.2.5-.7.6-2 .2-9.5-2.8-24.9-20.1-21.2-23.9.6-.6 22.4 21.5 23.2 23.7zm-29.5-4.9c3.9 4.8 4.5 6.6 2.1 6.6-1.7 0-8.7-8.9-7.9-10.1 1-1.6 2.1-.9 5.8 3.5zm34.5 33.6c20.1 18.1 24.4 23.6 11.3 14.7-10.9-7.5-22.2-16.9-31.1-26.1-7.1-7.3-8.2-8.8-7.1-10.1 1.2-1.4 1.6-1.3 3.9.8 1.4 1.3 11.8 10.6 23 20.7zm77 57.4c-.9.9-74.9-72.6-74.3-73.6.4-.6 17.3 15.7 37.7 36 20.4 20.4 36.9 37.4 36.6 37.6zm-88.4-34.2c6.3 3.9 11.5 7.5 11.5 7.9 0 3.7-11.9-1.5-19.7-8.5-5.1-4.6-6.4-6.6-4.3-6.6.5 0 6.1 3.2 12.5 7.2zm168.4 80.4c14.2 7.4 15.1 8.1 12.8 9-1 .4-6.5-2-14.4-6.1-7.1-3.7-13-6.9-13.2-7-.4-.5.9-2.5 1.6-2.5.4 0 6.3 3 13.2 6.6z" />
        <path d="M282.5 70.3c-4.8 4.3-4.8 4.3-3.1 6.9 2.2 3.3 3.9 4 7.1 2.8 2.4-.9 5.5-5.6 5.5-8.3 0-.7-1.1-2.3-2.4-3.6l-2.3-2.2-4.8 4.4zm77.1-1.3c-8.9 1.9-13.5 4-8.5 4 4.7-.1 44-4.8 44.6-5.4 1.5-1.5-27.6-.4-36.1 1.4zm89.6 9.2c-1.7 1.7-1.5 3.5.8 5.8l2.1 2.1 3.1-2.2 3.1-2.2-2.7-2.4c-3-2.6-4.6-2.9-6.4-1.1zM319.3 80c-3.9 1-8.4 2.5-10 3.3-3.1 1.7-6.9 5.4-6.1 6.2.4.5 29.7-10.1 30.7-11.1 1.2-1.1-8.3-.1-14.6 1.6zm96.7.7c-2 .7-6 4.4-7.1 6.5-.9 1.6-.3 1.8 6.6 1.8h7.5v-2.9c0-2-.8-3.5-2.2-4.5-2.4-1.7-2.5-1.7-4.8-.9zm-183 7.8c-1.7 4.5-1.2 6.2 2.4 7.9 6.3 3 12.6 1.5 12.6-2.9 0-3-.3-3.1-4-.3-2.5 1.8-3.3 2-5.5 1-1.8-.9-2.5-1.9-2.5-4.1 0-4-1.8-4.9-3-1.6zm39.6 5.1c-17.6 2.7-55.8 13.2-51.5 14.1 1.4.3 52.8-10.5 66.9-14.1l5.5-1.4h-6c-3.3 0-10 .6-14.9 1.4zm150.9 3.8c-4 1.7-5.6 3.8-5.7 7.6-.1 4 3.1 7.3 6.9 7.2 3.3-.1 16-4.9 16.9-6.4.3-.5-.5-2.1-1.7-3.5-4.6-4.9-11.5-6.9-16.4-4.9zm8.5 3.2c2.2 1.5 3.7 3 3.4 3.5-.7 1.2-8 4.9-9.5 4.9-1.9 0-4.9-3.1-4.9-5.1 0-1.7 4.4-5.9 6.2-5.9.4 0 2.6 1.2 4.8 2.6zm-122 7.7c-1.4.7-3.3 2.9-4.4 5.1-1.6 3.2-1.7 4.4-.7 7.6 1 3.6 3.6 6.8 4.6 5.8.3-.2.9-3.5 1.4-7.2.5-3.8 1.2-7 1.5-7.3.2-.3 3.9.2 8 1.1 8 1.6 11.8 1 13.1-2.2.8-2.2.1-2.4-3.4-.6-3 1.5-3.4 1.5-8.1-1-5.5-2.9-8.3-3.2-12-1.3zm-116.2 9.1c-19.8 8.6-34.3 21.2-49.6 43.1-6 8.6-13.5 21.5-12.9 22.1s20-23.2 27.4-33.6c3.3-4.7 6.9-9.2 7.9-10.2 2.5-2.2 32.8-22.4 34.5-23 .8-.3 1.2-.8.9-1.1s-4 .9-8.2 2.7zm209.7 5.2c-1.1.3-5.3 1.2-9.3 2-10.9 2.3-8.4 3.9 4.7 2.9 18.7-1.5 26.8-1.1 34.3 1.8 3.7 1.4 9.1 4.1 12.1 6 7.8 5 9.2 5.3 14.9 2.6l4.8-2.3 14.3 4.3c12.1 3.6 14.7 4.8 17.4 7.6 1.7 1.9 4.2 3.6 5.5 3.9 9.9 1.8 13.4 2.3 13.7 2 .2-.2-.4-1.3-1.4-2.4-2.2-2.4-9-5.7-26-12.2-12.6-4.9-13.4-5.1-26.5-5.8-10.9-.5-14.5-1.1-18.5-2.9-11.6-5.3-18.9-7.2-28.5-7.6-5.2-.2-10.4-.2-11.5.1zm-100 10c-6 4-10.5 8.6-10.5 10.6 0 1.1 1.8 2.9 4.5 4.6 2.5 1.5 4.5 3.4 4.5 4.4 0 2.2-5 6-12.2 9.1-6.9 3.1-8.5 5.5-6.3 9.7.9 1.7 1.3 3.5 1 4-.3.6-4.5 1-9.3 1-6.2.1-9.3.5-10.7 1.6-3.2 2.4-.2 3.3 8.9 2.7 11.2-.7 14.3-2.1 15.1-7 .9-5.6 1.6-6.5 8.1-10.1 3.2-1.9 6.7-4.1 7.7-4.9 2.6-2.5 2-6.6-1.8-12.3-3.5-5.2-4.2-7-2.7-7 .4 0 3-2 5.7-4.5 5.5-4.9 4.3-6-2-1.9zM523 158.5c0 2.2 4.5 14.5 5.3 14.5.5 0 .7-2.3.5-5.1-.4-3.7-1.2-5.8-3.2-7.7-1.4-1.5-2.6-2.2-2.6-1.7zm-329.8 4c-5.9 1.3-15.2 6.1-15.2 7.7 0 1.4 5.3.9 17.5-1.7 14.8-3.1 18.6-3.2 21-.5 1.7 1.9 1.8 2.6.7 7.9-1.5 7-1 8.6 3 10 4.4 1.5 8 1.4 12.4-.6 2.3-1 7.8-1.9 13.3-2.2 5.2-.3 9.6-1.1 9.8-1.6.3-1.2-6.9-5.5-9.2-5.5-.9 0-4.7 1.3-8.5 3-5.6 2.5-7.6 2.9-11.4 2.4-2.6-.4-4.9-1-5.1-1.4-.3-.4.4-3.4 1.5-6.6 2.2-6.3 1.9-8.8-1.1-10.5-3.3-1.7-21.7-2-28.7-.4zm352.8 2.4c-4.7 1.5-9 4.1-10.6 6.7-.9 1.3-1.4 2.7-1.1 3s3.4-1 7-3c7.1-4 9.1-4.3 14.4-2.1 4.9 2.1 5.5 1 1.5-2.6-3.3-2.9-6.3-3.5-11.2-2zm20 5.1-2.5 2 6.5-.6c6.1-.6 6.8-.4 9.7 2 1.7 1.4 3.6 3.9 4.3 5.6 1.3 3.2 3 4 3 1.4 0-8.8-14.1-15.8-21-10.4zm-407.8 17.1c-3.4 2.7-6 5.4-5.6 6 .6 1 2.4.1 9.9-5.4 3.9-2.8 5-4.7 3-5.3-.5-.2-3.8 1.9-7.3 4.7zm408.4-.2c-.9 1.4 3.5 12.1 5 12.1 2.5 0 2.6-2.1.4-7.6-2.1-5-4.1-6.7-5.4-4.5zm-423 17c-4.1 6.7-4.2 7.1-1.8 7.1 2.1 0 8.6-9.6 7.8-11.6-1-2.5-2.4-1.5-6 4.5zm447.9-2c-.3.6 2.2 2.9 5.5 5.2 8.6 6.1 8.8 7.8 1.9 18.2l-3.9 5.9 3.6 4.4c2 2.4 4 4.2 4.4 3.9.4-.2.9-3.3 1.2-6.8.3-3.8 1.6-8.4 3.2-11.8 1.4-3.1 2.6-6.1 2.6-6.7 0-2.2-7.1-9-11.5-11.1-5-2.3-6.1-2.5-7-1.2zm-486.3 11.4c-6.4 7.8-8.6 17.2-2.7 11.7 3.6-3.4 9.9-17.1 7.8-16.9-.4 0-2.7 2.3-5.1 5.2zm539.5-.5c-2.2 2.4-2.1 2.9.3 4.2s6 .4 6-1.4c0-1.2-3.1-4.6-4.2-4.6-.3 0-1.2.8-2.1 1.8zM606 240.9c0 .5 2.1 1.4 4.6 2 13 3.3 24.4 14.2 24.4 23.4 0 4-2.8 6.1-12.3 9-8.9 2.8-12.7 5.8-12.7 9.9 0 1.7.4 1.6 2.8-1 3-3.2 4.3-3.7 13-4.7 10.3-1.2 12.9-4.2 11.9-14.3-1-11.8-7.6-21.4-16.6-24-4.5-1.4-15.1-1.6-15.1-.3zm42.1 9.3-3.5 4.1 4.2 3.8c2.3 2.2 4.8 3.9 5.6 3.9 2.3 0 4.6-2.9 4.6-5.8 0-3.1-4.4-10.2-6.3-10.2-.7 0-2.7 1.9-4.6 4.2zM551.9 286c-2.3 1.9-2.3 2-.5 3.5 1.8 1.4 2.6 1.2 6.5-1.4 1.2-.8 1.2-1.2.2-2.5-1.8-2.1-3.4-2-6.2.4zM292 289.9v4l3.8-.5c5.6-.8 6.2-1.2 6.2-3.3 0-1.5-1-2.3-3.7-3-5.9-1.7-6.3-1.5-6.3 2.8zm295.8 1.8c-1.9 2.3-4.2 8.2-3.5 8.9.3.3 2.3-.6 4.6-2 4.7-3 6.4-3.2 8.2-1 2.5 3 6.7 4.6 9.1 3.3l2.2-1.2-2.9-2.3c-3.4-2.7-12.8-7.4-14.8-7.4-.8 0-2.1.8-2.9 1.7zm-9.8 12.5c1.2 2.6 1.6 5.3 1.3 7.5-.6 3.6.6 4.3 3.1 1.7 1.6-1.6 2-5.2 1-9.1-.5-1.7-4.7-4.3-7-4.3-.2 0 .5 1.9 1.6 4.2zm42.7-.4c-2.1 2.3-2.1 3.6-.1 5.2 1.3 1.1 1.9.9 4.1-1.3s2.4-2.8 1.3-4.1c-1.7-2.1-3.3-2-5.3.2zm-78.2 6.6c1.5 9.4 4 11.4 16.2 13.2 10.5 1.6 11.8 2.6 7.8 6l-3 2.5 3.5-.6c1.9-.4 5.5-1.6 8-2.8 3.8-1.9 4.5-2.7 4.8-5.5.3-3.4-.6-3.9-3.8-2.2-1.3.7-2.6.5-4.7-.5-2.2-1.2-4.6-1.4-11-.9-10.1.8-12.3-.3-15.9-7.9l-2.5-5.2.6 3.9zm45.8 16.4c-5.4 3.4-5.2 5.6.5 6 4 .3 4.3.1 5.7-3.2.8-1.9 1.5-4 1.5-4.6 0-1.7-3.3-1-7.7 1.8zm52.5 3.2c-4.1 2.6-4.8 3.5-4.8 6.3 0 5 1.2 6.2 5.2 5.1 2.5-.7 3.8-2 5.5-5.4 2.5-5 2.6-8.3.3-8.7-.8-.2-3.6 1.1-6.2 2.7zm-119.8-.6c0 3.9 2.2 6.8 6.7 8.8 6 2.6 13.7 2.8 19.1.4 5.2-2.3 4.6-3.6-1-2.5-2.4.4-6.9.8-10.2.9-5.5 0-6.1-.2-9.2-3.6-1.9-1.9-3.4-4-3.4-4.5s-.4-.9-1-.9c-.5 0-1 .6-1 1.4zm30.2 12.8c-.7.7-1.2 2.3-1.2 3.6 0 2.3.3 2.4 4.5 1.9 5.7-.6 6.2-1 4.1-4.2-1.8-2.7-5.4-3.3-7.4-1.3zM298.6 612.7c-1.9 2.7-2.3 4-1.4 5 1.6 2 3.4 1.6 5.7-1.3 1.6-2.1 1.8-3 .9-5-1.5-3.2-2.3-3-5.2 1.3zm34.4 33.9c-3.9 3.5-4 3.8-2.4 5.6 1.2 1.2 2.4 1.6 3.8 1.2 2.7-.9 8.6-4.7 8.6-5.6 0-.4-1.3-1.6-3-2.8l-2.9-2.1-4.1 3.7zm-35.2 2.5c-2.3 1.3-2.2 3.8.1 6.9 1.9 2.4 2 2.4 4 .6 2.3-2.1 2.7-5.6.9-7.4-1.4-1.4-2.7-1.5-5-.1zm49.8 16.8c-1 1.5 4 14.6 5.6 14.9.9.2 3.3-.4 5.3-1.2l3.7-1.6-5.9-6.5c-5.6-6.2-7.6-7.5-8.7-5.6zM742 689.1c-4 1.6-12 7.3-12 8.6 0 .6 2 2.1 4.5 3.3 5.3 2.6 9 2.2 17.3-1.5 4.5-2.1 5.2-2.7 4.3-4.2-2.9-5.4-9.2-8.2-14.1-6.2zm-43.5 18.5c-17.3 4.7-19.3 5.4-19.9 7.1-.8 2.1 4 7.3 6.8 7.3 4.8 0 25-5.4 26.7-7.1 3.4-3.4 1.7-10-2.4-9.8-1.2 0-6.2 1.1-11.2 2.5zm-38.7 1.4c-.9 2.8-1.3 3-4.6 2.4l-3.5-.7.5 4.8c.3 2.6 1.3 5.4 2.2 6.3 1.9 1.9 13.3 2.9 18.3 1.5l3.2-.8-6.7-8.2c-3.7-4.5-7.1-8.2-7.5-8.2-.4-.1-1.3 1.3-1.9 2.9zm-48.8 5.7c.1 3.6 3.9 10 8 13.6 6.3 5.3 7 4.9 4.9-2.7-2-7.1-12.9-16.4-12.9-10.9zm20.8.1c-2.5.5-2.2 4.4.5 6.9 4.7 4.2 14.6 10.5 15.6 9.8 2.3-1.4.8-4.3-5.1-10.1-6.5-6.4-8.1-7.3-11-6.6z" />
    </svg>

);

const PrinterComponent = () => {
    const router = useRouter();
    const searchParams = new URLSearchParams(router.asPath.split(/\?/)[1]);

    const title = searchParams.get("title");
    const background = searchParams.get("background");
    const color = searchParams.get("color");

    const [params, setParams] = React.useState({
        title: null,
        color: null,
        background: null,
    });

    React.useEffect(() => {
        setParams({
            title,
            color,
            background,
        });
    }, [title, color, background]);

    return (
        <div
            css={{
                width: "1200px",
                height: "630px",
                background: params.background ? params.background : "#141516",
            }}
        >
            <Global
                styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap");

          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: "Inter", Helvetica, sans-serif;
          }
        `}
            />
            <div
                css={{
                    padding: "140px 145px 120px 145px",
                    display: "flex",
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                }}
            >
                <div
                    css={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        maxWidth: "840px",
                        height: "330px",
                        maxheight: "330px",
                    }}
                >
                    <h1
                        css={{
                            fontSize: "64px",
                            lineHeight: "73.59px",
                            color: params.color ? params.color : "#FEFEFE",
                            fontWeight: 600,
                            fontStyle: "normal",
                            textAlign: "center",
                        }}
                    >
                        {params.title}
                    </h1>
                </div>
                <div
                    css={{
                        color: params.color ? params.color : "#FEFEFE",
                        justifyContent: "space-between",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <LocalLogo color={params.color ? params.color : "#FEFEFE"} />
                    <span
                        css={{
                            fontSize: "24px",
                            fontWeight: 600,
                        }}
                    >
                        @axk5oj8
                    </span>
                </div>
            </div>
        </div>
    );
};

export default PrinterComponent;
