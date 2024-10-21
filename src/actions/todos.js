"use server";

import { revalidatePath } from "next/cache";

export default async function AddTodo(formData) {
    const todo = formData.get("todo");  // Get the 'todo' field from the form

    try {
        await fetch("http://localhost:3000/api/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ todo }),  // Send the 'todo' to backend
        });

        // Revalidate the page where todos are displayed
        revalidatePath("/");
    } catch (err) {
        console.error(err);
    }
}
