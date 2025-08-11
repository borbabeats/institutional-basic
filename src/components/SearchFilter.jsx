// SearchFilter component for Astro with search functionality
'use client';

import { useState, useEffect } from 'react';

const SearchFilter = ({ onSearch, initialValue = '' }) => {
    const [searchTerm, setSearchTerm] = useState(initialValue);
    
    // Update local state when initialValue changes
    useEffect(() => {
        setSearchTerm(initialValue);
    }, [initialValue]);
    
    // Handle input change with debounce
    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        
        // Call the onSearch callback with the current search term
        // Using a small timeout to debounce the search
        if (onSearch && typeof onSearch === 'function') {
            clearTimeout(window.searchDebounce);
            window.searchDebounce = setTimeout(() => {
                onSearch(value);
            }, 300); // 300ms debounce
        }
    };

    return (
        <div style={{
            margin: '20px 0',
            padding: '20px',
            background: '#f8f9fa',
            borderRadius: '8px',
            border: '1px solid #dee2e6',
            maxWidth: '600px',
            margin: '0 auto 20px auto'
        }}>
            <input 
                type="text"
                placeholder="Buscar posts..."
                value={searchTerm}
                onChange={handleInputChange}
                style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: '16px',
                    border: '1px solid #ced4da',
                    borderRadius: '4px',
                    boxSizing: 'border-box',
                    outline: 'none',
                    transition: 'border-color 0.3s ease'
                }}
            />
        </div>
    );
}

export default SearchFilter;