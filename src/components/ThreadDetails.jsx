import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchThread } from '../apiService';

const ThreadDetails = () => {
    const { threadId } = useParams();
    const [thread, setThread] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadThread = async () => {
            try {
                const data = await fetchThread(threadId);
                setThread(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        loadThread();
    }, [threadId]);

    if (loading) {
        return <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">Loading...</div>;
    }

    if (error) {
        return <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">Error: {error}</div>;
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
            <div className="bg-neutral-700 p-6 rounded-lg shadow-lg w-full max-w-2xl">
                <h2 className="text-2xl font-bold mb-4">{thread.title}</h2>
                <p>{thread.content}</p>
                {/* Add more thread details here */}
            </div>
        </div>
    );
};

export default ThreadDetails;
