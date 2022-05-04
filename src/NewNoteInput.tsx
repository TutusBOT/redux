import React, { useState } from "react";

interface NewNoteInputProps {
	addNote(note: string): void;
}
const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
	const [note, setNote] = useState("");
	return (
		<div>
			<input
				value={note}
				onChange={(e) => {
					setNote(e.target.value);
				}}
				type="text"
				placeholder="Your note"
			/>
			<button
				onClick={() => {
					addNote(note);
					setNote("");
				}}
			>
				Add note
			</button>
		</div>
	);
};

export default NewNoteInput;
