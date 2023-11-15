interface FooterProps {
  copyright?: string
}

export const Footer = (props: FooterProps) => {
  const { copyright } = props
  return (
    <footer className="text-center relative text-white md:text-left w-full s-footer bg-black-950 grid content-center">
      <div className="hidden absolute bottom-0 lg:block left-0">
        <svg
          width="218"
          height="418"
          viewBox="0 0 218 418"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5" clipPath="url(#clip0_2329_8057)">
            <rect
              x="211.766"
              y="-233"
              width="998"
              height="348.766"
              transform="rotate(90 211.766 -233)"
              stroke="white"
              strokeWidth="12"
            />
            <rect
              x="185.559"
              y="-208.551"
              width="948.633"
              height="296.367"
              transform="rotate(90 185.559 -208.551)"
              stroke="white"
              strokeWidth="12"
            />
            <rect
              x="158.062"
              y="-182.773"
              width="897.079"
              height="241.375"
              transform="rotate(90 158.062 -182.773)"
              stroke="white"
              strokeWidth="12"
            />
          </g>
          <defs>
            <clipPath id="clip0_2329_8057">
              <rect width="218" height="418" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="grid grid-cols-12 xl:w-1204 xl:mx-auto mx-4">
        <div className="col-span-2 hidden md:flex"></div>
        <div className="col-span-12 md:col-span-10 py-6">
          <div className="md:flex md:justify-between">
            {/* START MENU */}

            <div className="md:flex  gap-4 md:gap-6 lg:gap-x-16">
              <div className="mb-6">
                <h5 className="mb-6 font-bold text-gray-800">
                  {/* {product.label} */}
                </h5>

                <ul className="mb-0 list-none grid gap-y-4">
                  {/* {product.items.map((item, index) => (
                    <li key={index}>
                      <a href={item.href} className=" ">
                        {item.label}
                      </a>
                    </li>
                  ))} */}
                </ul>
              </div>

              <div className="mb-6">
                <h5 className="mb-6 font-bold text-gray-800">
                  {/* {resources.label} */}
                </h5>

                <ul className="mb-0 list-none grid gap-y-4">
                  {/* {resources.items.map((item, index) => (
                    <li key={index}>
                      <Link href={item.href} className="">
                        {item.label}
                      </Link>
                    </li>
                  ))} */}
                </ul>
              </div>

              <div className="mb-6">
                <h5 className="mb-6 font-bold text-gray-800">
                  {/* {company.label} */}
                </h5>

                <ul className="mb-0 list-none grid gap-y-4">
                  {/* {company.items.map((item, index) => (
                    <li key={index}>
                      <Link href={item.href} className="">
                        {item.label}
                      </Link>
                    </li>
                  ))} */}
                </ul>
              </div>
            </div>
            {/* END MENU */}

            {/* start address */}

            <div className="mb-6 grid">
              <p className="text-center lg:text-right">
                {/* {`${contact.street.label} ${contact.streetNumber}`} */}
                <br />
                {/* {`${contact.optional}, ${contact.postalCode}`} */}
              </p>
              <p className="flex flex-col text-center lg:text-right">
                {/* {contact.phone.map((item) => (
                  <a href={`tel:${item.href}`} className="" key={item.id}>
                    {item.label}
                  </a>
                ))} */}
              </p>
              <p className="flex flex-col text-center lg:text-right">
                {/* {contact.email.map((item) => (
                  <a href={`mailto:${item.href}`} className="" key={item.id}>
                    {item.label}
                  </a>
                ))} */}
              </p>
              <div className="flex gap-4 items-center justify-center lg:justify-end">
                {/* {contact.social.map((item) => (
                  <a
                    key={item.id}
                    className=""
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Image
                  </a>
                ))} */}
              </div>
            </div>

            {/* end address */}
          </div>

          {/* start copyright */}
          <div className="w-full h-px m-auto bg-gray-850" />
          <div className="flex justify-between py-6">
            <div className="">{copyright}</div>
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.3608 17.306H8.72152V8.69401H17.443V17.306H17.3608ZM24.3544 6.88959H6.91139V17.306H5.18354V5.16719H22.5443L20.8165 3.44479H3.4557V17.306H1.72785V1.7224H19.0886L17.3608 0H0V17.306L1.72785 19.0284H19.0886V8.69401H20.8165V20.8328H3.4557L5.18354 22.5552H22.5443V8.69401H24.2722V24.2776H6.91139L8.63924 26H26V8.69401L24.3544 6.88959Z"
                fill="white"
              />
            </svg>
          </div>

          {/* end copyright */}
        </div>
      </div>
    </footer>
  )
}
