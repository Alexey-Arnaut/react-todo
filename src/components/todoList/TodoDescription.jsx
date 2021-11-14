import Button from "../ui/button";
import Textarea from "../ui/textarea";

const todoDescription = ({ desc, setDesc, addDescription }) => {
  return (
    <div className="todos__form-description">
      <h2 className="todos__form-title">Описание задачи</h2>
      <Textarea name="Добавить описание" value={desc} setValue={setDesc} />
      <Button onClick={addDescription} className="todos__form-button">
        Сохранить
      </Button>
    </div>
  );
};

export default todoDescription;
