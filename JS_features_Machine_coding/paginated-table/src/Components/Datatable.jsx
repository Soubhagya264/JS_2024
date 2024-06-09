import { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { DataContext } from "./context/DataContext";
/*eslint-disable*/

export function Datatable() {
  const { data, addData } = useContext(DataContext);
  const [editId, setEditId] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const outSideClick = useRef(false);

  const itemsPerPage = 5;
  const Lastitem = currentPage * itemsPerPage;
  const indexOfFirstItem = Lastitem - itemsPerPage;
  const filteredData = data
    .filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(indexOfFirstItem, Lastitem);

  const handleEdit = (id, updatedData) => {
    if (!editId || editId !== id) {
      return;
    }
    const updatedList = data.map((item) =>
      item.id === id ? { ...item, ...updatedData } : item
    );
    addData(updatedList);
  };

  useEffect(() => {
    if (!editId) return;
    let selectedItem = document.querySelectorAll(`[id='${editId}']`);
    selectedItem[0].focus();
  }, [editId]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        outSideClick.current &&
        !outSideClick.current.contains(event.target)
      ) {
        setEditId(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <>
      <div className="flex w-max items-center m-auto justify-center space-x-2 md:w-1/3 mt-5">
        <input
          className="w-max h-10 w rounded-md border border-white/50 bg-transparent px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearch}
        ></input>
        <button
          type="button"
          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Search
        </button>
      </div>
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0"></div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table
                  className="min-w-full divide-y divide-gray-200"
                  ref={outSideClick}
                >
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        <span>Employee</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Title
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Status
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Role
                      </th>
                      <th scope="col" className="relative px-4 py-3.5">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {filteredData?.map((person) => (
                      <tr key={person?.name}>
                        <td
                          id={person?.id}
                          contentEditable={editId === person?.id}
                          className="whitespace-nowrap px-4 py-4"
                          onBlur={(e) =>
                            handleEdit(item.id, { name: e.target.innerText })
                          }
                        >
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full object-cover"
                                src={person?.image}
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div
                                className="text-sm font-medium text-gray-900"
                                contentEditable={editId === person?.id}
                                onBlur={(e) =>
                                  handleEdit(person?.id, {
                                    name: e.target.innerText,
                                  })
                                }
                              >
                                {person?.name}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          id={person?.id}
                          contentEditable={editId === person?.id}
                          className="whitespace-nowrap px-12 py-4"
                          onBlur={(e) =>
                            handleEdit(person?.id, {
                              title: e.target.innerText,
                            })
                          }
                        >
                          <div className="text-sm text-gray-900 ">
                            {person?.title}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                            Active
                          </span>
                        </td>
                        <td
                          id={person?.id}
                          contentEditable={editId === person?.id}
                          className="whitespace-nowrap px-4 py-4 text-sm text-gray-700"
                          onBlur={(e) =>
                            handleEdit(person?.id, { role: e.target.innerText })
                          }
                        >
                          {person?.role}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                          <a
                            href="#"
                            className="text-gray-700 border border-gray-500 px-2 py-1.5 hover:bg-orange-400  hover:transition ease-in-out delay-100"
                            onClick={() => setEditId(person?.id)}
                          >
                            Edit
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center pt-6">
          {Array.from(
            { length: Math.ceil(data.length / itemsPerPage) },
            () => (_, index) => {
              return (
                <>
                  <a
                    key={index - 1 > 0 && index - 1}
                    href="#"
                    className="mx-1 cursor-not-allowed text-sm font-semibold "
                  >
                    <span className="hidden lg:block">&larr; Previous</span>
                    <span className="block lg:hidden">&larr;</span>
                  </a>
                  <button
                    key={index + 1}
                    href="#"
                    className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1  hover:scale-105"
                  >
                    {index + 1}1
                  </button>
                  <a
                    key={index + 1}
                    href="#"
                    className="mx-2 text-sm font-semibold "
                  >
                    <span className="hidden lg:block">Next &rarr;</span>
                    <span className="block lg:hidden">&rarr;</span>
                  </a>
                </>
              );
            }
          )}
        </div>
      </section>
    </>
  );
}
