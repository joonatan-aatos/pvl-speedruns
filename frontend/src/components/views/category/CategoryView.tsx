import { useParams } from "react-router-dom";

const CategoryView = () => {
  const { categoryId } = useParams() as { categoryId: string };
  return <>This category is {categoryId}</>;
};

export default CategoryView;
