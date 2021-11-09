import Folder from "./folder";

import "./folders.scss";

const FolderList = () => {
  const folders = [
    {
      title: "Папка 1",
    },
    {
      title: "Папка 2",
    },
    {
      title: "Папка 3",
    },
  ];

  return (
    <div className="folders">
      <Folder title="Задачи" />
      {folders.map((folder, index) => (
        <Folder key={index} {...folder} />
      ))}
    </div>
  );
};

export default FolderList;
