import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Account = (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await axios.get(`https://api.github.com/users/${props.user}`);
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };

        fetchUserDetails();
    }, [props.user]);

    if (!user) {
        return <div>Loading...</div>;
    }

    const {
        avatar_url,
        login,
        name,
        public_repos,
        public_gists,
        created_at,
    } = user;

    return (
        <div className='grid place-content-center w-[100%]'>
            <div className="max-w-md mx-auto bg-slate-900 rounded p-8   shadow-md">
                <div className="flex justify-center mb-6">
                    <img
                        src={avatar_url}
                        alt="User Avatar"
                        className="w-16 h-16 rounded-full"
                    />
                </div>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-600">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={login}
                            readOnly
                            className="mt-1 text-black p-2 border border-gray-300 rounded w-full bg-gray-100"
                        />
                    </div>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name || 'N/A'}
                            readOnly
                            className="mt-1 text-black p-2 border border-gray-300 rounded w-full bg-gray-100"
                        />
                    </div>
                    <div>
                        <label htmlFor="publicRepos" className="block text-sm font-medium text-gray-600">No. of Public Repos</label>
                        <input
                            type="text"
                            id="publicRepos"
                            name="publicRepos"
                            value={public_repos || 0}
                            readOnly
                            className="mt-1 p-2 text-black border border-gray-300 rounded w-full bg-gray-100"
                        />
                    </div>
                    <div>
                        <label htmlFor="publicGists" className="block text-sm font-medium text-gray-600">No. of Public Gists</label>
                        <input
                            type="text"
                            id="publicGists"
                            name="publicGists"
                            value={public_gists || 0}
                            readOnly
                            className="mt-1 p-2 text-black border border-gray-300 rounded w-full bg-gray-100"
                        />
                    </div>
                    <div>
                        <label htmlFor="createdAt" className="block text-sm font-medium text-gray-600">Profile Created At</label>
                        <input
                            type="text"
                            id="createdAt"
                            name="createdAt"
                            value={new Date(created_at).toISOString().split('T')[0]}
                            readOnly
                            className="mt-1 p-2 text-black border border-gray-300 rounded w-full bg-gray-100"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Account;
