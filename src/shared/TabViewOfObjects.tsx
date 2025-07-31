import { Tab } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import Card from "./components/Card";
import { Categories } from "./types/Categories";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface Props {
  categories: Categories;
  createLink: string;
}

export default function TabViewOfObjects({ categories, createLink }: Props) {
  return (
    <Tab.Group>
      <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
        {Object.keys(categories).map((category) => (
          <Tab
            key={category}
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                selected
                  ? "bg-white text-blue-700 shadow"
                  : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            {category}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="mt-2">
        {Object.values(categories).map((posts, idx) => (
          <Tab.Panel
            key={idx}
            className={classNames(
              "rounded-xl bg-white p-3",
              "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            )}
          >
            {idx === 0 ? (
              <ul>
                <Link to={createLink}>
                  <li className="relative rounded-md p-3 hover:bg-gray-100 hover:cursor-pointer">
                    <h3 className="text-md font-medium leading-5 text-blue-600">
                      <FontAwesomeIcon
                        size="sm"
                        className="mr-4"
                        icon={faAdd}
                      />
                      Add A Character
                    </h3>
                  </li>
                </Link>
                {posts.map((post: any) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-gray-100"
                  >
                    <h3 className="text-sm font-medium leading-5">
                      {post.title}
                    </h3>

                    <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                      <li>{post.date}</li>
                    </ul>
                    <a
                      href="#"
                      className={classNames(
                        "absolute inset-0 rounded-md",
                        "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                      )}
                    />
                  </li>
                ))}
              </ul>
            ) : (
              <>
                {idx === 1 ? (
                  <div className="relative rounded-md p-3">
                    <div className="flex flex-wrap gap-4">
                      <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 flex-shrink-0">
                        <Link to={createLink}>
                          <Card
                            img="https://v1.tailwindcss.com/img/card-top.jpg"
                            alt="Sunset in the mountains"
                            description="Add a new Character"
                            title="Add a character"
                          />
                        </Link>
                      </div>
                      {posts.map((post: any) => (
                        <div
                          key={post.id}
                          className="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 flex-shrink-0 p-2"
                        >
                          <Card
                            img={post.img}
                            alt="Sunset in the mountains"
                            description={post.description}
                            title={post.title}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <>Map THIS WILL TAKE A LOT OF WORK</>
                )}
              </>
            )}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}
