import React from "react";
import UserItem from "./UserItem";

export default function UsersList({ items }) {
  if (items.length === 0) {
    return (
      <div className="flex justify-center items-center">
        <h2>No users found!</h2>
      </div>
    );
  }

  return (
    <ul>
      {items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          name={user.name}
          image={user.image}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
}
