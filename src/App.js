import "./App.css";

function App() {
  return (
    <div className="bg-red-200 p-2">
      <div className="bg-slate-200 rounded-lg">
        <div className="h-screen w-5/6 max-w-screen-lg mx-auto ssm:p-4 xxs:p-0 flex flex-col border-2 border-black">
          <header className="h-28 border-2 border-black flex">
            <div className="w-16 h-16 flex justify-center items-center rounded-full hover:bg-violet-400 active:bg-violet-600 border-2 mr-auto mt-auto mb-auto shadow-xl shadow-black">
              <h1 className="italic font-bold text-3xl">LH</h1>
            </div>

            <nav className="flex justify-center items-center">
              <div className="">
                <ul className="flex">
                  <li className="m-2 ssm:text-3xl xxs:text-xs">About</li>
                  <li className="m-2 ssm:text-3xl xxs:text-xs">Uses</li>
                  <li className="m-2 ssm:text-3xl xxs:text-xs">Contact</li>
                </ul>
              </div>
            </nav>
          </header>
          <main className="h-full border-2 border-black">
            <h1>this is main</h1>
            <div className="w-24 border-2 border-black mr-auto">
              <img
                className="rounded-full"
                src="https://www.lifesizecutouts.com.au/media/catalog/product/cache/2/image/650x650/9df78eab33525d08d6e5fb8d27136e95/d/o/donald-trump-002-bh.jpg"
                alt="img"
              />
            </div>
          </main>
          <footer className=" h-60 border-2 border-black bg-amber-100	background-color: rgb(254 243 199);">
            <h1>this is footer</h1>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
