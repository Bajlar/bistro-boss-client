import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {
  const { data: users = [], refetch} = useQuery(['users'], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  })

  const handleMakeAdmin = (user) => {
    console.log(user);
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount < 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleDelete = user => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: 'Delete confirm',
      showConfirmButton: false,
      timer: 1500,
    });
  }

  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro Boss | All Users</title>
      </Helmet>
      <h3 className="text-3xl font-semibold my-4">
        Total Users: {users.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="capitalize">Name</th>
              <th className="capitalize">Email</th>
              <th className="capitalize">Role</th>
              <th className="capitalize">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                {/* <td>{user?.name}</td> */}
                <td>{user?.name || user?.displayName}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-ghost bg-[#D1A054] text-white"
                    >
                      <FaUserShield className="text-lg"></FaUserShield>
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-ghost bg-red-600 text-white"
                  >
                    <FaTrashAlt className="text-lg"></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;