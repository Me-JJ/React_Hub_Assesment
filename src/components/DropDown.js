import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { ArrowDownIcon } from "@heroicons/react/24/outline";

export function DropDown({ title, list }) {
  return (
    <Menu>
      <MenuHandler>
        <Button variant="text" className="flex items-center gap-2">
          {title} <ArrowDownIcon className="h-4 w-4 text-gray-500" />
        </Button>
      </MenuHandler>
      <MenuList>
        {list.map((item, index) => {
          return <MenuItem key={index}>{item}</MenuItem>;
        })}
      </MenuList>
    </Menu>
  );
}
