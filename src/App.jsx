import { useState } from 'react';

function App() {
  return (
    <>
      <nav className="fixed z-50 flex w-full justify-end bg-white pl-7">
        <ul className="flex items-center gap-14">
          <li className="flex items-center gap-2 ">
            <p className="h-[30px] w-[30px] rounded-full bg-[#121212] text-center text-lg font-bold text-white">s</p>
            <p className="text-xl font-bold">Sound Track</p>
          </li>

          <li className="flex grow gap-12">
            <a href="" className="text-base font-normal">
              How it works
            </a>
            <a href="" className="text-base font-normal">
              Library
            </a>
            <a href="" className="text-base font-normal">
              Pricing
            </a>
          </li>
        </ul>
        <ul className="flex grow items-center justify-end gap-10">
          <li>
            <a href="" className="text-[#553C16]">
              Sign up
            </a>
          </li>
          <li className=" flex h-[70px] w-32 items-center justify-center rounded-bl-3xl bg-[#F5F2EC] shadow-sm">
            <a href="" className="bg-[#F5F2EC] text-center">
              Login
            </a>
          </li>
        </ul>
      </nav>

      <section className="relative top-28 flex h-[1000px] w-auto justify-start gap-16 ">
        <div className="absolute left-28 mt-24 h-[302px] w-[525px]">
          <h2 className="mb-9 text-6xl font-normal">Let’s Connect with Your Visitors in Real Time</h2>
          <p className="w-10/12 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          </p>
        </div>

        <div className="absolute right-72 top-20">
          <img src="/public/img/image-1.jpg" alt="" className="h-96 w-96 rounded-t-full" />
        </div>

        <div className="absolute left-[10%] top-[40%] z-10">
          <div className="flex h-[100px] w-[650px] items-center justify-between rounded-md bg-white shadow-md ">
            <div className="mx-5">
              <p className="text-sm">Register using email address</p>
              <p className="text-2xl font-medium">samantha@email.com</p>
            </div>
            <button className="mx-4 rounded-md bg-[#725BA1] px-14 py-4 text-sm text-white">Register</button>
          </div>
        </div>

        <div className="absolute left-[5%] top-[45%]">
          <img src="/public/svg/dot.svg" alt="" />
        </div>

        <div className="absolute left-52 top-[45%]">
          <img src="/public/img/image-2.jpg" alt="" className="rounded-b-full" />
        </div>

        <div className="absolute right-1 top-[47%]">
          <img src="/public/img/image-3.jpg" alt="" className="w-[280px] rounded-b-full" />
        </div>
      </section>

      <section
        className=" relative my-3 mt-14
       flex flex-row justify-around">
        <div className=" flex w-1/2 flex-col items-center p-5">
          <div className="mt-52 w-[440px]">
            <h3 className="text-5xl font-normal">Chat with visitors while they browse your site</h3>
          </div>

          <div className="w-[440px]">
            <p className="mt-24 text-base font-normal">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam.”
            </p>
            <div className="mt-5 flex items-center">
              <img src="/public/img/Bitmap.jpg" alt="" className="mr-4 rounded-full" />
              <div className="flex flex-col justify-center">
                <h3 className="text-sm font-semibold">Samantha William</h3>
                <p className="text-xs">Owner of Online Fashion Store</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex w-1/2 flex-col items-center justify-end py-7">
          <div className="mr-12 flex w-full justify-end">
            <img src="/public/img/image-4.jpg" alt="" className="h-[400px] w-80 rounded-t-full" />
            <p className=" absolute right-1/2 top-48 w-52 rounded-t-2xl rounded-bl-2xl bg-[#7D6353] px-5 py-3 text-sm font-medium text-white">
              Hi Karen, I’m wandering is it possible to order custom drawing?
            </p>
          </div>

          <div className="relative flex w-full items-center">
            <img src="/public/img/image-5.jpg" alt="" className="h-[400px] w-80 rounded-b-full" />
            <div className="absolute right-24 top-16 flex flex-col">
              <p className="mb-3 w-36 rounded-full bg-[#726985] px-5 py-3 text-sm font-medium text-white">
                Hi Samantha
              </p>
              <p className="w-80 rounded-t-full rounded-br-full bg-[#726985] px-5 py-3 text-sm font-medium text-white">
                Yes, You can order custom drawing
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="my-10 flex w-full justify-around">
        <div className="relative flex w-1/2 flex-col items-center ">
          <div className="absolute left-2/3 top-16 flex h-44 w-44 items-center justify-center rounded-full border border-[#3C636A] ">
            <img src="/public/img/image-7.jpg" alt="" className=" h-28 w-28 rounded-full" />
          </div>
          <img src="/public/img/image-6.jpg" alt="" className="h-[650px] w-[400px] rounded-full" />
          <div className="w-full">
            <div className="video-circle relative bottom-28 left-16 flex h-14 w-[200px] items-center rounded-full bg-white">
              <div className="absolute left-16">
                <p className="text-sm font-medium text-black">Start Video Call</p>
                <p className="text-xs font-normal text-black">with Angela Smith</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-1/2 items-center justify-around">
          <div className="w-4/6">
            <div className="mb-12 w-full">
              <h3 className="w-[420px] text-5xl ">It’s possible to do video call with your customers</h3>
            </div>
            <div className="mt-24 w-full ">
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam.”
              </p>
              <div className="mt-5 flex items-center">
                <img src="/public/img/Bitmap-2.jpg" alt="" className="mr-4 h-12 w-12 rounded-full" />
                <div className="flex flex-col justify-center">
                  <h3 className="text-sm font-semibold">Samantha William</h3>
                  <p className="text-xs">Owner of Online Fashion Store</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
