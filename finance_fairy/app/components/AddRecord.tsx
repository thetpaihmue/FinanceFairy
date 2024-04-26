"use client";
import React, { useState } from "react";

const AddRecord = () => {
  const [showModal, setShowModal] = useState(false);
  console.log("AddRecord.tsx");
  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h2 className="text-xl font-bold text-pink-400 text-center">
                    Add a new record
                  </h2>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="relative flex-auto">
                  <div className="relative w-full max-w-2xl">
                    <div className="py-4 px-4 mx-auto max-w-2xl">
                      <form action="#">
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                          <div>
                            <label
                              htmlFor="category"
                              className="block mb-2 text-sm font-medium text-pink-400"
                            >
                              Category
                            </label>
                            <select
                              id="category"
                              className="bg-white border border-gray-300 text-pink-400 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5"
                            >
                              <option selected>Select category</option>
                              <option value="TV">TV/Monitors</option>
                              <option value="PC">PC</option>
                              <option value="GA">Gaming/Console</option>
                              <option value="PH">Phones</option>
                            </select>
                          </div>
                          <div>
                            <label
                              htmlFor="type"
                              className="block mb-2 text-sm font-medium text-pink-400"
                            >
                              Type
                            </label>
                            <select
                              id="type"
                              className="bg-white border border-gray-300 text-pink-400 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5"
                            >
                              <option selected>Select type</option>
                              <option value="TV">TV/Monitors</option>
                              <option value="PC">PC</option>
                              <option value="GA">Gaming/Console</option>
                              <option value="PH">Phones</option>
                            </select>
                          </div>
                          <div>
                            <label
                              htmlFor="category"
                              className="block mb-2 text-sm font-medium text-pink-400"
                            >
                              Date
                            </label>
                            <input
                              type="date"
                              name="date"
                              id="date"
                              className="bg-white border border-gray-300 text-pink-400 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5"
                              required
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="item-weight"
                              className="block mb-2 text-sm font-medium text-pink-400"
                            >
                              Price
                            </label>
                            <input
                              type="text"
                              name="item-weight"
                              id="item-weight"
                              className="bg-white border border-gray-300 text-pink-400 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5"
                              placeholder="000.00"
                              required
                            />
                          </div>
                          <div className="sm:col-span-2">
                            <label
                              htmlFor="description"
                              className="block mb-2 text-sm font-medium text-pink-400"
                            >
                              Description
                            </label>
                            <textarea
                              id="description"
                              rows={1}
                              className="block p-2.5 w-full text-sm text-pink-400 bg-white rounded-lg border border-gray-300 focus:ring-pink-500 focus:border-pink-500"
                              placeholder="Your description here"
                            ></textarea>
                          </div>
                          <div>
                            <input
                              className="mr-2 leading-tight text-gray-300 border-gray-300"
                              type="checkbox"
                            />
                            <span className="text-sm  text-pink-400">
                              This transaction was really necessary!
                            </span>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default AddRecord;
