import { Combobox, Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { works } from "../../data/works";

const Search = ({ isOpen, setIsOpen }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      const queryRegex = new RegExp(query, "i");
      const result = works.filter((work) => queryRegex.test(work.title));
      setResults(result);
    }
  }, [query]);

  useEffect(() => {
    const handleShortcut = (event) => {
      if (event.key === "q" && (event.metaKey || event.ctrlKey)) {
        setIsOpen(!isOpen);
      }
    };

    window.addEventListener("keydown", handleShortcut);

    return () => {
      window.removeEventListener("keydown", handleShortcut);
    };
  }, []);

  const router = useRouter();

  return (
    <Transition.Root
      appear
      show={isOpen}
      as={Fragment}
      afterLeave={() => {
        setQuery("");
        setResults([]);
      }}
    >
      <Dialog as="div" className="fixed inset-0 overflow-y-auto pt-[25vh] z-40" onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter="duration-300 ease-in-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-300 ease-in-out"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-800/25 backdrop-blur-md " />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-300 ease-in-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-300 ease-in-out"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Combobox
            onChange={(e) => {
              router.push(`/services/${e}`);
              setIsOpen(false);
            }}
            as="div"
            className="relative max-w-xl mx-auto  rounded-md  shadow-2xl ring-2 ring-gray-700/5 bg-white text-gray-700 placeholder-gray-400 text-sm"
          >
            <div className="flex items-center p-3">
              <BiSearchAlt className="h-5 w-5 mr-2 text-gray-700" />
              <Combobox.Input
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent text-md focus:ring-0 border-none p-0 outline-none"
                placeholder="Search..."
              />
              <span className="text-xs rounded-md p-1 bg-gray-200">Esc</span>
            </div>
            {query && results?.length === 0 && (
              <Combobox.Options
                static
                className="absolute mt-2 max-h-60 w-full overflow-y-auto rounded-md bg-white  text-base shadow-lg  ring-opacity-5 focus:outline-none text-md ring-2 ring-gray-700 "
              >
                <Combobox.Option disabled>
                  <div className="py-2 px-4">No Result Found</div>
                </Combobox.Option>
              </Combobox.Options>
            )}
            {results?.length > 0 && (
              <Combobox.Options className="absolute mt-2 max-h-60 w-full overflow-y-auto rounded-md bg-white  text-base shadow-lg  ring-opacity-5 focus:outline-none text-md ring-2 ring-gray-700 ">
                {results?.map((work) => {
                  return (
                    <Combobox.Option key={work.id} value={work.id}>
                      {({ active }) => (
                        <Link href={`/services/${work.id}`}>
                          <a onClick={() => setIsOpen(false)}>
                            <div className={`py-2 px-4 ${active ? "bg-gray-100" : "bg-white"} `}>
                              {work.title}
                            </div>
                          </a>
                        </Link>
                      )}
                    </Combobox.Option>
                  );
                })}
              </Combobox.Options>
            )}
          </Combobox>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};

export default Search;
