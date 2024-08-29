import { useState } from 'react';

interface CategoryFilterProps {
    categories: string[];
    onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({ categories, onCategoryChange }: CategoryFilterProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        onCategoryChange(category);
    };

    return (
        <div className="filter-buttons space-x-4">
            {categories.map((category) => (
                <button
                    key={category}
                    className={`px-4 py-2 rounded ${
                        selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200'
                    }`}
                    onClick={() => handleCategoryChange(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}
