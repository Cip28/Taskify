interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e:React.FormEvent) => void
}

const InputField = ({ todo, setTodo,handleAdd }: Props) => {
  return (
    <div className="input__field">
      <h1 className="input__title">TAKE ACTION</h1>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Enter a task..."
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button type="submit" className="input__btn" >
          ADD
        </button>
      </form>
    </div>
  );
};

export default InputField;
