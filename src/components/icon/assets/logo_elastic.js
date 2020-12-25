import * as React from 'react';

const EuiIconLogoElastic = ({ title, titleId, ...props }) => (
  <svg
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <path stroke-linejoin="round" d="m9.19924,11.96954c-2.19709-4.6233-5.26356-8.60635-9.19943-11.9492l9.84642-0.0202c3.30236,3.26193,5.87012,7.01583,7.70326,11.2617,1.88706,4.39416,2.85081,8.99724,2.89125,13.8092v27.8005h-7.82457v-25.718c0-5.33769-1.13898-10.3991-3.41693-15.1841zm15.265,40.9021,0-27.8005c0.0404-4.81201,1.00419-9.41509,2.89125-13.8092,1.83315-4.24589,4.40089-7.9998,7.70326-11.2617l9.84642,0.0202c-3.93588,3.3428-7.00235,7.32585-9.19943,11.9492-2.27795,4.79853-3.41693,9.8599-3.41693,15.1841v25.718h-7.82457z" stroke-linecap="round" fill="#be1120"/>
    {/* <path
      fill="#FFF"
      d="M32 16.77a6.334 6.334 0 00-1.14-3.641 6.298 6.298 0 00-3.02-2.32 9.098 9.098 0 00-.873-5.965A9.05 9.05 0 0022.56.746a9.007 9.007 0 00-5.994-.419 9.037 9.037 0 00-4.93 3.446 4.789 4.789 0 00-5.78-.07A4.833 4.833 0 004.198 9.26a6.384 6.384 0 00-3.035 2.33A6.42 6.42 0 000 15.242 6.341 6.341 0 001.145 18.9a6.305 6.305 0 003.039 2.321 9.334 9.334 0 00-.16 1.725 9.067 9.067 0 001.727 5.333 9.014 9.014 0 004.526 3.287 8.982 8.982 0 005.587-.023 9.016 9.016 0 004.5-3.322 4.789 4.789 0 005.77.074 4.833 4.833 0 001.672-5.542 6.383 6.383 0 003.032-2.331A6.419 6.419 0 0032 16.77z"
    />
    <path
      fill="#FEC514"
      d="M12.58 13.787l7.002 3.211 7.066-6.213a7.854 7.854 0 00.152-1.557 7.944 7.944 0 00-1.54-4.704 7.897 7.897 0 00-4.02-2.869 7.87 7.87 0 00-4.932.086 7.9 7.9 0 00-3.92 3.007l-1.174 6.118 1.367 2.92z"
    />
    <path
      fill="#00BFB3"
      d="M5.333 21.228A7.964 7.964 0 006.72 27.53a7.918 7.918 0 004.04 2.874 7.89 7.89 0 004.95-.097 7.921 7.921 0 003.926-3.03l1.166-6.102-1.555-2.985-7.03-3.211-6.885 6.248z"
    />
    <path
      fill="#F04E98"
      d="M5.288 9.067l4.8 1.137L11.14 4.73a3.785 3.785 0 00-4.538-.023A3.82 3.82 0 005.29 9.065"
    />
    <path
      fill="#1BA9F5"
      d="M4.872 10.214a5.294 5.294 0 00-2.595 1.882 5.324 5.324 0 00-.142 6.124 5.287 5.287 0 002.505 2l6.733-6.101-1.235-2.65-5.266-1.255z"
    />
    <path
      fill="#93C90E"
      d="M20.873 27.277a3.737 3.737 0 002.285.785 3.783 3.783 0 003.101-1.63 3.813 3.813 0 00.451-3.484l-4.8-1.125-1.037 5.454z"
    />
    <path
      fill="#07C"
      d="M21.848 20.563l5.28 1.238a5.34 5.34 0 002.622-1.938 5.37 5.37 0 001.013-3.106 5.312 5.312 0 00-.936-3.01 5.283 5.283 0 00-2.475-1.944l-6.904 6.07 1.4 2.69z"
    /> */}
  </svg>
);

export const icon = EuiIconLogoElastic;
