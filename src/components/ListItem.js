import './ListItem.css';

const ListItem = ({ val, index }) => {
  return <li key={index}>{val}</li>;
};

export default ListItem;
