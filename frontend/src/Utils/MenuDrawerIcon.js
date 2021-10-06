import {
  Home,
  DirectionsCar,
  Info,
  Garage,
  AccountBox,
  Logout,
  Reviews,
  ImportContacts,
} from "@mui/icons-material";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Base the input argument this function will return an icon
export default function MenuDrawerIcon(menu) {
  switch (menu) {
    case "Home":
      return <Home />;
    case "Inventory":
      return <DirectionsCar />;
    case "About Us":
      return <Info />;
    case "My Garage":
      return <Garage />;
    case "Reviews":
      return <Reviews />;
    case "Videos":
      return <YouTubeIcon />;
    case "News":
      return <ImportContacts />;
    case "My Profile":
      return <AccountBox />;
    case "Logout":
      return <Logout />;
    default:
      break;
  }
}

export function MenuDrawerLinks(menu) {
  switch (menu) {
    case "Home":
      return "/";
    case "Inventory":
      return "/cars";
    case "About Us":
      return "/about";
    case "Videos":
      return "/videos";
    case "My Garage":
      return "/";
    case "My Profile":
      return "/";
    case "Logout":
      return "/";
    default:
      break;
  }
}
