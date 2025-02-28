
function App() {

  return (
    <>
      <header>
        <h1 className="text-7xl text-center font-bold text-rose-800 font-paintbrush m-10">To-Do List</h1>
      </header>
      <main>
        <form className="flex justify-center">

          <input type="text" placeholder="Insert task" className="
          block bg-rose-300 border-rose-800 border-[3px] border-r-0 rounded-r-none rounded-2xl font-bold text-2xl placeholder:text-center placeholder:text-white text-rose-800 text-center w-60 focus:outline-none focus:border-rose-800 focus:animate-fade"
          />

          <input id="submit" type="submit" className="
          text-white font-bold bg-rose-800 border-[3px] border-rose-800 border-l-0 rounded-l-none rounded-2xl w-40 active:bg-rose-400 active:text-rose-800 active:border-white"
          value="Submit"
          />

        </form>
      </main>
      <footer>
      </footer>
    </>
  )
}

export default App
