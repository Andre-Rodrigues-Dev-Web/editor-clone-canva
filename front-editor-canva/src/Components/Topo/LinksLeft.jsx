import {
  Links,
} from "./style";
import Dropdown from "./Dropdown";

const LinksLeft = () => {
  return (
    <Links>
      <Dropdown
        nameDropDown="Destaques"
        linksDropDown={[
          { name: "Option 1", path: "/option1" },
          { name: "Option 2", path: "/option2" },
          { name: "Option 3", path: "/option3" },
        ]}
      />
      <Dropdown
        nameDropDown="Empresarial"
        linksDropDown={[
          { name: "Option 1", path: "/option1" },
          { name: "Option 2", path: "/option2" },
          { name: "Option 3", path: "/option3" },
        ]}
      />
      <Dropdown
        nameDropDown="Educação"
        linksDropDown={[
          { name: "Option 1", path: "/option1" },
          { name: "Option 2", path: "/option2" },
          { name: "Option 3", path: "/option3" },
        ]}
      />
      <Dropdown
        nameDropDown="Planos e preços"
        linksDropDown={[
          { name: "Option 1", path: "/option1" },
          { name: "Option 2", path: "/option2" },
          { name: "Option 3", path: "/option3" },
        ]}
      />
      <Dropdown
        nameDropDown="Aprenda"
        linksDropDown={[
          { name: "Option 1", path: "/option1" },
          { name: "Option 2", path: "/option2" },
          { name: "Option 3", path: "/option3" },
        ]}
      />
    </Links>
  );
};

export default LinksLeft;
