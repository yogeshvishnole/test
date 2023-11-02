import React from "react";

const Navbar = () => {
  return (
    <menu className="flex justify-between w-full ">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="20"
          viewBox="0 0 30 20"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M28.433 6.28764C28.4376 6.36938 28.4316 6.45238 28.4112 6.53582L26.5855 13.8681C26.4934 14.2371 26.1637 14.4973 25.7846 14.4995L14.8307 14.5549C14.8293 14.5549 14.828 14.5549 14.8265 14.5549H3.87255C3.49143 14.5549 3.15939 14.2939 3.0674 13.9227L1.24172 6.56247C1.22064 6.47731 1.21462 6.39173 1.21993 6.30787C0.513655 6.08467 0 5.42106 0 4.63918C0 3.67369 0.781697 2.88879 1.74264 2.88879C2.70359 2.88879 3.48529 3.67369 3.48529 4.63918C3.48529 5.18236 3.23731 5.66836 2.84905 5.99004L5.13475 8.30212C5.7125 8.88657 6.51407 9.22203 7.33413 9.22203C8.30388 9.22203 9.22841 8.75928 9.81063 7.98471L13.5671 2.98684C13.2515 2.67031 13.0561 2.23292 13.0561 1.7504C13.0561 0.785303 13.8378 0 14.7987 0C15.7597 0 16.5414 0.785303 16.5414 1.7504C16.5414 2.21832 16.3564 2.64279 16.0573 2.95717C16.0583 2.95847 16.0596 2.95976 16.0605 2.96104L19.7897 7.97268C20.3718 8.75456 21.2996 9.22203 22.2721 9.22203C23.0997 9.22203 23.878 8.8982 24.4632 8.31072L26.7633 6.00079C26.3669 5.67953 26.1122 5.18926 26.1122 4.63918C26.1122 3.67369 26.894 2.88879 27.8549 2.88879C28.8158 2.88879 29.5976 3.67369 29.5976 4.63918C29.5976 5.39998 29.1101 6.04767 28.433 6.28764ZM26.4073 17.1655C26.4073 16.7057 26.0358 16.3324 25.5775 16.3324H4.11231C3.65401 16.3324 3.28242 16.7057 3.28242 17.1655V19.1653C3.28242 19.6259 3.65401 19.9988 4.11231 19.9988H25.5775C26.0358 19.9988 26.4073 19.6259 26.4073 19.1653V17.1655Z"
            fill="#02073E"
          />
        </svg>
        <span className="font-sans">Landguru</span>
      </div>
      <div className="flex w-4/12">
        <li>Home</li>
        <li>Adversite</li>
        <li>Supports</li>
        <li>Contact</li>
      </div>
      <div>
        <button> Try for free</button>
      </div>
    </menu>
  );
};

const Header = () => {
  return (
    <div className="my-10">
      <Navbar />
      <div className="flex">
        {/* left div */}
        <div>
          <div>Trused by over 4,332 students</div>
          <h1>Learn Design with Nia Matos</h1>
          <p>
            Get your blood tests delivered at let home collect sample from the
            victory of the managments that supplies best design system
            guidelines ever.
          </p>
          <div className="flex">
            <input type="text" placeholder="Search course name" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.7526 16.6973L13.4319 12.3769C14.5029 11.0704 15.1484 9.39783 15.1484 7.57526C15.1484 3.39407 11.7556 0 7.57427 0C3.38917 0 0 3.39407 0 7.57526C0 11.757 3.38917 15.15 7.57427 15.15C9.39719 15.15 11.0661 14.5075 12.3719 13.4371L16.6927 17.7537C16.9861 18.0473 17.4592 18.0473 17.7526 17.7537C18.0461 17.464 18.0461 16.9865 17.7526 16.6973ZM7.57427 13.6425C4.22539 13.6425 1.50385 10.9204 1.50385 7.57526C1.50385 4.22957 4.22539 1.50484 7.57427 1.50484C10.9194 1.50484 13.6447 4.22957 13.6447 7.57526C13.6447 10.9204 10.9194 13.6425 7.57427 13.6425Z"
                fill="#02073E"
              />
            </svg>
          </div>

          <div className="flex">
            Sponsored by:
            <img src="assets/paypal.png" alt="paypal-logo" />
            <img src="assets/google.png" alt="google-logo" />
            <img src="assets/dropbox.png" alt="dropbox-logo" />
          </div>
        </div>
        {/* right div */}
        <div>
          <img src="assets/shutterstock.jpg" alt="video-thumbnail" />
        </div>
      </div>
    </div>
  );
};

export default Header;
