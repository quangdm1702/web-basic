import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";


// Define the Todo interface
interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}


const AxiosDemo: React.FC = () => {
  const { t } = useTranslation(); // Hook to get the translation function
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 3;


  // Paginate the todos
  const indexOfLastTodo = currentPage * itemsPerPage;
  const indexOfFirstTodo = indexOfLastTodo - itemsPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);


  // Handle pagination change
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);


  useEffect(() => {
    // Fetch data from the API when the component mounts
    axios
      .get("https://dummyjson.com/todos")
      .then((response) => {
        setTodos(response.data.todos); // Store the todos in state
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
        setLoading(false);
      });
  }, []);


  // Calculate total pages
  const totalPages = Math.ceil(todos.length / itemsPerPage);


  return (
    <div className="bg-blue-100 w-96 rounded-sm shadow-sm p-4 flex flex-col">
      {/* Pagination Controls at the Top */}
      {loading ? (
        <p>{t("axios.demo.loading")}...</p>
      ) : (
        <>
          <div className="flex justify-between mb-4">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="bg-blue-500 text-white p-2 rounded disabled:opacity-50"
            >
              {t("axios.demo.previous")}
            </button>
            <span className="self-center text-lg">{`${currentPage}/${totalPages}`}</span>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={indexOfLastTodo >= todos.length}
              className="bg-blue-500 text-white p-2 rounded disabled:opacity-50"
            >
              {t("axios.demo.next")}
            </button>
          </div>


          <div className="space-y-4">
          {currentTodos.map((todo) => (
              <div
                key={todo.id}
                className="bg-white rounded-lg shadow-lg p-4 flex items-center justify-between"
                style={{ width: "100%", height: "100px" }} // Unify card size (same width & height)
              >
                <div className="flex-1">
                  <h3
                    className={`text-lg font-bold ${
                      todo.completed ? "line-through text-gray-500" : ""
                    }`}
                  >
                    {todo.todo}
                  </h3>
                </div>
                {/* Icons for completed and not completed */}
                {todo.completed ? (
                  <span className="text-green-500">✔️</span>
                ) : (
                  <span className="text-red-500">❌</span>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};


export default AxiosDemo;


