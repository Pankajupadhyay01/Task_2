'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from './component/Loader';
import UserList from './component/UserList';
import UserDetails from './component/UserDetail';
const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          'https://602e7c2c4410730017c50b9d.mockapi.io/users'
        );

        // Update avatar URLs
        const updatedUsers = response.data.map((user) => ({
          ...user,
          avatar: user.avatar.replace(
            'https://cloudflare-ipfs.com/ipfs/',
            'https://gateway.pinata.cloud/ipfs/'
          ),
        }));

        setUsers(updatedUsers);
      } catch (err) {
        setError('Failed to fetch users.');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="h-screen flex bg-gray-100 w-full">
      {loading ? (
        <Loader />
      ) : error ? (
        <div className="flex justify-center items-center w-full text-red-500">
          {error}
        </div>
      ) : users.length === 0 ? (
        <div className="flex justify-center items-center w-full text-gray-500">
          No data to show.
        </div>
      ) : (
        <>
          <div className='w-full flex'>

            {/* Left Sidebar: User List */}
            <div className="w-1/3 h-full border-r border-gray-300 overflow-y-auto">
              <UserList users={users} onSelect={setSelectedUser} />
            </div>

            {/* Right Sidebar: User Details */}
            <div className="w-2/3 h-full p-4">
              <UserDetails user={selectedUser} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
