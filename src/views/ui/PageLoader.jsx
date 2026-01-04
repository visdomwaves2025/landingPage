import React, { createContext, useContext, useState } from 'react';

const PageLoaderContext = createContext({
    isLoading: false,
    setIsLoading: (loading) => { },
});

export const usePageLoader = () => useContext(PageLoaderContext);

export function PageLoaderProvider({ children }) {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <PageLoaderContext.Provider value={{ isLoading, setIsLoading }}>
            {isLoading && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-blue"></div>
                </div>
            )}
            {children}
        </PageLoaderContext.Provider>
    );
}
