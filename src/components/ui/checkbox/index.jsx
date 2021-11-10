import "./checkbox.scss";

const Checkbox = ({ completed, changeState, id }) => {
  return (
    <div
      className={`checkbox ${completed ? "checkbox--active" : ""}`}
      onClick={() => {
        changeState(id, completed);
      }}
    >
      <svg
        width="20"
        height="15"
        viewBox="0 0 20 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.79289 14.7054L0.292881 8.16802C-0.097627 7.77527 -0.097627 7.13846 0.292881 6.74567L1.70706 5.32332C2.09757 4.93053 2.73077 4.93053 3.12128 5.32332L7.5 9.72717L16.8787 0.294565C17.2692 -0.0981884 17.9024 -0.0981884 18.2929 0.294565L19.7071 1.71692C20.0976 2.10967 20.0976 2.74648 19.7071 3.13927L8.20711 14.7054C7.81656 15.0982 7.1834 15.0982 6.79289 14.7054Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default Checkbox;
