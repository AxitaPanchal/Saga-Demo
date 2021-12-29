import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../Redux/Action";
import { Input, Card , Empty } from "antd";

const Home = () => {
  const { Search } = Input;
  const { Meta } = Card;
  const dispatch = useDispatch();
  const usersStore = useSelector((state) => state.users);
  const { users } = usersStore;
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) =>
        user.username.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, users]);

  return (
    <>
      <Search
        placeholder="input search text"
        onChange={(e) => setSearch(e.target.value)}
        size="middle"
        style={{ width: "25%", marginTop: "20px"}}
        allowClear
      />
      {
        <div style={{ marginTop: "20px" }}>
          <ul style={{ display: "flex", flexWrap: "wrap" }}>
            {filteredUsers.length && filteredUsers ? filteredUsers.map((user) => (
              <div>
                <Card
                  hoverable
                  style={{ width: 240, margin: "10px", padding: "10px" }}
                  bordered={false}
                  cover={
                    <img
                      alt="example"
                      src="https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729512__340.jpg"
                    />
                  }
                >
                  <Meta title={user.username} description={user.description} />
                </Card>
              </div>
            )) : <Empty style={{justifyItems:'center',alignItems:'center'}}/>}
          </ul>
        </div>
      }
    </>
  );
};

export default Home;
