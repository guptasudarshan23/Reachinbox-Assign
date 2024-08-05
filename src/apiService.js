// src/apiService.js

const API_BASE_URL = 'https://documenter.getpostman.com/view/30630244/2sA2rCTMKr#433eb613-e405-4239-9e2d-f20485b31b27'; // Replace with your actual API base URL from the documentation

// Function to fetch the list of threads
export const fetchThreads = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/onebox/list`);
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching threads:', error);
        throw new Error(`Error fetching threads: ${error.message}`);
    }
};

// Function to fetch a specific thread by ID
export const fetchThread = async (threadId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/onebox/${threadId}`);
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching thread:', error);
        throw new Error(`Error fetching thread: ${error.message}`);
    }
};

// Function to delete a specific thread by ID
export const deleteThread = async (threadId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/onebox/${threadId}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText);
        }
        return true;
    } catch (error) {
        console.error('Error deleting thread:', error);
        throw new Error(`Error deleting thread: ${error.message}`);
    }
};
