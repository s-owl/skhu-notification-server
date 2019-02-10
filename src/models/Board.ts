import mongoose from "mongoose";

export type BoardModel = mongoose.Document & {
  title: string,
  description: string,
  contents: string,
};

const boardSchema = new mongoose.Schema({
  title: { type: String, unique: true },
  description: String,
  contents: String,
}, { timestamps: true });

// export const User: UserType = mongoose.model<UserType>('User', userSchema);
const Board = mongoose.model("Board", boardSchema);
export default Board;
