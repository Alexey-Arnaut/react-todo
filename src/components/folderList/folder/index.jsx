import "../folders.scss";

const Folder = ({ title }) => {
  return (
    <div className="folder">
      <h2 className="folder__title">{title}</h2>
    </div>
  );
};

export default Folder;
