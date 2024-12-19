const UserDetails = ({ user }) => {
    if (!user) {
        return (
            <div className="flex items-center justify-center h-full text-gray-500">
                Select a user to view details.
            </div>
        );
    }

    return (
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">

            <img
                src={user.avatar}
                alt={`${user.profile.firstName} ${user.profile.lastName}`}
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
            />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 text-center">
                {user.profile.firstName} {user.profile.lastName}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-4">
                {user.profile.email}
            </p>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mb-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Bio:
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{user.Bio}</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Job Title:
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{user.jobTitle}</p>
            </div>
        </div>
    );
};

export default UserDetails;
