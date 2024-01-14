import { useState } from "react";
import { ListTodo } from "lucide-react";
function App() {
  const names = ["Soham", "Sohini", "Saptaswa", "Dumb"];
  const [work, setWork] = useState("");
  const [todos, setTodos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(false); //modal off
    setTodos([...todos, work]);
  };
  const handleDelete = (item) => {
    const newTodos = todos.filter((work) => work !== item);
    setTodos([...newTodos]);
  };
  return (
    <div className=" relative flex flex-col w-full h-full max-w-3xl mx-auto p-6 gap-2">
      <h1 className="uppercase font-semibold text-center text-2xl">
        Things to Do
      </h1>
      {showModal === true && (
        <div className="absolute bg-white top-16 inset-x-0 bg-whtie w-full border p-4 rounded-md  mx-auto min-h-fit z-50">
          <div className="flex justify-end w-full">
            <button
              onClick={() => setShowModal(false)}
              className="text-lg text-lg font-bold"
            >
              X
            </button>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <h1 className="text-2xl">Add Work</h1>
            <input
              className="text-xl w-full w-2/3 outline-none p-2 px-4 rounded-md border"
              onChange={(e) => setWork(e.target.value)}
            />
            <button
              type="submit"
              className="text-lg w-full border rounded-lg p-2 font-bold bg-cyan-600 text-white"
            >
              Submit
            </button>
          </form>
        </div>
      )}
      <div className="flex w-full justify-end px-20">
        <button
          onClick={() => setShowModal(true)}
          className="text-4xl px-2 pb-1 border w-fit rounded-md flex items-center"
        >
          +
        </button>
      </div>
      <form className="w-full h-full mx-auto flex flex-col gap-4 w-2/3">
        <div className="relative w-fit mx-auto">
          <ListTodo className="absolute left-2 inset-y-2" />
          <input
            className="text-lg px-12 py-2 border rounded-md outline-none "
            placeholder="Add New"
          />
          <div className="flex flex-col gap-4 mt-4 ">
            {todos &&
              todos.map((item, i) => (
                <div
                  key={i}
                  className="p-2 border shadow flex flex-col w-full h-full"
                  // onClick={handleDelete(item)}
                  onClick={() => handleDelete(item)}
                >
                  {item}
                </div>
              ))}
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
