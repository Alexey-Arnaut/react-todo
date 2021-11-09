import Checkbox from "../../ui/checkbox";

import "../todos.scss";

const Todo = ({ title, completed }) => {
  return (
    <div className="todo">
      <Checkbox completed={completed} />
      <h2 className="todo__title">{title}</h2>
      <div className="todo__buttons">
        <button className="todo__button">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.1964 4.55244L20.4473 10.8035L6.87389 24.3775L1.30079 24.9927C0.554715 25.0752 -0.0756396 24.4444 0.00736604 23.6983L0.627467 18.121L14.1964 4.55244ZM24.3134 3.62176L21.3784 0.686657C20.4629 -0.228886 18.9781 -0.228886 18.0626 0.686657L15.3014 3.44793L21.5522 9.69901L24.3134 6.93774C25.2289 6.02171 25.2289 4.53731 24.3134 3.62176Z"
              fill="#212832"
            />
          </svg>
        </button>
        <button className="todo__button">
          <svg
            width="25"
            height="30"
            viewBox="0 0 25 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.9554 24.375H16.2946C16.4722 24.375 16.6426 24.3009 16.7682 24.1691C16.8937 24.0372 16.9643 23.8584 16.9643 23.6719V11.0156C16.9643 10.8291 16.8937 10.6503 16.7682 10.5184C16.6426 10.3866 16.4722 10.3125 16.2946 10.3125H14.9554C14.7778 10.3125 14.6074 10.3866 14.4818 10.5184C14.3563 10.6503 14.2857 10.8291 14.2857 11.0156V23.6719C14.2857 23.8584 14.3563 24.0372 14.4818 24.1691C14.6074 24.3009 14.7778 24.375 14.9554 24.375ZM24.1071 4.6875H19.5084L17.611 1.36523C17.3729 0.948642 17.0361 0.603921 16.6334 0.364662C16.2307 0.125404 15.7758 -0.000231058 15.3131 3.19011e-07H9.68694C9.22441 -2.86388e-05 8.76975 0.125702 8.36724 0.364951C7.96473 0.6042 7.62808 0.948812 7.39007 1.36523L5.49163 4.6875H0.892857C0.656057 4.6875 0.428955 4.78627 0.261512 4.96209C0.0940686 5.1379 0 5.37636 0 5.625L0 6.5625C0 6.81114 0.0940686 7.0496 0.261512 7.22541C0.428955 7.40123 0.656057 7.5 0.892857 7.5H1.78571V27.1875C1.78571 27.9334 2.06792 28.6488 2.57025 29.1762C3.07258 29.7037 3.75388 30 4.46429 30H20.5357C21.2461 30 21.9274 29.7037 22.4298 29.1762C22.9321 28.6488 23.2143 27.9334 23.2143 27.1875V7.5H24.1071C24.3439 7.5 24.571 7.40123 24.7385 7.22541C24.9059 7.0496 25 6.81114 25 6.5625V5.625C25 5.37636 24.9059 5.1379 24.7385 4.96209C24.571 4.78627 24.3439 4.6875 24.1071 4.6875ZM9.58929 2.98301C9.61913 2.93085 9.66135 2.88773 9.71182 2.85784C9.76229 2.82795 9.81929 2.81233 9.87723 2.8125H15.1228C15.1806 2.81243 15.2375 2.8281 15.2879 2.85798C15.3382 2.88787 15.3804 2.93094 15.4102 2.98301L16.3845 4.6875H8.61551L9.58929 2.98301ZM20.5357 27.1875H4.46429V7.5H20.5357V27.1875ZM8.70536 24.375H10.0446C10.2222 24.375 10.3926 24.3009 10.5182 24.1691C10.6437 24.0372 10.7143 23.8584 10.7143 23.6719V11.0156C10.7143 10.8291 10.6437 10.6503 10.5182 10.5184C10.3926 10.3866 10.2222 10.3125 10.0446 10.3125H8.70536C8.52776 10.3125 8.35743 10.3866 8.23185 10.5184C8.10627 10.6503 8.03571 10.8291 8.03571 11.0156V23.6719C8.03571 23.8584 8.10627 24.0372 8.23185 24.1691C8.35743 24.3009 8.52776 24.375 8.70536 24.375Z"
              fill="#212832"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Todo;
