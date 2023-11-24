import Button from "../Button";
import "./listItem.scss";

const ListItem = ({ index, heading, description, onEdit, onDelete }) => {
  return (
    <div className="item-container">
      <div className="content-container">
        <span>{index + 1}.</span>
        <div className="details">
          <h5>{heading}</h5>
          <p>{description}</p>
        </div>
      </div>

      <div className="actions-container">
        <Button
          onClick={() =>
            onEdit({
              heading,
              description,
              index,
            })
          }
        >
          Edit
        </Button>
        <Button onClick={() => onDelete(index)}>Delete</Button>
      </div>
    </div>
  );
};

export default ListItem;
