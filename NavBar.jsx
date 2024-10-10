import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailIcon from "@mui/icons-material/Mail";

function NavBar() {
  const icons = [
    { icon: <HomeIcon fontSize="small" />, label: "Home" },
    { icon: <PersonIcon fontSize="small" />, label: "Profile" },
    { icon: <NotificationsIcon fontSize="small" />, label: "Notifications" },
    { icon: <MailIcon fontSize="small" />, label: "Messages" },
    { icon: <SettingsIcon fontSize="small" />, label: "Settings" },
  ];

  return (
    <AppBar position="static" style={{ backgroundColor: "rgb(48, 190, 245)" }}>
      <Toolbar style={{ minHeight: "35px", padding: 0 }}>
        <img
          src="https://cdns.apptivo.com/res/v1.1/war/images/apptivo_clear_logo_106x35.png"
          alt="Apptivo Logo"
          style={{ height: "28px" }} 
        />
        <div
          style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}
        >
          {icons.map(({ icon, label }, index) => (
            <IconButton
              key={index}
              title={label}
              className="icon-button" 
              style={{
                color: "white",
                padding: "0 6px",
                borderRadius: "5px",
                minHeight: "28px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {icon}
              <Typography
                variant="caption"
                style={{ marginLeft: "2px", fontSize: "10px" }}
              >
                {label}
              </Typography>
            </IconButton>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
