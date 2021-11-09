import "../folders.scss";

const Folder = ({ title, id, push, link, active, activeTodos }) => {
  return (
    <div
      className={`folder ${active ? "folder--active" : ""}`}
      onClick={() => {
        push(link);
        activeTodos(id);
      }}
    >
      <h2 className="folder__title">{title}</h2>
    </div>
  );
};

export default Folder;
