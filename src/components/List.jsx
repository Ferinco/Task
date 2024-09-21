import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../redux/usersSlice";
import { SearchInput } from "./Input";
import { PaginatorButton, StatusButton } from "./Button";

export default function ListBox() {
  const [active, setActive] = useState(0);
  const dispatch = useDispatch();
  const { users, isLoading, limit, total, skip, pages } = useSelector(
    (state) => state.users
  );

  //fetch the first 8 user data
  useEffect(() => {
    dispatch(fetchAllUsers({ limit: 8, skip: 0 }));
  }, [dispatch]);

  //
  const paginateData = (skipping) => {
    dispatch(fetchAllUsers({ limit: 8, skip: skipping }));
  };

  const tableHeaders = [
    "UsersName",
    "Company",
    "Phone Number",
    "Email",
    "Country",
    "Status",
  ];

  console.log(pages);
  return (
    <div className="bg-white border border-white w-full grow rounded-3xl overflow-hidden flex flex-col">
      <div className="flex p-3">
        <div>
          <p className="text-black font-semibold text-[22px]">All Users</p>
          <p className="text-sm font-normal text-[#16c098]">Active Members</p>
        </div>
        <SearchInput styles="bg-[#fafbff] ml-auto" />
      </div>
      <table className="w-full">
        <thead className="border-b">
          <tr className="text-left">
            {tableHeaders.map((header, index) => (
              <th className="font-medium text-sm text-[#b5b7c0]" key={index}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={index}
              className="text-sm font-medium text-[#292d32] border-b"
            >
              <td>
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
      </table>
      <div className="flex justify-between mt-auto p-3">
        <p className="text-sm font-medium text-[#B5B7C0]">
          Showing data 1 to 8 of 256k entries
        </p>
        <div className="flex gap-2">
          <PaginatorButton
            tag="<"
            onClick={() => {
              if (skip > 0) {
                paginateData(skip - limit);
                setActive(Math.floor((skip - limit) / limit));
              }
            }}
          />

          {[...Array(pages)].map((page, index) => (
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
