"use client";

import { useRef } from "react";

export default function TodoForm() {
    const formRef = useRef(null);

    return (
        <form
            ref={formRef}
            // Call the server action directly here without `async`
            action={(formData) => {
                // Call the server-side function to add a todo
                AddTodo(formData);
                formRef.current?.reset();  // Reset form after submission
            }}
            className="flex gap-2 mx-auto w-2/3"
        >
            <input
                className="border-2 mx-auto border-purple-500 flex-grow p-2"
                placeholder="Enter todo here"
                type="text"
                name="todo"  // Ensure 'todo' matches the field in AddTodo
            />
            <input
                type="submit"
                value="Add Todo"
                className="border rounded cursor-pointer bg-purple-200 px-4"
            />
        </form>
    );
}
