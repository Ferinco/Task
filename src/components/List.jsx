import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../redux/usersSlice";
import { SearchInput } from "./resusables/Input";
import { PaginatorButton, StatusButton } from "./resusables/Button";
import { SelectField } from "./resusables/Select";
import { Loader } from "./resusables/Loader";

export default function ListBox() {
  const [active, setActive] = useState(0);
  const dispatch = useDispatch();
  const { users, isLoading, limit, total, skip, pages } = useSelector(
    (state) => state.users
  );

  //fetch users
  useEffect(() => {
    dispatch(fetchAllUsers({ limit: 8, skip: 0 }));
  }, [dispatch]);


  const paginateData = (skipping) => {
    dispatch(fetchAllUsers({ limit: 8, skip: skipping }));
  };

  const tableHeaders = [
    "Users Name",
    "Company",
    "Phone Number",
    "Email",
    "Country",
    "Status",
  ];

  return (
    <div className="bg-white border border-white w-full h-fit rounded-3xl overflow-hidden flex flex-col gap-10 p-4 sm:p-6 2xl:p-9">
      <div className="flex flex-col md:flex-row md:items-center gap-3">
        <div>
          <p className="text-black font-semibold text-[22px]">All Users</p>
          <p className="text-sm font-normal text-[#16c098]">Active Members</p>
        </div>
        <div className="md:ml-auto flex flex-col xs:flex-row gap-3">
          <SearchInput styles="bg-[#fafbff]" size="placeholder:text-xs" />
          <SelectField />
        </div>
      </div>
      <div className="overflow-x-auto xl:overflow-x-hidden">
        <table className="w-full relative min-w-[1100px]  md:min-w-[900px] min-h-[500px]">
          <thead className="">
            <tr className="text-left">
              {tableHeaders.map((header, index) => (
                <th className="font-medium text-sm text-[#b5b7c0]" key={index}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          {isLoading ? (
            <div className="flex justify-center absolute grow w-full mt-[20%]">
                <Loader />

            </div>
          ) : (
            <tbody className="p-3">
              {users.map((user, index) => (
                <tr
                  key={index}
                  className="text-sm font-medium text-[#292d32] border-b"
                >
                  <td className="py-5">
                    {user.firstName} {user.lastName}
                  </td>
                  <td>{user.company.name}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                  <td>{user.address.country}</td>
                  <td>
                    {" "}
                    <StatusButton
                      active={index === 1 || index === 2 || index === 7}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          )}
          <div className="absolute top-0 bg-transparent inset-x-0 -ml-4 -mr-4 border-b mt-6"></div>
        </table>
      </div>
      <div className="flex flex-col gap-4 md:flex-row items-end md:items-center md:justify-between">
        <p className="text-sm font-medium text-[#B5B7C0]">
          Showing data 1 to 8 of {total} entries
        </p>
        <div className="flex gap-3">
          <PaginatorButton
            tag="<"
            onClick={() => {
              if (skip > 0) {
                paginateData(skip - limit);
                setActive(Math.floor((skip - limit) / limit));
              }
            }}
          />

          {[...Array(Math.min(pages, 4))].map((_, index) => (
            <PaginatorButton
              tag={index + 1}
              active={index === active}
              key={index}
              onClick={() => {
                paginateData(index * limit);
                setActive(index);
              }}
            />
          ))}

          {pages > 5 && active < pages - 5 && <span>...</span>}

          {pages > 5 && (
            <PaginatorButton
              tag={pages}
              active={active === pages - 1}
              key={pages}
              onClick={() => {
                paginateData((pages - 1) * limit);
                setActive(pages - 1);
              }}
            />
          )}

          <PaginatorButton
            tag=">"
            onClick={() => {
              if (skip + limit < total) {
                paginateData(skip + limit);
                setActive(Math.floor((skip + limit) / limit));
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
