import React from "react";
import UsersList from "../components/UsersList";

export default function Users() {
  const USER = [
    {
      id: "u1",
      name: "Tommy Angelo",
      image:
        "https://i.pinimg.com/originals/ba/d7/38/bad7385947c884aa16349525c52df725.jpg",
      places: 3,
    },
  ];

  return <UsersList items={USER} />;
}
