import React, { useState, useEffect } from 'react';
import { fetchThreads, deleteThread } from '../apiService';
// import { Link } from 'react-router-dom';
import image from './images/email.png'

export default function Onebox(){
    // const [threads, setThreads] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     const loadThreads = async () => {
    //         try {
    //             const data = await fetchThreads();
    //             setThreads(data);
    //         } catch (error) {
    //             setError(error.message);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     loadThreads();
    // }, []);

    // const handleDelete = async (threadId) => {
    //     try {
    //         await deleteThread(threadId);
    //         setThreads(threads.filter(thread => thread.id !== threadId));
    //     } catch (error) {
    //         console.error('Failed to delete thread:', error);
    //     }
    // };

    // if (loading) {
    //     return <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">Loading...</div>;
    // }

    // if (error) {
    //     return <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">Error: {error}</div>;
    // }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
            <div className="text-center mb-8">
                <img src={image} alt="Email illustration" className=" size-40 mx-auto mb-6" />
                <h1 className="text-3xl font-bold mb-4">It's the beginning of a legendary sales pipeline</h1>
                <p>When you have inbound E-mails you'll see them here</p>
            </div>
            {/* <div className="w-full max-w-4xl">
                <ul>
                    {threads.map(thread => (
                        <li key={thread.id} className="bg-neutral-700 p-4 mb-4 rounded-lg flex justify-between items-center">
                            <Link to={`/thread/${thread.id}`} className="flex-grow text-left">{thread.title}</Link>
                            <button
                                className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded-lg"
                                onClick={() => handleDelete(thread.id)}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div> */}
        </div>
    );
};
