const UserList = ({ users, onSelect }) => (
    <div className="h-full w-full bg-red-900 overflow-y-auto border-r border-gray-300">
        {users.map((user, index) => (
            <div
                key={index}
                onClick={() => onSelect(user)}
                className="flex items-center gap-4 p-4 cursor-pointer hover:bg-[#00000065] border-b border-gray-200"
            >
                {/* Image on the left */}
                <img
                    src={user.avatar}
                    alt={user.profile.firstName}
                    className="w-12 h-12 rounded-full object-cover"
                />
                {/* Text content on the right */}
                <div className="flex flex-col">
                    <span className="font-medium text-white ">
                        {user.profile.firstName + " " + user.profile.lastName}
                    </span>
                    <span className="text-sm text-gray-200 ">
                        {user.jobTitle}
                    </span>
                    <span className="text-sm text-gray-200 ">
                        {user.profile.lastName}
                    </span>
                </div>
            </div>
        ))}
    </div>
);

export default UserList;
