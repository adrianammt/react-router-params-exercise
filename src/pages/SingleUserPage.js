import { data } from "browserslist";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleUserPage() {
  const { userId } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    const url = `https://reqres.in/api/users/${userId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, [userId]);

  function renderUser() {
    const { data } = user;
    console.log(user);
    return (
      <section>
        <h2>{data?.email}</h2>
        {/* <img src={avatar} alt="name" /> */}
      </section>
    );
  }

  return renderUser();
}
